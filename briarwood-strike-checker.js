// Briarwood strike checker (build step 4, v1, October 23, 2026)
// Plain JavaScript, no dependencies. Runs in node for testing; the same logic is
// what a scheduled pass executes over listed cards and their act records.
//
// The rule it applies (specification section 5 + Addenda 1 and 2, ruled Oct 21):
//   A strike is a verified receipt showing the member acted outside its OWN
//   declared scope, time, or cost. Three strikes and the catalog stops pointing.
//   An accusation without a receipt is not a strike. One act makes at most ONE
//   strike, classified by the first failed term in the order scope, time, cost.
//   A strike rests only on the member's own act record, or one the member
//   counter-signed or acknowledged. A card with no verification key named takes
//   no strikes, for or against. The act is judged against the card version whose
//   listing interval contains the act's witnessed time.
//
// Boundaries, stated in the open:
//   This checker does not verify receipts itself. Its input carries the result
//   of receipt verification (the popcorn_verify_v2 discipline): accepted or not,
//   the witnessed interval, and the digest witnessed. The checker confirms the
//   digest matches the act record's canonical bytes and applies the rule.
//   A term that is not stated in machine-checkable form cannot produce a strike;
//   the checker names such terms in its output instead of guessing at them.

import { createHash } from "node:crypto";

export function canonicalize(value) {
  if (value === null || typeof value !== "object") return JSON.stringify(value);
  if (Array.isArray(value)) return "[" + value.map(canonicalize).join(",") + "]";
  const keys = Object.keys(value).sort();
  return "{" + keys.map((k) => JSON.stringify(k) + ":" + canonicalize(value[k])).join(",") + "}";
}

export function digestOf(value) {
  return createHash("sha256").update(canonicalize(value), "utf8").digest("hex");
}

function normText(s) {
  return String(s || "").toLowerCase().replace(/\s+/g, " ").trim();
}

// Scope: the act's scope words must sit inside the card's declared scope words.
// (v1 mechanical reading of free-word declarations: containment, normalized.)
function scopeFails(cardScope, actScope) {
  const card = normText(cardScope);
  const act = normText(actScope);
  if (!act) return true; // an act that declares no scope is outside any scope
  return !card.includes(act);
}

// Parses an ISO interval out of a time declaration, if one is stated:
// accepts "YYYY-MM-DD/YYYY-MM-DD" or a single "YYYY-MM-DD" (that whole day).
function parseInterval(text) {
  const m = String(text || "").match(/(\d{4}-\d{2}-\d{2})(?:[T ](\d{2}:\d{2}(?::\d{2})?)?(?:Z|[+-]\d{2}:?\d{2})?)?/g);
  if (!m || m.length === 0) return null;
  const start = new Date(m[0].length === 10 ? m[0] + "T00:00:00Z" : m[0]);
  if (isNaN(start)) return null;
  let end;
  if (m.length > 1) {
    const raw = m[1];
    end = new Date(raw.length === 10 ? raw + "T23:59:59Z" : raw);
  } else {
    end = new Date(start.getTime() + 24 * 60 * 60 * 1000 - 1000);
  }
  if (isNaN(end)) return null;
  return { start, end };
}

// Time: checkable only when the card's time declaration states an ISO window.
// The witnessed interval (from the receipt) must lie inside it.
function timeCheck(cardTime, witnessed) {
  const win = parseInterval(cardTime);
  if (!win) return { checkable: false, fails: false };
  const s = new Date(witnessed.start), e = new Date(witnessed.end);
  return { checkable: true, fails: s < win.start || e > win.end };
}

function parseAmount(text) {
  const t = normText(text);
  if (/\bfree\b/.test(t) || t === "0" || /\bno charge\b/.test(t)) return 0;
  const m = t.replace(/,/g, "").match(/(\d+(?:\.\d+)?)/);
  return m ? parseFloat(m[1]) : null;
}

// Cost: checkable when both sides state an amount. Over the declared amount fails.
function costCheck(cardCost, actCost) {
  const cap = parseAmount(cardCost);
  const charged = parseAmount(actCost);
  if (cap === null || charged === null) return { checkable: false, fails: false };
  return { checkable: true, fails: charged > cap };
}

// Judges one act record. Input shape:
//   { record: {card_address, card_digest, act: {scope, time, cost}, counterparty},
//     receipt: {accepted, digest, interval: {start, end}},
//     member_ack: true|false }
// cardVersions: [{digest, card, listed_from, listed_until|null}] where card is the
// submitted card object (name, offer, address, terms{...}, how_checked,
// verification_key optional).
export function judgeAct(input, cardVersions) {
  const { record, receipt, member_ack } = input;
  const actDigest = digestOf(record);

  if (!receipt || receipt.accepted !== true || receipt.digest !== actDigest) {
    return { outcome: "unverified", act_digest: actDigest, strike: false };
  }
  if (member_ack !== true) {
    return { outcome: "allegation", act_digest: actDigest, strike: false,
             note: "not the member's own record and not acknowledged by the member; an accusation is not a strike" };
  }
  const t = new Date(receipt.interval.start).getTime();
  const version = (cardVersions || []).find((v) =>
    new Date(v.listed_from).getTime() <= t &&
    (v.listed_until === null || t < new Date(v.listed_until).getTime()));
  if (!version) {
    return { outcome: "no_listed_version", act_digest: actDigest, strike: false,
             note: "no listed card version covers the witnessed time" };
  }
  if (version.digest !== record.card_digest) {
    return { outcome: "version_mismatch", act_digest: actDigest, strike: false,
             note: "the act names a card digest other than the version in force at the witnessed time" };
  }
  const card = version.card;
  if (!card.verification_key) {
    return { outcome: "no_key_on_card", act_digest: actDigest, strike: false,
             note: "the card names no verification key; no strikes for or against this member" };
  }

  const terms = card.terms || {};
  const notCheckable = [];
  if (scopeFails(terms.scope, record.act.scope)) {
    return { outcome: "strike", strike: true, class: "scope", act_digest: actDigest, card_digest: version.digest };
  }
  const tc = timeCheck(terms.time, receipt.interval);
  if (!tc.checkable) notCheckable.push("time");
  if (tc.fails) {
    return { outcome: "strike", strike: true, class: "time", act_digest: actDigest, card_digest: version.digest };
  }
  const cc = costCheck(terms.cost, record.act.cost);
  if (!cc.checkable) notCheckable.push("cost");
  if (cc.fails) {
    return { outcome: "strike", strike: true, class: "cost", act_digest: actDigest, card_digest: version.digest };
  }
  const out = { outcome: "within_terms", strike: false, act_digest: actDigest, card_digest: version.digest };
  if (notCheckable.length) out.terms_not_machine_checkable = notCheckable;
  return out;
}

// One mechanical pass over a set of act records for one member.
// Returns the per-act verdicts, the strike list, and whether the pointer falls.
export function runPass(cardVersions, actInputs) {
  const verdicts = actInputs.map((a) => judgeAct(a, cardVersions));
  const strikes = verdicts.filter((v) => v.strike);
  return {
    verdicts,
    strikes,
    strike_count: strikes.length,
    pointer_falls: strikes.length >= 3,
    pointer_change: strikes.length >= 3
      ? { action: "stop_pointing", strikes: strikes.map((s) => s.act_digest),
          note: "publish as a commit with the receipts that caused it attached as evidence" }
      : null,
  };
}

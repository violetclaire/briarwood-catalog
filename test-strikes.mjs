import { runPass, judgeAct, digestOf } from '/home/hatch/workspace/goals/build-briarwood-the-estate-registry/files/briarwood-strike-checker.js';
const card = { name: "Fixture Press", offer: "fixture verification", address: "https://example.org/fixture-press/card.json",
  terms: { scope: "fixture verification of record texts", time: "2026-01-01/2026-12-31", cost: "up to $10 per check", consequences: "none", decision: "the requester decides" },
  how_checked: "receipt route named in the card", verification_key: "ed25519:fixturekey" };
const cardDigest = digestOf(card);
const versions = [{ digest: cardDigest, card, listed_from: "2026-01-01T00:00:00Z", listed_until: null }];
const noKeyCard = { ...card, verification_key: undefined };
const noKeyDigest = digestOf(noKeyCard);
const noKeyVersions = [{ digest: noKeyDigest, card: noKeyCard, listed_from: "2026-01-01T00:00:00Z", listed_until: null }];
function act(over = {}, cardD = cardDigest) {
  const record = { card_address: card.address, card_digest: cardD,
    act: { scope: "fixture verification of record texts", time: "2026-06-01", cost: "$5", ...over }, counterparty: "fixture-counterparty" };
  return { record, receipt: { accepted: true, digest: digestOf(record), interval: { start: "2026-06-01T10:00:00Z", end: "2026-06-01T10:05:00Z" } }, member_ack: true };
}
let a;
a = judgeAct(act(), versions); console.log("A within terms:", a.outcome, "| strike:", a.strike);
a = judgeAct(act({ cost: "$25" }), versions); console.log("B cost over:", a.outcome, "| class:", a.class);
a = judgeAct(act({ scope: "selling fixture data", cost: "$25" }), versions); console.log("C scope+cost bad:", a.outcome, "| class:", a.class);
a = judgeAct({ ...act(), member_ack: false }, versions); console.log("D third-party only:", a.outcome, "| strike:", a.strike);
a = judgeAct(act({}, noKeyDigest), noKeyVersions); console.log("E no key on card:", a.outcome, "| strike:", a.strike);
const f = act(); f.receipt = { ...f.receipt, digest: "0".repeat(64) };
a = judgeAct(f, versions); console.log("F digest mismatch:", a.outcome, "| strike:", a.strike);
const g = act(); g.receipt = { ...g.receipt, digest: digestOf(g.record), interval: { start: "2027-02-01T10:00:00Z", end: "2027-02-01T10:05:00Z" } };
a = judgeAct(g, versions); console.log("G time outside window:", a.outcome, "| class:", a.class);
const pass = runPass(versions, [act({ cost: "$25" }), act({ scope: "unrelated work" }), act({ cost: "$99" })]);
console.log("H three strikes:", pass.strike_count, "| pointer falls:", pass.pointer_falls, "| classes:", pass.strikes.map(s => s.class).join(","));

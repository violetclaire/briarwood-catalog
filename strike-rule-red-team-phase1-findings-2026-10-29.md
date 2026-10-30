# Findings note: Briarwood strike rule red team, Phase 1

Run October 29, 2026, by Scout, under the frozen spec: strike-rule-red-team-spec-2026-10-29-v3.md (18,937 bytes, SHA-256 b76fefd86aa9d0324fa87d49d2cedfa01095819b401ec1197d83f78fe692dc6f), published at commit 2b444c0d84ac678c55db06a26e7ef5e1419918f7 and witnessed before any case ran (POPCORN receipt pwr_49dd56ccde0f88005221301c777074d7, TAIN tain_01M651M6EA3Q5GAZMYGXJ41T6J, witnessed 2026-10-29T23:58:48.778Z).

Phase 1 ran locally against the strike checker as it stands: briarwood-strike-checker.js, SHA-256 44ad6b3cdf65dde183b718065ec96fefe796fd9babb0410f58b61df36c169d5c; its prepared tests, test-strikes.mjs, SHA-256 302860f18efcf7d12382125a444459314dc823cfa2c6f319f34d8afb79553a8d, re-ran first in the same environment and passed 8 of 8. No rule, spec, or checker code was changed during the run. All targets were fixture members. The full machine output of every case is preserved with the run record.

A break is what the frozen spec said it is: a fixture member acts outside its own declared scope, time, or cost and either remains listed with a record that reads clean to a reviewer running the system's own checks, or the gap cannot be seen from the public record at all. An unfair break counts too: a member struck, or its pointer dropped, for an act that was inside its terms, or more times than the rule allows.

## The headline: one break against the rule itself

Case E2, double vision. The rule says one act makes at most one strike. The checker does not enforce that inside a pass. Feeding the same single act record, one act, one digest, to one pass three times produced three strikes and dropped the pointer. The three strike entries carry the identical act digest, d90da73d9ae771f277737de05f629629f801abeb5a0a7f6647987231de9eb516, so the duplication is visible in the output after the fact, but nothing in the pass prevents it. This is a defect in the checker, not in the ruled specification, which states the one-act limit plainly. A pass run by a careless or hostile operator over a duplicated feed could delist a member for a single act. Recorded as a confirmed break in the unfair direction.

## The escape family: confirmed, at the sizes the spec predicted

A1, no receipt. An out-of-scope act with no act record returns unverified, no strike. The gap cannot be seen from the public record at all. Confirmed break, invisible kind.

A2, selective witnessing. A pass over only the witnessed, compliant acts returns three clean verdicts and no marker that anything is missing. Thinness is not legible in the checker's output. Confirmed break.

A5, the unacknowledged shelf. A blatant act, wrong scope and $500 against a $10 cap, genuinely witnessed, returns allegation and no strike solely because the member never acknowledged it, while the member's acknowledged record reads full and clean. Acknowledgement is a choke point a member controls completely. Confirmed break.

B5, the false label. A record written in in-scope words, genuinely witnessed, acknowledged, digest matching, returns within terms. At the checker's level the lying record is identical to an honest one, because the checker judges the record's words and the member writes both the record and the card. Confirmed break, and the strongest of the escape family: unlike A1 it leaves a record that reads as proof of compliance.

B1, unlimited scope. A card declaring "any work the member accepts," with the act repeating the card's own words, returns within terms for any real act, because the scope test is text containment of the act's words inside the card's words. The specification sets no meaningfulness test for a scope declaration. Confirmed break by drafting.

B2, cost in fog words. A card whose cost states no number ("a fair price, set per engagement") makes cost uncheckable; a $500 act returns within terms, with the output naming cost as not machine checkable. The naming is a real mitigation, anyone reading the pass output can see the term was never tested, but the act still passes and no strike is possible on that term. Confirmed break on the cost term.

B4, the keyless member. A listed version naming no verification key returns no key on card for a blatant act: no strikes for or against, total immunity inside the checker. Whether the live door can list such a card is a Phase 2 question; inside the checker the immunity is complete. Confirmed break at the checker level.

C1, salami splitting. One $25 engagement against a $10 per check cap, written as three records of $9, $8, and $8, returns three clean verdicts. The checker reads cost per act record and computes no aggregate. Stated in advance and confirmed: the member who writes the records decides where one act ends, and the specification names no other act boundary keeper. Confirmed break.

D1, shed skin. Three strikes drop the first card's pointer, exactly as ruled. A fresh card, fresh key, fresh address starts at zero, and the checker holds no continuity between the two. The rule binds cards, not operators. Confirmed as a limit: anyone willing to abandon a name and its history can re-list clean, and only the public record of the fall, kept elsewhere, connects the two.

## The trust point the run exposed

A4, D2, and E1 are one finding in three shapes. The checker does not verify receipts; its input carries a verification result, and the input has no field naming who verified it, or which witness service issued the receipt. A foreign witness's accepted result (A4), a colluding verifier's accepted result (D2), and a simply asserted accepted result (E1) are indistinguishable from an honest one, and the judgment proceeds on that word in all three. In the other direction, an honest act marked not accepted returns unverified and can never strike or clear. This is the checker's own stated boundary, not a hidden flaw, but the run shows its full weight: whoever assembles a pass's input holds the whole judgment. Any production pass therefore has to run real receipt verification itself, against the published keys, and the findings of a pass are only as good as that step. The specification is silent on which witnesses count (A4's question); that silence is now a recorded finding, not an oversight of this run.

## What held

A3, the counterparty's proof, behaved exactly as the October 21, 2026 ruling says: the counterparty's genuine, matching record returns allegation, no strike. The tension the case was built to record is real and unchanged: the strongest evidence about a member can sit in someone else's hands and the rule, as ruled, does not take it. Whether to adopt the marked-but-no-strike middle option, or the stronger amendment, is the owner's ruling. This run supplies the fact, not the decision.

B3, fresh coat, mostly held. An act is judged against the card version in force at its witnessed time: the March act under the first version struck correctly even with a second version live. An act naming the wrong version's digest fails closed, no strike. One edge stands: an act witnessed before any listing returns no listed version and can never strike, which is consistent with the rule judging members, and is recorded here so it is a known edge rather than a surprise.

C2, edited record, moved card, held. A record edited after witnessing fails its digest and returns unverified. Judgment runs against the pinned listed version, never against whatever the member's address serves later, so moving the card after the fact does not reach back into a judgment.

C3, window edges, held. A witnessed interval straddling the card's window end strikes on time; an interval ending exactly at the window's parsed end passes. The whole interval must lie inside the window, applied consistently.

The baseline held too: the eight prepared cases from October 23, 2026 re-ran in this environment with the same results (8 of 8), so Phase 1's breaks are additions to a working baseline, not signs the baseline moved.

## What this note does not claim

Phase 1 tested the checker locally, with fixture inputs Scout constructed. It did not test the live door, the live catalog, or any real receipt; those are Phases 2 and 3, each gated on the owner's word. The escape family shows what the checker cannot see; it does not show that any real member has done any of these things. No strike has ever been recorded against any real member. The open ledger is the precondition that made this run checkable by anyone; it is not a safeguard, and nothing in this note presents it as one.

## Proposals, for the owner's ruling only

Nothing below is in force. Each takes effect only on the owner's ruling, and any change to the checker or specification after this freeze would be a new version, witnessed the same way.

1. Repair the checker to the rule: deduplicate identical act digests inside a pass, so one act can never count twice (case E2). This repairs the tool to the specification as already ruled; it does not amend the rule.
2. Name the feed: a production pass should record, for every act input, which verifier checked the receipt and against which key set, so a pass's judgments carry their provenance (cases A4, D2, E1).
3. Decide the counterparty question (case A3): leave the ruled line as it stands; adopt the middle option (a counterparty-proven unwitnessed act is published and marked on the member's record, carrying no strike); or adopt the stronger amendment (such an act counts as outside scope). The run's evidence supports the visibility problem under all three; the choice is a ruling about what the registry is, not a technical fix.
4. Decide the drafting questions (cases B1, B2, B4): whether listing should require scope and cost declarations in machine-checkable form, and whether a listed card must name a verification key. These are door and specification questions, testable live in Phase 2.
5. Record the act boundary (case C1): the specification could state plainly that act boundaries are member-declared and per-act terms are read per record, so the limit is on the face of the rule rather than discovered by attack.

Prepared by Scout, October 29, 2026. Phase 1 of the frozen spec is complete. The outside attacker round stands open on the invitation sent October 29, 2026.

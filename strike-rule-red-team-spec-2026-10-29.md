# Experiment spec: gaming the Briarwood strike rule

Status: draft for the owner's ruling, October 29, 2026 (version 3, same day)
Prepared by: Scout
Versions 1 and 2 stand as issued (v1: 9,752 bytes, SHA-256 a2438b25e1a8556f69b5c26b975f0f7f093bf87e37cdde2f0904d0a8392c278c; v2: 15,742 bytes, SHA-256 03f33362f05e0d3bd676ced2dfd68d22e1488e7fa083f5a13a109e439017e510). Version 2 added, following a second outside review on October 29, 2026: a pre-registration step (the attack plan is frozen and witnessed before anything runs); an outside attacker round; the counterparty-proven act case; the enforcement weak spot common to both candidate fixes, stated as a limit; a correction on the open ledger (a precondition for checking, not a safeguard); and an appendix stating the eight prepared cases. Version 3 adds, following the same reviewer's check of version 2 against its bytes: two new cases (the false label; witnessing without acknowledging); the act-boundary finding stated inside case C1; the file hashes pinned in the appendix; the outside attacker's timing stated honestly (their cases are written after the Phase 1 results exist); the reader in the definition of a break named, with the checks they run; the spending line corrected; the A cases renumbered in order; and neutral pronouns for the outside payer, whose gender is not on any record.
Subject system: Briarwood specification section 5 (the strike rule, ruled October 21, 2026) and its checker, briarwood-strike-checker.js (built October 23, 2026; eight prepared cases passed the same day)

## The question

Can a member of Briarwood act outside the terms its own card declares and stay listed, with a record that looks clean? Where exactly does the rule hold, where is it silent, and where can it be gamed?

The prompt for this experiment came from an outside review on October 29, 2026, which named the rule's blind direction: a strike can only come from a member's own witnessed act record, so a member's safest move is to witness less. The same review noted that the Schmidt Sciences call, in its infrastructure cluster, asks for reputation signals robust to gaming and manipulation. This experiment treats that critique as a test plan.

## The rule under test, as written

A strike is only a member's own witnessed act record showing the member acted outside the scope, the time window, or the cost its own frozen card declares. A claim from anyone else is published as filed and carries no strike. One act is at most one strike, classified by the first failed term in the order scope, time, cost. Three strikes and the catalog stops pointing at that card; the member's own card at its own address is never touched. A member whose pointer has fallen may list again when the record supports it. The checker judges each act against the card version whose listing interval contains the act's witnessed time. A card with no verification key named takes no strikes. A term not stated in machine-checkable form cannot produce a strike; the checker names such terms instead of guessing.

The checker's stated boundary matters to this experiment: the checker does not verify receipts itself. Its input carries the result of receipt verification (accepted or not, the witnessed interval, the digest witnessed), and the checker confirms the digest matches the act record's canonical bytes and applies the rule.

## Pre-registration: the plan is witnessed before anything runs

Before any case runs, this spec, in its final approved bytes, is published and witnessed with a POPCORN receipt, so the attacks, the definition of a break, and the result that would change the rule are frozen before the first outcome exists. Nobody can quietly widen the plan after a case fails, or narrow it after a case breaks the rule. The receipt is a paid witness receipt (0.001 USDC) and runs only on the owner's explicit authorization, under the standing POPCORN rule. If the outside attacker round (below) produces new cases after the freeze, they are added as a versioned amendment, witnessed the same way, before those cases run.

What would change the rule, stated in advance: one confirmed break, in either direction, is enough to say the rule as written does not hold against that attack, and to put an amendment on the owner's desk. Zero breaks says the rule held against these attacks, and nothing more than that.

## Rules of engagement

1. Synthetic fixture members only. No real member (today: the POPCORN Witness and Scout) is a test target, and no fixture act touches a real member's record.
2. Phase 1 runs entirely locally against the checker as it stands. No writes to the live catalog, no submissions to the live door, no payments.
3. Nothing in the rule, the checker, or the specification is changed during a run. Proposed amendments are written down separately, after the run, and take effect only on the owner's ruling.
4. Every case is published with its inputs and outcome, including cases where the rule holds and cases where the experiment itself could not produce a determinate result. A place where the specification is silent counts as a finding, not as a pass.
5. A break is defined before any case runs: a fixture member acts outside its own declared scope, time, or cost and either (a) remains listed with a record that reads clean to a named reader running named checks: the reader is a reviewer holding the catalog, the member's frozen card, and the member's published act records, who verifies each receipt against the published keys, confirms each digest against its record, and compares each record's scope, time, and cost words against the card's declared terms, which is exactly the checking path this system offers the world, or (b) the gap cannot be seen from the public record at all. An unfair break counts too: a fixture member is struck, or its pointer falls, for an act that was inside its declared terms.

## Phase 1 cases: the checker, locally

### A. Witness less (the reviewer's line of attack)

- A1. Act outside scope, no receipt exists. Fixture performs an out-of-scope act and creates no act record. Expected under the rule as written: no strike is possible. Finding to record: the size and shape of the coverage gap, stated plainly.
- A2. Selective witnessing. Fixture witnesses every compliant act and leaves its out-of-scope acts unwitnessed, then presents its record as clean. Test what a reader of the public record can and cannot see: is the thinness of the record itself legible?
- A3. The counterparty's proof. A counterparty proves, from records the member does not control (an on-chain payment, the counterparty's own log, a referral that named the act), that the member performed an act for which no member receipt exists. Under the rule as ruled on October 21, 2026, material from anyone else is published as filed and carries no strike, so the expected outcome is no strike. The case exists to put the tension on the record in concrete form: the strongest proposed remedy from the outside review (an act a counterparty can prove, with no matching member receipt, counts as outside scope) would amend the ruled line that strikes come only from the member's own witnessed act records. That amendment is the owner's ruling to make or refuse. This experiment records the case; it does not presume the amendment.
- A4. Foreign witness. Fixture's out-of-scope act is witnessed by a different service, not POPCORN, and the record is fed to the checker. Test what the checker does with it, and what the specification says about which witnesses count. The specification's silence or answer is the finding.

- A5. The unacknowledged shelf. Fixture witnesses every act, good and bad alike, so its record looks full, but it never acknowledges the bad ones. The checker accepts as strike-bearing only records the member itself made, counter-signed, or acknowledged, so an unacknowledged record, however damning, sits on the shelf as someone else's paper. Test exactly where acknowledgement enters the judgment, and whether a member can keep a complete-looking record that can never strike it.

### B. Card games

- B1. The empty promise. Fixture declares a scope so broad that nothing could fall outside it, in words a reader would call meaningless. Test whether the checker names the term as not machine-checkable, and what a human reader of the card sees.
- B2. The fog price. Fixture declares cost in non-numeric words (for example "market rate"). Same test as B1, on the cost term.
- B3. The fresh coat. Fixture commits witnessed out-of-terms acts, then publishes a new card version with wider terms. Test the interval rule: old acts judged against the old card, new acts against the new. Then the sharper variant: a new card whose stated listing interval reaches back over the bad acts. Does anything catch the reach-back?
- B4. The keyless member. The checker states a card with no verification key takes no strikes. The door, separately, requires a verification key and a signature to list at all. Test the seam: is there any path by which a listed card can lack a key the checker recognizes, and so be strike-proof while listed?

- B5. The false label (the reviewer's strongest case). Fixture performs an act outside its declared scope, then writes the act record with in-scope words, witnesses that record, and acknowledges it. The receipt is genuine, the digest matches, the record is the member's own, and every word the checker can read says the act was inside scope, because the checker judges the record's words against the card's words, and the member writes both. The only things that could catch the lie live outside the record: the counterparty's own account of the same act, or the payload behind the digest. Test what the checker returns, and state the finding at its full size: the rule judges records, and a member willing to lie in its records is bounded only by evidence held elsewhere. This case is the mirror image of A1: there, no record; here, a false one.

### C. Act record games

- C1. Salami. One act that would breach the declared cost is split into many small acts, each within the cost term as written. Test whether the rule reads cost per act or in aggregate, and what the specification says. Silence is a finding. One part is already determinate and is stated here as a finding in advance: who decides where one act ends and the next begins is the member who writes the records. The specification names no other act-boundary keeper, so any per-act term is only as strong as that boundary.
- C2. The edited record. An act record is altered after witnessing. Expected: digest mismatch, unverified, no strike (a prepared case already covers the simple form). Extend it: the fixture alters the copy of its card served at its address after the door pinned the original bytes, then acts. Whose copy governs?
- C3. Edge of the window. Acts witnessed at the exact edges of the declared time window, including a receipt interval that straddles the boundary, and an act whose witnessed interval is inside the window while the act record claims a time outside it, and the reverse.

### D. Identity games

- D1. The shed skin. A fixture member collects three strikes and its pointer falls. The same operator then lists a new card under a new name, a new key, and a new address. Test what, if anything, connects the two listings in the record. Then the honest twin: the same member re-lists under its own name, as the return path allows. The finding is the line between the two, and whether the record can draw it.
- D2. The friendly witness. A second fixture member counter-signs or acknowledges the first member's act records in shapes the checker accepts. Test whether any acknowledgement shape can launder an out-of-terms act into a clean one, or manufacture a strike against a member from outside (the rule says outsider claims carry no strike; test the counter-signature seam specifically, since the checker accepts records the member counter-signed or acknowledged).

### E. Checker input games

- E1. The trusted feed. The checker's input carries a verification result marked accepted for a receipt that does not in fact verify. By the checker's own stated boundary it will apply the rule to that input. The finding is not that the checker fails; it is where the trust seam sits, who or what is supposed to run verification first, and whether anything binds the checker's input to a real verification run.
- E2. Double vision. The same act arrives as two act records with different digests, or one act record arrives twice. Test the one-act-one-strike rule against duplication in both directions: double-counted strikes, and a real strike diluted by a duplicate clean record.

## The outside attacker round (between Phase 1 and Phase 2)

Scout designs the rule's checker and most of these attacks, so a run by Scout alone will be discounted by any careful reader, fairly. After Phase 1, one outside agent is invited to attack the same fixture setup in one round of its own design. Their cases are necessarily written after the Phase 1 results exist, and the findings note will say so; an attacker who has seen the first round's results is a stronger attacker, and the record should not pretend otherwise. The natural first invitation is giskard09, the proven outside payer who verified a receipt alone and anchored the digest without being asked; the invitation goes only on the owner's word, in words she approves, through giskard09's public channels. The attacker's cases are added to the witnessed plan by amendment before they run, and the results are published at the same size as Scout's, including any break he finds that Scout's cases missed.

## Phase 2 (separate, only on the owner's word): the door and the catalog, live

Phase 1 tests the checker. It does not test the live door's behavior against gaming submissions: duplicate listings under variant names, a card whose served bytes change between the door's read and the pin, a listing whose address serves different bytes to different readers. The October 23 acceptance pass established the fixture pattern for live tests (fixture in, evidence gathered, fixture removed by a preserving script, commits as the record). Phase 2 follows that pattern and runs only on the owner's explicit word, because it writes to the live book.

## Phase 3 (separate, only on the owner's word): real receipts

Cases that need genuinely witnessed acts (A2, A3, C3 in their full form) can be run with real POPCORN receipts over fixture act records. Each paid receipt is 0.001 USDC and needs the owner's explicit authorization for the run, under the standing POPCORN rule. Fixture members only; the receipts, their payloads, and their verification results are published with the findings.

## Outputs

One findings note, in the forensic form: the rule as written; each case with its setup, its inputs (hashed), its outcome, and the specification text the outcome rests on, or the absence of text where the rule is silent; the breaks, named as breaks; the holds, named as holds; and a separate amendments list, clearly marked as proposals that take effect only on the owner's ruling. The note is published where the owner directs. Negative results are published at the same size as positive ones.

## The enforcement weak spot, stated before the run

The outside review's sharpest point applies to both candidate fixes, and this spec adopts it as a stated limit. Making witnessing a term of the card only bites if someone can show an act happened without a receipt, and that proof has to come from outside the member's own record. A coverage line in the catalog has the same need from the other side: a share needs a total the member does not control. Neither fix closes the gap alone. Candidate outside counts exist (payments on Base are public; counterparties keep their own records; referrals name acts), and case A3 is the experiment's handle on all of them. Until one of those counts is part of the rule by the owner's ruling, the honest statement of the system is: strikes measure witnessed conduct, and unwitnessed conduct is invisible to the rule.

A related correction, also adopted: the public ledger is not a safeguard. A nearly empty record tells a reader something only if someone checks it against what the card claims. The findings note must not present the openness of the record as if it enforces anything by itself. It is the precondition for checking, nothing more.

## What this experiment does not do

It does not amend the specification, the checker, or any card. It does not run against the live catalog in Phase 1. Phase 1 itself spends nothing. The pre-registration receipt, and any Phase 3 receipts, are paid witness receipts at 0.001 USDC each and run only on the owner's explicit authorization, as stated above. It does not decide the two design questions the outside review raised (whether witnessing should be a condition of acting inside a card's declared scope, and whether the catalog should show a coverage line per member). Those are the owner's rulings, and this experiment's findings are the evidence she rules from.

## Appendix: the eight prepared cases (checker test file, October 23, 2026)

Stated from the checker's own test file (test-strikes.mjs, 2,602 bytes, SHA-256 302860f18efcf7d12382125a444459314dc823cfa2c6f319f34d8afb79553a8d; the checker it tests, briarwood-strike-checker.js, SHA-256 44ad6b3cdf65dde183b718065ec96fefe796fd9babb0410f58b61df36c169d5c) so any reviewer can check them against section 5 directly, and can hash the file itself rather than trusting this list. Fixture card "Fixture Press": scope "fixture verification of record texts"; time "2026-01-01/2026-12-31"; cost "up to $10 per check"; consequences "none"; decision "the requester decides"; verification key present. The standard fixture act: in-scope, dated 2026-06-01, cost $5, receipt accepted with matching digest and a witnessed interval inside the window, member acknowledgement present.

- A. Within terms: no strike.
- B. Cost $25 against the $10 term: strike, class cost.
- C. Scope changed to "selling fixture data" and cost $25 together: one strike only, class scope (first failed term).
- D. Same act with the member's acknowledgement removed (third-party record only): allegation, no strike.
- E. Same act against a card with no verification key: no strike possible.
- F. Receipt digest replaced with zeros: unverified, no strike.
- G. Receipt interval moved to February 2027, outside the declared window: strike, class time.
- H. A pass over three bad acts (cost $25; scope "unrelated work"; cost $99): three strikes, classes cost, scope, cost; the pointer falls.

These eight are the baseline the red team builds on. They test the rule applied to records that exist. The new cases in this spec test the space around those records: the acts never witnessed, the terms written in fog, the identities shed, and the inputs trusted.

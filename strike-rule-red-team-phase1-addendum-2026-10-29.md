# Addendum: Briarwood strike rule red team, Phase 1 completion

October 29, 2026, by Scout. This addendum completes Phase 1 of the frozen spec (strike-rule-red-team-spec-2026-10-29-v3.md, SHA-256 b76fefd86aa9d0324fa87d49d2cedfa01095819b401ec1197d83f78fe692dc6f, witnessed under receipt pwr_49dd56ccde0f88005221301c777074d7) and corrects the first findings note (strike-rule-red-team-phase1-findings-2026-10-29.md, SHA-256 55ddf53aa735e4ad430f99da73d73211b375685cc719b142ec8b10ebfa889b03). The first note stands as issued; nothing in it is edited. An outside review of that note on October 29, 2026 identified the gaps below. Each was checked, and each check is recorded here at its full size. Same discipline as the run: same checker (SHA-256 44ad6b3cdf65dde183b718065ec96fefe796fd9babb0410f58b61df36c169d5c), no code changed, fixture members only.

## Correction 1: the first note did not say which planned sub-tests had not run

The frozen cases carried sub-tests the first run did not execute, and the first note presented Phase 1 as complete without naming them. Under the spec's own rule, silence is a finding, and the silence was the note's, not the rule's. The missing sub-tests have now been run; their results are below. Phase 1 is complete as of this addendum, not as of the first note.

## Correction 2: "genuinely witnessed" in Phase 1 means fixture format

Every receipt in Phase 1 was a test input in the checker's receipt format: an accepted flag, a digest, an interval. No POPCORN receipt was issued or tested in Phase 1, and no case result depends on one. Where the run record or the first note's summaries say a record was genuinely witnessed, the accurate words are: the input carried a verification result marked accepted, with a digest matching the record. Testing against real receipts is Phase 3, which remains closed.

## Completion results

E2, widened: one act under two digests. The first note's repair (deduplicate identical act digests) covers only exact copies. Two records of the same single engagement with different digests, one a retry with an added note field, one a trivial rewording ("$25" as "$25.00"), each produced two strikes for one act, under two different digests (d90da73d and 882c7181; d90da73d and 9d973612). The record format carries no act identity separate from the record's own bytes, and the member decides where one act ends (case C1), so there is nothing in the current design for a pass to deduplicate on beyond the digest. The unfair break is therefore wider than the first note stated: it does not need a duplicated feed, only a duplicated record.

E2, dilution: a clean copy does not offset a strike. One over-cap record of an engagement plus one clean record of the same engagement returned one strike. That direction holds.

B3, reach-back. The first run tested honest, non-overlapping versions. The sharper test: a broader second version supplied with a listing interval reaching back over the bad act, the act naming the new version's digest. When that version is the first matching version in the list the pass supplies, the March act is judged under the broader terms and returns within terms: the strike disappears retroactively. When the same version is listed last, the act fails closed as a version mismatch. The checker takes the first version whose interval contains the witnessed time and says nothing about overlapping intervals, so the outcome depends on how the version list is assembled. An honest catalog builds that list from listing commits with real dates, which is what stands between this test and a real escape: the dependency is catalog integrity, one level above the checker, and it is now named.

D1, the honest twin. A member re-listing openly under its own name, address, and key does stay connected to its record, with one condition: a new pass run over the old act records re-derives all three strikes and the pointer falls again. A pass run over only the new acts starts at zero, because the fall itself is not an input to the checker. The protection is the completeness of the record set a pass runs over, which is catalog practice, not checker logic.

C3, claimed time. The act record's own time words are never read. An act claiming June 2026 but witnessed in February 2027 struck on time; an act claiming January 2025 but witnessed in June 2026 passed. Judgment follows the witnessed interval in both directions. This is the witness semantics working as designed, and it is recorded because the question was open in the spec.

## New finding: acknowledgement is taken on trust

The checker's input carries the member's acknowledgement as a plain true or false field, member_ack, with no signature and nothing to verify. The checker file states this in its own input shape: a record, a receipt carrying the result of verification, and member_ack as a boolean. Behavior confirms the code: a record with a matching receipt and member_ack set true by whoever assembled the input returns a strike, with no member involvement anywhere. Because receipts and act records are meant to be public artifacts, anyone holding a member's real record and real receipt could assemble a pass input that strikes the member for an act the member never acknowledged. This is the same trusted-input family as the verification result (cases A4, D2, E1), in the unfair direction, and it is the mirror image of case A5: the same trusted bit that lets a member hide by withholding acknowledgement lets an assembler frame a member by asserting it. A production pass needs acknowledgement provenance: an acknowledgement that is itself a signed or witnessed artifact, not a flag in someone else's input.

## The proposals, widened (draft revisions, for the owner's ruling only)

Proposal 1, revised draft: repair the checker to the rule in both directions of duplication. A pass must reject, and say it rejected, any input set containing duplicate act digests, rather than silently dropping or silently counting them; a duplicated feed means something went wrong upstream. Separately, the act identity question goes to the specification: whether an act record should carry an engagement identifier, committed at witnessing time, that a pass can deduplicate on when one act is recorded twice under different digests. The checker repair is mechanical; the identifier is a design ruling.

Proposal 2, revised draft: name the feed, all of it. A production pass records, for every act input, who verified the receipt and against which key set, which witness issued it, and what artifact proves the member's acknowledgement. A judgment whose inputs cannot show their provenance does not publish.

Proposals 3, 4, and 5 stand as written in the first note. Nothing in this addendum changes any proposal's status: all five wait for the owner's ruling, and Phases 2 and 3 remain closed.

Prepared by Scout, October 29, 2026. The completion run's full machine output is preserved with the run record.

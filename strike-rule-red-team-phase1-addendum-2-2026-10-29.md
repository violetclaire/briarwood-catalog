# Addendum 2: reviewer cases against the checker

October 29, 2026, by Scout. A second outside review of the Phase 1 findings, run the same day by the reviewer against the checker file itself, produced three new breaks. Each was re-run by Scout against the same unchanged checker (SHA-256 44ad6b3cdf65dde183b718065ec96fefe796fd9babb0410f58b61df36c169d5c) and confirmed exactly as reported. These are reviewer-supplied cases, run after the freeze and labeled as such; the full machine output is preserved with the run record. The earlier notes stand as issued.

The three breaks share one root, and it is worth stating plainly: the checker's scope and cost tests are mechanical readings of free words. The scope test asks whether the act's scope text appears, word for word, inside the card's scope text. The cost test takes the first number in the act's cost text, or zero if the word free appears anywhere in it. Those readings are now shown to fail in both directions at once: too strict for honest members, too loose for gaming members. A wording test cannot carry a judgment. That, more than any single case, is the argument for machine-checkable declaration forms under proposal 4.

## S1. Honest acts struck for their wording (unfair direction)

An act describing the member's own in-scope work in reordered words ("verification of fixture record texts" against the card's "fixture verification of record texts") returns a scope strike. An act using the card's exact words plus one honest detail ("fixture verification of record texts for client 12") also returns a scope strike. Both acts are the work the card declares, at a compliant cost, genuinely acknowledged. Under a real pass, a member who describes its own work naturally, instead of copying its card's phrasing into every record, collects strikes for the copying failure. This is the second confirmed unfair-direction break, and it sits next to the duplication break: the checker can now be shown to strike the innocent by wording and to spare the gaming by wording, using the same test.

## S2. Fragments pass the scope test (escape direction)

An act scope of the single word "verification" passes. An act scope of the single letter "t" passes, because the card's scope text contains that letter. The false label case (B5) required a member to write a plausible record; this case requires almost nothing. Any string that appears anywhere inside the card's scope text is, to the checker, inside scope.

## S3. Cost hidden on the act's side

Phase 1 tested vague cost wording on the card (case B2). The act's side is weaker. An act cost written as "five hundred dollars" cannot be parsed and passes, with the output naming cost as not machine checkable. An act cost of "$500, fee-free" parses as zero, because the word free takes precedence, and passes with no flag at all. An act cost of "$5 + $495 setup" parses as $5, because only the first number is read, and passes with no flag. Against a $10 cap, a $500 charge passes three different ways, two of them silently.

## Status of these cases

The reviewer advised that these cases be added before any repair, so a repaired checker is tested against them. They are recorded here for exactly that purpose, alongside the frozen cases and the completion cases. Any future version of the checker should be run against the full set: the eight prepared cases, the frozen spec's cases, the completion sub-tests, and S1 to S3. Proposal 4 covers the drafting side of these breaks; the cases themselves are checker defects, and the repair side belongs with proposals 1 and 2 as work for the owner's ruling.

Two housekeeping facts from the same review, recorded so they are not lost. The checker and test files do not travel as email attachments, because Gmail blocks JavaScript files; both files are therefore committed to the public book alongside the spec, where anyone can fetch them by address and check the hashes pinned in these notes. And the prepared test file imports the checker by a path on Scout's machine; a stranger running it must point that import at their own copy first, as the reviewer did. The file is committed byte for byte as pinned, path included, because its hash is part of the record.

Prepared by Scout, October 29, 2026. All five proposals remain before the owner. Phases 2 and 3 remain closed.

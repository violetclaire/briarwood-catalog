# Strike checker v2: publication record

Published October 30, 2026, on the owner's word ("Yes, publish v2 and witness it," October 30, 2026).

## What was published

- File: briarwood-strike-checker.js, version 2, at this repo's root
- Bytes: 8,608
- SHA-256: ac8fbd9a602394be35ffef8da1f653f05d9dff85f825fed6b6cf5439bc3f535c
- Publication commit: 93034045222d8247d7502b7b41cf725681f30477
- Supersedes: the version 1 checker at commit b1480f713b2846635002b21dd9701a7e859f1e80 (preserved in this repo's history), SHA-256 44ad6b3cdf65dde183b718065ec96fefe796fd9babb0410f58b61df36c169d5c

## The repair

Ordered by the owner on October 29, 2026 ("OK, so we need to fix those like right now") after red team Phase 1 found the checker counting one act's duplicated records as multiple strikes. Version 2 counts each act digest once per pass and reports duplicated records in duplicate_act_records. The rule itself and judgeAct are unchanged. Independently checked before publication by Perplexity (hash reconstruction and fixture reruns) and by ChatGPT (code review, at the size of what it was shown).

## The witness

A POPCORN witness receipt was issued over the published file's digest at the moment of publication (paid by the operator's agent, $0.001 USDC on Base, as every receipt is):

- Receipt: pwr_95138916e9c8afdb1562e443b8e31223
- TAIN: tain_01M66QW5JRXJYTC5X65DD5Z862
- Witnessed interval (UTC): 2026-10-30T15:46:43.144Z to 2026-10-30T15:47:03.144Z
- Base transaction: 0x61df0ea5faec0db46162be06ac452205f586f24df9a95d212b385db310d5bce4
- The receipt's signature verifies against the keys published at 767-2676.com/.well-known/popcorn-keys.json, and the digest inside it matches this file's SHA-256.

The receipt witnesses that this fingerprint was presented to the node inside that interval. It does not vouch for the checker's correctness, and it authorizes nothing.

## What did not change

- The catalog pointers (briarwood.ai/pointers.json) were not touched by this publication.
- This checker is a testing tool. It is not connected to pointer changes, and no enforcement runs from it.
- Open rulings, unchanged: act identity for differently worded copies of one act (proposal 1, design half), input provenance (proposal 2), structured terms (proposal 4).

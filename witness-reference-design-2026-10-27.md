# A witness for agent records: the design, as built and as used

Violet Herod
October 27, 2026

## The problem

When an agent acts for someone, each side keeps its own record of what happened. The record of a grant, an approval, or a payment sits with the party who will be judged by it. There is no third record, kept by someone else, that both sides can point to later.

## The design

An optional field on a grant or payment record. The field names a receipt from an independent witness. The receipt binds the SHA-256 fingerprint of the record to a witnessed time.

Three rules for the field:

- **Optional.** A record with no witness reference stays valid. The field adds evidence; it is not a gate.
- **Vendor-neutral.** Any witness whose receipts a stranger can verify counts: POPCORN, an RFC 3161 timestamp authority, OpenTimestamps, or another. The field names the receipt; it does not name a winner.
- **Narrow scope, stated on its face.** The receipt proves the record existed at a point in time. It does not prove identity, authorization, or delivery, and the field should say so.

## It is built and running

POPCORN, at 767-2676.com, is one witness that issues receipts in this form today. It charges $0.001 per receipt. Its keys are published, and once you hold a trusted copy of the issuer's key, anyone can verify a receipt without this site, this operator, or anyone's word.

The contract, with a worked example and the verification steps:

https://767-2676.com/#the-contract

The published keys:

https://767-2676.com/.well-known/popcorn-keys.json

## The evidence: two payments

The second of these payments is the first of its kind on the public record. On October 27, 2026, I had the whole field checked. Two other live services sell witness receipts for agent payments, and neither has any public evidence that a stranger ever paid for one and verified it. The classical timestamp witnesses are heavily used, but they do not serve agent payments. Every major agent protocol leaves the witness seat empty. So the payment of October 27 below is the first one on record where a stranger paid an independent witness for an agent record and checked the receipt himself, in public, in his own words.

**October 25, 2026.** My own agent paid for a witness receipt over x402 on Base and verified it. Receipt `pwr_c09ed615c21a3b67e449e3348eb93412`. Transaction `0x8c448d8447ed575e80b8676382cd0e93396b29a067ad4b2171da9b4ca5c001ce`. The full receipt and its payload are printed on the contract page above.

**October 27, 2026.** An unaffiliated reader of the discussion below, @giskard09, paid for a receipt the same way. Settlement $0.001 USDC on Base at 2026-10-27T10:38:45Z, transaction `0xc8599161b6a9a7ffaa66fde11f0ac2971a813148b071ca66da4b9a69d41c8425`, from `0xDcc84E9798E8eB1b1b48A31B8f35e5AA7b83DBF4`. He checked it himself, in his own words:

> Took you up on it — paid, and verified independently against your published keys (decoded the JWS myself, reconstructed the EC public key from `/.well-known/popcorn-keys.json`, verified ES256 directly — not relying on the tool's own response).

He then anchored the same digest on a second, independent witness, AnchorRegistry on Base, so that digest now stands under two witnesses with different custody. His own statement of the scope:

> Neither proves identity, authorization, or delivery — both just prove the digest existed at a point in time, same honest scope your own receipt already declares.

## Where this was first posted

The worked example began as evidence in a discussion of the Personal Agent Protocol, whose payments piece is not in the frozen 0.2 specification and is listed as an open topic on its path to 1.0:

https://github.com/personal-agent-protocol/personal-agent-protocol/issues/37

The maintainer closed that issue on October 27, 2026, writing that if a spec change comes out of the discussion, a new issue should be opened for it. This page is that change, published here, on my own ground, because the design is mine and the witness is for anyone who wants one, in that protocol or any other.

## What this does not do

A witness receipt does not prove who anyone is. It does not prove anyone agreed to anything. It does not prove anything was delivered. It proves one thing: this fingerprint was presented, and it existed at this time. The rest still takes records, and judgment, and people.

Here you go. I put everything for the proof right here. Let me know if you have any questions.

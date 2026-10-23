# Briarwood catalog pointers

This repository holds the pointers file for the Briarwood catalog. The catalog is a
public, read-only list of members. It holds names and addresses and points. It keeps
nothing of anyone's.

The cards themselves never live here. Each member publishes their own card at their
own address, in their own keeping. This repository stores only the pointer to each
card. Query, not custody.

## Listing

- Listing is self-serve and free, forever. Nobody pays to be found.
- There is no curator, no approval queue, no onboarding window.
- The check on a submission is mechanical: the shape is right or it is not.
- A refusal names the failing field. Nobody judges whether a member deserves to
  be listed.
- Listing order in pointers.json is the catalog order. Nothing is ranked, scored,
  or placed for payment.

## The pointers file

pointers.json is a JSON array. It starts empty. One entry is appended per listing,
in listing order, and every change to it is a dated commit in this repository, so
the record shows what the catalog pointed at and when that changed.

Each entry is an object with these fields:

- name: the member's name as it appears on their card.
- address: the address of the member's full card. The catalog stores this pointer
  and nothing else of the member's.
- digest: the SHA-256 digest of the card version this pointer names, so an act can
  be judged against the card version in force at its witnessed time.
- listed: the date the pointer was added, ISO format (YYYY-MM-DD).

## The witness

Receipts for acts inside the estate are issued by the POPCORN witness node at
767-2676.com and can be checked by any stranger from the published keys. Listing
here asks for no trust in this repository beyond what its commit history shows.

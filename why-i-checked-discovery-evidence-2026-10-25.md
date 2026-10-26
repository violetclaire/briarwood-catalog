# FORENSIC EVIDENCE REPORT

**Report:** Discovery and identity system checks, and one
witnessed agent payment
**Report ID:** ER-2026-10-25-01
**Prepared by:** Violet Herod, operator, 767-2676.com
**Date of report:** October 25, 2026
**Distribution:** Public. Linked from the author's reply on
Personal Agent Protocol issue #37.

## 1. Purpose

The author operates a witness layer for agent systems. The
work began from one observation: agents act in the world.
They fetch, publish, pay, and commit, and no independent
record witnesses those acts. A log kept by the actor is not a
witness. The author built a service that issues signed
receipts binding a fingerprint of an act to a witnessed time,
verifiable by any third party from published keys, on a
premise stated in her own record since September 2026: there
is one measurement of time and many mechanisms to deliver it,
and a receipt is a delivery mechanism, not the time itself.

The exhibits below record what happened when that work met
the identity and discovery systems other parties are building.
They include the largest single piece of evidence the author
holds: a documented case, Exhibit B, of an agent service
presenting to websites under another service's identity.

## 2. Scope and method

This report records five items of evidence gathered by the
author between October 11 and October 25, 2026. Each exhibit
states its source, the date of the underlying record, the
method used, the observation, and the limits of what the item
establishes. Statements originating with third parties are
attributed to their authors and quoted from their published
records. No intent or motive is attributed to any party. Every
item can be independently re-checked from the public sources
cited.

## 3. Exhibits

### Exhibit A. Witnessed agent payment, settled

- **Date:** October 25, 2026
- **Source:** Live transaction on the author's own node,
  767-2676.com; public receipt record
- **Method:** An agent submitted a fixed set of words to the
  node's witness endpoint. Payment of $0.001 USDC was made over
  the x402 protocol and settled on Base. The node issued a
  signed receipt binding the words' fingerprint to a witnessed
  time interval.
- **Observation:** Receipt ID
  pwr_c09ed615c21a3b67e449e3348eb93412. Witness reference
  tain_01M5SPQ23ZSH3VBQGNQQB4V9E7. Witnessed at
  2026-10-25T14:16:29.567Z, inside a signed window of plus or
  minus ten seconds. Base transaction
  0x8c448d8447ed575e80b8676382cd0e93396b29a067ad4b2171da9b4ca5c001ce.
  The full signed receipt and a signed statement by the paying
  agent are reproduced in the author's reply on issue #37.
  Public record:
  https://767-2676.com/v1/receipt/tain/tain_01M5SPQ23ZSH3VBQGNQQB4V9E7
- **Establishes:** The words were presented to the node as
  recorded; the payment settled; the receipt was signed by the
  node's published key; the payment, the words, and the
  witnessed time are bound together in the signed bytes.
- **Does not establish:** The caller's legal identity, delivery
  of the words to any other party, execution of any act, or
  authorisation. Authorisation is recorded separately, by the
  agent's signed statement.

### Exhibit B. Instinct: agent traffic presenting under Exa's identity

- **Date of underlying record:** October 15, 2026
- **Source:** Published controlled experiment, Crockett Ford
  (Sunbeam Research), "Instinct is using Exa for web search,"
  sunbeam.ai/thoughts/instinct-is-using-exa-for-web-search
  (Attribution corrected 2026-10-25: the published byline is
  Crockett Ford. Thenuka Karunaratne is Sunbeam's co-founder.
  Earlier drafts of this report named Karunaratne.)
- **Method:** The experimenter operated test properties and
  recorded the identifying characteristics of incoming agent
  traffic, including logs timestamped 2026-10-15T08:19Z.
- **Observation:** Per the published logs, the service
  Instinct's web fetches arrived as generic ExaUser traffic,
  carrying no identifier for Instinct, and its fallback browser
  presented as standard Chrome on Linux from a residential IP
  address. A receiving site cannot determine the originating
  service from this traffic, and cannot allow or block that
  service by name. Other agent services, per the same record,
  identify themselves.
- **Establishes:** The mechanism. Identification failed because
  the presenting shape was another service's shape.
- **Does not establish:** The motive of any party, or whether
  Exa consented to the arrangement. Neither is asserted here.
- **Related record:** On October 16, 2026, the author
  transmitted this evidence to Exa as a courtesy, evidence
  only, with no accusations. The author's full exhibit
  timeline for the Instinct matter, eleven exhibits, is
  published as a supporting document to this report:
  https://github.com/violetclaire/briarwood-catalog/blob/main/instinct-exhibit-timeline-public-2026-10-25.md

### Exhibit C. ARD: discovery registry test; corrective change unmerged

- **Dates:** October 11 to October 25, 2026
- **Source:** ARD (Agentic Resource Discovery), ards-project
  on GitHub; author's own service listing
- **Method:** The author published a service to the registry
  and ran controlled, unseeded discovery tests: whether an
  agent searching in ordinary task vocabulary could find the
  listing.
- **Observation:** The tests failed. The listing was phrased in
  the author's trade vocabulary; searchers used task
  vocabulary; the registry's publishing guide specified the
  form of sample queries but not their vocabulary. The author
  filed the finding as issue #90. The maintainer, Junjie Bu,
  closed the issue as completed on October 11, 2026 and invited
  a documentation fix. The fix, pull request #27 in
  ards-project/ard-docs, adds one tip: phrase sample queries in
  the searcher's vocabulary. The maintainer approved the pull
  request six minutes after it was opened, on October 11,
  2026. Two further requested reviewers have submitted no
  review. State re-checked by the author on October 25, 2026:
  the pull request remains open and unmerged, fourteen days
  after approval.
  https://github.com/ards-project/ard-docs/pull/27
- **Establishes:** The discovery failure was reproducible, the
  cause was documented, a minimal correction was accepted by
  the maintainer, and the correction has not been incorporated.
- **Does not establish:** The reason for the delay, or any
  party's view of the correction's merit.

### Exhibit D. Hugging Face (hf-discover): reference implementation fix; test run never executed

- **Dates:** September 8 to October 25, 2026
- **Source:** huggingface/hf-discover on GitHub
- **Method:** Review of the reference discovery
  implementation's instruction-file retrieval, and a submitted
  correction with a full test log.
- **Observation:** The implementation fetches a Space's
  instruction file from a generated route that returns an error
  for static Spaces, while the Space's own agents.md answers
  correctly. The author's correction, pull request #45,
  created September 8, 2026, falls back to agents.md only on a
  400 or 404 response. The author closed the pull request on
  September 21, 2026 as a courtesy and restored it on October
  22, 2026 at the identical commit, with the complete test log
  attached: 58 tests, all passing. The continuous integration
  run has never executed the suite; it remains at
  action_required, a state in which a maintainer must approve
  before the tests are permitted to run. State re-checked by
  the author on October 25, 2026: the pull request remains
  open.
  https://github.com/huggingface/hf-discover/pull/45
- **Establishes:** The defect exists in the reference
  implementation, a tested correction exists, and the standard
  verification step has not been performed.
- **Does not establish:** The reason the verification step has
  not been performed.

### Exhibit E. Personal Agent Protocol: discovery document checks

- **Date:** October 25, 2026, approximately 7:26 AM PT
- **Source:** Public addresses of the Personal Agent
  Protocol's authors and design partners
- **Method:** HTTPS requests to /.well-known/poppy.json at ten
  public domains. Response bodies were read, not status codes
  alone.
- **Observation:**
  - 404, route not found, direct: sierra.ai, stripe.com,
    openai.com
  - 404 after redirects: shopify.com, walmart.com, meta.com,
    genesys.com, visa.com, paypal.com, cloudflare.com
  - rocketcompanies.com: HTTP 403, an access wall, which is a
    wall and not a document
  - The only live document found was at withpoppyseed.dev, an
    unaffiliated demonstration, protocol version 0.1
  For comparison, the author's own discovery document was live
  the same morning, naming the service, its version, and its
  tools, with the signing keys published separately:
  https://767-2676.com/.well-known/mcp.json
  https://767-2676.com/.well-known/popcorn-keys.json
  Payments do not appear in the protocol's frozen 0.2 text;
  its Path to 1.0 lists payments as an open topic. The payment
  in Exhibit A occurred entirely outside the protocol.
- **Establishes:** As of the check, none of the ten checked
  domains had published the protocol's step-one identity
  document.
- **Does not establish:** Any party's deployment schedule or
  intentions. The protocol is a draft, and a draft's documents
  may be unpublished for many reasons. This exhibit is included
  because the identity document is the protocol's stated first
  step, and because the author's own equivalent document was
  live and an agent payment to her node had settled the same
  morning.

## 4. Summary of findings

1. An agent payment with a signed, independently verifiable
   witness receipt has been executed and settled (Exhibit A).
2. At least one deployed agent service has been documented
   presenting to websites under another service's identity,
   defeating identification and blocking by name (Exhibit B).
3. A tested discovery registry failed to surface a conforming
   listing; the documented correction was approved by the
   maintainer and remains unmerged (Exhibit C).
4. A tested correction to the reference discovery
   implementation stands open, its verification step never
   executed (Exhibit D).
5. The identity document specified as step one of the newest
   agent protocol was not published at any of the ten author
   and partner domains checked (Exhibit E).

## 5. Verification

Each exhibit cites its primary public source. Receipts verify
against the keys published at
https://767-2676.com/.well-known/popcorn-keys.json and the
paying agent's keys at
https://767-2676.com/agents/scout-local-01/jwks.json. Pull
request states were read from the GitHub records cited on the
dates stated. No part of this report depends on the author's
unpublished records, except Exhibit B's transmittal entry and
Exhibit C's test account, which are the author's own acts and
are recorded as such.

## 6. Attestation

I attest that the observations in this report are accurate
records of the checks performed on the dates stated, and that
third-party material is attributed to its authors.

Violet Herod
October 25, 2026
767-2676.com

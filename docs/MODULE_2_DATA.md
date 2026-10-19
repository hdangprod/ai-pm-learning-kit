# Module 2 fixture and additional authored content

Version1, authored on2026-10-19 for this application. Entirely synthetic English-tutor product activity, never real research evidence. Conceptual anchors: VolumeI Chapter1 worked example and1B. Full event funnel instruction is new material; planned Chapter16 is not delivered textbook content. No new external curriculum research.

## Reproduction and lineage

`python3 scripts/generate_events.py` deterministically writes `src/data/events.json` and its identical downloadable copy `public/data/events-v1.json`. No random sampling or RNG seed: explicit scenario version1. SHA256 entries in `docs/DATA_MANIFEST.json`. `python3 scripts/verify_funnel.py` independently uses Cartesian practice/feedback pairs to verify the locked counts; it neither imports TypeScript calculations nor generated expected results.

## Dictionary

|Field|Grain / definition|
|---|---|
|users|12 fictional people:4 signups each on Oct1,8,15,2026 at00:00UTC. IDsC1U1–C3U4. First2 in each cohort novice, last2 experienced. No missing registry fields.|
|user_id|Unique registry key; event foreign key. Synthetic identity, unlike the research corpus's evidence/account IDs.|
|signup_ts|ISO UTC instant. Signup is defined by registry membership, not event count.|
|segment|Pre-use fictional novice/experienced classification.|
|events|28 delivered log rows,27 distinct event IDs; exactly one repeated payload. Row order reversed deliberately.|
|event_id|Delivery identifier. Exact duplicates are ignored after first occurrence. Conflicting payloads with one ID are rejected rather than arbitrarily selected.|
|name|practice or feedback; no inferred signup event.|
|ts|ISO UTC event time, not ingestion order. No missing fixture timestamps. Invalid timestamps or unknown event names fail validation.|
|cutoff|2026-10-19T00:00:00Z, exclusive observation endpoint.|
|version / data_type|1 / SYNTHETIC_AUTHORED.|

## Scenario and QA rows

Each cohort:U1/U2/U3 practice day1, U1/U2 feedback day2, U4 feedback day1 without practice. First two cohorts:U1 practice at day7; first cohort alsoU2 day7 andU3 day8, all outside the seven-day funnel. These future-return rows do not implement a retention module.

Five added diagnostic rows for C1U3 (beyond the earlier fixture blueprint): practice before signup and exactly at signup; feedback before practice and tied with practice; feedback exactly at signup+7days. These add no qualifying paths and preserve the locked fixture answers. One copy ofC1P1 is repeated, and file order is reversed. Data table shows all selected rows, including rejected ones and immature cohort activity.

## Calculation contract and interpretation

Eligible learners have signup+7days≤cutoff. Ordered steps require signup<practice<feedback. Activity timestamps must be in [signup,signup+7days), with strict order additionally excluding practice at signup. Deduplicate event identity, then count each learner once per stage, using chronological order. Earlier invalid feedback does not prevent later valid feedback. Unknown user events are excluded and audited. Duplicate registry IDs/contradictory event IDs fail validation. A mature person with no qualifying log remains in the signup denominator, with no observed conversion; this is not evidence of learning failure.

|Slice|Signup|Practice|Feedback|Feedback/practice|Feedback/signup|
|---|---|---|---|---|---|
|All mature|8|6|4|66.6667%|50%|
|Novice mature|4|4|4|100%|100%|
|Experienced mature|4|2|0|0%|0%|
|Oct1 only|4|3|2|66.6667%|50%|
|Oct8 only|4|3|2|66.6667%|50%|
|Oct15 only|0 eligible (4 immature)|0|0|Not observable|Not observable|

Charts/totals/event audit share filters. The registry details intentionally retain all12 users and label that scope. Fixed assessment prompts always use both mature cohorts and both segments regardless of explorer state. Feedback distinguishes previous-step denominator, all entrants, immature users, row counts, event order and causal overclaim. Primary numeric and reasoning checks must pass before transfer; transfer numeric and reasoning checks must also pass for practice completion.

Newly authored content: queue metaphor, ordered event lesson, diagnostic rows, event-level audit explanations, product decision prompt (check tracking and friction before feature investment), misconception-specific answer choices, and independent overall-conversion transfer question. Source-derived concept: activity/output does not establish learning. The app does not automatically score free-text decision quality or certify educational effectiveness.

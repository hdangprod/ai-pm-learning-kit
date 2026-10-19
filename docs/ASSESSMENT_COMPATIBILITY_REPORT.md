# Assessment compatibility report

Storage remains `ai-pm-lab:v1`, top-level `version:1`; there is no index migration or automatic regrading. The pre-remediation fixtures under `verification/remediation-baseline/` are clearly authored test work, not actual learner records. They include all six modules, incomplete and failed attempts, notes, a consulted solution, original/revised memos and failed/successful M6 transfer. Browser tests use isolated test profiles, not the user's browser storage.

## Original records

`loadProgress()` reads the baseline records without warnings. Opening modules does not rewrite a legacy Work record. Raw `export.modules` retains all old fields and values including original scores, feedback, memo text, timestamps, choice indices and notes. Optional new fields are written only when the learner edits or submits new work. Existing completed flags are neither revoked nor relabeled as independent success.

`src/data/legacyAssessmentCatalog.json` freezes the original version1 prompts and labels captured from the unchanged application's actual export. Historical `choice`/`extraChoices` indices decode through that catalog, never through shuffled display order or edited wording. `attemptEvidence.ts` supplies original labels in history/export. Missing selection−1 remains `(not selected)`. Stable semantic IDs map the original meanings; no historical attempt is regraded. Final sticky `revealed`/`consulted` state cannot establish when an older response was assisted, so its evidence explicitly says **Historical attempt · assistance timing unknown**.

## New records and exports

M1–5 add `practiceDrafts` with draft ID, calculation, selected semantic IDs, presentation order and reasoning-change note. New attempts add `assessmentVersion:2`, `id`, `responseIds`, `presentation`, and `assistance`. Legacy-shaped numeric `choice`/`extraChoices` are still canonical definition indices for compatibility, never displayed indices; new grading uses only semantic IDs.

M6 retains decisionRoom `version:1`, all original scoring rules and frozen stage artifacts. Optional `reasoningChange` and `reasoningChangeFor` draft fields bind a fresh note to the latest same-stage attempt. New decision attempts snapshot assistance. Initial/revised/transfer structured0–10 results remain distinct from the external memo rubric. All historical scores/memos remain exact.

Journal JSON stays top-level `version:1`; `definitionsVersion:2` adds option IDs/readable labels, frozen legacy definitions, decoded evidence, assistance metadata and pending external-review policy. Existing `modules`, metric definitions and percent/percentage-point/decision-point distinctions remain. The separate human-readable Markdown memo packet is a review convenience, not a semantic grade or authenticated approval.

New attempts distinguish initial unaided (no recorded in-app assistance), after-feedback and after-solution. All are scoped `same_case_practice`. First attempts append immutable snapshots; retry does not replace them. A new M1–5 draft begins on the first edit after submission, preserving selected answer meanings while varying presentation. Each retry requires a new nonblank reflection; repeated M6 failure cannot reuse a consumed note. Hiding guidance never clears consultation. No unaided label proves absence of outside assistance.

## Reset and recovery

Per-module reset deletes only that module; tests compare the other five histories and unrelated storage byte-for-value. Global reset removes only the lab key and clears active UI state. Export before resetting if records must be retained. Reload persistence is verified for hypotheses, notes, draft order, selected IDs, reflections, stage memos, attempts and consultation. Storage failures still warn and keep in-memory work. Import, cloud backup and trusted reviewer identity remain outside scope (AQ08 and other deferred work).

## Verification

All215 original unit/component tests remain, with existing learning-loop fixtures supplying the newly required reflection; no calculation/critical-error assertions were relaxed. Added remediation tests independently assert blank retry blocking, every-retry freshness, immutable evidence, legacy decoding, permutation invariance and all six memo cases. All46 original browser cases remain; additional desktop/mobile cases cover actual new assessment flows. Exact final totals/logs are in PROGRESS.md and the implementation report. Dependency/lockfile, original source bytes, fixture hashes, four specifications and42-day mapping match the baseline preservation checks.

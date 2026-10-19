# Independent post-remediation audit

**Recommendation: CONDITIONAL GO.** The lab is suitable for guided practice and moderator dry runs. Do not start the planned evidence-preserving learner evaluation until the conditions in `EXECUTIVE_GO_NO_GO_BRIEF.md` are closed. The app's completion flags and structured scores remain unsuitable as independent mastery outcomes.

Audit reference: POST-EQ-1.0, 19 October 2026. The five requested professional perspectives were applied by one audit agent; this is not a completed five-person panel or human inter-rater study.

## Scope and evidence boundary

The supplied `AI_PM_Learning_Kit.zip` contains 402 relevant files. Unlike the previous documentation-only review, this audit inspected the implemented assessment, state, export, memo-review and moderator workflows, their tests, the metric functions/datasets, the four root specifications, relevant curriculum mapping and deferred backlog. The source snapshot was not edited. All 402 incoming file hashes still match the extraction inventory.

Archive SHA256: `fa52ddb4d604ae3f1421db667706fe36ee2a233eb3bc59a555e4434632c9f322`.

Builds and executable checks used a separate temporary copy with the supplied lockfile. No application patch, fixture regeneration, answer-key change or learner-progress reset was applied to the submitted snapshot. Dependencies were installed with lifecycle scripts disabled. Execution environment: Linux, Node 24.19.0, npm 11.9.0; the developer's original environment was macOS/Node 20. This difference is recorded rather than hidden.

Evidence labels used throughout:

| Label | Meaning |
|---|---|
| CODE | Actual implementation inspected; execution not implied |
| EXEC | Executed check, with method and output preserved |
| COMPONENT | Actual React application executed through jsdom/RTL, not a real browser |
| HTTP | Real requests against development or built-preview servers |
| DEV | Supplied developer result or screenshot, not independently reproduced here |
| RISK | Plausible consequence, not an observed participant outcome |
| NOT RUN | Verification or human activity not performed |

No participants were recruited. Probe responses and damaged-state records were deliberately authored test inputs. No human reviewer scores, task timings, learning effects or professional readiness are claimed.

## Verification actually executed

| Check | Independent result | Practical limit |
|---|---|---|
| Supplied unit/component suite | **231 passed, 0 failed, 0 pending** | Machine regression evidence, not assessment validity |
| Strict TypeScript | Passed | Does not validate persisted JSON at runtime |
| Production build | Passed | No browser interaction implied |
| Six arithmetic/fixture verifiers | Passed | Source and download data hashes/calculations agree within tested contracts |
| Original instructor arithmetic script | Passed | Synthetic curriculum arithmetic, not educational outcomes |
| Offline assessment workflow | 43 checks passed | Does not time or equate the forms |
| Supplied transfer arithmetic verifier | 47 assertions passed | Static arithmetic assertions; natural-language keys were also reviewed manually |
| Remediation preservation/build-content verifier | Passed | Root specs, package files, mapping and preserved audit copies match the supplied baseline |
| Auditor adversarial probes | **7/7 probe assertions passed** | Some assertions deliberately confirm a defect; this is not seven product acceptance passes |
| Development/preview private-content requests | **18 requests, no tested form/key content leak** | Preview uses SPA fallback HTTP 200; content inspection, not status alone, determined non-exposure |
| Incoming source preservation | **402/402 unchanged** | No Git commit identity exists in the supplied ZIP |
| Full Playwright suite | **NOT RUN independently** | 54 tests discovered; a selected test was blocked before browser assertions because configured Chrome was absent |
| Original preservation script | **Blocked/failed on external path** | References a missing `/Users/dangnguyen/Desktop/PM/...zip`; no fake archive was created to make it pass |

The first unit run ended with an incomplete text transcript despite exit 0; it was not used to establish the total. A controlled rerun with two workers produced `unit_results.json`, explicitly reporting 231/231. An initial auditor probe had a duplicate-DOM-ID selector problem when modeling two app instances in one jsdom document. Only the external probe selector was corrected; the application was unchanged. The final seven-probe run passed.

Chrome and the headless-shell downloads both failed with truncated/non-ZIP responses. The original configured browser launch then confirmed Chrome was missing. The developer's 54 passing browser tests therefore remain DEV evidence. HTTP and component execution do not replace real-browser, layout or assistive-technology testing.

## AQ01–AQ04 disposition

| Finding | Classification | Judgment |
|---|---|---|
| AQ01 | **Resolved within the specified M1–M5 remediation scope** | Grading uses semantic IDs; retry presentation changes without changing answer meaning; legacy labels are decoded separately. The old universal first-radio policy no longer works across M1–M5. Item quality remains unvalidated. |
| AQ02 | **Resolved as a review-workflow separation** | Structured 10/10 is explicitly separate from memo review; a usable external review packet and rubric exist. Human scoring is pending, as it should be. |
| AQ03 | **Partially resolved** | One-form delivery, sealed change card, exposure fields and private keys work. Several content/scoring decisions, familiar-item reuse, difficulty and timing remain unsuitable for treating forms as equivalent independent measures. |
| AQ04 | **Partially resolved** | Normal retries append isolated snapshots, preserve old responses, record assistance and block automatically reused notes. Whole-store persistence can still lose first-attempt evidence across stale sessions or malformed-state recovery. |

Details, exact source anchors and acceptance criteria appear in `AQ01_AQ04_VERIFICATION_MATRIX.md`.

## Confirmed red-team results

### PR01 — stale whole-store writes can erase first-attempt evidence

**Confirmed COMPONENT defect; evaluation-evidence blocker unless controlled.** `src/App.tsx:14–16` holds a private in-memory progress map per mounted app and writes a whole replacement map. `src/lib/storage.ts:17` saves that map without checking for a newer stored revision. There is no storage-event synchronization or stale-write rejection.

Auditor probe AUD-P05 mounted two independent app instances sharing storage, a component-level model of two stale browser tabs. Instance A submitted a failed first response in M1. Instance B, opened earlier, switched to M2 and edited its hypothesis. Stored module IDs changed from `['1']` to `['2']`; A's first response disappeared from persistent storage. This was not a reset or direct learner edit of localStorage. A real two-tab browser reproduction was not possible here and remains a required follow-up.

The implementation's per-attempt snapshots are isolated objects. The persistence container holding those objects is not protected against lost updates. Calling all records “immutable” without this qualification overstates the guarantee.

Small correction: reject stale saves with a visible single-writer conflict, or reconcile versioned maps without dropping attempts. A controlled evaluation may instead use a demonstrated single-window profile plus an external recorder that captures each first response immediately. That mitigation must be rehearsed and documented before relying on it.

### PR02 — malformed optional state can lead to destructive recovery

**Confirmed COMPONENT fault-injection failure; spontaneous occurrence not observed.** In AUD-P06, one invalid M6 draft field was injected into the supplied six-module authored legacy record. `loadProgress()` returned an empty map and a warning (`src/lib/storage.ts:9–16`). The raw store initially remained intact. Editing the new session's M1 hypothesis then saved only M1, replacing the original store and losing the other modules' valid evidence (`src/App.tsx:16`).

This recovery weakness predates or extends beyond the new retry mechanism; it should not be described as a newly introduced retry bug. It materially affects AQ04's end-to-end evidence-preservation claim and upgrades the AQ08 dependency for evaluation use.

Small correction: quarantine/export the unreadable raw value before any replacement write; preserve valid module records; block autosave into the same key until recovery is explicitly resolved. Pilot rule meanwhile: stop on a storage warning and let the moderator preserve the raw record; do not continue typing into a recovery session.

### PR03 — new practice-draft metadata is not runtime-validated

**Confirmed COMPONENT fault-injection failure.** `loadProgress()` validates older Work fields and M6 state but does not validate `practiceDrafts`. AUD-P07 supplied a draft with an empty presentation-order array. Loading returned no warning; rendering then threw at `src/Exercise.tsx:27` when reading a missing group order.

No normal interaction was observed to create that malformed order. This is a robustness finding, not a claim that an ordinary learner's current history is already corrupt. Validate the optional shape and quarantine an invalid draft without discarding attempt history. This is a small state-boundary fix, not an architecture rewrite.

### Expected limitations that remain, without being mislabeled as regressions

- **M6 remains position-patterned.** Its five 2-point options and valid context choices are first in their arrays (`src/data/decisionContent.ts:2–44`; `src/DecisionForm.tsx:16–17`). AUD-P02 completed all three structured stages with placeholder text and first-position statements, each 10/10. The status correctly remained **Pending independent review**. This does not defeat the independent memo assessment; it demonstrates why that assessment is necessary. AQ01's implemented shuffle scope was M1–M5.
- **Repeated guessing is still possible in guided practice.** Fresh nonblank reflections are records, not semantic proof. AUD-P03 showed a consumed M6 note is rejected until rebound to the latest attempt; explicitly re-entering the same literal text can still pass the presence check. That is disclosed behavior, not evidence the learner understood the correction.
- **Initial ordering is deterministic for untouched M1–M5 questions.** AUD-P01 found that a fresh all-first policy passes two of five primaries, not all five. A learner can memorize per-question positions or numeric fixture answers across resets. Guided-practice completion must not be used as the independent outcome.
- **Reset and file-owner access are deliberate powers.** A confirmed reset deletes history; an owner of the repository can read all private forms. Properly scoped moderator delivery, exposure recording and external backups are the safeguards. Do not promise secure examination software.

## Transfer-form findings

No material arithmetic error was found in the reviewed answer values. However, arithmetic is only one part of form validity:

1. **M3C reuses a taught numerical example exactly.** Compare `src/RetentionExplorer.tsx:24` with `docs/educational-audit/UNSEEN_TRANSFER_EXERCISES.md:180–184`. The surrounding censoring/horizon questions add reasoning, but its pooling calculation cannot be described as fully unseen numerical transfer.
2. **Form B is not demonstrated equivalent to A/C.** B adds post-treatment segmentation and several missingness-bound tasks; C contains shorter prompts and stronger cues. The common 50-point scale does not equate them.
3. **M2B permits a justified refusal of a point estimate**, while its key can be read as additionally requiring numerical bounds. Set the scoring policy before responses are collected.
4. **M3B's “confirmed retention” wording is ambiguous.** A confirmed-return fraction can be a valid lower bound; it must not be penalized merely for using that label with the correct scope.
5. **M5C's “observed pass increased” is ambiguous between count and rate.** Clarify the metric or accept a learner who explicitly resolves that ambiguity.
6. **The 45-minute claim is unvalidated.** It is an allocation sum, not an observed completion time. No human timing or rater calibration has occurred.

The restricted `ASSESSMENT_FORM_VALIDATION.md` provides item-level checks and preflight decisions. It contains answer-sensitive details and must remain with moderators/reviewers.

## Deferred issues and readiness

AQ09 is substantially improved by the complete repository, lockfile and hash inventory. Reproducibility is still constrained by an external-path preservation verifier and a Chrome-specific browser requirement. AQ05's fork is openly disclosed and independently reproduced, but no learner bridge activity was added. AQ06, AQ07 and AQ11 remain content/usability/accessibility uncertainties rather than measured learner failures. AQ10's rubric-count heading mismatch remains. AQ08 is now more than a generic backup concern because PR01–PR03 demonstrate concrete preservation/recovery weaknesses.

No new module, backend, RAG system, cloud review service or curriculum rewrite is needed. Priorities are narrowly scoped: reliable evidence capture, controlled forms and scoring, feasible timing, private administration and a preflight on the actual browser used in the evaluation.

No statistical educational effectiveness, causal learning improvement or professional AI PM readiness can be inferred from this audit. The proposed first-person study is a feasibility and transfer-observation exercise, with form, exposure, practice and rater limitations reported explicitly.

## Evidence index

Supplementary evidence is in the accompanying audit ZIP: `unit_results.json`, `unit_final.log`, `build_checks.json`, `python_checks.json`, individual oracle logs, `auditor_component_probes.json`, the final external probe transcript/source, `auditor_offline_probes.json`, `http_private_exposure.json`, `transfer_key_checks.json`, browser inventory/launch/download logs and source preservation inventory. These are software/authored-probe results, not participant outcomes.

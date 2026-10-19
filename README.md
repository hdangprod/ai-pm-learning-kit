# AI PM Learning Lab

A local-first React + TypeScript workspace for product analytics, using the supplied English AI curriculum. Modules **1: Data literacy**, **2: Funnel analysis**, **3: Cohort & retention analysis**, **4: Segmentation & Simpson’s paradox**, **5: Causal reasoning**, and **6: Evidence-based product decisions** are implemented. Verification covers all six modules; see [PROGRESS.md](PROGRESS.md) for exact commands, results and screenshots. The educational audit has been inspected and AQ01–AQ04 remediation adds stable option IDs, assistance-separated practice and external independent review. Educational effectiveness has not been measured.

## Read the specifications

- [Learning experience](LEARNING_EXPERIENCE_SPEC.md)
- [Interactive exercises and answer mapping](INTERACTIVE_EXERCISE_SPEC.md)
- [UI/UX](UI_UX_SPEC.md)
- [Technical acceptance criteria](TECHNICAL_ACCEPTANCE_CRITERIA.md)
- [Source audit and gaps](docs/SOURCE_AUDIT.md)
- [Explicitly authored teaching extensions](docs/AUTHORED_CONTENT.md)
- [Actual verification status](PROGRESS.md)
- [Actual 42-day study-plan mapping](docs/STUDY_PLAN_MAPPING.md)
- [Module 2 fixture, dictionary and authored content](docs/MODULE_2_DATA.md)
- [Module 3 retention fixture, contract and authored content](docs/MODULE_3_DATA.md)
- [Module 4 strict reversal fixture, controls and authored content](docs/MODULE_4_DATA.md)
- [Module 5 source calculations, learning mapping and authored content](docs/MODULE_5_DATA.md)
- [Six-module consistency audit](docs/CROSS_MODULE_CONSISTENCY.md)
- [Module 6 scenario, assumptions and grading contract](docs/MODULE_6_SCENARIO.md)
- [Module 6 instructor anchors, for after an attempt](docs/MODULE_6_INSTRUCTOR.md)
- [Final six-module technical completion report](docs/TECHNICAL_COMPLETION_REPORT.md)

## Local setup

Node 20+ and npm are required. No API key or paid service is used. One-time package and browser downloads require network access; the built application uses only local assets.

```sh
npm ci --ignore-scripts --no-audit --no-fund
npm run dev
```

Open the localhost URL printed by Vite. For production assets:

```sh
npm run build
npm run preview
```

The generated package-lock.json is retained. Dependency declarations in package.json are unchanged. Use npm ci for subsequent reproducible installs. No installation scripts or browser downloads were needed. No deployment has been attempted.

## Verify

```sh
python3 scripts/verify_data.py
python3 scripts/verify_funnel.py
python3 scripts/verify_retention.py
python3 scripts/verify_simpson.py
python3 scripts/verify_causal.py
python3 scripts/verify_decision.py
python3 scripts/verify_preservation.py --original-materials /path/to/originals
python3 materials/AI_PM_Audit_Upgrade_I_II/instructor/verify_learning.py
npm test
npm run build
npm run test:e2e
```

The original six-module checkpoint passed on 2026-10-19. Current release results and required explicit original-material paths are in PROGRESS.md; missing external originals remain unverified. Strict checking also passed with `./node_modules/.bin/tsc --noEmit --strict`. Browser tests use an existing Google Chrome installation via `channel: chrome`, with desktop and mobile emulation, against the production build. If Chrome is unavailable, request separate approval before any browser download. Tests cover overflow, filters, wrong/correct answers, transfer, persistence, export, reset, source links, keyboard chart use and storage errors. Screenshots were inspected; see PROGRESS.md. A sandbox may require approval to bind the localhost preview port.

## Implemented module 1

The source includes a cohort/segment explorer, pass-rate and coverage views, chart inspection, table, dictionary, CSV download, hypothesis notes, numeric + reasoning checks, explicit solution reveal, transfer check and local journal export/reset. These are implemented and covered by the verification described above. The underlying source CSV is unchanged. Filters affect exploration; exercises retain explicitly stated cohort/segment scopes.

## Implemented module 2

The ordered funnel explorer counts distinct mature-cohort users, deduplicates delivery IDs, sorts events by time and requires signup < practice < feedback within the half-open seven-day window. Cohort/segment filters update the chart, totals and event audit; chart denominator switches between prior step and eligible signups. Zero eligible users produce unavailable rates. The fixed primary/transfer exercises require correct reasoning as well as calculation, with specific feedback, retry, explicit solution reveal and per-module saved attempts and notes.

The locked synthetic fixture yields **8 → 6 → 4**, **66.6667% feedback/practice** and **50% feedback/signup**. The downloadable users/events JSON includes provenance, dictionary and intentionally rejected rows. Receiving feedback is product activity; it does not establish learning effectiveness. All new lesson/fixture content is identified in [MODULE_2_DATA.md](docs/MODULE_2_DATA.md).


## Implemented module 3

The cohort explorer introduces a visual D7 timeline before formulas, then compares exact-day returns, pooled counts and event-level treatment. It distinguishes mature observed zero from right-censored unavailable results, counts each user once and accepts practice or feedback without prior funnel completion. Rolling-retention definitions include an explicit horizon but no rolling metric is computed.

Locked results: Oct1 **2/4 =50%**, Oct8 **1/4 =25%**, Oct15 **unavailable**, pooled **3/8 =37.5%**. The original Module2 diagnostic creates a third D7 returner; the separate retention fixture transparently reassigns that single synthetic event to an already-returning user. Existing source fixtures are preserved. See [the data/lineage contract](docs/MODULE_3_DATA.md).

Before instructor reveal the learner records a tentative explanation and submits interpretation/investigation choices. Numeric + structured interpretation + next investigation are required to pass primary practice; transfer also checks pooling. Reflection text is presence-checked for reveal, not automatically graded. Optional progress fields preserve all previous module work under the existing storage version. Final verification:54 unit/component tests,16 desktop/mobile E2E tests, strict TypeScript, production build, Python oracles and screenshot inspection.


## Implemented module 4

The Segmentation Explorer compares ProductA/B pooled and subgroup pass rates, numerator/denominator rows and original assessed mixes. Native novice-share sliders hold subgroup rates fixed while changing illustrative mixtures, with common50/50 and original-mix controls. The source weekly composition exercise is explicitly separate and non-strict.

Locked counts yield A74%,B36% pooled; B leads by10 percentage points in both groups but trails by38 points pooled. Common50/50 reweighting gives A50%,B60%, as an illustration rather than an experiment. Primary36% and transfer90% remain fixed regardless of exploration. Practice additionally requires composition, causal scope, next-investigation and percentage-point reasoning; instructor reveal follows a saved proposal and attempted reasoning groups. Free-text meaning is not automatically graded.

Final verification:83 unit/component tests,22 desktop/mobile E2E tests, strict TypeScript, production build, independent rational-arithmetic oracle and screenshot inspection. All earlier module regressions pass. Original datasets and version1 progress are preserved. See [Module4 documentation](docs/MODULE_4_DATA.md) and [PROGRESS.md](PROGRESS.md) for lineage, exact commands, corrections and limits.


## Implemented module 5

The causal workbench reuses the original weekly simulation: +43.75% relative sessions, coverage 74% → 47% (−27 percentage points), assessed pass rates 70.27% → 63.83%, and Week 2 novice coverage 25% with 45 unknown outcomes. Segment and reference controls recompute the observed metrics; fixed assessments remain independent. Competing explanations, a hypothetical relationship map, missing-follow-up views, five study designs and a proposal checklist support a bounded decision.

Primary and transfer practice require calculation plus structured interpretation and a defensible investigation. Instructor explanations require an explicit reveal after the existing attempt/reflection gates. The proposed delayed unaided evaluation is not an executed study. Hypotheses, reflection, immutable attempts, consulted history and journal persist locally. Additional authored teaching content and limits are listed in [MODULE_5_DATA.md](docs/MODULE_5_DATA.md). See the current checkpoint for final test counts, screenshot inspection and exact commands.


## Implemented module 6

The Decision Room separates traceable source context from a versioned **SIMULATED decision scenario**. Inspect/classify evidence, compare A bounded prototype / B incumbent / C human-supported pilot / D targeted research, explore role-specific capacity and write an initial memo. All four strategies can pass under their stated conditions; choosing a strategy alone earns no points.

Five structured dimensions score0–2 each, maximum10. Critical overclaims, data-rights violations, infeasible plans and incomplete memo/date fields block passing. Memo text is presence-checked, never semantically certified. This rubric is separate from the study plan’s0–8 operating rule and the original textbook assessments.

After the initial decision, explicitly reveal one saved capacity/rights/coverage variant, then defend a kept or changed strategy in a fresh memo. Original/revised snapshots remain separate, with every failed attempt retained. A distinct incumbent-success transfer requires scoped residual reasoning before completion. Each stage has its own gated instructor guidance and sticky consultation history. Memos, drafts, classifications, matrix state, challenge, attempts and the shared journal persist locally and export with points-based definitions. See the current checkpoint for final commands, results and desktop/mobile evidence.


Progress uses browser localStorage (`ai-pm-lab:v1`, plus explicitly acknowledged raw recovery backup keys); no telemetry or backend. Work stays in this browser and origin. Export JSON to keep a portable copy; import is not implemented. Storage errors show a warning. “Reset this activity” clears only the active module’s saved work after confirmation. The footer “Reset progress” clears this whole lab after confirmation, preserving unrelated storage. Export includes metric definitions, units, fixed assessment scopes and question labels; saved version 1 records remain unchanged. Explorer filters/checklist selections are session-only; copy design choices into the saved journal. Hiding a solution does not erase the record that it was consulted.

## Provenance and limitations

`materials/` preserves the provided ZIP contents. Markdown sources accompany the PDFs; XLSX competency learning standards and JSON were inspected. No completed curriculum research was repeated. Supplied document instructions were treated as source content, not authorization to run field research.

`public/data/case_b_weekly.csv` is the original synthetic four-row weekly dataset. `scripts/prepare_data.py` creates its typed JSON representation and `docs/DATA_MANIFEST.json` records hashes. The actual research corpus is a separate record extract, never used as a product-event log. Synthetic data does not constitute research evidence.

The separately supplied `AI_PM_Ke_hoach_tu_hoc_6_tuan.md` has now been read and preserved in `materials/`. The [42-day mapping](docs/STUDY_PLAN_MAPPING.md) retains October 19–November 29, 2026, daily 09:00–11:00 Asia/Ho_Chi_Minh, 120 minutes including breaks. The textbook's chapters, exercise sequence and required artifacts remain primary. Funnel and retention labs are optional advanced extensions after the foundation phase; modules do not map one-to-one to weeks. The mapping flags the original day 41 timing discrepancy rather than silently rewriting it. No Google Calendar events were changed. Chapters 9–36 remain source outlines, not delivered lessons.

The original weekly example is a composition effect with equal within-segment rates, not a strict Simpson reversal. App completion means narrow practice checks, never job readiness or demonstrated learning efficacy. Free-text journal reasoning requires self-review or a human reviewer. There has been no learner study or delayed independent mastery assessment.

## Educational assessment remediation

M1–5 practice grades stable semantic option IDs, varies order on retries and saves each edited draft ordering across reload. Original v1 choice labels and scores remain readable; no old attempt is regraded. Before an assisted retry, record what changed in your reasoning (presence only, not semantic grading). History/export distinguish initial, feedback-assisted, solution-assisted and legacy-unknown evidence. In-app transfer is explicitly **Same-case transfer practice**.

Module6 retains structured0–10 points and separately displays **Pending independent review**. Export its readable memo-review packet and use the [human rubric](docs/INDEPENDENT_MEMO_REVIEW_RUBRIC.md). Strong, weak, contradictory and placeholder text all require actual review; the app never awards a semantic memo pass. Justified alternatives and justified kept direction are allowed. Signed review worksheets remain external; there is no fake reviewer authentication.

Independent baseline/immediate-post/delayed assessment uses an offline moderator workflow. Moderators: read [administration instructions](docs/ASSESSMENT_ADMINISTRATION.md), then use `python3 scripts/assessment_session.py --help`. Deliver only one assigned learner directory, record form/key exposure and preserve calculation/memo artifacts. Do not give learners the complete repository or audit pack before testing. Keys are outside application assets; development requests to private audit paths are denied. No item secrecy is promised against the local file owner. Two human dry runs and timing/readability review remain required before study adoption.

See [baseline](docs/REMEDIATION_BASELINE.md), [confirmed source findings](docs/AQ01_AQ04_SOURCE_FINDINGS.md), [compatibility](docs/ASSESSMENT_COMPATIBILITY_REPORT.md), [implementation report](docs/REMEDIATION_IMPLEMENTATION_REPORT.md), and [deferred AQ05–AQ11 backlog](docs/REMEDIATION_BACKLOG.md). Audit originals under `docs/educational-audit/` and the supplied ZIP remain unchanged. No curriculum research or calendar changes were performed.

Additional offline checks: `python3 scripts/verify_assessment_workflow.py`; `python3 docs/educational-audit/support/verify_transfer_keys.py --output /private/tmp/lab-transfer-key-checks.json`. The latter reruns auditor-authored arithmetic checks, not a learner study.

## Evidence preservation release (PR01–PR03)

The storage boundary now rejects stale sessions under an origin-wide Web Lock, validates optional practice drafts and pauses autosave when saved state needs recovery. Wait for **Saved on this device** before leaving or resetting. A pending/unsaved session prompts before unload. Conflicts preserve newer stored evidence; export unsaved session work before explicitly reloading latest. Malformed drafts are isolated without dropping valid submitted attempts; export the exact raw recovery record before acknowledging adoption. Recovery backups survive ordinary reset. Unsupported locks fail closed; the verified setup is installed Chrome on localhost.

Technical release: `ai-pm-lab-evidence-20261020-b1eb2391cc57` (275 unit/component tests,66 desktop/mobile browser tests). [Release verification](docs/EVALUATION_RELEASE_VERIFICATION.md), [storage contract](docs/STORAGE_CONFLICT_RECOVERY_SPEC.md), [fix report](docs/PR01_PR03_FIX_REPORT.md), [baseline](docs/EVIDENCE_PRESERVATION_BASELINE.md) and [unsigned moderator handoff](docs/MODERATOR_TECHNICAL_PREFLIGHT.md). Overall evaluation remains conditional on human form decisions, timing, calibration, eligibility and an operator-signed rehearsal; software tests do not complete those gates.

Original-material checks are portable: `python3 scripts/verify_preservation.py --original-materials /path/to/originals` (or `--curriculum-zip /path/to/original.zip --study-plan /path/to/original.md`). Missing external originals report UNVERIFIED/exit2. `python3 scripts/verify_evidence_preservation.py` checks protected release inputs; `python3 scripts/verify_remediation_preservation.py --audit-zip /path/to/original-audit.zip` retains the original expected archive hash. The older educational-audit ZIP is currently missing; extracted-file checks pass but its archive identity remains unverified. No replacement archive is synthesized.

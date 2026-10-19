# AI PM Learning Lab — Module 5 verified checkpoint

Date: 2026-10-19. Modules **1–5** pass their applicable software verification gates. Module 5 is available through **Correlation & causation**. Module 6 remains specified and unimplemented. The [Module 4 checkpoint](docs/verification/module-four-checkpoint.md) preserves the previous status and verification history.

This checkpoint verifies software, arithmetic and implemented practice rules. It does not establish measured learner mastery, educational effectiveness, real English-learning outcomes or a causal product effect.

## Implemented capabilities

[Workbench](src/CausalExplorer.tsx), [pure calculations](src/lib/causal.ts), [lesson and assessments](src/data/module5.ts), [explanations/designs](src/data/causalContent.ts), [source and teaching contract](docs/MODULE_5_DATA.md).

- Intuitive English-tutor activity-versus-learning scenario, hypothesis input and saved decision journal.
- Original CSV observations with segment and reference/comparison controls, relative session-count change, rate differences in percentage points, interactive chart inspection and an underlying row table.
- Missing-follow-up visualization labels assessed versus unknown outcomes. Both cohort windows are complete; assessment nonresponse differs from Module 3's future-window censoring.
- A–E competing explanations plus an explicit contradicted claim; classification feedback separates observed composition, unresolved mechanisms and contradiction. Explanations may coexist and do not receive equal evidential support by default.
- A scrollable relationship map with hypothetical dashed arrows and topic highlighting. No path is represented as identified by the data.
- Five selectable designs, each with question, required data, limitations, bias, interpretation and remaining uncertainty. A six-item evidence planning checklist updates its count without awarding practice completion.
- A clearly proposed delayed unaided evaluation against a suitable configured incumbent. Pre-use individual baseline, eligibility, seven-day use, assessment seven days after use ends, a 24-hour response window, assignment, coverage audit and adherence checks are proposed design choices, not source facts or executed results.
- Primary practice requires 43.75% AND interpretation, competing explanations, defensible investigation and correct metric scope. Transfer requires 25% AND unknown-outcome handling and a defensible follow-up. Numbers alone cannot pass either stage.
- Retry, explicit instructor reveal, immutable attempt snapshots, consulted-solution history, reload persistence, hypothesis/reflection/journal and export reuse existing components. Reveal requires an attempt, a written interpretation and attempted answers in every primary reasoning group. Free text is not semantically graded.
- Additive per-activity reset preserves all other modules. The existing confirmed whole-lab reset remains. Exports now explain metric IDs, units, fixed scopes and choice labels while preserving raw saved records and omitting hidden answer keys.

Explorer filters, explanation classifications, selected design and checklist are session-only. The UI explicitly asks learners to copy chosen design/unresolved items into their saved journal; it does not pretend those explorer selections persist.

## Locked arithmetic verified independently before implementation

The unchanged four-row original `practice/case_b_weekly.csv` supplies every Module 5 calculation. `scripts/verify_causal.py` reads the CSV with Python standard-library CSV/Fraction arithmetic, checks explicit row tuples and copy identity, and imports no application functions. The [pre-implementation result](docs/verification/module-five-oracle.log) predates Module 5 app code; the [final rerun](docs/verification/module-five-oracle-final.log) confirms preservation.

| Measure | Week 1 | Week 2 | Interpretation |
|---|---:|---:|---|
|Eligible learners|100|100|Separate weekly groups|
|Sessions|320|460|(460−320)/320 ×100 = **43.75% relative increase**|
|Assessed|74|47|26 versus 53 outcomes unknown|
|Passed|52|30|Observed respondents only|
|Coverage|74/100 =74%|47/100 =47%|**−27 percentage points**, not −27% relative|
|Pass rate among assessed|52/74 ≈70.27%|30/47 ≈63.83%|≈−6.44048 percentage points; no effect identified|

Week 2 novice: eligible60, sessions300, assessed15, passed6. Coverage **15/60 =25%**; **45 unknown outcomes**. Assessed pass rate6/15 =40% does not describe all60. Reversing the session reference yields (320−460)/460 ≈−30.43478%, not −43.75%. Novice eligible share changes20%→60%; experienced assessed pass rates remain75% and novice40% within both weeks. Stable descriptive rates do not prove no effect.

## Exact commands and final results

Existing installed dependencies and Google Chrome were used. Environment: macOS, Node20.5.0/npm9.8.0. Desktop1280×720 CSS pixels; iPhone13 Chrome emulation390×664. Browser tests serve the production build with the existing `npm run preview -- --port 4173` configuration. No installation, lifecycle script, browser download, global package, paid API or deployment was needed. Localhost/Chrome execution used the approved escalation path; no permissions were bypassed.

| Exact command | Final result | Evidence |
|---|---|---|
|`python3 scripts/verify_causal.py`|PASS, exit0|Pre-implementation and final oracle logs linked above; original row counts, totals, relative/point differences, coverage, missing outcomes and source/public/typed identity|
|`python3 scripts/verify_data.py`|PASS, exit0|M1 arithmetic regression|
|`python3 scripts/verify_funnel.py`|PASS, exit0|M2 ordered distinct-user regression|
|`python3 scripts/verify_retention.py`|PASS, exit0|M3 arithmetic and declared fork lineage|
|`python3 scripts/verify_simpson.py`|PASS, exit0|M4 exact rational rates/reversal/reweighting; [all prior oracle output](docs/verification/module-five-regression-oracles.log)|
|`python3 materials/AI_PM_Audit_Upgrade_I_II/instructor/verify_learning.py`|PASS, exit0|Unchanged source instructor checks; same regression log|
|`npm test`|PASS, exit0; **134 tests /12 files**|[Unit/component log](docs/verification/module-five-unit.log): all83 previous tests +39 causal calculation/feedback +3 RTL +9 consistency tests|
|`./node_modules/.bin/tsc --noEmit --strict`|PASS, exit0; no diagnostics|[Strict TypeScript log](docs/verification/module-five-typescript.log)|
|`npm run build`|PASS, exit0|[Production build log](docs/verification/module-five-build.log); strict `tsc -b`, Vite; JS263.28kB/gzip80.19kB; CSS21.64kB/gzip5.64kB|
|`npm run test:e2e`|PASS, exit0; **32 tests**|[Desktop/mobile log](docs/verification/module-five-e2e.log): all22 previous tests +6 M5 +4 cross-module audit cases|
|`python3 scripts/verify_preservation.py`|PASS, exit0|[Integrity log](docs/verification/module-five-integrity.log); all8 existing data hashes,74 original ZIP files, exact study-plan copy,42 dates and dependency hashes|

The preservation script intentionally uses the supplied original ZIP/plan paths for independent comparison; those external source files must remain available to rerun that gate elsewhere. It does not regenerate data or update expected hashes.

### Calculation, assessment and reliability coverage

New pure-function tests cover all original totals, segment/reference changes, relative percentages versus rate-point differences, zero denominators, empty populations, null/undefined counts, partially missing aggregates, negative/nonfinite/fractional/unsafe counts, overflow, count hierarchy, duplicate rows, unknown scope and input immutability.

Every incorrect primary/transfer structured choice is individually checked for its specific feedback. These include activity-as-learning, correlation-as-causation, before/after-as-randomized, percentage points versus relative percent, aggregate versus individual change, missing-as-zero, complete-case generalization, segment-as-treatment, unmeasured cause as confirmed, proposed-as-executed study, stable subgroup rates as no-effect proof, and nonsignificance as no-effect proof. Targeted numeric misconception hints are also checked. Missing reasoning groups cannot pass or unlock transfer.

RTL/browser checks cover filter-independent assessment answers, incomplete reasoning and reflection reveal gates, explicit reveal/hide without automatic answer display, retries, primary/transfer, immutable selected indices and reflection snapshots, consulted history, reload persistence, actual downloaded export JSON, per-activity reset/cancel, existing global reset and storage-error warnings. Browser checks also exercise chart Enter, checkbox Space, focused/scrolling table and relationship map, navigation heading focus, no page overflow and no uncaught page errors. Existing tests were not weakened.

## Issues found and corrected

1. The first browser run had **28 passes /4 failures**, all in new M5 tests selecting wrapped dropdowns with exact label-text matching. Playwright included option text in that selector's label match. New tests now select the same labeled controls by combobox role and exact accessible name, retaining every numerical and interaction assertion. [Initial browser failure log](docs/verification/module-five-e2e-initial.log). All22 earlier browser tests passed throughout.
2. Review caught an empty classification string being coerced to numeric0, potentially marking an unanswered composition card as checked. Empty choices now request a status; RTL covers clearing a previous selection before checking again.
3. Added an aggregate safe-integer overflow guard after reviewing the new count summation path; a regression checks overflow rejection and no input mutation. Unknown counts still propagate as unavailable rather than zero.
4. The [cross-module audit](docs/CROSS_MODULE_CONSISTENCY.md) found global-only reset and undefined export metric context. Added isolated activity reset and additive export definitions without changing old behavior, storage schema, keys, snapshots or dependency versions.
5. Relationship-map arrow endpoints now meet node boundaries so the nodes do not obscure the arrowheads. Proposal timing is explicitly specified as an authored design choice rather than left as an undefined delayed interval.
6. Mobile screenshot review found an awkward numeric/unit wrap in the two-column metric cards. The M5 cards now stack on narrow screens, its select controls use available width, and the map has a visible horizontal-scroll hint. Earlier modules’ layouts are unchanged.

Final result: **134/134 unit/component and32/32 browser tests pass**, strict/build/oracles/integrity pass. No tested implementation or permission blocker remains.

## Screenshots and visual inspection

Desktop/mobile screenshots were inspected for navigation, numeric readability, missingness labels, explanation states, map containment, design details and assessment/feedback. Tables and the map scroll inside their own regions on narrow screens. Chart values remain textual, and missing outcomes use text plus hatching rather than color alone. The five design controls show the active selection; forms and feedback wrap without page-level overflow. This is targeted visual/keyboard inspection, not a full assistive-technology audit.

| State | Desktop | Mobile emulation |
|---|---|---|
|Lesson/navigation|[Viewport](docs/verification/module-five-desktop-viewport.png)|[Viewport](docs/verification/module-five-mobile-viewport.png)|
|Observed calculations|[Dashboard](docs/verification/module-five-desktop-dashboard.png)|[Dashboard](docs/verification/module-five-mobile-dashboard.png)|
|Missing follow-up|[Coverage](docs/verification/module-five-desktop-workbench.png)|[Coverage](docs/verification/module-five-mobile-workbench.png)|
|Explanation classifications|[Explanations](docs/verification/module-five-desktop-explanations.png)|[Explanations](docs/verification/module-five-mobile-explanations.png)|
|Hypothetical relationships|[Map](docs/verification/module-five-desktop-map.png)|[Map](docs/verification/module-five-mobile-map.png)|
|Design/proposal/checklist|[Design](docs/verification/module-five-desktop-design.png)|[Design](docs/verification/module-five-mobile-design.png)|
|Structured practice and transfer|[Feedback](docs/verification/module-five-desktop-feedback.png)|[Feedback](docs/verification/module-five-mobile-feedback.png)|

## Preservation, authored material and remaining limits

[Cross-module consistency report](docs/CROSS_MODULE_CONSISTENCY.md) records fixture/chart/table/key/download agreement, the distinct M2/M3 fork, separate M4 strict reversal, original weekly M5 source, visible provenance, legacy progress, reset isolation and export units. All8 manifest hashes remain unchanged. All74 original ZIP files remain byte-identical; no curriculum research was repeated.

Dependency hashes remain:

- package.json: `86c69842a148a6053a24f1776d63308889fc5b4f72d21a5d61570c5b5246d5e5`
- package-lock.json: `0677cf4316a4770e4b4c7e31d67aae41f29f0742b298a41852a6eda9bf7a36a1`

Storage stays `ai-pm-lab:v1` /version1. Export additions do not migrate or rewrite saved Work. Reset touches only this app's stored data, with explicitly separate activity and whole-lab scopes. Import remains unimplemented; work is local to this browser/origin. Hidden instructor explanations are UI gates, not server-side secrets in this static app.

[MODULE_5_DATA.md](docs/MODULE_5_DATA.md) maps each new activity to objective, conceptual source, dataset, exercise, expected response, feedback and practice criterion, and identifies all authored extensions. The intuitive narrative, A–F classification, hypothetical map, design summaries, explicit protocol timing, checklist and structured misconception questions are authored instruction. No unfinished advanced chapter or real research result is claimed. The source 5D constrained analyst/observation exercise still belongs to the textbook.

The [42-day mapping](docs/STUDY_PLAN_MAPPING.md) retains October19–November29,2026 and all original task rows. M5 supplements competing explanations and methods on days5/15–17, with optional error review; it creates no mandatory session and replaces no exercise. The user’s09:00–11:00 Asia/Ho_Chi_Minh preference remains; no calendar events were changed. Day41's original break-allocation discrepancy remains documented.

Missing evidence remains missing: individual baseline, assignment, acquisition, exposure, response mechanism, validated unaided outcome, experiment results and effect precision. The app cannot select the true causal explanation or semantically grade a research proposal. No physical mobile device, Safari or comprehensive screen-reader audit was performed; mobile verification uses Chrome emulation. No learner study or delayed independent mastery measurement exists. Module6 has not been started.

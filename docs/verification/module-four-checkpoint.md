# AI PM Learning Lab — Module 4 verified checkpoint

Date: 2026-10-19. Modules **1–4** pass their applicable software verification gates. Module4 is available through **Segmentation**. Modules5–6 remain specified and unimplemented. The [Module3 checkpoint](docs/verification/module-three-checkpoint.md) preserves previous results and fixture-lineage history.

This verifies implemented software and practice rules, not measured learner mastery or educational effectiveness. All activity/count data in this module is explicitly synthetic and descriptive.

## Implemented learning experience

[Explorer](src/SegmentationExplorer.tsx), [metric functions](src/lib/segmentation.ts), [lesson and assessment](src/data/module4.ts), [fixture/content contract](docs/MODULE_4_DATA.md).

- An intuitive novice-heavy versus experienced-heavy class example precedes formulas.
- ProductA/B comparison cards, chart inspection, a segment selector and numerator/denominator table show the selected rates. Full subgroup comparisons and composition remain explicitly unfiltered so the context for the pooled result stays visible.
- Assessed-user composition bars and weighted formulas connect the count totals to their mixture weights.
- Two keyboard-accessible novice-share sliders keep subgroup rates fixed while independently changing hypothetical product mixes. Common50/50 and original-mix controls show how aggregation changes. Every scenario is labeled an illustrative calculation, not an observed experiment or causal effect.
- The original weekly source example is separately labeled composition-only, with its unchanged within-segment rates and original CSV download. It is not called a strict reversal.
- Primary practice requires36% AND composition, causal scope, next investigation and percentage-point reasoning. Transfer requires90% AND appropriate subgroup scope and illustrative reweighting interpretation. Correct numbers alone cannot pass.
- Existing reflection/solution gating, retry, journal, saved attempt snapshots, progress, export and reset are reused. Module4 supplies clearer instructions for its four primary reasoning groups; Modules1–3 retain their existing behavior and instructions. Free text is stored, presence-checked for reveal, and never semantically graded.

## Locked arithmetic and hypothetical checks

| Product / selection | Passed | Assessed | Pass rate |
|---|---:|---:|---:|
|A novice|2|10|20%|
|A experienced|72|90|80%|
|A pooled|74|100|74%|
|B novice|27|90|30%|
|B experienced|9|10|90%|
|B pooled|36|100|36%|

- Within novice and experienced, B−A=**+10 percentage points** each.
- Pooled B−A=**−38 percentage points**. Relative change versus A is−19/37≈−51.35135%, a different quantity.
- A's assessed mix is10% novice/90% experienced; B's is90%/10%.
- Common50/50 gives illustrative A50%,B60%, or+10 points for B. At every common whole-percent novice weight from0% to100%, the rational-arithmetic oracle confirms the same+10-point difference.
- Independent weights A0% novice/B100% novice give A80%,B30%, illustrating another aggregate comparison while subgroup rates remain fixed.
- The original weekly example has novice40% in BOTH weeks and experienced75% in BOTH weeks, with pooled52/74→30/47. It is non-strict composition change, not the authored reversal.

Neither the reversal nor reweighting identifies a causal effect, proves causal confounding, or establishes universal A/B superiority. The lesson requests coverage, definitions, baseline/acquisition evidence and a suitable comparison design before product investment.

## Data and preservation

Separate deterministic **strict-simpson-v1** fixture: four product×pre-use-segment aggregate rows. [Generator](scripts/generate_simpson.py), `src/data/strict-simpson.json`, identical `public/data/strict-simpson-v1.json`, and [SHA256 manifest](docs/DATA_MANIFEST.json). No RNG or real research data.

All original source/research materials, weekly CSV/JSON, Module2 event copies and Module3 retention copies remain unchanged. The previous six data-file manifest hashes were verified against the Module3 checkpoint, not regenerated from changed data. New manifest entries only add the two Module4 copies. No conflicting fixture required a fork in this module.

No dependencies, versions or lockfile changed; no install scripts, browser downloads or global installations. Retained hashes:

- package.json: `86c69842a148a6053a24f1776d63308889fc5b4f72d21a5d61570c5b5246d5e5`
- package-lock.json: `0677cf4316a4770e4b4c7e31d67aae41f29f0742b298a41852a6eda9bf7a36a1`

The existing `ai-pm-lab:v1` storage key and schema remain. Browser export tests compare all prior module objects, including history, reflection and consulted state, with their original seeded values after Module4 use. No migration or clearing occurs. Confirmed reset deletes only this app's work after confirmation, preserving unrelated storage keys.

## Exact commands and final verification

Environment: macOS, Node20.5.0, npm9.8.0. Existing installed Chrome via Playwright channel:chrome. Desktop1280×720 CSS pixels; mobile iPhone13 emulation390×664. E2E serves the production `dist/` through `npm run preview -- --port 4173`, and the test-owned server exits after the run.

| Command | Final result | Evidence |
|---|---|---|
| `python3 scripts/generate_simpson.py` | PASS, exit0 | Four explicit locked rows, identical source/download JSON copies, manifest entries preserved |
| `python3 scripts/verify_simpson.py` | PASS, exit0 | [Independent oracle log](docs/verification/module-four-oracle.log); Python Fraction arithmetic for all counts/rates, strict direction reversal, pooled/relative differences,101 common weights and original-source non-reversal |
| `python3 scripts/verify_data.py` | PASS, exit0 | Module1 independent arithmetic regression |
| `python3 scripts/verify_funnel.py` | PASS, exit0 | Module2 independent arithmetic regression |
| `python3 scripts/verify_retention.py` | PASS, exit0 | Module3 independent arithmetic and original/fork lineage; all three in [regression oracle log](docs/verification/module-four-regression-oracles.log) |
| `npm test` | PASS, exit0; **83 tests in9 files** | [Unit/component log](docs/verification/module-four-unit.log):27 new metric/feedback cases +2 new RTL tests +all54 prior tests;6.65s |
| `./node_modules/.bin/tsc --noEmit --strict` | PASS, exit0 | [TypeScript log](docs/verification/module-four-typescript.log), no diagnostics |
| `npm run build` | PASS, exit0 | [Build log](docs/verification/module-four-build.log); strict-config `tsc -b`,1,600 modules,2.33s; JS230.67kB/gzip70.51kB, CSS19.15kB/gzip5.08kB |
| `npm run test:e2e` | PASS, exit0; **22 tests** | [Browser log](docs/verification/module-four-e2e.log):6 new Module4 tests +all16 Module1–3 regressions;25.9s |
| Python preservation/link/schedule assertions | PASS | Prior data and dependency hashes, original CSV and plan copy, all42 tasks/dates, valid report links |

Browser execution used the existing approved permission path for installed Chrome and localhost. No approval bypass occurred. Existing assertions and locked answers were not relaxed.

### Metric and feedback coverage

Tests verify all subgroup counts and rates, pooled sums, both possible reversal directions, ties/non-reversal, original weekly composition, unequal group sizes, empty/missing strata, zero denominators, safe integer counts, duplicate keys, invalid enums and weights, overflow and input immutability. Reweighting tests include original/common mixes, endpoint shares, independent mixes and positive-weight missing strata without imputation.

Every wrong structured option is tested for specific feedback: unweighted means, wrong assessed denominator, pooled-only/subgroup-only claims, percentage points versus relative change, randomization/segment confusion, universal A/B superiority and causal-confounding overclaims. A primary number without all reasoning groups cannot unlock transfer; a transfer number without interpretation cannot complete practice.

RTL/browser tests cover fixed assessment answers under experienced-only filtering and hypothetical60% B, solution gate with incomplete reasoning, incorrect/correct retries, transfer causal restraint, notes and historical choices after reload, actual downloaded export contents, consulted state, reset/cancel and disabled-storage warnings. Native sliders are tested with ArrowRight/Home/End; chart inspection, table focus/conditional horizontal scrolling, exact composition accessible name and page-width bounds pass.

## Issues found and corrected

1. First new RTL run: **81 passed,2 failed**. One test held a chart DOM node after its keyed remount; the other matched both slider-output statuses and exercise feedback. The new tests now re-query the chart and scope feedback to the exercise, retaining their expected numeric and reasoning assertions. [Initial log](docs/verification/module-four-unit-initial.log). No metric answers changed.
2. Module4's four required primary reasoning groups needed module-specific instructor-gate instructions. Added optional reflection help in module metadata; existing modules' instructions and gating are unchanged.
3. Accessibility review caught a floating-point composition label that could expose9.999…% instead of10%. It now uses formatted percentages, with an exact browser assertion for ProductB90.00% novice/10.00% experienced. No underlying counts/rates changed.

Final unit/component83/83 and browser22/22 pass. No tested software blocker remains.

## Screenshots and visual inspection

Inspected the lesson/navigation, full workbench, common-mix illustration and multi-part assessment on desktop/mobile. Charts retain text values; composition bars retain labeled counts and accessible descriptions. The native sliders have explicit labels and percentage-valuetext. Tables scroll within their keyboard-focusable container on mobile; page width remains within the viewport. This is targeted keyboard/visual inspection, not a complete assistive-technology audit.

| State | Desktop | Mobile emulation |
|---|---|---|
|Lesson/navigation|[Viewport](docs/verification/module-four-desktop-viewport.png)|[Viewport](docs/verification/module-four-mobile-viewport.png)|
|Counts, subgroups, composition and source distinction|[Workbench](docs/verification/module-four-desktop-workbench.png)|[Workbench](docs/verification/module-four-mobile-workbench.png)|
|Common50/50 illustrative weights|[Reweighting](docs/verification/module-four-desktop-counterfactual.png)|[Reweighting](docs/verification/module-four-mobile-counterfactual.png)|
|Reasoning, investigation and transfer|[Feedback](docs/verification/module-four-desktop-feedback.png)|[Feedback](docs/verification/module-four-mobile-feedback.png)|

## Authored material, study plan and remaining limits

[MODULE_4_DATA.md](docs/MODULE_4_DATA.md) lists all additional authored explanations and the dictionary: intuitive classes, strict fixture, weighted formulas, fixed-rate mixture controls, source-example distinction, percentage-point comparison, causal limits and misconception/investigation questions. These extend the locked specification; no finished Chapter16 text or empirical evidence was invented, and no curriculum research was repeated.

The [42-day mapping](docs/STUDY_PLAN_MAPPING.md) retains every original Chapter1/5/7 task and date. Strict reversal remains optional advanced supplementary work after foundations; it does not replace scheduled economics or textbook exercises. No Google Calendar action occurred. The existing Day41 break-allocation discrepancy remains documented.

Missing evidence remains missing: assessment coverage/rubric validity, baseline, acquisition, individual identities, product assignment, uncertainty and real outcomes are absent. Illustrative reweighting is not a trial or proof of confounding. Journals/proposals receive no automatic semantic grade. Mobile checks use Chrome emulation; physical devices/Safari and a comprehensive screen-reader audit remain untested. No measured mastery or educational effectiveness is claimed.

Module5 is not started and requires its own implementation and verification gates.

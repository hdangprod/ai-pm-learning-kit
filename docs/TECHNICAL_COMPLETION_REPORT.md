# AI PM Learning Lab — six-module technical completion report

Date: 2026-10-19. **All six requested modules are implemented and technically verified. The application is ready for an independent educational-quality audit.** This status refers to software, arithmetic, fixtures and explicit practice rules. It does not establish educational effectiveness, learner mastery, real product outcomes or professional readiness.

## Scope delivered

| Module | Working learning environment | Independent result / gate |
|---|---|---|
|1 Data literacy|Original weekly explorer, denominators, coverage, missingness, numeric/reasoning/transfer|Week1 pass52/74=70.27%; Week2 coverage47%; source unchanged|
|2 Funnel|Distinct mature ordered users, deduplication, timestamp/window audit, filters, reasoning/transfer|8→6→4; feedback/practice66.6667%; overall50%; upper boundary excluded|
|3 Retention|Exact D7 timeline, eligibility, cohort/segment audit, mature zero versus unavailable, reasoning/transfer|Oct1 2/4=50%, Oct8 1/4=25%, Oct15 unavailable; pooled3/8=37.5%; declared retention-only fork preserved|
|4 Segmentation|Strict reversal, pooled/subgroup rates, composition, hypothetical weights, causal restraint|A74%,B36% pooled; B+10pp in both strata; common50/50 illustration50%/60%; original weekly source separate|
|5 Causal reasoning|Observed comparisons, alternatives, relationship map, missingness, five designs, proposed evaluation, reasoning/transfer|Sessions+43.75%; coverage−27pp; assessed pass70.27%→63.83%; novice coverage25% and45 unknown; no causal effect inferred|
|6 Product decisions|Evidence classification, strategy matrix, role-cap sensitivity, initial/revised memos,3 changed facts, critical checks, transfer, history and stage-specific guidance|A–D accepted conditionally; five0–2 dimensions, max10; keep/revise both possible; separate incumbent-success condition; text presence/date only|

React/TypeScript static app, local assets and browser storage. No paid APIs, backend, external fonts, telemetry or required runtime network service. Serve the production build locally; this is not a hosted deployment or service-worker/PWA installation. No unrelated AI architecture, RAG, agent or advanced SQL module was started.

## Verification commands and evidence

Commands executed in the existing repository, using installed dependencies and Chrome. No dependency installation or browser download was needed.

```sh
python3 scripts/prepare_decision.py
python3 scripts/verify_data.py
python3 scripts/verify_funnel.py
python3 scripts/verify_retention.py
python3 scripts/verify_simpson.py
python3 scripts/verify_causal.py
python3 scripts/verify_decision.py
python3 materials/AI_PM_Audit_Upgrade_I_II/instructor/verify_learning.py
python3 scripts/verify_preservation.py
npm test
./node_modules/.bin/tsc --noEmit --strict
npm run build
npm run test:e2e
```

`prepare_decision.py` authored only the new Module6 fixture/copy and added two manifest entries. It was run before UI; the [pre-UI Python result](verification/module-six-oracle-pre-ui.log) locks scenario arithmetic before implementation. Read-only verification does not require rerunning the generator.

| Gate | Final result | Evidence |
|---|---|---|
|Vitest / React Testing Library|**215 passed,0 failed,15 files**|[Unit/component log](verification/module-six-unit.log);134 earlier tests +67 decision tests +5 component cases +9 final consistency cases|
|Playwright desktop/mobile|**46 passed,0 failed**|[E2E log](verification/module-six-e2e.log); all32 previous cases +10 M6 +4 final integration cases|
|Strict TypeScript|PASS, exit0, no diagnostics|[TypeScript log](verification/module-six-typescript.log)|
|Production build|PASS, exit0|[Build log](verification/module-six-build.log); strict-config `tsc -b` and Vite|
|All six independent Python oracles and original instructor checks|PASS, exit0|[Combined oracle log](verification/module-six-oracles.log), [final scenario oracle](verification/module-six-oracle-final.log)|
|Original materials, plan, fixtures and dependencies|PASS, exit0|[Integrity log](verification/module-six-integrity.log);10 manifest hashes, including8 preserved earlier entries;74 original ZIP files; exact original plan;42 dates|
|Desktop/mobile visual and targeted keyboard review|PASS for inspected states|26 screenshot links and review notes in [PROGRESS.md](../PROGRESS.md)|

Environment: macOS, Node20.5.0/npm9.8.0. Playwright uses installed Google Chrome (`channel:chrome`) with1280×720 desktop and390×664 CSS-pixel iPhone13 emulation. The test-owned production server is `npm run preview -- --port 4173`. Existing approved execution permissions were used for localhost/Chrome. No security approval was bypassed.

## Scenario/rubric verification

The independent Python script checks explicitly locked role resources12/8/4h, listed A–D totals12/6/8/6h, reduced totals4/3/4/2h, real ordered fictional dates, all option fields, three variants, source locators and copy/hash agreement. At engineering2h, listed A8h cannot fit while reduced A2h does; total available staff hours cannot substitute between roles. The coverage illustration4/8=50% leaves four unknown outcomes. No revenue, market, causal or real experimental outcome was added.

Pure tests check all2430/1/2 combinations across five dimensions, every scored choice and critical-error branch, missing/blank/invalid inputs and date boundaries, all A–D listed/reduced initial plans, all16 original/revised strategy pairs for each of three variants, keep/revise consistency, feasibility, context gates, transfer conditions, locked transitions, immutable snapshots and optional-state validation. No points come from strategy selection alone; critical context errors can block even a10/10 dimension score.

Component/browser cases exercise evidence classification, empty/reset shortlist, actual capacity changes, fixed assessment scope, hidden guidance, failed retries, smaller-A reaffirmation, C→B revision, rights/coverage misconceptions, residual-task A in transfer, separate consultation, memo/journal and partial-draft reload, JSON export, old-record equality, activity reset/cancel, global reset and unavailable storage. New integration tests visit all six modules, verify actual downloaded hashes/units and check each reset against the other five histories.

## Issues discovered and fixes

- Early strict check caught a missing `contextChoices` import in the new room. Added the import; final strict/build checks pass.
- Out-of-order reasoning could create sparse arrays that serialize as null. Responses now initialize unselected positions to−1. RTL/browser tests reproduce reload with the final reasoning group selected first and confirm older work remains readable.
- First full browser run:44 passed/2 failed in a new filled-memo assertion. The textarea retained its content, but exact wrapped-label text matching included the value. The new test now uses the same textbox's exact accessible name; data/value assertions remain. [Initial failure log](verification/module-six-e2e-initial.log).
- Review replaced raw critical-error codes with readable learner-facing descriptions, retaining stable machine IDs in stored/exported results.
- Comparison columns use a bounded scroll region, reduce with the shortlist and have an explicit scroll hint. Browser capture resets horizontal scroll without ongoing native scroll animation. Long mobile transfer feedback is captured as a focused component, avoiding oversized screenshot artifacts.
- The existing export tests assumed exactly five modules and percentage units. Module count now reflects six; all first-five numeric assertions remain. Separate Module6 points tests verify its different contract. No prior key, fixture or numeric answer was relaxed.

A later mobile capture check reported45 passes/1 failure because native keyboard-scroll animation continued after reset. It now waits for stable animation frames before resetting, retaining both the movement and exact-zero assertions; [failure evidence](verification/module-six-e2e-scroll-initial.log). This affected screenshot setup, not strategy feasibility or grading.

## Preservation and integration

The existing `ai-pm-lab:v1` /top-level version1 format remains. Optional `Work.decisionRoom.version=1` holds the new artifacts; prior Work/attempt objects are not migrated or rewritten. Each successful initial/revised/transfer artifact and every failed attempt are separate immutable snapshots. Stage-specific guidance consultation remains recorded after hiding, navigation and reload. Exports retain raw records and add usable points-based definitions/labels without instructor keys in question/contract metadata.

Each module has visible provenance and its intended download. Module2 remains distinct from the Module3 retention fork; Module4 strict reversal remains distinct from the original source; Modules1/5 share the unchanged weekly source intentionally. Module6 source-context claims remain separate from scenario assumptions and new fictional conditions. See [cross-module audit](CROSS_MODULE_CONSISTENCY.md).

All74 archived original files and the separately supplied study plan remain byte-identical. All42 original daily rows and October19–November29,2026 dates remain. The09:00–11:00 Asia/Ho_Chi_Minh preference and original chapter/exercise sequence are preserved; no Calendar action occurred. Funnel/retention/strict-reversal extensions remain optional advanced supplements. Module6 supports familiar-case memo practice and does not replace day41's unseen non-English/non-support case.

Dependency declarations and package lockfile retain their previous hashes:

- package.json: `86c69842a148a6053a24f1776d63308889fc5b4f72d21a5d61570c5b5246d5e5`
- package-lock.json: `0677cf4316a4770e4b4c7e31d67aae41f29f0742b298a41852a6eda9bf7a36a1`

## Remaining limits and audit handoff

No tested implementation or permission blocker remains. Browser coverage uses Chrome emulation, not physical mobile devices/Safari or a comprehensive screen-reader audit. Storage is local to the browser/origin; export is available, import/cloud sync is not. Unavailable storage keeps session work with a warning. Instructor solutions are client-side teaching gates, not server-protected secrets.

The app grades explicit selected reasoning, resource feasibility and text presence/date format; it does not certify the semantic quality of arbitrary memo text. Predictable option wording/order and long multi-part lessons need independent educational review. Scenario costs, dates, changes and transfer conditions are authored assumptions, not research findings. No participants were recruited, interviews/experiments executed, or learner outcomes measured.

The [scenario mapping](MODULE_6_SCENARIO.md) identifies every source/extension and practice criterion. The [instructor guide](MODULE_6_INSTRUCTOR.md) provides conditional examples, anchors and a manual audit checklist. Independent reviewers should assess content accuracy, translation/adaptation, memo quality, cognitive load, accessibility, unseen/delayed transfer and the limitations of structured-choice feedback. Only suitable learner studies could support an educational-effectiveness claim. Technical tests passing do not mean the student has mastered Product Management.

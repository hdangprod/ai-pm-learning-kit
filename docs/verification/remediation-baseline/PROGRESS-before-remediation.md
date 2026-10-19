# AI PM Learning Lab — six modules technically verified

Date: 2026-10-19. **Modules1–6 are implemented and pass their applicable technical verification gates. The application is ready for an independent educational-quality audit.** This verifies software, arithmetic and explicit practice rules; it does not establish educational effectiveness, measured learner mastery, real product outcomes or professional readiness.

The [Module5 checkpoint](docs/verification/module-five-checkpoint.md) preserves the previous134-unit/32-browser status. The [final six-module report](docs/TECHNICAL_COMPLETION_REPORT.md) records integration scope, exact commands, results and audit handoff.

## Module6 delivered

[Decision room](src/DecisionRoom.tsx), [memo/assessment form](src/DecisionForm.tsx), [pure scoring/state functions](src/lib/decision.ts), [teaching/feedback](src/data/decisionContent.ts), [module metadata](src/data/module6.ts), [scenario and grading contract](docs/MODULE_6_SCENARIO.md), [instructor anchors](docs/MODULE_6_INSTRUCTOR.md).

- A concise decision brief specifies task/outcome, business objective, resources, rights, fictional deadline and unknowns.
- A traceable evidence board distinguishes source-audit observation, report, inference, assumption, simulation and unknown. Cards have neutral consistent styling, not a confidence ranking. Original English AI context is separate from new simulated scenario facts.
- Four meaningful strategies retain benefit, role-specific effort, risks, missing evidence, reversibility, success conditions and poor-choice conditions. Shortlisting and a keyboard-accessible hypothetical-capacity slider update a scrollable comparison table; no arbitrary weighted recommendation is produced.
- Initial memo requires decision, evidence, uncertainty/alternatives, rejected-option trade-offs, comparator, next action, owner/date and measurable revision/stop rule. Text remains learner-authored, presence-checked and not semantically certified.
- Exactly five structured dimensions score0–2, total0–10. Strategy choice alone earns no points. All A–D can pass with bounded conditions, feasible role caps, complete memo and correct reasoning. Every critical endorsement blocks completion.
- After a passing initial decision, explicitly reveal one capacity/rights/coverage challenge. Its identity/reveal persists for the round. Keep or revise must match the actual selected strategy; both can pass with appropriate scope. Original and revised artifacts remain separate.
- Separate transfer stipulates configured-incumbent success within outcome/effort limits for an evaluated task/group. It requires residual-task reasoning and investment reconsideration, not automatic build or universal rejection. A bounded residual prototype can pass.
- Each stage has its own attempt/reveal gate and sticky consulted history. Complete wrong attempts can unlock guidance; reveal never awards completion. Failed choices remain in inspectable history. Changing draft answers clears displayed stale feedback until resubmission.
- Drafts, partial reasoning, classifications, matrix state, challenge, memos, attempts, consultation, hypothesis and journal persist. Export includes usable points-based definitions/artifacts. Activity reset/cancel preserves the other five modules; whole-lab reset remains separately confirmed.

All decision facts, staff estimates, dates, changes and transfer success are **SIMULATED**. No interview, real experiment, revenue, market share or learning result was invented. The original P1/P2 and Module5 delayed assessment remain unexecuted.

## Scenario and rubric checks before UI

`decision-scenario-v1`: separate identical application/download JSON files, two new manifest entries. [Generator](scripts/prepare_decision.py), [independent oracle](scripts/verify_decision.py), [pre-UI result](docs/verification/module-six-oracle-pre-ui.log), [final result](docs/verification/module-six-oracle-final.log).

| Assumption | Locked result |
|---|---|
|Role capacities|12 engineering /8 research /4 coaching =24 total hours; roles not interchangeable|
|Listed A/B/C/D plans|8/4/0 =12h;2/4/0 =6h;0/4/4 =8h;0/6/0 =6h|
|Reduced plans|2/2/0 =4h;1/2/0 =3h;0/2/2 =4h;0/2/0 =2h|
|Capacity challenge|Engineering2h: listed A8h fails, reduced A2h can fit; other reduced plans also fit|
|Coverage illustration|4/8 assessed =50%;4 unknown outcomes, not failures/successes|
|Rubric|Five dimensions ×0–2 =0–10; all243 combinations checked; passing requires all five2-point answers plus stage/critical/feasibility/presence gates|

The app score is separate from the study plan's0–8 operating rubric, original VolumeI assessment gate and VolumeII0–20 final. The source VolumeII12-hour task is not replaced by this separate24-staff-hour simulation. App completion is structured practice, not independent reviewer assessment.

## Exact commands and final verification

macOS, Node20.5.0/npm9.8.0, installed Chrome via `channel:chrome`. Desktop1280×720; iPhone13 mobile emulation390×664 CSS pixels. Playwright serves the production `dist/` with `npm run preview -- --port 4173`, using existing approved execution permissions. No dependency installation, install scripts, browser download, global package, paid API, deployment or approval bypass.

| Exact command | Final result | Evidence |
|---|---|---|
|`python3 scripts/prepare_decision.py`|PASS, exit0|Only the new scenario copies and two manifest entries authored before UI; no earlier fixture regenerated|
|`python3 scripts/verify_data.py`|PASS, exit0|M1 original-source arithmetic|
|`python3 scripts/verify_funnel.py`|PASS, exit0|M2 mature distinct ordered-user arithmetic|
|`python3 scripts/verify_retention.py`|PASS, exit0|M3 D7/eligibility and declared fork|
|`python3 scripts/verify_simpson.py`|PASS, exit0|M4 strict reversal and original-source distinction|
|`python3 scripts/verify_causal.py`|PASS, exit0|M5 original CSV relative/point differences, coverage and missingness|
|`python3 scripts/verify_decision.py`|PASS, exit0|M6 explicit assumptions, role totals, dates, variant/transfer/provenance and copies; earlier8 hashes pinned independently|
|`python3 materials/AI_PM_Audit_Upgrade_I_II/instructor/verify_learning.py`|PASS, exit0|Original instructor checks; [combined oracle output](docs/verification/module-six-oracles.log)|
|`python3 scripts/verify_preservation.py`|PASS, exit0|[Integrity log](docs/verification/module-six-integrity.log);10 manifest hashes,74 original ZIP files, exact original plan,42 dates and dependency hashes|
|`npm test`|PASS, exit0; **215 tests /15 files**|[Unit/component log](docs/verification/module-six-unit.log); all134 earlier tests +67 decision +5 RTL +9 consistency cases|
|`./node_modules/.bin/tsc --noEmit --strict`|PASS, exit0; no diagnostics|[Strict TypeScript log](docs/verification/module-six-typescript.log)|
|`npm run build`|PASS, exit0|[Build log](docs/verification/module-six-build.log); strict-config `tsc -b` and Vite; JS315.47kB/gzip96.38kB; CSS25.17kB/gzip6.34kB|
|`npm run test:e2e`|PASS, exit0; **46 tests**|[Browser log](docs/verification/module-six-e2e.log); all32 prior tests +10 M6 desktop/mobile cases +4 final six-module cases|

The original source ZIP/plan paths must be available to rerun the independent preservation comparison. It reads originals and never rewrites expected hashes. Existing locked numeric answers and prior test assertions were retained. Module-count expectations expand to six; Module6 gets separate points checks, while all first-five percent assertions remain.

### Verification coverage

Pure tests cover every A–D listed/reduced initial path, all16 original/revised strategy pairs across3 challenges,243 rubric combinations, every incorrect/critical choice,10-point context failures, missing/invalid scores, blank memo fields, date boundaries, role-cap feasibility, wrong stages, premature/duplicate submission, fixed challenge identity and immutable snapshots. Transfer accepts bounded residual A–D and rejects unqualified bespoke investment, universal no-opportunity and original-study execution claims.

RTL/browser tests cover evidence-type feedback, matrix/shortlist reset, slider Home/ArrowRight, focused horizontal table scrolling, navigation/heading focus, no page overflow, no uncaught page errors, failed/correct retries, stage-specific hidden guidance, separate consultation, smaller-A reaffirmation, C→B revision, rights/coverage critical branches, transfer scope, saved journal/memos, partial out-of-order reload, legacy export equality, activity/global reset/cancel and storage warnings. Every final module has intended source download/hash and consistent export units.

## Issues and corrections

1. Initial strict check caught a missing `contextChoices` import in the new room; fixed before the build/browser gates.
2. Sparse partial reasoning could serialize holes as null. New selections fill unselected indices with−1; a reproducing RTL/browser test reloads the final group selected before the earlier groups and preserves old work.
3. First full browser run: **44 passed /2 failed**, both new filled-memo selectors. The memo was retained, but exact wrapped-label text matching included textarea content. Tests now use the same textbox's exact accessible name, keeping the value assertions. [Initial E2E log](docs/verification/module-six-e2e-initial.log).
4. Visual review replaced raw critical-error codes with readable learner-facing descriptions; stored/exported machine IDs remain stable. The table has a visible scroll hint and column widths respond to the shortlist. Screenshot capture cancels native horizontal-scroll animation before recording its starting position.
5. The very long mobile transfer-retry capture was replaced with a focused feedback screenshot; memo layout is captured separately. This avoids oversized screenshot artifacts while retaining the failed reasoning evidence.
6. Prior export tests hard-coded five modules/percent units. They now include the sixth definition with points while retaining all Module1–5 numeric assertions. New six-module tests add reset/source/unit checks rather than weakening old checks.

7. A later mobile screenshot assertion caught native keyboard-scroll animation continuing after the capture reset (45 passed/1 failed). The capture now waits for scroll position to settle over animation frames before resetting, retaining the keyboard movement and exact starting-position assertions. [Scroll-capture failure log](docs/verification/module-six-e2e-scroll-initial.log). No calculation or user interaction rule changed.

No tested software or permission blocker remains.

## Desktop/mobile screenshots and inspection

Inspected26 important-state screenshots: lesson/navigation, brief/source boundaries, classified board, constrained matrix, memo, critical feedback, frozen initial decision, each changed-information branch, failed/completed transfer and attempt/consultation history. Mobile uses a single-column form, with the comparison table scrolling inside its focusable region. Native controls keep labels, textual score/feedback and focus indication. This is targeted visual/keyboard verification, not a comprehensive assistive-technology audit.

| State | Desktop | Mobile emulation |
|---|---|---|
|Lesson/navigation|[Viewport](docs/verification/module-six-desktop-viewport.png)|[Viewport](docs/verification/module-six-mobile-viewport.png)|
|Decision brief|[Brief](docs/verification/module-six-desktop-brief.png)|[Brief](docs/verification/module-six-mobile-brief.png)|
|Evidence forms/provenance|[Evidence](docs/verification/module-six-desktop-evidence.png)|[Evidence](docs/verification/module-six-mobile-evidence.png)|
|Capacity trade-offs|[Matrix](docs/verification/module-six-desktop-matrix.png)|[Matrix](docs/verification/module-six-mobile-matrix.png)|
|Learner-authored memo|[Memo](docs/verification/module-six-desktop-memo.png)|[Memo](docs/verification/module-six-mobile-memo.png)|
|Critical feedback|[Feedback](docs/verification/module-six-desktop-feedback.png)|[Feedback](docs/verification/module-six-mobile-feedback.png)|
|Frozen original|[Initial](docs/verification/module-six-desktop-initial.png)|[Initial](docs/verification/module-six-mobile-initial.png)|
|Keep A with reduced scope|[Capacity](docs/verification/module-six-desktop-capacity.png)|[Capacity](docs/verification/module-six-mobile-capacity.png)|
|Rights change / C→B|[Rights](docs/verification/module-six-desktop-rights.png)|[Rights](docs/verification/module-six-mobile-rights.png)|
|Coverage change / C→B|[Coverage](docs/verification/module-six-desktop-coverage.png)|[Coverage](docs/verification/module-six-mobile-coverage.png)|
|Transfer critical scope error|[Retry](docs/verification/module-six-desktop-transfer-retry.png)|[Retry](docs/verification/module-six-mobile-transfer-retry.png)|
|Transfer completion / explicit guidance|[Completed](docs/verification/module-six-desktop-transfer-complete.png)|[Completed](docs/verification/module-six-mobile-transfer-complete.png)|
|History and consulted state|[History](docs/verification/module-six-desktop-history.png)|[History](docs/verification/module-six-mobile-history.png)|

## Final preservation and limits

[Cross-module audit](docs/CROSS_MODULE_CONSISTENCY.md): all six navigable, practice/history isolated, versioned fixtures correct, downloads match application data, definitions distinguish percent/percentage-points/decision points. M2 funnel and M3 retention fork remain distinct; M4 strict reversal remains separate from original weekly data; M5 uses the unchanged source; M6 has its own simulated scenario and separately traced research context. No original source material or prior fixture is modified.

The existing `ai-pm-lab:v1` key/top-level version remains, with optional M6 decisionRoom version1. Prior module records export unchanged; no migration. Dependency hashes remain:

- package.json: `86c69842a148a6053a24f1776d63308889fc5b4f72d21a5d61570c5b5246d5e5`
- package-lock.json: `0677cf4316a4770e4b4c7e31d67aae41f29f0742b298a41852a6eda9bf7a36a1`

The [42-day mapping](docs/STUDY_PLAN_MAPPING.md) retains every original row, date, chapter/exercise and artifact, October19–November29,2026,09:00–11:00 Asia/Ho_Chi_Minh. M6 supports original familiar-case decision tasks; it does not replace day41's unseen case. Optional advanced event/retention/strict-reversal lessons are not required foundational sessions. No Google Calendar action occurred; the original day41 break-allocation discrepancy remains documented.

Remaining limits: no learner study or delayed unseen-case mastery evidence; no semantic grade of free text; predictable structured option wording needs educational review; no physical-device/Safari or comprehensive screen-reader audit. Work is browser/origin-local; export exists, import/cloud sync does not. Unavailable storage warns and keeps session work. Instructor guidance is a client-side UI gate, not a protected server secret. Simulation assumptions are not validated cost, market or learning evidence. The next step is an independent educational-quality audit using the [instructor checklist](docs/MODULE_6_INSTRUCTOR.md); no unrelated future-phase modules were started.

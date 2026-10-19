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


# AQ01–AQ04 educational remediation checkpoint — 2026-10-19

**Status: implemented; applicable software acceptance gates pass.** Stopped at AQ01–AQ04. No advanced modules, architecture replacement, dependency changes, calendar actions or repeated curriculum research. External human review and assessment validation are explicitly pending, not fabricated release results. AQ05–AQ11 remain a separate prioritized backlog.

The user-provided project archive `docs/AI_PM_EDUCATIONAL_AUDIT_20261019.zip` was verified with `pwd`, `ls -lah docs/`, `find . -iname '*EDUCATIONAL*AUDIT*.zip'`, and `unzip -l`. Its SHA256 `6043e555ce111e6d8e795115da1c936361231e94db00a7b50e62188e7a6f7acd` matches the initially located Downloads copy. All18 entries are extracted byte-identically in `docs/educational-audit/`, retaining the original ZIP. Seven Markdown audit documents and both XLSX workbooks were inspected. Original audit documents were not edited.

## Changes and preservation

- AQ01 reproduced across20 reasoning groups. M1–5 now grade semantic IDs, vary new-attempt ordering and persist drafts/order across reload. Thirteen distractor wordings now target plausible misconceptions. Original index meanings/labels are frozen; no mathematical keys changed.
- AQ02 reproduced with an authored contradictory memo earning structured10/10. M6 retains structured0–10 and separately shows **Pending independent review** with a readable external review packet and five-dimension0–2 human rubric. No automatic semantic pass, fake reviewer role or mastery claim.
- AQ03 source-confirmed. In-app transfer is labeled **Same-case transfer practice**. Offline moderator tooling assigns only one of three six-task forms, records prior form/key exposure and baseline/immediate-post/delayed timepoint, saves response/calculation/memo files, and archives/hashes the initial memo before releasing its change card. Keys/forms stay out of app assets/download lists. Development requests to private audit/assessment paths return403.
- AQ04 reproduced: new evidence distinguishes unaided, after-feedback and after-solution attempts. Every assisted retry needs a fresh nonblank reasoning-change record, explicitly not semantic grading. Original attempts/memos stay immutable under app operations. Legacy assistance timing stays unknown. Scoped reset, global reset and storage warnings remain tested.

No migration: storage key/top-level version1 and decisionRoom version1 remain; optional assessment metadata uses version2 only for new M1–5 attempts. Raw export modules preserve all legacy records. Export definitionsVersion2 adds IDs, original labels, decoded evidence and pending-review policy. Opening legacy work does not rewrite it. Browser tests use isolated profiles and authored fixtures, not the user's live progress.

## Exact commands and actual final results

All logs are in `docs/verification/remediation/`; unchanged baseline evidence is in `docs/verification/remediation-baseline/`.

| Command / check | Actual result | Evidence |
|---|---|---|
| `npm test` before changes | PASS215 tests /15 files | [Baseline unit](docs/verification/remediation-baseline/unit.log) |
| `npm run test:e2e` before changes | PASS46 desktop/mobile tests | [Baseline browser](docs/verification/remediation-baseline/e2e.log) |
| `npm run test:e2e -- --config docs/verification/remediation-baseline/probe.config.cjs` on unchanged app | PASS1 runtime reproduction; authored v1 progress/export and screenshot saved | [Probe](docs/verification/remediation-baseline/probe.log) |
| `npm test` final | **PASS231 tests /16 files**; all215 originals retained | [Final unit/component](docs/verification/remediation/unit.log) |
| `./node_modules/.bin/tsc --noEmit --strict` | **PASS**, no diagnostics | [Strict TypeScript](docs/verification/remediation/typescript.log) |
| `npm run build` | **PASS**,1618 transformed modules; JS343.02kB (gzip103.24kB), CSS25.55kB (gzip6.44kB) | [Production build](docs/verification/remediation/build.log) |
| `npm run test:e2e` final | **PASS54 tests**,52.5s; desktop Chrome1280×720 / iPhone13 Chromium emulation390×664; all46 originals retained | [Final browser](docs/verification/remediation/e2e.log) |
| `python3 scripts/verify_data.py` | PASS original CSV counts / bounds / arithmetic | [Original oracles](docs/verification/remediation/oracles.log) |
| `python3 scripts/verify_funnel.py` | PASS8→6→4,66.6667%,50%, ordering/boundaries/eligibility | same log |
| `python3 scripts/verify_retention.py` | PASS50%,25%, unavailable, pooled37.5%, declared fork | same log |
| `python3 scripts/verify_simpson.py` | PASS74%/36%, within+10pp, pooled−38pp, illustrative50%/60% | same log |
| `python3 scripts/verify_causal.py` | PASS+43.75% sessions,−27pp coverage, novice25% /45 unknown | same log |
| `python3 scripts/verify_decision.py` | PASS original role caps, all243 point combinations, critical/variant/scenario lineage | same log |
| `python3 materials/AI_PM_Audit_Upgrade_I_II/instructor/verify_learning.py` | PASS original instructor arithmetic | same log |
| `python3 scripts/verify_preservation.py` | PASS10 dataset hashes,74 original ZIP files, original study-plan bytes and all42 dates, dependency/lockfile hashes | same log |
| `python3 scripts/verify_assessment_workflow.py` | **PASS43 checks**: all forms/timepoints, exposure, no key/other-form release, memo lock/hash, no overwrite, private output scope | [Workflow](docs/verification/remediation/assessment-workflow.log) |
| `python3 docs/educational-audit/support/verify_transfer_keys.py --output docs/verification/remediation/transfer-key-checks.json` | **PASS47 auditor-authored arithmetic checks**; not learner outcomes | [Arithmetic log](docs/verification/remediation/transfer-keys.log), [Results](docs/verification/remediation/transfer-key-checks.json) |
| `npm run dev -- --host 127.0.0.1 --port 4174` + localhost HTTP requests using Python urllib | PASS app200; private extracted keys/ZIP/moderator key/material key/@fs key URLs all403 | [Development exposure](docs/verification/remediation/dev-key-exposure.log) |
| `python3 scripts/verify_remediation_preservation.py` (SHA256/ZIP checks) | PASS all four specs,42-day mapping, dependency/lockfile and all18 audit files byte-identical | [Preservation](docs/verification/remediation/release-preservation.log) |
| `python3 scripts/verify_remediation_preservation.py` (built-asset scan) | PASS; no independent forms/keys in bundle, public source downloads or deployment directories | [Built-asset exposure](docs/verification/remediation/bundle-key-exposure.log) |

New regressions verify actual array-permutation invariant grading; first-radio policy failure in UI and seeded policy trials; saved draft ordering and selected IDs after reload; specific incorrect-feedback; complete original v1 label meaning; feedback-only vs solution-assisted retries; every-retry reflection freshness; immutable first attempt; six authored memo cases; human-readable packet; per-module/global reset and unrelated storage; no page overflow or page errors in the new flow; native radio keyboard interaction.

No new npm installation, lifecycle script or browser download. No security bypass. Existing Chrome and approved localhost execution were used. No unresolved software or permissions blocker remains.

## Interim failures, all retained and resolved

`unit-first.log`:209 passed/6 failed (new retry reflection absent from original test flows). Existing flow helpers now write a deliberate reflection; dedicated new tests assert blank notes are blocked. `unit-second.log` and `unit-third.log`: private-file Vite deny rules initially also blocked Vitest setup (15/16 files failed collection, no tests). Test mode can now load its own fixtures; actual served private URLs remain denied. `unit-fourth.log`:225 passed/3 failed because initial draft auto-save changed untouched legacy records; fixed without weakening equality checks. `unit-fifth.log`:228 passed. A later every-retry M6 guard and added regression cases brought final unit total to231.

`e2e-first.log`:52 passed. `e2e-position-probe-failed.log`:52 passed/2 failed; new probe's broad group selector included native history disclosure without radios. Fixed the test to target exercise form fieldsets. Final full run54/54 passed. No unresolved failure is hidden by the final totals. See implementation report for details.

## Updated screenshots and visual inspection

Inspected updated desktop/mobile assistance, pending-review, viewport and legacy-history captures. Text wraps, option selection/ordering and retry notes are readable, history preserves the first response, no page-wide overflow; matrix remains intentionally internally scrollable. Full suite recaptures original six-module states. Native radio keyboard selection and focus are exercised. This is targeted visual/keyboard coverage, not screen-reader, physical-device, Safari or WCAG certification.

| State | Desktop | Mobile emulation |
|---|---|---|
| Retry, first response, original selected labels and assistance | [Practice evidence](docs/verification/remediation/desktop-assistance.png) | [Practice evidence](docs/verification/remediation/mobile-assistance.png) |
| Separate pending independent memo review | [Review](docs/verification/remediation/desktop-review.png) | [Review](docs/verification/remediation/mobile-review.png) |
| Existing layout/navigation | [Viewport](docs/verification/remediation/desktop-viewport.png) | [Viewport](docs/verification/remediation/mobile-viewport.png) |
| Original M6 attempt/consultation history | [History](docs/verification/remediation/desktop-legacy-history.png) | [History](docs/verification/remediation/mobile-legacy-history.png) |

## Reports, authored content and remaining limits

[Baseline](docs/REMEDIATION_BASELINE.md), [AQ01–AQ04 source findings](docs/AQ01_AQ04_SOURCE_FINDINGS.md), [implementation report](docs/REMEDIATION_IMPLEMENTATION_REPORT.md), [compatibility report](docs/ASSESSMENT_COMPATIBILITY_REPORT.md), [human memo rubric](docs/INDEPENDENT_MEMO_REVIEW_RUBRIC.md), [assessment administration](docs/ASSESSMENT_ADMINISTRATION.md), [AQ05–AQ11 backlog](docs/REMEDIATION_BACKLOG.md).

Authored additions: semantic IDs,13 distractor revisions, precise practice/evidence labels and retry prompt, external packet/worksheet adapted from audit rubric, moderator workflow/preflight notes and six clearly authored memo calibration cases. All18 original audit tasks and keys are reused without modifying their content; M6 change cards are separated for staged administration. No synthetic scenario is real research evidence. No semantic learner score or real reviewer result has been invented.

Human review remains pending. Two independent reviewers must solve/time the forms and calibrate; a readability/timing pilot is still needed before adopting the proposed45-minute forms for an effectiveness study. Forms are not equated, unseen status depends on honest exposure records, and a file owner can inspect repository materials. Recorded assistance is in-app exposure only, not absence of outside help. Short text presence is not proof of reasoning. Import/restore and AQ05–AQ11 remain deferred. The42-day textbook sequence (Oct19–Nov29,120-minute sessions including breaks,09:00–11:00 Asia/Ho_Chi_Minh), fixtures and all prior memos are preserved. No learner mastery, transfer gain or educational effectiveness is claimed.


# Evidence preservation release gates — 2026-10-20

**PR01–PR03 technical acceptance passes. Overall learner evaluation remains CONDITIONAL.** No form/key rewrite, module expansion, backend, dependency change, lockfile change, curriculum/calendar change or live user-storage mutation. Human form validation/timing/calibration/eligibility and operator sign-off remain pending.

## Baseline and release identity

Read the supplied `docs/POST_REMEDIATION_AUDIT_PACK_20261019.zip` (SHA256 `ff5496f4f1f48c3d29b5f0d7cf9ff026168c8dba86e0abf5074e12cb810965f8`) and preserved all40 entries in `docs/post-remediation-audit/`. The seven reports and included probe sources/results were inspected; no audit originals edited. No Git repository is present; `docs/verification/evidence-preservation-baseline/repository-sha256.json` pins the pre-change files. Authored v1/v2 progress, P05/P06 before/after raw records and P07 malformed input were captured before patching. Test contexts are isolated from the user's actual browser profile.

Pinned release: **ai-pm-lab-evidence-20261020-b1eb2391cc57**. [Production artifact](docs/verification/evidence-preservation/ai-pm-lab-evidence-release.zip) SHA256 `9921563634cfb0ad2378fad30e96ff3b43342afce7b8cf81759de70938a90a23`; [file identity](docs/verification/evidence-preservation/release-identity.json) manifest SHA256 `b1eb2391cc57c51b9d1a404dc704a936173a341be1b8ffeb796e4afcafdbd5a4`. Archive and production-file hashes were rechecked after verification.

Actual study machine: macOS15.8.1 (24H32), Darwin x86_64; Node20.5.0/npm9.8.0; Python3.11.2; installed Google Chrome155.0.8059.80. Headless Playwright desktop and iPhone13 Chromium emulation ran on this Mac, including two real browser pages sharing an origin. No Chrome download or installation script was required; physical iOS/Safari and comprehensive assistive-technology support are unverified.

## Changes

PR01: version1 envelope gains a new opaque revision on successful saves. An exclusive origin-wide Web Lock serializes checks/writes; a session compares the exact stored raw string to its own last-read/committed raw string. Stale writes and resets are rejected with actionable conflict/export/reload controls, preserving the earlier first attempt and all other module histories. No auto merge/last-writer-wins and no unlocked fallback. Current-release tabs cooperate; old releases/manual localStorage edits remain outside that guarantee.

PR02: loader returns valid independent module previews plus exact raw source/issue paths. Invalid M6 unsent drafts preserve frozen memo/attempt history. Ordinary autosave/reset pauses while corruption is unresolved. Readable raw recovery export and explicit acknowledgement precede adoption; a separate exact local raw backup is written before replacing the acknowledged preview. Backup/quota failure or newer stored source prevents replacement. Unreadable submitted evidence remains in raw recovery for manual review, never guessed or regraded. Raw backups survive ordinary reset.

PR03: optional practice drafts are runtime-validated by their own question/group IDs, order completeness and uniqueness, selected IDs and field types. Malformed unsent drafts are isolated with disclosure, retaining submitted first attempts. Legitimate partial unanswered/null slots remain supported. Existing option meanings, source numeric keys, legacy labels, M6 points/memos, assistance and42-day plan remain unchanged.

Browser verification also exposed a pending-write reload gap. Queued writes now display **Saving changes…** until confirmed; unsaved/queued work prompts before unload. Tests wait for that displayed save boundary before reload/reset assertions; the assertions themselves were not relaxed. A held real browser lock verifies the navigation warning and eventual successful save.

## Exact commands and actual results

Current logs: `docs/verification/evidence-preservation/`. Baseline logs: `docs/verification/evidence-preservation-baseline/`.

| Command | Actual result | Evidence |
|---|---|---|
| `npm test` before changes |PASS231 tests/16 files | [Baseline unit](docs/verification/evidence-preservation-baseline/unit.log) |
| `npm run test:e2e` before changes |PASS54 desktop/mobile tests | [Baseline browser](docs/verification/evidence-preservation-baseline/e2e.log) |
| `./node_modules/.bin/vitest run --config docs/verification/evidence-preservation-baseline/probe.config.mjs` before changes |7 auditor assertions pass; P05–P07 deliberately reproduce defects, not acceptance passes | [Baseline probes](docs/verification/evidence-preservation-baseline/probes.log) |
| `npm test` final |**PASS275/275**,18 files:231 original,37 new integrity/schema cases,7 adapted auditor acceptance probes | [Final unit](docs/verification/evidence-preservation/unit.log), [Auditor outcomes](docs/verification/evidence-preservation/auditor_component_probes.json) |
| `./node_modules/.bin/tsc --noEmit --strict` |**PASS**, no diagnostics | [Strict TS](docs/verification/evidence-preservation/typescript.log) |
| `npm run build` |**PASS**,1619 modules, JS351.96kB/gzip106.55kB; CSS25.97kB/gzip6.54kB | [Build](docs/verification/evidence-preservation/build.log) |
| `npm run test:e2e` final |**PASS66/66**; all54 previous plus12 new desktop/mobile cases | [Final browser](docs/verification/evidence-preservation/e2e-second.log) |
| `python3 scripts/verify_data.py` |PASS | [Oracles](docs/verification/evidence-preservation/oracles.log) |
| `python3 scripts/verify_funnel.py` |PASS8→6→4,66.6667%/50% and boundaries | same log |
| `python3 scripts/verify_retention.py` |PASS50%/25%/unavailable,37.5%, declared original fork | same log |
| `python3 scripts/verify_simpson.py` |PASS74%/36%, within+10pp/pooled−38pp, common50%/60% | same log |
| `python3 scripts/verify_causal.py` |PASS+43.75% sessions,−27pp coverage,45 unknown novice outcomes | same log |
| `python3 scripts/verify_decision.py` |PASS role caps/scenario/243 scoring combinations/source lineage | same log |
| `python3 materials/AI_PM_Audit_Upgrade_I_II/instructor/verify_learning.py` |PASS instructor arithmetic | same log |
| `python3 scripts/verify_assessment_workflow.py` |PASS43 authored workflow checks | same log |
| `python3 docs/educational-audit/support/verify_transfer_keys.py --output docs/verification/evidence-preservation/transfer-key-checks.json` |PASS47 arithmetic assertions; not human form validation | same log / [Key checks](docs/verification/evidence-preservation/transfer-key-checks.json) |
| `python3 scripts/verify_preservation.py --original-materials /Users/dangnguyen/Desktop/PM` |PASS10 data hashes,74 original ZIP entries, original separate plan bytes,42 dates, dependency hashes | same log |
| `python3 scripts/verify_evidence_preservation.py` |PASS128 protected-input hashes;40 original post-audit entries; portable missing-input behavior | [Protected inputs](docs/verification/evidence-preservation/protected-inputs.log) |
| `python3 scripts/verify_preservation.py` (no original path supplied) |Expected exit2 / UNVERIFIED external inputs, no false pass or fabricated fallback | [Portable missing input](docs/verification/evidence-preservation/portable-no-originals.log) |
| `python3 scripts/verify_remediation_preservation.py` |Internal checks PASS; overall exit2 / UNVERIFIED because older original audit ZIP is absent | [Explicit limit](docs/verification/evidence-preservation/remediation-preservation.log) |
| `npm run dev -- --host 127.0.0.1 --port 4174` then `python3 scripts/check_private_release_urls.py --base-url http://127.0.0.1:4174` |PASS5 private URLs403, no private content | [Dev HTTP](docs/verification/evidence-preservation/private-development-http.log) |
| `npm run preview -- --host 127.0.0.1 --port 4175` then `python3 scripts/check_private_release_urls.py --base-url http://127.0.0.1:4175` |PASS5 SPA fallback responses200, content does not expose private files | [Preview HTTP](docs/verification/evidence-preservation/private-preview-http.log) |

AUD-P05 is tested in components and actual Chrome tabs: stale B's unrelated M2 edit cannot replace A's earlier persisted M1 attempt; visible conflict, session export and explicit reload work. Simultaneous writers serialize with one rejection. AUD-P06 raw remains unchanged through an M1 edit after injected M6 corruption, all valid histories remain accessible, and explicit raw recovery archives the original. AUD-P07 bad option presentation warns/quarantines without crash or first-attempt loss. Legacy read/export, IDs/labels, assistance, pending independent memo review, scoped/global resets and key separation retain all original assertions.

## Failures retained and resolved

`unit-first.log` and `unit-second.log`:226 pass/5 fail, missing STORAGE_KEY import in one adapted fixture-save test. `unit-third.log`:267 pass/1 fail, duplicate DOM IDs in the new two-instance component model; B's textarea is now scoped to its container as in the auditor's model. `unit-fourth.log` and `unit-fifth.log`:268 pass; adding the7 release auditor probes yields final275 pass.

`e2e-first.log`:59 pass/5 fail. Four reset checks read before async locked commit; they now wait for the displayed save boundary without weakening their data/isolation assertions. One real selected-draft reload loss exposed missing pending-navigation protection; fixed in App with beforeunload and a real held-lock regression. `e2e-second.log`:66 pass. Tests use a deterministic immediate lock scheduler for unit fixtures and the actual browser API for cross-tab tests. No security/installation approval was bypassed.

`oracles-initial-missing-archive.log` retains the old verifier's missing-file traceback. The new portable entry points do not fabricate source material or silently call missing checks passed. Explicit original curriculum/plan inputs succeed on this Mac. The exact older archive remains absent at `/Users/dangnguyen/Desktop/AI PM Learning Kit/docs/AI_PM_EDUCATIONAL_AUDIT_20261019.zip` (Downloads copy also absent). Its available extracted contents pass supplied-manifest and baseline hashes; original ZIP identity is currently UNVERIFIED. The newly requested post-remediation audit ZIP is present and fully verified.

## Visual evidence

Inspected all8 updated desktop/mobile screenshots: actionable conflict with unsaved export/reload, raw recovery/disabled acknowledgement gate, optional-draft quarantine and page viewport. Text and paths wrap; controls stay visible, no page-wide overflow; existing navigation/layout retained. Full suite also recaptures original module states. This is scoped visual/keyboard evidence, not broad WCAG or physical-device certification.

| State | Desktop | Mobile emulation |
|---|---|---|
| Two real-tab conflict | [Conflict](docs/verification/evidence-preservation/desktop-two-tab-conflict.png) | [Conflict](docs/verification/evidence-preservation/mobile-two-tab-conflict.png) |
| Raw preservation / recovery | [Recovery](docs/verification/evidence-preservation/desktop-raw-recovery.png) | [Recovery](docs/verification/evidence-preservation/mobile-raw-recovery.png) |
| Invalid optional order | [Quarantine](docs/verification/evidence-preservation/desktop-invalid-order.png) | [Quarantine](docs/verification/evidence-preservation/mobile-invalid-order.png) |
| Existing viewport | [Viewport](docs/verification/evidence-preservation/desktop-quarantine-viewport.png) | [Viewport](docs/verification/evidence-preservation/mobile-quarantine-viewport.png) |

## Handoff and pending human gates

[Baseline](docs/EVIDENCE_PRESERVATION_BASELINE.md), [PR01–PR03 fix report](docs/PR01_PR03_FIX_REPORT.md), [storage contract](docs/STORAGE_CONFLICT_RECOVERY_SPEC.md), [evaluation release verification](docs/EVALUATION_RELEASE_VERIFICATION.md), [unsigned moderator preflight](docs/MODERATOR_TECHNICAL_PREFLIGHT.md).

Software gates are complete; **overall evaluation is not GO on that basis**. Pending: freeze form wording/scoring alternatives; decide taught M3C/advanced M4B/stretch interpretation; independent reviewer solution dry runs; actual completion/readability timing and cap; scoring calibration; learner prior exposure/final independence; operator-signed one-form delivery and original-memo external archiving rehearsal. Creation-time eligibility remains only preflight, not a final independence decision after hints/tools/exposure. Human checkboxes/signatures remain blank. Forms are not equated; no learner mastery, transfer gain, educational effectiveness or human reviewer score is claimed. Stop at PR01–PR03 without starting additional modules or a study.

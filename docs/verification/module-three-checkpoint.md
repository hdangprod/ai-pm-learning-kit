# AI PM Learning Lab — Module 3 verified checkpoint

Date: 2026-10-19. Modules **1, 2 and 3** pass their applicable software verification gates. Module 3 is available through **Cohorts & retention**. Modules 4–6 remain specified and unimplemented. The [Module 2 checkpoint](module-two-checkpoint.md) preserves prior verification history.

No measured learner mastery or educational effectiveness is claimed. Software checks establish reproducible activity calculations, interactions and stated practice rules; free-text reasoning and delayed unseen-case learning require separate review.

## Implemented capabilities

- Intuitive signup-cohort lesson and visual UTC timeline before the formula; exact-day versus horizon-defined rolling retention; funnel versus return activity.
- Explicit cutoff **2026-10-19T00:00:00Z**, half-open D7 interval **[signup+7days, signup+8days)**, right censoring, whole-cohort maturity and distinct-user counting.
- Cohort/segment filters update timeline, cohort comparison, pooled counts and event audit. Empty/immature results are unavailable; fully mature observed inactivity is 0%.
- Complete dictionary, provenance and downloadable synthetic fixture with its declared source transformation.
- Primary numeric + interpretation + next-investigation check, misconception-specific feedback and retry. A saved tentative interpretation plus submitted interpretation/investigation choices is required before instructor reveal; presence is validated, free text is not graded.
- Instructor explanation introduces competing composition, acquisition, onboarding, product-behavior, tracking and small-cohort variation explanations. No unique cause is asserted. Transfer checks both the second cohort and count-weighted pooling.
- Existing hypothesis/journal, version-1 local progress, consulted state, attempt history, export and reset integration preserved. New reflection/extra-choice fields are optional; no storage migration or clearing of existing work.

Files: [metric engine](../../src/lib/retention.ts), [explorer/timeline](../../src/RetentionExplorer.tsx), [lesson/assessment](../../src/data/module3.ts), [content/data contract](../MODULE_3_DATA.md), [independent oracle](../../scripts/verify_retention.py).

## Confirmed calculations

| Selection | Retained | Eligible signups | Exact-day D7 |
|---|---:|---:|---:|
| Oct 1 | 2 | 4 | 50% |
| Oct 8 | 1 | 4 | 25% |
| Oct 15 | unavailable | 0 of 4 selected | unavailable |
| Mature cohorts pooled | 3 | 8 | 37.5% |
| Mature novice | 3 | 4 | 75% |
| Mature experienced | 0 | 4 | 0% observed |

Day 7 start is included; Day 8 start is excluded. A feedback-only return qualifies without prior practice. Duplicate delivery and repeated distinct-ID events for one user cannot increase the retained count. Cohort maturity is determined from all original signup-date members before segment filtering. With unequal sizes, sum counts first: illustrative1/2 and1/8 pool to2/10=20%, not the unweighted31.25%.

## Fixture conflict found and corrected transparently

Module 2's extra `UPPER_BOUNDARY` event for C1U3 occurs on Day7. It is outside the earlier funnel but qualifies as retention. Reusing that fixture unchanged produces Oct1 **3/4**, conflicting with the requested locked **2/4**. The independent Python oracle explicitly verifies that original result as well as the new results.

The verified Module 2 fixture is unchanged. A new **retention-events-v1** teaching fixture changes only `UPPER_BOUNDARY.user_id` from C1U3 to already-returning C1U1. Event timestamps/names, all other event payloads and all user rows remain the same. This also demonstrates repeated D7 activity counting once. It does not discard a qualifying event under a hidden rule.

The derived JSON includes its source SHA256 and exact declared change. Both copies are tracked in [DATA_MANIFEST.json](../DATA_MANIFEST.json); [MODULE_3_DATA.md](../MODULE_3_DATA.md) documents the fork and complete dictionary. No synthetic activity is represented as real English-learning evidence.

Generator: `python3 scripts/prepare_retention.py`. It creates `src/data/retention-events.json` and identical `public/data/retention-events-v1.json`, deterministically without RNG. Existing source/event/weekly fixtures are retained.

## Exact verification commands and results

Environment: macOS, Node20.5.0, npm9.8.0; existing Google Chrome via Playwright `channel: chrome`. Production preview serves the built `dist/` at127.0.0.1:4173. Test-owned server exits with the suite. Desktop1280×720; mobile iPhone13 emulation390×664 CSS pixels. No new dependency installs, lifecycle scripts, browser downloads or global packages.

| Command | Result | Evidence |
|---|---|---|
| `python3 scripts/verify_retention.py` | PASS, exit0 | [Oracle log](module-three-oracle.log): locked/segment rates, endpoints, duplicate feedback without funnel, immature/zero distinctions, exact fork and original fixture result |
| `python3 scripts/verify_data.py` | PASS, exit0 | Module 1 independent arithmetic regression |
| `python3 scripts/verify_funnel.py` | PASS, exit0 | Module 2 independent arithmetic regression |
| `python3 materials/AI_PM_Audit_Upgrade_I_II/instructor/verify_learning.py` | PASS, exit0 | Supplied instructor arithmetic; all three regression oracle outputs in [this log](module-three-regression-oracles.log) |
| `npm test` | PASS, exit0; **54 tests in7 files** | [Vitest/RTL log](module-three-unit.log); 25 new metric/misconception tests +2 new RTL tests +all27 earlier tests. Run5.46s |
| `./node_modules/.bin/tsc --noEmit --strict` | PASS, exit0 | [TypeScript log](module-three-typescript.log), no diagnostics |
| `npm run build` | PASS, exit0 | [Build log](module-three-build.log); also runs strict-config `tsc -b`; 1,596 modules,2.63s. JS210.29kB/gzip64.78kB; CSS16.33kB/gzip4.54kB |
| `npm run test:e2e` | PASS, exit0; **16 tests** | [Playwright log](module-three-e2e.log); 6 new Module3 tests +all10 Module1/2 browser regressions;32.4s |
| Python manifest/source/schedule/dependency assertions | PASS | Fixture hashes and declared fork; original files/package/lockfile retained; all42 original study-plan rows and dates preserved |

Browser tests used the approved execution path for binding localhost and launching installed Chrome. No permission bypass occurred. Package files retain their prior hashes:

- package.json: `86c69842a148a6053a24f1776d63308889fc5b4f72d21a5d61570c5b5246d5e5`
- package-lock.json: `0677cf4316a4770e4b4c7e31d67aae41f29f0742b298a41852a6eda9bf7a36a1`

## Coverage and observed failures

No M3 unit/component, strict-check, build or browser test failed in this pass. The data-contract conflict above was found before claiming locked-answer verification and resolved through the explicit fork. No remaining tested calculation/interaction defect is known.

Metric tests cover D6, exact D7 start, just before D8, exact D8/after, exclusive cutoff and maturity equality; repeated events/delivery; shuffled rows; feedback without funnel; immature users with observed early activity; partially observed same-date cohorts under segment filtering; zero/empty/missing selections; unequal-size pooling; orphan events; duplicate/conflicting IDs; invalid names, segments and canonical UTC timestamps including invalid calendar dates.

Misconception checks cover all requested mistakes: returners as denominator, immature=zero, event counts as users, any post-signup activity, Day8 inclusion, funnel substituted for retention, return activity treated as English learning, unweighted cohort percentages and observational causality. Every wrong structured option has a specific correction. Primary numeric correctness without interpretation/investigation does not unlock transfer or complete practice.

RTL/browser tests verify reflection and instructor gating, fixed primary scope even with Oct15 explorer filters, retry, required next investigation, separate transfer and pooling choices, per-module legacy work, consulted state, journal/reflection persistence, actual downloaded JSON contents and attempt history, reset/cancel, unrelated-key preservation and disabled-storage warnings. Existing legacy module objects export unchanged. The storage version/key remains `ai-pm-lab:v1`.

## Visual and accessibility evidence

Inspected both viewports and the workbench/assessment screenshots below. Timelines use labeled dates, an explicit cutoff and a patterned future interval; unavailable/zero states have text explanations. Native labeled controls, fieldsets, navigation focus, chart keyboard activation and table keyboard scrolling pass. Mobile tables scroll inside their focusable containers; the page has no horizontal overflow in tested views. This is targeted keyboard/visual inspection, not a comprehensive assistive-technology audit.

| State | Desktop | Mobile emulation |
|---|---|---|
| Lesson/navigation | [Viewport](module-three-desktop-viewport.png) | [Viewport](module-three-mobile-viewport.png) |
| Timeline, comparison and event audit | [Workbench](module-three-desktop-workbench.png) | [Workbench](module-three-mobile-workbench.png) |
| Reflection, interpretation, next check and transfer | [Feedback](module-three-desktop-feedback.png) | [Feedback](module-three-mobile-feedback.png) |

## Curriculum status and limits

The [42-day mapping](../STUDY_PLAN_MAPPING.md) still treats Module3 as an optional advanced supplement after foundations. All original October19–November29 tasks remain in order; unit economics is not replaced and no Google Calendar action occurred. The plan's existing Day41 break-allocation discrepancy remains explicitly documented.

New Module3 content is authored here: timelines, exact/rolling definitions, right-censoring and tracking assumptions, the transparent fixture fork, unequal-cohort pooling illustration, reflection/structured investigation gate and misconception feedback. Chapters5/7 and1 supply conceptual anchors; planned Chapter16 is not falsely attributed as finished material.

Fixture arithmetic assumes complete event capture, not verified real instrumentation. Causes, channel mix, onboarding/release differences, English learning and product value are not measured by these data. Journals/reflections are stored and exported but not semantically graded. Mobile testing uses Chrome emulation; physical devices, Safari and a full screen-reader audit remain untested.

No software-verification blocker remains for Module3's implemented scope. Module4 is not started; it requires its own implementation and verification gate. No learner-effectiveness or mastery claim follows from this checkpoint.

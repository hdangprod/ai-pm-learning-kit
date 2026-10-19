# AI PM Learning Lab — verified checkpoint, 2026-10-19

Modules **1 and 2** pass their applicable software-verification gates. Module 2 is available through Funnel analysis in the navigation. Modules 3–6 remain specified and unimplemented. This pass completed the requested study-plan reconciliation and Module 2; Module 1's lesson, calculation and assessment were preserved and regression-tested.

The tests verify calculations, interactions and the stated practice rules. They do not measure learner mastery or educational effectiveness.

## Study-plan reconciliation

Read the supplied `/Users/dangnguyen/Desktop/PM/AI_PM_Ke_hoach_tu_hoc_6_tuan.md` and preserved it unchanged in `materials/`. The request names a `(1)` suffix; the supplied path does not. The actual 42-day mapping is [STUDY_PLAN_MAPPING.md](../STUDY_PLAN_MAPPING.md).

- October 19–November 29, 2026; 42 daily sessions, 120 minutes including breaks.
- User-preferred 09:00–11:00 Asia/Ho_Chi_Minh overrides the document's suggested evening time.
- Original chapter/exercise sequence and required artifacts retained across all 42 rows.
- App use is supplementary. Funnel, event retention and strict Simpson reversal are optional advanced extensions after the foundation phase, not one module per week.
- No Google Calendar events changed; document content was treated as learning source material.
- Source discrepancy retained explicitly: day 41 specifies 90 minutes independent work +20 critique +10 log, with no explicit breaks, whereas the general schedule reserves ten minutes of breaks. The mapping flags this rather than silently rewriting its assessment timing.

Only the obsolete pacing paragraph in LEARNING_EXPERIENCE_SPEC.md was reconciled. The other completed specifications and source answer keys were retained.

## Module 2 implemented

[Calculation engine](../../src/lib/funnel.ts), [interactive workbench](../../src/FunnelExplorer.tsx), [lesson and assessment](../../src/data/module2.ts), [fixture documentation](../MODULE_2_DATA.md).

The lesson explains funnel purpose, distinct users versus event rows, strict event order, step/overall denominators, complete observation windows, duplicate delivery, tied/early/boundary events, and appropriate product next steps. It provides segment/cohort filters, denominator selection, chart inspection, a keyboard-focusable event audit, dictionary and downloadable fixture.

The hypothesis, primary numeric + reasoning checks, misconception feedback, retry, gated instructor explanation, separate numeric + reasoning transfer, saved attempts/consulted state, journal and reset use the existing learning components. A correct number alone cannot complete either stage. Work for Modules 1 and 2 persists independently under the existing storage version.

### Locked results and data lineage

Entirely authored synthetic English-tutor activity: 12 fictional users, 28 raw event rows, 27 distinct event IDs. The first two cohorts are fully observed; four users in the third cohort are immature.

| Slice | Eligible signups | Ordered practice | Ordered feedback |
|---|---:|---:|---:|
| All mature cohorts | 8 | 6 | 4 |
| Novice | 4 | 4 | 4 |
| Experienced | 4 | 2 | 0 |
| Oct 1 / Oct 8 separately | 4 each | 3 each | 2 each |
| Oct 15 immature-only selection | 0 | 0 | 0 |

Feedback/practice =4/6 =66.6667%; feedback/signup =4/8 =50%. With no eligible denominator, conversion is unavailable, not 0%.

`[signup, signup + 7 days)` is half-open; strict step order additionally requires practice after signup and feedback after practice. Events at the upper boundary do not qualify. Complete windows must end on or before the exclusive observation cutoff. Event file order does not determine path order. Exact duplicate IDs are ignored; contradictory duplicates and malformed timestamps/names fail validation. Orphan events are excluded and labeled.

`python3 scripts/generate_events.py` produces deterministic v1 JSON copies in `src/data/` and `public/data/`; no RNG or real research IDs. [DATA_MANIFEST.json](../DATA_MANIFEST.json) records hashes. The existing weekly-data preparation script now preserves manifest entries for other fixtures rather than clearing them.

### Additional authored curriculum content

Module 2 adds a queue metaphor, complete event/time dictionary, ordered-funnel explanation, five explicit diagnostic rows beyond the earlier fixture blueprint, an event-treatment audit, denominator misconceptions, a tracking/friction decision prompt, and a separate overall-conversion transfer exercise. It reuses Chapter 1's activity/outcome and denominator concepts. Planned Chapter 16 is explicitly not represented as a delivered source lesson. No external curriculum research was repeated and no real evidence was invented.

## Verification — exact commands and final results

Environment: macOS, Node 20.5.0, npm 9.8.0, existing Google Chrome via Playwright `channel: chrome`. Production preview serves `dist/` on 127.0.0.1:4173; test-owned preview exits after the suite. Mobile checks use iPhone 13 emulation (390×664 CSS pixels), not physical Safari; desktop uses 1280×720.

| Command | Result | Evidence |
|---|---|---|
| `python3 scripts/verify_funnel.py` | PASS, exit 0 | Independent Python Cartesian-path oracle: all locked cohort/segment counts, duplicate count, JSON-copy identity and both rates |
| `python3 scripts/verify_data.py` | PASS, exit 0 | Original Module 1 arithmetic oracle |
| `npm test` | PASS, exit 0; 27 tests in 5 files | [Unit/component log](module-two-unit.log); 17 new funnel metric/edge tests +1 new RTL learning-loop test +9 Module 1/storage regression tests; final run 7.64s |
| `./node_modules/.bin/tsc --noEmit --strict` | PASS, exit 0 | Strict check completed before the successful build; no diagnostics |
| `npm run build` | PASS, exit 0 | [Build log](module-two-build.log); 1,592 modules, 4.30s; JS185.91kB (gzip58.70kB), CSS14.10kB (gzip4.03kB) |
| `npm run test:e2e` | PASS, exit 0; 10 tests | [Final E2E log](module-two-e2e.log); 4 Module 2 +6 Module 1 desktop/mobile tests, 18.6s |
| Python manifest/schedule/dependency assertions | PASS | All fixture SHA256s, identical original CSV, 42 dated mapping rows, unchanged package/lockfile hashes |

Commands that need the localhost preview used the existing approved escalation route. No permission bypass, package installation, lifecycle scripts or browser download occurred in this Module 2 pass. The existing lockfile and dependency declarations remain unchanged:

- package.json SHA256: `86c69842a148a6053a24f1776d63308889fc5b4f72d21a5d61570c5b5246d5e5`
- package-lock.json SHA256: `0677cf4316a4770e4b4c7e31d67aae41f29f0742b298a41852a6eda9bf7a36a1`

### Calculation and interaction coverage

Tests cover chronological processing of shuffled rows, repeated IDs/activity, strict timestamp ties, before-signup and exactly-at-signup activity, feedback without practice, an invalid early feedback followed by a later valid one, just-before/exactly-at/after the seven-day boundary, fully mature cutoff equality, immature users who already converted, empty selections, orphans, conflicting duplicates, invalid timestamps/names and per-stage reasoning errors.

RTL and browser checks cover filter consistency; immature null rates; fixed exercise scope; wrong denominator and right number/wrong reasoning; hidden solution and retained consulted flag; transfer gating; per-module notes and progress after reload; reset of answers, feedback and completion; preservation of unrelated storage; focus after navigation; keyboard chart activation and mobile event-table scrolling; local fixture download/provenance; page overflow and uncaught browser errors. The original six Module 1 browser scenarios and nine unit/component checks continue to pass.

## What failed and was corrected

1. The first new RTL run failed after reloading completed work because its selector expected `02 Funnel analysis`; completion replaces the number with a checkmark. The test now matches the stable module title. No calculation or application change was required.
2. Visual inspection found a truncated long denominator option on mobile. The option now reads `Eligible signups`, while the surrounding metric labels retain the overall-versus-step definitions. The event audit was made keyboard focusable for horizontal scrolling.
3. The first final E2E run passed 9/10 and failed a newly added keyboard assertion that expected horizontal scrolling on desktop, where the table fits. The corrected test always checks focus and requires scrolling only when content overflows. Mobile keyboard scrolling passes. [Initial failure log](module-two-e2e-initial.log) retained; final suite passes 10/10.

No unresolved calculation or interaction failure remains in the exercised Module 2 fixture. The [Module 1 checkpoint](module-one-checkpoint.md) preserves its earlier setup and defect history.

## Visual evidence

Inspected the lesson/navigation, workbench, assessment/transfer feedback and persisted-completion captures on desktop and mobile. Layout is readable; controls remain within their panels. The mobile event table intentionally scrolls horizontally inside a keyboard-focusable region, while the page does not overflow. This is targeted visual/keyboard inspection, not a complete screen-reader audit.

| State | Desktop | Mobile emulation |
|---|---|---|
| Lesson/navigation | [Viewport](module-two-desktop-viewport.png) | [Viewport](module-two-mobile-viewport.png) |
| Funnel, filters and event audit | [Workbench](module-two-desktop-workbench.png) | [Workbench](module-two-mobile-workbench.png) |
| Calculation/reasoning/transfer | [Feedback](module-two-desktop-feedback.png) | [Feedback](module-two-mobile-feedback.png) |
| Persisted completion | [Full page](module-two-desktop-completed.png) | [Full page](module-two-mobile-completed.png) |

The full-page captures supplement the more legible viewport and component captures above. Module 1 screenshots were refreshed by the regression suite.

## Remaining uncertainty and next checkpoint

- No measured learner mastery, learning effectiveness, primary research, or causal treatment effect is claimed. Journal quality and delayed unseen-case performance require learner/reviewer assessment.
- The source plan's day 41 breaks-versus-assessment allocation needs explicit reconciliation if that timed assessment is scheduled; it was not silently altered.
- Safari/physical-device and comprehensive assistive-technology testing were not performed. No software-verification blocker remains for the tested Module 2 scope.
- Module 3 is not implemented. Its next gate is exact-day retention and censoring with its own independent oracle, unit/component tests and browser/visual checks. Passing Module 2 does not imply those gates have passed.

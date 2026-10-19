# Modules 1–5 consistency audit

Checkpoint: Module 5. Tests are additive; existing Module 1–4 tests and assertions are retained. See [verification status](../PROGRESS.md) for final counts and commands.

## Fixture lineage and numeric agreement

| Module | Intended fixture / download | Answer and display scope | Audit evidence |
|---|---|---|---|
|1 Data literacy|Original `case_b_weekly.csv`; application alias `case-b-weekly-source-v1`; existing `weekly.json` parsed copy|Week 1 all segments passed/assessed = 52/74 = 70.27%; transfer Week 2 coverage 47/100 = 47%|Existing metric/component/browser tests; independent source oracle; consistency test|
|2 Funnel|`events-v1`, `src/data/events.json` ↔ `/data/events-v1.json`|Distinct mature 8 → 6 → 4; primary 4/6 = 66.67%; transfer 4/8 = 50%|Existing edge and UI tests; Python event oracle; browser hash / boundary identity check|
|3 Retention|Separate `retention-events-v1`, `src/data/retention-events.json` ↔ `/data/retention-events-v1.json`|Exact D7 Oct 1 2/4 = 50%, Oct 8 1/4 = 25%, pooled 3/8; Oct 15 unavailable|Existing edge and UI tests; Python retention oracle; browser confirms fork identity|
|4 Segmentation|Separate `strict-simpson-v1`, source/download JSON|A pooled 74/100, B 36/100; B experienced 9/10; hypothetical common-mix rates labeled illustrative|Existing 27 arithmetic/feedback tests and 6 browser cases; independent Fraction oracle|
|5 Causal reasoning|Original weekly source, shared deliberately with Module 1; no replacement or new CSV|Relative sessions (460−320)/320 = 43.75%; coverage 74% → 47% = −27 pp; assessed passes 70.27% → 63.83%; transfer novice 15/60 = 25%|Pre-implementation CSV oracle, new pure-metric/RTL/browser cases|

The Module 2 diagnostic event `UPPER_BOUNDARY` belongs to C1U3. The declared Module 3 fork changes that event's learner to C1U1; substituting the original funnel fixture would yield three October 1 returners instead of two. This existing conflict and its declared fork remain unchanged. Module 4's strict reversal does not replace the weekly source's composition-only example. Weekly rows describe different groups, not repeated learners.

`tests/consistency.test.ts` compares each primary/transfer key with its actual metric function and independent locked numbers. Existing module tests connect charts/tables/filters to those functions. `tests/browser/consistency.spec.cjs` visits every module on desktop/mobile, checks visible catalog provenance and live rates, downloads each intended file and checks its SHA256 against the unchanged manifest. Source/public/typed-copy identity is checked independently. All original source files, eight manifest entries and dependency hashes are checked without regeneration.

## Issues found and resolutions

1. **Reset scope was global-only.** The existing footer reset intentionally clears this entire lab after confirmation. Added an explicit per-activity control with its own confirmation. It deletes only the active module's Work entry and remounts that exercise to clear ephemeral answer/solution state. Hypothesis, reflection, attempts and journal are cleared only for that activity; other modules' objects and unrelated localStorage keys remain. The global control and behavior remain intact. Explorer selections are session-only and are not represented as saved learning history.
2. **Exports lacked metric context.** The existing version 1 records contained numeric input and choice indices without definitions. Added `definitionsVersion`, `metricDefinitions`, and `moduleDefinitions` to exports only. Metric IDs name the same quantity consistently; rate/relative values use percent (25 means 25%), differences use percentage_points; scopes identify the fixed dataset/group. Export question labels explain old choice indices without including hidden solutions, expected answers, correctness flags or feedback keys. Existing `version`, `exportedAt`, and raw `modules` records remain. No progress migration or storage-schema change.
3. **Provenance was distributed among individual dictionaries.** Added a shared visible dataset/download catalog to the existing curriculum source section, retaining the original per-module source explanations. Version IDs, download paths and hashes are centralized. The weekly-source identifier is explicitly an application alias, not a fabricated source version. Original source files and manifest are unchanged.
4. **Missing outcome follow-up versus future windows.** Module 5 explicitly distinguishes assessment nonresponse after a complete observation window from Module 3's right censoring. No missing learner is silently labeled failure; no unobserved mechanism is labeled confirmed.

## Backward compatibility and accessibility

Storage remains `ai-pm-lab:v1`, `{version:1, modules:…}`. There is no migration, automatic clearing or attempt rewrite. Legacy records without optional interpretation/extra choices still load. Browser and unit tests seed old records, compare exported objects unchanged, and test each of five per-activity resets against every other module's history. Existing global reset/cancel and unrelated-key tests still run. Failed writes display a warning; exporting remains available for session-only work.

Native labeled controls, radio groups, checkboxes and chart buttons support keyboard operation. Module navigation moves focus to the lesson heading; table and relationship-map overflow are contained in focusable scroll regions. Browser tests exercise Enter, Space, horizontal scrolling and viewport-width checks on desktop/mobile. Existing M1–4 keyboard/layout assertions are unchanged. This is targeted verification, not a comprehensive assistive-technology certification.

No new dependency, network API, paid service or browser download was introduced. No Google Calendar action occurred. No curriculum exercises or daily sessions were replaced. There is no causal estimate, real trial result, measured learner mastery or educational-effectiveness claim.

## Final six-module integration (Module 6)

The earlier findings above are preserved. Module6 adds `decision-scenario-v1`: identical `src/data/decision-scenario.json` and `/data/decision-scenario-v1.json`, with two additional manifest entries. All eight earlier manifest entries retain their hashes, and no prior fixture is substituted. The original source corpus remains contextual evidence rather than a synthetic product-event log. New decision scenario facts, estimates, challenge variants and transfer conditions are explicitly simulated; source-context claims have separate locators/origins.

All six modules appear in enabled navigation and retain visible source/dataset labels. `decision-consistency.test.ts` and `six-module-audit.spec.cjs` add checks for every named fixture/hash, six independent activity states, reset isolation across all six, export units and source downloads. Existing numeric keys and all Module1–5 assertions remain: hard-coded export module-count expectations expand5→6, while their numeric scope assertions still apply unchanged to the first five modules. Module6 receives its own points assertions rather than being forced into percentage arithmetic.

Module6 uses optional `Work.decisionRoom` version1 under the existing `ai-pm-lab:v1` top-level format. Old Work objects and attempts remain byte-for-byte values on read/export; no migration or clearing occurs. M6 drafts, evidence classifications, matrix state, challenge reveal, original/revised/transfer snapshots and consultation are stored separately from old numeric attempts. Out-of-order partial reasoning uses explicit−1 entries, avoiding sparse-array holes serializing to null. Malformed optional state warns without rewriting raw storage. Unavailable storage retains session work with a warning; browser export remains usable.

Exports preserve raw records and add `structured_decision_score` in **points0–10**, with five dimension labels, scenario IDs, stages and contextual option labels. Earlier percent/rate-difference units remain unchanged. No hidden expected-answer, solution, correctness flag or context-validity key is included in exported question/contract metadata; learner-attempt feedback remains part of history as intended. A structured score is not the plan's0–8 rubric, VolumeII0–20 result, independent memo assessment or measured mastery.

M6 per-activity reset clears only its own scenario/artifacts and shared journal entry. The existing confirmed whole-lab reset remains explicit and preserves unrelated localStorage keys. Original/revised artifacts do not overwrite each other; every failed attempt remains inspectable. Fixed challenge variants survive reload and cannot silently switch mid-round. Correct reassessment can keep or change strategy.

No original teaching material, original plan text, daily task row, dependency declaration or lockfile is changed. See PROGRESS.md and TECHNICAL_COMPLETION_REPORT.md for actual final commands, counts, screenshots and limitations. Technical verification is distinct from educational effectiveness; the next step is independent educational-quality audit, not additional unrelated module implementation.

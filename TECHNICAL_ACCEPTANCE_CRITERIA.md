# Technical acceptance criteria

React + TypeScript static client with Vite, pure metric functions, deterministic fixture files, localStorage progress. No backend, paid API, external fonts or runtime analytics. Build via npm run build; run via npm run dev. All timestamps UTC. Source CSV preserved byte-for-byte. Generated fixture versions and SHA256 tracked.

## Incremental gates

1. Specifications and authored content precede app implementation.
2. M1: original CSV aggregates and edge cases; interactive wrong/correct input, filter, solution gating and persistence pass before M2.
3. M2: ordered distinct-user funnel with duplicate/out-of-order/boundary fixtures; independent Python oracle; UI checks, then M3.
4. M3: exact-day retention, full-window eligibility, null immature/empty; independent oracle; interactions, then M4.
5. M4: strict reversal and source non-reversal distinguishable; independent fixture counts and segment controls pass.
6. M5: relative change vs percentage points, causal misconception feedback and transfer pass.
7. M6: alternative decisions accepted with justified gates; critical errors fail; export/reset and full regression pass.

## Calculation contracts

- Safe ratio: denominator 0 → null; missing is not 0. Aggregate counts first, never average segment percentages.
- Weekly: sums eligible/sessions/assessed/passed; pass rate passed/assessed, coverage assessed/eligible, bounds passed/eligible and (passed+eligible−assessed)/eligible. Test week1 [100,320,74,52], week2 [100,460,47,30], bounds [.52,.78]/[.30,.83].
- Funnel: include users with complete 7-day observation; follow ordered events with strictly increasing times after signup; duplicate event ID counted once; unique users at each stage, no event-count denominator. Time window [signup,signup+7d), cutoff exclusive.
- Retention: fixed signup cohort, D7 activity in [signup+7d,signup+8d), activity practice/feedback, full window ends ≤ cutoff. Same user counts once. Not cumulative or rolling retention. Immature cohort displays null, excluded from pooled denominator.
- Strict reversal: A74%, B36%; within strata B higher by10pp; selection is not randomization.
- Grade: numeric tolerance 0.02 percentage points; reject blank, NaN, Infinity; reasoning must also pass. Changing answers invalidates displayed feedback until resubmit.

## Verification and reliability

Vitest tests cover all metric functions, fixtures, malformed/empty input behavior and feedback branches. React Testing Library covers learning interactions. Independent Python standard-library script reads CSV/JSON and checks hard-coded hand-derived answers, not imported JS outputs. Browser E2E at desktop/mobile checks navigation, controls, overflow, persistence and no uncaught errors; screenshots inspected if browser available. Build includes tsc strict checking.

User work survives reload with schema validation; storage disabled warns while session remains functional. Reset only app data. No injected HTML from notes. Source downloads and CSV links work. README includes setup, data lineage, test commands, missing six-week plan, new authored content and learning-efficacy limitation. PROGRESS.md records actual pass/fail gates, not assumed status. No release claim until checks run.

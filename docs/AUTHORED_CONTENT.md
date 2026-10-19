# Authored teaching extensions v1 — 2026-10-19

These lessons/fixtures are application-authored synthetic practice, not completed original curriculum, primary research, validated benchmark, or evidence of English-learning efficacy. Original weekly CSV and its instructor key are reused unchanged. Original outline chapter numbers are curricular destinations only.

## Event fixture and dictionary

12 fictional learners: four signups on each of 2026-10-01, 10-08, 10-15 at 00:00 UTC; two novice and two experienced per cohort. Observation ends exclusive 2026-10-19T00:00Z. No RNG; deterministic explicit scenario version1.

users: user_id unique fabricated ID; signup_ts ISO UTC; segment pre-use novice/experienced. events: event_id unique except one deliberate duplicate row, user_id FK, name practice/feedback, ts ISO UTC. No research IDs. Event order in file is not time order. No event represents a measured learning outcome. Returning means activity, not skill improvement.

Within each cohort users1/2/3 practice at day1; users1/2 feedback at day2; user4 feedback at day1 without prior practice (excluded from ordered funnel). User1 returns with practice at day7 in first two cohorts; user2 also returns in cohort1. User3 cohort1 returns at day8 exactly (excluded from D7). Include duplicate first practice row. Young cohort events after cutoff omitted. Mature pooled funnel:8→6→4; novice4→4→4, experienced4→2→0. D7: cohort1=2/4, cohort2=1/4; cohort3 unavailable. Pooled mature3/8.

Intuition: funnel asks how many entrants reach successive steps; retention asks who returns in a defined future interval. A click is not learning. Exact-day windows need their entire day observed; a missing future cannot be scored as a failure.

## Strict Simpson fixture

Arm A: novice2 passes/10 assessed; experienced72/90. Arm B: novice27/90; experienced9/10. Counts are deliberately constructed. B outperforms within both strata but pooled B36% < A74% because B has more novice learners. No random assignment or causal inference. Compare with original weekly fixture whose stratum rates stay equal and therefore is not a strict reversal.

## Causal lesson

Engagement is activity, not learning impact. Weekly cohorts differ; assessment coverage changes; no baseline or random assignment is provided. More sessions can reflect deeper practice or more friction. Check instrumentation and composition, then plan a comparator and delayed unaided task. Do not manufacture RCT results or significance.

## Decision simulation

Source case asks which research investment is justified. User chooses bounded prototype / incumbent workflow / human-supported pilot / research. Each can be defensible when scoped as a test, with alternatives and evidence limits. App scores five structured checks at0–2, adapted from instructor rubric, and labels journal review as manual. Revision scenario is hypothetical: configured incumbent meets agreed delayed outcome and acceptable effort. This weakens the residual-gap claim in that recruited group, not all market opportunity.

New thresholds are practice rules, not empirical learning standards. Transfer answers and misconceptions are locked in INTERACTIVE_EXERCISE_SPEC.md before implementation. Reviewer must assess unseen work to establish mastery.

## Module 2 implementation detail

The locked v1 totals are preserved. Five explicit diagnostic rows and their exclusions are documented in [MODULE_2_DATA.md](MODULE_2_DATA.md), along with generation, schema, independent oracle and authored lesson additions. These are teaching edge cases, not research observations.


## Module 3 retention extension

See [MODULE_3_DATA.md](MODULE_3_DATA.md) for the new timeline, exact/rolling definitions, right-censoring lesson, weighted pooling example, misconception feedback, reflection/investigation gate and transparent one-event fixture fork. The new activity data remains synthetic; the original verified events-v1 fixture is preserved. No missing Chapter16 text or real learning evidence is implied.


## Module 4 strict reversal extension

See [MODULE_4_DATA.md](MODULE_4_DATA.md) for the four pre-locked synthetic rows, generator/dictionary, independent arithmetic, source-example distinction, weighted aggregation, illustrative mixture controls, percentage-point versus relative-change explanation and structured causal/investigation feedback. These are application-authored teaching materials, not completed Chapter16 text or real research. No earlier dataset is modified.

## Module 5 — causal reasoning extension

The original four-row weekly simulation, locked arithmetic, activity/outcome cautions and conceptual I2 / II5D anchors are reused. New teaching content consists of the intuitive scenario, reference controls, nonresponse visualization, A–F explanation classification, hypothetical relationship map, five design summaries, proposed delayed unaided evaluation against a configured incumbent, checklist and structured primary/transfer misconception feedback. All are labeled teaching extensions; no unfinished advanced chapter, real study, empirical effect or validated rubric is claimed. See [Module 5 content contract](MODULE_5_DATA.md) for the objective/source/dataset/exercise/answer/feedback/criterion mapping. Free-text notes are not semantically graded.

## Module 6 — decision simulator

Original I4/final, II final/instructor and English AI case concepts are reused without repeating curriculum research. Separately versioned decision-scenario-v1 supplies authored resource caps, staff-hour estimates, fictional deadlines, three changed-information branches and a stipulated incumbent-success transfer. Evidence-board source paraphrases retain their origin/locator; they are not new field observations. The matrix, memo forms, five-dimension structured grading, critical checks, keep/revise workflow, feedback, history and instructor adaptations are authored. See [scenario/acceptance contract](MODULE_6_SCENARIO.md) and [instructor anchors](MODULE_6_INSTRUCTOR.md). No source interview, experiment, real revenue, market share or learning result was invented. No advanced AI/RAG/SQL content is added.

# Module 5: source and authored teaching contract

Pre-implementation gate: `python3 scripts/verify_causal.py` passed before Module 5 application code was written. Exact source arithmetic and copy identity are recorded in `verification/module-five-oracle.log`.

## Source reuse

Use the unchanged original `practice/case_b_weekly.csv` (archived curriculum), its byte-identical public download, and the existing parsed `src/data/weekly.json`. The application catalog calls this `case-b-weekly-source-v1`; this is an application identifier, not a new source release. All four rows are SIMULATED. No actual English-learning research evidence is represented.

One row = signup cohort week × pre-use segment. Eligible, assessed and passed count distinct fictional learners within that row; sessions count activity events. Week labels denote separate groups, not repeated measurements of the same learners. Both cohorts have a complete seven-day observation window; incomplete assessment participation is missing outcome follow-up, not the immature-window censoring taught in Module 3.

| Group | Eligible | Sessions | Assessed | Passed | Unknown outcomes |
|---|---:|---:|---:|---:|---:|
| Week 1, experienced |80|240|64|48|16|
| Week 1, novice |20|80|10|4|10|
| Week 2, experienced |40|160|32|24|8|
| Week 2, novice |60|300|15|6|45|

Weekly totals: 100/320/74/52 and 100/460/47/30. Session relative change uses Week 1 sessions as denominator: 43.75%. Coverage is 74% and 47%, a −27 percentage-point difference. Pass rates among assessed are 70.27027% and 63.82979%. Week 2 novice coverage = 15/60 = 25%; 45 outcomes remain unknown. Stable within-segment assessed pass rates do not establish no causal effect.

## Metric behavior

Controls select segment and reference/comparison week. Reversing the reference changes relative session change to −30.43478%; percentage-point differences reverse sign. Empty selections have zero counts and undefined rates. Unknown input counts propagate as unavailable, never zero; invalid counts and duplicates are rejected. Relative change at a zero reference is unavailable. No confidence intervals, significance tests or effects are estimated.

## Learning and assessment mapping

Conceptual anchors: Volume I Chapter 2 (questions, competing explanations), Volume II Chapter 5 / Exercise 5D (composition, observed rates). Read these alongside the textbook; this application does not deliver an unfinished advanced causal-inference chapter. Original arithmetic and cautions are reused; all workbench UI, causal map, five design summaries, alternatives classification, protocol, checklist, misconception options and structured assessment are authored teaching extensions.

| Activity | Objective and source | Data / exercise | Expected response and feedback | Practice criterion |
|---|---|---|---|---|
| Dashboard, reference controls and table | Activity vs outcome; relative vs points; I2 / II5D | Original weekly CSV, four rows | 43.75% sessions; −27 pp coverage; distinguish different weekly groups | Exploration only, no completion credit |
| Alternatives and relationship map | Competing explanations / selection; I2 | Weekly composition and missingness | Composition changes are observed; learning, activity-only, outcome-related selection and acquisition/exposure/instrumentation explanations remain unresolved; unchanged coverage is contradicted | Explicit classification feedback; no mastery claim |
| Designs and evidence checklist | Baseline / comparator / investigation; I2 research questions | Authored proposal, no result dataset | Delayed unaided outcome, pre-use baseline, suitable incumbent, eligibility/window, missingness audit and discriminating assignment | Checklist marks planned elements only, not study validity |
| Primary, fixed Week 1 → Week 2 all segments | Explain descriptive activity; II5D plus authored causal extension | Original CSV, sessions | 43.75%; reject causal learning inference; recognize mix and missingness; choose defensible study; distinguish aggregate relative percent | Numeric within 0.02 plus every structured reasoning group correct |
| Instructor explanation | Explain revisions | Same primary | Explicit attempt + written interpretation + every primary reasoning group attempted before reveal | Consulted history sticky; text not semantically graded |
| Transfer, fixed Week 2 novice | Coverage / selection; II5D adaptation | Original CSV, eligible 60, assessed 15 | 25%; 45 unknown; avoid zero imputation and complete-case generalization; audit follow-up with meaningful comparator | Numeric within 0.02 and all transfer reasoning correct |
| Hypothesis, interpretation and journal | Decision and revision rule; I2 | Learner-authored notes | Specify observation that would change decision, owner/date in journal | Saved, not automatically graded; no measured learner mastery |

The A–E hypotheses can coexist and are not equally supported. Population composition is directly described by counts (novice share 20% → 60%); its causal contribution is not identified. The CSV has no assignment, exposure, acquisition, individual baseline or unaided delayed-performance fields. Outcome-related missingness is plausible, not measured. No fabricated study outcomes or research citations are added.

Proposed evaluation: eligible new learners, predefined seven-day use period and delayed unaided target-skill assessment, individual pre-use unaided baseline, suitable configured incumbent for the same task/time budget, independent scoring rubric and blinded scoring where feasible, valid individual random assignment when appropriate, exposure/adherence logs and an all-assigned coverage audit. Assessment seven days after the seven-day use period ends, with a predeclared 24-hour response window, is a teaching proposal, not a source fact. Randomization supports an assigned-workflow comparison only with implementation, measurement and missingness assumptions; it does not validate the outcome or prove universal benefit. No significance result exists here.

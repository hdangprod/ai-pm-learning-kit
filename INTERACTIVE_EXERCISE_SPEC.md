# Interactive exercise specification

M = materials/AI_PM_Audit_Upgrade_I_II. All proposed interactive modules are mapped below. All exercise calculations use synthetic case B; research snapshot A only provides contextual limits. Percentage inputs accept percentage points (70.27, not .7027), tolerance ±0.02; finite numbers only. Structured reasoning has one defensible answer for the stated question, with individual misconception feedback. Numeric correctness alone cannot complete a module.

| ID / source chapter and exercise | Dataset and objective | Primary exercise / expected answer | Feedback logic | Transfer / practice criterion |
|---|---|---|---|---|
| M1 / I ch1 1D, II Labs1–3; instructor supplemental 1D | Original case_b_weekly.csv, grain cohort_week × pre-use segment. Identify observed pass denominator vs eligibility | Week 1 pass among assessed: 52/74 ×100 = 70.27027%; reason: unassessed outcomes unknown | 52 flags eligibility denominator; 74 flags coverage confusion; other wrong values show numerator/denominator guidance. Reject “all eligible learned” | Week 2 coverage 47/100=47%; choose that missing follow-up is unknown, not failure. Both calculation + reasoning required |
| M2 / I ch1 worked example and 1B; planned ch16 not delivered | Authored users/events fixture v1. Ordered signup→practice→feedback within [signup,signup+7 days); unique users | Mature cohorts pooled: 8 signups, 6 practice, 4 feedback. Feedback among practice = 4/6=66.6667%; overall = 4/8=50% | Reject event-row counts and downstream events without prior practice; distinguish prior-step denominator from entrants | Overall feedback conversion =50%; choose ordered unique users. Both required |
| M3 / II ch5/7 cohort limits; planned ch16 | Documented retention-only fork of synthetic events (docs/MODULE_3_DATA.md), observation cutoff 2026-10-19T00:00Z | Oct 1 cohort D7 = 2/4=50%; activity day [7,8), practice or feedback; only completed windows eligible | Do not use returned users as denominator or treat immature cohort as 0. D7 differs from “ever returned” | Oct 8 D7=1/4=25%; choose immature Oct 15 D7 as unavailable. Both required |
| M4 / I 1D, II 5D, instructor answer | Original weekly + authored strict_simpson v1 | Strict fixture B pooled pass=36/100=36%; A=74/100=74%. Within novice A2/10=20%, B27/90=30%; experienced A72/90=80%, B9/10=90% | Never call the source equal-rate example strict reversal. Weighting can reverse ranking; neither proves treatment effect | B experienced=90%; exact calculation and composition reasoning both required |
| M5 / I ch2, II 5D/instructor | Original weekly, synthetic distinct cohorts | Sessions increase (460−320)/320×100=43.75%; does NOT establish learning impact; composition and missing follow-up are alternatives | Reject before/after causality and “stable segment rates prove no effect.” Ask for baseline/comparator/outcome coverage | Week2 novice coverage=15/60=25%; choose baseline + suitable comparator + delayed unaided task. Both required |
| M6 / I ch4/final, II final/instructor and project/English_AI_Case_Study.md | Research-context facts only; synthetic decision scenario, no fabricated research outcomes | No valid single investment answer. Select A bounded prototype, B incumbent workflow, C human-supported pilot, or D further research. Five 0–2 dimensions: bounded action, evidence scope, comparator, missingness, revise rule. Correct structured selections =10/10; critical overclaim blocks completion | Each unsupported causal/population claim blocks passing; choices specify why to revise. Do not grade by recommending D alone | Transfer: hypothetical incumbent meets agreed delayed outcome and effort; choose narrow residual-gap claim and reconsider bespoke investment. All critical checks correct; journal self-review separate |

## M4 locked fixture (authored before implementation)

Use A novice 2/10, experienced 72/90; B novice 27/90, experienced 9/10. A pooled 74/100=74%; B pooled 36/100=36%. Within novice 20%→30%, experienced 80%→90%; aggregate 74%→36% reverses. Primary answer B pooled =36%; transfer B experienced=90%. Reasoning: composition reverses pooled ranking without identifying causality. Source weekly example remains separately labeled “composition only.”

## Assessment contract

First submit saves immutable attempt snapshot (input, choice, timestamp, result). Feedback identifies error and next check. Reveal is explicit and tracked; no solution on initial exercise screen. Retry never erases history. Transfer is a different question, hidden until primary passes; revealing primary does not award transfer success. Each transfer includes a numeric and interpretive item except M6, whose transfer is decision reasoning. Practice completion requires both stages. True mastery requires unseen case + delayed reviewer feedback (readiness rubric); app does not infer it from clicks.

Module 6 journal prompts: decision; evidence locator; uncertainty/alternatives; next check/owner/time; revise rule. Export local work as JSON. Structured feedback applies only to selected items, with an explicit warning that free text is not automatically evaluated.


## Module 3 clarification from the implementation request

The Module 2 diagnostic row at Day7 for C1U3 conflicts with the locked retention answer. A separate synthetic retention fixture moves that one event to already-returning C1U1; source fixture and all earlier answers remain unchanged. The full lineage and dictionary are in docs/MODULE_3_DATA.md.

The primary exercise additionally requires a structured next-investigation choice. Before instructor reveal, require a saved tentative interpretation (presence only, no automatic free-text scoring) and an attempted interpretation/investigation pair. The instructor explanation then introduces composition, acquisition, onboarding, product behavior, tracking and small-cohort variation. Transfer additionally checks count-based pooling. These extra structured choices must pass along with the numeric answers. Existing Module1/2 gates and progress remain unchanged.


## Module 4 implementation clarification

The pre-locked four counts, primary36% and transfer90% are retained in the separate strict-simpson-v1 dataset; full provenance and controls are documented in docs/MODULE_4_DATA.md. Original weekly data remains a non-strict composition example.

Primary additionally requires structured causal scope, next investigation and percentage-point interpretation, alongside the composition interpretation and numeric answer. Transfer additionally distinguishes common-mixture illustration from experiment evidence. The existing optional reflection gate stores a proposed data/experiment request without semantic grading; instructor reveal follows a saved note and attempted answers in every primary reasoning group. Existing modules' gates and storage version remain unchanged.

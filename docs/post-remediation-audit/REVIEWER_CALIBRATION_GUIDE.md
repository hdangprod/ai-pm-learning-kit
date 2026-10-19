# Reviewer calibration guide

**Moderator/reviewer only.** This guide contains worked scoring anchors. All examples below were newly authored for calibration. Proposed scores illustrate rubric application; they are **not human reviewer results, participant responses or measured agreement**. Do not give this guide to a learner before independent assessments finish.

## Preparation

Use two reviewers who can assess analytics reasoning and product decisions. Both first solve the released form/version without reading its key, recording their time and ambiguities. Then compare with the private key and the frozen adjudication addendum in `ASSESSMENT_FORM_VALIDATION.md`. Resolve task defects before scoring learner work. Familiarity with the keys is expected for reviewers, but not for learners.

Create an anonymous response bundle with task/version, permitted scenario facts, calculations, original memo and revision. Withhold app points, pass flags, suggested correct statements, explanatory feedback, assistance labels, learner identity and timepoint until the initial scoring pass. A moderator must redact those sections from the app's complete review packet; the exported packet is an archive, not automatically a blind scoring view. Record unavoidable blinding breaches.

Score original unaided written responses first. Later oral explanations or corrected work receive separate annotations/scores; do not silently upgrade the original.

## Common scoring rules

M1–M5: unit/contract, calculation/reconstruction, inference boundary, decision/next evidence; each 0–2, maximum 8. M6: evidence→claim, action/alternatives, feasibility/rights, comparator/outcome/uncertainty, revision/stop rule; each 0–2, maximum 10.

Use0 for absent, wrong or contradicted reasoning;1 for relevant but incomplete/generic reasoning;2 for specific and defensible reasoning. Cite the response supporting each dimension. A correct answer without work can support the result but gives less evidence of reconstruction. Do not invent a hidden requirement for long prose or a specific preferred strategy.

Operational criteria remain ≥6/8 for M1–M5 and ≥8/10 for M6, with no zero dimension and no critical error. These are provisional study rules, not validated mastery cutoffs. Report the vector and critical flags before the threshold label. Do not combine app points with these independent scores.

Numerical tolerance: independent tasks allow ±0.1 percentage point/rate-percent after rounding; integer units/identities must be correct. A change of metric is not a rounding error. Distinguish missing data from a measured zero, and role-specific budget violations from a lower overall total.

## Worked anchor 1 — correct arithmetic with an invalid outcome claim

**New authored example, not an A/B/C task.** A training roster has 80 eligible employees, 30 assessed, 18 successful; remaining outcomes unknown. There is no baseline, assignment information or comparison group. The requested metrics are coverage and observed success among assessed employees.

Authored response:

> Coverage is 30/80=37.5%. Observed success is 18/30=60%. The other 50 outcomes remain unknown. Nevertheless, the 60% result proves that training caused learning gains, so roll it out to everyone immediately.

Proposed rubric application:

| Dimension | Proposed anchor | Reason |
|---|---:|---|
| Unit/contract | 2 | Requested denominators and observed populations are identified correctly |
| Calculation | 2 | Both requested arithmetic results are correct |
| Inference | 0 | An observed respondent result is asserted as a causal effect without a suitable comparison |
| Decision/next evidence | 0 | Universal rollout rests on that unsupported effect claim; no discriminating investigation |

Total 4/8; **critical causal overclaim**, therefore does not meet criterion. Do not let the two correct numbers erase the critical claim. Units and missingness were correctly described, so they retain credit; the invalid causal inference is scored in its own dimension. The critical classification must not disappear through averaging.

## Worked anchor 2 — bounded explanation with a generic next step

Using the same new scenario, authored response:

> Coverage is 37.5%; among the30 assessed, 60% succeeded. We do not know the other 50 outcomes. This comparison cannot establish that the training caused success. I would investigate follow-up before an investment decision.

Proposed vector: **[2,2,2,1] =7/8**, no critical error. Unit, arithmetic and scope are specific. The follow-up is relevant, but the response does not specify which response mechanism or observation would change the decision. Do not award2 for simply saying “investigate.” Under the current operational threshold this can meet the task criterion while remaining incomplete on decision specificity. Keep that limitation visible rather than pretending threshold attainment means full competence.

## Worked anchor 3 — unusual but defensible product decision

**New authored memo scenario.** For a warehouse staff-training workflow, available roles are3 engineering hours and2 research hours. No staff recordings are permitted this round. A configured incumbent rehearsal uses1E/1R; a physical mock-up uses2E/2R; a full implementation uses5E/2R. Existing interviews are reports, with no directly observed task result. A changed-information card reduces engineering to1h but keeps research at2h.

Authored v1:

> I will prepare a one-task incumbent rehearsal using invented content, within 1E/1R. The interview reports suggest a task to investigate, not validated demand or learning improvement. The2E/2R mock-up is possible but would consume all research time before checking the incumbent; the 5E implementation exceeds our cap. Compare correct completion of the same invented task under the configured incumbent against the current written procedure, with a predeclared error checklist and a ten-minute effort cap. The Research Lead will review the rehearsal in three days. If the incumbent meets every required checklist item within the cap, stop bespoke preparation for this task; if it does not, identify the specific failure and prepare a separately permitted comparison. No staff data or contact is authorized.

Authored revision:

> I keep the incumbent rehearsal. Its 1E estimate still fits the new engineering cap; the mock-up no longer fits as listed. Research time and the permission boundary are unchanged. Confirm the setup estimate and task checklist before proceeding; retain the same next-check date and stop rule. No task or participant outcome has been observed yet.

Proposed vector: **[2,2,2,2,2] =10/10**, no critical error. Evidence scope, alternatives, role feasibility, comparator and measurable reaffirmation are explicit. Keeping the strategy is not a weakness. This score is a teaching anchor, not a completed independent review of a real learner.

## Worked anchor 4 — a plausible direction with a vacuous gate

Modify only the preceding authored memo's comparator and next-step sections:

> We will use a popular existing tool as the comparator. The Research Lead should research more. Stop if it looks bad; otherwise revisit it later.

Retain the other correct provenance, concrete bounded action, alternatives and role constraints, but remove the specific comparator checklist, outcome/effort condition and checkpoint from the actual response. Proposed vector: **[2,2,2,1,0] =7/10**, no automatic critical flag solely for vagueness. It fails the operational criterion and has a zero revision dimension. Do not award specific comparator or revision points from the structured radio statements or from a nicer exemplar elsewhere.

## Worked anchor 5 — a correct caveat does not neutralize a contradiction

Authored addition to a memo:

> The observations are not causal evidence. Nevertheless, they prove this product improves every employee's learning, so launch it now.

Mark the causal overclaim and unsupported launch as critical, quoting the contradictory sentence. The earlier caveat does not cancel it. Score other dimensions from their own evidence; do not fabricate a high or low total to avoid recording a critical flag.

## Item-specific adjudication rules

These decisions must be frozen before scoring:

- Accept an alternative valid temporal path; a learner need not choose the exact pair described by the key if the stipulated strict order/window is satisfied.
- When a prompt permits refusing an invalid point estimate, a well-supported refusal is legitimate evidence. Record confirmed/uncertain units and the data-reconciliation requirement; do not impose an undisclosed calculation requirement afterward.
- A clearly labeled confirmed-return fraction/lower bound is different from a claim to have identified a true full-cohort rate.
- Distinguish a respondent-rate increase from a change in absolute success count. Reward an explicit identification of an ambiguous manager claim.
- For an incomplete stratum, a justified “unavailable” is a correct result, not a blank failure.
- Do not reward a universal “causality is impossible.” A well-implemented randomized assigned-workflow comparison supports an appropriately scoped estimate, subject to its stated assumptions.
- Treat advanced prerequisite reasoning as diagnostic unless the study has documented that it was taught. Do not infer failure of foundational PM judgment solely from an untaught specialist concept.
- For a rescoped effort estimate, require a concrete smaller deliverable and label the estimate as an assumption. An unchanged infeasible plan does not become feasible because the learner declares it faster.

## Disagreement procedure

1. Each reviewer writes dimension scores, exact response quotations/locators, critical flags and confidence before discussing the response.
2. Compare records without deleting either initial rating. Trigger adjudication for any critical-flag disagreement, criterion/pass-status disagreement, dimension gap greater than 1, or total gap of 3 or more.
3. Identify whether the disagreement concerns arithmetic, scenario interpretation, rubric application, language comprehension or a task defect. Consult the frozen clarification policy and actual response, not app points or preferred strategy.
4. If the prompt/key is genuinely ambiguous, accept defensible interpretations consistently for all affected responses. Log an instrument amendment and rescore every affected case; do not alter only the inconvenient learner's result.
5. Record the adjudicated vector and reason. If no consensus is possible, retain an unresolved status and both interpretations; do not average away a critical error or claim independent success.
6. Only after original scoring is locked, inspect assistance/exposure records and oral probes. These determine interpretation/eligibility and repaired-performance annotations, not retroactive evidence that the original response was unaided.

For a small first-person study, report raw agreement counts and disagreements by dimension/critical flag. Do not invent reliability coefficients or treat one calibration meeting as evidence of stable inter-rater reliability. Recalibrate when a new recurring interpretation dispute appears, documenting the amendment before applying it across responses.

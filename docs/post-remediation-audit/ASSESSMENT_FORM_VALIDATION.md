# Assessment form validation

**RESTRICTED: moderator and reviewer only. Contains answer-sensitive checks. Do not distribute with learner materials.** POST-EQ-1.0. No forms or keys were edited in this audit.

## Result

Forms A/B/C have coherent intended concepts and no material arithmetic error in the values reviewed. They are **not equated forms** and their proposed 45-minute limit is **unvalidated**. Several items require an explicit interpretation/scoring addendum before use. One numerical pooling example is already taught verbatim.

Inspected sources: `docs/educational-audit/UNSEEN_TRANSFER_EXERCISES.md`, private `assessment/reviewer-only/form-{A,B,C}-keys.md`, `common-rubrics.md`, the original full key container and `docs/ASSESSMENT_ADMINISTRATION.md`. The 47-assertion arithmetic script was rerun. It checks authored numerical assertions, not natural-language ambiguity, response processes or human completion time.

## Item-level review

Difficulty labels below are expert expectations, not measured item statistics.

| Item | Numerical/solution check | Required reasoning and novelty | Ambiguity or validity decision |
|---|---|---|---|
| M1A | Account-positive 3/4=75%; resolved among known tickets 4/6≈66.67% | Separate account and ticket grain; unknown tickets do not undo already observed account positives | “No resolved ticket” is not customer-value failure. Accept a separately labeled confirmed-resolved/all-ticket fraction; do not confuse it with the requested known-status metric. Moderate. |
| M2A | Stages 5→4→2; step50%, overall40% | Reconstruct strict time order, duplicate identity and upper boundary from a new log | For u5, a valid earlier search followed by the later purchase is sufficient; do not require the key's particular later-search path. Exact event ties remain excluded. Moderate. |
| M3A | A exact D7=1/3; B unavailable; requested rolling horizon incomplete | Non-midnight timestamps and separate horizon maturity | Define dates as dd/mm/yyyy and UTC. Observed-so-far may be reported separately, not as a complete-horizon estimate. Moderate/high reading load. |
| M4A | Pooled65%/75%; standardized40%/50%; no reversal | Recognize a non-reversal and distinguish standardization from effect | “Population and metric are the same” should mean comparable definitions/target population, not the exact same people in both products. Moderate. |
| M5A | Post mean contrast+1 point; difference in mean changes+1 point | Positive randomized assignment-effect example; unequal study time is part of the bundle | Distinguish points on a 0–10 outcome scale from percentage points. Baseline is not a requirement for identifying the randomized mean contrast under the stated assumptions. High conceptual load. |
| M6A | Listed prototype exceeds initial engineering cap; listed reduced paper plan exceeds changed cap | Compare scoped investigations; apply changed role capacity and rights | A newly rescoped ≤2E artifact is defensible only with a concrete deliverable and explicit unmeasured estimate; simply claiming the same plan takes half the time is not enough. Revision must be included in the timing budget. |
| M1B | X coverage40%, observed pass62.5%, eligible bounds25–85%; Y80%,60%,48–68% | Missingness bounds and non-identifiable ranking | Bounds are logical worst cases, not confidence intervals or causal effects. Moderate/high arithmetic load. |
| M2B | Confirmed completions2; one unresolved; eligible interval40–60%, invited interval50–75% | Organization-level paths across employees; conflicting payloads | **Preflight decision needed:** prompt permits justified refusal of a point estimate. Do not require bounds as the only route to full reasoning credit. A refusal must identify the conflict, correct units/denominators and a reconciliation action. High. |
| M3B | A25%; covered B subset50%; whole-B bounds25–75% | Calendar maturity does not repair capture failure | **Clarify “confirmed retention.”** 3/12 is a valid confirmed-return fraction/lower bound, not an identified full-cohort true rate. Reward explicit labeling rather than penalizing that number automatically. Moderate. |
| M4B | Within-stratum B>A; pooled45%/42.5%; all-assigned B−A=−2.5pp | Randomized total assignment contrast versus post-treatment conditioning | This tests a concept not explicitly developed in M4's main lesson. Mark as stretch/diagnostic unless prerequisite teaching is documented. Do not call post-treatment usage a baseline confounder. Highest conceptual demand. |
| M5B | Complete-case difference+20pp; all-assigned difference bounds−27 to+43pp | Randomization does not identify missing outcomes; difference bounds | Do not confuse bounds with uncertainty intervals. Recovery and sensitivity conditions must be specific. High. |
| M6B | Incumbent meets observed time/error gates; prototype breaches error gate and listed rollout cap; paid setting cost fits budget | Safety/quality guardrail, scoped comparator adequacy and configuration verification | Availability of a setting is not evidence it is enabled/effective. Observed small-test acceptance is not a proven population safety guarantee. |
| M1C | Coverage40%; assessed pass60%; eligible bounds24–84% | Record/person/outcome population distinction | Explicit instruction strongly cues the unit error. Easier than generating bounds for two groups in M1B. |
| M2C | Mature stages4→3→1; step≈33.33%, overall25% | Mature-window denominator despite early conversion in young cohort | Accept a separately labeled young-cohort observed-so-far result; not mixed into the stipulated mature contract. Moderate. |
| M3C | Mature pooled20%; unweighted mature-cohort mean31.25% is a different statistic | Pooling, unavailable future cohort and undefined rolling horizon | **Numerical example repeats `src/RetentionExplorer.tsx:24` exactly.** New censoring/horizon questions add reasoning, but do not call the pooling number fully unseen. Replace the numerical fixture in a reviewed new version or classify it as near transfer. |
| M4C | A pooled≈73.33%; B observed60%; missing B-large rate prevents strict-reversal and common-mix conclusion | Positive-weight missing stratum, observable versus target population | Prompt explicitly tells learners not to interpret zero denominator as0%, giving more support than M4B. Correct refusal of unavailable standardization is evidence, not an omitted calculation. |
| M5C | Sessions + 50%; assessed pass70%→80%; coverage−40pp | Bundled observational release, alternatives, significance versus equivalence | **Clarify “observed pass increased” as a rate if that is intended.** Counts actually fall. Accept a learner who notices the count/rate ambiguity. Harm/equivalence discussion is more advanced than the numerical task. |
| M6C | Prototype fails stated pilot gate; correction of affected source tasks leaves revised scores unknown | Conflicting measurement validity, citation harm and resource/rights limits | Do not invent corrected rates or treat a small synthetic-task gate as population validation. Both workflows' data must be rechecked; no automatic winner survives by assertion. |

## Difficulty and construct balance

| Module | A | B | C | Consequence |
|---|---|---|---|---|
| M1 | Grain/conditional denominator | Two-group bounds | Record units plus single-group bounds | Different arithmetic and inference demands |
| M2 | User events/ties/boundary | Account paths/conflicting source | Mature versus young account cohort | B adds a data-quality/refusal decision absent in A/C |
| M3 | Exact versus rolling time | Telemetry failure | Familiar pooling plus incomplete horizon | C's numerical answer is partly exposed in teaching |
| M4 | No reversal and standardization | Post-treatment conditioning in a randomized trial | Missing stratum/unavailable rate | B adds a prerequisite and is materially different in expected difficulty |
| M5 | Randomized bundle contrast | Differential missingness and effect bounds | Bundled observation plus harm/equivalence | Three valuable competencies, not equivalent measures of one narrow skill |
| M6 | Role-cap change | Guardrail plus retention configuration | Measurement-validity counterevidence | Shared memo rubric, but different constraint and uncertainty demands |

Form B repeats missingness-bound reasoning across M1B/M3B/M5B, which can create within-form learning or cueing. Form C is shorter and often states the misconception to avoid. All M6 cases discourage an unjustified launch; the set does not test a positive investment case with strong evidence. That limits breadth, but a new curriculum module is unnecessary for the proposed feasibility pilot.

Rotation reduces a fixed form/timepoint association across several people; **it cannot equate the forms**, and a single learner's A→B→C scores remain confounded with form difficulty. Report item-level reasoning, critical errors and exposure before total-score changes.

## Rubric consistency and critical errors

The common structure is coherent: M1–M5 four dimensions 0–2, maximum 8; M6 five dimensions 0–2, maximum 10; form total 50. These are not the in-app 10-point scale or validated readiness standards. Numerical tolerance in the independent key is ±0.1 percentage point/percent-rate after rounding; integer identities/counts must be exact. App practice tolerance remains a different ±0.02pp contract.

Before scoring, freeze these policies:

1. A wrong requested denominator is not repaired by a numerically accurate calculation of another unlabeled metric. A valid separately labeled alternative metric is allowed but does not replace the requested answer.
2. Small rounding/arithmetic slips are not automatically critical. A persistent wrong population, unknown-as-outcome imputation or unsupported causal/market claim is critical when it changes the decision.
3. Calculations, inference and decision dimensions are separate. Do not award a high decision score for correct arithmetic plus generic “more research.” Avoid mechanically double-penalizing the same harmless rounding error across every dimension.
4. A critical flag overrides a high total, with an exact quotation and the violated rule recorded. Correct caveats elsewhere do not erase a contradictory critical recommendation.
5. M2B refusal, M3B lower-bound labeling and alternative valid event paths must be accepted consistently. Do not create a stricter hidden requirement after seeing responses.
6. For M6, score the v1/revision pair: evidence/action/feasibility/comparator dimensions from their substantive claims, revision dimension from actual response to the card. Keep stage annotations; do not score only the nicer final version.

## Timing validation

Five 6-minute tasks plus a 15-minute M6 allocation equals45 minutes arithmetically. It provides no evidence that beginners can read, calculate, explain and write a reasoned revision within that limit. M6's maximum250 + 100 words would require23.3 words/minute for writing alone if the maximum were used, leaving no planning/reading time; the maximum is not a required length. No empirical typing or completion-speed assumption is made here.

Required dry run: two independent reviewers solve all forms and log reading, calculation, explanation and memo/revision time separately; then a fresh learner checks readability and timing on a **reserve** task/form, so the intended baseline forms remain unexposed. If reserve content is unavailable, sacrifice one existing form as a feasibility pilot and replace it before baseline. Do not present that exposed form later as unseen.

For the first feasibility study, prefer an explicitly provisional generous cap selected after those checks, with per-task elapsed time and unfinished-work reasons. A75-minute administrative ceiling is a proposed contingency, not a validated standard. Hold the chosen administration consistent across phases; report deviations and do not interpret speed-limited missing answers as established conceptual failure.

## Pre-evaluation release decisions

| Gate | Required action | Evidence that closes it |
|---|---|---|
| F1 Novelty | Replace M3C's taught tuple in a versioned reserve form, or label its calculation near-transfer and exclude it from claims of novel numerical transfer | Reviewed item/source exposure map and revised key, or predeclared restricted interpretation |
| F2 Wording/adjudication | Freeze M2B/M3B/M5C clarification and alternative-answer rules | Moderator addendum version and two reviewers applying the same policy to authored anchors |
| F3 Blueprint | Mark advanced/stretch expectations and stop calling A/B/C equated | Module/construct blueprint, separate diagnostic reporting and exposure log |
| F4 Timing | Conduct and record human dry runs/readability review before choosing the cap | Actual task times, deviations and rationale; not a sum of proposed minutes |
| F5 Confidentiality | Deliver one assigned learner directory; withhold change card until v1 lock; keys remain moderator-only | Rehearsed session delivery and final artifact/eligibility checklist |

These are requirements for interpreting the evaluation responsibly, not claims that a form has already been psychometrically validated.

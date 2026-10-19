# Module 4 — segmentation, weighted aggregation and strict reversal

Authored teaching extension, version1, 2026-10-19. Entirely synthetic English-tutor assessment counts. No real research evidence, randomized assignment or measured educational effectiveness. The four locked rows were specified before implementation in INTERACTIVE_EXERCISE_SPEC.md; planned Chapter16 is not a completed source lesson.

## Two separate examples

**Original curriculum:** practice/case_b_weekly.csv, I1D/II5D, already used in Module1. Experienced pass rate stays75%, novice40%, while pooled52/74→30/47 falls as the assessed mix changes. Equal within-segment rates mean this is composition/denominator reasoning, NOT a strict Simpson reversal. The original CSV and all prior event/retention/research datasets remain unchanged.

**Module4:** separately authored strict-simpson-v1 fixture. B exceeds A in BOTH groups, yet is lower when pooled. Do not merge these rows into research records or the original source exercise.

|Product|Segment|Passed|Assessed|Rate|Share of product's assessed users|
|---|---|---:|---:|---:|---:|
|A|novice|2|10|20%|10%|
|A|experienced|72|90|80%|90%|
|B|novice|27|90|30%|90%|
|B|experienced|9|10|90%|10%|

A pooled74/100=74%; B36/100=36%. Within-group B−A is+10 percentage points twice; pooled B−A is−38 percentage points. Relative pooled change is(36−74)/74≈−51.35135%, a different measure. The counts are a constructed teaching example, not estimated treatment effects.

## Reproduction and dictionary

`python3 scripts/generate_simpson.py` writes identical `src/data/strict-simpson.json` and `public/data/strict-simpson-v1.json` plus SHA256 manifest entries. Explicit deterministic construction; no RNG or empirical sampling. Previous manifest entries preserved.

- dataset_id/version: strict-simpson-v1/1; data_type:SYNTHETIC_AUTHORED.
- rows: four aggregate rows, grain product×pre-use segment, unique composite key.
- product: A or B, descriptive product label; not proof of treatment allocation.
- segment: novice or experienced, hypothetical pre-use classification; not treatment assignment.
- passed: nonnegative integer fictional assessment successes, at most assessed.
- assessed: nonnegative integer fictional assessed users. The two strata partition assessed users within each product by construction. No individual overlap audit, signup count, missing assessment coverage, baseline, channel, timestamp, rubric validation or randomization is supplied.
- rate: passed/assessed; denominator0 or no rows →null, not0%.

Metric functions reject invalid enums, duplicate keys, nonfinite/fractional/negative counts and passed>assessed. Empty or missing strata are not imputed. Strict reversal needs defined rates in both products for both segments and a strictly opposite pooled direction; ties are not a strict reversal. Incomplete comparison →unavailable.

## Counterfactual reweighting contract

The explorer's illustrative weighted rate is w×novice rate+(1−w)×experienced rate, where w is the hypothetical novice proportion from0 to1. Rates stay fixed; no events, counts, evidence or assessment keys change. This is an arithmetic scenario, not an observed experiment or individual causal counterfactual.

Initial weights match the fixture:A10% novice,B90%. Common50/50 gives A50%,B60%, a+10-point B difference. Both-all-novice gives20%/30%; both-all-experienced gives80%/90%. Independently changing weights can reverse the displayed mixture difference again. Positive-weight strata need defined rates; zero-weight unavailable strata need no imputation. Out-of-range or nonfinite weights are rejected.

The segment filter controls current comparison cards/chart/table. Original composition, full within-segment evidence and hypothetical reweighting stay explicitly unfiltered to preserve the context needed to interpret aggregation. The assessment scope is fixed: B pooled36%; B experienced90%, regardless of filters/sliders.

## Learning and assessment contract before implementation

Start with the intuitive contrast between experienced-heavy and novice-heavy classes. Then show actual counts, within-group comparisons, composition shares and the weighted formula. Keep source exampleA and authored strict exampleB visibly separate.

Primary numeric: B pooled36%. Interpretation must identify B higher within BOTH groups, A higher overall, and different assessed mixes. Additional structured items require: descriptive/nonrandom scope; a reasonable next investigation (definitions/coverage/baseline/composition and suitable experimental design); correct−38pp versus−51.35% relative distinction. All must pass before transfer.

Transfer numeric: B experienced9/10=90%; correct structured interpretation keeps denominator10 and rejects universal rollout. A further item checks50/50 illustrative reweighting versus an actual trial. Existing reflection gate is reused: request additional data/experiment in a saved note (presence validation only, no semantic grading), then require a submitted choice in each primary reasoning group before instructor reveal. Saved history, journal, version1 storage and export/reset compatibility are retained.

Misconception feedback explicitly addresses unweighted percentage means, wrong denominator, pooled-only and subgroup-only conclusions, percentage points versus relative change, randomization/segment assignment confusion, universal A/B superiority, and causal confounding claims from a descriptive reversal. No free-text answer is labeled automatically correct.

## Decision limits and curriculum

The arithmetic explains how population mixture produces the reversal; it does not identify a causal effect or prove a causal confounder. Need assessment definitions/coverage, comparable baseline/segment composition, acquisition/exposure/release history, uncertainty and a suitable comparison design before investment/rollout. No such investigation is claimed to have occurred.

Optional advanced supplement after the42-day foundations. Preserve original Chapter1/5/7 exercises, calendar and unit-economics work. No Google Calendar actions. Extra explanations, controls, feedback and fixture are application-authored teaching material; no new curriculum research or authoritative source content was invented.

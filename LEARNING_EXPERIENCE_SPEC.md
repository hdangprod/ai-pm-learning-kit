# AI PM Learning Lab — learning experience specification

Status: implementation baseline, 2026-10-19. Source inspection: [audit](docs/SOURCE_AUDIT.md). No new curriculum research. Main case: English-learning AI, separating source research snapshot A from synthetic product case B.

Audience: beginner analyst transitioning from engineering to PM. Outcome: explain a metric's unit, denominator, eligibility and window; test alternatives; make a proportionate decision with an explicit revise rule.

## Learning loop

Each module: read a short intuitive lesson and source/provenance label → write a hypothesis → manipulate filters and inspect table/chart → submit calculation and structured reasoning → receive specific corrective feedback → retry → reveal instructor solution optionally → attempt a separate transfer check. Draft, attempts, revealed state and practice completion persist locally by versioned module ID. Changing the filter does not change the fixed exercise prompt. Empty input never becomes numeric zero. Revealing a solution is recorded; practice completion is not independent mastery.

Independent mastery requires the transfer calculation and explanation without revealing that answer. Automated success is labeled “practice verified”; journal quality and delayed transfer remain reviewer-assessed. No job-readiness certificate or claim of measured learning efficacy.

## Sequence and provisional pacing

The app's module order remains unchanged. The actual textbook sequence is 42 daily sessions, October 19–November 29, 2026, 09:00–11:00 Asia/Ho_Chi_Minh, 120 minutes including breaks. The lab supplements the textbook; it is not one module per week. See [the full 42-day mapping](docs/STUDY_PLAN_MAPPING.md): M1/source-composition/M5/M6 relate to scheduled foundations; event funnels, retention and strict Simpson reversal are optional advanced extensions after the foundation gate. Preserve the original independent attempts and required artifacts.

| Module | Objective / competency | Reused material | New extension |
|---|---|---|---|
| 1 Data literacy | Define grain, conditional denominator, missingness; C05 | I ch1 1D; II Labs1–3; instructor 1D | Structured calculation + transfer UI |
| 2 Funnel | Distinguish ordered distinct-user steps, step vs overall conversion; C05 | I ch1 worked example/1B | Synthetic timestamped events and 7-day contract; planned ch16 |
| 3 Retention | Define exact-day return and eligible cohort; C05 | II ch5/7 warnings about cohort denominators | D7 lesson/data/censoring; planned ch16 |
| 4 Segmentation | Compare within-group and aggregate evidence; C05/C06 | 1D/5D composition example | Strict reversal fixture; planned ch16 |
| 5 Causation | Separate observation from effect and choose discriminating check; C06 | I ch2; II 5D; instructor 1D | Structured causal critique, no invented experiment outcome |
| 6 Decisions | Choose bounded next investment and revise rule; C02/C16 | I ch4/final; II final; English AI case brief | Interactive decision/risk/gate choices and journal |

Every exercise's dataset, exact answer, feedback and mastery check are in INTERACTIVE_EXERCISE_SPEC.md. Every extension must be labeled “Authored synthetic extension,” with no claim that it came from an unwritten chapter.

## Content completion gate

Before module coding: author dictionary, lesson, fixed answer and counterexample; verify arithmetic independently. Missing content and versioned assumptions are in docs/AUTHORED_CONTENT.md. Do not infer events from real research records. Retain original Vietnamese source files; application instruction is an English adaptation, not a certified translation. Arbitrary journal text receives self-review prompts, not fabricated semantic grading.

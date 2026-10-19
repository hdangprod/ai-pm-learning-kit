# AQ01–AQ04 verification matrix

**Moderator/reviewer material.** Contains assessment implementation details. Revision POST-EQ-1.0. CODE, COMPONENT, HTTP and independent browser execution are different evidence types.

## Disposition

| AQ | Original problem | Actual correction inspected | Executed verification | New/residual weakness | Educational consequence | Classification |
|---|---|---|---|---|---|---|
| AQ01 | Correct answers always first in M1–M5; index-based grading and familiar fixture answers | Semantic IDs attached in `src/data/modules.ts:17–20` / `assessmentIds.ts:1–8`; `gradeByIds()` in `src/lib/assessment.ts:6–16`; saved order/new-draft shuffle in `src/lib/practice.ts:4–17` and `src/Exercise.tsx:9–21` | Supplied permutation/legacy tests reproduced in 231-test run. AUD-P01 directly executed seeded grading for all ten primary/transfer questions. Fresh all-first policy passed 2/5 primaries, not 5/5. IDs remain correct under display changes. | Untouched order is deterministic, not per-person random. Numeric answers remain fixture-based; semantic/length cues and M6 fixed-first choices remain. Human item validity not measured. | Universal first-radio shortcut is removed for the stated scope; practice can still be memorized. Independent response tasks remain necessary. | **Resolved, M1–M5 mechanism only** |
| AQ02 | Structured 10/10 could be read as high-quality reasoning despite weak free text | Original structured scorer preserved in `src/lib/decision.ts:22–40`; separate status/export in `src/DecisionRoom.tsx:13,19`; packet/worksheet in `src/lib/memoReview.ts:4–13`; external rubric in `docs/INDEPENDENT_MEMO_REVIEW_RUBRIC.md` | Supplied six authored memo cases reran. AUD-P02 submitted placeholder memos through initial/revision/transfer: 10/10 structured, still Pending independent review. Legacy memos preserved. | Packet includes scores, selected correct statements and feedback; moderator must create a blind view before rating. App intentionally cannot record/authenticate a finished external review. | Honest separation exists. A weak memo is not automatically independently passed. No human review has yet been demonstrated. | **Resolved as workflow separation** |
| AQ03 | Familiar in-app transfers were treated as transfer evidence; no controlled independent form/exposure delivery | Same-case labels (`src/Exercise.tsx:42`); one-form splitting/create (`scripts/assessment_session.py:13–40`); initial-memo archive/hash/release (`:42–50`); private keys and Vite denial (`vite.config.ts:3`) | 43 supplied workflow checks, 47 arithmetic assertions, three additional authored session probes and 18 HTTP exposure requests executed. No other form/key delivered in tested learner directories. Duplicate lock/session rejected. | Timing and equivalence not validated; M3C numerical example is taught; M2B/M3B/M5C adjudication ambiguity; creation-time eligibility flag does not update when later hints are logged. | Delivery is usable for moderator dry runs. It is not yet a validated independent instrument or automatic certification of unassisted work. | **Partially resolved** |
| AQ04 | Missing assistance chronology and retry-change evidence; first-response interpretation unreliable | Appended cloned M1–M5 snapshots (`src/Exercise.tsx:16–21`); assistance fields (`src/lib/practice.ts:2–13`); M6 note binding/cloning (`src/lib/decision.ts:46–52`); legacy evidence decode (`src/lib/attemptEvidence.ts:5–20`) | AUD-P03/P04 verified consumed-note blocking, blank fresh note and unchanged first snapshot. Supplied legacy/export/reload tests reran. AUD-P05 confirmed stale-instance overwrite; AUD-P06/P07 confirmed fault-injected recovery/render weaknesses. | Snapshot immutability is local to an in-memory transition. Whole-map persistence lacks concurrency protection; unreadable state can be replaced; new practice drafts are not runtime-validated. | Ordinary retries preserve evidence, but the complete storage workflow can still lose it. External capture or targeted guards are prerequisites when history is used as study evidence. | **Partially resolved** |

## Verification detail and interpretation

The current ID attachment still follows the canonical source arrays. Within this release, IDs and legacy labels are coherent and permutation tests pass. Future code edits must not move a meaning without preserving its semantic ID. Version-2 history renders current wording by ID, whereas legacy history uses a frozen label catalog; if exact historical wording matters after future item edits, snapshot/version the wording as well. That is a future compatibility risk, not a currently reproduced mislabeling.

Assistance is recorded at a conservative same-case level: earlier module attempts or solution consultation can affect later stage labels. `initial_unaided` means no recorded in-app assistance, not verified absence of outside help. A first transfer attempt after primary feedback is not a pristine independent assessment. The UI/export note makes that scope explicit.

M6's structured choices are not shuffled by AQ01. First-position structured completion with `x` text is therefore still possible. This is a residual weakness of the practice instrument, and an intentional reason to require separate memo scoring. It is not evidence that AQ02's new pending status is broken.

Automatically recycling a consumed M6 note without matching the latest prior attempt ID was rejected. Explicitly typing or rebinding identical text was accepted, consistent with presence-only validation. Do not turn a minimum length or keyword rule into a substitute for human reasoning assessment.

## Confirmed reproduction records

| Probe | Procedure | Observed result | Evidence type |
|---|---|---|---|
| AUD-P01 | Instantiate actual primary/transfer questions with fresh deterministic seed; submit first IDs and correct numeric input | Universal first-position policy does not pass all M1–M5 primaries | EXEC, pure TypeScript |
| AUD-P02 | Submit authored placeholder M6 memos, feasible plan, first choices and valid date; repeat revision and transfer | All three structured stages pass; exported review remains pending | EXEC, real state functions |
| AUD-P03 | Fail M6, submit one note, fail again, submit without rebinding note; then explicitly re-enter | Old binding blocked; newly recorded identical wording accepted; first attempt unchanged | EXEC, real state functions |
| AUD-P04 | Fail M1 twice, create another edited draft without a fresh note | Retry disabled; old note not automatically reused; first snapshot unchanged | COMPONENT |
| AUD-P05 | Open two independent app instances sharing storage; A records M1 first attempt; stale B writes M2 | Persistent M1 history disappears; only M2 remains | COMPONENT, two-instance model; real browser follow-up NOT RUN |
| AUD-P06 | Inject one invalid M6 draft into otherwise valid six-module authored legacy state; edit after recovery warning | Loader returns empty map; next edit replaces store with M1 only | COMPONENT, deliberate corruption injection |
| AUD-P07 | Inject malformed optional M1 presentation order | No load warning; Exercise renderer throws | COMPONENT, deliberate corruption injection |

Probe scripts and records are outside the audited snapshot. None is a real learner case.

## Closure criteria

| Item | Required evidence before declaring closure for evaluation use |
|---|---|
| AQ01 retained | Same-semantic-ID grading after order changes; no historical index regrading; stable order across an edited attempt/reload. Do not require randomization of client-side exam secrets. |
| AQ02 retained | Reviewer receives actual original/revised memos, sources and constraints without app score/feedback first; completed signed ratings remain separate from app practice status. Weak/contradictory authored anchors must fail independent criteria. |
| AQ03 remaining | Versioned moderator errata, item novelty classification, reviewed scoring alternatives, exposure adjudication and human timing/readability evidence. Final independent eligibility must consider hints, tools, contamination and protocol deviations. |
| AQ04 remaining | A stale writer cannot replace newer evidence silently; malformed optional state does not discard valid records or trigger destructive autosave. Alternatively, a documented single-writer/external-recording procedure must demonstrably preserve first attempts under the chosen pilot constraints. |

The 231-test result supports the implemented mechanical protections. It does not close the remaining form, reviewer, persistence or learning-validity questions. The independently blocked browser run must be completed on the actual study environment.

# AQ05–AQ11 prioritized backlog

POST-EQ-1.0. This audit proposes small fixes and administration safeguards; it did not change the repository. “Blocker” below concerns trustworthy learner-evaluation evidence, not whether the app can be used for guided learning.

## Priority and disposition

| Order | Issue | Current status | Severity/educational impact | Before evaluation? |
|---|---|---|---|---|
| 1 | AQ08 backup/recovery and AQ04 evidence preservation | Export exists; import absent. New executed probes confirm stale-write loss, destructive recovery after a fault and unchecked practice-draft shape | **P1 evidence blocker** when local history is the study record. More concrete than the previous generic recovery risk | Close with narrowly tested guards, or demonstrate and document a single-writer external-evidence procedure before baseline |
| 2 | AQ09 reproducible audit packaging | Full source/lockfile/specs/data now supplied; original preservation script still uses unavailable absolute macOS paths; browser config requires Chrome | **P1 environment/preflight dependency** for the actual evaluation; package completeness improved substantially | Pin release hash and reproduce required browser/backup workflows on the study machine. Portable verifier cleanup itself can follow if bounded evidence is otherwise available |
| 3 | AQ07 accessibility | Native semantic controls, labels and keyboard tests are present in code; no independent AT/zoom/layout execution here | P2 general improvement; **P1 for a participant's required access path** | Rehearse the actual participant/device/input path. Screen-reader-dependent enrollment requires that path to work; universal WCAG certification is not a prerequisite for a tightly scoped pilot |
| 4 | AQ06 cognitive load/positive causal reasoning | Long M5/M6 workflows persist; M5's randomized-design text does permit a scoped assignment estimate. Positive cases exist in independent forms; post-treatment reasoning is not explicitly taught in M4 | P2 learning-design uncertainty; **P1 instrument/timing preflight** | Review prerequisite coverage, mark stretch items, freeze scoring alternatives and run actual timing/readability checks. No general instructional rewrite required |
| 5 | AQ05 M2/M3 provenance bridge | Fork remains accurately disclosed in dictionary and metadata; no explicit learner comparison task | P2 risk of comparing different datasets as if only the metric changed | A short moderator check of dataset identity is sufficient for pilot. A new interaction is optional |
| 6 | AQ11 mobile navigation/matrix load | CSS retains top navigation and horizontal comparison layout; supplied screenshots show these states. Current real-device friction unmeasured | P2 if mobile is included; P3 for a desktop-only first evaluation | Dry-run actual viewport. Desktop-only scope is acceptable if declared; do not generalize to mobile usability |
| 7 | AQ10 rubric heading | `docs/MODULE_6_INSTRUCTOR.md:5–7` still says “Three” while listing four systems | P3 wording defect, with a small risk of score confusion | Use a clear four-system legend in moderator instructions; correct the heading in a later documentation patch |

## AQ08 — precise preservation work

Locations: `src/App.tsx:14–17`, `src/lib/storage.ts:9–21`, `src/Exercise.tsx:9–27`. Evidence: AUD-P05–P07; source/export tests; no actual participant incident.

Expected behavior: a new valid first response must survive an unrelated stale-session save. An invalid draft or one malformed module must not silently erase valid modules or be accepted and crash the exercise. A warning must not invite an autosave that replaces the only recoverable raw record.

Suggested small changes:

- Add a persisted revision/single-writer conflict check, or merge attempts by stable identity while protecting append-only history. Prefer rejecting a stale write with instructions over silently resolving conflicts by last-writer-wins.
- Validate optional `practiceDrafts` and presentation IDs/orders. Preserve all valid attempts when discarding a malformed unsent draft.
- Quarantine the unreadable raw store and block replacement autosave until recovery/export has been acknowledged. Export the raw source separately from the new in-memory session; exporting an empty recovered map is not recovery.
- Keep current version1 legacy records readable and their original scores/labels unchanged. Do not implement a broad migration or cloud backend merely to solve this issue.

Acceptance: reproduce the two-instance sequence and show both histories remain or a visible conflict blocks overwrite; inject an invalid M6 field and invalid M1 draft and retain the other five modules and first attempts; failed-storage/cancel/reset paths remain correctly scoped. Test a real two-tab browser case on the study machine. If using an external-only evidence workaround, rehearse first-response capture, restoration of its archive and stop-on-warning behavior before approving it.

Dependencies: stable attempt IDs, preserved source exports, a defined final study-record owner. A general import UI is **optional** for this pilot if external archives can be read/scored independently; reliable preservation is not optional.

## AQ09 — portable release evidence

Locations: `scripts/verify_preservation.py:12–17`, `scripts/verify_remediation_preservation.py`, `playwright.config.cjs`, `package-lock.json`. The supplied baseline has 100 hash entries; 68 match current files, 32 differ. That comparison does not authenticate an external historical archive and is not itself evidence of corruption: remediation is expected to change scoped source/tests. The separately checked incoming402-file inventory remained unchanged throughout this audit.

Acceptance: record archive/release hash, runtime/browser versions and exact commands; accept an original-materials path as a verifier argument rather than requiring the developer's home directory; report unavailable external originals as unverified. Preserve the 10 current data-manifest hashes and the lockfile. Complete the 54 discovered browser tests or document each scoped exception on the evaluation environment. Never synthesize “original” files solely to make a preservation gate pass.

A Git history is useful but not necessary to begin a limited pilot with a pinned immutable release archive. Requiring a repository rewrite or a deployment system is unnecessary.

## AQ07 — participant-path accessibility

Locations: `src/Exercise.tsx:24–45`, `src/DecisionForm.tsx:11–20`, `src/App.tsx:18–25`, explorer table/chart semantics and `src/styles.css`.

Acceptance on the actual study setup: all essential fields/actions reachable by keyboard; visible focus; meaningful labels/fieldset grouping; changed errors and feedback announced where required; table headers/text alternatives usable; zoom/reflow preserves task access. Verify no keyboard trap in scrollable regions and that selecting an answer does not lose the task context. Record assistive tools/accommodations consistently across phases. A failed essential path for the enrolled learner blocks that evaluation until fixed or an equivalent accessible administration is agreed.

Do not report comprehensive WCAG compliance from unit tests or the supplied screenshot set.

## AQ06 — cognitive and construct demands

Locations: `src/data/causalContent.ts:14`, `src/DecisionForm.tsx:11–20`, `src/DecisionRoom.tsx`, form blueprint in the validation report.

Acceptance: a readability/timing preflight records where learners need an explanation; prior prerequisites and stretch tasks are explicit; correct conditional randomized-effect reasoning is accepted; generic “cannot conclude” does not earn full decision credit. M6 revision is included in the time budget. Do not label task non-completion under an unvalidated time cap as a conceptual failure.

Optional after pilot: progressive disclosure, shorter first-pass memo, more discriminating competing explanations and a later positive investment case. These are not blockers for a feasibility study with the interpretation limits frozen first.

## AQ05 — provenance bridge

Locations: `src/RetentionExplorer.tsx:24–26`, `src/data/events.json`, `src/data/retention-events.json`, `docs/MODULE_3_DATA.md:5–11`.

The original event fixture produces a different D7 numerator from the declared fork. The independent retention oracle reproduced the declared one-event change and correct distinct-user consequences. No synthetic fixture is represented as market evidence.

Acceptance: the learner can identify which dataset a result uses, name the changed event identity and explain why a correct result from the original fixture need not match the fork. Preserve bytes and hashes; never change the original dataset to force agreement. A moderator's brief identity check can supply this pilot safeguard without a new UI component.

## AQ11 — navigation and comparison load

Locations: responsive sidebar/navigation CSS, `src/App.tsx:18–19`, M6 matrix in `src/DecisionRoom.tsx`.

Acceptance if mobile is studied: the learner can locate the active module, compare at least two options and read the relevant role-cost rows without losing context. Record scrolling/navigation errors and moderator help. After evidence, consider collapsing navigation or a smaller comparison shortlist. A visual redesign before collecting any friction evidence is not required.

## AQ10 — rubric naming

Acceptance: documentation distinguishes app structured 10, the plan operating 8, Volume I synthesis 10 and Volume II final 20, with their different purposes and criteria. Do not convert scores between systems or modify source rubrics just to make the heading count convenient. The new independent-task rubric is another explicit instrument, not a replacement for any original scale.

## Work explicitly outside this backlog

No advanced AI PM topic expansion, additional module, secure exam backend, AI memo grader, authenticated reviewer platform, calendar operation or curriculum rewrite is needed. Independent human review, instrument preflight and dependable capture address the present risk more directly.

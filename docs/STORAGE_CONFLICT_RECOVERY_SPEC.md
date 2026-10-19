# Storage conflict and recovery contract

Scope: PR01–PR03. Local-first, same-origin storage; no backend, merge engine, authenticated reviewer, new learning module or assessment rewrite. Stable answer IDs, score keys, original attempt meanings, memo text and source datasets are unchanged.

## Persisted format and write ownership

The key remains `ai-pm-lab:v1`; envelope `version:1` and `modules` retain their meanings. New writes add an opaque UUID `revision`. Legacy envelopes without revision remain readable. The controller retains the exact raw string read at session start or its own last successful write. A UUID plus raw comparison detects changed, legacy, malformed, externally replaced and removed records without guessing chronological order.

Every application save, per-module reset, global reset and acknowledged recovery runs under the same origin-wide exclusive Web Lock, `ai-pm-lab:evidence-write`. Only inside that lock does it compare the latest raw record to the session's expected raw record and then write. Requests from one controller serialize and advance its expected raw only after success. Another session is rejected on mismatch; no latest-map reread silently authorizes writing an older map. Storage events show an early warning but are not the write-safety mechanism. A disposed controller cannot commit queued work after explicit reload/unmount.

Without an available Web Lock, fail closed: retain in-memory edits, show saving paused and export instructions, never fall back to an unlocked overwrite. Synchronous guarded primitives in storageControl.ts are internal building blocks called under this lock by App; their tests supply explicit expected raw values. All supported app writes use the controller. Old deployed clients, manual localStorage edits, browser deletion and software bypassing the protocol cannot be made cooperative by a local app: close old release tabs before study use.

## State and user actions

| State | Persisted behavior | Learner/operator action |
|---|---|---|
| Ready | Next write checks revision under lock | Continue in one tab/profile |
| Saving | Queued write not yet confirmed | Wait for “Saved on this device”; reload/leave prompts if work is pending |
| Conflict | Reject every unsafe replacement; preserve newer raw and current session draft | Export this session's unsaved work; close extra writers; explicitly reload latest saved work (discards only local unsaved edits) |
| Recovery | Isolated valid preview, original raw unchanged; ordinary autosave/reset blocked | Export raw recovery; review reported paths; explicitly acknowledge adoption only after preserving an external copy |
| I/O unavailable | No successful write is claimed; keep session data | Export session work and investigate storage; do not infer data loss or success |
| Lock unavailable | No unlocked fallback | Use verified Chrome/localhost; export session work |

Editing while blocked is session-only and does not overwrite stored evidence. Export carries storage status/pending-write count so an unsaved snapshot is not silently described as saved. Before unload, pending or unsaved changes trigger the browser's standard warning. The operator must not accept leaving before saving/exporting. A committed reset clears UI only after storage succeeds; global reset removes the active lab key and preserves unrelated storage and explicit recovery backups. No automatic reset occurs during conflicts/corruption.

## Recovery boundary

`loadProgress()` validates the envelope and each module independently. An invalid module is isolated; valid independent module histories stay in the preview. The exact raw string and issue paths remain in memory and at the original storage key. Ordinary writes, including reset, cannot replace a malformed record even when a caller knows its raw string.

An invalid M1–5 unsent practice draft is quarantined independently of submitted attempts and the other valid draft. An invalid M6 unsent draft is repaired only for preview: use its valid frozen stage draft if present, otherwise a blank unsent draft. The candidate must pass existing decision-state validation before display. Frozen memos, attempt scores and chronology remain unchanged. If decision state/submitted evidence cannot be safely read, keep its exact source in raw recovery and identify the isolated path; do not adopt without moderator review. There is no guessed reconstruction or regrading.

Raw recovery download (`ai-pm-raw-recovery.json`) includes exact `raw`, a readable parsed copy where parsing is possible, issue paths, valid preview, source key and capture time. Malformed JSON still exports its exact string. A session-work export is separate and may include new unsaved edits; keep both when needed.

Adoption requires the UI's raw-export action AND explicit acknowledgement. Under the same Web Lock it checks that the source raw has not changed, writes an exact separate backup at `ai-pm-lab:recovery:<uuid>`, then writes the acknowledged valid preview/session edits with a new revision. If backup fails, no replacement occurs. If the main write fails after backup, original key still remains unchanged. A newer stored record rejects adoption as a conflict. Recovery backups are intentionally retained by ordinary reset; they are not cloud backups. There is no import/automatic restore UI. Read external recovery JSON with a moderator; its raw field is authoritative.

## Practice-draft runtime schema

`practiceDrafts` is an optional object containing only recognized primary/transfer drafts for M1–5. Each draft requires nonblank string `id`, string `input`, string `reasoningChange`, an answer array and order array. Each presentation group must exist exactly once at its defined group index, contain every current stable option ID for that question/group exactly once, and contain no duplicates, missing, foreign or unknown IDs. Order group count is exact. A selected value must belong to its own group. Answer arrays may be incomplete; null, blank or absent slots represent unanswered responses from legitimate legacy partial drafts, never a chosen answer. Numeric/object selected values, excess groups and incompatible field types are rejected without coercion.

Group identity is established by the stable group-specific ID set and index, not displayed position. Loader validation trusts no TypeScript assertion. Quarantine is disclosed, blocks autosave until acknowledgement and never by itself discards a valid submitted first attempt. Submitted histories are not regraded to decide recovery.

## Acceptance mapping and limits

AUD-P05: component and actual two Chrome tabs preserve A's first M1 record after B's stale M2 edit; B gets a conflict and can export/reload explicitly. Competing same-revision tabs under Web Locks produce one successful writer and one conflict; earlier histories remain equal.

AUD-P06: one invalid M6 draft leaves six modules' valid histories available; an M1 edit cannot replace raw storage; raw export is exact; explicit recovery preserves an external-readable source plus separate local backup and unchanged frozen memos.

AUD-P07: invalid/empty option order causes a warning/quarantine, no rendering crash, no first-attempt deletion. Tests cover wrong groups, duplicate/missing IDs, invalid selections/types and valid partial unanswered slots. Original AQ01–AQ04 tests, resets, exports and all six module regressions remain.

This contract protects cooperating current-release app writers. It is not tamper-proof, a browser-disk durability guarantee, or proof of independent learner performance. A browser/process crash can lose unsaved in-memory work; a navigation prompt cannot prevent deliberate disregard or OS termination. External evidence capture and human release gates remain necessary for evaluation.

# Moderator technical preflight — unsigned handoff

**Overall evaluation remains CONDITIONAL.** Technical tests do not sign off form validity, human timing, scoring calibration or learner eligibility. Keep this guide and the detailed audits moderator-only; deliver one assigned learner directory, not the repository or entire audit pack.

## Pinned technical release and environment

Release: `ai-pm-lab-evidence-20261020-b1eb2391cc57`.

Production artifact: `docs/verification/evidence-preservation/ai-pm-lab-evidence-release.zip`.

SHA256: `9921563634cfb0ad2378fad30e96ff3b43342afce7b8cf81759de70938a90a23`.

Sorted production-file manifest SHA256: `b1eb2391cc57c51b9d1a404dc704a936173a341be1b8ffeb796e4afcafdbd5a4`. File hashes and environment are recorded in `verification/evidence-preservation/release-identity.json`. No Git revision is available; archive/source inventories provide identity, not a trusted digital signature.

Verified actual machine: macOS15.8.1 (24H32), Intel/Darwin x86_64; Node20.5.0, npm9.8.0, Python3.11.2; installed Google Chrome155.0.8059.80. Playwright used real headless Chrome on this Mac, including two simultaneous pages and desktop1280×720/mobile390×664 emulation. This is not physical iPhone/Safari, a screen-reader audit, or proof of support for other runtimes. No browser downloads/install scripts/dependency changes were needed. Web Locks and working localStorage are required for saving; missing locks fail closed.

Serve the verified build at one fixed origin using the repository's installed runtime: `npm run preview -- --host 127.0.0.1 --port 4173 --strictPort`. Verify the printed URL exactly. A different port, hostname, profile or private-browsing context has different localStorage; apparent empty work may be another origin, not lost evidence. Close older app releases and other editing tabs before study use. Prefer one Chrome profile/tab plus an external moderator archive even though conflict rejection is tested.

## Export, conflict and recovery operation

Wait for **Saved on this device** before navigating, resetting or capturing the saved-state record. **Saving changes…** means a queued write is not confirmed. The browser warns before leaving with unsaved/queued work; cancel leaving and wait/export. No local app guarantees recovery after ignoring a warning, OS termination, browser data deletion or manual localStorage editing.

After each first submitted practice response, save **Export my work** externally before retries. Preserve subsequent versions with distinct timestamps/task labels. The journal includes attempts, IDs/readable labels, assistance, memo snapshots, definitions and storage status; do not overwrite the original exported file with a nicer retry. Pending/blocked session exports may include unsaved edits. Independent memo-review packets are complete archives, not automatically blind scoring views: redact structured points/pass flags, selected statements, explanatory feedback, timepoint and assistance labels for reviewers' first scoring pass; retain a full archival copy.

On **Storage conflict**, stop study editing. The newer stored record was not replaced. Export this session's unsaved work, capture the warning, close extra writers and choose **Reload latest saved work (discard unsaved edits)** only after preserving what is needed. The app does not automatically merge or pick last-writer-wins. Record the incident and compare exports before continuing.

On **Autosave is paused** / recovery, stop and export **raw recovery record**. It contains exact raw text plus a readable parsed copy, issue paths and a valid preview. Preserve it outside the browser, separately from the session journal. Review the isolated paths. A bad optional draft can be removed from preview without removing submitted evidence; bad M6 drafts use a valid frozen draft or a blank unsent draft for preview. If submitted evidence itself is unreadable, do not guess/regrade it: retain the raw record and escalate for manual review.

Only after review, check the acknowledgement and choose **Use recovered valid work**. The application checks the source revision again and writes a separate exact raw backup before adopting the preview/session edits. Quota/backup failure or a newer revision blocks replacement. Recovery backups (`ai-pm-lab:recovery:<uuid>`) intentionally survive ordinary global reset; retain external files as the study archive. No automatic import/restore UI exists. Never replace the lab key with an empty map as a recovery shortcut. If a storage/lock warning persists, stop the evidence-dependent activity.

Per-activity reset removes only that module; global reset removes only active lab progress, preserving unrelated storage and raw recovery backups. During a study round, avoid reset; archive exports first and record any intentional reset. These powers are not secure examination controls.

## One-form delivery and final independence

Use `python3 scripts/assessment_session.py create --form A --timepoint baseline --participant L01 --seen-form no --seen-answers no --output /private/tmp/L01-baseline`. Choose only the assigned reviewed A/B/C or a separately prepared reserve version. Other allowed timepoints: `immediate_post`, `delayed`. Deliver **only** the generated learner directory. Keep session.json, keys, worksheet and change card moderator-only. Available forms/keys and original contents remain unchanged; no form rewrite or automatic approval was performed in this pass.

Record actual start/end, breaks, incomplete/missing reason, prior form/key exposure, hints, tools, interruptions, outside study, protocol deviations and all calculation/memo artifact paths. The existing creation-time `independent_unseen_eligible` flag is only a preflight value: it does not update after hints/tools are logged and is NOT the final independence decision. At handoff, a human moderator must adjudicate current exposure/help/tool records, sign/date that decision and retain contamination rather than silently excluding it. A person already exposed to detailed forms/keys needs a fresh reviewed reserve form or an explicitly exposed/near-transfer interpretation.

Collect responses.md, calculations.csv and any spreadsheet used. Save original memo-v1.md before release: `python3 scripts/assessment_session.py lock-initial --session /private/tmp/L01-baseline`. It archives/hash-pins the original separately and releases only that form's card. Revisions remain in memo-revision.md; never overwrite the original. Duplicate session/lock is refused. Software tests rehearse this with authored dummy records; the operator's own delivery/archive rehearsal and signature remain pending.

## Operator checklist — fill with real observations

All boxes below are **unchecked / pending operator sign-off**, even where automated evidence exists. Use a pilot profile and dummy record; never inject faults into the learner's live storage.

- [ ] Verify artifact SHA256 and release ID; record Chrome/runtime versions and exact origin/profile.
- [ ] Open one module, type a dummy note, wait for Saved, export, reload and confirm exact note/ID history.
- [ ] Rehearse first-response capture and separate retry exports; check assistance and pending memo-review labeling.
- [ ] Rehearse a stale second tab with dummy data; confirm visible conflict and preservation; export then reload, close second tab.
- [ ] Rehearse raw recovery using a separate disposable profile; verify exact raw export, acknowledgement, backup and valid-history preservation.
- [ ] Verify resets only in the dummy profile; confirm other modules/unrelated storage and raw backups behave as specified.
- [ ] Rehearse one-form delivery without other forms/keys; lock/externally archive original memo before change card.
- [ ] Confirm the learner's actual keyboard/viewport/access requirements. Screen-reader-dependent use needs a real assistive-technology check before enrollment.
- [ ] Confirm external archive location/ownership, readable files, timestamps and final session/exposure adjudication fields.

Operator name/role: ____ Date/time/timezone: ____ Release/hash/origin: ____
Observed incidents/deviations: ____ Signed readiness decision: **PENDING** ____

## Human-dependent gates — not completed by automation

| Gate | Pending evidence required |
|---|---|
| Form wording/scoring freeze | Two reviewers approve a versioned addendum and accepted alternatives for M2B/M3B/M5C and valid event paths; preserve original forms/keys until reviewed change authorization |
| Novelty / prerequisite classification | Decide M3C taught-tuple near-transfer/replacement policy; classify M4B post-treatment reasoning and other specialist/stretch demands appropriately; do not treat A/B/C as equated growth scales |
| Independent dry runs | Two reviewers independently solve the actual frozen forms and log ambiguities |
| Timing / readability | Record real reading/calculation/explanation/memo/revision times and reserve-task learner readability; choose/freeze cap/deviation rules afterward (45 or75 minutes is not validated by arithmetic) |
| Calibration | Independently score authored anchors; preserve both vectors/quotations/critical flags before adjudication; document unresolved disagreements, no fabricated reliability statistics |
| Learner eligibility | Check actual prior exposure and permitted access path; record final hints/tools/exposure adjudication, not just creation-time eligibility |
| Administration rehearsal | Operator performs and signs one-form delivery, private-key control and original-memo external archive rehearsal |

The original42-day curriculum remains unchanged. This evaluation supplements it; no calendar events are modified. Guided practice/dry runs can continue. Baseline collection requires these human and operator gates; passing275/66 software tests alone is not an overall GO, measured mastery, form validity or educational effectiveness.

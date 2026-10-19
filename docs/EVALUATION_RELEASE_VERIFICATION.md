# Evaluation release verification — technical gates only

PR01–PR03 technical acceptance passes on the actual Mac. **Overall learner evaluation remains CONDITIONAL**: human form decisions, timing, calibration, eligibility and operator-signed rehearsal are pending. No human scores, learner outcomes or elapsed task-performance measurements were invented.

Release `ai-pm-lab-evidence-20261020-b1eb2391cc57`, production artifact `verification/evidence-preservation/ai-pm-lab-evidence-release.zip`, SHA256 `9921563634cfb0ad2378fad30e96ff3b43342afce7b8cf81759de70938a90a23`. Production-file manifest SHA256 `b1eb2391cc57c51b9d1a404dc704a936173a341be1b8ffeb796e4afcafdbd5a4`; see release-identity.json. No Git metadata exists; baseline/release file inventories identify source separately.

Actual runtime: macOS15.8.1 (24H32), Darwin x86_64, Node20.5.0, npm9.8.0, Python3.11.2, installed Google Chrome155.0.8059.80. Browser assertions ran in real headless installed Chrome on this study machine; mobile is iPhone13 Chromium emulation, not physical Safari. No dependencies, installation scripts or browser downloads were required.

## Commands and observed results

Logs below are under `verification/evidence-preservation/`; baseline logs/fixtures are under `verification/evidence-preservation-baseline/`.

| Exact command | Observed result | Evidence |
|---|---|---|
| `npm test` before changes |231/231 passed,16 files | baseline/unit.log |
| `npm run test:e2e` before changes |54/54 passed | baseline/e2e.log |
| `./node_modules/.bin/vitest run --config docs/verification/evidence-preservation-baseline/probe.config.mjs` before changes |7 auditor assertions passed, including deliberately asserted P05–P07 defects | baseline/probes.log and before/after fixtures |
| `npm test` after fixes |**275/275 passed,18 files**;231 original +37 new storage/schema tests +7 adapted auditor release probes | unit.log, auditor_component_probes.json |
| `./node_modules/.bin/tsc --noEmit --strict` |**PASS**, zero diagnostics | typescript.log |
| `npm run build` |**PASS**,1619 modules, JS351.96kB/gzip106.55kB; CSS25.97kB/gzip6.54kB | build.log |
| `npm run test:e2e` after fixes |**66/66 passed**, all54 original +12 desktop/mobile cases | e2e-second.log |
| `python3 scripts/verify_data.py` |PASS | oracles.log |
| `python3 scripts/verify_funnel.py` |PASS8→6→4,66.6667%,50%, ordered/deduplicated/mature contract | oracles.log |
| `python3 scripts/verify_retention.py` |PASS50%/25%/unavailable/37.5%; original declared fork | oracles.log |
| `python3 scripts/verify_simpson.py` |PASS74%/36%, within+10pp/pooled−38pp, illustrative50%/60% | oracles.log |
| `python3 scripts/verify_causal.py` |PASS source weekly counts, sessions+43.75%, coverage−27pp, missing45 | oracles.log |
| `python3 scripts/verify_decision.py` |PASS original scenario/resource/243-point-combination checks | oracles.log |
| `python3 materials/AI_PM_Audit_Upgrade_I_II/instructor/verify_learning.py` |PASS instructor synthetic arithmetic | oracles.log |
| `python3 scripts/verify_assessment_workflow.py` |PASS43 authored workflow checks | oracles.log |
| `python3 docs/educational-audit/support/verify_transfer_keys.py --output docs/verification/evidence-preservation/transfer-key-checks.json` |PASS47 supplied arithmetic checks, not human form validation | oracles.log / transfer-key-checks.json |
| `python3 scripts/verify_preservation.py --original-materials /Users/dangnguyen/Desktop/PM` |PASS10 dataset hashes,74 original curriculum ZIP entries, separate original plan bytes,42 dates, pinned dependencies | oracles.log |
| `python3 scripts/verify_evidence_preservation.py` |PASS128 protected-input hashes, all40 supplied post-audit entries and explicit missing-original behavior | protected-inputs.log |
| `python3 scripts/verify_preservation.py` without inputs |Expected exit2, external originals explicitly UNVERIFIED; no fabricated fallback | portable-no-originals.log |
| `python3 scripts/verify_remediation_preservation.py` |Internal specs/dependencies/extracted-manifest/build-content checks PASS; overall exit2 because original older educational-audit ZIP is missing | remediation-preservation.log |
| `npm run dev -- --host 127.0.0.1 --port 4174` then `python3 scripts/check_private_release_urls.py --base-url http://127.0.0.1:4174` |5 private URLs403, no content exposure | dev-server.log / private-development-http.log |
| `npm run preview -- --host 127.0.0.1 --port 4175` then `python3 scripts/check_private_release_urls.py --base-url http://127.0.0.1:4175` |5 private URLs SPA-fallback200; response content contains no private files | preview-server.log / private-preview-http.log |

Baseline path shorthand above refers to `verification/evidence-preservation-baseline/`. All probes use authored inputs and isolated test contexts; no user's live localStorage was modified. Browser inventory or HTTP requests are not substituted for real browser assertions.

## Required defect outcomes

AUD-P05: A and B begin at one revision; A saves M1 first attempt; B's stale M2 edit is visibly rejected, raw store and A's snapshot remain exact. B exports unsaved work and explicitly reloads before a fresh M2 save. Both component and two real Chrome-page tests pass. A separate simultaneous-writer case demonstrates exclusive locking, one success/one conflict and intact earlier histories.

AUD-P06: one invalid M6 unsent draft no longer empties the map. Valid five independent histories and valid frozen M6 memo/history survive in preview. M1 edits cannot replace raw while unresolved. Raw export, acknowledgement, byte-exact separate backup, revised preview persistence and reload pass. Quota or newer-source conditions block unsafe replacement.

AUD-P07: malformed/empty optional order is quarantined with explicit issue paths and no render crash. Submitted first attempts remain available and exportable. Strict option/group/selection/type edge cases pass. Null/blank/unanswered partial slots remain valid without selecting an answer.

AQ01 stable IDs and frozen legacy labels, AQ02 pending independent review, AQ03 private one-form/key separation and AQ04 assistance/first-attempt chronology retain their original assertions. Per-module/global resets and complete readable exports pass. Async writes expose Saving/Saved states; leaving with queued/unsaved work prompts, verified using a deliberately held real browser lock.

## Failures retained; not hidden by final totals

Five fixture-call import failures in unit-first/second, one duplicate-ID component-selector failure in unit-third, and59-pass/5-fail first browser run are retained. Reset checks now wait for completion without relaxing isolation assertions. Browser testing exposed the pending-reload gap and an actual navigation warning plus held-lock regression was added. See PR01_PR03_FIX_REPORT.md for exact failure analysis. Final unit/browser runs are fully passing.

The initial combined oracle run stopped at the missing old audit ZIP; its failure transcript is retained in oracles-initial-missing-archive.log. The portable checker now distinguishes external unverified from internal pass. The exact absent original is `/Users/dangnguyen/Desktop/AI PM Learning Kit/docs/AI_PM_EDUCATIONAL_AUDIT_20261019.zip`; Downloads copy is also unavailable. No archive replacement was created and original expected hashes are unchanged. Available extracted originals match supplied artifact manifests and baseline hashes. This limitation does not invalidate the independently verified curriculum/plan inputs or passing PR01–PR03 application gates.

## Visual review and release restrictions

Inspected desktop/mobile conflict, raw recovery, invalid-order quarantine and viewport screenshots. Warning text wraps, controls/readable paths are visible, acknowledgement remains disabled until prerequisites, and no page-wide overflow was observed. All original module screens are recaptured by the full browser suite. Native keyboard/radio behavior retains coverage. No physical-device, Safari or comprehensive assistive-technology certification is claimed.

See MODERATOR_TECHNICAL_PREFLIGHT.md for operator export/recovery/conflict workflow and unsigned checklist. Human gates remain pending: frozen alternatives/wording, M3C taught-example handling, advanced/stretch classification, independent reviewer solution dry runs, actual timing/readability, calibration, prior exposure and final session independence, and operator one-form/original-memo archive rehearsal. No assessment form/key was rewritten; nonequated forms must not be treated as a validated growth scale. Stop at this scope, without declaring overall evaluation GO or measured educational effectiveness.

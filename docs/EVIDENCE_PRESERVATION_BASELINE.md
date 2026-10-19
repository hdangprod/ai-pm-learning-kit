# Evidence preservation baseline — 2026-10-20

Workspace: `/Users/dangnguyen/Desktop/AI PM Learning Kit`. No Git repository is available (`verification/evidence-preservation-baseline/revision.txt`); the pre-change SHA256 inventory pins source, tests, scripts, original materials, datasets, specifications and documentation. No application change preceded baseline execution. No live user localStorage was accessed: all progress records are authored fixtures in jsdom or isolated Playwright browser contexts.

Supplied archive `docs/POST_REMEDIATION_AUDIT_PACK_20261019.zip`, SHA256 `ff5496f4f1f48c3d29b5f0d7cf9ff026168c8dba86e0abf5074e12cb810965f8`, extracted byte-identically into `docs/post-remediation-audit/`; original retained. Reports and probe artifacts were inspected. Audit recommendations remain source evidence, not authorization to run a learner study or mark human gates complete.

| Before application changes | Observed result |
|---|---|
| `npm test` |231 passed /16 files,84.64s |
| `npm run test:e2e` |54 passed, desktop and mobile emulation, installed Chrome |
| `./node_modules/.bin/vitest run --config docs/verification/evidence-preservation-baseline/probe.config.mjs` |7 probe assertions passed; P05–P07 deliberately assert defects, NOT technical acceptance passes |
| Runtime |Node20.5.0, npm9.8.0; installed Google Chrome155.0.8059.80, macOS |

All logs reside in `verification/evidence-preservation-baseline/`. Auditor-only paths/imports/output destinations were adapted in a separate probe copy, not in the originals. P01 IDs/order, P02 pending memo review, P03 M6 fresh-note binding and P04 first-attempt retry protections reproduced as expected. P05 lost M1 after stale M2 save. P06 returned an empty map after one malformed M6 draft, then overwrote valid histories on M1 edit. P07 accepted malformed presentation order and threw during rendering. Faults were deliberately injected; no spontaneous user incident was observed.

Preserved evidence: `auditor_component_probes.json`; P05/P06 before/after JSON; P07 malformed raw fixture; complete probe source/log. `progress-v1.json` preserves the original six-module fixture with notes, incomplete attempts, consulted solutions and M6 memos. `progress-v2.json` adds actual new-schema semantic-ID attempts, assistance and draft order from the unchanged component probe. Both retain top-level version1; “v2” refers to assessmentVersion2 evidence, not a new envelope version. These are software fixtures, not participant results.

The existing preservation verifier contains external absolute paths for the original curriculum ZIP and separate study plan. The current task will make those inputs explicit while preserving original expected hashes and materials. Missing originals must report UNVERIFIED, never pass using fabricated inputs.

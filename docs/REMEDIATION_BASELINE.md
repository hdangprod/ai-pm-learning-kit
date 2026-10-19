# Remediation baseline — 2026-10-19

No Git metadata is available in this workspace. `verification/remediation-baseline/repository-sha256.json` pins the pre-change source; `PROGRESS-before-remediation.md` preserves its reported history. Dependencies and lockfile were inspected and retained. No installation, lifecycle script or browser download was required.

Before application changes: `npm test` **215 passed / 15 files**; `./node_modules/.bin/tsc --noEmit --strict` **passed**; `npm run build` **passed**; `npm run test:e2e` **46 passed** (desktop Chrome and mobile Chromium emulation). Logs are in `verification/remediation-baseline/`. All six `python3 scripts/verify_{data,funnel,retention,simpson,causal,decision}.py` checks, `python3 materials/AI_PM_Audit_Upgrade_I_II/instructor/verify_learning.py` and `python3 scripts/verify_preservation.py` passed.

The separate unchanged-runtime probe command was `npm run test:e2e -- --config docs/verification/remediation-baseline/probe.config.cjs`: **1 passed**. Its authored test records are not participant data. `progress-v1.json` and `export-v1.json` preserve incomplete attempts, notes, consulted explanations, failed and successful decisions, original and revised memos. `runtime-findings.json` records the findings; `memo-gap-desktop.png` captures the contradictory memo with structured 10/10.

| Finding | Baseline classification | Evidence |
|---|---|---|
| AQ01 | Reproduced | First radio in all 20 M1–M5 groups completes all five modules; source `assessment.ts` grades array indices. |
| AQ02 | Reproduced | Contradictory causal/market-validation memo earns structured 10/10. Existing text accurately discloses presence-only checks, but no distinct pending review workflow exists. |
| AQ03 | Source-confirmed | Existing transfer questions reuse original datasets/case; no independent form assignment or exposure record exists. Independent transfer failure itself has not been measured. |
| AQ04 | Reproduced | Complete incorrect attempt plus one-character reflection permits reveal (allowed learning behavior); later correct responses complete practice without reasoning-change record or per-attempt assistance metadata. Attempts already append rather than overwrite. |

Audit provenance: `materials/educational-audit-20261019/`, extracted from the supplied Downloads ZIP, SHA256 `6043e555ce111e6d8e795115da1c936361231e94db00a7b50e62188e7a6f7acd`. Audit conclusions were independently checked; screenshot findings alone were not treated as runtime proof. No learner effectiveness, mastery or transfer outcome was tested.

The user subsequently identified the project copy `docs/AI_PM_EDUCATIONAL_AUDIT_20261019.zip`. `pwd`, `ls -lah docs/`, `find . -iname '*EDUCATIONAL*AUDIT*.zip'` and `unzip -l` verified its location. Its hash matches the Downloads copy exactly. All18 entries were extracted byte-identically into `docs/educational-audit/`; neither archive nor audit originals was modified. All seven Markdown documents and the two XLSX workbooks (all worksheets, including42 score rationales and24 competency mappings) were inspected. Moderator tooling now uses this project extraction. The earlier materials extraction is an identical preserved baseline reference, not a second audit.

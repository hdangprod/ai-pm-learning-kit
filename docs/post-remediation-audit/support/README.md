# Restricted audit evidence pack

POST-EQ-1.0. Moderator/reviewer material, not a learner assessment pack. No actual participant responses or human ratings are included.

The seven report files are the requested deliverables. LEARNER_EVALUATION_READINESS.md and EXECUTIVE_GO_NO_GO_BRIEF.md contain no form answers. Keep detailed audit, verification, form-validation and calibration material away from learners until testing ends.

Confirmed execution: 231 supplied unit/component tests; strict TypeScript; production build; six fixture/arithmetic verifiers; original instructor arithmetic; 43 offline checks; 47 authored key arithmetic assertions; seven additional auditor probe assertions; 18 private-content HTTP requests. Some probe assertions confirm flaws.

Not independently completed: the 54 real-browser E2E tests, assistive-technology testing, human timing, rater calibration or any learner study. Browser download/launch logs document environment blockers. The original preservation verifier fails at an unavailable external macOS archive path; the audit did not fabricate an original archive to bypass it.

The submitted source snapshot has402 files, unchanged throughout the audit. Source archive SHA256: fa52ddb4d604ae3f1421db667706fe36ee2a233eb3bc59a555e4434632c9f322.

The JSON files and logs retain the difference between machine checks, authored fault-injection probes, supplied developer evidence and unperformed human evaluation. Expected exceptions in the component transcript belong to the deliberate malformed-state probe, not actual participant incidents.

The external probe source/config are provided for review. Their temporary execution/output paths are explicit in the scripts; adapt these audit-only paths to a new environment before rerunning. They import the unchanged application code from a separate run/ copy. Never patch application code to make a probe pass.

Representative commands from the execution copy:

```sh
npm ci --ignore-scripts --no-audit --no-fund
./node_modules/.bin/tsc --noEmit --strict
npm run build
./node_modules/.bin/vitest run --maxWorkers=2 --minWorkers=2 --reporter=json --outputFile=/path/to/unit_results.json
python scripts/verify_assessment_workflow.py
python scripts/verify_remediation_preservation.py
./node_modules/.bin/vitest run --config /path/to/audit.vitest.config.mjs
```

Use the individual Python logs and python_checks.json for exact original verifier commands/results. Test inventory is not test execution. Source baseline hashes supplied by the developer are not independent authentication of unavailable historical originals.

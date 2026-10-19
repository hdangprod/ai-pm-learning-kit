# Implementation status — 2026-10-19

## Module 1 verification result

PASS for the implemented Module 1 calculation, interaction, strict TypeScript, production-build and desktop/mobile visual gates. All checks below ran locally. Module 2 has not been started during this verification pass; modules 2–6 remain specifications only.

Automated exercise checks validate expected calculations and misconception handling, not real learner mastery or instructional efficacy. Independent delayed learner/reviewer assessment remains outside software verification.

## Environment and dependency approval

- User explicitly approved npm dependency downloads, with install scripts disabled.
- Node v20.5.0; npm 9.8.0; macOS.
- No lockfile existed at the start. `npm ci` therefore was not applicable for this first install; no lockfile was removed.
- Exact successful install command (approved escalation):

```sh
npm install --ignore-scripts --no-audit --no-fund --cache /private/tmp/ai-pm-lab-npm-cache --fetch-retries=0 --fetch-timeout=20000
```

Result: exit 0, 181 packages installed. New `package-lock.json` retained. `package.json` and all dependency range declarations remain unchanged. Lockfile root declarations verified with Node `assert.deepEqual` (key-order-independent). Initial stringified comparison gave a false alarm because npm sorted keys; semantic comparison passes.

Resolved versions include React18.3.1, TypeScript5.9.3, Vite5.4.21, Vitest2.1.9, Playwright1.64.1, within the existing declared ranges. No upgrades were requested, no globals installed, no lifecycle scripts enabled, no browser downloads performed. Existing `/Applications/Google Chrome.app` used via Playwright `channel: 'chrome'`.

Hashes:
- package.json SHA256: `86c69842a148a6053a24f1776d63308889fc5b4f72d21a5d61570c5b5246d5e5`
- package-lock.json SHA256: `0677cf4316a4770e4b4c7e31d67aae41f29f0742b298a41852a6eda9bf7a36a1`

For subsequent installs: `npm ci --ignore-scripts --no-audit --no-fund`. Installing scripts or downloading a browser requires separate user approval.

## Exact verification commands and results

| Command | Final result | Evidence |
|---|---|---|
| `python3 scripts/verify_data.py` | PASS, exit0 | Independent CSV totals: week1 100/320/74/52; week2 100/460/47/30; expected rates70.27027%/63.82979% |
| `python3 materials/AI_PM_Audit_Upgrade_I_II/instructor/verify_learning.py` | PASS, exit0 | Supplied independent instructor arithmetic: coverage74%/47%, bounds52–78%/30–83%; original payback assertions also pass |
| `npm test` | PASS, exit0; 3 files, 9 tests | Vitest: metrics4, storage3, React Testing Library2. Final run after UI fixes:3.72s |
| `./node_modules/.bin/tsc --noEmit --strict` | PASS, exit0 | Application and Vite configuration under strict TS; no emitted output |
| `npm run build` | PASS, exit0 | Runs `tsc -b && vite build`; 1,588 modules; final build4.16s; JS168.91kB (gzip54.23kB), CSS13.66kB (gzip3.93kB) |
| `npm run test:e2e` | PASS, exit0; 6 tests | 3 scenarios × desktop/mobile. Full regression12.1s against production `dist/` via `npm run preview -- --port 4173` |
| `npm run test:e2e -- --grep 'denominator learning loop'` | PASS, exit0; 2 tests,7.7s | Screenshot-only follow-up: scroll to page top before full-page completion capture so the fixed sidebar is positioned consistently |

Playwright runs used approved escalation because the sandbox initially rejected binding `127.0.0.1:4173`. Approval succeeded; no permission bypass occurred. Test-owned preview server stopped after each run.

## Failures found and resolved

1. **Reset state defect:** added RTL regression failed because revealed solutions, answer input and feedback survived a progress reset. Reset now remounts the exercise state. Regression verifies clear state, cancel behavior, and preservation of unrelated localStorage keys. PASS in RTL and both browsers.
2. **Accessible filter labels:** both E2E tests initially timed out on exact `Segment` label because the implicit label included option text. Explicit label/ID associations now expose exact `Segment` and `Measure` names. PASS.
3. **Mobile progress:** desktop E2E passed but mobile failed because `1 / 6` was hidden by the responsive stylesheet. Compact practice progress is now visible on mobile. PASS.
4. **Desktop sidebar overflow:** screenshot inspection showed bottom content outside its panel at720px viewport height. Sidebar now scrolls within its own bounds. Control-label grouping was also retained on narrow layouts; chart buttons have40px minimum height.
5. **Test harness compatibility:** original `.ts` Playwright configuration failed `ERR_UNKNOWN_FILE_EXTENSION` on Node20.5.0; `.cts` also failed to transform imports. Converted Playwright configuration/test harness to `.cjs`, retaining the React application in TypeScript. No dependency versions changed to resolve this.
6. **Sandbox server binding:** initial browser run failed `listen EPERM ... 127.0.0.1:4173`. Retried through explicit approval, then succeeded.

Earlier pre-approval dependency/setup failures remain historical: missing Vitest, offline ENOTCACHED, approval-review model at capacity. They no longer block this pass.

## Browser coverage and screenshots

Desktop:1280×720 CSS pixels. Mobile:390×664 CSS pixels with iPhone13 device emulation and installed Chrome; this is Chromium mobile emulation, not a physical iPhone/Safari test.

Checks include: fixed exercise scope under changed explorer filters; coverage/pass rates; incorrect and correct answer feedback; primary/transfer progression; solution gate and permanent consulted flag; hypothesis/progress persistence after reload; JSON export; source CSV/Markdown HTTP responses; keyboard activation of chart bars; reset/cancel and unrelated-key preservation; storage-unavailable warning with retained session work; absence of page-level horizontal overflow; no uncaught page errors in the full learning loop.

Screenshots inspected with the image viewer after fixes:

- [Desktop viewport](module-one-desktop-viewport.png)
- [Desktop initial full page](module-one-desktop-initial.png)
- [Desktop assessment and transfer feedback](module-one-desktop-feedback.png)
- [Desktop persisted completion](module-one-desktop-completed.png)
- [Mobile viewport](module-one-mobile-viewport.png)
- [Mobile initial full page](module-one-mobile-initial.png)
- [Mobile assessment and transfer feedback](module-one-mobile-feedback.png)
- [Mobile persisted completion](module-one-mobile-completed.png)

Visual result: headings, lesson, filter grouping, metric cards, feedback, journal and progress are readable and laid out correctly. Mobile table is intentionally horizontally scrollable within its container; page itself does not overflow. Sidebar content is contained. Solutions are hidden on initial load and practice status is distinct from independent mastery. This is visual/keyboard inspection, not a comprehensive assistive-technology audit.

## Curriculum correction and remaining work

The user clarified that `AI_PM_Ke_hoach_tu_hoc_6_tuan(1).md` exists separately from the ZIP and will be provided. It is not yet in this workspace and has not been read. Confirmed schedule from the user:42 days, October19–November29,2026, two-hour sessions, calendar09:00–11:00 Asia/Ho_Chi_Minh. The earlier45–60-minute pacing must not be used as the user's schedule. Per instruction, the completed specifications have not been redesigned; reconcile their provisional pacing after reading the actual plan.

No remaining software-verification blocker for Module1. No field research, real learner-outcome validation, deployment, browser download or Module2 implementation occurred in this verification pass. Future modules must continue through their own gates. The application is not the complete six-module lab yet.

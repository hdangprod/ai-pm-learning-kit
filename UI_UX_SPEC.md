# UI/UX specification

Visual direction: quiet editorial workspace; warm off-white canvas, deep ink sidebar, forest green active states, muted gold synthetic-data labels, generous whitespace. Typography: system sans, serif lesson titles, tabular metric values. No external fonts/images required.

Desktop: fixed-width 248px curriculum rail; main breadcrumb/top status, module heading + objective; hypothesis notebook; exploratory dataset panel and adjacent learning/metric definitions; full-width exercise and source reference. Mobile (<800px): rail becomes top navigation with wrapping module buttons, single-column cards, horizontally scrollable tables inside bounded containers. No page-level horizontal overflow at 390px.

Components: semantic navigation with numbered module buttons and practice status; provenance pill on every data panel; lesson card; labeled segment/cohort selects; KPI cards showing numerator/denominator; SVG or CSS bar charts with textual values and matching tables; raw data details; exercise form; live feedback; gated solution reveal; transfer check; journal; progress export/reset. Sources visible as local downloadable references via public source copies.

Interaction: filters update charts, KPI values and table together; visible exercise prompts explicitly fixed to their stated scope. Filter reset restores all segments. Chart bars can be focused/clicked to select a row and expose its exact calculation. Null metrics show “Not observable” or “No eligible rows,” never NaN/0. Answer submit does not auto-reveal full key; explicit reveal button follows an attempt. On module switch focus title; no animations essential to task.

Accessibility: native buttons/inputs/selects, labels, fieldset/legend for choices, aria-current navigation, aria-live polite feedback, keyboard focus ring, chart text alternative, table captions/header scopes; green/red feedback always includes words. Targets ≥40px. Honor reduced motion. Use sufficient color contrast; check desktop and mobile visually where browser support permits.

Persistence: versioned localStorage; recover gracefully from malformed/unavailable storage and announce unsaved state. Reset requires inline confirm and deletes only this app key. Export contains user-authored reflections, responses and attempt history; no network requests. Progress reads “practice verified,” not job-ready. Offline after build served locally; dependency install is a one-time network setup, not runtime service dependency.

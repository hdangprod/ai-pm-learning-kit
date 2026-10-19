# Module 3 — authored retention content and fixture contract

Application-authored synthetic teaching extension, 2026-10-19. Main context: English tutor activity. No real research, learner outcomes, recruitment or educational-effectiveness results. Conceptual anchors: Volume II chapters 5/7 on cohort denominators and limits, Volume I chapter 1 on activity versus outcome. Full exact-day/rolling retention instruction belongs to planned chapter 16, which was not supplied as a finished lesson.

## Fixture conflict and minimal documented fork

The verified Module 2 `events-v1.json` must remain unchanged. Its added `UPPER_BOUNDARY` diagnostic row is feedback at C1U3's signup+7days: outside the funnel but INSIDE D7 retention. Together with C1U1/C1U2's return events it produces 3/4, conflicting with the newly required locked answer 2/4.

`python3 scripts/prepare_retention.py` creates a separate retention teaching fixture from that source. It changes only `UPPER_BOUNDARY.user_id` from C1U3 to C1U1, an already-returning learner. All 12 user rows, all 28 event rows/27 IDs, timestamps, event names and other payloads are preserved. This makes two distinct returning users and demonstrates that multiple D7 events for one learner still count once. The derived fixture embeds the source SHA256 and the exact transformation. No event is excluded merely because it was a diagnostic row.

Files: `src/data/retention-events.json`, identical `public/data/retention-events-v1.json`. Metadata: `dataset_id=retention-events-v1`, `data_type=SYNTHETIC_AUTHORED`, fixed cutoff2026-10-19T00:00:00Z. Deterministic transformation, no RNG. SHA256 entries are added to DATA_MANIFEST.json; original entries retained. Existing Module 1/2 fixtures and progress schema remain compatible.

Dictionary inherits MODULE_2_DATA.md: user_id unique synthetic signup key; signup_ts ISO UTC; segment pre-use novice/experienced; event_id delivery identity; name practice/feedback; ts ISO UTC. Signup cohort is UTC date, activity unit is a distinct learner, not events. Missing event fields/invalid dates/names and contradictory duplicate IDs are rejected, not imputed. Orphan events are audited and excluded. Identical duplicate deliveries are ignored.

## Mathematical and observation contracts

For each learner, D7 is [signup+7days,signup+8days). Practice OR feedback qualifies, without a funnel prerequisite. Both exact endpoints are tested: Day7 included, Day8 excluded; Day6 excluded. Each learner counts at most once.

A signup-date cohort is fully mature only when all its original members' complete D7 intervals have ended by the cutoff. This cohort-level maturity is established before segment filtering: a filter cannot turn a partly censored cohort into a mature one. Fixed fixture cohort members share a signup timestamp. Immature cohort numerator/rate is null, and those users are excluded from pooled denominators. Mature cohorts with no observed D7 activity have 0/n=0%; empty selections have null rates.

The fixture assumes complete event capture through the cutoff for descriptive arithmetic; this is a simulation assumption, not verified instrumentation. No qualifying event in a mature window means no recorded qualifying activity. Unknown tracking coverage in a real product would make inactivity uncertain. Future D7 windows are right-censored: we cannot yet observe the full required interval.

Exact-day asks whether activity falls inside one interval. “Rolling retention” here means activity on or after D7 through an explicitly stated horizon; definitions vary, so no unbounded rolling metric is calculated. A learner active on D8 only counts for a suitably observed rolling metric, but not D7. A funnel measures ordered progression in its specified window, while retention measures return activity in a later interval; receiving feedback before practice can qualify as return activity.

|Cohort|D7 interval UTC|Retained|Denominator|Rate|
|---|---|---:|---:|---:|
|2026-10-01|Oct8 00:00 to Oct9 00:00|2|4|50%|
|2026-10-08|Oct15 00:00 to Oct16 00:00|1|4|25%|
|2026-10-15|Oct22 00:00 to Oct23 00:00|unavailable|4 selected,0 eligible|unavailable|
|Mature pooled|Per-user completed D7 windows|3|8|37.5%|

Segment answers: novice pooled3/4=75%; experienced pooled0/4=0% (mature observed zero, not unavailable). Pool counts before dividing. Separate illustrative unequal-size example:1/2 and1/8 →2/10=20%, whereas averaging50% and12.5% gives31.25%, a different weighting. These toy counts are authored illustration, not additional research.

## Lesson/assessment sequence locked before implementation

Intuition → concrete cohort timeline with cutoff → formula/denominator → cohort comparison and event audit → learner's tentative explanation → numeric and structured interpretation + next investigation → explicit instructor explanation → separate transfer.

Primary: Oct1 D7 across segments=50%. Structured interpretation: observed activity difference, cause unknown. Next investigation: audit logging completeness and compare pre-use composition/acquisition by cohort before attributing differences. All structured items and numeric value must pass; numeric success alone is insufficient.

Before instructor reveal, require a nonempty tentative interpretation AND an attempted interpretation/investigation choice. Presence validation only; free-text correctness is NOT scored. Instructor explanation then introduces user composition, acquisition channels, onboarding, product behavior, tracking problems and random variation. No channel/release assignment data exists to distinguish these causes; recommend discriminating evidence rather than a causal conclusion.

Transfer: Oct8 D7=25%; reason: Oct15 is unavailable until its complete interval ends. Additional structured item: sum retained and eligible counts across mature cohorts rather than automatically averaging percentages. Instructor key remains hidden until the explicit gate. Export includes saved reflection, choices, attempt snapshots and notes.

Misconceptions tested: returners as denominator; immature=zero; repeated event counts; any post-signup activity; Day8 included; funnel substituted; retained implies English learning; unweighted cohort means; causal attribution from observational difference. Each wrong structured choice has a specific correction. Additional authored content is transparent and does not certify mastery.

## Curriculum integration

Optional advanced supplement after the 42-day foundation phase, as mapped in STUDY_PLAN_MAPPING.md. No required calendar insertion, substitution for unit economics, or Google Calendar action. Software practice completion remains distinct from the study plan's reviewer/self-assessed rubric.

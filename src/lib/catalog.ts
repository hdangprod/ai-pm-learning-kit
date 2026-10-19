import manifest from '../../docs/DATA_MANIFEST.json';
const source={id:'case-b-weekly-source-v1',label:'Original weekly simulation',path:'/data/case_b_weekly.csv',sha256:manifest['public/data/case_b_weekly.csv']};
export const datasets:Record<number,typeof source>={1:source,2:{id:'events-v1',label:'Authored funnel event fixture',path:'/data/events-v1.json',sha256:manifest['public/data/events-v1.json']},3:{id:'retention-events-v1',label:'Authored retention fork',path:'/data/retention-events-v1.json',sha256:manifest['public/data/retention-events-v1.json']},4:{id:'strict-simpson-v1',label:'Authored strict reversal',path:'/data/strict-simpson-v1.json',sha256:manifest['public/data/strict-simpson-v1.json']},5:source,6:{id:'decision-scenario-v1',label:'Authored decision scenario',path:'/data/decision-scenario-v1.json',sha256:manifest['public/data/decision-scenario-v1.json']}};
export const metricDefinitions={
 structured_decision_score:{definition:'Sum of five structured rubric dimensions, each 0–2; stage gates and critical errors separately block completion. No points for A/B/C/D alone.',unit:'points',kind:'structured_practice_not_reviewer_assessment',denominator:'Maximum 10 points, not a percentage or the study-plan 0–8 rubric'},
 assessed_pass_rate:{definition:'Passed / assessed × 100',unit:'percent',kind:'descriptive_rate',denominator:'Assessed learners in the specified group'},
 assessment_coverage:{definition:'Assessed / eligible × 100',unit:'percent',kind:'descriptive_rate',denominator:'Eligible learners in the specified group'},
 ordered_feedback_step_conversion:{definition:'Distinct mature users with ordered signup → practice → feedback / distinct mature practitioners × 100',unit:'percent',kind:'descriptive_rate',denominator:'Ordered mature practitioners; deduplicated IDs, strict time order, [signup, signup+7d)'},
 ordered_feedback_overall_conversion:{definition:'Distinct mature users with ordered signup → practice → feedback / distinct mature signups × 100',unit:'percent',kind:'descriptive_rate',denominator:'All mature signups, same ordered half-open window'},
 exact_day7_retention:{definition:'Distinct users active in [signup+7d, signup+8d) / all signups whose full interval is observed × 100',unit:'percent',kind:'descriptive_rate',denominator:'Mature signup users in the specified cohort'},
 session_count_relative_change:{definition:'(Comparison sessions − reference sessions) / reference sessions × 100',unit:'percent',kind:'relative_change',denominator:'Reference-group session count; undefined when zero'},
 coverage_difference_pp:{definition:'Comparison assessment coverage percent − reference coverage percent',unit:'percentage_points',kind:'rate_difference',denominator:'Each group uses its own eligible learners'},
 assessed_pass_difference_pp:{definition:'Comparison assessed pass-rate percent − reference assessed pass-rate percent',unit:'percentage_points',kind:'rate_difference',denominator:'Each group uses its own assessed learners'},
 illustrative_reweighted_pass_rate:{definition:'Sum of fixed subgroup pass rates × hypothetical subgroup weights × 100',unit:'percent',kind:'illustration_not_observed',denominator:'Hypothetical assessed-user mixture, not experiment outcomes'}
};
export const assessmentMetrics:Record<number,{primary:{metricId:keyof typeof metricDefinitions;scope:string};transfer:{metricId:keyof typeof metricDefinitions;scope:string}}>={
 1:{primary:{metricId:'assessed_pass_rate',scope:'Week 1, all segments'},transfer:{metricId:'assessment_coverage',scope:'Week 2, all segments'}},
 2:{primary:{metricId:'ordered_feedback_step_conversion',scope:'All mature cohorts and segments'},transfer:{metricId:'ordered_feedback_overall_conversion',scope:'All mature cohorts and segments'}},
 3:{primary:{metricId:'exact_day7_retention',scope:'October 1 cohort, all segments'},transfer:{metricId:'exact_day7_retention',scope:'October 8 cohort, all segments'}},
 4:{primary:{metricId:'assessed_pass_rate',scope:'Product B, pooled segments'},transfer:{metricId:'assessed_pass_rate',scope:'Product B, experienced segment'}},
 5:{primary:{metricId:'session_count_relative_change',scope:'Week 1 reference → Week 2 comparison, all segments'},transfer:{metricId:'assessment_coverage',scope:'Week 2, novice segment'}},
 6:{primary:{metricId:'structured_decision_score',scope:'decision-scenario-v1 initial decision; revision is an additional required stage'},transfer:{metricId:'structured_decision_score',scope:'Separate incumbent-success-v1 transfer; residual-task scope and critical checks'}}
};

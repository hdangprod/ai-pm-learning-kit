import {decisionModule} from './module6';
import {causalModule} from './module5';
import {segmentationModule} from './module4';
import {retentionModule} from './module3';
import {funnelModule} from './module2';
import {assessmentIds} from './assessmentIds';
import type {Question} from '../lib/assessment';
export type Module={id:number;title:string;short:string;eyebrow:string;objective:string;lesson:string;takeaway:string;source:string;provenance:string;reflectionPrompt?:string;reflectionHelp?:string;primary:Question;transfer:Question};
export const modules:Module[]=[{
 id:1,title:'Every number needs a denominator.',short:'Data literacy',eyebrow:'01 / THE FOUNDATIONS',objective:'Separate activity from learning, and choose the population your metric actually describes.',
 lesson:'A tutor can generate more sessions without helping learners improve. Start with the grain: each row here is one signup cohort × one pre-use segment. Sessions count activity; eligible, assessed and passed count fictional learners. People without an assessment have unknown outcomes.',
 takeaway:'Pass rate answers “among those assessed.” Coverage answers “how much of the eligible cohort did we observe?” You need both.',source:'Volume I · Chapter 1 · Exercise 1D; Volume II · Labs 1–3',provenance:'Original curriculum simulation · Case B',
 primary:{prompt:'In cohort week 1, across both segments, what percentage of assessed learners passed?',expected:52/74*100,unit:'%',reasonPrompt:'What does this percentage let you conclude?',hints:{'52':'52/100 measures observed passes among all eligible learners. This question asks about the 74 who were assessed.','74':'74% is assessment coverage (74/100), not pass rate.'},choices:[{label:'This is the share who passed among assessed learners; missing outcomes remain unknown.',correct:true,feedback:'Correct scope: assessed learners are the denominator. Report coverage separately; do not fill missing outcomes with failure.'},{label:'This is the proportion of all eligible learners who learned successfully.',feedback:'The 26 unassessed learners have unknown outcomes. Assessment pass rate cannot describe everyone eligible.'},{label:'Because all assessed learners used the tutor, the pass rate estimates its contribution.',feedback:'There is no baseline or comparator here. A pass is an observed result in a simulation, not an estimated causal effect.'}],solution:'52 ÷ 74 × 100 = 70.27%. Coverage is 74/100 = 74%. With binary pass outcomes, all-eligible bounds are 52%–78%; these are not confidence intervals.'},
 transfer:{prompt:'Now use cohort week 2, both segments. What percentage of eligible learners were assessed?',expected:47,unit:'%',reasonPrompt:'How should the unassessed learners be handled?',choices:[{label:'Keep their outcomes unknown and report coverage.',correct:true,feedback:'Yes. 47 assessed out of 100 eligible gives 47% coverage. Missing outcomes need a follow-up investigation.'},{label:'Count every unassessed learner as a failure.',feedback:'No observed assessment does not establish failure. Report missingness and sensitivity bounds.'},{label:'Remove them from the eligible cohort.',feedback:'Eligibility was defined before the outcome. Removing missing learners hides the coverage problem.'}],solution:'47 ÷ 100 × 100 = 47%. The remaining 53 outcomes are unknown.'}
},funnelModule,retentionModule,segmentationModule,causalModule,decisionModule];

// Attach IDs without changing canonical v1 indices or mathematical keys.
for(const module of modules.filter(m=>m.id<=5))for(const stage of ['primary','transfer'] as const){
 const q=module[stage];q.id=`m${module.id}.${stage}`;
 [q,...(q.items??[])].forEach((group,g)=>{group.choices.forEach((choice,i)=>{choice.id=`${q.id}.${assessmentIds[module.id][stage][g][i]}`;});});
}

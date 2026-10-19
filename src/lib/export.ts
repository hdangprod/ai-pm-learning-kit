import legacyCatalog from '../data/legacyAssessmentCatalog.json';
import {attemptEvidence} from './attemptEvidence';
import {memoReviewStatus} from './memoReview';
import {decisionDimensions,contextChoices} from '../data/decisionContent';
import {modules} from '../data/modules';
import type {Question} from './assessment';
import {datasets,metricDefinitions,assessmentMetrics} from './catalog';
import type {Progress} from './storage';
// Explain historical numeric answers and choice indices without exporting hidden keys.
const publicQuestion=(question:Question)=>({prompt:question.prompt,unit:question.unit,reasonPrompt:question.reasonPrompt,choices:question.choices.map(c=>c.label),optionDefinitions:question.choices.map(c=>({id:c.id,label:c.label})),items:(question.items??[]).map(item=>({prompt:item.prompt,choices:item.choices.map(c=>c.label),optionDefinitions:item.choices.map(c=>({id:c.id,label:c.label}))}))});
export function buildLearningExport(progress:Progress,exportedAt:string){return {version:1,exportedAt,modules:progress,definitionsVersion:2,independentMemoReview:{status:memoReviewStatus,policy:'External human review required; structured points do not grade memo semantics.'},evidence:Object.entries(progress).flatMap(([id,work])=>work.attempts.map(a=>attemptEvidence(Number(id),a))),legacyIndexDefinitions:legacyCatalog,numericConvention:'Answers use percent units: 25 means 25%, not 0.25. Percentage-point differences are explicitly separate. No metric estimates a causal effect. Module 6 scores use points (0–10), not percent or the study-plan 0–8 rubric.',metricDefinitions,decisionContract:{version:1,maximum:10,unit:'points',dimensions:decisionDimensions.map(d=>({id:d.id,name:d.name})),contextChoices:Object.fromEntries(Object.entries(contextChoices).map(([key,choices])=>[key,choices.map(c=>c.label)])),stages:['initial','revision','transfer'],textPolicy:'Presence/date checks only; memo semantics require an independent reviewer.'},moduleDefinitions:modules.map(m=>({id:m.id,title:m.title,dataset:datasets[m.id],assessments:assessmentMetrics[m.id],primary:publicQuestion(m.primary),transfer:publicQuestion(m.transfer)}))};}

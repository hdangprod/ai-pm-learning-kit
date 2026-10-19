import {assistance,type Assistance} from './practice';
import fixture from '../data/decision-scenario.json';
import {decisionDimensions,contextChoices} from '../data/decisionContent';
export const decisionScenario=fixture;
export type Strategy='A'|'B'|'C'|'D';export type Plan='listed'|'reduced';export type Stage='initial'|'revision'|'transfer';export type Challenge='capacity'|'rights'|'coverage';
export const stages:Stage[]=['initial','revision','transfer'];
export const memoFields=['decision','evidence','uncertainty','alternatives','comparator','nextStep','owner','checkDate','stopRule'] as const;
export type Memo=Record<typeof memoFields[number],string>;
export type DecisionDraft={reasoningChange?:string;reasoningChangeFor?:string;strategy:Strategy|'';plan:Plan;reasoning:number[];memo:Memo;response:''|'keep'|'revise';changed:string;relevance:string;contextChoice:number};
export type DecisionResult={score:number;dimensions:{name:string;points:number;feedback:string}[];critical:string[];missing:string[];feasible:boolean;passed:boolean;feedback:string};
export type DecisionAttempt={assistance?:Assistance;id:string;at:string;stage:Stage;challenge?:Challenge;draft:DecisionDraft;result:DecisionResult};
export type DecisionState={version:1;drafts:Record<Stage,DecisionDraft>;attempts:DecisionAttempt[];initial?:DecisionAttempt;revised?:DecisionAttempt;transfer?:DecisionAttempt;challenge?:{id:Challenge;at:string};consulted:Record<Stage,boolean>;exploration:{capacity:number;shortlist:Strategy[];classifications:Record<string,string>}};
export const freshDecisionDraft=():DecisionDraft=>({strategy:'',plan:'listed',reasoning:[],memo:Object.fromEntries(memoFields.map(k=>[k,''])) as Memo,response:'',changed:'',relevance:'',contextChoice:-1});
export const freshDecisionState=():DecisionState=>({version:1,drafts:{initial:freshDecisionDraft(),revision:freshDecisionDraft(),transfer:freshDecisionDraft()},attempts:[],consulted:{initial:false,revision:false,transfer:false},exploration:{capacity:12,shortlist:['A','B','C','D'],classifications:{}}});
export const isStrategy=(v:unknown):v is Strategy=>['A','B','C','D'].includes(v as string);
export function planEffort(strategy:Strategy,plan:Plan){const option=fixture.options.find(o=>o.id===strategy);if(!option||!['listed','reduced'].includes(plan))throw Error('Unknown strategy or plan.');return plan==='listed'?option.effort:option.reduced;}
export function evaluatePlan(strategy:Strategy,plan:Plan,resources=fixture.brief.resources){
 for(const amount of Object.values(resources))if(!Number.isSafeInteger(amount)||amount<0)throw Error('Resource hours must be nonnegative safe integers.');
 const effort=planEffort(strategy,plan);const roles=['engineering','research','coaching'] as const;return {effort,total:roles.reduce((n,role)=>n+effort[role],0),fits:roles.every(role=>effort[role]<=resources[role]),exceeded:roles.filter(role=>effort[role]>resources[role])};
}
function validDate(value:string){if(!/^\d{4}-\d{2}-\d{2}$/.test(value))return false;const time=Date.parse(value+'T00:00:00Z');return Number.isFinite(time)&&new Date(time).toISOString().slice(0,10)===value&&value>=fixture.brief.planning_start&&value<=fixture.brief.check_deadline;}
export function gradeDecision(draft:DecisionDraft,stage:Stage,challenge?:Challenge,original?:Strategy):DecisionResult{
 if(!stages.includes(stage))throw Error('Unknown decision stage.');
 const critical:string[]=[],missing:string[]=[];
 const dimensions=decisionDimensions.map((dimension,i)=>{const choice=dimension.choices[draft.reasoning[i]];if(!choice)missing.push(dimension.name);if(choice?.critical)critical.push(choice.critical);return {name:dimension.name,points:choice?.points??0,feedback:choice?.feedback??'Choose an explicit structured response.'};});
 if(!isStrategy(draft.strategy))missing.push('Strategy');if(!['listed','reduced'].includes(draft.plan))missing.push('Effort plan');
 for(const field of memoFields)if(typeof draft.memo[field]!=='string'||!draft.memo[field].trim())missing.push(`Memo: ${field}`);
 if(!validDate(draft.memo.checkDate))missing.push(`Real next-check date between ${fixture.brief.planning_start} and ${fixture.brief.check_deadline}`);
 let resources=fixture.brief.resources,contextFeedback='';
 if(stage==='revision'){
  const variant=fixture.variants.find(v=>v.id===challenge);if(!variant)missing.push('Revealed challenge');else resources=variant.resources;
  if(!draft.changed.trim())missing.push('What changed');if(!draft.relevance.trim())missing.push('Why it matters');
  if(!original||!isStrategy(draft.strategy)||draft.response!==(draft.strategy===original?'keep':'revise'))missing.push('Keep/revise consistent with the initial strategy');
 }
 if(stage!=='initial'){
  const choices=contextChoices[stage==='transfer'?'transfer':challenge??''];const selected=choices?.[draft.contextChoice];if(!selected?.valid)missing.push('Decision-relevant context check');if(selected?.critical)critical.push(selected.critical);contextFeedback=selected?.feedback??'Choose a response to this stage’s actual information.';
 }
 const feasible=isStrategy(draft.strategy)&&['listed','reduced'].includes(draft.plan)&&evaluatePlan(draft.strategy,draft.plan,resources).fits;
 const score=dimensions.reduce((n,d)=>n+d.points,0);const passed=score===10&&critical.length===0&&missing.length===0&&feasible;
 return {score,dimensions,critical,missing,feasible,passed,feedback:[...dimensions.map(d=>d.feedback),contextFeedback,...(!feasible?['The plan exceeds a role cap or no valid strategy/plan is selected. Revise scope or option; total hours do not substitute for engineering capacity.']:[]),...(missing.length?[`Complete or correct: ${missing.join('; ')}.`]:[]),'Structured statements are graded; memo text is checked for presence/date only and needs independent review.'].filter(Boolean).join(' ')};
}
export function canRevealDecision(state:DecisionState,stage:Stage){return state.attempts.some(a=>a.stage===stage&&a.draft.strategy!==''&&decisionDimensions.every((d,i)=>d.choices[a.draft.reasoning[i]]!==undefined)&&memoFields.every(k=>a.draft.memo[k].trim()!=='' )&&(stage!=='revision'||a.draft.changed.trim()!==''&&a.draft.relevance.trim()!==''&&a.draft.response!=='')&&(stage==='initial'||contextChoices[stage==='transfer'?'transfer':a.challenge??'']?.[a.draft.contextChoice]!==undefined));}
export function revealChallenge(state:DecisionState,id:Challenge,at:string):DecisionState{
 if(!state.initial||!fixture.variants.some(v=>v.id===id))throw Error('A valid initial decision and known variant are required.');if(state.challenge)throw Error('This round already has a fixed challenge.');return {...state,challenge:{id,at},drafts:{...state.drafts,revision:{...freshDecisionDraft(),strategy:state.initial.draft.strategy,plan:state.initial.draft.plan}}};
}
export function submitDecision(state:DecisionState,stage:Stage,at:string):DecisionState{
 if(!stages.includes(stage)||stage==='initial'&&state.initial||stage==='revision'&&(!state.initial||!state.challenge||state.revised)||stage==='transfer'&&(!state.revised||state.transfer))throw Error('This decision stage is locked.');
 const prior=state.attempts.filter(a=>a.stage===stage).at(-1);
 if(prior&&(!state.drafts[stage].reasoningChange?.trim()||state.drafts[stage].reasoningChangeFor!==prior.id))throw Error('Record what changed in your reasoning before an assisted retry. Text presence is not semantic grading.');
 const draft=structuredClone(state.drafts[stage]);const result=gradeDecision(draft,stage,state.challenge?.id,state.initial?.draft.strategy as Strategy|undefined);
 const attempt:DecisionAttempt={id:`${stage}-${state.attempts.length+1}`,at,stage,assistance:assistance(state.attempts.length>0,Object.values(state.consulted).some(Boolean),draft.reasoningChange??''),...(stage==='revision'?{challenge:state.challenge!.id}:{}),draft,result};
 return {...state,attempts:[...state.attempts,attempt],...(result.passed?{[stage==='initial'?'initial':stage==='revision'?'revised':'transfer']:attempt}:{})};
}
function isDraft(value:unknown):value is DecisionDraft{
 if(!value||typeof value!=='object')return false;const d=value as DecisionDraft;
 return (d.strategy===''||isStrategy(d.strategy))&&['listed','reduced'].includes(d.plan)&&Array.isArray(d.reasoning)&&d.reasoning.length<=5&&d.reasoning.every((n,i)=>Number.isInteger(n)&&n>=-1&&n<decisionDimensions[i].choices.length)&&d.memo!==null&&typeof d.memo==='object'&&memoFields.every(k=>typeof d.memo[k]==='string')&&['','keep','revise'].includes(d.response)&&typeof d.changed==='string'&&typeof d.relevance==='string'&&(d.reasoningChange===undefined||typeof d.reasoningChange==='string')&&(d.reasoningChangeFor===undefined||typeof d.reasoningChangeFor==='string')&&Number.isInteger(d.contextChoice)&&d.contextChoice>=-1&&d.contextChoice<4;
}
export function isDecisionState(value:unknown):value is DecisionState{
 if(!value||typeof value!=='object')return false;const s=value as DecisionState;
 const attempt=(a:DecisionAttempt)=>a&&typeof a.id==='string'&&typeof a.at==='string'&&stages.includes(a.stage)&&isDraft(a.draft)&&a.result&&typeof a.result.passed==='boolean'&&Number.isInteger(a.result.score)&&a.result.score>=0&&a.result.score<=10&&Array.isArray(a.result.dimensions)&&a.result.dimensions.length===5&&a.result.dimensions.every(d=>typeof d.name==='string'&&[0,1,2].includes(d.points)&&typeof d.feedback==='string')&&a.result.score===a.result.dimensions.reduce((n,d)=>n+d.points,0)&&Array.isArray(a.result.critical)&&a.result.critical.every(v=>typeof v==='string')&&Array.isArray(a.result.missing)&&a.result.missing.every(v=>typeof v==='string')&&typeof a.result.feasible==='boolean'&&typeof a.result.feedback==='string';
 return s.version===1&&s.drafts!=null&&stages.every(stage=>isDraft(s.drafts[stage]))&&Array.isArray(s.attempts)&&s.attempts.every(attempt)&&[s.initial,s.revised,s.transfer].every(a=>a===undefined||attempt(a))&&(!s.initial||s.initial.stage==='initial'&&s.initial.result.passed)&&(!s.revised||!!s.initial&&!!s.challenge&&s.revised.stage==='revision'&&s.revised.result.passed)&&(!s.transfer||!!s.revised&&s.transfer.stage==='transfer'&&s.transfer.result.passed)&&(!s.challenge||!!s.initial&&fixture.variants.some(v=>v.id===s.challenge?.id)&&typeof s.challenge.at==='string')&&s.consulted!=null&&stages.every(stage=>typeof s.consulted[stage]==='boolean')&&s.exploration!=null&&Number.isInteger(s.exploration.capacity)&&s.exploration.capacity>=0&&s.exploration.capacity<=12&&Array.isArray(s.exploration.shortlist)&&s.exploration.shortlist.every(isStrategy)&&s.exploration.classifications!=null&&typeof s.exploration.classifications==='object'&&!Array.isArray(s.exploration.classifications)&&Object.values(s.exploration.classifications).every(v=>typeof v==='string');
}

export {isDraft as isDecisionDraft};

import {groups,choiceId,type Question} from './assessment';
export type Assistance={kind:'initial_unaided'|'after_feedback'|'after_solution';feedbackAvailable:boolean;solutionConsulted:boolean;reasoningChange:string;scope:'same_case_practice';note:string};
export type PracticeDraft={id:string;input:string;answers:(string|null)[];order:string[][];reasoningChange:string};
export function newPracticeDraft(q:Question,previous?:PracticeDraft,random:()=>number=Math.random):PracticeDraft{
 const order=groups(q).map((choices,g)=>{
  const ids=choices.map(choiceId);for(let i=ids.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[ids[i],ids[j]]=[ids[j],ids[i]];}
  if(previous&&ids.join()===previous.order[g]?.join())ids.push(ids.shift()!);
  return ids;
 });
 return {id:globalThis.crypto?.randomUUID?.()??`${Date.now()}-${Math.random()}`,input:previous?.input??'',answers:previous?.answers??[],order,reasoningChange:''};
}
export function assistance(feedback:boolean,solution:boolean,reasoningChange=''):Assistance{return {kind:solution?'after_solution':feedback?'after_feedback':'initial_unaided',feedbackAvailable:feedback,solutionConsulted:solution,reasoningChange,scope:'same_case_practice',note:'Recorded in-app exposure only; unaided does not verify absence of external help. Text presence is not semantic grading.'};}
export const evidenceLabel=(a?:Assistance)=>!a?'Historical attempt · assistance timing unknown':a.kind==='after_solution'?'After instructor-solution reveal':a.kind==='after_feedback'?'After feedback':'Initial unaided attempt · no recorded in-app assistance';

// Stable presentation for an untouched question without rewriting a legacy Work record.
// New edited/submitted drafts store their full ordering in v1 progress. This is not examination security.
export function initialPresentationRandom(question:Question,attempts:number){let seed=2166136261;for(const c of `${question.id}:${attempts}`)seed=Math.imul(seed^c.charCodeAt(0),16777619)>>>0;return ()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};}

// Validate persisted JSON by question and group; null/blank denotes a legitimate unanswered slot.
export function isPracticeDraft(value:unknown,q:Question):value is PracticeDraft{
 if(!value||typeof value!=='object'||Array.isArray(value))return false;
 const d=value as PracticeDraft,expected=groups(q).map(cs=>cs.map(choiceId));
 if(typeof d.id!=='string'||!d.id.trim()||typeof d.input!=='string'||typeof d.reasoningChange!=='string'||!Array.isArray(d.answers)||d.answers.length>expected.length||!Array.isArray(d.order)||d.order.length!==expected.length)return false;
 return expected.every((ids,g)=>{
  const order=d.order[g],answer=d.answers[g];
  return Array.isArray(order)&&order.length===ids.length&&new Set(order).size===ids.length&&order.every(id=>typeof id==='string'&&ids.includes(id))&&(answer===undefined||answer===null||answer===''||typeof answer==='string'&&ids.includes(answer));
 });
}

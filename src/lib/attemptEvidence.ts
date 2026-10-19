import legacyCatalog from '../data/legacyAssessmentCatalog.json';
import {modules} from '../data/modules';
import type {Attempt} from './storage';
import {evidenceLabel} from './practice';
// Legacy labels are frozen before remediation. Never decode old indices through edited wording.
export function attemptEvidence(moduleId:number,attempt:Attempt){
 const legacy=legacyCatalog.find(m=>m.id===moduleId)?.[attempt.stage];
 const legacyGroups=legacy?[legacy.choices,...(legacy.items??[]).map(i=>i.choices)]:[];
 const question=modules.find(m=>m.id===moduleId)?.[attempt.stage];
 const currentGroups=question?[question.choices,...(question.items??[]).map(i=>i.choices)]:[];
 const indices=[attempt.choice,...(attempt.extraChoices??[])];
 return {
  moduleId,at:attempt.at,stage:attempt.stage,label:evidenceLabel(attempt.assistance),
  assistance:attempt.assistance??{kind:'historical_unknown',note:'Timing cannot be reconstructed from final consultation state.'},
  responses:indices.map((index,g)=>({
   legacyCanonicalIndex:index,
   id:attempt.responseIds?.[g]??currentGroups[g]?.[index]?.id??null,
   label:attempt.assessmentVersion===2?currentGroups[g]?.find(c=>c.id===attempt.responseIds?.[g])?.label??'(not selected)':legacyGroups[g]?.[index]??'(not selected)'
  }))
 };
}

import {modules} from '../data/modules';
import {isPracticeDraft} from './practice';
import {isDecisionDraft,isDecisionState,freshDecisionDraft,stages,type DecisionState} from './decision';
import {STORAGE_KEY,type Progress,type Work} from './storage';
export type StorageIssue={moduleId?:string;path:string;reason:string};
export type LoadedProgress={progress:Progress;warning:string;raw:string|null;recovery:boolean;issues:StorageIssue[];unavailable?:boolean};
export type StorageOutcome={ok:true;raw:string|null}|{ok:false;kind:'conflict'|'recovery'|'unavailable'|'unsupported';message:string};
const object=(v:unknown):v is Record<string,unknown>=>!!v&&typeof v==='object'&&!Array.isArray(v);
const warning='Some saved work could not be read. Autosave is paused. Export the original raw recovery record, review the isolated fields, then explicitly acknowledge recovery. Valid histories remain available.';
function inspect(raw:string|null):LoadedProgress{
 const result:LoadedProgress={progress:{},warning:'',raw,recovery:false,issues:[]};
 if(raw===null)return result;
 const issue=(path:string,reason:string,moduleId?:string)=>result.issues.push({path,reason,...(moduleId?{moduleId}:{})});
 try{
  const root:unknown=JSON.parse(raw);
  if(!object(root)||root.version!==1||!object(root.modules)){issue('$','Unsupported or invalid saved envelope.');}
  else{
   if(root.revision!==undefined&&(typeof root.revision!=='string'||!root.revision.trim()))issue('revision','Invalid storage revision.');
   for(const [id,value] of Object.entries(root.modules)){
    if(!/^[1-6]$/.test(id)||!object(value)){issue(`modules.${id}`,'Invalid module record; original retained in raw recovery.',id);continue;}
    const w=value as Work;
    if(typeof w.hypothesis!=='string'||typeof w.journal!=='string'||!Array.isArray(w.attempts)||typeof w.revealed!=='boolean'||typeof w.primaryPassed!=='boolean'||typeof w.complete!=='boolean'||w.interpretation!==undefined&&typeof w.interpretation!=='string'){
     issue(`modules.${id}`,'Invalid core module fields; module isolated, original retained.',id);continue;
    }
    // Minimal submitted-attempt shape protects render/export without regrading or rewriting evidence.
    if(!w.attempts.every(a=>object(a)&&typeof a.at==='string'&&['primary','transfer'].includes(a.stage)&&typeof a.input==='string'&&Number.isInteger(a.choice)&&object(a.result)&&typeof a.result.passed==='boolean'&&typeof a.result.numeric==='boolean'&&typeof a.result.reasoning==='boolean'&&typeof a.result.feedback==='string'&&(a.extraChoices===undefined||Array.isArray(a.extraChoices)&&a.extraChoices.every(n=>n===null||Number.isInteger(n))))){issue(`modules.${id}.attempts`,'Unreadable submitted evidence; module isolated, no original deleted.',id);continue;}
    let safe={...w};
    if(w.practiceDrafts!==undefined){
     if(!object(w.practiceDrafts)||Number(id)===6){delete safe.practiceDrafts;issue(`modules.${id}.practiceDrafts`,'Invalid optional draft container quarantined; submitted attempts retained.',id);}
     else{
      const drafts:Work['practiceDrafts']={};const module=modules.find(m=>m.id===Number(id))!;
      for(const [stage,draft] of Object.entries(w.practiceDrafts)){
       if((stage==='primary'||stage==='transfer')&&isPracticeDraft(draft,module[stage]))drafts[stage]=draft;
       else issue(`modules.${id}.practiceDrafts.${stage}`,'Invalid option IDs, group/order completeness or draft field types; unsent draft quarantined, submitted attempts retained.',id);
      }
      safe={...safe,practiceDrafts:drafts};
     }
    }
    if(w.decisionRoom!==undefined){
     let valid=false;try{valid=isDecisionState(w.decisionRoom);}catch{/* isolate safely below */}
     if(!valid){
      // A damaged unsent draft must not remove valid frozen M6 memos or attempt chronology.
      const room=w.decisionRoom as DecisionState;let repaired:DecisionState|undefined;
      if(object(room)&&object(room.drafts)){
       const drafts={...room.drafts};
       for(const stage of stages)if(!isDecisionDraft(drafts[stage])){
        const saved=stage==='initial'?room.initial:stage==='revision'?room.revised:room.transfer;
        drafts[stage]=saved&&isDecisionDraft(saved.draft)?structuredClone(saved.draft):freshDecisionDraft();
       }
       const candidate={...room,drafts};try{if(isDecisionState(candidate))repaired=candidate;}catch{/* raw remains the authority */}
      }
      if(repaired){safe.decisionRoom=repaired;issue(`modules.${id}.decisionRoom.drafts`,'Invalid unsent M6 draft quarantined; frozen memo/attempt history preserved. Preview uses the frozen draft or a blank unsent draft.',id);}
      else{delete safe.decisionRoom;issue(`modules.${id}.decisionRoom`,'Unreadable decision state isolated; exact original memos/history remain in raw recovery. Do not adopt without reviewing this loss of preview.',id);}
     }
    }
    result.progress[Number(id)]=safe;
   }
  }
 }catch{issue('$','Saved JSON could not be parsed. Original raw text retained.');}
 if(result.issues.length){result.warning=warning;result.recovery=true;}
 return result;
}
export function loadProgress():LoadedProgress{
 try{return inspect(localStorage.getItem(STORAGE_KEY));}
 catch{return {progress:{},warning:'Saved work could not be read because browser storage is unavailable. Autosave is paused; do not reset. Keep an external export of session work.',raw:null,recovery:false,issues:[],unavailable:true};}
}
const conflict=():StorageOutcome=>({ok:false,kind:'conflict',message:'Storage conflict: another tab or session changed saved evidence. This session has not overwritten it. Export this session’s unsaved work, then reload latest saved work. Do not reset or keep editing in multiple tabs.'});
const unavailable=():StorageOutcome=>({ok:false,kind:'unavailable',message:'Browser storage is unavailable. Your work is kept for this session; export to save it. No stored history was replaced.'});
function check(expectedRaw:string|null):StorageOutcome{
 const current=localStorage.getItem(STORAGE_KEY);
 if(current!==expectedRaw)return conflict();
 if(inspect(current).recovery)return {ok:false,kind:'recovery',message:warning};
 return {ok:true,raw:current};
}
function encoded(progress:Progress){return JSON.stringify({version:1,revision:globalThis.crypto.randomUUID(),modules:progress});}
// These synchronous compare/write primitives are called INSIDE the origin-wide Web Lock by the app.
export function writeProgress(progress:Progress,expectedRaw:string|null):StorageOutcome{
 try{const gate=check(expectedRaw);if(!gate.ok)return gate;const raw=encoded(progress);localStorage.setItem(STORAGE_KEY,raw);return {ok:true,raw};}catch{return unavailable();}
}
export function saveProgress(progress:Progress,expectedRaw:string|null):boolean{return writeProgress(progress,expectedRaw).ok;}
export function clearProgress(expectedRaw:string|null):StorageOutcome{
 try{const gate=check(expectedRaw);if(!gate.ok)return gate;localStorage.removeItem(STORAGE_KEY);return {ok:true,raw:null};}catch{return unavailable();}
}
export function adoptRecovery(progress:Progress,source:LoadedProgress,acknowledged:boolean):StorageOutcome{
 if(!source.recovery||!acknowledged||source.raw===null)return {ok:false,kind:'recovery',message:warning};
 try{
  if(localStorage.getItem(STORAGE_KEY)!==source.raw)return conflict();
  // Never replace even the acknowledged source until its exact raw bytes have a separate backup.
  const id=globalThis.crypto.randomUUID();localStorage.setItem(`ai-pm-lab:recovery:${id}`,source.raw);
  const raw=encoded(progress);localStorage.setItem(STORAGE_KEY,raw);return {ok:true,raw};
 }catch{return unavailable();}
}
export function buildRawRecoveryExport(source:LoadedProgress){let parsed:unknown=null;try{parsed=source.raw===null?null:JSON.parse(source.raw);}catch{/* exact raw is included even for malformed JSON */}return {format:'ai-pm-raw-recovery-v1',capturedAt:new Date().toISOString(),sourceKey:STORAGE_KEY,raw:source.raw,readableParsed:parsed,issues:source.issues,validPreview:source.progress,note:'Original raw is authoritative. Preview isolates invalid fields without regrading submitted answers. Save this file outside the browser before acknowledging recovery.'};}
export type LockRunner=(action:()=>void)=>Promise<unknown>;
export const browserLock:LockRunner=action=>{
 if(!navigator.locks?.request)return Promise.reject(Error('Origin-wide Web Locks unavailable.'));
 return navigator.locks.request('ai-pm-lab:evidence-write',{mode:'exclusive'},()=>action());
};
export class StorageController{
 private raw:string|null;private blocked:'conflict'|'recovery'|undefined;private disposed=false;
 constructor(private source:LoadedProgress,private lock:LockRunner=browserLock){this.raw=source.raw;if(source.recovery)this.blocked='recovery';}
 dispose(){this.disposed=true;}
 changed(){try{return localStorage.getItem(STORAGE_KEY)!==this.raw;}catch{return false;}}
 run(progress:Progress,notify:(outcome:StorageOutcome)=>void,mode:'save'|'clear'|'recover'='save',acknowledged=false){
  const action=()=>{
   if(this.disposed)return;
   if(this.blocked&&!(this.blocked==='recovery'&&mode==='recover')){notify(this.blocked==='conflict'?conflict():{ok:false,kind:'recovery',message:warning});return;}
   const result=mode==='recover'?adoptRecovery(progress,this.source,acknowledged):mode==='clear'?clearProgress(this.raw):writeProgress(progress,this.raw);
   if(result.ok){this.raw=result.raw;this.blocked=undefined;this.source={...this.source,raw:result.raw,recovery:false};}
   else if(result.kind==='conflict'||result.kind==='recovery')this.blocked=result.kind;
   notify(result);
  };
  this.lock(action).catch(()=>{if(!this.disposed)notify({ok:false,kind:'unsupported',message:'Evidence saving is paused: this browser could not acquire the origin-wide storage lock. Use the verified Chrome localhost setup and export session work. No fallback overwrite was attempted.'});});
 }
}

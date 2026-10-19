import fixture from '../data/events.json';
import {ratio,type Segment} from './metrics';
export type Learner={user_id:string;signup_ts:string;segment:string};
export type EventRow={event_id:string;user_id:string;name:string;ts:string};
export const eventFixture=fixture;
const DAY=86400000;
function timestamp(value:string):number {const result=Date.parse(value);if(!Number.isFinite(result)||!value.endsWith('Z'))throw new Error('Timestamps must be valid UTC ISO strings.');return result;}
export function analyzeFunnel(users:Learner[],events:EventRow[],cutoff:string,segment:Segment='all',cohort='all') {
 const end=timestamp(cutoff);const people=new Map<string,Learner>();
 for(const u of users){timestamp(u.signup_ts);if(!u.user_id||people.has(u.user_id))throw new Error('User IDs must be unique and nonempty.');people.set(u.user_id,u);}
 const unique=new Map<string,EventRow>();const duplicateIndexes=new Set<number>();
 events.forEach((e,index)=>{timestamp(e.ts);if(!e.event_id||!['practice','feedback'].includes(e.name))throw new Error('Invalid event ID or event name.');const previous=unique.get(e.event_id);if(previous){if(previous.user_id!==e.user_id||previous.name!==e.name||previous.ts!==e.ts)throw new Error('Conflicting duplicate event ID.');duplicateIndexes.add(index);}else unique.set(e.event_id,e);});
 const selected=users.filter(u=>(segment==='all'||u.segment===segment)&&(cohort==='all'||u.signup_ts.slice(0,10)===cohort));
 const eligible=selected.filter(u=>timestamp(u.signup_ts)+7*DAY<=end);const eligibleIds=new Set(eligible.map(u=>u.user_id));
 const paths=eligible.map(u=>{const start=timestamp(u.signup_ts);const rows=[...unique.values()].filter(e=>e.user_id===u.user_id&&timestamp(e.ts)>start&&timestamp(e.ts)<start+7*DAY&&timestamp(e.ts)<end).sort((a,b)=>timestamp(a.ts)-timestamp(b.ts));const practice=rows.find(e=>e.name==='practice');const feedback=practice?rows.find(e=>e.name==='feedback'&&timestamp(e.ts)>timestamp(practice.ts)):undefined;return {user_id:u.user_id,practice:practice?.ts??null,feedback:feedback?.ts??null};});
 const selectedIds=new Set(selected.map(u=>u.user_id));
 const audit=events.map((e,index)=>{
  const u=people.get(e.user_id);let status:string;
  if(duplicateIndexes.has(index))status='Duplicate ID · ignored';
  else if(!u)status='Unknown user · excluded';
  else if(!selectedIds.has(u.user_id))status='Outside filter';
  else if(!eligibleIds.has(u.user_id))status='Immature cohort · excluded';
  else if(timestamp(e.ts)<=timestamp(u.signup_ts))status='At/before signup · no ordered step';
  else if(timestamp(e.ts)>=timestamp(u.signup_ts)+7*DAY||timestamp(e.ts)>=end)status='Outside half-open window';
  else if(e.name==='feedback') {const p=paths.find(p=>p.user_id===e.user_id);status=p?.practice&&timestamp(e.ts)>timestamp(p.practice)?'Qualifying feedback · unique user':'No earlier practice · excluded';}
  else status='Qualifying practice · unique user';
  return {...e,status,row:index+1};
 }).filter(e=>selectedIds.has(e.user_id)||(!people.has(e.user_id)&&segment==='all'&&cohort==='all'));
 const signups=eligible.length,practice=paths.filter(p=>p.practice!==null).length,feedback=paths.filter(p=>p.feedback!==null).length;
 return {signups,practice,feedback,selected:selected.length,immature:selected.length-signups,paths,audit,rawRows:audit.length,duplicateRows:audit.filter(e=>e.status.startsWith('Duplicate')).length,practiceConversion:ratio(practice,signups),feedbackConversion:ratio(feedback,practice),overallConversion:ratio(feedback,signups)};
}

import fixture from '../data/retention-events.json';
import type {Learner,EventRow} from './funnel';
import {ratio,type Segment} from './metrics';
export const retentionFixture=fixture;
export const DAY_MS=86400000;
function utc(value:string):number {
 if(typeof value!=='string'||!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,3})?Z$/.test(value))throw new Error('Expected valid UTC ISO timestamp.');
 const t=Date.parse(value);
 if(!Number.isFinite(t)||new Date(t).toISOString().slice(0,19)!==value.slice(0,19))throw new Error('Expected valid UTC ISO timestamp.');
 return t;
}
export function analyzeRetention(users:Learner[],events:EventRow[],cutoff:string,segment:Segment='all',cohort='all'){
 const cutoffMs=utc(cutoff);const people=new Map<string,Learner>();
 for(const u of users){utc(u.signup_ts);if(!u.user_id||people.has(u.user_id))throw new Error('User IDs must be unique and nonempty.');if(!['novice','experienced'].includes(u.segment))throw new Error('Invalid segment.');people.set(u.user_id,u);}
 const unique=new Map<string,EventRow>();const duplicates=new Set<number>();
 events.forEach((e,i)=>{utc(e.ts);if(!e.event_id||!['practice','feedback'].includes(e.name))throw new Error('Invalid event ID or activity name.');const prev=unique.get(e.event_id);if(prev){if(prev.user_id!==e.user_id||prev.ts!==e.ts||prev.name!==e.name)throw new Error('Conflicting duplicate event ID.');duplicates.add(i);}else unique.set(e.event_id,e);});
 const cohorts=[...new Set(users.map(u=>u.signup_ts.slice(0,10)))].sort().filter(d=>cohort==='all'||cohort===d).map(date=>{
  const members=users.filter(u=>u.signup_ts.slice(0,10)===date);const selected=members.filter(u=>segment==='all'||u.segment===segment);
  const mature=members.every(u=>utc(u.signup_ts)+8*DAY_MS<=cutoffMs);
  const start=Math.min(...members.map(u=>utc(u.signup_ts)+7*DAY_MS));const end=Math.max(...members.map(u=>utc(u.signup_ts)+8*DAY_MS));
  const retainedIds=mature?selected.filter(u=>[...unique.values()].some(e=>e.user_id===u.user_id&&utc(e.ts)>=utc(u.signup_ts)+7*DAY_MS&&utc(e.ts)<utc(u.signup_ts)+8*DAY_MS&&utc(e.ts)<cutoffMs)).map(u=>u.user_id):[];
  const eligible=mature?selected.length:0;const retained=eligible>0?retainedIds.length:null;
  return {date,mature,start,end,selected:selected.length,eligible,retained,retainedIds,rate:retained===null?null:ratio(retained,eligible)};
 });
 const selectedIds=new Set(users.filter(u=>(segment==='all'||u.segment===segment)&&(cohort==='all'||u.signup_ts.slice(0,10)===cohort)).map(u=>u.user_id));
 const audit=events.map((e,index)=>{
  const user=people.get(e.user_id);const group=user?cohorts.find(c=>c.date===user.signup_ts.slice(0,10)):undefined;let status:string;
  if(duplicates.has(index))status='Duplicate delivery · ignored';
  else if(!user)status='Unknown user · excluded';
  else if(!selectedIds.has(user.user_id))status='Outside filter';
  else if(!group?.mature)status='Right-censored cohort · unavailable';
  else if(utc(e.ts)<utc(user.signup_ts)+7*DAY_MS)status='Before D7 · excluded';
  else if(utc(e.ts)>=utc(user.signup_ts)+8*DAY_MS)status='At/after Day 8 · excluded';
  else status='D7 activity · user counted once';
  return {...e,row:index+1,status};
 }).filter(e=>selectedIds.has(e.user_id)||(!people.has(e.user_id)&&segment==='all'&&cohort==='all'));
 const eligible=cohorts.reduce((n,c)=>n+c.eligible,0);const retained=cohorts.reduce((n,c)=>n+(c.retained??0),0);const selected=cohorts.reduce((n,c)=>n+c.selected,0);
 return {cohorts,eligible,retained,selected,censored:selected-eligible,rate:ratio(retained,eligible),audit,duplicateRows:audit.filter(r=>r.status.startsWith('Duplicate')).length};
}

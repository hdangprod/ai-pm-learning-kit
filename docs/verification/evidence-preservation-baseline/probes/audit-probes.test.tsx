import {it,expect} from 'vitest';
import {render,fireEvent,within,cleanup} from '@testing-library/react';
import fs from 'node:fs';
import App from '../../../../src/App';
import {modules} from '../../../../src/data/modules';
import {groups,gradeByIds} from '../../../../src/lib/assessment';
import {newPracticeDraft,initialPresentationRandom} from '../../../../src/lib/practice';
import {freshDecisionDraft,freshDecisionState,submitDecision,revealChallenge,memoFields} from '../../../../src/lib/decision';
import {buildMemoReviewPacket,memoReviewStatus} from '../../../../src/lib/memoReview';
import {loadProgress,STORAGE_KEY} from '../../../../src/lib/storage';
const evidence=process.cwd()+'/docs/verification/evidence-preservation-baseline';
const results:any[]=[];
const record=(id:string,result:any)=>{results.push({id,...result});fs.writeFileSync(`${evidence}/auditor_component_probes.json`,JSON.stringify(results,null,2));};
const legacy=JSON.parse(fs.readFileSync(process.cwd()+'/docs/verification/remediation-baseline/progress-v1.json','utf8'));

it('AUD-P01: fresh deterministic positional policy M1-5, actual public grading functions',()=>{
 const rows=[];
 for(const m of modules.filter(m=>m.id<=5))for(const stage of ['primary','transfer'] as const){
  const q=m[stage];const d=newPracticeDraft(q,undefined,initialPresentationRandom(q,0));
  const answerIds=groups(q).map(c=>c.find(x=>x.correct)!.id!);
  const first=gradeByIds(q,String(q.expected),d.order.map(g=>g[0]));
  const correct=gradeByIds(q,String(q.expected),answerIds);
  expect(correct.passed).toBe(true);
  rows.push({module:m.id,stage,correctPositions:d.order.map((g,i)=>g.indexOf(answerIds[i])+1),firstPositionPass:first.passed});
 }
 expect(rows.filter(x=>x.stage==='primary'&&x.firstPositionPass).length).toBeLessThan(5);
 record('AUD-P01',{method:'executed pure TypeScript functions; fresh deterministic initial seed',rows});
});
it('AUD-P02: positional M6 full structured completion with placeholder memos remains pending',()=>{
 let state=freshDecisionState();const memo=Object.fromEntries(memoFields.map(k=>[k,k==='checkDate'?'2026-11-25':'x']));
 state.drafts.initial={...freshDecisionDraft(),strategy:'B',reasoning:[0,0,0,0,0],memo} as any;
 state=submitDecision(state,'initial','audit-initial');expect(state.initial?.result.score).toBe(10);
 state=revealChallenge(state,'capacity','audit-change');
 state.drafts.revision={...freshDecisionDraft(),strategy:'B',reasoning:[0,0,0,0,0],memo:{...memo},response:'keep',changed:'x',relevance:'x',contextChoice:0} as any;
 state=submitDecision(state,'revision','audit-revision');
 state.drafts.transfer={...freshDecisionDraft(),strategy:'B',reasoning:[0,0,0,0,0],memo:{...memo},contextChoice:0} as any;
 state=submitDecision(state,'transfer','audit-transfer');expect(state.transfer?.result.passed).toBe(true);
 expect(buildMemoReviewPacket(state,'audit')).toContain(memoReviewStatus);
 record('AUD-P02',{method:'executed state transitions, authored placeholder fixture',stageScores:state.attempts.map(a=>({stage:a.stage,score:a.result.score,passed:a.result.passed})),reviewStatus:memoReviewStatus,interpretation:'Structured checks remain gameable; separate human review is correctly pending, not a semantic pass.'});
});
it('AUD-P03: M6 consumed note rejected until explicitly rebound; repeated literal text is presence-only',()=>{
 let s=freshDecisionState();const memo=Object.fromEntries(memoFields.map(k=>[k,k==='checkDate'?'2026-11-25':'x']));
 s.drafts.initial={...freshDecisionDraft(),strategy:'B',reasoning:[0,2,0,0,0],memo} as any;
 s=submitDecision(s,'initial','first');const first=JSON.stringify(s.attempts[0]);
 s.drafts.initial.reasoningChange='same text';s.drafts.initial.reasoningChangeFor=s.attempts.at(-1)!.id;
 s=submitDecision(s,'initial','second');expect(()=>submitDecision(s,'initial','third')).toThrow(/reasoning/);
 s.drafts.initial.reasoningChangeFor=s.attempts.at(-1)!.id;s=submitDecision(s,'initial','third-reentered');
 expect(JSON.stringify(s.attempts[0])).toBe(first);
 record('AUD-P03',{staleBindingBlocked:true,reenteredIdenticalTextAccepted:true,firstSnapshotUnchanged:true,interpretation:'Fresh record, not proof of new substantive reasoning; disclosed presence-only contract.'});
});
it('AUD-P04: M1 repeated failures require fresh draft note and retain first snapshot',()=>{
 const view=render(<App/>);const ui=within(view.container);
 fireEvent.change(ui.getByLabelText('Primary calculation'),{target:{value:'52'}});fireEvent.click(ui.getByRole('button',{name:'Check my reasoning',exact:true}));
 const first=JSON.stringify(JSON.parse(localStorage.getItem(STORAGE_KEY)!).modules[1].attempts[0]);
 fireEvent.change(ui.getByLabelText('Primary reasoning change'),{target:{value:'same text'}});fireEvent.click(ui.getByRole('button',{name:'Check my reasoning',exact:true}));
 fireEvent.change(ui.getByLabelText('Primary calculation'),{target:{value:'70.27'}});expect(ui.getByRole('button',{name:'Check my reasoning',exact:true})).toBeDisabled();
 const stored=JSON.parse(localStorage.getItem(STORAGE_KEY)!).modules[1];expect(JSON.stringify(stored.attempts[0])).toBe(first);
 fs.writeFileSync(`${evidence}/progress-v2.json`,JSON.stringify({version:1,modules:{...legacy.modules,1:stored}},null,2));
 record('AUD-P04',{method:'executed React/jsdom',newDraftNoteBlank:true,oldNoteNotAutomaticallyReused:true,firstSnapshotUnchanged:true});
});
it('AUD-P05: two independent UI instances lose the first instance history on stale whole-map save',()=>{
 const a=render(<App/>);const b=render(<App/>);const ua=within(a.container),ub=within(b.container);
 fireEvent.change(ua.getByLabelText('Primary calculation'),{target:{value:'52'}});fireEvent.click(ua.getByRole('button',{name:'Check my reasoning',exact:true}));
 const before=JSON.parse(localStorage.getItem(STORAGE_KEY)!);expect(before.modules[1].attempts).toHaveLength(1);
 fireEvent.click(ub.getByRole('button',{name:/Funnel analysis/}));fireEvent.change(b.container.querySelector('textarea#hypothesis')!,{target:{value:'AUTHORED stale second-instance note'}});
 const after=JSON.parse(localStorage.getItem(STORAGE_KEY)!);expect(after.modules[1]).toBeUndefined();
 fs.writeFileSync(`${evidence}/AUD-P05-before-after.json`,JSON.stringify({before,after},null,2));
 record('AUD-P05',{method:'executed React/jsdom with two mounted stateful instances sharing storage; models stale two-tab save',beforeModules:Object.keys(before.modules),afterModules:Object.keys(after.modules),firstAttemptLost:true,source:'src/App.tsx:14-16; src/lib/storage.ts:17'});
});
it('AUD-P06: invalid optional M6 rejects whole store; next edit overwrites valid other modules',()=>{
 const damaged=structuredClone(legacy);damaged.modules[6].decisionRoom.drafts.initial.strategy='INVALID';
 localStorage.setItem(STORAGE_KEY,JSON.stringify(damaged));const loaded=loadProgress();expect(loaded.progress).toEqual({});expect(loaded.warning).toContain('could not be read');
 const before=JSON.parse(localStorage.getItem(STORAGE_KEY)!);expect(Object.keys(before.modules)).toHaveLength(6);
 const v=render(<App/>);fireEvent.change(within(v.container).getByLabelText('What do you expect to find?'),{target:{value:'AUTHORED recovery note'}});
 const after=JSON.parse(localStorage.getItem(STORAGE_KEY)!);expect(Object.keys(after.modules)).toEqual(['1']);
 fs.writeFileSync(`${evidence}/AUD-P06-before-after.json`,JSON.stringify({before,after},null,2));
 record('AUD-P06',{method:'executed component with explicit saved-state fault injection, not a spontaneous corruption report',validOtherRecordsBefore:5,storedModulesAfterEdit:Object.keys(after.modules),unreadableRawStoreInitiallyPreserved:true,subsequentWriteDestructive:true});
});
it('AUD-P07: optional practice draft bypasses validation and crashes Exercise rendering',()=>{
 const malformed=structuredClone(legacy);malformed.modules[1].practiceDrafts={primary:{id:'AUTHORED-invalid',input:'',answers:[],order:[],reasoningChange:''}};
 localStorage.setItem(STORAGE_KEY,JSON.stringify(malformed));expect(loadProgress().warning).toBe('');
 fs.writeFileSync(`${evidence}/AUD-P07-malformed.json`,JSON.stringify(malformed,null,2));expect(()=>render(<App/>)).toThrow();
 record('AUD-P07',{method:'executed saved-state fault injection through actual load and React renderer',loaderWarning:false,renderThrows:true,source:'src/lib/storage.ts:12; src/Exercise.tsx:27',spontaneousOccurrenceObserved:false});
});

import {it,expect} from 'vitest';
import {render,screen,fireEvent,within} from '@testing-library/react';
import {readFileSync} from 'node:fs';
import App from '../src/App';
import {modules} from '../src/data/modules';
import {choiceId,groups,gradeByIds} from '../src/lib/assessment';
import {newPracticeDraft} from '../src/lib/practice';
import {buildLearningExport} from '../src/lib/export';
import {buildMemoReviewPacket,memoReviewStatus} from '../src/lib/memoReview';
import {STORAGE_KEY,loadProgress,resetActivity} from '../src/lib/storage';
import {freshDecisionDraft,freshDecisionState,submitDecision,revealChallenge,type DecisionDraft} from '../src/lib/decision';
const baseline=JSON.parse(readFileSync('docs/verification/remediation-baseline/progress-v1.json','utf8'));
const exported=JSON.parse(readFileSync('docs/verification/remediation-baseline/export-v1.json','utf8'));
it('loads and reexports complete v1 evidence without mutation or relabeling old indices',()=>{
 localStorage.setItem(STORAGE_KEY,JSON.stringify(baseline));const loaded=loadProgress();expect(loaded.warning).toBe('');expect(loaded.progress).toEqual(baseline.modules);
 const out=buildLearningExport(loaded.progress,'now');expect(out.modules).toEqual(exported.modules);
 for(const item of out.evidence){const old=exported.moduleDefinitions.find((m:{id:number})=>m.id===item.moduleId)[item.stage];const attempt=baseline.modules[item.moduleId].attempts.find((a:{at:string})=>a.at===item.at);expect(item.label).toContain('timing unknown');for(const [g,response] of item.responses.entries())expect(response.label).toBe((g===0?old.choices:old.items[g-1].choices)[[attempt.choice,...attempt.extraChoices??[]][g]]??'(not selected)');}
 expect(out.modules[6].decisionRoom.initial).toEqual(baseline.modules[6].decisionRoom.initial);
});
it('IDs are unique and all canonical numeric keys survive option permutations',()=>{
 const all:string[]=[];for(const m of modules.filter(m=>m.id<=5))for(const stage of ['primary','transfer'] as const){const q=m[stage];const ids=groups(q).map(cs=>cs.find(c=>c.correct)!.id!);all.push(...groups(q).flat().map(c=>c.id!));for(const random of [()=>0,()=>.5,()=>.999]){const d=newPracticeDraft(q,undefined,random);expect(gradeByIds(q,String(q.expected),ids).passed).toBe(true);const first=d.order.map(g=>g[0]);expect(gradeByIds(q,String(q.expected),first).passed).toBe(first.every((id,i)=>id===ids[i]));}}
 expect(all.every(Boolean)).toBe(true);expect(new Set(all).size).toBe(all.length);
});
it('first-option policy is unreliable across deterministic independent attempts',()=>{
 let seed=937;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};let passed=0,total=0;
 for(let n=0;n<100;n++)for(const m of modules.filter(m=>m.id<=5)){const q=m.primary,d=newPracticeDraft(q,undefined,random);passed+=Number(gradeByIds(q,String(q.expected),d.order.map(g=>g[0])).passed);total++;}
 expect(passed).toBeGreaterThan(0);expect(passed/total).toBeLessThan(.3);
});
it('new attempts vary ordering while stable IDs retain grading and misconception feedback',()=>{
 const q=modules[0].primary,a=newPracticeDraft(q,undefined,()=>.5),b=newPracticeDraft(q,a,()=>.5);expect(b.order).not.toEqual(a.order);expect(a.order[0]).toHaveLength(3);
 const bad=gradeByIds(q,'70.27',[q.choices[1].id!]);expect(bad.numeric).toBe(true);expect(bad.reasoning).toBe(false);expect(bad.feedback).toContain('26 unassessed');
});
it('draft ordering and selected semantic IDs survive reload; assisted retry requires a new reflection and never overwrites first evidence',()=>{
 const view=render(<App/>);const q=modules[0].primary;fireEvent.change(screen.getByLabelText('Primary calculation'),{target:{value:'52'}});fireEvent.click(screen.getByLabelText(q.choices[0].label));
 const before=JSON.parse(localStorage.getItem(STORAGE_KEY)!).modules[1].practiceDrafts.primary;view.unmount();const again=render(<App/>);const after=JSON.parse(localStorage.getItem(STORAGE_KEY)!).modules[1].practiceDrafts.primary;expect(after).toEqual(before);expect(screen.getByLabelText(q.choices[0].label)).toBeChecked();
 fireEvent.click(screen.getByRole('button',{name:'Check my reasoning'}));const first=JSON.parse(localStorage.getItem(STORAGE_KEY)!).modules[1].attempts[0];expect(first.assistance.kind).toBe('initial_unaided');expect(screen.getByRole('button',{name:'Check my reasoning'})).toBeDisabled();
 fireEvent.click(screen.getByRole('button',{name:'Reveal solution after an attempt'}));fireEvent.click(screen.getByRole('button',{name:'Hide solution'}));fireEvent.change(screen.getByLabelText('Primary calculation'),{target:{value:'70.27'}});expect(screen.getByRole('button',{name:'Check my reasoning'})).toBeDisabled();
 fireEvent.change(screen.getByLabelText('Primary reasoning change'),{target:{value:'I had used eligible users, but this question conditions on assessed users.'}});fireEvent.click(screen.getByRole('button',{name:'Check my reasoning'}));const work=JSON.parse(localStorage.getItem(STORAGE_KEY)!).modules[1];expect(work.attempts).toHaveLength(2);expect(work.attempts[0]).toEqual(first);expect(work.attempts[1].assistance.kind).toBe('after_solution');expect(work.attempts[1].presentation).not.toEqual(first.presentation);
 const out=buildLearningExport({1:work},'now');expect(out.evidence[1].responses[0]).toMatchObject({id:q.choices[0].id,label:q.choices[0].label});again.unmount();
});
const baseMemo:DecisionDraft={...freshDecisionDraft(),strategy:'B',reasoning:[0,0,0,0,0],memo:{decision:'Prepare a bounded invented risk-email rehearsal with the configured incumbent, not deployment.',evidence:'Secondary reports suggest hypotheses; weekly figures are synthetic, not market validation.',uncertainty:'Actual residual gaps, rights and delayed unaided performance are unknown.',alternatives:'Compare incumbent rehearsal (2E/4R) with reduced audit (0E/2R); bespoke prototype remains an alternative after a demonstrated gap.',comparator:'Same risk-email job, predefined correctness rubric and effort limit, baseline and configured incumbent.',nextStep:'Research owner prepares invented tasks and a protocol; request permission before any participant activity.',owner:'Research owner',checkDate:'2026-11-25',stopRule:'At next check, stop bespoke preparation if incumbent meets all rubric conditions within 10 minutes; otherwise audit errors before a separately authorized study.'}};
const cases=[
 ['strong',baseMemo],
 ['contradictory',{...baseMemo,memo:{...baseMemo.memo,decision:'Launch globally because increased sessions prove AI caused English gains.',evidence:'The synthetic data validates real customer demand and unique unmet need.'}}],
 ['plausible but weak',{...baseMemo,memo:{...baseMemo.memo,nextStep:'Research it more.',stopRule:'Stop if it is bad.'}}],
 ['placeholder',{...baseMemo,memo:Object.fromEntries(Object.keys(baseMemo.memo).map(k=>[k,k==='checkDate'?'2026-11-25':'x'])) as DecisionDraft['memo']}],
 ['unusual defensible',{...baseMemo,strategy:'D' as const,plan:'reduced' as const,memo:{...baseMemo.memo,decision:'Defer prototype work; first audit the unknown task definition and source rights.',nextStep:'Within 0E/2R, compare task-definition audit against 2E/4R incumbent rehearsal. Preserve unknowns and request authorization before fieldwork.'}}],
 ['justified unchanged',baseMemo]
] as const;
it.each(cases)('keeps %s memo pending even when selected statements score10; packet preserves text',(_,draft)=>{
 let s=freshDecisionState();s.drafts.initial=structuredClone(draft);s=submitDecision(s,'initial','now');expect(s.initial?.result.score).toBe(10);expect(s.initial?.result.passed).toBe(true);
 if(_==='justified unchanged'){s=revealChallenge(s,'capacity','later');s.drafts.revision={...structuredClone(draft),response:'keep',changed:'Engineering capacity is2h.',relevance:'Listed incumbent rehearsal requires2E and still fits; keep direction and compare same-job outcome.',contextChoice:0};s=submitDecision(s,'revision','later');expect(s.revised?.draft.response).toBe('keep');}
 const packet=buildMemoReviewPacket(s,'now');expect(packet).toContain(memoReviewStatus);expect(packet).toContain(draft.memo.decision);expect(packet).toContain('Critical errors');expect(packet).toContain('Structured result (separate from memo review): 10/10');
});
it('Module6 retry guard records assistance and freezes original failed memo, without changing structured grading',()=>{
 let s=freshDecisionState();s.drafts.initial={...structuredClone(baseMemo),reasoning:[0,2,0,0,0]};s=submitDecision(s,'initial','first');const first=structuredClone(s.attempts[0]);s.consulted.initial=true;s.drafts.initial=structuredClone(baseMemo);expect(()=>submitDecision(s,'initial','second')).toThrow(/reasoning/);s.drafts.initial.reasoningChangeFor=first.id;s.drafts.initial.reasoningChange='I removed the causal claim and separated synthetic evidence from market research.';s=submitDecision(s,'initial','second');expect(s.attempts[0]).toEqual(first);expect(s.initial?.assistance?.kind).toBe('after_solution');expect(s.initial?.result.score).toBe(10);
});
it('all-module legacy reset remains scoped and pending review is visible without completing Module6',()=>{
 localStorage.setItem(STORAGE_KEY,JSON.stringify(baseline));render(<App/>);fireEvent.click(screen.getByRole('button',{name:/Decision simulation/}));expect(screen.getByRole('heading',{name:memoReviewStatus})).toBeVisible();expect(screen.getByRole('button',{name:'Export independent memo review packet'})).toBeVisible();const next=resetActivity(baseline.modules,6);expect(next[6]).toBeUndefined();for(let i=1;i<=5;i++)expect(next[i]).toEqual(baseline.modules[i]);expect(within(screen.getByRole('region',{name:'Independent memo review'})).getByText(/not proof/)).toBeVisible();
});

it('requires a fresh reflection for every Module6 assisted attempt, including repeated failures',()=>{let s=freshDecisionState();s.drafts.initial={...structuredClone(baseMemo),reasoning:[0,2,0,0,0]};s=submitDecision(s,'initial','first');s.drafts.initial.reasoningChange='I checked the evidence scope.';s.drafts.initial.reasoningChangeFor=s.attempts[0].id;s=submitDecision(s,'initial','second');expect(s.attempts).toHaveLength(2);expect(()=>submitDecision(s,'initial','third')).toThrow(/reasoning/);});

it('semantic grading survives actual array reordering, not just shuffled display IDs',()=>{for(const m of modules.filter(m=>m.id<=5))for(const stage of ['primary','transfer'] as const){const q=m[stage],ids=groups(q).map(c=>c.find(x=>x.correct)!.id!);const reordered={...q,choices:[...q.choices].reverse(),items:q.items?.map(i=>({...i,choices:[...i.choices].reverse()}))};expect(gradeByIds(reordered,String(q.expected),ids)).toEqual(gradeByIds(q,String(q.expected),ids));}});
it('ordinary feedback retry remains distinguishable from solution-assisted retry',()=>{render(<App/>);fireEvent.change(screen.getByLabelText('Primary calculation'),{target:{value:'52'}});fireEvent.click(screen.getByRole('button',{name:'Check my reasoning'}));fireEvent.change(screen.getByLabelText('Primary reasoning change'),{target:{value:'I will choose an interpretation and review the denominator.'}});fireEvent.click(screen.getByRole('button',{name:'Check my reasoning'}));const attempts=JSON.parse(localStorage.getItem(STORAGE_KEY)!).modules[1].attempts;expect(attempts[0].assistance.kind).toBe('initial_unaided');expect(attempts[1].assistance.kind).toBe('after_feedback');expect(attempts[1].assistance.solutionConsulted).toBe(false);});

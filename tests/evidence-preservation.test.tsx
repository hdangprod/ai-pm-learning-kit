import {it,expect,vi,afterEach} from 'vitest';
import {render,within,fireEvent,screen} from '@testing-library/react';
import {StrictMode} from 'react';
import {readFileSync} from 'node:fs';
import App from '../src/App';
import {freshWork,loadProgress,writeProgress,clearProgress,adoptRecovery,StorageController,buildRawRecoveryExport,STORAGE_KEY,type Progress,type StorageOutcome,type LockRunner} from '../src/lib/storage';
import {newPracticeDraft,isPracticeDraft} from '../src/lib/practice';
import {modules} from '../src/data/modules';
import {buildLearningExport} from '../src/lib/export';
const legacy=JSON.parse(readFileSync('docs/verification/evidence-preservation-baseline/progress-v1.json','utf8'));
const semantic=JSON.parse(readFileSync('docs/verification/evidence-preservation-baseline/progress-v2.json','utf8'));
afterEach(()=>vi.restoreAllMocks());
const put=(value:unknown)=>{const raw=JSON.stringify(value);localStorage.setItem(STORAGE_KEY,raw);return raw;};
const lock:LockRunner=action=>{action();return Promise.resolve();};
it.each([legacy,semantic])('reads valid v1 and semantic-ID v2 fixtures without rewrite, regrade or pending recovery',fixture=>{const raw=put(fixture),loaded=loadProgress();expect(loaded.progress).toEqual(fixture.modules);expect(loaded.recovery).toBe(false);expect(loaded.warning).toBe('');expect(localStorage.getItem(STORAGE_KEY)).toBe(raw);expect(buildLearningExport(loaded.progress,'now').modules).toEqual(fixture.modules);});
it('AUD-P05 component: stale M2 edit cannot overwrite first M1 attempt; visible conflict and explicit reload',()=>{
 const a=render(<App/>),b=render(<App/>),ua=within(a.container),ub=within(b.container);
 fireEvent.change(ua.getByLabelText('Primary calculation'),{target:{value:'52'}});fireEvent.click(ua.getByRole('button',{name:'Check my reasoning'}));const before=localStorage.getItem(STORAGE_KEY)!;
 fireEvent.click(ub.getByRole('button',{name:/Funnel analysis/}));fireEvent.change(b.container.querySelector('textarea#hypothesis')!,{target:{value:'AUTHORED stale M2 hypothesis'}});
 expect(localStorage.getItem(STORAGE_KEY)).toBe(before);expect(JSON.parse(before).modules[1].attempts).toHaveLength(1);expect(ub.getByRole('status')).toHaveTextContent('Storage conflict');expect(b.container.querySelector('textarea#hypothesis')!).toHaveValue('AUTHORED stale M2 hypothesis');expect(ub.getByRole('button',{name:'Reset progress'})).toBeDisabled();
 fireEvent.click(ub.getByRole('button',{name:'Reload latest saved work (discard unsaved edits)'}));expect(ub.queryByRole('status')).not.toBeInTheDocument();expect(localStorage.getItem(STORAGE_KEY)).toBe(before);fireEvent.change(b.container.querySelector('textarea#hypothesis')!,{target:{value:'Fresh M2 edit after explicit reload'}});const next=JSON.parse(localStorage.getItem(STORAGE_KEY)!);expect(next.modules[1]).toEqual(JSON.parse(before).modules[1]);expect(next.modules[2].hypothesis).toBe('Fresh M2 edit after explicit reload');
});
it('revision mismatch rejects saves and clears, including a legacy envelope without revision',()=>{
 const raw=put(legacy),a=loadProgress(),b=loadProgress();expect(a.raw).toBe(raw);const next={...a.progress,1:{...a.progress[1],journal:'A writes'}};
 const saved=writeProgress(next,a.raw);expect(saved.ok).toBe(true);expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!).revision).toEqual(expect.any(String));const committed=localStorage.getItem(STORAGE_KEY);expect(writeProgress(b.progress,b.raw)).toMatchObject({ok:false,kind:'conflict'});expect(clearProgress(b.raw)).toMatchObject({ok:false,kind:'conflict'});expect(localStorage.getItem(STORAGE_KEY)).toBe(committed);
});
it('origin lock serializes queued controller checks: stale writer rejects, every subsequent write remains blocked',()=>{
 const queue:(()=>void)[]=[];const deferred:LockRunner=action=>{queue.push(action);return Promise.resolve();};const a=new StorageController(loadProgress(),deferred),b=new StorageController(loadProgress(),deferred);const outcomes:StorageOutcome[]=[];
 a.run({1:freshWork()},r=>outcomes.push(r));b.run({2:freshWork()},r=>outcomes.push(r));queue.shift()!();const afterA=localStorage.getItem(STORAGE_KEY);queue.shift()!();expect(outcomes[0].ok).toBe(true);expect(outcomes[1]).toMatchObject({kind:'conflict'});expect(localStorage.getItem(STORAGE_KEY)).toBe(afterA);b.run({3:freshWork()},r=>outcomes.push(r));queue.shift()!();expect(outcomes[2]).toMatchObject({kind:'conflict'});expect(localStorage.getItem(STORAGE_KEY)).toBe(afterA);
});
it('multiple queued updates from one session advance its revision without false self-conflicts',()=>{
 const c=new StorageController(loadProgress(),lock),results:StorageOutcome[]=[];
 c.run({1:{...freshWork(),journal:'one'}},r=>results.push(r));c.run({1:{...freshWork(),journal:'two'}},r=>results.push(r));expect(results.every(r=>r.ok)).toBe(true);expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!).modules[1].journal).toBe('two');
});
it('missing or failed lock fails closed without an unsafe fallback write',async()=>{
 const raw=put(legacy),c=new StorageController(loadProgress(),()=>Promise.reject(Error('unavailable')));let result:StorageOutcome|undefined;c.run({},r=>{result=r;});await Promise.resolve();expect(result).toMatchObject({ok:false,kind:'unsupported'});expect(localStorage.getItem(STORAGE_KEY)).toBe(raw);
});
it('disposed sessions cannot save after an explicit reload/unmount',()=>{let action=()=>{};const c=new StorageController(loadProgress(),run=>{action=run;return Promise.resolve();});c.run({1:freshWork()},()=>{throw Error('disposed callback');});c.dispose();action();expect(localStorage.getItem(STORAGE_KEY)).toBeNull();});
it('AUD-P06 component: invalid M6 draft preserves all six histories and raw store during M1 edits',()=>{
 const damaged=structuredClone(legacy);damaged.modules[6].decisionRoom.drafts.initial.strategy='INVALID';const raw=put(damaged),loaded=loadProgress();expect(loaded.recovery).toBe(true);expect(Object.keys(loaded.progress)).toHaveLength(6);
 for(let i=1;i<=5;i++)expect(loaded.progress[i]).toEqual(legacy.modules[i]);expect(loaded.progress[6].decisionRoom!.attempts).toEqual(legacy.modules[6].decisionRoom.attempts);expect(loaded.progress[6].decisionRoom!.initial).toEqual(legacy.modules[6].decisionRoom.initial);
 render(<App/>);fireEvent.change(screen.getByLabelText('What do you expect to find?'),{target:{value:'AUTHORED session-only edit while recovery unresolved'}});expect(localStorage.getItem(STORAGE_KEY)).toBe(raw);expect(screen.getByRole('status')).toHaveTextContent('Autosave is paused');expect(screen.getByRole('button',{name:'Export raw recovery record'})).toBeVisible();expect(screen.getByRole('button',{name:'Use recovered valid work'})).toBeDisabled();expect(screen.getByRole('button',{name:'Reset progress'})).toBeDisabled();
});
it('AUD-P07 component: malformed presentation order is isolated without render crash or deleting submitted first attempt',()=>{
 const damaged=structuredClone(semantic);damaged.modules[1].practiceDrafts.primary.order=[];const raw=put(damaged);const loaded=loadProgress();expect(loaded.recovery).toBe(true);expect(loaded.progress[1].attempts).toEqual(semantic.modules[1].attempts);expect(loaded.progress[1].practiceDrafts?.primary).toBeUndefined();expect(()=>render(<App/>)).not.toThrow();expect(screen.getByLabelText('Primary calculation')).toBeVisible();expect(screen.getByRole('status')).toHaveTextContent('Autosave is paused');expect(localStorage.getItem(STORAGE_KEY)).toBe(raw);
});
it('isolates a malformed module while preserving every valid independent history',()=>{const damaged=structuredClone(legacy);damaged.modules[6]=null;const raw=put(damaged),loaded=loadProgress();expect(loaded.recovery).toBe(true);expect(loaded.progress[6]).toBeUndefined();for(let i=1;i<=5;i++)expect(loaded.progress[i]).toEqual(legacy.modules[i]);expect(buildRawRecoveryExport(loaded).raw).toBe(raw);expect(writeProgress({},raw)).toMatchObject({kind:'recovery'});expect(localStorage.getItem(STORAGE_KEY)).toBe(raw);});
it.each(['broken','null','{"version":99,"modules":{}}'])('unreadable envelope %s never automatically becomes a persisted empty map',raw=>{localStorage.setItem(STORAGE_KEY,raw);const source=loadProgress();expect(source.recovery).toBe(true);expect(source.progress).toEqual({});expect(writeProgress({},raw)).toMatchObject({kind:'recovery'});expect(clearProgress(raw)).toMatchObject({kind:'recovery'});expect(adoptRecovery({},source,false)).toMatchObject({kind:'recovery'});expect(buildRawRecoveryExport(source).raw).toBe(raw);expect(localStorage.getItem(STORAGE_KEY)).toBe(raw);});
it('acknowledged recovery makes a byte-exact separate backup before adopting valid histories',()=>{
 const damaged=structuredClone(semantic);damaged.modules[1].practiceDrafts.primary.order=[];const raw=put(damaged),source=loadProgress();expect(adoptRecovery(source.progress,source,false).ok).toBe(false);expect(localStorage.getItem(STORAGE_KEY)).toBe(raw);const result=adoptRecovery(source.progress,source,true);expect(result.ok).toBe(true);const backup=Object.keys(localStorage).filter(k=>k.startsWith('ai-pm-lab:recovery:'));expect(backup).toHaveLength(1);expect(localStorage.getItem(backup[0])).toBe(raw);expect(loadProgress().recovery).toBe(false);expect(loadProgress().progress[1].attempts).toEqual(semantic.modules[1].attempts);expect(loadProgress().progress[6]).toEqual(semantic.modules[6]);
 // Avoid leaking recovery keys into other authored unit cases.
 localStorage.removeItem(backup[0]);
});
it('backup failure or newer stored revision prevents destructive recovery adoption',()=>{
 const damaged=structuredClone(legacy);damaged.modules[6]=null;const raw=put(damaged),source=loadProgress();const spy=vi.spyOn(Storage.prototype,'setItem').mockImplementation(()=>{throw Error('quota');});expect(adoptRecovery(source.progress,source,true)).toMatchObject({kind:'unavailable'});expect(localStorage.getItem(STORAGE_KEY)).toBe(raw);spy.mockRestore();put(legacy);const latest=localStorage.getItem(STORAGE_KEY);expect(adoptRecovery(source.progress,source,true)).toMatchObject({kind:'conflict'});expect(localStorage.getItem(STORAGE_KEY)).toBe(latest);
});
const q=modules[3].primary;
const valid=()=>newPracticeDraft(q);
it('valid complete and partial unanswered drafts are accepted by group identity; no coercion',()=>{const d=valid();expect(isPracticeDraft(d,q)).toBe(true);d.answers=[null,q.items![0].choices[0].id!];expect(isPracticeDraft(d,q)).toBe(true);expect(isPracticeDraft({...d,answers:['',q.items![0].choices[0].id!]},q)).toBe(true);});
const mutations:Record<string,(d:ReturnType<typeof valid>)=>void>={
 'empty order':d=>{d.order=[];},'missing group':d=>{d.order.pop();},'missing option':d=>{d.order[0].pop();},'duplicate ID':d=>{d.order[0][1]=d.order[0][0];},'unknown ID':d=>{d.order[0][0]='not-an-option';},'wrong group':d=>{[d.order[0],d.order[1]]=[d.order[1],d.order[0]];},'invalid selected ID':d=>{d.answers=['not-an-option'];},'selected ID from other group':d=>{d.answers=[d.order[1][0]];},'extra answer group':d=>{d.answers=Array(20).fill('');},'wrong input type':d=>{(d as unknown as Record<string,unknown>).input=42;},'wrong reflection type':d=>{(d as unknown as Record<string,unknown>).reasoningChange=[];},'blank draft identity':d=>{d.id='';},'non-array presentation group':d=>{(d.order as unknown[])[0]={};},'number selected value':d=>{(d.answers as unknown[])[0]=0;}
};
it.each(Object.entries(mutations))('strict optional draft validation: %s',(_,mutate)=>{const d=valid();mutate(d);expect(isPracticeDraft(d,q)).toBe(false);});
it.each([null,[],{},'bad',42])('rejects incompatible practiceDrafts container %j without discarding history',value=>{const data=structuredClone(legacy);data.modules[1].practiceDrafts=value;put(data);const loaded=loadProgress();if(value&&typeof value==='object'&&!Array.isArray(value)&&!Object.keys(value).length){expect(loaded.recovery).toBe(false);}else expect(loaded.recovery).toBe(true);expect(loaded.progress[1].attempts).toEqual(legacy.modules[1].attempts);});
it('React StrictMode mount replay does not dispose the active writer',()=>{render(<StrictMode><App/></StrictMode>);fireEvent.change(screen.getByLabelText('What do you expect to find?'),{target:{value:'StrictMode test note'}});expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!).modules[1].hypothesis).toBe('StrictMode test note');});

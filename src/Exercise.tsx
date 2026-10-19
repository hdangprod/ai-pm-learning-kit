import {attemptEvidence} from './lib/attemptEvidence';
import {useState} from 'react';
import {ArrowRight, CheckCircle2, Eye, RotateCcw} from 'lucide-react';
import {gradeByIds,groups,choiceId,type Question,type Result} from './lib/assessment';
import {newPracticeDraft,initialPresentationRandom,assistance,evidenceLabel,type PracticeDraft} from './lib/practice';
import type {Module} from './data/modules';
import type {Work} from './lib/storage';
function QuestionForm({question,work,update,stage}:{question:Question;work:Work;update:(w:Work)=>void;stage:'primary'|'transfer'}) {
 const [initial]=useState(()=>newPracticeDraft(question,undefined,initialPresentationRandom(question,work.attempts.length)));
 const draft=work.practiceDrafts?.[stage]??initial;
 const attempts=work.attempts.filter(a=>a.stage===stage),last=attempts.at(-1);
 const closed=!!last&&last.id===draft.id;
 const [result,setResult]=useState<Result|null>(null);
 const edit=(patch:Partial<PracticeDraft>)=>{const next={...(closed?newPracticeDraft(question,draft):draft),...patch};setResult(null);update({...work,practiceDrafts:{...work.practiceDrafts,[stage]:next}});};
 const retry=attempts.length>0;
 const submit=()=>{
  if(closed||retry&&!draft.reasoningChange.trim())return;
  const r=gradeByIds(question,draft.input,draft.answers);setResult(r);
  const indices=groups(question).map((choices,g)=>choices.findIndex((c,i)=>choiceId(c,i)===draft.answers[g]));
  const snapshot=structuredClone(draft);
  update({...work,attempts:[...work.attempts,{id:snapshot.id,assessmentVersion:2,at:new Date().toISOString(),stage,input:snapshot.input,choice:indices[0],...(indices.length>1?{extraChoices:indices.slice(1)}:{}),responseIds:snapshot.answers,presentation:snapshot.order,assistance:assistance(work.attempts.length>0,work.revealed,snapshot.reasoningChange),result:r,...(work.interpretation!==undefined?{interpretation:work.interpretation}:{})}],primaryPassed:work.primaryPassed||(stage==='primary'&&r.passed),complete:work.complete||(stage==='transfer'&&r.passed)});
 };
 const title=stage==='primary'?'Primary':'Transfer';
 return <form onSubmit={e=>{e.preventDefault();submit();}}>
 <h3>{question.prompt}</h3><p className="scope-note">Exercise scope is fixed as stated above, independent of explorer filters. Options vary for new attempts; your saved ordering stays fixed during an attempt.</p>
 {question.expected!==undefined&&<label className="answer-label">Your calculation ({question.unit})<div className="number-input"><input aria-label={`${title} calculation`} type="text" inputMode="decimal" value={draft.input} placeholder="e.g. 65.50" onChange={e=>edit({input:e.target.value})}/><span>{question.unit}</span></div></label>}
 {groups(question).map((choices,g)=><fieldset key={g}><legend>{g===0?question.reasonPrompt:question.items![g-1].prompt}</legend>{draft.order[g].map(id=>{const c=choices.find((c,i)=>choiceId(c,i)===id)!;return <label className={`choice ${draft.answers[g]===id?'selected':''}`} key={id}><input type="radio" name={`${stage}-${g}`} value={id} checked={draft.answers[g]===id} onChange={()=>{const answers=[...draft.answers];answers[g]=id;edit({answers});}}/><span>{c.label}</span></label>;})}</fieldset>)}
 {retry&&<label className="retry-reflection">What changed in your reasoning? ({title})<textarea aria-label={`${title} reasoning change`} value={closed?'':draft.reasoningChange} onChange={e=>edit({reasoningChange:e.target.value})}/><span className="scope-note">Required before retry after feedback. Nonblank presence is recorded, not semantically graded. Feedback and instructor guidance remain available.</span></label>}
 <button className="primary" type="submit" disabled={retry&&(closed||!draft.reasoningChange.trim())}>Check {stage==='primary'?'my reasoning':'transfer answer'} <ArrowRight size={16}/></button>
 {result&&<div role="status" className={`feedback ${result.passed?'success':'retry'}`}><strong>{result.passed?'Practice check passed':'Let’s revisit the evidence'}</strong><p>{result.feedback}</p></div>}
 </form>;
}
export default function Exercise({module,work,update,onResetActivity}:{module:Module;work:Work;update:(w:Work)=>void;onResetActivity?:()=>void}) {
 const [confirmActivityReset,setConfirmActivityReset]=useState(false);
 const [transferOpen,setTransferOpen]=useState(false);const[solutionOpen,setSolutionOpen]=useState(false);
 const canReveal=work.attempts.length>0&&(!module.reflectionPrompt||((work.interpretation??'').trim().length>0&&work.attempts.some(a=>a.stage==='primary'&&a.choice>=0&&(module.primary.items??[]).every((item,i)=>item.choices[a.extraChoices?.[i]??-1]!==undefined))));
 return <section className="panel exercise" aria-label="Practice exercise"><div className="section-label"><span className="dot"/> APPLY YOUR JUDGMENT <span className="tag">Guided practice</span></div>
 {module.reflectionPrompt&&<div className="reflection"><label htmlFor="cohort-interpretation">{module.reflectionPrompt}</label><textarea id="cohort-interpretation" value={work.interpretation??''} onChange={e=>update({...work,interpretation:e.target.value})} placeholder="One possible explanation is… To distinguish it, I would check…"/><p className="scope-note">{module.reflectionHelp??'Saved reflection, not automatically graded. Before revealing the instructor explanation, write a tentative explanation and submit both an interpretation and a next-investigation choice.'}</p></div>}
 <QuestionForm question={module.primary} work={work} update={update} stage="primary"/>
 <div className="exercise-footer"><span>{work.attempts.length} saved attempt{work.attempts.length===1?'':'s'}</span><button className="text-button" disabled={!canReveal} onClick={()=>{setSolutionOpen(!solutionOpen);if(!work.revealed)update({...work,revealed:true});}}><Eye size={15}/>{solutionOpen?'Hide solution':'Reveal solution after an attempt'}</button></div>
 {solutionOpen&&<aside className="solution"><strong>Instructor explanation</strong><p>{module.primary.solution}</p><small>Solution consulted. Completion indicates practice, not independent mastery.</small></aside>}
 {work.primaryPassed&&<div className="transfer"><button className="secondary" onClick={()=>setTransferOpen(!transferOpen)}>{work.complete?<CheckCircle2 size={17}/>:<RotateCcw size={17}/>} {transferOpen?'Close transfer check':'Try a different question'}</button>{transferOpen&&<p className="scope-note">Same-case transfer practice · this uses the taught fixture, not an independent unseen assessment.</p>}{transferOpen&&<QuestionForm question={module.transfer} work={work} update={update} stage="transfer"/>}</div>}
 <details className="attempt-evidence"><summary>Practice evidence · first responses and assistance</summary><p>Completion is guided practice, not independent assessment success. Historical assistance timing cannot be reconstructed.</p>{work.attempts.map((a,i)=><div key={i}><strong>{i+1}. {a.stage} · {evidenceLabel(a.assistance)}</strong><ul>{attemptEvidence(module.id,a).responses.map((r,g)=><li key={g}>{r.label}</li>)}</ul><p>{a.at} · calculation: {a.input||'(blank)'} · {a.result.passed?'practice check passed':'retry'}{a.assistance?.reasoningChange&&` · Reasoning change: ${a.assistance.reasoningChange}`}</p></div>)}</details>
 {work.complete&&<p className="completion"><CheckCircle2 size={18}/> Practice verified. Revisit on a new case before claiming mastery.</p>}
 {onResetActivity&&<div className="activity-reset"><button className="text-button" onClick={()=>setConfirmActivityReset(!confirmActivityReset)}>Reset this activity</button>{confirmActivityReset&&<div><p>Clear this module’s saved hypothesis, journal, interpretation and attempts? Other modules keep their history. Explorer selections are session-only.</p><button className="secondary" onClick={onResetActivity}>Reset this activity only</button> <button className="text-button" onClick={()=>setConfirmActivityReset(false)}>Keep this activity</button></div>}</div>}
 </section>;
}

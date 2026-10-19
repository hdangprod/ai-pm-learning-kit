#!/usr/bin/env python3
"""Offline moderator workflow. Never place its output in public/, src/ or dist/. No network."""
import argparse, datetime, hashlib, json, pathlib, re, shutil
ROOT=pathlib.Path(__file__).resolve().parents[1]
SOURCE=ROOT/'docs/educational-audit/UNSEEN_TRANSFER_EXERCISES.md'

def private_path(value):
    p=pathlib.Path(value).resolve()
    for forbidden in [ROOT/'public',ROOT/'src',ROOT/'dist',ROOT/'node_modules']:
        if p==forbidden or forbidden in p.parents: raise ValueError('Assessment artifacts must stay outside application assets.')
    return p

def forms():
    text=SOURCE.read_text(); out={}
    for form in 'ABC':
        match=re.search(r'## Form '+form+r'[^\n]*\n(.*?)(?=\n## Form |\Z)',text,re.S)
        body=match.group(1)
        task=re.search(r'### M6'+form+r'.*',body,re.S).group(0)
        # Keep changed information sealed until immutable v1 has been captured.
        mark=re.search(r'\n(?:Sau khi khóa memo v1|Khóa v1 rồi nhận change card)',task)
        if not mark: raise ValueError('Missing change-card boundary')
        card=task[mark.start():].strip()
        body=body.replace(task,task[:mark.start()]+'\n\nAfter locking memo v1, ask the moderator for the sealed change card. Do not revise the initial artifact.\n')
        out[form]=(body,card)
    return out

def create(args):
    p=private_path(args.output)
    if p.exists():raise ValueError('Use a new session directory; never overwrite saved responses.')
    p.mkdir(parents=True); learner=p/'learner';learner.mkdir()
    body,card=forms()[args.form]
    (learner/'assigned-form.md').write_text('# Assigned form '+args.form+'\n\nSynthetic auditor-authored assessment, not market evidence. Calculator/blank spreadsheet allowed; no AI, app, notes, internet or answer keys. Write in Vietnamese or English. Provisional 45 minutes total: 6 each for M1–5, 15 for M6 including revision. Record unfinished work at time limit.\n\n'+body)
    (p/'sealed-change-card.md').write_text(card+'\n')
    for filename,content in [('responses.md','# Written responses — preserve original work\n\n'+''.join(f'## M{i}{args.form}\nCalculation, unit, scope, conclusion, limits, next check:\n\n' for i in range(1,6))),('calculations.csv','task_id,numerator,denominator,window,formula,result,unit,assumptions\n'),('memo-v1.md','# Initial memo\n\n'),('memo-revision.md','# Revised or reaffirmed memo\n\n')]:
        (learner/filename).write_text(content)
    now=datetime.datetime.now(datetime.timezone.utc).isoformat()
    manifest={'version':1,'participant_id':args.participant,'form':args.form,'task_ids':[f'M{i}{args.form}' for i in range(1,7)],'task_version':'EQ-PILOT-1.0','timepoint':args.timepoint,'created_at':now,'previously_seen_form':args.seen_form,'previously_seen_answers':args.seen_answers,'independent_unseen_eligible':args.seen_form=='no' and args.seen_answers=='no','status':'not_started','started_at':None,'ended_at':None,'break_seconds':0,'time_limit_minutes':45,'hints':[],'external_tools':[],'contamination_note':'','missing_reason':'','source_sha256':hashlib.sha256(SOURCE.read_bytes()).hexdigest(),'initial_memo_locked':False,'artifacts':{'responses':'learner/responses.md','calculations':'learner/calculations.csv','initial_memo':'learner/memo-v1.md','locked_initial_memo':'memo-v1-locked.md','revision':'learner/memo-revision.md'},'review_status':'Pending independent review','reviewer_1_dimensions':None,'reviewer_2_dimensions':None,'critical_flags':[],'adjudication':None}
    (p/'session.json').write_text(json.dumps(manifest,indent=2)+'\n')
    (p/'reviewer-worksheet.md').write_text('# Independent reviewer worksheet\n\nPending independent review. Use anonymous response artifacts, not app completion or points.\n\n'+''.join(f'## M{i}{args.form}\nReviewer 1 dimensions / quotes / critical flags: ____\nReviewer 2 dimensions / quotes / critical flags: ____\nAdjudication / disagreement: ____\n\n' for i in range(1,7)))
    print('Created one assigned form. Deliver only the learner directory; retain session.json, worksheet and sealed card with the moderator.')

def lock(args):
    p=private_path(args.session); m=json.loads((p/'session.json').read_text()); src=p/'learner/memo-v1.md'; data=src.read_bytes()
    if m['initial_memo_locked'] or (p/'memo-v1-locked.md').exists():raise ValueError('Memo v1 is already locked; original evidence will not be overwritten.')
    if not data.decode().replace('# Initial memo','').strip():raise ValueError('Write the initial memo before requesting the change card.')
    with (p/'memo-v1-locked.md').open('xb') as f:f.write(data)
    m.update(initial_memo_locked=True,initial_memo_sha256=hashlib.sha256(data).hexdigest(),initial_memo_locked_at=datetime.datetime.now(datetime.timezone.utc).isoformat())
    (p/'session.json').write_text(json.dumps(m,indent=2)+'\n')
    shutil.copyfile(p/'sealed-change-card.md',p/'learner/released-change-card.md')
    print('Initial memo archived and hashed. Assigned change card released; original memo remains separate from revision.')

def main():
    parser=argparse.ArgumentParser(description=__doc__); commands=parser.add_subparsers(dest='command',required=True)
    c=commands.add_parser('create');c.add_argument('--form',choices=list('ABC'),required=True);c.add_argument('--timepoint',choices=['baseline','immediate_post','delayed'],required=True);c.add_argument('--participant',required=True);c.add_argument('--seen-form',choices=['yes','no','unknown'],required=True);c.add_argument('--seen-answers',choices=['yes','no','unknown'],required=True);c.add_argument('--output',required=True);c.set_defaults(run=create)
    l=commands.add_parser('lock-initial');l.add_argument('--session',required=True);l.set_defaults(run=lock)
    a=parser.parse_args();a.run(a)
if __name__=='__main__':main()

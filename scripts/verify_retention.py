"""Independent standard-library oracle: per-user relative-day grouping, no app imports."""
import json,datetime,hashlib,copy
from pathlib import Path
root=Path(__file__).resolve().parents[1]
f=json.loads((root/'public/data/retention-events-v1.json').read_text())
def ts(value):return datetime.datetime.fromisoformat(value.replace('Z','+00:00'))
def calculate(data,segment='all'):
 observed=ts(data['cutoff']);groups={}
 for u in data['users']:groups.setdefault(u['signup_ts'][:10],[]).append(u)
 unique={e['event_id']:e for e in data['events']}
 result={}
 for d,users in groups.items():
  mature=all(ts(u['signup_ts'])+datetime.timedelta(days=8)<=observed for u in users)
  selected=[u for u in users if segment=='all' or u['segment']==segment]
  ids=set()
  for u in selected:
   for e in unique.values():
    if e['user_id']==u['user_id'] and e['name'] in ('practice','feedback'):
     age=ts(e['ts'])-ts(u['signup_ts'])
     if datetime.timedelta(days=7)<=age<datetime.timedelta(days=8):ids.add(u['user_id'])
  result[d]=(len(ids),len(selected)) if mature and selected else (None,0)
 return result
answers=calculate(f)
assert answers=={'2026-10-01':(2,4),'2026-10-08':(1,4),'2026-10-15':(None,0)}
assert sum(n or 0 for n,d in answers.values())==3 and sum(d for n,d in answers.values())==8
assert calculate(f,'novice')=={'2026-10-01':(2,2),'2026-10-08':(1,2),'2026-10-15':(None,0)}
assert calculate(f,'experienced')=={'2026-10-01':(0,2),'2026-10-08':(0,2),'2026-10-15':(None,0)}
assert 2/4==.5 and 1/4==.25 and 3/8==.375
# Prove and preserve the old fixture's different answer; validate exact declared fork.
original=json.loads((root/'public/data/events-v1.json').read_text())
assert calculate(original)['2026-10-01']==(3,4)
assert hashlib.sha256((root/'public/data/events-v1.json').read_bytes()).hexdigest()==f['derived_from']['sha256']
expected=copy.deepcopy(original)
for e in expected['events']:
 if e['event_id']=='UPPER_BOUNDARY':e['user_id']='C1U1'
assert expected['users']==f['users'] and expected['events']==f['events']
# Independently check exact endpoints, duplicate deliveries, and no funnel prerequisite.
u={'user_id':'probe','signup_ts':'2026-10-01T00:00:00Z','segment':'novice'}
probe={'users':[u],'events':[],'cutoff':'2026-10-09T00:00:00Z'}
for stamp,want in [('2026-10-07T23:59:59.999Z',0),('2026-10-08T00:00:00Z',1),('2026-10-08T23:59:59.999Z',1),('2026-10-09T00:00:00Z',0)]:
 e={'event_id':'return','user_id':'probe','name':'feedback','ts':stamp};probe['events']=[e,e]
 assert calculate(probe)['2026-10-01']==(want,1)
probe['cutoff']='2026-10-08T23:59:59.999Z';assert calculate(probe)['2026-10-01']==(None,0)
# Unequal-size example: independently verify count-based pooling.
assert (1+1)/(2+8)==.2 and (.5+.125)/2==.3125
assert (root/'src/data/retention-events.json').read_bytes()==(root/'public/data/retention-events-v1.json').read_bytes()
print('PASS M3: Oct1 2/4=50%, Oct8 1/4=25%, Oct15 unavailable, pooled3/8=37.5%; mature zero, D7/D8 edges, duplicate feedback without funnel; original fixture unchanged and declared fork verified.')

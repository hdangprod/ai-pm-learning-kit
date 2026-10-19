"""Independent Cartesian-path oracle; no JS imports or generated expected answers."""
import json,datetime,math
from pathlib import Path
root=Path(__file__).resolve().parents[1]
f=json.loads((root/'public/data/events-v1.json').read_text())
def time(s):return datetime.datetime.fromisoformat(s.replace('Z','+00:00'))
def counts(segment='all',cohort='all'):
 eligible=[u for u in f['users'] if time(u['signup_ts'])+datetime.timedelta(days=7)<=time(f['cutoff']) and (segment=='all' or u['segment']==segment) and (cohort=='all' or u['signup_ts'][:10]==cohort)]
 events={e['event_id']:e for e in f['events']}.values()
 practice=set();feedback=set()
 for u in eligible:
  start=time(u['signup_ts']);end=start+datetime.timedelta(days=7)
  rows=[e for e in events if e['user_id']==u['user_id'] and start<time(e['ts'])<end]
  ps=[e for e in rows if e['name']=='practice'];fs=[e for e in rows if e['name']=='feedback']
  if ps:practice.add(u['user_id'])
  if any(time(p['ts'])<time(q['ts']) for p in ps for q in fs):feedback.add(u['user_id'])
 return len(eligible),len(practice),len(feedback)
assert len(f['users'])==12 and len(f['events'])==28
assert len({e['event_id'] for e in f['events']})==27
assert counts()==(8,6,4)
assert counts('novice')==(4,4,4) and counts('experienced')==(4,2,0)
assert counts(cohort='2026-10-01')==(4,3,2) and counts(cohort='2026-10-08')==(4,3,2)
assert counts(cohort='2026-10-15')==(0,0,0)
assert math.isclose(4/6*100,66.66666666666667) and 4/8==.5
assert (root/'src/data/events.json').read_bytes()==(root/'public/data/events-v1.json').read_bytes()
print('PASS M2: 12 users / 28 rows / 27 IDs; mature8→6→4, novice4→4→4, experienced4→2→0, immature0→0→0; step66.6667%, overall50%.')

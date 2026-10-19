"""Authored synthetic teaching scenario v1; deterministic, no sampled research."""
import json,hashlib
from pathlib import Path
from datetime import datetime,timedelta,timezone
root=Path(__file__).resolve().parents[1]
def iso(d):return d.isoformat().replace('+00:00','Z')
users=[];events=[]
for c,day in enumerate([1,8,15],1):
 start=datetime(2026,10,day,tzinfo=timezone.utc)
 for i in range(1,5):users.append(dict(user_id=f'C{c}U{i}',signup_ts=iso(start),segment='novice' if i<=2 else 'experienced'))
 for i in [1,2,3]:events.append(dict(event_id=f'C{c}P{i}',user_id=f'C{c}U{i}',name='practice',ts=iso(start+timedelta(days=1))))
 for i in [1,2]:events.append(dict(event_id=f'C{c}F{i}',user_id=f'C{c}U{i}',name='feedback',ts=iso(start+timedelta(days=2))))
 events.append(dict(event_id=f'C{c}F4',user_id=f'C{c}U4',name='feedback',ts=iso(start+timedelta(days=1))))
 if c<3:events.append(dict(event_id=f'C{c}RETURN1',user_id=f'C{c}U1',name='practice',ts=iso(start+timedelta(days=7))))
 if c==1:
  events.append(dict(event_id='C1RETURN2',user_id='C1U2',name='practice',ts=iso(start+timedelta(days=7))))
  events.append(dict(event_id='C1RETURN3',user_id='C1U3',name='practice',ts=iso(start+timedelta(days=8))))
# Diagnostic rows preserve all locked totals. U3 never has qualifying feedback.
for event_id,name,ts in [('AT_SIGNUP','practice','2026-10-01T00:00:00Z'),('BEFORE_SIGNUP','practice','2026-09-30T23:00:00Z'),('EARLY_FEEDBACK','feedback','2026-10-01T12:00:00Z'),('TIED_FEEDBACK','feedback','2026-10-02T00:00:00Z'),('UPPER_BOUNDARY','feedback','2026-10-08T00:00:00Z')]:
 events.append(dict(event_id=event_id,user_id='C1U3',name=name,ts=ts))
events.append(dict(events[0]))
events.reverse() # File order deliberately differs from event time.
fixture=dict(version=1,data_type='SYNTHETIC_AUTHORED',cutoff='2026-10-19T00:00:00Z',users=users,events=events)
content=json.dumps(fixture,indent=2)+'\n'
for path in ['src/data/events.json','public/data/events-v1.json']:(root/path).write_text(content)
manifest_path=root/'docs/DATA_MANIFEST.json';manifest=json.loads(manifest_path.read_text())
for path in ['src/data/events.json','public/data/events-v1.json']:manifest[path]=hashlib.sha256((root/path).read_bytes()).hexdigest()
manifest_path.write_text(json.dumps(manifest,indent=2)+'\n')
print(f'Generated {len(users)} fictional users, {len(events)} raw event rows; no RNG.')

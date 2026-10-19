"""Minimal transparent retention-only fork; never modifies Module 2's fixture."""
import json,hashlib
from pathlib import Path
root=Path(__file__).resolve().parents[1]
source=root/'public/data/events-v1.json'
f=json.loads(source.read_text())
rows=[e for e in f['events'] if e['event_id']=='UPPER_BOUNDARY']
assert len(rows)==1 and rows[0]['user_id']=='C1U3'
rows[0]['user_id']='C1U1'
f['dataset_id']='retention-events-v1'
f['derived_from']={'path':'events-v1.json','sha256':hashlib.sha256(source.read_bytes()).hexdigest(),'changes':[{'event_id':'UPPER_BOUNDARY','field':'user_id','from':'C1U3','to':'C1U1','reason':'Assign the D7 diagnostic event to an already returning user; preserve the locked two-user Oct1 retention count.'}]}
content=json.dumps(f,indent=2)+'\n'
paths=['src/data/retention-events.json','public/data/retention-events-v1.json']
for p in paths:(root/p).write_text(content)
manifest=root/'docs/DATA_MANIFEST.json';h=json.loads(manifest.read_text())
for p in paths:h[p]=hashlib.sha256((root/p).read_bytes()).hexdigest()
manifest.write_text(json.dumps(h,indent=2)+'\n')
print('Prepared retention-events-v1: one declared user_id change; Module 2 source unchanged.')

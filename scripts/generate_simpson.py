"""Explicit synthetic fixture locked in INTERACTIVE_EXERCISE_SPEC.md; no RNG."""
from pathlib import Path
import json,hashlib
root=Path(__file__).resolve().parents[1]
f={'dataset_id':'strict-simpson-v1','version':1,'data_type':'SYNTHETIC_AUTHORED','grain':'product x pre-use segment','provenance':'Authored teaching fixture from the locked Module 4 specification; not research or randomized treatment evidence.','rows':[{'product':'A','segment':'novice','passed':2,'assessed':10},{'product':'A','segment':'experienced','passed':72,'assessed':90},{'product':'B','segment':'novice','passed':27,'assessed':90},{'product':'B','segment':'experienced','passed':9,'assessed':10}]}
content=json.dumps(f,indent=2)+'\n'
paths=['src/data/strict-simpson.json','public/data/strict-simpson-v1.json']
for path in paths:(root/path).write_text(content)
p=root/'docs/DATA_MANIFEST.json';manifest=json.loads(p.read_text())
for path in paths:manifest[path]=hashlib.sha256((root/path).read_bytes()).hexdigest()
p.write_text(json.dumps(manifest,indent=2)+'\n')
print('Generated strict-simpson-v1: four constructed rows; all prior data preserved.')

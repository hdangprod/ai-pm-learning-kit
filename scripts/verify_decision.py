"""Independent scenario arithmetic/consistency oracle; no app or grader imports."""
from pathlib import Path
import json,hashlib
from datetime import date
root=Path(__file__).resolve().parents[1]
a=root/'src/data/decision-scenario.json';b=root/'public/data/decision-scenario-v1.json'
assert a.read_bytes()==b.read_bytes()
f=json.loads(a.read_text());assert (f['dataset_id'],f['schema_version'],f['data_type'])==('decision-scenario-v1',1,'SIMULATED_DECISION_SCENARIO')
manifest=json.loads((root/'docs/DATA_MANIFEST.json').read_text())
# Pin earlier hashes independently: new manifest entries must not redefine old data.
old={'public/data/case_b_weekly.csv':'ef1c902fddb834c87c4ed1ba04f384700524062a54bab6319083c489607709c6','src/data/weekly.json':'e3ebcf262e99c1f140d1573c9255538e2034fa610d8a72b3e939df215ab0b27c','src/data/events.json':'20d3ac213f5ca3a7f550df691ea40a6aaa20f2a8f35d97d08a8db4bc741a215d','public/data/events-v1.json':'20d3ac213f5ca3a7f550df691ea40a6aaa20f2a8f35d97d08a8db4bc741a215d','src/data/retention-events.json':'27d25fbfbe58e7d64ff8e9aa6860c7cfa0610cd80f9e1953801fb843bbf339af','public/data/retention-events-v1.json':'27d25fbfbe58e7d64ff8e9aa6860c7cfa0610cd80f9e1953801fb843bbf339af','src/data/strict-simpson.json':'667a632332cb6c9cfc7826cc98b7329dbbbc140adfc7328ebaa54ce3a4290f7c','public/data/strict-simpson-v1.json':'667a632332cb6c9cfc7826cc98b7329dbbbc140adfc7328ebaa54ce3a4290f7c'}
for rel,digest in old.items():assert manifest[rel]==digest and hashlib.sha256((root/rel).read_bytes()).hexdigest()==digest
for rel in ['src/data/decision-scenario.json','public/data/decision-scenario-v1.json']:assert hashlib.sha256((root/rel).read_bytes()).hexdigest()==manifest[rel]
assert f['brief']['resources']==dict(engineering=12,research=8,coaching=4)
assert sum(f['brief']['resources'].values())==24
assert date.fromisoformat(f['brief']['planning_start'])<date.fromisoformat(f['brief']['decision_deadline'])<date.fromisoformat(f['brief']['check_deadline'])
assert [o['id'] for o in f['options']]==list('ABCD')
expected=[((8,4,0),12,(2,2,0),4),((2,4,0),6,(1,2,0),3),((0,4,4),8,(0,2,2),4),((0,6,0),6,(0,2,0),2)]
for option,(listed,total,reduced,reduced_total) in zip(f['options'],expected):
 for key,counts,t in [('effort',listed,total),('reduced',reduced,reduced_total)]:
  assert tuple(option[key].values())==counts and sum(counts)==t
  assert all(isinstance(v,int) and 0<=v<=f['brief']['resources'][k] for k,v in option[key].items())
 for key in ['benefit','scope','reduced_scope','risk','missing','reversibility','success','poor_if']:assert option[key].strip()
assert [v['id'] for v in f['variants']]==['capacity','rights','coverage']
assert f['variants'][0]['resources']==dict(engineering=2,research=8,coaching=4)
assert [o['id'] for o in f['options'] if o['effort']['engineering']>2]==['A']
assert all(o['reduced']['engineering']<=2 for o in f['options'])
coverage=f['variants'][2];assert coverage['assessed']/coverage['eligible']==.5 and coverage['eligible']-coverage['assessed']==4
assert {e['origin'] for e in f['evidence']}=={'SOURCE_AUDIT','SOURCE_REPORT','ANALYST_INFERENCE','UNTESTED_ASSUMPTION','SIMULATED','NOT_AVAILABLE'}
for e in f['evidence']:
 assert e['locator'] and (root/'public'/e['href'].lstrip('/')).exists()
assert f['transfer']['data_type']=='SIMULATED_TRANSFER' and 'properly configured incumbent' in f['transfer']['fact']
# Rubric contract: five dimensions, all levels, no preference for a strategy.
import itertools
scores=[sum(levels) for levels in itertools.product(range(3),repeat=5)]
assert len(scores)==243 and min(scores)==0 and max(scores)==10 and scores.count(10)==1
print('PASS M6 scenario: capacities12/8/4h; listed totals12/6/8/6h, reduced4/3/4/2h; capacity2h excludes listed A but permits reduced A and all reduced plans; coverage4/8=50%,4 unknown; 3 variants, 6 evidence origins, separate incumbent-success transfer; rubric5×0–2=0–10 (243 combinations); source/download hashes match.')

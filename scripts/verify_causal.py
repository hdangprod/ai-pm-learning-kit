"""Independent original-CSV oracle, required before Module 5 implementation."""
from pathlib import Path
from fractions import Fraction as F
import csv,json,hashlib
root=Path(__file__).resolve().parents[1]
original=root/'materials/AI_PM_Audit_Upgrade_I_II/practice/case_b_weekly.csv'
public=root/'public/data/case_b_weekly.csv'
assert original.read_bytes()==public.read_bytes()
assert hashlib.sha256(public.read_bytes()).hexdigest()=='ef1c902fddb834c87c4ed1ba04f384700524062a54bab6319083c489607709c6'
rows=list(csv.DictReader(original.open(encoding='utf-8-sig')))
expected={('cohort_week_1','experienced'):(80,240,64,48),('cohort_week_1','novice'):(20,80,10,4),('cohort_week_2','experienced'):(40,160,32,24),('cohort_week_2','novice'):(60,300,15,6)}
assert {(r['week'],r['segment']):tuple(int(r[k]) for k in ['eligible','sessions','assessed','passed']) for r in rows}==expected
assert all(r['data_type']=='SIMULATED' for r in rows)
typed=json.loads((root/'src/data/weekly.json').read_text())
assert [{k:(int(v) if k in ['eligible','sessions','assessed','passed'] else v) for k,v in r.items()} for r in rows]==typed
w={week:tuple(sum(int(r[k]) for r in rows if r['week']==week) for k in ['eligible','sessions','assessed','passed']) for week in ['cohort_week_1','cohort_week_2']}
assert w=={'cohort_week_1':(100,320,74,52),'cohort_week_2':(100,460,47,30)}
assert F(460-320,320)*100==F(175,4)
assert F(74,100)*100==74 and F(47,100)*100==47
assert (F(47,100)-F(74,100))*100==-27
assert F(52,74)==F(26,37) and F(30,47)==F(30,47)
assert round(float(F(52,74)*100),2)==70.27 and round(float(F(30,47)*100),2)==63.83
assert F(15,60)*100==25
assert F(320-460,460)*100==F(-700,23) # reverse reference is not simply -43.75%
assert 100-74==26 and 100-47==53 and 60-15==45
for segment,rate in [('experienced',F(3,4)),('novice',F(2,5))]:
 assert all(F(int(r['passed']),int(r['assessed']))==rate for r in rows if r['segment']==segment)
print('PASS M5 original CSV: rows80/240/64/48,20/80/10/4,40/160/32/24,60/300/15/6; weekly100/320/74/52 and100/460/47/30; sessions+43.75%, coverage74%->47%=-27pp; assessed pass70.27%->63.83%; W2 novice15/60=25%,45 unknown; reverse relative=-30.43478%; source, public and typed copies agree.')

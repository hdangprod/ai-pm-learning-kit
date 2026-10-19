"""Independent arithmetic oracle: standard library, no app imports."""
import csv,pathlib,math
root=pathlib.Path(__file__).resolve().parents[1]
rows=list(csv.DictReader((root/'public/data/case_b_weekly.csv').open(encoding='utf-8-sig')))
for w,expected in [('cohort_week_1',(100,320,74,52)),('cohort_week_2',(100,460,47,30))]:
 values=tuple(sum(int(r[k]) for r in rows if r['week']==w) for k in ['eligible','sessions','assessed','passed'])
 assert values==expected,(w,values)
 assert all(0<=int(r['passed'])<=int(r['assessed'])<=int(r['eligible']) for r in rows)
assert math.isclose(52/74*100,70.27027027027027)
assert math.isclose(30/47*100,63.82978723404255)
print('PASS M1: original CSV counts, bounds inputs and independent arithmetic')

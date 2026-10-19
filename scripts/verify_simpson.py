"""Independent rational-arithmetic oracle; no TypeScript imports or expected output reuse."""
from pathlib import Path
from fractions import Fraction as F
import json,csv
root=Path(__file__).resolve().parents[1]
f=json.loads((root/'public/data/strict-simpson-v1.json').read_text())
rows={(r['product'],r['segment']):(r['passed'],r['assessed']) for r in f['rows']}
assert rows=={('A','novice'):(2,10),('A','experienced'):(72,90),('B','novice'):(27,90),('B','experienced'):(9,10)}
rates={k:F(*v) for k,v in rows.items()}
assert rates=={('A','novice'):F(1,5),('A','experienced'):F(4,5),('B','novice'):F(3,10),('B','experienced'):F(9,10)}
pooled={p:F(sum(n for (q,s),(n,d) in rows.items() if q==p),sum(d for (q,s),(n,d) in rows.items() if q==p)) for p in ['A','B']}
assert pooled=={'A':F(74,100),'B':F(36,100)}
assert all(rates['B',s]-rates['A',s]==F(1,10) for s in ['novice','experienced'])
assert pooled['B']-pooled['A']==F(-38,100)
assert (pooled['B']-pooled['A'])/pooled['A']==F(-19,37)
def mixture(p,w):return w*rates[p,'novice']+(1-w)*rates[p,'experienced']
assert mixture('A',F(1,10))==pooled['A'] and mixture('B',F(9,10))==pooled['B']
assert mixture('A',F(1,2))==F(1,2) and mixture('B',F(1,2))==F(3,5)
for i in range(101):
 w=F(i,100)
 assert mixture('B',w)-mixture('A',w)==F(1,10)
assert mixture('A',0)==F(4,5) and mixture('A',1)==F(1,5)
assert mixture('B',0)==F(9,10) and mixture('B',1)==F(3,10)
# Original source rates are equal within groups, so no strict reversal.
source=list(csv.DictReader((root/'public/data/case_b_weekly.csv').open(encoding='utf-8-sig')))
for segment in ['novice','experienced']:
 rs=[r for r in source if r['segment']==segment]
 assert F(int(rs[0]['passed']),int(rs[0]['assessed']))==F(int(rs[1]['passed']),int(rs[1]['assessed']))
assert (root/'src/data/strict-simpson.json').read_bytes()==(root/'public/data/strict-simpson-v1.json').read_bytes()
assert f['data_type']=='SYNTHETIC_AUTHORED' and f['version']==1
print('PASS M4: subgroup20/80 vs30/90%; pooled74% vs36%; B-A +10pp in both groups, -38pp pooled, -51.35135% relative; common50/50 ->50%/60%, all101 common weights ->+10pp; original weekly example is not strict reversal.')

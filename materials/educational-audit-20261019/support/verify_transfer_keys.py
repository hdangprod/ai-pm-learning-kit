from fractions import Fraction as F
from datetime import datetime,timedelta,timezone
from pathlib import Path
import json,argparse

ap=argparse.ArgumentParser(description='Independent calculation checks for auditor-authored transfer answer keys.')
ap.add_argument('--output',type=Path,default=Path(__file__).parent/'outputs/educational_audit_20261019/TRANSFER_KEY_CHECKS.json')
args=ap.parse_args()
checks=[]
def check(task,metric,actual,expected):
 assert abs(float(actual)-expected)<1e-8,(task,metric,actual,expected)
 checks.append(dict(task=task,metric=metric,value=float(actual),expected=expected,status='PASS'))
check('M1A','account positive %',F(3,4)*100,75)
check('M1A','ticket resolved among known %',F(4,6)*100,66.66666666666667)
# Independently reconstruct the marketplace paths from the short log.
rows={'u1':([1],[2,2]),'u2':([2],[1]),'u3':([0],[1]),'u4':([6],[7]),'u5':([1,3],[1,4])}
search=[u for u,(ss,pp) in rows.items() if any(0<s<7 for s in ss)]
purchase=[u for u,(ss,pp) in rows.items() if any(0<s<p<7 for s in ss for p in pp)]
assert set(search)=={'u1','u2','u4','u5'} and set(purchase)=={'u1','u5'}
check('M2A','search count',len(search),4)
check('M2A','ordered purchase count',len(purchase),2)
check('M2A','step %',F(len(purchase),len(search))*100,50)
check('M2A','overall %',F(len(purchase),len(rows))*100,40)
signup=datetime(2027,1,1,12,tzinfo=timezone.utc)
lo=signup+timedelta(days=7);hi=signup+timedelta(days=8)
events={'a1':[lo,lo+timedelta(hours=1)],'a2':[hi],'a3':[lo-timedelta(hours=1)]}
assert [u for u,es in events.items() if any(lo<=e<hi for e in es)]==['a1']
check('M3A','D7 %',F(1,3)*100,33.33333333333333)
check('M4A','A pooled %',F(65,100)*100,65)
check('M4A','B pooled %',F(75,100)*100,75)
check('M4A','A target mix %',F(4,5)*30+F(1,5)*80,40)
check('M4A','B target mix %',F(4,5)*40+F(1,5)*90,50)
check('M5A','post mean contrast points',7-6,1)
check('M5A','difference in changes points',(7-5)-(6-5),1)
check('M1B','X coverage %',F(48,120)*100,40)
check('M1B','X observed pass %',F(30,48)*100,62.5)
check('M1B','X lower %',F(30,120)*100,25)
check('M1B','X upper %',F(102,120)*100,85)
check('M1B','Y observed pass %',F(48,80)*100,60)
check('M1B','Y lower %',48,48)
check('M1B','Y upper %',48+20,68)
check('M2B','eligible conversion lower %',F(2,5)*100,40)
check('M2B','eligible conversion upper %',F(3,5)*100,60)
check('M2B','invited conversion lower %',F(2,4)*100,50)
check('M2B','invited conversion upper %',F(3,4)*100,75)
check('M3B','covered subset %',F(3,6)*100,50)
check('M3B','cohort lower %',F(3,12)*100,25)
check('M3B','cohort upper %',F(9,12)*100,75)
check('M4B','A all assigned %',F(90,200)*100,45)
check('M4B','B all assigned %',F(85,200)*100,42.5)
check('M4B','B minus A pp',F(-5,200)*100,-2.5)
check('M5B','complete cases A minus B pp',(F(28,40)-F(45,90))*100,20)
check('M5B','lower difference pp',(F(28,100)-F(55,100))*100,-27)
check('M5B','upper difference pp',(F(88,100)-F(45,100))*100,43)
check('M1C','coverage %',F(20,50)*100,40)
check('M1C','assessed pass %',F(12,20)*100,60)
check('M1C','lower %',F(12,50)*100,24)
check('M1C','upper %',F(42,50)*100,84)
check('M2C','step %',F(1,3)*100,33.33333333333333)
check('M2C','overall %',F(1,4)*100,25)
check('M3C','pooled D7 %',F(2,10)*100,20)
check('M3C','unweighted mean mature cohorts %',(F(1,2)+F(1,8))*50,31.25)
check('M4C','A pooled observed %',F(22,30)*100,73.33333333333333)
check('M4C','A common mix %',F(1,2)*40+F(1,2)*90,65)
check('M5C','sessions change %',F(300-200,200)*100,50)
check('M5C','week1 observed pass %',F(63,90)*100,70)
check('M5C','week2 observed pass %',F(40,50)*100,80)
check('M5C','coverage change pp',50-90,-40)
args.output.parent.mkdir(parents=True,exist_ok=True)
args.output.write_text(json.dumps(dict(scope='New auditor-authored tasks, not learner data or application execution',checks=checks),ensure_ascii=False,indent=2))
print(json.dumps(dict(key_checks=len(checks),all_pass=True)))

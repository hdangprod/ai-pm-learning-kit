from pathlib import Path
from fractions import Fraction as F
import hashlib,json,zipfile,argparse

root=Path(__file__).parent
parser=argparse.ArgumentParser(description='Recheck printed-table arithmetic and supplied-archive inventory. Does not run application code.')
parser.add_argument('--docs-zip',type=Path,default=root/'upload/docs.zip')
parser.add_argument('--output-dir',type=Path,default=root/'outputs/educational_audit_20261019')
args=parser.parse_args()
out=args.output_dir
out.mkdir(parents=True,exist_ok=True)
checks=[]
def check(label,value,expected,scope):
    assert abs(float(value)-expected)<1e-8,(label,value,expected)
    checks.append(dict(check=label,value=float(value),expected=expected,scope=scope,status='PASS'))
# These are independent calculations from the printed tables, NOT a rerun of absent application oracles.
check('M1 Week1 assessed pass %',F(52,74)*100,70.27027027027027,'Printed weekly table')
check('M1 Week2 coverage %',F(47,100)*100,47,'Printed weekly table')
check('M1 Week1 eligible pass lower %',F(52,100)*100,52,'Printed weekly table')
check('M1 Week1 eligible pass upper %',F(52+26,100)*100,78,'Printed weekly table')
check('M1 Week2 eligible pass lower %',F(30,100)*100,30,'Printed weekly table')
check('M1 Week2 eligible pass upper %',F(30+53,100)*100,83,'Printed weekly table')
check('M2 step conversion %',F(4,6)*100,66.66666666666667,'Documented stage counts, not raw events')
check('M2 overall conversion %',F(4,8)*100,50,'Documented stage counts, not raw events')
check('M3 pooled retention %',F(3,8)*100,37.5,'Documented retained/eligible counts')
check('M3 unequal-cohort pooled %',F(1+1,2+8)*100,20,'Authored toy example in document')
check('M3 original-event counterexample %',F(3,4)*100,75,'Documented event narrative; bytes unavailable')
check('M4 A pooled %',F(2+72,10+90)*100,74,'Printed strict Simpson rows')
check('M4 B pooled %',F(27+9,90+10)*100,36,'Printed strict Simpson rows')
check('M4 B-A pp',F(36-74),-38,'Printed strict Simpson rows')
check('M4 B relative %',F(36-74,74)*100,-51.35135135135135,'Printed strict Simpson rows')
check('M4 common-mix A %',(F(2,10)+F(72,90))*50,50,'Arithmetic reweighting, not causal effect')
check('M4 common-mix B %',(F(27,90)+F(9,10))*50,60,'Arithmetic reweighting, not causal effect')
check('M5 sessions relative %',F(460-320,320)*100,43.75,'Printed weekly table')
check('M5 coverage difference pp',F(47-74),-27,'Printed weekly table')
check('M5 novice coverage %',F(15,60)*100,25,'Printed weekly table')
check('M6 coverage %',F(4,8)*100,50,'Scenario, not participant data')
check('M6 listed A total hours',8+4,12,'Role caps remain separate')
check('M6 reduced A engineering hours',2,2,'At engineering cap 2h, reduced A fits')
check('Transfer M1B group1 upper %',F(30+72,120)*100,85,'New audit exercise')
check('Transfer M4B assigned difference pp',(F(85,200)-F(90,200))*100,-2.5,'Randomized complete-followup stipulated')
check('Transfer M5B lower difference pp',(F(28,100)-F(45+10,100))*100,-27,'Worst-case missingness bound')
check('Transfer M5B upper difference pp',(F(28+60,100)-F(45,100))*100,43,'Worst-case missingness bound')
z=zipfile.ZipFile(args.docs_zip)
files=[n for n in z.namelist() if n.startswith('docs/') and not n.endswith('/') and '/.' not in n]
inventory=[dict(path=n,bytes=len(z.read(n)),sha256=hashlib.sha256(z.read(n)).hexdigest()) for n in files]
(out/'INDEPENDENT_CALCULATION_CHECKS.json').write_text(json.dumps(dict(method='Independent arithmetic from supplied printed tables; no app execution or dataset-byte verification',checks=checks),ensure_ascii=False,indent=2))
(out/'SUPPLIED_FILE_INVENTORY.json').write_text(json.dumps(inventory,ensure_ascii=False,indent=2))
print(json.dumps(dict(arithmetic_checks=len(checks),all_pass=True,supplied_files=len(files),screenshots=sum(x.endswith('.png') for x in files),markdown=sum(x.endswith('.md') for x in files)),ensure_ascii=False))

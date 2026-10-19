"""Read-only preservation gate. Supply external originals explicitly; absent files remain UNVERIFIED."""
from pathlib import Path
import argparse,hashlib,json,zipfile,re,sys
from datetime import date,timedelta
root=Path(__file__).resolve().parents[1]
p=argparse.ArgumentParser(description=__doc__)
p.add_argument('--original-materials',type=Path,help='Directory containing original curriculum ZIP and separate study-plan Markdown.')
p.add_argument('--curriculum-zip',type=Path,help='Explicit original AI_PM_Audit_Upgrade_I_II.zip path; overrides directory option.')
p.add_argument('--study-plan',type=Path,help='Explicit original AI_PM_Ke_hoach_tu_hoc_6_tuan.md path; overrides directory option.')
args=p.parse_args()
manifest=json.loads((root/'docs/DATA_MANIFEST.json').read_text())
for path,digest in manifest.items():assert hashlib.sha256((root/path).read_bytes()).hexdigest()==digest,path
for path,digest in {'package.json':'86c69842a148a6053a24f1776d63308889fc5b4f72d21a5d61570c5b5246d5e5','package-lock.json':'0677cf4316a4770e4b4c7e31d67aae41f29f0742b298a41852a6eda9bf7a36a1'}.items():
 assert hashlib.sha256((root/path).read_bytes()).hexdigest()==digest,path
 print('PASS unchanged',path,digest)
mapping=(root/'docs/STUDY_PLAN_MAPPING.md').read_text()
rows=re.findall(r'^\|(\d+) · (\d{4}-\d{2}-\d{2})\|(.+)$',mapping,re.M)
assert len(rows)==42
for i,(day,dt,task) in enumerate(rows):assert int(day)==i+1 and dt==(date(2026,10,19)+timedelta(days=i)).isoformat()
print('PASS all',len(manifest),'data-manifest hashes; all42 mapped dates retained.')
archive=args.curriculum_zip or (args.original_materials/'AI_PM_Audit_Upgrade_I_II.zip' if args.original_materials else None)
plan=args.study_plan or (args.original_materials/'AI_PM_Ke_hoach_tu_hoc_6_tuan.md' if args.original_materials else None)
unverified=[]
if archive and archive.is_file():
 with zipfile.ZipFile(archive) as z:
  count=0
  for name in z.namelist():
   if name.endswith('/'):continue
   assert (root/'materials'/name).read_bytes()==z.read(name),name
   count+=1
 print('PASS',count,'original curriculum ZIP entries byte-identical:',archive)
else:unverified.append(f'UNVERIFIED external curriculum ZIP: {archive or "not supplied; use --original-materials or --curriculum-zip"}')
if plan and plan.is_file():
 assert (root/'materials/AI_PM_Ke_hoach_tu_hoc_6_tuan.md').read_bytes()==plan.read_bytes()
 print('PASS original study-plan bytes unchanged:',plan)
else:unverified.append(f'UNVERIFIED external study plan: {plan or "not supplied; use --original-materials or --study-plan"}')
if unverified:
 print('\n'.join(unverified));sys.exit(2)

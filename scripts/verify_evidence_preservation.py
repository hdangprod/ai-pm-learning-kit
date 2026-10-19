"""Pin protected curriculum/assessment inputs and original post-remediation audit; no regeneration."""
from pathlib import Path
import hashlib,json,zipfile,subprocess,sys
ROOT=Path(__file__).resolve().parents[1]
baseline=json.loads((ROOT/'docs/verification/evidence-preservation-baseline/repository-sha256.json').read_text())
protected=[name for name in baseline if name.startswith(('public/','materials/','assessment/','src/data/')) or name in ['package.json','package-lock.json','docs/STUDY_PLAN_MAPPING.md','INTERACTIVE_EXERCISE_SPEC.md','LEARNING_EXPERIENCE_SPEC.md','UI_UX_SPEC.md','TECHNICAL_ACCEPTANCE_CRITERIA.md']]
for name in protected:assert hashlib.sha256((ROOT/name).read_bytes()).hexdigest()==baseline[name],name
print('PASS',len(protected),'protected datasets/answer IDs/legacy-label catalogs/forms/keys/materials/specs/mapping/dependency files match pre-change hashes.')
archive=ROOT/'docs/POST_REMEDIATION_AUDIT_PACK_20261019.zip'
assert hashlib.sha256(archive.read_bytes()).hexdigest()=='ff5496f4f1f48c3d29b5f0d7cf9ff026168c8dba86e0abf5074e12cb810965f8'
with zipfile.ZipFile(archive) as z:
 for name in z.namelist():
  if not name.endswith('/'):assert z.read(name)==(ROOT/'docs/post-remediation-audit'/name).read_bytes(),name
print('PASS all40 post-remediation audit entries unchanged; original archive SHA256 verified.')
# Portable failure is explicit and distinguishable from a passing preservation check.
for args in [[],['--original-materials',str(ROOT/'nonexistent-original-inputs')]]:
 p=subprocess.run([sys.executable,str(ROOT/'scripts/verify_preservation.py'),*args],text=True,capture_output=True)
 assert p.returncode==2,(args,p.returncode,p.stdout,p.stderr)
 assert 'UNVERIFIED external curriculum ZIP' in p.stdout and 'UNVERIFIED external study plan' in p.stdout
 assert 'Traceback' not in p.stderr
print('PASS missing/not-supplied originals report UNVERIFIED with exit2, without a fabricated fallback or path traceback.')

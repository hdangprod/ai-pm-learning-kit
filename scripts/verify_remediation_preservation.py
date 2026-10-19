"""Recheck remediation preservation and absence of private assessment material in a production build."""
import hashlib,json,pathlib,zipfile,argparse,sys
ROOT=pathlib.Path(__file__).resolve().parents[1]
before=json.loads((ROOT/'docs/verification/remediation-baseline/repository-sha256.json').read_text())
for name in ['docs/STUDY_PLAN_MAPPING.md','package.json','package-lock.json','LEARNING_EXPERIENCE_SPEC.md','INTERACTIVE_EXERCISE_SPEC.md','UI_UX_SPEC.md','TECHNICAL_ACCEPTANCE_CRITERIA.md']:
    digest=hashlib.sha256((ROOT/name).read_bytes()).hexdigest();assert digest==before[name],name
    print(f'PASS unchanged {name} {digest}')
parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('--audit-zip',type=pathlib.Path,help='Explicit original educational-audit ZIP; expected SHA256 is unchanged.')
args=parser.parse_args()
archive=args.audit_zip or ROOT/'docs/AI_PM_EDUCATIONAL_AUDIT_20261019.zip'
unverified=not archive.is_file()
if not unverified:
    assert hashlib.sha256(archive.read_bytes()).hexdigest()=='6043e555ce111e6d8e795115da1c936361231e94db00a7b50e62188e7a6f7acd'
    with zipfile.ZipFile(archive) as z:
        for name in z.namelist():
            if not name.endswith('/'):
                for folder in ['docs/educational-audit','materials/educational-audit-20261019']:
                    assert z.read(name)==(ROOT/folder/name).read_bytes(),name
    print('PASS all18 original audit entries and ZIP byte-identical.')
else:
    print('UNVERIFIED original educational-audit archive:',archive,'(supply --audit-zip; no replacement was created)')
    # Verify available extracted evidence against the supplied artifact manifest, not a reconstructed ZIP.
    manifest=json.loads((ROOT/'docs/educational-audit/support/DELIVERABLE_MANIFEST.json').read_text())
    for entry in manifest:
        for folder in ['docs/educational-audit','materials/educational-audit-20261019']:
            assert hashlib.sha256((ROOT/folder/entry['path']).read_bytes()).hexdigest()==entry['sha256'],entry['path']
    print('PASS available extracted audit entries against artifact manifest; archive identity remains UNVERIFIED.')
canaries=['UNSEEN_TRANSFER_ANSWER_KEYS','UNSEEN_TRANSFER_EXERCISES','### M1A —','Signup={u1,u2,u3,u4,u5}','X coverage48/120','engineering còn 2h','MODULE_SCORECARD.xlsx']
assert (ROOT/'dist/index.html').is_file(),'Build application first.'
for path in (ROOT/'dist').rglob('*'):
    if path.is_file():
        assert path.suffix not in ['.zip','.xlsx','.py'],path
        if path.suffix in ['.js','.css','.html','.md','.json']:
            text=path.read_text()
            for token in canaries:assert token not in text,(path,token)
for directory in ['docs','materials','assessment','tests','scripts']:assert not(ROOT/'dist'/directory).exists(),directory
print('PASS independent form/key canaries and private directories absent from built assets and learner source downloads.')

if unverified:sys.exit(2)

"""Deterministic teaching fixtures. No research records or random sampling."""
import csv,json,pathlib,hashlib
root=pathlib.Path(__file__).resolve().parents[1]
rows=list(csv.DictReader((root/'public/data/case_b_weekly.csv').open(encoding='utf-8-sig')))
for r in rows:
 for k in ['eligible','sessions','assessed','passed']:r[k]=int(r[k])
(root/'src/data/weekly.json').write_text(json.dumps(rows,indent=2)+'\n')
files=['public/data/case_b_weekly.csv','src/data/weekly.json']
manifest_path=root/'docs/DATA_MANIFEST.json'
manifest=json.loads(manifest_path.read_text()) if manifest_path.exists() else {}
manifest.update({p:hashlib.sha256((root/p).read_bytes()).hexdigest() for p in files})
manifest_path.write_text(json.dumps(manifest,indent=2)+'\n')

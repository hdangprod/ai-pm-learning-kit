"""Reproduce corpus counts. Standard library only for the bundled CSV.
Optional: --workbook PATH re-extracts the source with openpyxl, read-only.
This validates bookkeeping; it does not verify user claims or causal effects.
"""
import argparse
import collections
import csv
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / 'practice'
FIELDS = {
    'segment': 'Segment self-report',
    'proficiency': 'Proficiency self-report',
    'quote': 'Original quote',
    'behavior': 'Reported behavior',
    'trigger': 'Trigger',
    'outcome': 'Reported consequence / outcome',
    'workaround': 'Workaround',
    'discontinuation': 'Discontinuation / switch state',
    'payment': 'Payment / meaningful commitment',
}

def missing(value):
    s = '' if value is None else str(value).strip().lower()
    return int(not s or s.startswith(('unknown', 'không trích')))

def extract(path):
    import openpyxl
    w = openpyxl.load_workbook(path, read_only=True, data_only=False)
    raw = list(w['Raw User Evidence'].values)
    records = [dict(zip(raw[0], r)) for r in raw[1:] if r[0] and str(r[0]).startswith('E')]
    review = list(w['Evidence Review V2'].values)
    review = {r[0]: dict(zip(review[0], r)) for r in review[1:] if r[0]}
    rows = []
    for r in records:
        x = dict(evidence_id=r['Evidence ID'], source_id=r['Source ID'],
                 platform=r['Platform'], english_confirmed=r['English confirmed 1/0'],
                 ai_status=r['AI usage status'],
                 quote_verified=review[r['Evidence ID']]['Quote verified 1/0'],
                 account_cluster='VOZ1489290' if r['Evidence ID'] in ('E133', 'E200') else 'unknown')
        x.update({'missing_' + k: missing(r[v]) for k, v in FIELDS.items()})
        rows.append(x)
    w.close()
    target = ROOT / 'evidence_audit_extract.csv'
    with target.open('w', newline='', encoding='utf-8-sig') as f:
        writer = csv.DictWriter(f, fieldnames=list(rows[0]))
        writer.writeheader()
        writer.writerows(rows)

def audit(path):
    with Path(path).open(encoding='utf-8-sig', newline='') as f:
        rows = list(csv.DictReader(f))
    english = [r for r in rows if int(r['english_confirmed']) == 1]
    active = [r for r in english if r['ai_status'] == 'active user']
    counts = collections.Counter(r['platform'] for r in rows)
    return {
        'label': 'Observed workbook metadata, not population prevalence',
        'unit': 'retained account-thread/review evidence record',
        'rows': len(rows),
        'unique_evidence_ids': len({r['evidence_id'] for r in rows}),
        'english_confirmed': len(english),
        'english_ai_status': dict(collections.Counter(r['ai_status'] for r in english)),
        'english_active_ai': len(active),
        'retained_source_ids': len({r['source_id'] for r in rows}),
        'platform_counts': dict(counts),
        'reddit_trustpilot': counts['Reddit'] + counts['Trustpilot'],
        'missing_raw_among_english_active_ai': {
            k: {'numerator': sum(int(r['missing_' + k]) for r in active),
                'denominator': len(active)} for k in FIELDS
        },
        'quote_verified_all_records': sum(int(r['quote_verified']) for r in rows),
        'known_account_cluster': ['E133', 'E200'],
        'identity_resolution': 'Incomplete; no verified unique-person total',
        'source_verification': 'Not re-performed by this script',
    }

def main():
    p = argparse.ArgumentParser()
    p.add_argument('--workbook', type=Path)
    p.add_argument('--csv', type=Path, default=ROOT / 'evidence_audit_extract.csv')
    args = p.parse_args()
    if args.workbook:
        extract(args.workbook)
    result = audit(args.csv)
    assert (result['rows'], result['unique_evidence_ids'], result['english_confirmed'],
            result['english_active_ai'], result['retained_source_ids']) == (200, 200, 149, 107, 101)
    assert result['quote_verified_all_records'] == 23
    assert result['reddit_trustpilot'] == 135
    expected = dict(segment=68, proficiency=88, quote=98, behavior=15, trigger=58,
                    outcome=53, workaround=67, discontinuation=77, payment=62)
    assert {k: v['numerator'] for k, v in result['missing_raw_among_english_active_ai'].items()} == expected
    (Path(__file__).resolve().parent / 'audit_results.json').write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps(result, ensure_ascii=False, indent=2))

if __name__ == '__main__':
    main()

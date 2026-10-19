"""Read-only loopback exposure check; never contact an external service."""
import argparse,urllib.request,urllib.error,urllib.parse,json
p=argparse.ArgumentParser(description=__doc__);p.add_argument('--base-url',required=True);args=p.parse_args()
base=urllib.parse.urlparse(args.base_url);assert base.hostname in ['127.0.0.1','localhost','::1'],'Only loopback verification is allowed.'
paths=['/docs/educational-audit/UNSEEN_TRANSFER_ANSWER_KEYS.md','/assessment/reviewer-only/form-A-keys.md','/docs/post-remediation-audit/ASSESSMENT_FORM_VALIDATION.md','/docs/POST_REMEDIATION_AUDIT_PACK_20261019.zip','/scripts/assessment_session.py']
for path in paths:
 try:r=urllib.request.urlopen(args.base_url.rstrip('/')+path);status=r.status;body=r.read()
 except urllib.error.HTTPError as e:status=e.code;body=e.read()
 assert b'\x50\x4b\x03\x04' not in body[:4],path
 for canary in ['### M1A','form A keys','M3C reuses','M3C\'s taught','def forms(', 'POST-EQ-1.0']:
  assert canary.encode() not in body,(path,canary)
 assert status in [200,403,404],(path,status)
 print(json.dumps({'url':args.base_url+path,'status':status,'private_content_exposed':False}))

"""Regression checks for offline assessment administration, using authored dummy responses only."""
import importlib.util,pathlib,tempfile,argparse,json,hashlib
ROOT=pathlib.Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('session',ROOT/'scripts/assessment_session.py');mod=importlib.util.module_from_spec(spec);spec.loader.exec_module(mod)
checks=0
with tempfile.TemporaryDirectory(prefix='lab-assessment-') as tmp:
 for index,form in enumerate('ABC'):
  p=pathlib.Path(tmp)/form
  mod.create(argparse.Namespace(output=str(p),form=form,timepoint=['baseline','immediate_post','delayed'][index],participant='AUTHORED-TEST',seen_form='no' if form=='A' else 'unknown',seen_answers='no'))
  body=(p/'learner/assigned-form.md').read_text();assert all('### M'+str(i)+form in body for i in range(1,7));assert all('### M1'+other not in body for other in 'ABC' if other!=form);assert 'answer keys — instructor' not in body
  card=(p/'sealed-change-card.md').read_text();assert card not in body;assert not (p/'learner/released-change-card.md').exists()
  m=json.loads((p/'session.json').read_text());assert m['independent_unseen_eligible']==(form=='A');checks+=6
  try:mod.lock(argparse.Namespace(session=str(p)));raise AssertionError('empty memo accepted')
  except ValueError:pass
  data=b'# Initial memo\nAUTHORED dummy response, not learner evidence.\n';(p/'learner/memo-v1.md').write_bytes(data);mod.lock(argparse.Namespace(session=str(p)))
  assert (p/'memo-v1-locked.md').read_bytes()==data;assert (p/'learner/released-change-card.md').read_text()==card
  (p/'learner/memo-v1.md').write_text('changed after lock');assert (p/'memo-v1-locked.md').read_bytes()==data
  assert json.loads((p/'session.json').read_text())['initial_memo_sha256']==hashlib.sha256(data).hexdigest()
  try:mod.lock(argparse.Namespace(session=str(p)));raise AssertionError('overwrote lock')
  except ValueError:pass
  try:mod.create(argparse.Namespace(output=str(p),form=form,timepoint='baseline',participant='test',seen_form='no',seen_answers='no'));raise AssertionError('overwrote session')
  except ValueError:pass
  checks+=7
 for directory in ['public','src','dist','node_modules']:
  try:mod.private_path(str(ROOT/directory/'leak'));raise AssertionError('public path accepted')
  except ValueError:pass
  checks+=1
print(json.dumps({'authored_test_records_not_learner_data':True,'workflow_checks':checks,'all_pass':True}))

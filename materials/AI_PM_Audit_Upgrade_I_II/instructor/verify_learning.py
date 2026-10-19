"""Offline answer checks, standard library only. All new data are simulated."""
from pathlib import Path
import csv,json,math,collections
ROOT=Path(__file__).resolve().parents[1]
def read(n):
    with (ROOT/'practice'/n).open(encoding='utf-8-sig',newline='') as f:return list(csv.DictReader(f))
def run():
    rows=read('case_b_weekly.csv');result={}
    for w in sorted({r['week'] for r in rows}):
        rs=[r for r in rows if r['week']==w]
        x={k:sum(int(r[k]) for r in rs) for k in ['eligible','sessions','assessed','passed']}
        assert 0<=x['passed']<=x['assessed']<=x['eligible']
        x.update(sessions_per_eligible=x['sessions']/x['eligible'],coverage=x['assessed']/x['eligible'],observed_pass=x['passed']/x['assessed'],lower_bound=x['passed']/x['eligible'],upper_bound=(x['passed']+x['eligible']-x['assessed'])/x['eligible'])
        result[w]=x
    assert result['cohort_week_1']['sessions']==320 and result['cohort_week_2']['sessions']==460
    assert math.isclose(result['cohort_week_1']['observed_pass'],52/74)
    assert math.isclose(result['cohort_week_2']['observed_pass'],30/47)
    for r in rows:assert math.isclose(int(r['passed'])/int(r['assessed']),.75 if r['segment']=='experienced' else .4)
    p=read('payback_inputs.csv')[0];m=float(p['contribution_vnd_per_month']);c=float(p['churn_end_month']);cac=float(p['cac_vnd'])
    payoff={t:sum(m*(1-c)**j for j in range(t)) for t in [5,6,7]}
    for t,v in payoff.items():assert math.isclose(v,m*(1-(1-c)**t)/c)
    assert round(payoff[5],2)==491412 and round(payoff[6],2)==562270.80 and round(payoff[7],2)==626043.72
    assert payoff[6]<cac<=payoff[7]
    assert math.isclose(sum(120000*.95**j for j in range(5)),542925.75)
    eps=read('support_episodes_simulated.csv');assert len(eps)==6 and len({r['episode_id'] for r in eps})==6
    assert all(r['data_type']=='SIMULATED' for r in rows+eps+[p])
    result['payback_vnd']=payoff;result['limitation']='Synthetic arithmetic checks, not causal or market validation'
    print(json.dumps(result,ensure_ascii=False,indent=2))
    return result
if __name__=='__main__':run()

import {describe,it,expect} from 'vitest';
import {weekly,weeklyGroups,summarize,ratio} from '../src/lib/metrics';
import {modules} from '../src/data/modules';import {grade} from '../src/lib/assessment';
describe('M1 independent curriculum answers',()=>{
 it('sums counts before division',()=>{const[a,b]=weeklyGroups('all');expect([a.eligible,a.sessions,a.assessed,a.passed]).toEqual([100,320,74,52]);expect([b.eligible,b.sessions,b.assessed,b.passed]).toEqual([100,460,47,30]);expect(a.passRate).toBeCloseTo(.7027027027);expect(b.passRate).toBeCloseTo(.6382978723);expect([a.lower,a.upper,b.lower,b.upper]).toEqual([.52,.78,.3,.83]);});
 it('filters both cohorts consistently',()=>{expect(weeklyGroups('novice').map(r=>r.passRate)).toEqual([.4,.4]);expect(weeklyGroups('experienced').map(r=>r.passRate)).toEqual([.75,.75]);expect(summarize(weekly.filter(r=>r.week==='cohort_week_2'&&r.segment==='novice')).coverage).toBe(.25);});
 it('preserves unknown on empty denominator',()=>{expect(ratio(0,0)).toBeNull();expect(summarize([]).passRate).toBeNull();});
 it('requires valid numeric and reasoning responses',()=>{const q=modules[0].primary;for(const bad of ['',' ','NaN','Infinity','0.7027','52','74'])expect(grade(q,bad,0).passed).toBe(false);expect(grade(q,'70.27',1).passed).toBe(false);expect(grade(q,'70.27',0).passed).toBe(true);expect(grade(q,'52',0).feedback).toContain('74');});
});

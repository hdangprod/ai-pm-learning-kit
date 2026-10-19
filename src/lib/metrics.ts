import weeklyData from '../data/weekly.json';
export type Segment = 'all' | 'novice' | 'experienced';
export type WeeklyRow = {week:string; segment:string; eligible:number; sessions:number; assessed:number; passed:number};
export const weekly: WeeklyRow[] = weeklyData;
export const ratio = (n:number,d:number):number|null => d > 0 ? n/d : null;
export const percent = (n:number|null) => n === null ? 'Not observable' : `${(n*100).toFixed(2)}%`;
export function summarize(rows:WeeklyRow[]) {
 const sums=rows.reduce((a,r)=>({eligible:a.eligible+r.eligible,sessions:a.sessions+r.sessions,assessed:a.assessed+r.assessed,passed:a.passed+r.passed}),{eligible:0,sessions:0,assessed:0,passed:0});
 return {...sums,coverage:ratio(sums.assessed,sums.eligible),passRate:ratio(sums.passed,sums.assessed),lower:ratio(sums.passed,sums.eligible),upper:ratio(sums.passed+sums.eligible-sums.assessed,sums.eligible)};
}
export function weeklyGroups(segment:Segment) {
 return ['cohort_week_1','cohort_week_2'].map(week=>({week,...summarize(weekly.filter(r=>r.week===week&&(segment==='all'||r.segment===segment)))}));
}

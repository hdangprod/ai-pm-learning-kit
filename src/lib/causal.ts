import weekly from '../data/weekly.json';
export type CausalCount=number|null|undefined;
export type CausalRow={week:string;segment:string;eligible:CausalCount;sessions:CausalCount;assessed:CausalCount;passed:CausalCount};
export const causalRows: CausalRow[]=weekly;
export const weeks=['cohort_week_1','cohort_week_2'] as const;
export type Week=typeof weeks[number];
export type CausalSegment='all'|'novice'|'experienced';
const fields=['eligible','sessions','assessed','passed'] as const;
function count(value:CausalCount){if(value!=null&&(!Number.isSafeInteger(value)||value<0))throw Error('Counts must be nonnegative safe integers or unknown.');}
export function validateCausalRows(rows:readonly CausalRow[]){
 const seen=new Set<string>();for(const row of rows){if(!weeks.includes(row.week as Week)||!['novice','experienced'].includes(row.segment))throw Error('Unknown cohort or segment.');const key=row.week+':'+row.segment;if(seen.has(key))throw Error('Duplicate cohort × segment row.');seen.add(key);for(const f of fields)count(row[f]);if(row.assessed!=null&&row.eligible!=null&&row.assessed>row.eligible||row.passed!=null&&row.assessed!=null&&row.passed>row.assessed||row.passed!=null&&row.eligible!=null&&row.passed>row.eligible)throw Error('Passed ≤ assessed ≤ eligible is required.');}
}
export function relativeChangePercent(reference:CausalCount,comparison:CausalCount){count(reference);count(comparison);return reference==null||comparison==null||reference===0?null:(comparison-reference)/reference*100;}
export function percentagePointChange(reference:CausalCount,comparison:CausalCount){for(const rate of [reference,comparison])if(rate!=null&&(!Number.isFinite(rate)||rate<0||rate>1))throw Error('Rates must be fractions from zero to one.');return reference==null||comparison==null?null:(comparison-reference)*100;}
export function summarizeCausal(rows:readonly CausalRow[]){
 validateCausalRows(rows);
 const sum=(field:typeof fields[number])=>{if(rows.some(row=>row[field]==null))return null;const total=rows.reduce((n,row)=>n+(row[field] as number),0);if(!Number.isSafeInteger(total))throw Error('Aggregate count exceeds safe integer range.');return total;};
 const eligible=sum('eligible'),sessions=sum('sessions'),assessed=sum('assessed'),passed=sum('passed');
 const rate=(n:number|null,d:number|null)=>n==null||d==null||d===0?null:n/d;
 return {eligible,sessions,assessed,passed,coverage:rate(assessed,eligible),passRate:rate(passed,assessed),missing:eligible==null||assessed==null?null:eligible-assessed};
}
export function compareCausalWeeks(rows:readonly CausalRow[],reference:Week='cohort_week_1',comparison:Week='cohort_week_2',segment:CausalSegment='all'){
 validateCausalRows(rows);if(!weeks.includes(reference)||!weeks.includes(comparison)||reference===comparison||!['all','novice','experienced'].includes(segment))throw Error('Select two distinct known weeks and a known segment.');
 const selected=rows.filter(r=>segment==='all'||r.segment===segment);
 const baseline=summarizeCausal(selected.filter(r=>r.week===reference)),followup=summarizeCausal(selected.filter(r=>r.week===comparison));
 return {baseline,followup,selected,sessionChange:relativeChangePercent(baseline.sessions,followup.sessions),coverageDifference:percentagePointChange(baseline.coverage,followup.coverage),passDifference:percentagePointChange(baseline.passRate,followup.passRate)};
}

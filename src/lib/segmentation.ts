import fixture from '../data/strict-simpson.json';
import {ratio,type Segment} from './metrics';
export const simpsonFixture=fixture;
export type Product='A'|'B';
export type SegmentationRow={product:string;segment:string;passed:number;assessed:number};
const products:Product[]=['A','B'];const strata=['novice','experienced'] as const;
function validate(rows:SegmentationRow[]){
 const keys=new Set<string>();
 for(const r of rows){
  if(!products.includes(r.product as Product)||!strata.includes(r.segment as typeof strata[number]))throw new Error('Invalid product or segment.');
  if(!Number.isSafeInteger(r.passed)||!Number.isSafeInteger(r.assessed)||r.passed<0||r.assessed<0||r.passed>r.assessed)throw new Error('Counts must be nonnegative safe integers with passed <= assessed.');
  const key=`${r.product}:${r.segment}`;if(keys.has(key))throw new Error('Duplicate product-segment key.');keys.add(key);
 }
}
export function aggregateSegments(rows:SegmentationRow[],product:Product,segment:Segment='all'){
 validate(rows);if(!products.includes(product)||!['all',...strata].includes(segment))throw new Error('Invalid product or segment filter.');
 const selected=rows.filter(r=>r.product===product&&(segment==='all'||r.segment===segment));
 const passed=selected.reduce((n,r)=>n+r.passed,0),assessed=selected.reduce((n,r)=>n+r.assessed,0);
 if(!Number.isSafeInteger(passed)||!Number.isSafeInteger(assessed))throw new Error('Aggregate count exceeds safe integer range.');
 return {product,passed,assessed,rate:ratio(passed,assessed)};
}
export function compareSegments(rows:SegmentationRow[],segment:Segment='all'){
 const a=aggregateSegments(rows,'A',segment),b=aggregateSegments(rows,'B',segment);
 const difference=a.rate===null||b.rate===null?null:b.rate-a.rate;
 return {a,b,difference,relativeChange:difference===null||a.rate===null?null:ratio(difference,a.rate)};
}
export function reversalSummary(rows:SegmentationRow[]){
 const pooled=compareSegments(rows);const groups=strata.map(segment=>({segment,...compareSegments(rows,segment)}));
 const complete=pooled.difference!==null&&groups.every(g=>g.difference!==null);
 const strictReversal=complete?((groups.every(g=>g.difference!>0)&&pooled.difference!<0)||(groups.every(g=>g.difference!<0)&&pooled.difference!>0)):null;
 return {pooled,groups,strictReversal};
}
export function reweightSegments(rows:SegmentationRow[],weights:Record<Product,number>){
 validate(rows);
 const values=products.map(product=>{
  const noviceWeight=weights[product];if(!Number.isFinite(noviceWeight)||noviceWeight<0||noviceWeight>1)throw new Error('Weights must be finite proportions from 0 to 1.');
  const novice=aggregateSegments(rows,product,'novice').rate,experienced=aggregateSegments(rows,product,'experienced').rate;
  const rate=(noviceWeight>0&&novice===null)||((1-noviceWeight)>0&&experienced===null)?null:noviceWeight*(novice??0)+(1-noviceWeight)*(experienced??0);
  return {product,noviceWeight,experiencedWeight:1-noviceWeight,noviceRate:novice,experiencedRate:experienced,rate};
 });
 const [a,b]=values;return {a,b,difference:a.rate===null||b.rate===null?null:b.rate-a.rate};
}
export const points=(difference:number|null)=>difference===null?'Unavailable':`${difference>=0?'+':''}${(difference*100).toFixed(2)} pp`;

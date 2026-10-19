export type Choice={id?:string;label:string;feedback:string;correct?:boolean};
export type Question={id?:string;prompt:string;expected?:number;unit?:string;reasonPrompt:string;choices:Choice[];solution:string;hints?:Record<string,string>;items?:{prompt:string;choices:Choice[]}[]};
export type Result={passed:boolean;numeric:boolean;reasoning:boolean;feedback:string};
export const groups=(q:Question)=>[q.choices,...(q.items??[]).map(i=>i.choices)];
export const choiceId=(c:Choice,i:number)=>c.id??`legacy-option-${i}`;
export function gradeByIds(q:Question,input:string,answers:readonly (string|null|undefined)[]):Result {
 const selected=groups(q).map((choices,g)=>choices.find((c,i)=>choiceId(c,i)===answers[g]));
 const numeric=q.expected===undefined || (input.trim()!==''&&Number.isFinite(Number(input))&&Math.abs(Number(input)-q.expected)<=.02);
 const reasoning=selected.every(c=>c?.correct===true);
 const extraFeedback=(q.items??[]).map((item,i)=>selected[i+1]?.feedback??`Choose an answer: ${item.prompt}`).join(' ');
 const numericFeedback=numeric?'Calculation checked.':q.hints?.[input.trim()]??'Check the numerator, denominator and window. Enter a percentage such as 70.27, not a proportion such as 0.7027.';
 return {passed:numeric&&reasoning,numeric,reasoning,feedback:`${q.expected===undefined?'':numericFeedback+' '}${selected[0]?.feedback??'Choose an interpretation so we can check your reasoning.'}${extraFeedback?' '+extraFeedback:''}`};
}
// Compatibility adapter: indices ALWAYS refer to original canonical definitions, never display order.
export function grade(q:Question,input:string,choice:number,extraChoices:number[]=[]):Result {
 return gradeByIds(q,input,groups(q).map((choices,g)=>{const i=[choice,...extraChoices][g];return choices[i]?choiceId(choices[i],i):'';}));
}

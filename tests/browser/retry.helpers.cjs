async function check(page,name){
 const stage=name==='Check my reasoning'?'Primary':name==='Check transfer answer'?'Transfer':name==='Submit initial decision'?'Initial':name==='Submit revised decision'?'Revised':'Transfer';
 const field=page.getByLabel(`${stage} reasoning change`,{exact:true});
 if(await field.count())await field.fill('I rechecked the evidence, denominator and decision scope before retrying.');
 await page.getByRole('button',{name,exact:true}).click();
}
module.exports={check};

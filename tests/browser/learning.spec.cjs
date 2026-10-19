const {settleEvidence}=require('./persistence.helpers.cjs');
const {check}=require('./retry.helpers.cjs');
const {test,expect} = require('@playwright/test');
test('denominator learning loop, persistence and responsive layout',async({page},testInfo)=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/');
 await expect(page.getByRole('heading',{name:'Every number needs a denominator.'})).toBeVisible();
 await page.screenshot({path:`docs/verification/module-one-${testInfo.project.name}-initial.png`,fullPage:true});
 await page.screenshot({path:`docs/verification/module-one-${testInfo.project.name}-viewport.png`});
 await expect(page.getByRole('button',{name:'Reveal solution after an attempt'})).toBeDisabled();
 await page.getByLabel('Segment',{exact:true}).selectOption('novice');await expect(page.getByText('40.00%',{exact:true}).first()).toBeVisible();
 await page.getByLabel('Measure',{exact:true}).selectOption('coverage');await expect(page.getByText('25.00%',{exact:true}).first()).toBeVisible();
 await page.getByLabel('Primary calculation').fill('52');await page.getByLabel('This is the share who passed among assessed learners; missing outcomes remain unknown.').check();await check(page,'Check my reasoning');await expect(page.getByRole('status')).toContainText('74');
 await page.getByLabel('Primary calculation').fill('70.27');await check(page,'Check my reasoning');await expect(page.getByRole('status')).toContainText('Practice check passed');
 await page.getByRole('button',{name:'Try a different question'}).click();await page.getByLabel('Transfer calculation').fill('47');await page.getByLabel('Keep their outcomes unknown and report coverage.').check();await check(page,'Check transfer answer');await expect(page.getByText(/Practice verified/)).toBeVisible();
 await page.getByRole('region',{name:'Practice exercise'}).screenshot({path:`docs/verification/module-one-${testInfo.project.name}-feedback.png`});
 await page.getByLabel('What do you expect to find?').fill('More sessions could mean friction.');await settleEvidence(page);await page.reload();await expect(page.getByLabel('What do you expect to find?')).toHaveValue('More sessions could mean friction.');await expect(page.getByText('1 / 6',{exact:true})).toBeVisible();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
 const download=page.waitForEvent('download');await page.getByRole('button',{name:'Export my work'}).click();expect((await download).suggestedFilename()).toBe('ai-pm-learning-journal.json');
 await page.evaluate(()=>window.scrollTo(0,0));
 await page.screenshot({path:`docs/verification/module-one-${testInfo.project.name}-completed.png`,fullPage:true});expect(errors).toEqual([]);
});
test('source downloads, keyboard chart, solution history and reset',async({page,request})=>{
 await page.goto('/');
 const csv=await request.get('/data/case_b_weekly.csv');expect(csv.ok()).toBe(true);expect(await csv.text()).toContain('SIMULATED,cohort_week_1,experienced,80,240,64,48');
 for(const source of ['Tap_I_Revised.md','Tap_II_Revised.md'])expect((await request.get(`/sources/${source}`)).ok()).toBe(true);
 const bar=page.getByRole('button',{name:'Week 1 70.27%'});await bar.focus();await page.keyboard.press('Enter');await expect(page.getByText('52 ÷ 74 assessed learners = 70.27%. Not all eligible outcomes are known.')).toBeVisible();
 await check(page,'Check my reasoning');await expect(page.getByRole('status')).toContainText('Choose an interpretation');
 await page.getByRole('button',{name:'Reveal solution after an attempt'}).click();await expect(page.getByText('Instructor explanation')).toBeVisible();await page.getByRole('button',{name:'Hide solution'}).click();
 expect(await page.evaluate(()=>JSON.parse(localStorage.getItem('ai-pm-lab:v1')).modules[1].revealed)).toBe(true);
 await page.evaluate(()=>localStorage.setItem('unrelated-work','keep'));
 await page.getByRole('button',{name:'Reset progress'}).click();await page.getByRole('button',{name:'Cancel',exact:true}).click();expect(await page.evaluate(()=>localStorage.getItem('ai-pm-lab:v1'))).not.toBeNull();
 await page.getByRole('button',{name:'Reveal solution after an attempt'}).click();await page.getByRole('button',{name:'Reset progress'}).click();await page.getByRole('button',{name:'Yes, reset'}).click();
 await expect(page.getByText('Instructor explanation')).toHaveCount(0);await expect(page.getByRole('status')).toHaveCount(0);await expect(page.getByLabel('Primary calculation')).toHaveValue('');await expect(page.getByRole('button',{name:'Reveal solution after an attempt'})).toBeDisabled();expect(await page.evaluate(()=>localStorage.getItem('unrelated-work'))).toBe('keep');
});
test('unavailable browser storage warns and preserves session work',async({page})=>{
 await page.addInitScript(()=>{Storage.prototype.setItem=function(){throw new DOMException('Storage unavailable','QuotaExceededError');};});
 await page.goto('/');await page.getByLabel('What do you expect to find?').fill('Coverage matters.');await expect(page.getByRole('status')).toContainText('Browser storage is unavailable');await expect(page.getByLabel('What do you expect to find?')).toHaveValue('Coverage matters.');
});

const {expect}=require('@playwright/test');
// Web Locks persistence is asynchronous. Keep original assertions; await the displayed save boundary.
async function settleEvidence(page){await expect(page.getByText('Saving changes…',{exact:true})).toHaveCount(0);}
module.exports={settleEvidence};

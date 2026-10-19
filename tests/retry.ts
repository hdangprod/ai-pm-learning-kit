import {screen,fireEvent} from '@testing-library/react';
// Existing learning-loop tests now supply the newly required learner-authored reflection.
// Dedicated remediation tests separately assert that a blank retry is blocked.
export function prepareRetry(name:string){
 const stage=name==='Check my reasoning'?'Primary':name==='Check transfer answer'?'Transfer':name==='Submit initial decision'?'Initial':name==='Submit revised decision'?'Revised':name==='Check transfer decision'?'Transfer':null;
 if(!stage)return;const field=screen.queryByLabelText(`${stage} reasoning change`);if(field)fireEvent.change(field,{target:{value:'I rechecked the selected evidence, denominator and scope before retrying.'}});
}

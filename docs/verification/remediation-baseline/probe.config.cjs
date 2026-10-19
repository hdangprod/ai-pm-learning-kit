const base=require('../../../playwright.config.cjs');
module.exports={...base,testDir:__dirname+'/probes',projects:[{name:'baseline-desktop',use:base.projects[0].use}]};

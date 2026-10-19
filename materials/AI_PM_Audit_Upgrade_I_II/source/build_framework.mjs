import fs from 'node:fs/promises';
import {Workbook, SpreadsheetFile} from '@oai/artifact-tool';
const root=new URL('../',import.meta.url).pathname.replace(/\/$/,'');
const data=JSON.parse(await fs.readFile(root+'/source/competencies.json','utf8'));
const wb=Workbook.create();
const specifications=[
 ['Cong_viec',['ID','Năng lực','Trách nhiệm thực tế','Đầu ra công việc','Ownership','Bằng chứng mastery'],['id','name','task','deliverable','owner','mastery'],[65,220,350,300,310,380]],
 ['Chuan_hoc',['ID','Kiến thức cần hiểu','Bài thực hành','Mức tối thiểu có giám sát','Mức nâng cao','Nguồn'],['id','knowledge','practice','minimum','advanced','sources'],[65,350,350,380,350,100]],
 ['Bao_phu',['ID','Trang PDF gốc','Bao phủ thực','Điểm 0–4','Gap','Kế hoạch cũ','Chương mới','Hành động'],['id','page','coverage','score','gap','old','next','action'],[65,280,155,85,380,240,120,360]],
];
function setup(name,title,headers,rows,widths){
 const s=wb.worksheets.add(name);s.showGridLines=false;
 s.getRange('A2').values=[[title]];
 s.getRange('A2').format.font={name:'Arial',size:15,bold:true};
 s.getRange('A4').write([headers,...rows]);
 const end=String.fromCharCode(64+headers.length);
 const area=s.getRange('A4:'+end+(rows.length+4));
 area.format.font={name:'Arial',size:11,color:'#17212C'};
 area.format.wrapText=true;area.format.verticalAlignment='center';
 s.getRange('A4:'+end+'4').format={fill:'#23364D',font:{name:'Arial',size:11,bold:true,color:'#FFFFFF'},wrapText:true,rowHeight:36};
 s.getRange('A5:'+end+(rows.length+4)).format.rowHeight=91;
 widths.forEach((w,i)=>s.getRange(String.fromCharCode(65+i)+'1:'+String.fromCharCode(65+i)+(rows.length+4)).format.columnWidthPx=w);
 for(let i=0;i<rows.length;i++)if(i%2===1)s.getRange('A'+(i+5)+':'+end+(i+5)).format.fill='#F0F4F7';
 s.freezePanes.freezeRows(4);
 s.tables.add('A4:'+end+(rows.length+4),true,name+'Table');
 return s;
}
for(const [name,headers,keys,widths] of specifications)setup(name,name==='Cong_viec'?'Chuẩn nhiệm vụ Applied AI PM':name==='Chuan_hoc'?'Năng lực học và mức thành thạo':'Bao phủ của Tập I và II trước chỉnh sửa',headers,data.map(x=>keys.map(k=>x[k])),widths);
const self=setup('Tu_danh_gia','Đánh giá bằng sản phẩm công việc',['ID','Năng lực','Điểm 0–3','Đường dẫn hoặc mô tả bằng chứng','Người phản biện và ngày','Trạng thái hồ sơ'],data.map(x=>[x.id,x.name,null,null,null,null]),[65,250,100,400,260,230]);
self.getRange('A3').values=[['0 mới bắt đầu; 1 đang phát triển; 2 làm việc có giám sát; 3 nâng cao. Để trống khi chưa đánh giá.']];
self.getRange('C5:E20').format.fill='#FFF2CC';
self.getRange('C5:C20').dataValidation={rule:{type:'whole',operator:'between',formula1:0,formula2:3}};
self.getRange('F5:F20').formulas=data.map((_,i)=>{const r=i+5;return ['=IF(ISNUMBER(C'+r+'),IF(OR(C'+r+'<0,C'+r+'>3),"Điểm không hợp lệ",IF(OR(D'+r+'="",E'+r+'=""),"Thiếu minh chứng/reviewer","Chờ đánh giá theo rubric")),"Chưa đánh giá")'];});
self.getRange('A23').values=[['Không cộng điểm để chứng nhận nghề. Mức 2 cần đủ bằng chứng C01–C16 và không có lỗi nghiêm trọng.']];
self.getRange('A24').values=[['Xem AI_PM_Job_Readiness_Rubric.md. Bảng này không xác nhận người học đã đạt mức nào.']];
const sources=[
 ['J1','Engine Applied AI','https://job-boards.greenhouse.io/engine/jobs/7992538003','Applied workflow; JD có kinh nghiệm'],
 ['J2','OpenAI API Agents','https://openai.com/careers/product-manager-api-agents-san-francisco/','Platform; 5+ năm'],
 ['J3','OpenAI API Infrastructure','https://openai.com/careers/product-manager-api-infrastructure-san-francisco/','Platform controls, metering và cost'],
 ['J4','OpenAI Core Models','https://openai.com/careers/product-manager-core-models-san-francisco/','Research/model; nhánh chuyên sâu'],
 ['J5','Anthropic Enterprise Privacy','https://job-boards.greenhouse.io/anthropic/jobs/5434369008','Privacy chuyên biệt; preferred 8+ năm'],
 ['J6','OpenAI Technology Vertical','https://openai.com/careers/product-manager-technology-vertical-san-francisco/','Applied enterprise'],
 ['T1','OpenAI Evaluation best practices','https://developers.openai.com/api/docs/guides/evaluation-best-practices','Task-specific eval; không lấy ngưỡng ví dụ làm chuẩn'],
 ['T2','Anthropic Building effective agents','https://www.anthropic.com/engineering/building-effective-agents','2024; chỉ nguyên tắc kiến trúc'],
 ['T3','NIST AI RMF','https://www.nist.gov/itl/ai-risk-management-framework','Tự nguyện; đang sửa RMF 1.0'],
 ['T4','Google SRE Service Level Objectives','https://sre.google/sre-book/service-level-objectives/','SLI/SLO và latency distribution'],
 ['T5','Microsoft Pre-Experiment Stage','https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/','2020; hypotheses, metric, power, logging'],
 ['T6','NIST Playbook','https://airc.nist.gov/airmf-resources/playbook/','Govern/Map/Measure/Manage; không checklist bắt buộc'],
];
setup('Nguon','Nguồn đã truy cập ngày 17 tháng 10 năm 2026',['ID','Tiêu đề','URL chính thức','Phạm vi và giới hạn'],sources,[65,300,700,380]);
// Behavior checks; every temporary change is restored.
self.getRange('C5:E5').values=[[2,null,null]];wb.recalculate();
if(!String(self.getRange('F5').values[0][0]).includes('Thiếu'))throw Error('Missing evidence gate failed');
self.getRange('C5:E5').values=[[2,'test evidence','test reviewer']];wb.recalculate();
if(!String(self.getRange('F5').values[0][0]).includes('Chờ'))throw Error('Evidence state failed');
self.getRange('C5:E5').values=[[null,null,null]];
wb.recalculate();
console.log((await wb.inspect({kind:'table',range:'Tu_danh_gia!C5:F6',include:'values,formulas',tableMaxRows:2,tableMaxCols:4,maxChars:2000})).ndjson);
console.log((await wb.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!',options:{useRegex:true,maxResults:30},summary:'Formula check',maxChars:1000})).ndjson);
for(const name of ['Cong_viec','Chuan_hoc','Bao_phu','Tu_danh_gia','Nguon']){
 const cols=name==='Bao_phu'?'H':name==='Nguon'?'D':'F';
 const b=await wb.render({sheetName:name,range:'A1:'+cols+'8',scale:1,format:'png'});
 await fs.mkdir(root+'/previews',{recursive:true});
 await fs.writeFile(root+'/previews/'+name+'.png',new Uint8Array(await b.arrayBuffer()));
}
const out=await SpreadsheetFile.exportXlsx(wb);
await out.save(root+'/AI_PM_Competency_Framework.xlsx');
console.log('Workbook saved');

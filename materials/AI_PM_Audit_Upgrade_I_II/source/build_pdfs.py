"""Render Markdown student and instructor books with Unicode fonts and linked TOCs."""
from pathlib import Path
import re,html
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.platypus import BaseDocTemplate,PageTemplate,Frame,Paragraph,Spacer,PageBreak,Table,TableStyle,Image,KeepTogether
from reportlab.platypus.tableofcontents import TableOfContents
ROOT=Path(__file__).resolve().parents[1]
FONT='/usr/share/fonts/truetype/dejavu/'
for n,f in [('DV','DejaVuSans.ttf'),('DVB','DejaVuSans-Bold.ttf'),('DVI','DejaVuSans.ttf')]:pdfmetrics.registerFont(TTFont(n,FONT+f))
pdfmetrics.registerFontFamily('DV',normal='DV',bold='DVB',italic='DVI',boldItalic='DVB')
W,H=A4;M=52;CW=W-2*M
ST={
 'body':ParagraphStyle('body',fontName='DV',fontSize=10.2,leading=15,spaceAfter=7,splitLongWords=True),
 'title':ParagraphStyle('title',fontName='DVB',fontSize=24,leading=30,spaceAfter=18),
 'h1':ParagraphStyle('h1',fontName='DVB',fontSize=17,leading=23,spaceAfter=13,keepWithNext=True),
 'h2':ParagraphStyle('h2',fontName='DVB',fontSize=12.5,leading=18,spaceBefore=11,spaceAfter=7,keepWithNext=True),
 'h3':ParagraphStyle('h3',fontName='DVB',fontSize=11,leading=16,spaceBefore=8,spaceAfter=6,keepWithNext=True),
 'small':ParagraphStyle('small',fontName='DVI',fontSize=8.4,leading=12,spaceAfter=9),
 'cell':ParagraphStyle('cell',fontName='DV',fontSize=8.3,leading=11.8),
 'head':ParagraphStyle('head',fontName='DVB',fontSize=8.5,leading=12,textColor=colors.white),
}
def markup(s):
 s=html.escape(s)
 s=re.sub(r'\*\*(.*?)\*\*',r'<b>\1</b>',s)
 s=re.sub(r'`(.*?)`',r'\1',s)
 return s
class Book(BaseDocTemplate):
 def __init__(self,path,label):
  super().__init__(str(path),pagesize=A4,leftMargin=M,rightMargin=M,topMargin=48,bottomMargin=48,title=label,author='Giáo trình Applied AI PM')
  self.label=label;self.addPageTemplates(PageTemplate(id='normal',frames=Frame(M,48,CW,H-96,id='body',leftPadding=0,rightPadding=0,topPadding=0,bottomPadding=0),onPage=self.footer))
 def footer(self,c,d):
  c.saveState();c.setFont('DV',8);c.setFillColor(colors.HexColor('#526173'));c.drawString(M,27,self.label);c.drawRightString(W-M,27,str(d.page));c.restoreState()
 def afterFlowable(self,f):
  if isinstance(f,Paragraph) and getattr(f,'bookmark',None):
   key=f.bookmark;self.canv.bookmarkPage(key);self.canv.addOutlineEntry(f.getPlainText(),key,0,False)
   self.notify('TOCEntry',(0,f.getPlainText(),self.page,key))
def build(stem):
 text=(ROOT/'source'/(stem+'.md')).read_text();lines=text.splitlines();story=[];first=True;i=0;idx=0
 while i<len(lines):
  l=lines[i].strip();i+=1
  if not l:continue
  if l=='[[TOC]]':
   toc=TableOfContents();toc.levelStyles=[ParagraphStyle('toc',fontName='DV',fontSize=10,leading=16,spaceBefore=7,leftIndent=0,firstLineIndent=0)];story+=[toc,Spacer(1,14)];continue
  if l.startswith('# '):
   if first:story.append(Paragraph(markup(l[2:]),ST['title']));first=False
   else:
    story.append(PageBreak());p=Paragraph(markup(l[2:]),ST['h1']);p.bookmark=stem+'_'+str(idx);idx+=1;story.append(p)
   continue
  if l.startswith('## '):
   if l=='## Mục lục':story.append(PageBreak())
   story.append(Paragraph(markup(l[3:]),ST['h2']));continue
  if l.startswith('### '):story.append(Paragraph(markup(l[4:]),ST['h3']));continue
  if l.startswith('!['):
   m=re.match(r'!\[(.*?)\]\((.*?)\)',l);path=(ROOT/'source'/m.group(2)).resolve()
   from PIL import Image as PI
   with PI.open(path) as p:w,h=p.size
   image=Image(str(path),width=CW,height=CW*h/w)
   story.append(KeepTogether([Spacer(1,6),image,Paragraph(markup(m.group(1)),ST['small'])]));continue
  if l.startswith('|'):
   block=[l]
   while i<len(lines) and lines[i].strip().startswith('|'):block.append(lines[i].strip());i+=1
   rows=[[x.strip() for x in row.strip('|').split('|')] for row in block if not re.match(r'^\|[ :\-|]+\|$',row)]
   n=len(rows[0]);ratios={2:[.32,.68],3:[.25,.38,.37],4:[.26,.23,.23,.28]}.get(n,[1/n]*n)
   parsed=[[Paragraph(markup(x),ST['head' if j==0 else 'cell']) for x in row] for j,row in enumerate(rows)]
   t=Table(parsed,colWidths=[CW*r for r in ratios],repeatRows=1,hAlign='LEFT')
   t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),colors.HexColor('#23364D')),('ROWBACKGROUNDS',(0,1),(-1,-1),[colors.white,colors.HexColor('#F1F5F7')]),('GRID',(0,0),(-1,-1),.4,colors.HexColor('#D9D9D9')),('VALIGN',(0,0),(-1,-1),'MIDDLE'),('LEFTPADDING',(0,0),(-1,-1),7),('RIGHTPADDING',(0,0),(-1,-1),7),('TOPPADDING',(0,0),(-1,-1),7),('BOTTOMPADDING',(0,0),(-1,-1),7)]))
   story.extend([t,Spacer(1,10)]);continue
  if l.startswith('- '):l='• '+l[2:]
  story.append(Paragraph(markup(l),ST['body']))
 label={'Tap_I_Revised':'Applied AI PM | Tập I | Bản 2.0','Tap_II_Revised':'Applied AI PM | Tập II | Bản 2.0','Instructor_Guide_I_II':'Applied AI PM | Hướng dẫn giảng viên'}[stem]
 Book(ROOT/(stem+'.pdf'),label).multiBuild(story)
 print(stem)
if __name__=='__main__':
 for stem in ['Tap_I_Revised','Tap_II_Revised','Instructor_Guide_I_II']:build(stem)

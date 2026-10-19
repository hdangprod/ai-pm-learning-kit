"""Original editable diagrams and reproducible charts for Volumes I-II."""
from pathlib import Path
import csv
import json
import textwrap
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'figures'
OUT.mkdir(exist_ok=True)
plt.rcParams.update({'font.family': 'DejaVu Sans', 'font.size': 10,
                     'axes.spines.top': False, 'axes.spines.right': False})
NAVY, TEAL, PALE, INK = '#23364D', '#167D8D', '#EAF3F5', '#17212C'

def canvas(title, note, size=(9, 5.2)):
    fig, ax = plt.subplots(figsize=size)
    ax.set(xlim=(0, 10), ylim=(0, 6)); ax.axis('off')
    fig.suptitle(title, x=.06, y=.98, ha='left', fontsize=14, weight='bold', color=INK)
    fig.text(.06, .025, note, fontsize=8.5, color='#4A5865')
    fig.subplots_adjust(left=.03, right=.98, top=.88, bottom=.10)
    return fig, ax

def box(ax, x, y, text, w=2.5, h=.85, fill=PALE, color=INK, wrap=24):
    ax.add_patch(FancyBboxPatch((x-w/2, y-h/2), w, h,
                 boxstyle='round,pad=0.07,rounding_size=.10', facecolor=fill,
                 edgecolor='#B0C5CE', lw=1.1))
    ax.text(x, y, '\n'.join(textwrap.wrap(text, wrap)), ha='center', va='center',
            color=color, fontsize=10, linespacing=1.4)

def arrow(ax, a, b, label=None, rad=0):
    ax.add_patch(FancyArrowPatch(a,b,arrowstyle='-|>',mutation_scale=12,
                 color=TEAL,linewidth=1.4,connectionstyle=f'arc3,rad={rad}'))
    if label: ax.text((a[0]+b[0])/2, (a[1]+b[1])/2+.13, label,
                       ha='center', fontsize=8.5, color=TEAL)

def save(fig, n):
    fig.savefig(OUT/f'fig{n:02}.png', dpi=190, facecolor='white')
    fig.savefig(OUT/f'fig{n:02}.svg', facecolor='white')
    plt.close(fig)

fig, ax=canvas('1  Hai dòng công việc cùng phục vụ kết quả', 'Nguồn: sơ đồ gốc phục vụ giảng dạy; không phải số liệu thị trường.')
box(ax,5,5.35,'Kết quả người dùng và kinh doanh',w=4.0,fill='#D7EBEF',wrap=36)
box(ax,2.2,3.85,'Khám phá vấn đề và giả định',w=3.2)
box(ax,2.2,2.15,'So sánh lựa chọn và kiểm giả định',w=3.2)
box(ax,7.8,3.85,'Thiết kế và triển khai',w=3.2)
box(ax,7.8,2.15,'Vận hành và theo dõi',w=3.2)
box(ax,5,.65,'Bằng chứng mới và điều chỉnh',w=4.0,wrap=36)
for a,b in [((4,4.9),(2.2,4.3)),((6,4.9),(7.8,4.3)),((2.2,3.4),(2.2,2.6)),((3.9,2.15),(6.1,3.85)),((7.8,3.4),(7.8,2.6)),((7.8,1.7),(6,.95)),((4,.95),(2.2,1.7))]:arrow(ax,a,b)
save(fig,1)

fig, ax=canvas('2  Nhiều cơ chế có thể tạo cùng một biểu hiện', 'GIẢ THUYẾT phân tích; mũi tên chưa phải quan hệ nhân quả đã kiểm.')
for x,t in [(1.35,'Feedback ban đầu sai'),(3.8,'Chưa có luyện phù hợp'),(6.2,'Khác modality hoặc độ khó'),(8.65,'Áp lực thời gian và lo lắng')]:
    box(ax,x,4.6,t,w=2.12,h=1.25,wrap=18);arrow(ax,(x,3.94),(5,2.55))
box(ax,5,2,'Tự dùng lại chưa tốt ở nhiệm vụ mới',w=4.6,h=1.05,wrap=35)
ax.text(5,.62,'Cần cùng trọng tâm, cơ hội dùng lại và tiêu chí đánh giá.',ha='center',fontsize=10)
save(fig,2)

fig, ax=plt.subplots(figsize=(9,4.9))
rates=[i/100 for i in range(2,16)]
ltvs=[.12/c for c in rates]
ax.plot([r*100 for r in rates],ltvs,color=TEAL,lw=2.5,marker='o',ms=4)
ax.set(xlabel='Churn mỗi tháng (%)',ylabel='LTV đóng góp (triệu đồng)',ylim=(0,6.5),xlim=(1.5,15.5))
ax.set_title('3  LTV phụ thuộc mạnh vào giả định churn',loc='left',pad=15,weight='bold')
ax.grid(axis='y',alpha=.2)
fig.text(.13,.015,'MÔ PHỎNG: 120.000 đồng đóng góp/tháng; LTV = 120.000 / churn. Không chiết khấu.',fontsize=8)
fig.subplots_adjust(bottom=.18)
save(fig,3)
with (ROOT/'practice/ltv_simulated.csv').open('w',newline='',encoding='utf-8') as f:
    w=csv.writer(f);w.writerow(['monthly_churn','monthly_contribution_vnd','ltv_vnd','data_type'])
    w.writerows((r,120000,120000/r,'simulated') for r in rates)

fig, ax=canvas('4  Kiểm tra trước khi đầu tư vào lời giải mới', 'ĐỀ XUẤT giảng dạy; từng gate cần dữ liệu và phạm vi quyết định rõ.')
box(ax,5,5.3,'Job có hệ quả đáng ưu tiên?',w=3.6)
box(ax,2.25,3.35,'Chưa rõ: thu episode và hệ quả',w=3.45)
box(ax,7.65,3.35,'Thử lựa chọn hiện có đúng job',w=3.45)
box(ax,5.5,1.3,'Đạt đủ: hướng dẫn hoặc dừng gap claim',w=3.5,wrap=28)
box(ax,8.9,1.3,'Gap còn: nghiên cứu sâu',w=1.85,h=1.2,wrap=14)
arrow(ax,(4,4.85),(2.25,3.8),'Chưa rõ');arrow(ax,(6,4.85),(7.65,3.8),'Có')
arrow(ax,(7.0,2.9),(5.5,1.78));arrow(ax,(8.3,2.9),(8.9,1.95))
save(fig,4)

fig, ax=canvas('5  Ai có cơ hội xuất hiện trong corpus?', 'Sơ đồ khái niệm; không có số đếm sàng lọc và không phải PRISMA đã thực hiện.')
texts=['Tổng thể quan tâm','Có mặt trên nền tảng được tìm','Chọn đăng trải nghiệm','Truy vấn tìm thấy nội dung','Nghiên cứu giữ record']
for i,t in enumerate(texts):
    y=5.35-i*1.03;box(ax,4.2,y,t,w=7-i*.8,h=.70,fill=plt.cm.Blues(.12+i*.06),wrap=45)
    if i<4:arrow(ax,(4.2,y-.4),(4.2,y-.61))
ax.text(8.4,2.8,'Mỗi lớp có thể\nthay đổi cơ cấu\nđược nhìn thấy.',ha='center',va='center',color=TEAL,fontsize=11)
save(fig,5)

fig, ax=canvas('6  Dựng lại một episode trước khi diễn giải', 'ĐỀ XUẤT interview; gắn Reported, Observed hoặc Unknown cho từng mắt xích.')
for x,y,t in [(1.75,4.6,'Trigger và mục tiêu'),(5,4.6,'Workflow và feedback'),(8.25,4.6,'Hành động tiếp'),(8.25,2.4,'Hệ quả đã xảy ra'),(5,2.4,'Workaround đã thử'),(1.75,2.4,'Counterepisode thành công')]:box(ax,x,y,t,w=2.6,h=.98,wrap=22)
for a,b in [((3.12,4.6),(3.63,4.6)),((6.37,4.6),(6.88,4.6)),((8.25,4.05),(8.25,2.95)),((6.88,2.4),(6.37,2.4)),((3.63,2.4),(3.12,2.4))]:arrow(ax,a,b)
ax.text(5,.65,'Artifact có consent giúp kiểm một phần; không tự xác nhận cả chuỗi.',ha='center',fontsize=10)
save(fig,6)

fig, ax=canvas('7  Journey là bản đồ câu hỏi cần kiểm', 'MÔ PHỎNG: một episode email công việc; chưa phải journey đã quan sát.')
stages=[('Chuẩn bị email','Ý nào cần giữ?'),('Xin AI sửa','Feedback có đúng?'),('Gửi bản sửa','Đã đọc hay copy?'),('Tác vụ mới','Có cơ hội dùng lại?')]
for i,(t,q) in enumerate(stages):
    x=1.3+i*2.45;box(ax,x,4.35,t,w=2.08,h=1,wrap=18)
    box(ax,x,2.25,q,w=2.08,h=1.2,fill='#F5F1E7',wrap=18)
    arrow(ax,(x,3.8),(x,2.9))
    if i<3:arrow(ax,(x+1.1,4.35),(x+1.35,4.35))
ax.text(5,.55,'Một bước không xảy ra phải được ghi; không tự điền bằng kỳ vọng của analyst.',ha='center',fontsize=9)
save(fig,7)

fig, ax=canvas('8  So sánh lời giải cho cùng một cơ hội', 'Cây GIẢ THUYẾT dạy học, gợi ý bởi OST; chưa xác nhận bằng phỏng vấn dự án.')
box(ax,5,5.25,'Tự dùng đúng ở nhiệm vụ mới',w=4)
box(ax,2.35,3.45,'Khó duy trì ôn sau feedback',w=3.7)
box(ax,7.65,3.45,'Không biết ưu tiên nội dung nào',w=3.7)
for x,t in [(1.25,'AI hiện có + sổ lỗi'),(3.75,'Người hỗ trợ'),(6.25,'Rubric + hướng dẫn'),(8.75,'Workflow hiện có')]:box(ax,x,1.6,t,w=2.1,h=1.05,wrap=17)
for a,b in [((4,4.8),(2.35,3.9)),((6,4.8),(7.65,3.9)),((1.8,3),(1.25,2.2)),((2.9,3),(3.75,2.2)),((7.1,3),(6.25,2.2)),((8.2,3),(8.75,2.2))]:arrow(ax,a,b)
ax.text(5,.38,'Cần kiểm: tự duy trì được? Bài mới đạt? Effort chấp nhận được?',ha='center',fontsize=9)
save(fig,8)

data=json.loads((ROOT/'instructor/audit_results.json').read_text())
labels=['Segment','Trình độ','Quote raw','Hành vi được kể','Trigger','Outcome được kể','Workaround','Trạng thái dừng/đổi','Payment/commitment']
metrics=list(data['missing_raw_among_english_active_ai'].values())
values=[m['numerator']/m['denominator']*100 for m in metrics]
fig,ax=plt.subplots(figsize=(9,5.8))
ax.barh(labels[::-1],values[::-1],color=TEAL)
for i,v in enumerate(values[::-1]):ax.text(v+1,i,f'{v:.1f}%',va='center',fontsize=9)
ax.set(xlim=(0,105),xlabel='Phần trăm ô thiếu theo quy tắc raw (%)')
ax.set_title('9  Thiếu thông tin cản việc phân nhóm và truy vết',loc='left',weight='bold',pad=14)
fig.text(.03,.02,'DỮ LIỆU HỒ SƠ V2.1; mẫu số 107 English active AI records. Không là tỷ lệ dân số.',fontsize=8)
fig.subplots_adjust(left=.27,bottom=.16,top=.87)
save(fig,9)

counts=data['platform_counts']; items=sorted(counts.items(),key=lambda x:x[1])
fig,ax=plt.subplots(figsize=(9,5.7))
ax.barh([x[0] for x in items],[x[1] for x in items],color=[TEAL if x[0] in ('Reddit','Trustpilot') else '#A7BBC8' for x in items])
for i,(_,n) in enumerate(items):ax.text(n+1,i,str(n),va='center',fontsize=9)
ax.set(xlim=(0,77),xlabel='Số retained evidence records')
ax.set_title('10  Hai nền tảng chiếm 135 trên 200 record',loc='left',weight='bold',pad=14)
fig.text(.03,.02,'DỮ LIỆU HỒ SƠ V2.1; corpus tuyển chọn. Nền tảng không tương đương người hoặc thị phần.',fontsize=8)
fig.subplots_adjust(left=.23,bottom=.16,top=.87)
save(fig,10)
print('Created 10 PNG and 10 editable SVG figures.')

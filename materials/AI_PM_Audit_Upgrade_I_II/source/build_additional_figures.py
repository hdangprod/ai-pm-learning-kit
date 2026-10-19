from pathlib import Path
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch
ROOT=Path(__file__).resolve().parents[1]
plt.rcParams.update({'font.family':'DejaVu Sans','font.size':11})
fig,ax=plt.subplots(figsize=(9,5));ax.set(xlim=(0,10),ylim=(0,6));ax.axis('off')
items=[
 (5,5.2,'Tỷ lệ sửa bản nháp tăng\nTín hiệu tổng, chưa là nguyên nhân'),
 (1.65,3.2,'Chất lượng model\nthay đổi'),
 (5,3.2,'Cơ cấu task\nthay đổi'),
 (8.35,3.2,'Cách ghi event\nthay đổi'),
 (1.65,1.2,'Chấm cùng task\ncùng rubric'),
 (5,1.2,'So theo nhóm task\ncùng định nghĩa'),
 (8.35,1.2,'Đối chiếu event\nvới thao tác'),
]
for x,y,t in items:
 ax.add_patch(FancyBboxPatch((x-1.48,y-.43),2.96,.86,boxstyle='round,pad=.04',facecolor='#EAF3F5',edgecolor='#8099AD'))
 ax.text(x,y,t,ha='center',va='center')
for x in [1.65,5,8.35]:
 ax.annotate('',xy=(x,3.7),xytext=(5,4.72),arrowprops=dict(arrowstyle='->',color='#167D8D'))
 ax.annotate('',xy=(x,1.72),xytext=(x,2.72),arrowprops=dict(arrowstyle='->',color='#167D8D'))
fig.text(.04,.96,'Hình 11  Mỗi giải thích cần một phép kiểm phân biệt',fontsize=14,weight='bold')
fig.text(.04,.02,'SƠ ĐỒ KHÁI NIỆM cho tình huống MÔ PHỎNG. Mũi tên không xác nhận quan hệ nhân quả.',fontsize=9)
fig.subplots_adjust(top=.86,bottom=.1,left=.02,right=.98)
for ext in ['png','svg']:fig.savefig(ROOT/'figures'/('fig11.'+ext),dpi=180)
plt.close(fig)

fig,axs=plt.subplots(1,2,figsize=(9,4.8))
for ax in axs:ax.spines[['top','right']].set_visible(False);ax.set_ylim(0,100);ax.set_ylabel('% người trong mẫu số ghi ở nhãn')
axs[0].bar(['Tuần 1','Tuần 2'],[74,47],color='#23364D',width=.5)
axs[0].set_title('Độ phủ assessed / eligible',fontsize=11)
for x,y in enumerate([74,47]):axs[0].text(x,y+2,str(y)+'%',ha='center')
axs[1].plot([1,2],[75,75],'o-',label='Experienced',color='#167D8D')
axs[1].plot([1,2],[40,40],'s-',label='Novice',color='#9B6722')
axs[1].plot([1,2],[52/74*100,30/47*100],'D--',label='Gộp',color='#23364D')
axs[1].set_xticks([1,2],['Tuần 1','Tuần 2']);axs[1].set_title('Pass / assessed theo phân khúc',fontsize=11);axs[1].legend(loc='lower left',fontsize=9)
fig.suptitle('Hình 12  Tổng thay đổi khi cơ cấu và độ phủ thay đổi',fontsize=14,weight='bold')
fig.text(.03,.02,'MÔ PHỎNG từ case_b_weekly.csv. Hai cohort khác người; không đo learning gain hoặc tác động model.',fontsize=8.5)
fig.subplots_adjust(left=.09,right=.98,bottom=.17,top=.83,wspace=.35)
for ext in ['png','svg']:fig.savefig(ROOT/'figures'/('fig12.'+ext),dpi=180)
plt.close(fig)

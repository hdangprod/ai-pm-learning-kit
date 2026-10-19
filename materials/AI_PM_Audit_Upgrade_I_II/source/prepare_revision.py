"""Assemble revised student books; preserve baseline and separate solutions."""
from pathlib import Path
import csv, json, shutil, re, math
ROOT=Path(__file__).resolve().parents[1]
BASE=ROOT/'source'/'baseline'

def csvwrite(name, rows, fields=None):
    with (ROOT/'practice'/name).open('w',newline='',encoding='utf-8-sig') as f:
        w=csv.DictWriter(f,fieldnames=fields or list(rows[0]));w.writeheader();w.writerows(rows)

def main():
    csvwrite('case_b_weekly.csv',[
        dict(data_type='SIMULATED',week='cohort_week_1',segment='experienced',eligible=80,sessions=240,assessed=64,passed=48),
        dict(data_type='SIMULATED',week='cohort_week_1',segment='novice',eligible=20,sessions=80,assessed=10,passed=4),
        dict(data_type='SIMULATED',week='cohort_week_2',segment='experienced',eligible=40,sessions=160,assessed=32,passed=24),
        dict(data_type='SIMULATED',week='cohort_week_2',segment='novice',eligible=60,sessions=300,assessed=15,passed=6),
    ])
    csvwrite('payback_inputs.csv',[dict(data_type='SIMULATED',cac_vnd=600000,contribution_vnd_per_month=120000,churn_end_month=.1,first_month_paid=1,horizon_months=7)])
    episodes=[
        ['S01','support drafter','Hoàn tiền có ngoại lệ','Hôm qua AI soạn trong một phút nhưng tôi vẫn chờ trưởng nhóm 40 phút. Chị ấy hỏi điều khoản nào cho phép hoàn. Tôi nghĩ AI nhanh hơn.','no','Không có quan sát trực tiếp trong kịch bản.'],
        ['S02','support agent','Hỏi policy tiêu chuẩn','Tôi dùng ô tìm kiếm của kho policy, mở bản còn hiệu lực rồi dán link. Lần gần nhất mất khoảng hai phút, tôi không cần AI cho câu đó.','yes','Chưa cung cấp artifact trong packet.'],
        ['S03','support lead','Dữ liệu nhiều khách doanh nghiệp','Tôi không được đưa ticket của tenant A cho tenant B. Tôi lo trợ lý tự lấy nhầm dữ liệu; chưa thấy một vụ như vậy trong đội tôi.','no','Không có leak được quan sát trong kịch bản.'],
        ['S04','support agent','Chưa rõ','Tôi thấy AI đỡ nhiều, dùng khá thích.','no','Chưa hỏi episode, task hoặc outcome.'],
        ['S05','support drafter','Kiểm phản hồi trước gửi','Bản nháp dẫn quy tắc 30 ngày, nhưng hôm đó policy mới chỉ cho 14 ngày. Tôi giữ lại để hỏi quản lý.','yes','Trong kịch bản, reviewer so bản nháp với policy có hiệu lực và xác nhận 30 khác 14; không có trace retrieval.'],
        ['S06','support agent','Hỏi giờ mở cửa lặp lại','Tôi đã dùng template cố định cho câu giờ mở cửa. Tuần trước không phải sửa gì ngoài tên chi nhánh. Chưa thử AI.','yes','Không có log thời gian hay kiểm hiệu quả độc lập.'],
    ]
    fields=['episode_id','role','context','utterance','artifact_available','observed_note']
    csvwrite('support_episodes_simulated.csv',[dict(data_type='SIMULATED',**dict(zip(fields,x))) for x in episodes])
    instructor=[]
    for roman in ['I','II']:
        stem='Tap_I_Nen_tang' if roman=='I' else 'Tap_II_Nghien_cuu'
        s=(BASE/(stem+'.md')).read_text()
        pos=s.index('# Đáp án và hướng dẫn chấm')
        end=s.index('# Thuật ngữ và nguồn đọc',pos)
        instructor.append(s[pos:end])
        s=s[:pos]+s[end:]
        s=s.replace('- Đáp án và hướng dẫn chấm\n','')
        s=s.replace('Phiên bản 1.0','Phiên bản 2.0')
        s=s.replace('Giáo trình và bài tập có lời giải','Giáo trình và bài tập | Đáp án ở tài liệu instructor riêng')
        s=s.replace('# Product Management & Data Analytics: Từ Tư Duy Đến Quyết Định Dựa Trên Dữ Liệu','# Applied AI Product Management và Product Analytics')
        s=s.replace('## Cách dùng tập sách','## Cách dùng tập sách')
        note='\nBản sửa 2.0 giữ case nghiên cứu ở snapshot V2.1 của bộ sách gốc. “Hiện hành” trong các trích dẫn hồ sơ chỉ snapshot ấy, không khẳng định chưa có cập nhật dự án sau đó. Các bài mới dùng dữ liệu MÔ PHỎNG riêng. Đáp án và rubric chi tiết nằm trong Instructor_Guide_I_II.pdf; hãy nộp bài trước khi mở. Tập III–V theo kiến trúc mới chưa nằm trong bản giao này.\n'
        s=s.replace('\n## Mục lục\n',note+'\n## Mục lục\n')
        # Renderer creates a paginated index; remove manual duplicate list.
        s=re.sub(r'(## Mục lục\n)(?:\n|- .*\n)+',r'\1\n[[TOC]]\n\n',s,count=1)
        adds=(ROOT/'source'/('Bo_sung_Tap_'+roman+'.md')).read_text()
        chunks=re.split(r'\n## ADD(\d+)\n',adds)
        for i in range(1,len(chunks),2):
            number=int(chunks[i]); addition=chunks[i+1].strip()
            pattern=r'(# Chương '+str(number)+r' .*?)(?=\n# |\Z)'
            m=re.search(pattern,s,flags=re.S)
            assert m,number
            s=s[:m.end()]+ '\n\n'+addition+'\n'+s[m.end():]
        if roman=='II':
            s=s.replace('MÔ PHỎNG TRUNG CẤP. Một người tự gom lỗi, tạo quiz và kể đã làm đúng 5/5 câu. Trong hồ sơ thật E172 có dạng tự thuật gần như vậy [P3].','DỮ LIỆU HỒ SƠ. E172 chứa tự thuật về việc gom lỗi, tạo quiz và làm đúng 5/5 câu [P3].')
            start=s.index('## Kết quả cần tìm và cách diễn giải')
            stop=s.index('# Lab 2',start)
            instructor.append('# Kết quả Lab 1 được chuyển khỏi đề\n\n'+s[start:stop])
            s=s[:start]+'Kết quả đối chiếu và phần diễn giải nằm trong instructor. Hãy lưu bảng và đoạn kết luận của bạn trước khi chạy mã lời giải.\n\n'+s[stop:]
            s=s.replace('practice/audit_results.json','instructor/audit_results.json').replace('practice/audit_evidence.py','instructor/audit_evidence.py')
            s=s.replace('và kiểm kết quả kỳ vọng','và in kết quả để đối chiếu sau khi tự làm')
        (ROOT/'source'/('Tap_'+roman+'_Revised.md')).write_text(s)
    full='# Hướng dẫn giảng viên Tập I và II\n\nLời giải tách khỏi tài liệu người học. Giữ nguyên đáp án gốc có giới hạn, bổ sung anchor rubric và lời giải bài D/T1. Mở sau khi nộp bài. Các tham chiếu B/S/P dùng danh mục gốc trong project.\n\n## Mục lục\n\n[[TOC]]\n\n'
    full+='\n\n'.join(instructor)+'\n\n'+(ROOT/'instructor/Bo_sung_dap_an.md').read_text()
    # keep qualifications in baseline answer
    full=full.replace('Hoàn vốn CAC 750.000/150.000 = 5 tháng.','Hoàn vốn CAC đơn giản, bỏ qua churn, 750.000/150.000 = 5 tháng.')
    (ROOT/'source/Instructor_Guide_I_II.md').write_text(full)

if __name__=='__main__':main()

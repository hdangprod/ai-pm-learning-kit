# Dữ liệu và bài thực hành Tập I–II bản sửa

Các bài làm được offline bằng CSV và phép tính thông thường. Python 3 dùng thư viện chuẩn để chạy lời giải. Không cần API trả phí. Chưa có lab SQL/Excel/pandas đầy đủ của Tập III trong gói này.

## Đề và dữ liệu

- Lab 1–3 gốc: evidence_audit_extract.csv là dữ liệu rút gọn từ snapshot dự án V2.1, 200 records. Không phải product events và không có toàn bộ quote. independence_simulated.csv là mô phỏng 12 dòng; ltv_simulated.csv là mô hình kinh tế giả định.
- Bài 1D/5D: case_b_weekly.csv là mô phỏng 4 dòng, grain cohort_week × segment. Hai cohort khác người; mỗi người có nhiều sessions nhưng tối đa một assessed/pass; cả hai cửa sổ đều đủ 7 ngày. Đơn vị sessions là phiên; các cột eligible/assessed/passed là người trong tình huống giả lập. Segment có trước dùng app. Không có baseline, assignment hay person-level data.
- Bài 3D: payback_inputs.csv chứa giả định VND/khách, VND/khách/tháng và xác suất churn cuối tháng; tháng đầu đã trả. Không chứa chi phí cố định/discount/tái kích hoạt.
- Bài 6D/7D/8D và T1: support_episodes_simulated.csv có sáu kịch bản. Mọi utterance/observed_note đều do giáo trình tạo. artifact_available không có nghĩa artifact thực đã được cung cấp. ID ổn định để bạn giữ audit trail.

Không coi output script là bài đã tự làm. Lưu lời giải của bạn trước, sau đó từ thư mục gói chạy:

`python3 instructor/verify_learning.py`

`python3 instructor/audit_evidence.py`

verify_learning.py kiểm arithmetic của bài mới. audit_evidence.py tính từ CSV thật rút gọn, không kiểm lại tính đúng của lời kể người dùng. Kết quả đối chiếu gốc ở instructor/audit_results.json. Bản extraction từ workbook gốc là tùy chọn, không cần để hoàn thành bài; nó cần openpyxl và file nguồn riêng.

## Bài nộp

Tạo một bảng ledger riêng, không sửa dữ liệu gốc. Mỗi kết luận ghi record ID, loại evidence, giới hạn và điều có thể đổi quyết định. Các bài chuyển giao mới có lời giải/rubric trong Instructor_Guide_I_II.pdf. Không dùng các số mô phỏng để cập nhật corpus English AI.

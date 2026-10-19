# Applied AI PM — gói kiểm định và nâng cấp nền tảng 2.0

Ngày chốt 17/10/2026. Đây là lần giao theo giai đoạn được cho phép trong yêu cầu: kiểm định toàn bộ ba PDF gốc, xây lại khung chương trình, hoàn thiện bản sửa Tập I–II. Không phải bộ giáo trình năm tập hoàn chỉnh.

## Bắt đầu từ đâu

1. Đọc AI_PM_Curriculum_Audit_Report.md để hiểu kết luận, bằng chứng theo trang và giới hạn của kiểm định trước sửa.
2. Mở AI_PM_Competency_Framework.xlsx: ba sheet đầu là chuẩn nhiệm vụ, chuẩn học và bao phủ của bản gốc; Tu_danh_gia để trống cho bằng chứng thực của người học; Nguon chứa URL chính thức. Điểm bao phủ không phải điểm năng lực cá nhân.
3. Học Tap_I_Revised.pdf rồi Tap_II_Revised.pdf. Có tám chương, 32 bài A–D, hai bài tổng hợp cuối tập, ba lab audit gốc và một lab tổng hợp định tính T1 mới. T1 là bài học từ dữ liệu mô phỏng, không phải nghiên cứu người dùng đã thực hiện.
4. Dùng practice/README.md và sáu CSV để tự làm. Lưu bài trước khi mở Instructor_Guide_I_II.pdf hoặc chạy script lời giải. Khoảng trắng cuối chương có thể dùng ghi bài; sách có mục lục theo số trang và bookmarks.
5. Dùng AI_PM_Job_Readiness_Rubric.md để lập kế hoạch chứng minh năng lực. Hoàn thành I–II chưa đủ xác nhận sẵn sàng làm việc trên toàn vai trò.

## Những gì đã giao

Tập I 23 trang; Tập II 24 trang; Instructor 14 trang. Nội dung mới gồm phân biệt các tầng outcome, phép kiểm giả thuyết cạnh tranh, memo phân bổ capacity, payback có survival, quyết định usability/quyền dữ liệu, annotation phỏng vấn, segmentation theo quyền và task, codebook/theme/countercase, rubric có anchor. Đáp án bài tập gốc và mới nằm trong Instructor.

Revised_Curriculum_Architecture.md là kế hoạch 36 chương. Research_Sources.md ghi sáu JD và sáu nguồn kỹ thuật, phạm vi sử dụng và giới hạn. Revision_Log.md đối chiếu 12 quyết định sửa với trang PDF mới. delivery_manifest.json ghi trạng thái, kiểm tra và SHA-256 của các file trong gói.

originals/ bảo toàn ba PDF chuẩn kiểm định. source/baseline/ giữ Markdown gốc; source/ chứa Markdown bản sửa và mã dựng tài liệu. figures/ có 12 hình PNG/SVG, trong đó 10 hình gốc được giữ. Hình 12 ở Instructor để không tiết lộ đáp án bài độc lập. Atlas gốc 11 trang là tài liệu lịch sử, chưa phải Atlas toàn chương trình.

project/ giữ case và hồ sơ nguồn của bộ gốc. Những kế hoạch/trạng thái cũ được gắn nhãn lịch sử. Snapshot English AI dùng để dạy là V2.1, không tự cập nhật theo nghiên cứu mới hơn. Không có dữ liệu primary mới được thu thập trong lần sửa này. Không đóng gói hai sách thương mại nguồn.

## Phần chưa hoàn thành

Chương 9–36 / Tập III–V mới ở mức kiến trúc, chưa là bài giảng. Chưa giao lab product-event analytics đầy đủ, SQL/pandas/Excel theo chương mới, eval dataset ít nhất 30 testcases, Atlas toàn bộ năm tập, hay bộ bài/đầu ra capstone tám tuần. Lộ trình và blueprint không được tính là các sản phẩm đó. Các kỹ năng AI architecture/evals/production cần được dạy và kiểm riêng trước khi xét readiness.

## Chạy lại và chỉnh sửa

Hai script thực hành chỉ cần Python 3, không gọi mạng hoặc API trả phí:

`python3 instructor/audit_evidence.py`

`python3 instructor/verify_learning.py`

Để dựng lại sách: chạy `python3 source/prepare_revision.py`, sau đó `python3 source/build_pdfs.py`. Môi trường dựng dùng reportlab, Pillow và font DejaVu Sans regular/bold trong /usr/share/fonts/truetype/dejavu/. Hình được cung cấp sẵn; nếu cần dựng lại, dùng matplotlib và chạy source/build_original_figures.py cùng source/build_additional_figures.py trước bước PDF. Nội dung chuẩn bị được ghép từ source/baseline/, Bo_sung_Tap_I.md, Bo_sung_Tap_II.md và instructor/Bo_sung_dap_an.md; chỉnh trực tiếp file ghép có thể bị ghi đè khi chạy prepare_revision.

Workbook dùng Node và @oai/artifact-tool; source/build_framework.mjs là mã nguồn, không phải môi trường cài sẵn. Không cần chạy mã này để mở hoặc nhập vào workbook đã xuất. PDF được kiểm bố cục trực quan; các phép tính và liên kết ảnh cục bộ đã kiểm. Chưa có thử nghiệm hiệu quả học tập hoặc hội đồng chấm độc lập.

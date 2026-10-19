> HỒ SƠ LỊCH SỬ của bộ gốc. Trạng thái giao hàng và kế hoạch chương trong tài liệu này không phải trạng thái bản sửa 2.0. Xem README.md, Revision_Log.md và Revised_Curriculum_Architecture.md ở thư mục gốc.

# Chỉ mục giáo trình PM và Product Data Analytics

Phiên bản 1.0 ngày 17/10/2026. Gói này hoàn thành giai đoạn nguồn và hai tập nền tảng, theo điều khoản giao tuần tự trong yêu cầu. Chưa phải bộ năm tập hoàn chỉnh. Nội dung đã có là bài giảng, bài tập và lời giải thực tế; phần kiến trúc cho các tập sau được ghi là kế hoạch, không tính thành chương đã viết.

## Bắt đầu học

Đọc Tap_I_Nen_tang.pdf theo chương 1–4, sau đó Tap_II_Nghien_cuu.pdf theo chương 5–8. Hai bản DOCX sửa được nằm cạnh PDF. Markdown gốc ở source, hình PNG và SVG sửa được ở figures. Mở practice/README.md trước khi chạy lab. Các lab dùng CSV và Python; chưa có workbook Excel tổng hợp hay event logs.

PM_Decision_Playbook.md là bộ mẫu sử dụng ngay; English_AI_Case_Study.md là case độc lập với số liệu đã tính lại; Learning_Roadmap.md có lộ trình 12 tuần và rubric; Annotated_Bibliography.md phân biệt nguồn đã dùng với nguồn đã kiểm để dành cho các tập sau. Source_Inventory.md ghi file có, thiếu và phiên bản. completion_manifest.json và Remaining_Work.md là điểm tiếp tục cho đợt kế tiếp.

## Phạm vi sản phẩm bàn giao A đến H

| Yêu cầu | Trạng thái đợt này | Điều có thể dùng ngay |
| --- | --- | --- |
| A Giáo trình năm tập | Hoàn thành Tập I–II, 8/24 chương | PDF, DOCX, Markdown, đáp án và bài tổng hợp |
| B Workbook thực hành đầy đủ | Chưa làm | CSV audit không được tính là workbook thay thế |
| C SQL và Python thực hành đầy đủ | Mới có Python audit và ba CSV | Tái lập counts, dedup mô phỏng và LTV mô phỏng; chưa SQL/event capstone |
| D Atlas trực quan đầy đủ | Hoàn thành phần Tập I–II | 10 hình, PDF riêng, PNG/SVG và mã tạo hình |
| E Playbook ra quyết định | Bản tham chiếu 1.0 đã có | 11 mẫu, mục đích và giới hạn; template experiment chưa là bài học đầy đủ |
| F Case English AI độc lập | Bản research case 1.0 đã có | Audit, P1/P2, matrix, decision brief và bài tập; không có kết quả primary |
| G Roadmap và tự đánh giá | Bản kế hoạch đã có | 12 tuần nền tảng, advanced track và rubric; tuần dùng chương chưa viết được đánh dấu |
| H Thư mục có chú giải | Hoàn thành catalog cho chương trình | Nguồn, phạm vi truy cập, độ tin cậy, giới hạn và chương áp dụng |

## Kiến trúc toàn bộ chương trình

| Chương | Chủ đề và năng lực cần chứng minh | Tiên quyết | Đầu ra học tập | Trạng thái |
| --- | --- | --- | --- | --- |
| 1 | Vai trò PM, lifecycle, output/outcome, discovery/delivery | Không | Phân biệt chỉ số hoạt động và giá trị | Đã viết |
| 2 | Framing, giả định, hệ thống, chi phí cơ hội | 1 | Cây giải thích và quyết định có điều kiện | Đã viết |
| 3 | Giá trị, B2B/B2C, CAC/LTV, sensitivity | 1–2 | Mô hình kinh tế với giới hạn | Đã viết |
| 4 | Job, consequence, alternatives, underserved | 1–3 | Problem statement và lựa chọn A–D | Đã viết |
| 5 | Phương pháp, sampling, validity, evidence type | 4 | Research question–method map | Đã viết |
| 6 | Mom Test, episode, commitment, consent | 5 | Guide và ghi chú có provenance | Đã viết |
| 7 | JTBD, journey, segment, switching | 5–6 | Segment tuyển được, không gộp job | Đã viết |
| 8 | Coding, thematic synthesis, OST, gates | 5–7 | Matrix và audit ba lab | Đã viết |
| 9 | Data literacy, types, units, cleaning, missing | 5, 8 | Data dictionary và audit | Kế hoạch |
| 10 | Thống kê, probability, CI, power, causality, Simpson | 9 | Tính và diễn giải uncertainty | Kế hoạch |
| 11 | Excel, COUNTIFS, SUMIFS, IF, XLOOKUP, pivot, charts | 9–10 | Workbook có công thức kiểm được | Kế hoạch |
| 12 | SQL SELECT đến window, date, joins, funnel/cohort | 9, 11 | Queries chạy được trên SQLite | Kế hoạch |
| 13 | HEART, AARRR, North Star, guardrail, metrics | 1, 9–12 | Metric dictionary và metric tree | Kế hoạch |
| 14 | EDA, funnel, cohort, retention, segment, insight | 9–13 | Bản phân tích có alternatives | Kế hoạch |
| 15 | Expected value, VOI, Bayesian intuition, risk | 2, 10 | Decision log và value-of-information case | Kế hoạch |
| 16 | RICE, ICE, WSJF, cost of delay, sensitivity | 3, 15 | So cơ hội có uncertainty | Kế hoạch |
| 17 | Randomization, A/B, SRM, power, confounding | 10, 13, 15 | Experiment protocol và phân tích | Kế hoạch |
| 18 | Vision, strategy, OKR, roadmap, PRD, launch | 4, 8, 15–17 | Outcome roadmap và PRD | Kế hoạch |
| 19 | Chart choice, narrative, executive brief | 14–18 | Executive decision simulation | Kế hoạch |
| 20 | AI reliability, latency, cost, human loop | 3, 13, 18 | AI workflow và trade-offs | Kế hoạch |
| 21 | Eval sets, rubrics, raters, error severity | 10, 17, 20 | Eval protocol và error analysis | Kế hoạch |
| 22 | Discovery capstone P1/P2 | 4–8, 15–21 | Evidence audit đến decision brief | Kế hoạch |
| 23 | Event analytics capstone AI English | 9–14, 17, 21 | Funnel, D1/D7/D30, transfer, paid churn | Kế hoạch |
| 24 | Judgment, portfolio, case interview, growth | 1–23 | Portfolio và đánh giá tổng hợp | Kế hoạch |

## Nguồn và quy chuẩn biên soạn

Mỗi tập đọc độc lập có giải thích đơn giản, ví dụ cơ bản–trung cấp–nâng cao, hình gốc, tình huống ra quyết định, bài tập và đáp án tách phần. Các số thật cần nguồn, đơn vị, tử/mẫu và giới hạn. Dữ liệu mô phỏng phải ghi ngay trong nội dung và cột data_type khi thích hợp. Không dùng số mô phỏng để kết luận về thị trường English AI.

Hình dùng nền trắng, chữ rõ, không hiệu ứng 3D; chart có trục và đơn vị, sơ đồ có nhãn hypothesis/proposed. SVG và mã nguồn cho phép sửa; hình không được lấy từ sách. PDF/DOCX có font hỗ trợ dấu tiếng Việt, bảng có header lặp và số trang. Trích dẫn dùng ID gắn catalog, không bịa page số của sách không có bản đầy đủ.

Khi nguồn thực hành khác nhau, giải thích phạm vi: Mom Test ưu tiên hành vi quá khứ khi khám phá nhu cầu; concept test vẫn có mục đích riêng. OST dùng đầu vào câu chuyện khách hàng; corpus thứ cấp chỉ cho cây giả thuyết nếu chưa có đầu vào ấy. Codebook audit và reflexive TA có các tiêu chuẩn khác nhau; không ép inter-rater reliability thành chuẩn chung. Engagement, task success và learning outcome là ba lớp riêng.

## Trình tự giao tiếp theo

Mốc tiếp theo là Tập III trọn chương 9–14, workbook B và labs 4–8; đồng thời chuẩn bị event schema với kiểm right censoring. Sau đó Tập IV chương 15–19 và lab 9, 11–12; cuối cùng Tập V chương 20–24 và lab 10 cùng capstone. Không có lịch tự động hoặc công việc nền được lên để tiếp tục sau khi kết thúc phiên.

> HỒ SƠ LỊCH SỬ của bộ gốc. Trạng thái giao hàng và kế hoạch chương trong tài liệu này không phải trạng thái bản sửa 2.0. Xem README.md, Revision_Log.md và Revised_Curriculum_Architecture.md ở thư mục gốc.

# Công việc còn lại

## Mốc tiếp theo Tập III

Viết chương 9–14 với giải thích từ đầu về rows, columns, types, unit, denominator, phân bố, missingness, tỷ lệ, trung bình, độ lệch chuẩn, probability và conditional probability. Dạy confidence intervals và power đúng điều kiện; không biến CI thành sửa selection bias. Có ví dụ Simpson có số đối chiếu và lý do aggregate có thể đảo chiều.

Tạo PM_DA_Practice_Workbook.xlsx bằng công cụ bảng tính với instructions, input, calculation, exercise và solution tách rõ. Bao gồm COUNTIF/COUNTIFS, SUMIF/SUMIFS, IF, XLOOKUP, sorting/filtering, data validation, pivot table thực nếu hỗ trợ và chart. Không gọi bảng tổng hợp tính sẵn là pivot native. Mỗi công thức có kiểm số độc lập; recalculate và inspect export.

Tạo dataset sự kiện MÔ PHỎNG có users, events, tasks, subscriptions, evaluation opportunities; có duplicate event, timezone, null, signup cutoff, late events và follow-up chưa đủ. Giữ random seed, dictionary, generator và labels. Không thiết kế số để buộc kết luận app tốt hơn.

SQL SQLite có SELECT, WHERE, GROUP BY, HAVING, CASE, JOIN, CTE, window, date, funnel, cohort. Chốt event order, unique user, eligible denominator và cutoff trước tính. D1/D7/D30 phải loại chưa đủ cửa sổ khỏi mẫu số chính và báo coverage. Paid churn cần subscriber denominator và trạng thái cancel khác last use. Validate SQL so Python và workbook; ghi kết quả kỳ vọng và không suy causal.

Labs 4–8 gồm metrics Excel, funnel, cohort retention, segmentation/Simpson và correlation bị confounding. Bổ sung histogram, distribution, funnel, cohort heatmap, retention curve, scatter và metric tree. Mọi visual có dữ liệu tái lập, nguồn, câu hỏi và giới hạn.

## Mốc Tập IV

Viết chương 15–19: expected value, VOI, Bayesian intuition, reversibility, decision logs; RICE/ICE/impact-effort/cost-of-delay/WSJF với assumptions và sensitivity; randomization, power, sample size, SRM, peeking, selection, novelty, observational vs experimental; vision, strategy, OKR, outcome roadmap, prototype, MVP, PRD, launch/post-launch; executive communication và chart narrative.

Labs 9, 11–12: thiết kế A/B trước khi có kết quả; so cơ hội với missing/uncertainty không tự điền confidence; brief từ dữ liệu có counterevidence. Tạo decision tree, causal graph, experiment timeline, strategy map. Thêm quiz chẩn đoán, bài đánh giá và lời giải cho từng volume.

## Mốc Tập V

Viết chương 20–24: probabilistic quality, latency/cost/reliability, retrieval/model/prompt trade-offs, human review, privacy; representative eval sets, holdout, rubric, blinded raters, disagreement, severity, calibration và regression; discovery capstone không giả phỏng vấn; analytics capstone có unaided outcome; portfolio, interview và professional judgment.

Lab 10 so response quality, immediate task success và delayed transfer. Bổ sung lỗi dữ liệu và selection của ai quay lại làm bài. Chưa có nguồn bổ trợ chính thức về eval đồng nghĩa phải xác minh trước khi viết; catalog hiện đã có trang Anthropic để khởi đầu, không thay toàn bộ nghiên cứu.

## Điều kiện hoàn thành toàn bộ

24 chương có bài giảng thật; đủ 12 labs với đáp án tách; workbook có công thức và kiểm native features; SQL/Python chạy từ dataset đóng gói; đầy đủ visual atlas; case có provenance và simulation labels; roadmap cập nhật theo nội dung thực; nguồn được rà lại tại thời điểm viết. Không nâng nhãn draft thành complete nếu chỉ có outline. Re-render và kiểm tất cả trang cuối cùng sau mọi sửa bố cục.

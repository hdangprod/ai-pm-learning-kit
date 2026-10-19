# Nhật ký sửa đổi bản 2.0

Báo cáo kiểm định đã được hoàn tất trước khi viết bản sửa. Bảng này ghi thực tế giao hàng, không thay điểm bao phủ bản gốc trong báo cáo/Excel. Trang là vị trí PDF tính từ bìa. Nội dung gốc được giữ ở originals/ và source/baseline/.

| ID audit | Nội dung thực hiện | Vị trí mới | Trạng thái và giới hạn |
| --- | --- | --- | --- |
| R01 | Phân biệt model/task/UX/learning/business; bảng cohort có coverage/mix; bài 1D | I tr6–7; Instructor tr11–12; case_b_weekly.csv | Hoàn thành bài nền tảng; chưa phải lab event analytics |
| R02 | Ba giải thích cạnh tranh, phép kiểm phân biệt, hình 11; memo đủ capacity/owner/deadline/điều kiện đổi ý; bài 2D | I tr11–13; Instructor tr12 | Hoàn thành |
| R03 | Gross profit/đóng góp theo phạm vi chi phí; survival và payback; bài churn 10% | I tr17; Instructor tr12–13; payback_inputs.csv | Hoàn thành; mô hình giản lược, không dự báo doanh nghiệp |
| R04 | Quyết định usability có thể sửa nhanh và bài quyền chia sẻ báo cáo; capacity/export được dạy ở ch2 | I tr12–13,21; Instructor tr12–13 | Hoàn thành mục tiêu; vị trí ví dụ export khác dự kiến audit |
| R05 | Metric definition thay đổi trước hành vi; nghiên cứu phân biệt mix, coverage, outcome | II tr6; Instructor tr11–12 | Hoàn thành |
| R06 | Annotation sau phỏng vấn và bài xử lý S01/S03 | II tr10; Instructor tr13 | Hoàn thành; hội thoại được gắn nhãn mô phỏng |
| R07 | E172 chuyển đúng nhãn DỮ LIỆU HỒ SƠ, giữ giới hạn quiz gần mẫu; thêm segmentation theo task/authority | II tr12,14 | Hoàn thành |
| R08 | Sáu episode, codebook include/exclude, theme/memo; loại S02/S06 để thử độ bền kết luận | II tr18–19; Instructor tr13–14; support_episodes_simulated.csv | Hoàn thành lab T1; chưa có primary research thật |
| R09 | Chuyển kết quả Lab 1 ra khỏi đề | II tr20; Instructor tr10 | Hoàn thành; worked examples trong chương vẫn giữ |
| R10 | Tách đáp án A–D, bài tổng hợp và labs; thêm anchor 0–2/0–4 và cổng lỗi | Instructor tr3–14; II tr19 | Hoàn thành; chưa được calibration bằng người chấm độc lập |
| R11 | Mục lục có trang và PDF bookmarks | I/II/Instructor tr2 | Hoàn thành |
| R12 | Giữ 10 hình; thêm hình 11 về phép kiểm và hình 12 về mix/coverage | I tr12; Instructor tr12; figures/ | Hoàn thành phần bổ sung I–II; Atlas III–V chưa làm |

## Kiểm chứng

Đã đọc văn bản toàn bộ ba PDF mới và xem contact sheet của mọi trang; kiểm các bảng/hình ở trang dày. Không phát hiện cắt chữ hoặc tràn khung. Mục lục đối chiếu đúng chương/lab; PDF có bookmarks. Đã kiểm đủ 32 mã bài A–D trong sách người học và không còn mục đáp án ở hai sách này. Một số trang cuối chương ngắn do chủ động bắt đầu chương tiếp theo ở trang mới.

Mã audit tái tạo 200 records, 149 English, 107 English active AI và missingness; không xác minh lại nguồn thực tế. Mã verify_learning đối chiếu tử/mẫu, segment rates, missing bounds và payback bằng cả tổng trực tiếp và công thức geometric. Không suy causal từ hai cohort khác người. Workbook đã kiểm công thức/cổng thiếu bằng chứng và khôi phục ô điểm về trống; năm sheet được xem trước khi xuất.

Đánh giá này xác nhận tính nhất quán của tài liệu và khả năng chạy bài, không xác nhận người học đã đạt hiệu quả học tập hoặc đủ chuẩn nghề.

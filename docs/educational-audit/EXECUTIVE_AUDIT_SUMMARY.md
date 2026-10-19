# Executive audit summary

**Kết luận:** sáu module phù hợp để luyện tập có hướng dẫn; hiện chưa có bằng chứng chúng tạo transferable PM judgment. Assessment đang đo nhận diện câu đúng và làm lại fixture mạnh hơn khả năng tự lập luận trên vấn đề mới.

Audit ngày 19/10/2026 chỉ dựa vào `docs.zip`: 16 Markdown, final logs, manifest và 20 ảnh đã inspect. Thiếu repository, build, datasets và giáo trình gốc. Không chạy app hoặc tái lập 215/46 tests. Không sửa application. Các kết quả developer vẫn là developer-reported, có log hỗ trợ.

| Phát hiện | Evidence | Ưu tiên |
|---|---|---|
| 20/20 nhóm reasoning M1–M5 trong ảnh đặt đáp án đúng đầu tiên | Năm desktop-feedback PNG | P1 AQ01 |
| M6 có thể đạt điểm structured cao nhưng memo chưa được đánh giá nội dung | MODULE_6_SCENARIO:28–38, INSTRUCTOR:21 | P1 AQ02; exploit runtime chưa chạy |
| Transfer M1–M5 vẫn dùng fixture quen thuộc; M6 đổi điều kiện nhưng giữ job và scaffold | Module contracts và ảnh | P1 AQ03 |
| Attempt sai có thể mở guidance; completion sau retry không tách evidence độc lập | Reveal contracts | P1 AQ04 risk |

27 phép tính độc lập từ bảng/narrative đều khớp. Định nghĩa denominator, D7 window, nonresponse/censoring và noncausal interpretation nhìn chung đúng. M2/M3 fork, M4 strict reversal, M5 proposal và M6 simulated transfer đều được công bố; cần giữ các ranh giới này.

Điểm thiết kế tạm thời: **60.6/100**, theo bảy trọng số yêu cầu, equal module weights. Đây không phải phần trăm hiệu quả hay điểm người học. Software reproducibility chưa xác minh; educational effectiveness và delayed transfer **NE**. Scorecard có evidence/limit/change cho từng điểm.

**Remediation nên làm trước:** đổi option order theo stable IDs và distractor có chất lượng; giữ structured score nhưng thêm independent memo review; gọi bài hiện tại là same-case practice; thêm unseen A/B/C; giữ first attempt và assistance history. Không rewrite kiến trúc, không bỏ module đang chạy, không migrate/reset tiến độ.

**Bộ bàn giao:** audit chi tiết; hai XLSX; red-team report; 18 bài unseen và keys tách riêng; backlog 11 mục; pilot protocol. Pilot 10 người, pre/post và delayed khoảng bảy ngày, reviewer blind, textbook/worksheet comparator thời lượng tương đương. Chưa có participant hoặc kết quả được tạo.

**Giới hạn curriculum:** M2/M3/strict M4 vẫn optional sau foundation theo mapping được gửi. Giữ sách, original labs, unit economics và day41 case mới. Không dùng thiếu advanced AI topics làm defect của sáu module scoped này.

Để khép audit code/runtime cần read-only repository snapshot gồm specs, PROGRESS, source/tests/scripts, fixtures, build instructions và originals. Các phát hiện artifact-level cùng bộ bài/pilot hiện đã dùng được cho vòng review tiếp theo.

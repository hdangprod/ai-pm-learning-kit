# Đánh giá mức sẵn sàng làm việc Applied AI PM

Đây là rubric đào tạo đề xuất, không tiêu chuẩn tuyển dụng của OpenAI hay tổ chức khác. Reading completion không là job readiness. Tập I–II chỉ cung cấp một phần bằng chứng nền tảng; chưa đủ để đạt mức làm việc có giám sát trên toàn vai trò.

| Mức | Hành vi cần thấy | Bằng chứng tối thiểu | Điều chưa được suy |
| --- | --- | --- | --- |
| 0 Beginner | Giải thích bằng ví dụ quen; cần giúp chọn đơn vị, mục tiêu và cách làm | Bài giải định nghĩa với tử/mẫu đúng và một giới hạn | Biết thuật ngữ không chứng minh làm task nghề |
| 1 Developing | Làm được bài hướng dẫn; nhận ra lỗi khi được gợi ý; còn phụ thuộc template | Research brief, truy vấn hoặc eval worksheet có reviewer sửa; nhật ký sửa sai | Có một portfolio đẹp chưa chứng minh tự làm |
| 2 Job-ready-for-supervised-work | Tự làm task giới hạn, đưa quyết định có căn cứ; biết gọi đúng chuyên gia và escalation | Đủ sản phẩm C01–C16; một unseen case; phản biện trực tiếp; xác minh tái lập; không có lỗi nghiêm trọng | Không có nghĩa tự chủ launch rủi ro cao hay đủ seniority trong JD đã nghiên cứu |
| 3 Advanced | Xử lý trade-off nhiều nhóm/chu kỳ, thiết kế hệ thống học và cải thiện quyết định của đội | Nhiều case dài hạn có impact và counterfactual thận trọng; đánh giá đa bên; dẫn dắt migration/incident | Không nhất thiết là core-model researcher hoặc tự viết hạ tầng |

## Bộ bằng chứng cho mức 2

Người chấm đọc toàn bộ sản phẩm thay vì chấm tên file. Tối thiểu cần: opportunity assessment và evidence audit; target segment/problem/JTBD; strategy và metric tree; AI PRD; architecture trade-off memo; evaluation plan với testcases và error analysis; experiment plan; cost/latency analysis; risk register; launch readiness; post-launch interpretation; executive decision brief. C01–C16 trong Excel ghi tiêu chí mastery cụ thể và vai trò đồng sở hữu.

Mỗi năng lực được chấm 0–3 theo mức trên, kèm locator của bằng chứng, lý do và ngày/reviewer. Để xét mức 2 toàn vai trò, tất cả C01–C16 phải có minh chứng đạt ít nhất 2 trong phạm vi task giới hạn. Không dùng trung bình cao để bù một năng lực còn 0. C09/C10/C12/C15 cần reviewer có chuyên môn AI/engineering/risk phù hợp; đây là thiết kế đánh giá, không yêu cầu người học tự chứng nhận chính mình.

Chưa có reviewer hoặc bằng chứng thì để trống, không điền 0 như một đánh giá đã thực hiện. Workbook cung cấp ô nhập riêng và chỉ báo thiếu minh chứng; không tự xác nhận “đạt nghề” khi điền điểm.

## Kiểm khả năng tự làm

Cho người học một case khác sau ít nhất ba ngày, không chỉ đổi tên nhân vật. Yêu cầu trong 90 phút: xác định quyết định, kiểm một bảng dữ liệu, phác hai phương án, đề nghị phép kiểm và viết memo 300 từ. Sau đó 20 phút phản biện với một ràng buộc mới: capacity giảm nửa, metric definition đổi hoặc một lỗi nặng xuất hiện. Người học được dùng tài liệu; phải giải thích và tái tạo phần họ nộp.

Reviewer kiểm một phép tính hoặc query từ raw, hỏi vì sao chọn mẫu số, và đưa countercase. Nếu người học chỉ lặp đáp án mà không thay đổi khi evidence đổi, chưa đạt mức 2. Nếu chọn khuyến nghị khác đáp án nhưng lý do vững, vẫn có thể đạt.

## Các lỗi chặn đạt

Bịa evidence; dùng dữ liệu mô phỏng như khách thật; nhầm record với người đã xác minh; khẳng định causal từ quan sát không phù hợp; dùng eval pass rate để bảo đảm learning impact; bỏ lỗi nghiêm trọng khỏi báo cáo để nâng điểm; đưa quyền/dữ liệu ra ngoài phạm vi được phép; khuyến nghị launch mà không biết owner xử lý incident. Những lỗi này cần sửa và làm bài mới, không chỉ trừ một điểm nhỏ.

## Feedback có thể hành động

Feedback nên gồm phát biểu cụ thể, locator và bài sửa. Ví dụ: “Bạn dùng 30/100 làm learning success rate nhưng chỉ 47 người có follow-up; hãy báo coverage và bounds, rồi nêu dữ liệu còn thiếu.” Tránh “cần data-driven hơn”. Sau khi sửa, chấm lại đúng phần bị ảnh hưởng, giữ lịch sử để thấy người học tiến bộ ra sao.

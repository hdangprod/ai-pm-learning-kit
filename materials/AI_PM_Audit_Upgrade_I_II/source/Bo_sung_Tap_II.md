# Bổ sung biên tập Tập II

## ADD5

## Phép đo có thể thay đổi trước cả hành vi

MÔ PHỎNG WORKED EXAMPLE. Một app ghi “hoàn thành bài” khi màn hình feedback mở. Bản cập nhật sau chỉ ghi khi người học bấm nộp câu tự viết lại. Tỷ lệ event hoàn thành giảm, nhưng hai phiên bản đang đếm hai hành vi khác nhau. Dùng cùng tên metric không làm chúng tương đương. Cần version định nghĩa event, tìm thời điểm thay đổi và nếu có thể xây lại chuỗi so sánh trên cùng hành vi.

Trước một biểu đồ lên hoặc xuống, hãy kiểm định nghĩa, đơn vị, cửa sổ thời gian và độ phủ. Sau đó mới hỏi cơ cấu người dùng và hành vi. Thứ tự này giúp tránh phỏng vấn để giải thích một chuyển động do logging tạo ra. Tuy nhiên dữ liệu không hoàn hảo không có nghĩa mọi phản hồi người dùng đều vô ích; giữ hai nguồn và hỏi từng nguồn đang đo điều gì.

### Bài 5D chọn nghiên cứu sau phát hành

Trở lại Case B MÔ PHỎNG trong practice/case_b_weekly.csv. Marketing nói sản phẩm tốt hơn vì sessions tăng. Learning lead nói sản phẩm tệ hơn vì pass/assessed giảm. Bạn có một ngày của analyst và hai buổi quan sát. Viết kế hoạch theo thứ tự: phép kiểm dữ liệu, cách tách nhóm, câu hỏi quan sát và điều cần nghiên cứu dài hơn. Chỉ ra một câu hỏi mà bảng 4 dòng hiện tại không thể trả lời dù tính rất chính xác. Không đọc phân tích instructor trước khi nộp.

## ADD6

## Annotation giúp tránh nhớ sai cuộc phỏng vấn

MÔ PHỎNG WORKED EXAMPLE. Người tham gia nói: “Hôm qua tôi không gửi bản AI sửa. Tôi thấy nó biến 'có thể giao thứ Sáu' thành 'sẽ giao thứ Sáu'. Tôi không lưu bản cũ. Cuối cùng nhờ đồng nghiệp đọc lại.” Người phỏng vấn chưa thấy email hoặc log.

Ta có lời kể về một episode hôm qua, về việc không gửi bản sửa và nhờ đồng nghiệp. Người tham gia giải thích rằng mức cam kết bị đổi. Chưa có quan sát trực tiếp đầu vào/đầu ra để xác nhận AI thực sự đổi nghĩa, chưa có thời gian mất, cũng chưa biết kết quả cuối. Ghi “AI đổi nghĩa đã được xác minh” là vượt bằng chứng. Ghi “người này không tin AI trong mọi việc” cũng vượt phạm vi.

Probe tiếp có thể là: “Bạn còn nhớ phần mình muốn người nhận hiểu là gì?”; “Bạn đã sửa gì trước khi nhờ đồng nghiệp?”; “Có lần nào bản sửa giữ đúng ý và bạn dùng ngay không?” Nếu xin artifact, cho phép họ dùng nội dung đã ẩn thông tin hoặc từ chối. Probe về episode cần đứng trước lời đề nghị thử sản phẩm của đội.

### Bài 6D thực hành trên hội thoại mới

Dùng episode S01 và S03 trong practice/support_episodes_simulated.csv. Đây là kịch bản giả lập về trợ lý hỗ trợ khách hàng, không phải transcript người thật. Đánh dấu trong từng dòng: lời kể hành động, diễn giải của nhân vật, điều analyst chưa biết. Viết bốn probe không dẫn dắt và một counterepisode. Không sửa lời nhân vật để khiến họ “cần AI” hơn. Nộp bản annotation trước khi xem codebook mẫu.

## ADD7

## Segment phục vụ quyết định nào

MÔ PHỎNG WORKED EXAMPLE. Hai nhân viên hỗ trợ cùng làm ở một công ty nhưng xử lý hai loại việc. Một người cần tìm nhanh điều khoản hoàn tiền rồi tự quyết; người kia chỉ được soạn bản nháp để trưởng nhóm duyệt. “Nhân viên hỗ trợ” chưa đủ phân nhóm cho quyết định tự động hóa. Quyền quyết định, độ phức tạp trường hợp và hậu quả sai có thể quan trọng hơn tuổi.

Không nên tạo segment “nhóm cần agent” vì đã cài lời giải vào tiêu chí. Hãy viết tiêu chí quan sát được: xử lý yêu cầu hoàn tiền cần dẫn policy còn hiệu lực; phải có người duyệt trước khi gửi; có episode trong 30 ngày. Sau đó quan sát nhu cầu thật và cả trường hợp quy trình hiện tại đã đủ dùng.

### Bài 7D chuyển giao ngoài English AI

Dùng sáu episode support mô phỏng. Đề xuất tối đa hai nhóm phục vụ hai quyết định khác nhau. Mỗi nhóm phải có điều kiện tuyển, job và outcome; nêu ít nhất một record không đủ dữ liệu để xếp chắc. Nếu S06 đã làm tốt bằng template không dùng AI, nó làm yếu mệnh đề nào và không làm yếu mệnh đề nào? Không dùng số record trong hai nhóm để báo quy mô thị trường.

## ADD8

## Một lab tổng hợp nội dung có thể làm độc lập

Lab T1 dùng practice/support_episodes_simulated.csv, gồm sáu episode do giáo trình biên soạn. Mỗi dòng có ID, role, context, utterance, artifact_available và observed_note. Giá trị “yes” của artifact_available trong kịch bản chỉ nói nhân vật có thể cung cấp artifact; file này không chứa artifact thật. Mọi lời nói và quan sát đều MÔ PHỎNG, không phải nghiên cứu khách hàng.

Quyết định: đội có nên dùng hai tuần kỹ thuật để xây tính năng tự gửi câu trả lời hỗ trợ hay nên kiểm một can thiệp hẹp hơn? Hãy đọc sáu dòng trước khi lập codebook. Viết từ ba đến năm code, mỗi code có định nghĩa, include và exclude. Giữ ít nhất một countercase. Dùng ledger gồm ID, trích đoạn ngắn, lớp bằng chứng, code, suy luận, unknown và next check.

Sau đó viết hai theme thành câu có điều kiện. “Trust” chỉ là topic; một theme cần nêu bối cảnh và cơ chế đề xuất, chẳng hạn người phải chịu trách nhiệm phê duyệt có nhu cầu kiểm tra căn cứ trước khi gửi. Đây vẫn là suy luận từ packet mô phỏng; cần cho thấy record nào hỗ trợ, record nào giới hạn và điều gì chưa rõ.

Cuối cùng nộp memo 350–500 từ: quyết định, lựa chọn ít nhất hai hướng, evidence, giới hạn, khuyến nghị và một phép kiểm có thể làm bạn đổi ý. Không mặc định câu trả lời phải là xây AI, dừng AI hay nghiên cứu thêm. Chấm tính liên kết giữa bằng chứng và mức cam kết.

### Bài 8D xử lý phản chứng

Sau khi nộp T1, đọc lại S02 và S06 mà không xem đáp án. Viết một phiên bản hẹp hơn của theme ban đầu. Nếu theme ban đầu không thay đổi, chỉ ra vì sao nó đã chứa điều kiện này. Không được xóa hai dòng vì “không đúng target” trừ khi tiêu chí target đã được viết trước.

## Rubric thực hành mới

Mỗi bài D và Lab T1 dùng năm chiều, 0–2 điểm mỗi chiều: đúng phạm vi/đơn vị; truy vết bằng chứng; cân nhắc cách giải thích hoặc lựa chọn khác; hành động khả thi; điều kiện đổi quyết định. 0 là thiếu hoặc sai; 1 là có nhưng chưa đủ cụ thể để kiểm; 2 là rõ, gắn dữ liệu và tự nêu giới hạn. Ví dụ “cần thêm dữ liệu” chỉ được 1 ở hành động; “kiểm event definition của hai phiên bản trong 2 giờ, rồi so cùng hành vi” có thể được 2.

Ngưỡng nền tảng đề xuất là 8/10 và không có lỗi nghiêm trọng: bịa kết quả nghiên cứu; gọi corpus là mẫu đại diện; khẳng định nhân quả từ before/after; hoặc cấp quyền gửi dữ liệu chỉ vì có nhu cầu. Ngưỡng này là quy tắc bài học, không chứng nhận nghề. Một khuyến nghị khác instructor vẫn có thể đạt tối đa nếu bảo vệ được với bằng chứng và ràng buộc.

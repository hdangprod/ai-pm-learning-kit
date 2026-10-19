# Product Management & Data Analytics: Từ Tư Duy Đến Quyết Định Dựa Trên Dữ Liệu

## Tập I Nền tảng quản trị sản phẩm

Chương 1–4 | Giáo trình và bài tập có lời giải | Phiên bản 1.0 | 17 tháng 10 năm 2026

Tập này dành cho người có nền tảng kỹ thuật nhưng mới bắt đầu học quản trị sản phẩm (Product Management, PM). Sau khi học, bạn cần viết được một đề bài sản phẩm có thể nghiên cứu, phân biệt điều biết với điều đoán, tính một mô hình kinh tế đơn giản và giải thích vì sao nên hoặc chưa nên đầu tư. Việc thuộc tên một mô hình không phải tiêu chuẩn hoàn thành.

Trường hợp xuyên suốt là dự án tìm hiểu khó khăn của người học tiếng Anh khi đã có AI. Các số liệu nghiên cứu được tính lại từ workbook hiện hành ngày 17/10/2026. Chúng mô tả tập bằng chứng tuyển chọn, không phải tỷ lệ người học ngoài thị trường. Những tình huống có nhân vật, doanh thu hoặc kết quả tác vụ tự tạo luôn mang nhãn MÔ PHỎNG.

Đây là Tập I của chương trình năm tập. Tập II tiếp tục bằng nghiên cứu người dùng; các tập phân tích dữ liệu và thực nghiệm có yêu cầu riêng, được theo dõi trong hồ sơ tiến độ. Các giải thích, ví dụ và hình trong tập này được biên soạn mới, không thay thế việc đọc sách nguồn.

## Cách dùng tập sách

Mỗi chương nên học trong hai hoặc ba buổi. Buổi đầu đọc tình huống và tự giải ví dụ trước khi xem lời giải. Buổi tiếp theo đóng sách, viết lại lập luận và làm bài. Sau ba ngày, hãy giải thích khái niệm bằng một sản phẩm khác. Nếu chỉ nhớ câu định nghĩa nhưng không biết cần thu dữ liệu nào, bạn cần làm lại bài tình huống.

Các nhãn được dùng nhất quán: DỮ LIỆU HỒ SƠ là giá trị đọc được trong tài liệu; TỰ THUẬT là trải nghiệm người dùng kể; QUAN SÁT là tác vụ hoặc dấu vết đã ghi nhận; SUY LUẬN là cách analyst giải thích; GIẢ THUYẾT là mệnh đề chưa kiểm; MÔ PHỎNG là dữ liệu dạy học; ĐỀ XUẤT là hành động chưa thực hiện. Đọc được một bài đăng chỉ xác nhận bài đăng chứa lời kể ấy, chưa xác nhận kết quả học của tác giả.

## Mục lục

- Chương 1 Product Manager tạo giá trị như thế nào
- Chương 2 Suy nghĩ có cấu trúc trước một vấn đề mơ hồ
- Chương 3 Giá trị người dùng và kinh tế sản phẩm
- Chương 4 Khám phá vấn đề và xác định cơ hội
- Bài tổng hợp Có nên xây ứng dụng English AI
- Đáp án và hướng dẫn chấm
- Thuật ngữ và nguồn đọc

## Kiểm tra đầu vào Tập I

Viết câu trả lời trước khi đọc. Một đội giao đúng hạn tám tính năng nhưng người học không tự viết tốt hơn: đội đã thành công chưa? Một bảng có 200 dòng lời kể có chắc là 200 người không? Khi 30 người nói sẽ mua, bạn còn thiếu điều gì? Hai hướng A và B đều giúp người dùng, nhưng chỉ làm được một: cần so theo tiêu chí nào? Không cần có câu trả lời hoàn hảo; giữ lại bản đầu để so với bài tổng hợp cuối tập.

# Chương 1 Product Manager tạo giá trị như thế nào

## Tình huống và mục tiêu học

MÔ PHỎNG. Một nhóm kỹ sư làm app luyện tiếng Anh. Trong một tháng, nhóm thêm hội thoại giọng nói, huy hiệu và bảng điểm. Bản phát hành chạy ổn. Khi được hỏi người học đã làm được điều gì tốt hơn, nhóm trả lời bằng số tính năng đã giao. Câu trả lời này mô tả công việc của đội, chưa mô tả giá trị nhận được.

Chương này giúp bạn phân biệt sản phẩm với dự án, kết quả với đầu ra, khám phá với triển khai và trách nhiệm PM với các vai trò gần nhau. Không có kiến thức tiên quyết. Các thuật ngữ cần dùng được là sản phẩm (product), đầu ra (output), kết quả (outcome), khám phá (discovery), triển khai (delivery) và bên liên quan (stakeholder).

## Sản phẩm là một cơ chế tạo giá trị được duy trì

Một chức năng sửa câu có thể nằm trong sản phẩm, nhưng bản thân việc gọi một mô hình AI chưa giải thích được sản phẩm phục vụ ai. Hãy bắt đầu bằng một người, một hoàn cảnh và một việc cần hoàn thành. Người đi làm có thể cần gửi email rõ nghĩa ngay trước 17 giờ. Người ấy cũng có thể muốn tự viết được một email tương tự tuần sau. Hai việc này dùng chung nội dung nhưng có tiêu chuẩn thành công khác nhau.

Với việc đầu, bản sửa đúng, giữ ý và đủ nhanh có thể tạo giá trị. Với việc sau, một bản sửa hoàn hảo vẫn chưa cho thấy người học nhớ hay vận dụng được. Nếu PM không nêu sự khác nhau, nhóm dễ đo chất lượng bản sửa rồi báo cáo thành hiệu quả học tập. Sai lầm nằm ở cách xác định kết quả, trước cả lựa chọn công nghệ.

Sản phẩm cần được vận hành qua thời gian: người dùng tiếp cận, bắt đầu dùng, nhận giá trị, quay lại khi có nhu cầu, nhận hỗ trợ và có thể rời đi. Dự án là một nỗ lực có phạm vi và thời hạn, chẳng hạn triển khai đăng nhập trong ba tuần. Hoàn thành dự án đóng góp cho sản phẩm, nhưng không tự bảo đảm sản phẩm thành công. Dịch vụ do con người cung cấp cũng có thể là một phần của lời giải; không có quy tắc buộc mọi vấn đề phải thành app.

Trong sách này, PM chịu trách nhiệm làm rõ vấn đề, lựa chọn cơ hội phù hợp mục tiêu và giúp đội đưa ra quyết định có thể giải thích. Trách nhiệm đó không có nghĩa PM biết nhiều hơn mọi chuyên gia hoặc có quyền ra lệnh cho tất cả. Đội cần kết hợp nghiên cứu, thiết kế, phân tích, kinh doanh và kỹ thuật. Quan điểm về vai trò tham khảo [B2, chương 2]; cách nhấn mạnh giá trị thay vì số lượng tính năng tham khảo [S2].

## Các vai trò phối hợp và quyền quyết định

| Vai trò | Câu hỏi chính trong ví dụ app | Sản phẩm công việc điển hình |
| --- | --- | --- |
| Product Manager | Có nên ưu tiên tự viết lại hay gửi email nhanh | Mục tiêu, lựa chọn, lý do và tiêu chí đánh giá |
| Project Manager | Cần điều phối gì để giao thay đổi đúng hạn | Kế hoạch, phụ thuộc, tiến độ và rủi ro giao hàng |
| Business Analyst | Quy tắc và quy trình cần hỗ trợ là gì | Yêu cầu nghiệp vụ, luồng và điều kiện chấp nhận |
| Data Analyst | Đo thế nào và dữ liệu nói được đến đâu | Định nghĩa chỉ số, truy vấn, phân tích và giới hạn |
| Designer và Engineer | Trải nghiệm nào dùng được và thực thi được | Phương án tương tác, kiến trúc, triển khai và kiểm tra |

Đây là bản phân biệt phục vụ học tập, không phải sơ đồ tổ chức áp dụng cho mọi công ty. Một người có thể kiêm nhiệm. Điều cần làm rõ trong một đội thật là ai đề xuất, ai cung cấp chuyên môn, ai quyết định ngân sách và ai chịu trách nhiệm vận hành. Nếu trưởng nhóm giao một tính năng bắt buộc, PM vẫn có thể làm rõ nó nhằm cải thiện kết quả nào và cách học từ lần giao đó.

MÔ PHỎNG. Kỹ sư đề nghị lưu mọi hội thoại để cá nhân hóa; nghiên cứu viên chỉ cần đoạn đã được người học đồng ý chia sẻ; người phụ trách kinh doanh muốn bán cho doanh nghiệp. Đây là ba góc nhìn hợp lý nhưng chưa tương thích. PM cần đưa ra quyết định cụ thể: giai đoạn đầu thử với nội dung giả lập, xác định dữ liệu tối thiểu và kiểm tra giá trị trước khi mở rộng thu thập. Các ràng buộc kỹ thuật và dữ liệu là một phần của đề bài sản phẩm.

## Hai dòng công việc liên tục

![Hình 1 Khám phá và triển khai cùng phục vụ một kết quả](../figures/fig01.png)

Hình 1 trả lời đội đang giảm loại bất định nào. Đây là sơ đồ tổng hợp do tác giả biên soạn, không phải dữ liệu thị trường. Khám phá tìm hiểu có nên làm và vì sao; triển khai biến phương án đã đủ căn cứ thành thứ dùng được. Dữ liệu vận hành quay lại cả hai dòng. Không đọc mũi tên như các giai đoạn bắt buộc chỉ diễn ra một lần. Cách làm việc liên tục được gợi ý bởi [S1].

Vòng đời sản phẩm có thể đi từ khám phá, giới thiệu, mở rộng, duy trì đến ngừng cung cấp. Đây là cách tổ chức câu hỏi, không phải lời tiên đoán sản phẩm nào cũng tăng trưởng. Ở giai đoạn chưa biết vấn đề có đáng giải không, làm thêm dashboard vận hành chi tiết có thể ít giá trị hơn quan sát một tác vụ. Khi đã có người phụ thuộc sản phẩm, tính ổn định và hỗ trợ trở thành một phần của kết quả cần giữ.

## Ví dụ có lời giải từ đơn giản đến khó

MÔ PHỎNG CƠ BẢN. Trong 10 người mới, tám người mở tính năng sửa câu; sáu người nhận được bản sửa; bốn người tự viết đúng một câu mới có cùng trọng tâm sau hai ngày. Tỷ lệ mở là 8/10 = 80%. Tỷ lệ nhận bản sửa là 6/10 = 60%. Tỷ lệ hoàn thành tác vụ mới trong toàn nhóm là 4/10 = 40%. Đơn vị là người trong nhóm 10 người giả lập. Các tỷ lệ trả lời những câu hỏi khác nhau; không thay 40% bằng 80% để báo cáo hiệu quả học.

Nếu chỉ bốn trong sáu người nhận sửa được mời làm bài sau hai ngày và cả bốn làm đúng, bạn có tỷ lệ 4/4 trong nhóm được đánh giá. Bạn chưa biết kết quả của hai người còn lại. Cần báo thêm độ phủ đánh giá 4/6, cách chọn người và lý do thiếu. Không được khẳng định sáu người đều học tốt hay tự động gán hai người chưa đo là thất bại.

MÔ PHỎNG TRUNG CẤP. Sau bản phát hành, thời gian dùng tăng từ 12 lên 18 phút. Hai cách giải thích cạnh tranh là người học luyện sâu hơn hoặc thao tác mất công hơn. Muốn phân biệt, xem thời gian cho tác vụ, số lần sửa lại, kết quả không trợ giúp và các đoạn mắc kẹt. Độ dài phiên sử dụng chỉ là tín hiệu, chưa đủ để gọi là giá trị.

MÔ PHỎNG NÂNG CAO. Nhóm bán hàng muốn tăng số phiên để cải thiện gia hạn, nhưng người học chỉ muốn viết email nhanh. Nếu giải quyết tốt khiến phiên ngắn hơn, tối ưu thời gian sử dụng có thể chống lại giá trị. PM cần thống nhất kết quả trực tiếp như tỷ lệ email giữ đúng ý và thời gian hoàn tất, rồi theo dõi chi phí phục vụ và gia hạn như các kết quả kinh doanh. Mối liên hệ giữa chúng phải được kiểm, không đặt bằng tên gọi chỉ số.

## Liên hệ với hồ sơ nghiên cứu và quyết định kinh doanh

DỮ LIỆU HỒ SƠ. Benchmark V2 lưu hai tác vụ công khai T01 và T02, mỗi tác vụ một lần. T01 cho thấy công cụ sửa được ba lỗi cài sẵn trong một email; T02 cho thấy vòng nhận phản hồi và thử lại. Đây là kết quả tác vụ được tài liệu dự án ghi lại, không phải phép thử mới do giáo trình thực hiện. Chưa có kết quả dùng lại không trợ giúp sau bảy ngày [P7].

Một PM có thể dùng hồ sơ ấy để nói: đã có lời giải đáng kiểm cho việc sửa văn bản ngay; còn thiếu bằng chứng cho việc học để tự làm lần sau. Quyết định hợp lý ở thời điểm này là tách hai câu hỏi và thiết kế nghiên cứu tiếp, thay vì coi việc sửa đúng là bằng chứng phải xây app học mới. Đó là một quyết định về thứ tự đầu tư, không phải phán quyết AI hiệu quả hay vô dụng.

## Sai lầm và giới hạn phương pháp

Nhầm PM với người viết ticket làm mất phần lựa chọn. Nhầm outcome với chỉ số doanh thu làm bỏ qua cơ chế tạo giá trị. Nhầm mọi mong muốn của người dùng với yêu cầu phải xây làm tăng phạm vi mà chưa tăng giá trị. Nhầm vai trò với chức danh khiến đội tranh quyền thay vì làm rõ quyết định.

Không dùng mô hình vòng đời để biện minh rằng sản phẩm chắc chắn sẽ tăng trưởng. Không dùng discovery để trì hoãn sửa lỗi vận hành đã rõ và nghiêm trọng. Một lỗi đăng nhập tái hiện được cần xử lý; không cần phỏng vấn để xác nhận người dùng muốn đăng nhập thành công. Điều chưa chắc là mức ưu tiên giữa lỗi ấy và cơ hội khác, tùy phạm vi ảnh hưởng.

## Bài tập và tự kiểm tra

Bài 1A cơ bản. Với tính năng nhắc ôn lỗi, viết một output, một outcome người học và một kết quả kinh doanh. Nêu cách đo outcome mà không chỉ đếm lượt mở.

Bài 1B trung cấp. Trong 20 người được mời, 12 người thử tính năng; tám người nộp bài sau bảy ngày; sáu người đạt. Viết ít nhất ba tỷ lệ, tử số, mẫu số và câu không được kết luận. Toàn bộ số là MÔ PHỎNG.

Bài 1C nâng cao. Một quản lý yêu cầu tăng thời gian dùng 30%. Viết phản hồi 150–200 từ, hỏi rõ quyết định và đề nghị hai tín hiệu bổ sung. Bạn có thể chấp nhận yêu cầu nếu giải thích được mối liên hệ với kết quả.

Câu tự kiểm tra: vì sao giao đúng hạn chưa đủ? Khi nào phiên ngắn hơn là tốt? Ai nên tham gia quyết định thay đổi workflow? Hãy trả lời bằng ví dụ mới, không chép định nghĩa.

## Ghi nhớ và bước tiếp theo

Giá trị được xác định bằng điều người dùng và doanh nghiệp có thể làm tốt hơn, dưới các ràng buộc cụ thể. Hoạt động của đội cần nối được đến kết quả, và mối nối ấy thường chứa giả thuyết. Đọc thêm [B2, chương 2 và 14–15], [S2] và [S1]. Chương 2 hướng dẫn viết ra các giả thuyết trước khi chọn cách thu dữ liệu.

# Chương 2 Suy nghĩ có cấu trúc trước một vấn đề mơ hồ

## Tình huống và mục tiêu học

MÔ PHỎNG. Một người nói rằng app học tiếng Anh không giữ được người dùng vì người dùng không tiến bộ. Đội kỹ thuật có thể lập tức xây bảng tiến bộ. Nhưng phát biểu ấy chứa ít nhất ba điều chưa rõ: ai rời đi, thế nào là tiến bộ và bằng chứng nào nối hai việc đó. Nếu không tách chúng, mỗi biểu đồ mới có thể chỉ làm suy đoán ban đầu trông đáng tin hơn.

Sau chương này, bạn cần chuyển một khẳng định mơ hồ thành câu hỏi có thể kiểm, vẽ được cách giải thích cạnh tranh và chọn bước học tiếp với chi phí hợp lý. Tiên quyết là phân biệt output và outcome ở chương 1. Thuật ngữ: sự kiện (fact), giả định (assumption), giả thuyết (hypothesis), đánh đổi (trade-off), chi phí cơ hội (opportunity cost), yếu tố gây nhiễu (confounder).

## Từ phát biểu đến chuỗi lập luận

Một sự kiện cần nói đúng phạm vi xác minh. Có thể xác minh workbook chứa 200 Evidence ID khác nhau. Điều ấy không xác minh có 200 người độc lập. Có thể xác minh một tác giả viết rằng họ ngừng dùng app. Điều ấy chưa xác minh ngày hủy thanh toán, nguyên nhân chủ yếu hay việc họ ngừng học.

Giả định là điều bạn tạm dùng để làm việc, chẳng hạn nhóm mục tiêu có điện thoại phù hợp để thử voice. Nó cần được ghi rõ vì nếu sai, thiết kế nghiên cứu phải đổi. Giả thuyết là mệnh đề có thể bị bằng chứng làm yếu đi hoặc bác bỏ, chẳng hạn trong một nhóm người đi làm xác định, lỗi đã được sửa vẫn xuất hiện ở nhiệm vụ mới sau bảy ngày dù dùng workflow hiện có đúng cách.

Một insight là cách giải thích có ích cho một quyết định. Nó cần gắn mẫu hình với hoàn cảnh và giới hạn. Một khuyến nghị là lựa chọn hành động. Chúng không đồng nghĩa. Từ dữ liệu có nhiều lời kể lặp lỗi, bạn có thể hình thành câu hỏi về việc dùng lại kiến thức. Bạn chưa có quyền kết luận cơ chế là thiếu trí nhớ AI hoặc giải pháp phải là app mới.

| Lớp lập luận | Ví dụ trong dự án | Mức được phép nói |
| --- | --- | --- |
| Dữ liệu hồ sơ | E166 chứa tự thuật lặp lỗi sau sửa | Có lời kể cụ thể cần đối chiếu |
| Suy luận | Chỉ nhận sửa có thể chưa đủ để tự dùng lại | Một cách giải thích, còn đối thủ |
| Giả thuyết | Gap còn sau workflow hiện có và ở bài mới | Cần protocol và đánh giá |
| Đề xuất | Quan sát bài mới sau 48 giờ và bảy ngày | Chưa thực hiện nghiên cứu |
| Quyết định | Chưa đầu tư xây sản phẩm ở thời điểm này | Có thể đổi khi evidence đổi |

## Tư duy từ nguyên lý và tư duy hệ thống

Tư duy từ nguyên lý (first-principles thinking) bắt đầu bằng những điều kiện cần của kết quả. Muốn một người tự dùng lại một cách diễn đạt, họ cần nhận được phản hồi phù hợp, hiểu nó, có cơ hội luyện và có cơ hội dùng lại. Đây là mô hình giải thích do giáo trình đề xuất để đặt câu hỏi, không phải lý thuyết đầy đủ về học ngôn ngữ.

Nếu phản hồi ban đầu sai, việc ôn nhiều hơn có thể làm sai bền hơn. Nếu nhiệm vụ sau không tạo cơ hội dùng cấu trúc ấy, không thấy lỗi không chứng minh nhớ. Nếu người học làm tốt khi viết nhưng khó nói, áp lực thời gian hoặc kỹ năng nói có thể liên quan. Mỗi mắt xích cần quan sát khác nhau. Cách suy nghĩ này giúp tránh lấy tên tính năng làm nguyên nhân.

Tư duy hệ thống (systems thinking) xem thay đổi ảnh hưởng đến các phần khác. MÔ PHỎNG: sửa mọi lỗi có thể làm phiên học dài hơn; phiên dài khiến một số người bỏ; giảm sửa có thể tăng hoàn thành nhưng bỏ sót lỗi ảnh hưởng ý nghĩa. Không có mục tiêu duy nhất là càng nhiều correction càng tốt. Cần xem tác động mong muốn, tác động phụ và độ trễ.

![Hình 2 Những cách giải thích cạnh tranh cho việc tự dùng lại chưa tốt](../figures/fig02.png)

Hình 2 hỏi kết quả có thể đến từ đâu. Các cạnh là GIẢ THUYẾT phân tích, không phải quan hệ nhân quả đã đo. Bốn nhánh dẫn đến cùng một biểu hiện; chọn một nhánh để kiểm không có nghĩa ba nhánh kia sai. Sơ đồ giúp thiết kế câu hỏi và tác vụ phân biệt các lời giải thích.

## Ví dụ tính chi phí cơ hội

MÔ PHỎNG. Đội có 40 giờ. Làm prototype A dùng hết 40 giờ; làm một vòng quan sát comparator dùng 12 giờ. Nếu xây ngay, bạn từ bỏ khả năng dùng 12 giờ để phát hiện rằng một workflow hiện có đã đáp ứng đủ nhu cầu. Đó là chi phí cơ hội: giá trị của phương án tốt nhất bị bỏ qua, không chỉ khoản tiền chi ra.

Để tính minh họa, giả sử có 40% khả năng A thật sự đáng xây. Nếu đáng xây, lợi ích ròng 100 đơn vị; nếu không đáng, mất 60 đơn vị. Giá trị kỳ vọng của xây ngay là 0,4 × 100 + 0,6 × (−60) = 4. Chờ không xây có giá trị đặt bằng 0 trong ví dụ. Xây ngay tốt hơn 0 một chút theo những giả định này, nhưng kết quả rất nhạy với xác suất và thiệt hại.

Nếu xác suất chỉ 30%, giá trị là 30 − 42 = −12. Nếu 50%, giá trị là 50 − 30 = 20. Điểm đổi dấu là 60/(100+60) = 37,5%. Con số 40% chưa được đo và không phải xác suất thị trường; mục đích của phép tính là phơi bày điều đang quyết định lựa chọn. Không nhập một điểm tự tin chủ quan rồi gọi nó là bằng chứng thống kê.

MÔ PHỎNG TRUNG CẤP. Bạn chỉ có 12 giờ để quan sát hai người dùng. Kết quả có thể làm rõ thao tác thiết lập nhưng không ước lượng được tỷ lệ toàn thị trường. Giá trị thông tin nằm ở việc có thể loại một cơ chế hoặc sửa protocol trước nghiên cứu lớn hơn. Không cần buộc nghiên cứu nhỏ trả lời câu hỏi vượt khả năng thiết kế.

MÔ PHỎNG NÂNG CAO. Một đối tác yêu cầu quyết định trong hai ngày, còn nghiên cứu delayed task cần bảy ngày. Bạn có thể quyết định một thử nghiệm giới hạn ngân sách, nêu rõ điều chưa biết và điều kiện dừng. Ra quyết định dưới bất định không phải chờ biết tất cả; đó là chọn mức cam kết tương xứng với rủi ro và khả năng đảo ngược.

## Cách viết một đề bài có thể nghiên cứu

Bắt đầu bằng quyết định: có nên dành hai tuần tiếp theo cho nghiên cứu workflow ôn lỗi ở người đi làm không? Sau đó xác định đối tượng, tác vụ, khoảng thời gian và ràng buộc. Tiếp theo viết điều đã biết, nguồn biết và điều cần biết để chọn giữa các phương án. Cuối cùng đặt câu hỏi nào có thể làm thay đổi quyết định, thay vì thu mọi dữ liệu có sẵn.

Một phiên bản tốt có thể là: người đi làm đã dùng AI nhận sửa ít nhất bốn tuần có gặp trở ngại khi tự dùng lại ba trọng tâm đã sửa trong nhiệm vụ mới sau bảy ngày không; trở ngại còn sau workflow hiện có được thiết lập phù hợp không; effort nào khiến họ không duy trì? Đây là câu hỏi nghiên cứu, chưa phải kết luận gap tồn tại. Phạm vi P1 trong hồ sơ hiện hành đi theo hướng ấy [P10].

Đừng dùng năm lần hỏi tại sao (5 Whys) như công cụ tự động tìm ra nguyên nhân gốc. Người tham gia có thể không biết cơ chế hoặc hợp lý hóa sau sự kiện. Dùng câu trả lời để tạo giả thuyết, rồi tìm dấu vết hoặc tác vụ giúp phân biệt. Cũng không dùng một sơ đồ nhân quả do đội vẽ làm bằng chứng rằng quan hệ trong sơ đồ là thật.

## Sai lầm thường gặp và quyết định thực tế

Đếm nhiều lời kể tương tự rồi tăng độ chắc về nguyên nhân là lỗi phổ biến: lượng dữ liệu cùng thiên lệch không sửa được thiết kế thiếu đối chứng. Chỉ tìm người thất bại làm mất cơ hội biết workflow nào đã giải được vấn đề. Dùng từ dữ liệu quyết định thay con người làm mờ trách nhiệm lựa chọn và các giá trị phải đánh đổi.

Hồ sơ V2.1 có cả người ngừng ELSA vì mức sửa không hợp và người tự báo được lợi từ tracking [P4]. Hai ca không triệt tiêu nhau. SUY LUẬN hợp lý là hiệu quả có thể phụ thuộc mục tiêu và hoàn cảnh; cần tách nhóm và cơ chế. Không suy rằng gamification luôn tốt, luôn xấu hoặc một trong hai người không đáng tin chỉ vì trái kỳ vọng.

## Bài tập và tự kiểm tra

Bài 2A cơ bản. Phân loại bốn câu: workbook có 200 ID; người dùng thích voice; voice giúp tiến bộ; nên xây voice mới. Với mỗi câu, viết nguồn nào có thể hỗ trợ và nguồn nào chưa đủ.

Bài 2B trung cấp. Dùng mô hình lợi ích 100, thiệt hại 60 ở trên. Tính giá trị kỳ vọng khi xác suất 20%, 40%, 60%. Xác định biến nào cần hiểu rõ nhất trước một cam kết lớn. Các giá trị là MÔ PHỎNG.

Bài 2C nâng cao. Viết hai cách giải thích khác cho việc người dùng sau sửa vẫn mắc lỗi. Thiết kế một quan sát giúp phân biệt chúng; nêu điều quan sát ấy không chứng minh.

Câu tự kiểm tra: dữ liệu có tự chọn hành động không? Vì sao một quyết định tốt có thể có kết quả xấu? Khi nào thu thêm dữ liệu không đáng chi phí? Thử trả lời mà vẫn nêu ràng buộc thời gian.

## Ghi nhớ và bước tiếp theo

Lập luận đáng kiểm tra phải nối được từ nguồn đến phát biểu, từ phát biểu đến giả thuyết và từ giả thuyết đến lựa chọn. Không cần loại mọi bất định trước khi làm việc, nhưng phải biết bất định nào đang gánh quyết định. Nguồn: [B2, chương 13–15], [P4], [P10]; các tính toán kỳ vọng là ví dụ tự biên soạn. Chương 3 bổ sung ràng buộc kinh tế để đánh giá một lời giải có thể tồn tại lâu dài không.

# Chương 3 Giá trị người dùng và kinh tế sản phẩm

## Tình huống và mục tiêu học

MÔ PHỎNG. Một app có 100 người trả tiền, mỗi người 200.000 đồng/tháng. Nhóm thấy doanh thu 20 triệu và cho rằng có thể thuê thêm người hỗ trợ. Nhưng nếu chi phí mô hình, hỗ trợ, hoàn tiền và vận hành cao, doanh thu chưa cho biết có bao nhiêu tiền để trả lương. Chương này giúp bạn đọc được mô hình kinh tế cơ bản và biết điều gì chưa đo.

Tiên quyết là chương 1–2 và phép chia số thông thường. Thuật ngữ: người dùng (user), người mua (buyer), người quyết định (decision-maker), doanh thu bình quân mỗi tài khoản (ARPA), chi phí thu hút khách hàng (CAC), lợi nhuận gộp (gross profit), tỷ lệ mất khách (churn), giá trị vòng đời khách hàng (LTV).

## Giá trị được tạo ra và giá trị được thu về

Một sản phẩm có thể hữu ích nhưng không thu được tiền đủ để duy trì. Ngược lại, một cách thu tiền có thể tăng doanh thu ngắn hạn nhưng làm người dùng khó hoàn thành việc hoặc mất tin tưởng. PM cần đặt hai câu hỏi riêng: người dùng nhận gì, và tổ chức có thể phục vụ lời hứa ấy với nguồn lực nào?

Trong sản phẩm bán trực tiếp cho cá nhân (B2C), người dùng và người trả tiền thường trùng nhau nhưng không phải luôn vậy. Trong sản phẩm bán cho doanh nghiệp (B2B), nhân viên có thể là người dùng, quản lý đào tạo là người mua, bộ phận bảo mật có quyền chặn và lãnh đạo là người duyệt ngân sách. Một cuộc phỏng vấn nhân viên xác nhận nhu cầu không xác nhận rằng doanh nghiệp có ngân sách hay chấp nhận cách xử lý dữ liệu.

MÔ PHỎNG. Nhân viên muốn luyện với tài liệu công việc; doanh nghiệp muốn giảm lỗi giao tiếp nhưng không cho gửi tài liệu thật ra ngoài. Phương án dùng nội dung mô phỏng theo loại nhiệm vụ có thể ít cá nhân hóa hơn nhưng dễ triển khai hơn. Đây là đánh đổi cần đo với mục tiêu thật. Không thể chỉ thêm một hộp đồng ý rồi cho rằng nhu cầu mua đã được giải.

## Ví dụ kinh tế theo đơn vị khách hàng

Tất cả số trong phần này là MÔ PHỎNG, đơn vị đồng/tháng, không phải giá hoặc chi phí của nhà cung cấp hiện tại. Giả sử có 100 tài khoản trả tiền. Giá mỗi tài khoản là 200.000 đồng; chi phí trực tiếp phục vụ mỗi tài khoản là 80.000 đồng; chi phí cố định tháng là 15 triệu đồng. Chi phí thu hút một khách trả tiền là 600.000 đồng.

Doanh thu bằng số tài khoản trả tiền nhân giá: 100 × 200.000 = 20 triệu. Chi phí trực tiếp là 100 × 80.000 = 8 triệu. Lợi nhuận gộp là 20 − 8 = 12 triệu. Biên lợi nhuận gộp là 12/20 = 60%. Nếu trừ thêm 15 triệu chi phí cố định, kết quả trước các khoản khác là −3 triệu. Một sản phẩm có biên gộp dương vẫn có thể chưa đủ trang trải vận hành.

Khoản đóng góp mỗi tài khoản là 200.000 − 80.000 = 120.000 đồng/tháng. Muốn trang trải 15 triệu chi phí cố định trong mô hình tĩnh này, cần 15.000.000/120.000 = 125 tài khoản đang trả tiền. Điểm hòa vốn ấy chưa tính chi phí thu hút khách mới, thuế hoặc chênh lệch thời điểm thu tiền. Nếu cần bù người rời đi hằng tháng, mô hình phải bổ sung chi phí đó.

Thời gian hoàn vốn CAC đơn giản bằng CAC chia khoản đóng góp tháng: 600.000/120.000 = 5 tháng. Đây là ước lượng chỉ đúng khi khách giữ giá và mức phục vụ như giả định, chi phí thu hút được phân bổ phù hợp và không có các dòng tiền khác. Khách trả trước một năm làm thời điểm tiền mặt khác đi, nhưng không xóa nghĩa vụ phục vụ tương lai.

| Đại lượng MÔ PHỎNG | Tử số hoặc phép tính | Kết quả và cách đọc |
| --- | --- | --- |
| ARPA tháng | 20 triệu / 100 tài khoản | 200.000 đồng trên tài khoản trả tiền |
| Biên gộp | 12 triệu / 20 triệu | 60% doanh thu còn sau chi phí trực tiếp |
| Hoàn vốn CAC | 600.000 / 120.000 | Năm tháng đóng góp để bù thu hút |
| Logo churn tháng | 5 khách rời / 100 đầu tháng | 5%, nếu định nghĩa rời đã chốt |

## Vì sao công thức LTV dễ bị dùng sai

Trong một mô hình rất đơn giản, nếu xác suất rời mỗi tháng luôn là c, không có mở rộng doanh thu và khoản đóng góp mỗi tháng luôn là m, số tháng kỳ vọng là 1/c; LTV đóng góp xấp xỉ m/c. Với m = 120.000 và c = 5%, LTV là 2,4 triệu. Đây là công thức của mô hình giả định, không phải kết quả quan sát trong dự án.

Nếu churn tăng lên 10%, LTV chỉ còn 1,2 triệu. Nếu khách mới và khách lâu năm có xác suất rời khác nhau, lấy một tháng toàn bộ khách để dự đoán tuổi thọ có thể sai. Nếu chưa có đủ thời gian theo dõi, người còn dùng chưa chắc ở lại lâu; họ chỉ chưa được quan sát đến lúc rời. Nếu có chiết khấu, tái kích hoạt hoặc giảm giá, công thức phải đổi.

Đừng diễn giải LTV/CAC = 4 trong ví dụ thành chuẩn đầu tư. Tỷ số không cho biết tốc độ tăng, nhu cầu vốn lưu động, độ chắc dữ liệu hay chi phí sản phẩm chưa tính. Để sử dụng chuyên nghiệp, cần định nghĩa cohort khách trả tiền, nguồn chi phí, khoảng theo dõi và độ nhạy. Tập III sẽ đi vào cohort; ở đây mục tiêu là biết vì sao không nên nhập một churn chưa kiểm chứng vào mô hình.

## Nhìn độ nhạy thay vì tin một con số

![Hình 3 LTV đóng góp thay đổi khi giả định churn thay đổi](../figures/fig03.png)

Hình 3 trả lời giả định nào làm mô hình kinh tế thay đổi. Trục ngang là churn tháng từ 2% đến 15%; trục dọc là LTV đóng góp triệu đồng, tính theo 120.000/c. DỮ LIỆU MÔ PHỎNG; không có chiết khấu và không có thay đổi chi phí theo tuổi khách. Đường cong không dự báo churn thực. Nó chỉ cho thấy kết luận kinh tế phụ thuộc mạnh vào một đầu vào chưa đo.

MÔ PHỎNG TRUNG CẤP. Giá giữ nguyên nhưng một nhóm dùng voice nhiều làm chi phí trực tiếp tăng từ 80.000 lên 140.000 đồng. Khoản đóng góp còn 60.000, thời gian hoàn vốn CAC thành 10 tháng. Nếu chỉ xem số phiên tăng, đội có thể tưởng tốt lên trong khi kinh tế xấu đi. Cần phân tích chi phí và outcome theo loại sử dụng, không đổ lỗi cho người dùng sử dụng nhiều.

MÔ PHỎNG NÂNG CAO. Khách doanh nghiệp trả nhiều hơn nhưng cần hỗ trợ, quy trình mua và tích hợp. CAC phải bao gồm công sức bán hàng phù hợp; ARPA cao không tự làm kênh B2B hấp dẫn hơn. PM có thể ưu tiên pilot có phí để học về giá trị và chi phí phục vụ, nhưng không dùng một hợp đồng đặc biệt làm bằng chứng cho toàn phân khúc.

## Liên hệ với dự án và lựa chọn mô hình

DỮ LIỆU HỒ SƠ. Tập nghiên cứu hiện chưa có paid cohort, doanh thu hoặc chi phí phục vụ của một sản phẩm mới. Các lời kể mua lifetime, giữ GPT hay bỏ một app không tạo thành bảng CAC/LTV [P4]. Không dùng những giá trị D30 hoặc churn chưa được kiểm chứng trong tài liệu cũ làm chuẩn [P1, mục 2].

Bạn vẫn có thể so bốn hướng: app riêng, hướng dẫn dùng công cụ hiện có, dịch vụ hỗ trợ của con người và nghiên cứu thêm. Ở giai đoạn này nên so loại chi phí và bất định cần làm rõ, thay vì giả tạo bảng doanh thu ba năm. Chẳng hạn app cần chi phí xây và vận hành; hướng dẫn cần kiểm người học tự duy trì được không; dịch vụ người thật cần kiểm công suất và chi phí; nghiên cứu thêm cần cho thấy thông tin có thể thay đổi quyết định.

## Sai lầm và khi không nên dùng

Không dùng số đăng ký làm mẫu số ARPA của khách trả tiền nếu đang muốn so kinh tế khách trả tiền. Không trộn churn tài khoản, churn doanh thu và mức giảm hoạt động. Không lấy chi phí quảng cáo chia khách đăng ký rồi đặt tên CAC khách trả tiền. Không bỏ người hoàn tiền khỏi bảng chỉ để mô hình đẹp hơn.

Ở giai đoạn chưa có khách, dùng LTV như một biến kiểm độ nhạy, không như một giá trị đã biết. Ở mô hình không đăng ký tháng, công thức 1/churn có thể không phù hợp. Phương án đơn giản hơn là bảng dòng thu và chi phí theo các mốc cụ thể, ghi rõ phần nào giả định. Các khái niệm đo giai đoạn kinh doanh được gợi ý bởi [S3]; mọi số và phân tích trong chương là ví dụ gốc.

## Bài tập và tự kiểm tra

Bài 3A cơ bản. MÔ PHỎNG: 80 khách trả 250.000 đồng, chi phí trực tiếp 100.000/khách, cố định 14 triệu. Tính doanh thu, lợi nhuận gộp, biên gộp và kết quả sau chi phí cố định.

Bài 3B trung cấp. Với số của 3A, CAC là 750.000. Tính hoàn vốn và LTV đóng góp khi churn 5% và 10%. Nêu ít nhất ba giả định khiến LTV chưa đáng tin.

Bài 3C nâng cao. Công ty muốn dùng lời kể một người mua lifetime để kết luận willingness-to-pay của phân khúc cao. Viết phản biện và đề xuất dữ liệu cần thu trước khi chốt mô hình giá.

Câu tự kiểm tra: lợi nhuận gộp khác lợi nhuận toàn công ty thế nào? Giá trị người dùng khác thu tiền thế nào? Ai là người mua trong B2B? Vì sao có người trả tiền chưa đủ xác nhận kinh tế bền vững?

## Ghi nhớ và bước tiếp theo

Mô hình kinh tế là cách chỉ ra điều kiện để sản phẩm tồn tại, và độ nhạy của quyết định khi các điều kiện đổi. Đừng để độ chính xác của bảng tính che độ yếu của giả định. Nguồn: [S3], [S2], [B2, chương 13 và 15]. Chương 4 đưa kinh tế trở lại đúng chỗ: sau một vấn đề đủ rõ và một so sánh với lựa chọn hiện có.

# Chương 4 Khám phá vấn đề và xác định cơ hội

## Tình huống và mục tiêu học

MÔ PHỎNG. Một người yêu cầu tính năng AI nhớ mọi lỗi. Bạn có thể chuyển thẳng yêu cầu ấy thành backlog. Nhưng họ có thể đang muốn tránh lặp lỗi trong email, tiết kiệm công sao chép vào sổ, tin vào feedback hoặc nhìn thấy tiến bộ. Các vấn đề này khác nhau; một bộ nhớ không chắc giải được hết.

Sau chương này, bạn cần viết được problem statement không cài sẵn giải pháp, phân biệt mức khó chịu với hệ quả và kiểm được một lời giải hiện có trước khi gọi cơ hội là chưa được phục vụ tốt (underserved). Tiên quyết là ba chương trước. Thuật ngữ: việc cần hoàn thành (job), triệu chứng (symptom), hệ quả (consequence), cách xoay xở (workaround), phương án thay thế (substitute), nhu cầu chưa được đáp ứng (unmet need).

## Bóc tách lời yêu cầu mà không phủ nhận người dùng

Hãy hỏi lần gần nhất họ cần chức năng ấy là khi nào và điều gì xảy ra trước sau. Không cần nói yêu cầu của họ sai; chính yêu cầu ấy là dấu hiệu đáng tìm hiểu. Nếu họ mất 15 phút nhập correction vào sổ mỗi tối, đó là một loại effort có thể quan sát. Nếu họ không ghi gì vì chỉ muốn gửi email ngay, bộ nhớ lỗi có thể không phải nhu cầu ưu tiên của episode đó.

Một vấn đề hữu ích cần chỉ rõ ai, ở tình huống nào, cố làm gì, bị cản ra sao và hệ quả nào đã hoặc có thể xảy ra. Phần có thể xảy ra phải giữ là dự báo hay nỗi lo. Một câu như người học thiếu cá nhân hóa quá rộng vì không nói hành vi nào thất bại. Một câu như người học cần bảng nhắc ôn lại quá hẹp vì đã chọn lời giải.

Ví dụ GIẢ THUYẾT có thể nghiên cứu: người đi làm muốn tự viết email giải thích rủi ro; sau khi nhận sửa họ chưa tự dùng lại được cách diễn đạt ở một email mới, nên phải nhờ AI lại hoặc mất thời gian dò. Cần xác minh cả lỗi giống nhau, cơ hội dùng lại, hậu quả và công cụ đã thử. Câu này không có nghĩa hiện tượng đã phổ biến hay cần xây app.

## Tần suất và độ nghiêm trọng là hai trục khác nhau

Một bất tiện xảy ra mỗi ngày có thể rất nhỏ; một lần truyền sai cam kết giao hàng có thể có hệ quả lớn. Không chỉ đếm số lần nhắc đến. Để hiểu mức độ nghiêm trọng, tìm thời gian bị mất, việc phải làm lại, cơ hội bỏ lỡ, rủi ro hoặc giới hạn khiến người học đổi hành vi. Việc người dùng nói bực không tự chuyển thành một khoản tổn thất định lượng.

MÔ PHỎNG CƠ BẢN. Mai có sáu email trong tuần; hai email cần nhờ đồng nghiệp sửa khoảng 10 phút mỗi lần. Tổng effort được kể là 20 phút/tuần. Nếu có lịch sử hai episode để đối chiếu, ta có căn cứ tốt hơn cho nhóm trường hợp của Mai. Ta chưa có tần suất ngoài thị trường, và 20 phút không tự quy thành tiền doanh thu mất đi.

MÔ PHỎNG TRUNG CẤP. Bình gửi nhiều email hơn nhưng dùng công cụ sửa hiện tại mất một phút và thấy chấp nhận được. Số lỗi của Bình có thể cao hơn Mai nhưng residual pain thấp hơn. Tần suất lỗi và cơ hội kinh doanh không cùng nghĩa. Trường hợp giải được là dữ liệu quan trọng để thu hẹp nhóm cần phục vụ.

MÔ PHỎNG NÂNG CAO. Mai chỉ bị khi viết risk update dưới deadline; khi viết bình thường cô tự xử lý tốt. Segment nên dựa thêm vào hoàn cảnh áp lực và yêu cầu giữ mức cam kết, không chỉ độ tuổi hay nghề. Nghề giúp tuyển người, nhưng không thay thế bằng chứng về job và outcome.

## Kiểm tra underserved bằng một chuỗi so sánh

Trước hết xác nhận việc cần làm có ý nghĩa. Sau đó xem người dùng giải thế nào và họ đã thử đến đâu. Nếu công cụ có tính năng nhưng họ không tìm thấy, vấn đề có thể là khám phá tính năng hoặc thiết lập. Nếu tìm được nhưng không duy trì nổi, có thể là effort. Nếu làm đúng mà không đạt outcome, mới có lý do tìm hiểu giới hạn của lời giải. Mỗi tình huống có một can thiệp khác.

![Hình 4 Cửa quyết định trước khi đầu tư vào lời giải mới](../figures/fig04.png)

Hình 4 trả lời còn thiếu bằng chứng ở đâu. Đây là sơ đồ ĐỀ XUẤT phục vụ giảng dạy. Nhánh chưa rõ dẫn về nghiên cứu; nhánh công cụ hiện có đáp ứng đủ dẫn tới cân nhắc hướng dẫn hoặc dừng giả thuyết gap; nhánh gap còn lại dẫn tới nghiên cứu sâu. Đi qua sơ đồ không tự tạo market validation hay cho phép dự báo doanh thu.

So đối thủ cần so theo job, không chỉ các ô tính năng. Đối thủ của app luyện email có thể là đồng nghiệp, giáo viên, một sổ lỗi, công cụ sửa văn bản hoặc chấp nhận viết chậm hơn. Bảng tính năng giúp biết cần kiểm cái gì; phép thử tác vụ mới cho thấy làm được đến đâu. Giá, quyền truy cập và effort là điều kiện của phép thử, không thể bỏ qua khi chúng làm phương án không dùng được.

## Ví dụ so bốn lựa chọn

| Lựa chọn | Điều cần học trước | Rủi ro nếu cam kết sớm |
| --- | --- | --- |
| A App chuyên biệt | Outcome tăng thêm so với comparator | Xây lại workflow đã đủ dùng |
| B Hướng dẫn AI hiện có | Người học có tự tìm và duy trì được | Thành công nhờ người hướng dẫn liên tục |
| C Người hỗ trợ hoặc hybrid | Phần nào thật sự cần người | Chi phí và công suất không bền |
| D Nghiên cứu thêm | Kết quả nào sẽ đổi quyết định | Thu dữ liệu mãi mà không có gate |

Trong hồ sơ hiện tại, D là lựa chọn SUY LUẬN hợp lý vì còn thiếu chuỗi outcome trễ và so sánh phù hợp. Nó không mặc định tối ưu mãi. Nếu một workflow hiện có giải được tác vụ với effort chấp nhận được, B có thể đáng thử về khả năng tiếp cận. Nếu chỉ một phần cần chuyên môn người thật, C có thể tốt hơn A. Quyết định phải được viết kèm điều khiến ta đổi ý.

## Liên hệ với H1 đến H6

DỮ LIỆU HỒ SƠ. H2 phiên bản tuyệt đối về thiếu cấu trúc đã có phản chứng về khả năng hiện hữu; H5 về churn chủ yếu do thiếu tiến bộ và H6 về app riêng tốt hơn vẫn thiếu loại bằng chứng cần thiết [P5]. Không nên biến việc có người khó thiết lập thành kết luận không có giải pháp. Cũng không nên biến tài liệu quảng bá một tính năng thành kết luận người học đã đạt kết quả.

P1 trong kế hoạch V2 kiểm việc dùng lại sau feedback ở người đi làm; P2 kiểm quyết định ôn IELTS Writing khi assessment chưa rõ [P10]. Hai nhánh có tiêu chí kết quả khác nhau. Một người muốn giữ ý khi giải thích risk và một người muốn quyết định ưu tiên ôn thi không nên bị gộp vào một pain tên feedback không tốt.

## Sai lầm và khi không nên dùng

Không lấy câu không ai làm làm điểm xuất phát khi chưa kiểm công cụ hiện tại. Không dùng tổng số pain code để xếp cơ hội vì một record có nhiều code và việc tuyển chọn có thể ưu tiên pain. Không coi không chia sẻ artifact là không có vấn đề; chỉ ghi giới hạn kiểm chứng. Không đặt ngưỡng sau khi thấy kết quả để giữ một ý tưởng yêu thích.

Đừng dành nhiều tuần khám phá một lựa chọn sửa nhỏ, dễ đảo ngược, có bằng chứng thao tác rõ. Với nghiên cứu thị trường mới hoặc quyết định xây lớn, yêu cầu bằng chứng cao hơn. Phương pháp phải tương xứng với quyết định, chứ không tương xứng với độ đẹp của bộ slide.

## Bài tập và tự kiểm tra

Bài 4A cơ bản. Viết lại người học cần AI tự động nhắc lỗi thành problem statement. Đánh dấu phần nào chưa được xác minh.

Bài 4B trung cấp. MÔ PHỎNG: trong bốn pain cases được tuyển có chủ đích, ba người đạt bài mới sau bảy ngày với workflow hiện có và effort họ chấp nhận; người thứ tư thiếu dữ liệu follow-up. Bạn nên nói gì về gap và không nên nói gì về thị trường?

Bài 4C nâng cao. So A–D bằng một đoạn 250 từ. Chọn bước tiếp theo, xác định thông tin quan trọng nhất và nêu một kết quả có thể khiến bạn chọn hướng khác. Không được dùng bảng điểm với số tự tin không có căn cứ.

Câu tự kiểm tra: triệu chứng khác job thế nào? Thế nào là một comparator công bằng? Có tính năng khác đạt outcome thế nào? Khi nào hướng dẫn dùng công cụ hiện có là một giải pháp sản phẩm đáng xem xét?

## Ghi nhớ và bước tiếp theo

Một cơ hội cần nối nhu cầu có ý nghĩa với hạn chế còn lại của các lựa chọn thực tế. Việc có người than phiền mới là điểm khởi đầu. Nguồn: [B1, phần Asking important questions và Choosing your customers], [S4], [P5], [P7], [P10]. Tập II hướng dẫn thu và tổng hợp bằng chứng để kiểm chuỗi lập luận này.

# Bài tổng hợp Có nên xây ứng dụng English AI

## Đề bài

Dùng DỮ LIỆU HỒ SƠ hiện hành: 200 đơn vị bằng chứng, 149 xác nhận English, 107 vừa xác nhận English vừa active AI, 5 English former AI và 37 English chưa rõ AI status. Có 101 Source ID có record retained. Reddit và Trustpilot đóng góp 135/200 đơn vị. Trong nhóm 107, thiếu segment 68 và proficiency 88 theo quy tắc missing của raw. Chưa có thử nghiệm delayed unaided learning của sản phẩm mới. Các số được tính lại, không lấy nhãn của báo cáo cũ làm số hiện hành [P3; tệp thực hành audit_results.json].

Viết decision brief tối đa một trang: quyết định cần làm; điều biết và chưa biết; ít nhất hai lựa chọn; tiêu chí; khuyến nghị; một hành động tiếp theo; điều làm đổi quyết định. Giữ P1 và P2 riêng. Không gọi tập dữ liệu là khảo sát thị trường. Không coi số active AI là tỷ lệ dùng AI trong dân số.

## Tiêu chí chấm

Mỗi tiêu chí 0–2 điểm: đúng đơn vị và mẫu số; phân biệt nguồn với suy luận; cân nhắc comparator; chọn hành động tương xứng bất định; nêu điều kiện đổi ý. Tổng 10. Mức 8 trở lên và không có lỗi nghiêm trọng về nhân quả, giả dữ liệu hoặc giả nghiên cứu được coi là đạt nền tảng. Đây là rubric học tập do giáo trình đề xuất, không chứng nhận nghề nghiệp.

# Đáp án và hướng dẫn chấm Tập I

## Chương 1

1A. Output có thể là tính năng nhắc ôn đã phát hành. Outcome là người học tự dùng đúng trọng tâm trong một tác vụ mới sau bảy ngày, giữ đúng ý với effort chấp nhận được. Kết quả kinh doanh có thể là khoản đóng góp của khách ở lại; quan hệ giữa outcome học và gia hạn cần kiểm. Đếm mở nhắc ôn chỉ đo tiếp xúc. Phải xác định ai được đánh giá, bao nhiêu người thiếu follow-up và bài mới có cơ hội dùng nội dung đã học không.

1B. Tỷ lệ thử 12/20 = 60%; độ phủ bài trễ trong người thử 8/12 = 66,7%; tỷ lệ đạt trong người nộp 6/8 = 75%. Có thể thêm sáu thành công quan sát trên 12 người thử là 50%, nhưng không gọi đó là tỷ lệ học thành công đầy đủ: kết quả của bốn người chưa nộp chưa biết. Không suy tính năng gây tiến bộ vì không có baseline hay đối chứng. Tính sáu đạt trên 20 người mời là 30% cho toàn hành trình, chỉ khi ghi rõ cả những bước chưa tham gia.

1C. Một phản hồi tốt xác nhận mục tiêu kinh doanh trước: tăng thời gian để làm gì, ở nhóm nào và trong bao lâu? Sau đó đề nghị xem chất lượng hoàn tất tác vụ và số thao tác mắc kẹt. Có thể chọn thời gian luyện chủ động là tín hiệu nếu tách được thời gian chờ và sửa lỗi kỹ thuật. Đáp án chỉ phản đối mọi engagement metric cũng chưa tốt: chỉ số có thể hữu ích khi liên hệ với giá trị được kiểm chứng.

Tự kiểm tra: giao đúng hạn chỉ xác nhận thực hiện; phiên ngắn có thể tốt với job hoàn thành nhanh; quyền quyết định tùy tổ chức nhưng nghiên cứu, thiết kế, kỹ thuật, dữ liệu và chủ ngân sách cần có phần đóng góp phù hợp. Nếu bạn chỉ trả lời PM là CEO nhỏ, đọc lại phần phối hợp.

## Chương 2

2A. 200 ID là dữ liệu cấu trúc workbook, kiểm bằng đếm ID. Thích voice là thái độ tự thuật, cần đoạn nguồn. Voice giúp tiến bộ là giả thuyết kết quả, cần đánh giá phù hợp và thiết kế đủ để quy kết tác động nếu dùng từ giúp theo nghĩa nhân quả. Nên xây voice mới là khuyến nghị, cần thêm mục tiêu, chi phí và comparator. Một nguồn có thể hỗ trợ lớp trước nhưng không đủ lớp sau.

2B. Khi xác suất 20%, EV = 20 − 48 = −28; 40% là 40 − 36 = 4; 60% là 60 − 24 = 36. Không có một biến luôn quan trọng nhất: cần biết độ bất định và mức ảnh hưởng của cả xác suất, lợi ích và thiệt hại. Trong ví dụ, quyết định đổi dấu gần 37,5%, nên xác suất đang là một đầu vào nhạy. Không gán độ chính xác hai chữ số cho một xác suất phỏng đoán.

2C. Hai cơ chế có thể là feedback sai và học đúng nhưng thiếu luyện dùng lại. Cho rater độc lập xem feedback ban đầu, rồi quan sát bài mới có cùng cơ hội mục tiêu. Nếu feedback sai, chưa thể quy lỗi cho trí nhớ. Nếu feedback đúng mà bài mới sai, vẫn còn anxiety, độ khó hoặc thiếu nền; một quan sát không loại hết chúng. Câu trả lời cần thiết kế bằng chứng có khả năng phân biệt, không chỉ thêm câu hỏi bạn cảm thấy thế nào.

Tự kiểm tra: lựa chọn còn phụ thuộc mục tiêu và ràng buộc; quyết định tốt dùng thông tin hợp lý trước kết quả vẫn có thể thất bại do bất định; ngừng nghiên cứu khi thông tin khó làm đổi lựa chọn hoặc quá tốn so với quyết định. Nếu bạn dùng kết quả cuối để kết luận mọi quyết định trước đó sai, xem lại phân biệt quyết định và kết quả.

## Chương 3

3A. Doanh thu 80 × 250.000 = 20 triệu. Chi phí trực tiếp 8 triệu. Lợi nhuận gộp 12 triệu, biên gộp 60%. Sau cố định 14 triệu còn −2 triệu trước khoản khác. Không kết luận có 12 triệu để chia lợi nhuận.

3B. Khoản đóng góp 150.000/khách/tháng. Hoàn vốn CAC 750.000/150.000 = 5 tháng. LTV mô hình tĩnh ở churn 5% là 3 triệu, ở 10% là 1,5 triệu. Các giả định gồm churn ổn định, mức đóng góp không đổi, không chiết khấu và định nghĩa churn cùng cohort. Cũng cần biết CAC đã bao gồm đúng nguồn chi phí và khách mới chưa.

3C. Một giao dịch lifetime phản ánh một người ở một thời điểm với một cấu trúc giá. Nó không cho biết giá hiện hành, nguyên nhân mua, khả năng gia hạn hoặc kết quả học. Cần hiểu lựa chọn đã xảy ra, điều kiện giá, giải pháp thay thế và hành vi ở nhiều trường hợp thuộc nhóm đã xác định. Khi thử giá thực tế phải có đề nghị trung thực và điều kiện rõ; không gọi câu trả lời giả định là giao dịch.

Tự kiểm tra: gộp chỉ trừ chi phí trực tiếp theo định nghĩa; giá trị người dùng là lợi ích nhận được; thu tiền là cơ chế tổ chức nhận lại giá trị; B2B có thể có nhiều vai trò mua. Nếu câu trả lời chỉ có LTV/CAC vượt một mức số học, đọc lại giới hạn mô hình.

## Chương 4

4A. Một phiên bản: GIẢ THUYẾT người đi làm sau khi nhận sửa một biểu đạt trong email không tự dùng lại được ở email mới, khiến phải tìm lại feedback và mất effort. Cần xác minh cùng trọng tâm, thời điểm, cơ hội dùng, effort và comparator. Nếu viết người học cần reminder thông minh, bạn vẫn giữ giải pháp trong problem statement.

4B. Trong ba trường hợp có kết quả, comparator đáp ứng tiêu chí mô phỏng đã nêu. Trường hợp thứ tư chưa có kết quả; phải ghi lý do thiếu. Nếu đây là protocol chốt trước yêu cầu ít nhất ba trong bốn pain cases đạt thì gate ấy có thể được đáp ứng, kèm thiếu dữ liệu và phạm vi mẫu. Không khẳng định 75% toàn thị trường đã được giải hay mọi người học không cần app mới. Ngưỡng vận hành là quyết định của nghiên cứu, không phải kiểm định thống kê.

4C. Có thể chọn D để đối chiếu same-error và delayed task trước. Có thể chọn B nếu bằng chứng cho thấy friction thiết lập và giá trị trực tiếp rõ. Một câu trả lời chọn A vẫn chỉ đạt nếu nêu dữ liệu còn thiếu và giới hạn cam kết; lựa chọn build toàn diện vì nhiều pain codes không đạt. C cần lý do phần nào đòi hỏi người thật và cách kiểm chi phí phục vụ. Đánh giá chất lượng chuỗi lý do, không thưởng một chữ đáp án cố định.

Tự kiểm tra: job là điều muốn hoàn thành; symptom là biểu hiện quan sát hoặc được kể; comparator công bằng cần đúng job, điều kiện truy cập, mức hướng dẫn và tiêu chí; hướng dẫn có thể là giải pháp nếu người dùng tự duy trì được với effort phù hợp.

## Bài tổng hợp mẫu

Quyết định hiện tại là phân bổ vòng nghiên cứu tiếp, chưa cam kết xây app. Dữ liệu 200 đơn vị giúp nhận diện các tình huống và giả thuyết, nhưng không ước lượng prevalence do tuyển chọn, tập trung nguồn và thiếu thông tin phân nhóm. 107 đơn vị English active AI không phải 107 cá nhân độc lập đã xác minh. Có cả pain lẫn thành công được tự báo cáo.

Chọn nghiên cứu P1 với comparator hiện có và nhiệm vụ mới không trợ giúp sau 48 giờ/bảy ngày; giữ P2 thành nhánh riêng cho quyết định ôn IELTS. So A app riêng, B workflow hiện có, C human/hybrid và D nghiên cứu thêm theo outcome, effort, chi phí và khả năng triển khai. D phù hợp lúc này vì thiếu bằng chứng về gap còn lại. Nếu comparator đáp ứng outcome với effort được người học chấp nhận, thu hẹp hoặc dừng giả thuyết cần app mới. Nếu gap còn và có hệ quả sau so sánh công bằng, tiếp tục nghiên cứu cơ chế và giá trị; chưa nhảy sang kết luận launch.

## Đáp án kiểm tra đầu vào

Tám tính năng không đủ xác nhận thành công nếu kết quả mục tiêu không cải thiện hoặc chưa đo. 200 dòng không bảo đảm 200 người vì một người có nhiều episode và nhiều nguồn. 30 lời hứa mua thiếu cam kết và bối cảnh hành vi; cũng thiếu comparator và kinh tế. Khi chọn A hay B, cần outcome, mức chắc bằng chứng, chi phí cơ hội, ràng buộc và điều kiện đổi ý. Nếu bạn nêu được giới hạn của chính câu trả lời, đó là tiến bộ trong tư duy.

# Thuật ngữ và nguồn đọc Tập I

Output là thứ đội giao; outcome là thay đổi có ý nghĩa cần đo. Discovery là công việc giảm bất định về giá trị và lời giải; delivery là đưa phương án thành thứ dùng được và vận hành được. Insight là diễn giải có ích cho quyết định, không chỉ một con số đáng chú ý. Comparator là phương án đối chiếu thực tế. Underserved là chưa được đáp ứng đủ trong một phạm vi xác định, không đồng nghĩa chưa có tính năng.

CAC là chi phí thu hút theo đơn vị khách đã chốt; churn là tỷ lệ rời theo định nghĩa và kỳ theo dõi; LTV là giá trị đóng góp kỳ vọng theo mô hình và giả định. Các thuật ngữ này cần có đơn vị, thời gian và nguồn dữ liệu khi dùng.

[B1] Rob Fitzpatrick. The Mom Test. Bản PDF người học cung cấp, các phần The Mom Test (trang in 8–22), Asking important questions (41–55), Choosing your customers (89–98). Không suy năm xuất bản từ tên file. Trang in đã kiểm theo đầu trang bản gửi.

[B2] Gayle Laakmann McDowell và Jackie Bavaro. Cracking the PM Interview. CareerCup, 2014, ISBN 9780984782819. Dùng chương 2, 4, 13–15. Các mô tả tuyển dụng và công ty là bối cảnh lịch sử của sách, không phải thông tin tuyển dụng hiện hành.

[S1] Teresa Torres. Continuous Discovery Habits. Trang giới thiệu sách của tác giả, 2021. https://www.producttalk.org/continuous-discovery-habits/ . Dùng ý tưởng duy trì học hỏi trong công việc sản phẩm; không coi tần suất là bảo đảm đúng.

[S2] Melissa Perri. Escaping the Build Trap. O’Reilly, 2018. Trang hướng dẫn của Product Institute: https://productinstitute.com/resources/books/escaping-the-build-trap . Dùng nguyên tắc quản trị theo giá trị; không tuyên bố đã đọc toàn bộ sách bổ trợ.

[S3] Alistair Croll và Benjamin Yoskovitz. Lean Analytics. O’Reilly, 2013. https://www.oreilly.com/library/view/lean-analytics/9781449335687/index.html . Trang nhà xuất bản xác minh sách và phạm vi; các công thức trong chương là mô hình minh họa có giả định riêng, không benchmark lấy từ sách.

[S4] Clayton Christensen Institute. Jobs to Be Done. https://www.christenseninstitute.org/theory/jobs-to-be-done/ . Khung nhìn về tiến bộ trong hoàn cảnh, gồm khía cạnh chức năng, cảm xúc và xã hội; không thay thế phép đo thị trường.

[P1] English_Learning_AI_Secondary_Research_2026.md, bản gốc 130 units. [P3] English_Learning_Evidence_Database_V2.xlsx, nội dung hiện hành V2.1, 200 units. [P4] Secondary_Research_Continuation_Delta_20261017.md. [P5] H1_H6_Evidence_Falsification_Matrix_V2.md. [P7] Current_Solution_Benchmark_V2.md. [P10] Primary_Research_Plan_V2.md. Danh mục đầy đủ, định danh và độ mới có trong project/Source_Inventory.md. Những tài liệu này là hồ sơ phân tích của dự án, không phải xác nhận độc lập mọi lời kể hay thí nghiệm.

Các nguồn web được kiểm ngày 17/10/2026. Giáo trình dùng ý tưởng ở mức ghi rõ, không tái tạo hình hay văn bản sách. Sơ đồ, tình huống và bài tập là nội dung gốc. Khi nguồn chỉ là trang giới thiệu, phạm vi sử dụng giới hạn ở nội dung truy cập được.

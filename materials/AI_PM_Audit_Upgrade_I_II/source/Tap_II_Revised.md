# Applied AI Product Management và Product Analytics

## Tập II Nghiên cứu người dùng và kiểm tra bằng chứng

Chương 5–8 | Giáo trình và ba phòng thực hành | Phiên bản 2.0 | 17 tháng 10 năm 2026

Bạn có thể đọc tập này sau khi nắm ba phân biệt: dữ liệu khác diễn giải; đầu ra khác kết quả; một khó khăn có người gặp khác một thị trường chưa được phục vụ tốt. Tập I giải thích chúng bằng các quyết định sản phẩm. Tập II hướng dẫn tạo và kiểm bằng chứng: chọn phương pháp, phỏng vấn, phân nhóm theo nhu cầu và tổng hợp mà vẫn giữ phản chứng.

Kết quả học cần đạt là một kế hoạch nghiên cứu có câu hỏi rõ, một interview guide không dẫn dắt, một bảng episode có thể truy lại nguồn và một quyết định có giới hạn. Ba lab cuối tập dùng dữ liệu thật trong hồ sơ dự án và một bảng nhỏ MÔ PHỎNG. Chưa có phỏng vấn hay thử nghiệm người thật nào được thực hiện để viết giáo trình.

## Hướng dẫn đọc độc lập

Đơn vị bằng chứng là một record được giữ theo quy tắc của nghiên cứu; nó không tự là một cá nhân độc lập. Mẫu số là toàn bộ đơn vị đủ điều kiện cho tỷ lệ đang nói. Một record có thể chứa nhiều mã vấn đề, và một người có thể tạo nhiều record. Tác vụ hoàn thành ngay không xác nhận tiến bộ dài hạn.

Các nhãn dùng xuyên suốt là DỮ LIỆU HỒ SƠ, TỰ THUẬT, QUAN SÁT, SUY LUẬN, GIẢ THUYẾT, MÔ PHỎNG và ĐỀ XUẤT. Tài liệu kế hoạch mô tả nghiên cứu sẽ làm, không phải kết quả. Trích dẫn [B], [S] và [P] dẫn tới thư mục cuối tập và danh mục nguồn có chú giải trong gói học tập.

Bản sửa 2.0 giữ case nghiên cứu ở snapshot V2.1 của bộ sách gốc. “Hiện hành” trong các trích dẫn hồ sơ chỉ snapshot ấy, không khẳng định chưa có cập nhật dự án sau đó. Các bài mới dùng dữ liệu MÔ PHỎNG riêng. Đáp án và rubric chi tiết nằm trong Instructor_Guide_I_II.pdf; hãy nộp bài trước khi mở. Tập III–V theo kiến trúc mới chưa nằm trong bản giao này.

## Mục lục

[[TOC]]

## Kiểm tra đầu vào Tập II

Hãy viết ba câu hỏi để tìm hiểu người đã nhận feedback AI nhưng vẫn gặp khó khi tự viết. Sau đó tự đánh dấu câu nào nói sẵn giải pháp, câu nào chỉ hỏi dự định và câu nào yêu cầu một episode. Tiếp theo giải thích vì sao 23 quote đối chiếu được không có nghĩa 23 người đã được đo outcome học. Cuối cùng chọn cách nghiên cứu: bạn muốn biết người dùng có tìm thấy nút ôn lỗi không, hoặc app có giúp học tốt hơn không. Hai câu hỏi có cần cùng thiết kế không?

# Chương 5 Chọn phương pháp nghiên cứu theo câu hỏi

## Tình huống và mục tiêu học

MÔ PHỎNG. Bạn tìm thấy 200 bình luận than phiền trên mạng rồi được yêu cầu tính tỷ lệ người cần một app mới. Một bảng lớn khiến công việc trông định lượng, nhưng cách tuyển chỉ người đăng trải nghiệm có thể đã quyết định mẫu hình bạn thấy. Muốn trả lời tỷ lệ thị trường, bạn cần biết ai có cơ hội vào mẫu và ai đã bị bỏ ngoài.

Mục tiêu chương là chọn phương pháp theo quyết định, nhận diện thiên lệch và nêu đúng phạm vi phát biểu. Tiên quyết: biết một tỷ lệ có tử số và mẫu số. Thuật ngữ: nghiên cứu sơ cấp (primary research), thứ cấp (secondary research), định tính (qualitative), định lượng (quantitative), thái độ (attitudinal), hành vi (behavioral), tổng thể (population), mẫu (sample), độ giá trị (validity).

## Bốn trục cần giữ riêng

Nghiên cứu sơ cấp thu dữ liệu mới cho câu hỏi hiện tại; nghiên cứu thứ cấp dùng dữ liệu hoặc tài liệu có sẵn. Một nghiên cứu sơ cấp không tự tốt hơn một nghiên cứu thứ cấp: khảo sát dẫn dắt có thể yếu hơn một hồ sơ hành vi chất lượng cao. Điểm cần xét là câu hỏi, cách thu và giới hạn.

Định tính tìm hiểu trải nghiệm, hoàn cảnh và cơ chế qua nội dung giàu ngữ cảnh. Định lượng biểu diễn quy mô hoặc mối liên hệ bằng đại lượng. Đếm code trong lời kể là một thao tác định lượng trên dữ liệu định tính, nhưng không biến cách tuyển chọn thành đại diện. Bạn có thể tính đúng 20/200 rồi diễn giải sai nếu gọi đó là 10% người học ngoài thị trường.

Thái độ là điều người ta nghĩ hoặc cảm nhận; hành vi là điều họ làm. Trong lời kể tôi đã bỏ app, nội dung được nói là hành vi nhưng phương thức đo vẫn là tự thuật. Trong video tác vụ, bạn quan sát thao tác trong điều kiện nghiên cứu; đó cũng không phải toàn bộ đời sống tự nhiên. Hai loại đều có ích khi được gắn đúng nhãn. Cách phân biệt phương pháp tham khảo [S5]; những ví dụ sau là thiết kế giảng dạy gốc.

## Chọn câu hỏi trước khi chọn công cụ

| Câu hỏi | Phương pháp khởi đầu phù hợp | Điều chưa trả lời được |
| --- | --- | --- |
| Người học đang cố hoàn thành việc gì | Phỏng vấn episode, xem artifact có consent | Tỷ lệ thị trường gặp việc ấy |
| Có tự tìm được tính năng ôn không | Quan sát usability với nhiệm vụ rõ | Hiệu quả học dài hạn |
| Bao nhiêu người rời trong một cohort | Log đủ độ phủ và định nghĩa rời | Vì sao họ rời |
| Can thiệp có cải thiện học không | Thiết kế so sánh đủ kiểm soát và đo outcome | Tính phổ quát ngoài nhóm nghiên cứu |
| Người dùng kể gì trên cộng đồng | Phân tích nguồn thứ cấp có truy vết | Tỷ lệ dân số hoặc nguyên nhân nhân quả |

Không cần lập tức chạy A/B test cho một câu hỏi mà bạn chưa biết outcome là gì. Cũng không dùng phỏng vấn để thay thế đo hiệu quả nhân quả. Trình tự thường hữu ích là làm rõ job, quan sát workflow, chốt outcome và comparator, sau đó mới quyết định liệu có cần một thử nghiệm lớn hơn không. Đây là lựa chọn theo câu hỏi, không phải quy trình bắt buộc cho mọi sản phẩm.

## Từ tổng thể đến mẫu được nhìn thấy

Giả sử tổng thể bạn quan tâm là người lớn tại Việt Nam đang dùng AI để cải thiện tiếng Anh cho công việc. Người đọc một diễn đàn không tự thuộc tổng thể này; người viết tiếng Việt chưa chắc cư trú ở Việt Nam; người có đi làm chưa chắc dùng English cho công việc. Mỗi tiêu chí cần biến dữ liệu riêng và cách xác nhận phù hợp.

Khung lấy mẫu (sampling frame) là danh sách hoặc cơ chế mà qua đó bạn có thể tiếp cận đối tượng. Nó có thể thiếu những người không có tài khoản cộng đồng hoặc người ít đăng bài. Trong một mẫu xác suất, xác suất được chọn được xác định bởi thiết kế. Trong một mẫu có chủ đích, bạn chọn trường hợp để học về sự khác biệt hoặc cơ chế. Cả hai có mục đích; chỉ không được dùng suy luận của loại này như thể có thiết kế của loại kia.

![Hình 5 Những lớp lựa chọn trước khi một lời kể vào corpus](../figures/fig05.png)

Hình 5 hỏi ai đang bị mất ở từng lớp. Đây là sơ đồ phương pháp do tác giả biên soạn, không có số đếm luồng tìm kiếm. Không dùng nó như PRISMA đã thực hiện. Các lớp gồm có nhu cầu, chọn nền tảng, chọn đăng, được công cụ truy vấn thấy và được nghiên cứu giữ. Mỗi lớp có thể làm thay đổi cơ cấu câu chuyện.

## Ví dụ có lời giải

MÔ PHỎNG CƠ BẢN. Bạn chọn 10 người đã bỏ một app và tám người nói giá đắt. Tỷ lệ 8/10 = 80% mô tả lý do được kể trong 10 người đã chọn. Nó không phải tỷ lệ người dùng bỏ app vì giá. Muốn biết phần trăm người rời, cần cohort gốc gồm cả ở lại và rời; muốn biết lý do của toàn bộ người rời, cần cách chọn và phản hồi đủ phù hợp trong nhóm ấy.

MÔ PHỎNG TRUNG CẤP. Bạn tuyển cả người dùng thành công để kiểm cơ chế. Điều đó giúp thấy điều kiện mà workflow hoạt động tốt, nhưng không làm mẫu thành ngẫu nhiên. Nếu cố tình chọn năm thành công và năm thất bại, tỷ lệ thành công 50% do thiết kế tuyển quyết định. Kết quả có ích là sự khác biệt về workflow và hoàn cảnh, không phải con số 50% ấy.

DỮ LIỆU HỒ SƠ NÂNG CAO. Trong 200 đơn vị V2.1, 135 đến từ Reddit và Trustpilot, tức 67,5%. Đây là tỷ trọng nền tảng trong corpus, tử số 135, mẫu số 200, đơn vị account–thread/review. Nó cho thấy tập trung nguồn. Không có trọng số dân số đáng tin để biến 67,5% thành thị phần hoặc điều chỉnh thành tỷ lệ pain. Một lần tìm thêm nguồn mới không tự sửa được thiên lệch tích lũy [P3–P4].

## Chất lượng bằng chứng là nhiều chiều

Độ truy vết hỏi có tìm lại được đoạn gốc không. Độ phù hợp hỏi nguồn có đúng đối tượng và job không. Độ trực tiếp hỏi ta quan sát tác vụ hay nghe kể. Độ bao phủ hỏi ai bị thiếu. Độ mới hỏi experience thuộc thời điểm nào. Tính độc lập hỏi các đơn vị có lặp tác giả, thread hay ảnh hưởng lẫn nhau không. Không có một thang điểm tự động biến tất cả thành bằng chứng cao.

Valid measurement cần đo đúng khái niệm. App score phát âm không tự đo năng lực thuyết trình hoặc quyết định ôn thi. Reliability hỏi phép đo có ổn định không; một hệ thống chấm ổn định vẫn có thể chấm sai mục tiêu. External validity hỏi kết quả dùng được ở phạm vi nào khác; một tác vụ mẫu thành công không bảo đảm họp thật thành công. Causal validity hỏi có đủ cơ sở quy tác động cho can thiệp không. Đừng dùng từ valid mà không nói đang xét chiều nào.

Nghiên cứu Pew về các mẫu online phi xác suất là một nguồn để học cách kiểm độ lệch và giới hạn [S6]. Các kết quả cụ thể của nghiên cứu đó không được chuyển thành hệ số hiệu chỉnh cho corpus này. Tính giống nhau ở tên online sample không làm hai thiết kế tương đương.

## Quyết định, sai lầm và giới hạn

Ở dự án English AI, lựa chọn đầu tiên là dùng corpus để hình thành câu hỏi có thể bị bác bỏ, rồi thu episode và tác vụ phù hợp. Không nên dùng bảng review để chọn ngay phân khúc có tỷ lệ pain lớn nhất. Vì thông tin trình độ và nghề thiếu nhiều, segment ấy có thể chỉ là nơi code dễ nhận ra nhất.

Không gán unknown thành no. Không xem số trang nhiều như số người nhiều. Không coi một bài paper có 28 người là thêm 28 raw units vào bảng review. Không cho rằng có URL là đã kiểm được mọi câu trong nguồn. Không gọi đủ năm hoặc 10 cuộc phỏng vấn là bão hòa nếu chưa xét độ đa dạng và mục đích phân tích.

Không dùng khảo sát rộng khi khái niệm cần đo chưa rõ: người tham gia có thể hiểu tiến bộ theo điểm thi, sự tự tin hoặc số phút học. Phương án đơn giản hơn là làm rõ episode, định nghĩa outcome và thử câu hỏi trước. Ngược lại, khi đã có chỉ số log rõ và đủ dữ liệu, không cần thay toàn bộ việc đếm bằng phỏng vấn.

## Bài tập và tự kiểm tra

Bài 5A cơ bản. Phân loại: đọc review công khai; xem người dùng làm một email mới trong buổi nghiên cứu; hỏi họ cảm thấy thế nào; phân tích cohort hủy gói. Nêu hai trục cho mỗi cách, không chỉ một nhãn.

Bài 5B trung cấp. Trong corpus, 107/149 English units là active AI. Viết câu diễn giải đúng và một câu sai. Nêu ba lý do không ngoại suy thành tỷ lệ dùng AI ở Việt Nam.

Bài 5C nâng cao. Thiết kế nghiên cứu nhỏ để phân biệt không tìm được tính năng với dùng đúng vẫn không đạt outcome. Chỉ ra bạn cần quan sát những bước nào, và khi nào cần nghiên cứu khác lớn hơn.

Câu tự kiểm tra: tự thuật về hành vi có phải quan sát trực tiếp không? Một mẫu cân bằng pain/success có đại diện không? Bằng chứng tốt về tính năng có tốt về learning gain không?

## Ghi nhớ và bước tiếp theo

Phương pháp cần phù hợp với phát biểu mà bạn muốn đưa ra. Mẫu lớn hơn không khắc phục được mọi lỗi chọn và đo. Nguồn: [S5], [S6], [P3–P4], [B1]. Chương 6 tập trung vào câu hỏi phỏng vấn: cách thu dữ liệu mà chính câu hỏi không đẩy người tham gia về ý tưởng của bạn.


## Phép đo có thể thay đổi trước cả hành vi

MÔ PHỎNG WORKED EXAMPLE. Một app ghi “hoàn thành bài” khi màn hình feedback mở. Bản cập nhật sau chỉ ghi khi người học bấm nộp câu tự viết lại. Tỷ lệ event hoàn thành giảm, nhưng hai phiên bản đang đếm hai hành vi khác nhau. Dùng cùng tên metric không làm chúng tương đương. Cần version định nghĩa event, tìm thời điểm thay đổi và nếu có thể xây lại chuỗi so sánh trên cùng hành vi.

Trước một biểu đồ lên hoặc xuống, hãy kiểm định nghĩa, đơn vị, cửa sổ thời gian và độ phủ. Sau đó mới hỏi cơ cấu người dùng và hành vi. Thứ tự này giúp tránh phỏng vấn để giải thích một chuyển động do logging tạo ra. Tuy nhiên dữ liệu không hoàn hảo không có nghĩa mọi phản hồi người dùng đều vô ích; giữ hai nguồn và hỏi từng nguồn đang đo điều gì.

### Bài 5D chọn nghiên cứu sau phát hành

Trở lại Case B MÔ PHỎNG trong practice/case_b_weekly.csv. Marketing nói sản phẩm tốt hơn vì sessions tăng. Learning lead nói sản phẩm tệ hơn vì pass/assessed giảm. Bạn có một ngày của analyst và hai buổi quan sát. Viết kế hoạch theo thứ tự: phép kiểm dữ liệu, cách tách nhóm, câu hỏi quan sát và điều cần nghiên cứu dài hơn. Chỉ ra một câu hỏi mà bảng 4 dòng hiện tại không thể trả lời dù tính rất chính xác. Không đọc phân tích instructor trước khi nộp.

# Chương 6 Phỏng vấn hành vi với The Mom Test

## Tình huống và mục tiêu học

MÔ PHỎNG. Bạn hỏi một người quen: nếu có AI nhớ lỗi và nhắc học đúng lúc, bạn có dùng không? Họ nói rất hay. Bạn cảm thấy ý tưởng được xác nhận. Nhưng người quen có thể muốn động viên, chưa hình dung effort, hoặc đang đồng ý với một lợi ích miễn phí trong tưởng tượng. Vấn đề là thiết kế câu hỏi, không phải người tham gia cố tình nói dối.

Chương này giúp bạn thực hiện một cuộc trò chuyện tập trung vào episode, hiểu hệ quả và phân biệt lời khen với cam kết. Tiên quyết là chương 5. Thuật ngữ: câu hỏi dẫn dắt (leading question), episode, câu hỏi đào sâu (probe), cam kết (commitment), bước tiến cụ thể (advancement), đồng ý tham gia có thông tin (informed consent).

## Hỏi để hiểu đời sống trước khi trình bày ý tưởng

The Mom Test nhấn mạnh câu chuyện đời sống và hành vi cụ thể, thay cho ý kiến chung về ý tưởng hoặc dự định tương lai [B1, trang in 8–22]. Trong giáo trình này, nguyên tắc ấy được dùng để dựng lại một episode tiếng Anh, rồi kiểm phần nào có artifact và phần nào chỉ là hồi tưởng. Đây là cách áp dụng mới, không chép các cuộc hội thoại của sách.

Câu hỏi lần gần nhất thường có ích vì buộc ta tìm một sự kiện có thời điểm. Tuy nhiên nó cũng có thể bỏ qua một sự kiện hiếm nhưng quan trọng. Sau episode gần nhất, có thể hỏi một lần khó hoặc thành công đặc biệt, rồi ghi rõ vì sao chọn. Không coi câu hỏi kể lại là bằng chứng quan sát: trí nhớ vẫn có thể thiếu hoặc hợp lý hóa.

Một cuộc phỏng vấn tốt không nhất thiết dài hoặc trang trọng. Điều quan trọng là có quyết định nghiên cứu rõ, ba bất định quan trọng và khả năng theo dấu điều bất ngờ. Nếu người tham gia nói công cụ hiện tại đủ tốt, đừng kéo họ trở lại pain bằng cách hỏi liên tiếp các câu tiêu cực.

## Hai đoạn hội thoại và điều được phép kết luận

Hội thoại sau là MÔ PHỎNG do giáo trình biên soạn, không có người tham gia thật.

| Lượt | Cách hỏi dẫn dắt | Vấn đề |
| --- | --- | --- |
| Người nghiên cứu | Bạn hay quên lỗi sau khi AI sửa đúng không | Cài sẵn hiện tượng và tính đúng của AI |
| Người học | Chắc cũng có | Câu trả lời mơ hồ bị xem như xác nhận |
| Người nghiên cứu | Nếu app nhớ giúp thì sẽ tốt hơn chứ | Đề nghị lợi ích mà chưa có chi phí hay bối cảnh |
| Người học | Có, nghe hay | Lời khen chưa là hành vi, cam kết hay giao dịch |

Một cách hỏi khác bắt đầu: lần gần nhất bạn dùng AI để sửa một email tiếng Anh là khi nào? Người học nói chiều thứ Ba. Bạn hỏi: trước khi mở AI, bạn định gửi nội dung gì và điều gì khiến bạn muốn sửa? Họ nói sợ câu viết quá chắc về ngày giao. Bạn tiếp: sau bản sửa, bạn thay phần nào, có giữ bản gốc không? Họ cho biết chỉ sao chép câu, không định học vì sắp họp. Bạn hỏi: khi cần viết lại ý đó sau này, bạn đã làm gì? Họ nói chưa có lần nào tương tự.

Lời giải của tình huống: chưa có bằng chứng quên một lỗi sau sửa vì chưa có cơ hội dùng lại. Job hiện tại có thể là giữ đúng mức cam kết trước deadline, không phải học dài hạn. Câu trả lời không làm nghiên cứu thất bại; nó ngăn mã hóa nhầm. Bạn có thể hỏi một episode khác có mục tiêu tự viết tốt hơn, hoặc giữ trường hợp này làm đối chiếu.

## Dựng lại chuỗi sự kiện

![Hình 6 Từ trigger đến hệ quả và khả năng kiểm tra](../figures/fig06.png)

Hình 6 hỏi thiếu mắt xích nào trong lời kể. Đây là cấu trúc interview do tác giả biên soạn. Mỗi nút có thể chứa TỰ THUẬT, QUAN SÁT hoặc UNKNOWN; không biến cả chuỗi thành observed chỉ vì có một ảnh chụp. Nhánh trường hợp thành công giúp tránh chỉ tìm dữ liệu thuận giả thuyết.

Hãy đi từ trigger đến mục tiêu và điều kiện, sau đó mới hỏi thao tác, feedback, hành động tiếp và hệ quả. Nếu họ nói mất nhiều thời gian, hỏi lần ấy từ lúc nào đến lúc nào và họ làm gì ở giữa. Nếu không có mốc chắc, ghi ước lượng tự thuật; đừng tự điền số phút. Nếu nói thường dùng, hỏi bảy ngày vừa rồi đã dùng hôm nào, cho việc gì.

Đào sâu hệ quả cần tách điều đã xảy ra với điều sợ xảy ra. Email làm khách hiểu sai và tôi lo khách sẽ hiểu sai là hai dữ liệu khác nhau. Cả hai có thể đáng nghiên cứu, nhưng một cái là sự kiện được kể, một cái là rủi ro cảm nhận. Hỏi nhẹ nhàng để làm rõ, không biến buổi phỏng vấn thành thẩm vấn.

## Một guide có thể thực hành

ĐỀ XUẤT. Trong năm phút đầu, nói rõ mục đích tìm hiểu workflow, quyền bỏ câu hỏi và cách dùng dữ liệu. Xin đồng ý ghi âm riêng; không mặc định tham gia là cho phép ghi âm hoặc đưa nội dung cho dịch vụ khác. Dùng dữ liệu giả lập thay nội dung công ty nếu cần tái hiện.

Trong 15–20 phút tiếp, hỏi một episode gần nhất và giữ trình tự. Các probe có thể dùng là: điều gì khiến bạn bắt đầu; bạn đã thử cách nào trước; lúc đó thế nào là đủ tốt; sau feedback bạn làm gì; có chỗ nào phải hỏi lại; hệ quả thực tế là gì? Không đọc danh sách pain trước.

Tiếp theo hỏi counterepisode: một lần việc ấy hoạt động tốt; điều gì khác; có ai giúp thiết lập; có trường hợp bạn không cần học lại không? Nếu xin xem artifact, chỉ lấy phần cần cho câu hỏi và ghi rõ người tham gia có quyền từ chối. Kết thúc bằng cách nhắc lại điều mình hiểu, cho họ sửa và thống nhất follow-up nếu họ muốn.

Không cần hỏi đủ mọi câu theo thứ tự cứng. Nếu episode nói về chọn ưu tiên ôn IELTS, đừng ép thành lỗi grammar trong công việc. Chuyển ghi chú về đúng nhánh nghiên cứu hoặc ghi ngoài phạm vi. Cấu trúc giúp giữ tập trung; nó không nên làm mất câu chuyện thật.

## Cam kết cho biết điều gì

Trong The Mom Test, commitment có thể liên quan thời gian, uy tín hoặc tiền [B1, trang in 62–73]. Trong dự án, một lịch follow-up được giữ hoặc một workflow thực sự được thử có ý nghĩa hơn câu sẽ dùng. Tuy nhiên chúng chỉ xác nhận loại cam kết đã xảy ra: tham gia nghiên cứu không xác nhận sẽ trả tiền cho sản phẩm; khoản thù lao nghiên cứu không phải willingness-to-pay.

MÔ PHỎNG CƠ BẢN. Người học nói sẵn lòng quay lại rồi không có lịch cụ thể: ý định. Người học xác nhận lịch: cam kết thời gian. Họ thực sự làm tác vụ sau bảy ngày: hành vi nghiên cứu đã xảy ra. Không đổi tên ba mức này thành cùng một cột validated user.

MÔ PHỎNG TRUNG CẤP. Một người không muốn chia sẻ audio công việc nhưng sẵn lòng làm tác vụ giả lập. Đây có thể là ràng buộc dữ liệu hoặc mức thoải mái; không chứng minh nhu cầu yếu. Hãy ghi giới hạn và điều chỉnh tác vụ có consent.

MÔ PHỎNG NÂNG CAO. Một quản lý muốn giới thiệu ba nhân viên nhưng không có ngân sách. Đó là sự hỗ trợ tuyển có thể hữu ích nếu sau này được ủy quyền liên hệ; không phải hợp đồng. Cần xác định người mua và quy trình ngân sách riêng. Không dùng một lời giới thiệu để dự báo doanh thu.

## Sai lầm và khi không nên dùng

Tránh nói quá nhiều về giải pháp, đưa hai giả thuyết vào một câu, sửa cách dùng công cụ của người tham gia trước khi quan sát baseline, hoặc chỉ ghi phần hợp ý. Đừng tóm tắt không dùng vì không tiến bộ nếu họ nói không gia hạn vì giá dù vẫn thấy hữu ích. Tự thuật đa nguyên nhân cần được giữ đa nguyên nhân.

Không diễn giải lời khuyên của sách về câu hỏi tương lai thành quy tắc cấm mọi nghiên cứu ý định. Concept test và nghiên cứu mua có thể dùng câu hỏi thích hợp, nhưng phải biết chúng đo phản ứng hoặc lựa chọn trong điều kiện đó. Với mục tiêu tìm một vấn đề đang xảy ra, episode quá khứ là điểm khởi đầu tốt hơn một lời hứa tưởng tượng.

Không dùng phỏng vấn để xác nhận chính xác phát âm nếu thiếu audio và chuyên môn đánh giá. Không xem transcript là bản ghi đủ mọi âm hay ngắt lời. Phần quan sát có thể bổ sung, nhưng vẫn phải ghi điều kiện tác vụ và giới hạn.

## Bài tập và tự kiểm tra

Bài 6A cơ bản. Viết lại ba câu: bạn có thích AI nhớ lỗi không; bạn có thường quên không; bạn trả bao nhiêu cho app giúp nhớ? Mỗi câu mới phải yêu cầu một sự kiện hay lựa chọn thực.

Bài 6B trung cấp. MÔ PHỎNG: người học nói tôi bỏ app nhưng vẫn dùng GPT, và tôi thích bản sửa nhưng không mở lại. Viết năm probe để phân biệt app-stop, AI-stop, goal-stop và correction uptake.

Bài 6C nâng cao. Soạn guide 25 phút cho P1 với một counterepisode và một yêu cầu xem artifact có thể từ chối. Nêu ba điều bạn sẽ không kết luận sau buổi này.

Câu tự kiểm tra: lời khen cung cấp dữ liệu gì? Cam kết tham gia khác cam kết mua thế nào? Một câu hỏi về quá khứ có thể dẫn dắt không? Hãy chỉ ra một ví dụ.

## Ghi nhớ và bước tiếp theo

Phỏng vấn tốt làm rõ điều đã xảy ra và những phần chưa biết, kể cả khi kết quả làm ý tưởng yếu hơn. Nguồn: [B1, trang in 8–40, 41–55, 62–73, 99–113], [P10]. Chương 7 dùng episode để tạo segment và job có ích cho quyết định.


## Annotation giúp tránh nhớ sai cuộc phỏng vấn

MÔ PHỎNG WORKED EXAMPLE. Người tham gia nói: “Hôm qua tôi không gửi bản AI sửa. Tôi thấy nó biến 'có thể giao thứ Sáu' thành 'sẽ giao thứ Sáu'. Tôi không lưu bản cũ. Cuối cùng nhờ đồng nghiệp đọc lại.” Người phỏng vấn chưa thấy email hoặc log.

Ta có lời kể về một episode hôm qua, về việc không gửi bản sửa và nhờ đồng nghiệp. Người tham gia giải thích rằng mức cam kết bị đổi. Chưa có quan sát trực tiếp đầu vào/đầu ra để xác nhận AI thực sự đổi nghĩa, chưa có thời gian mất, cũng chưa biết kết quả cuối. Ghi “AI đổi nghĩa đã được xác minh” là vượt bằng chứng. Ghi “người này không tin AI trong mọi việc” cũng vượt phạm vi.

Probe tiếp có thể là: “Bạn còn nhớ phần mình muốn người nhận hiểu là gì?”; “Bạn đã sửa gì trước khi nhờ đồng nghiệp?”; “Có lần nào bản sửa giữ đúng ý và bạn dùng ngay không?” Nếu xin artifact, cho phép họ dùng nội dung đã ẩn thông tin hoặc từ chối. Probe về episode cần đứng trước lời đề nghị thử sản phẩm của đội.

### Bài 6D thực hành trên hội thoại mới

Dùng episode S01 và S03 trong practice/support_episodes_simulated.csv. Đây là kịch bản giả lập về trợ lý hỗ trợ khách hàng, không phải transcript người thật. Đánh dấu trong từng dòng: lời kể hành động, diễn giải của nhân vật, điều analyst chưa biết. Viết bốn probe không dẫn dắt và một counterepisode. Không sửa lời nhân vật để khiến họ “cần AI” hơn. Nộp bản annotation trước khi xem codebook mẫu.

# Chương 7 Jobs to Be Done và phân nhóm theo nhu cầu

## Tình huống và mục tiêu học

MÔ PHỎNG. Hai người cùng 24 tuổi, cùng làm kỹ thuật và có trình độ tự khai tương tự. Một người muốn gửi email ngay; người kia muốn giảm phụ thuộc AI để nói trong buổi review tuần tới. Một tính năng rewrite có thể giúp người đầu và không đủ cho người sau. Phân nhóm nhân khẩu học không giải thích được khác biệt quan trọng này.

Chương này giúp viết job theo hoàn cảnh và kết quả, phân biệt khía cạnh chức năng, cảm xúc và xã hội, đồng thời thiết kế một segment có thể tuyển và kiểm. Tiên quyết là biết dựng lại episode. Thuật ngữ: Jobs to Be Done (JTBD), kết quả mong muốn (desired outcome), hành trình (journey), chuyển đổi (switching), phân nhóm theo nhu cầu (needs-based segmentation).

## Job là tiến bộ muốn đạt trong một hoàn cảnh

JTBD tập trung vào tiến bộ người ta tìm kiếm trong hoàn cảnh cụ thể [S4]. Chức năng có thể là truyền đạt rủi ro rõ; cảm xúc là bớt lo nói quá chắc; xã hội là được đồng nghiệp nhìn nhận đáng tin. Các khía cạnh này có thể cùng tồn tại nhưng phải được hỏi hoặc quan sát, không tự gán mọi người học đều muốn tự tin.

Một cách viết hữu ích là khi hoàn cảnh X xảy ra, tôi muốn làm Y để đạt Z. Đây chỉ là cấu trúc làm rõ, không phải công thức tự tạo insight. Khi trước buổi cập nhật dự án có thay đổi thời hạn, tôi muốn giải thích phần chưa chắc để người nghe hiểu rủi ro mà không hiểu thành cam kết. Câu này đủ cụ thể để đề xuất tiêu chí outcome: giữ đúng ý, người nghe hiểu được mức chắc và effort hợp lý.

Muốn học tiếng Anh là mục tiêu rộng; muốn tự giải thích rủi ro trong một tình huống mới là job cụ thể hơn. Muốn có AI nhớ lỗi là đề nghị giải pháp. Muốn không phụ thuộc gợi ý ở nhiệm vụ mới là một kết quả mong muốn, nhưng vẫn cần định nghĩa nhiệm vụ và mức đủ tốt.

## Tách hai job dễ bị gộp

| Chiều so sánh | P1 trong hồ sơ V2 | P2 trong hồ sơ V2 |
| --- | --- | --- |
| Hoàn cảnh | English dùng trong công việc | IELTS Writing với quyết định ôn hoặc thi |
| Điều muốn làm | Tự dùng lại sau feedback ở bài mới | Chọn ưu tiên và kế hoạch có căn cứ |
| Outcome chính | Correct use/opportunity, giữ nghĩa, không hint | Ưu tiên có textual evidence, hệ quả quyết định |
| Comparator | Workflow ôn hiện có cấu hình phù hợp | Rubric, assessment và rater phù hợp |
| Điều không suy được | Gain viết tự thành gain nói | Band đồng thuận tự là điểm thi chính thức |

DỮ LIỆU HỒ SƠ. Bảng này diễn giải protocol V2 [P10], không nói đã có sáu người P1 và bốn người P2 tham gia. Các quota là kế hoạch tuyển. P2 không phải một phiên bản khác của P1 chỉ vì cả hai chứa từ feedback. Nếu một job được giải, job còn lại chưa tự được giải.

## Từ episode sang journey có thể kiểm

![Hình 7 Hành trình giả định của một episode công việc](../figures/fig07.png)

Hình 7 hỏi điểm nào có thể tạo hoặc mất giá trị. Đây là journey MÔ PHỎNG, có các bước chuẩn bị email, xin sửa, gửi và dùng lại; lớp thứ hai ghi câu hỏi còn thiếu. Nó không phải journey quan sát của người dùng thật. Dùng nó như guide quan sát và sửa lại theo từng episode, không như phát hiện nghiên cứu.

MÔ PHỎNG CƠ BẢN. Người học sửa email rồi gửi. Bạn thấy họ không lưu correction. Không lưu có thể hợp lý vì job chỉ là gửi ngay. Đừng mã hóa ngay thành thiếu động lực học. Hỏi họ có định dùng lại, có tình huống lặp và có cách khác đang đáp ứng không.

DỮ LIỆU HỒ SƠ. E172 chứa tự thuật về việc gom lỗi, tạo quiz và làm đúng 5/5 câu [P3]. Điểm cần giữ là quiz gần mẫu cũ, chưa phải speaking novel task. Job có thể chuyển từ nhận sửa sang tự ôn; sự chuyển ấy đáng hỏi tiếp nhưng không chứng minh transfer dài hạn.

MÔ PHỎNG NÂNG CAO. Một người làm tốt bài mới khi có thời gian nhưng khó khi họp. Có thể segment hữu ích dựa trên áp lực thời gian và modality. Không nên quy mọi thất bại vào trình độ thấp hoặc thiếu ôn. Cần đo nền tảng, nhiệm vụ, cơ hội biểu đạt và ràng buộc tình huống trước khi quyết định nhóm nào cần phục vụ.

## Segment phải tuyển được và có thể bị làm yếu

Một segment dùng được cần tiêu chí quan sát hoặc tự khai rõ: English trong công việc, có ít nhất bốn tuần dùng AI nhận feedback, có episode 30 ngày gần đây và muốn tự làm tốt hơn. Nghề, cư trú và ngôn ngữ mẹ đẻ là các trường riêng. Nếu quan tâm PM/DA Việt Nam, cần xác nhận cả vai trò lẫn cư trú theo phạm vi nghiên cứu; không suy từ thread tiếng Việt hoặc một ví dụ roleplay.

Đừng dựng segment sau khi thấy kết quả để giữ mọi người thất bại và loại mọi người thành công. Có thể thu hẹp segment khi bằng chứng cho thấy khác biệt, nhưng phải ghi đó là phân tích khám phá và kiểm ở vòng sau. Một segment đáng tin cần có khả năng tìm được người ngoài mạng lưới quen và có những trường hợp không phù hợp giả thuyết.

Trong nghiên cứu định tính có chủ đích, sự đa dạng nên phục vụ câu hỏi: pain và success, đang dùng và vừa ngừng, tự thiết lập và có người hướng dẫn, viết và nói. Không cần điền mọi ô nhân khẩu học cho đẹp. Nếu modality khác nhau làm tiêu chí đo khác, nên tách kết quả hơn là gộp để có mẫu số lớn.

## Hiểu chuyển đổi mà không đơn giản hóa churn

Một timeline chuyển đổi cần biết họ dùng gì trước, trigger nào khiến tìm cách khác, đã thử gì, bỏ gì, còn giữ gì và đổi từ lúc nào. Có thể một người bỏ Speak nhưng vẫn giữ GPT; họ là former user của một sản phẩm và active AI ở cấp tổng quát. Một gói hết hạn không gia hạn cũng không tự nghĩa họ đã ngừng học.

DỮ LIỆU HỒ SƠ. E198 kể ngừng ELSA sau một giai đoạn vì mức sửa quá chi tiết so với điều họ cần. E199 trong cùng nguồn kể có lợi từ tracking và duy trì luyện. E200 giữ GPT vì luyện English nhưng không nêu gain [P4]. Các ca cho thấy cần giữ mục tiêu và sản phẩm riêng, không xếp mọi app-stop thành thiếu tiến bộ. Chúng cũng chưa tạo thành phân bố lý do churn vì không có cohort denominator.

## Sai lầm và giới hạn JTBD

Một job statement đẹp không ước lượng số người, giá trị kinh tế hoặc hiệu quả lời giải. Khía cạnh cảm xúc và xã hội có thể bị analyst phóng đại nếu không giữ provenance. Nhiều job có thể xảy ra trong một episode; hãy chọn job liên quan quyết định hiện tại và giữ phần còn lại làm ngữ cảnh.

Không dùng JTBD để thay thế usability khi câu hỏi chỉ là người dùng có tìm được nút không. Không dùng nó để khẳng định một pattern nhân quả. Phương án đơn giản hơn ở vòng đầu có thể là bảng episode gồm hoàn cảnh, mục tiêu, hành động và hệ quả; chỉ đưa JTBD vào nếu nó giúp so sánh các trường hợp tốt hơn.

## Bài tập và tự kiểm tra

Bài 7A cơ bản. Với tôi cần app AI Business English, viết hai job khác nhau: một phục vụ công việc ngay và một phục vụ học dài hạn. Nêu outcome riêng.

Bài 7B trung cấp. MÔ PHỎNG: Lan bỏ app vì giá, vẫn dùng AI để sửa email; Nam giữ app vì streak nhưng không có bài đo; An không dùng app nhưng tự viết được email tốt. Ghi trạng thái nào biết và trạng thái nào chưa biết. Ai có thể là countercase, tùy câu hỏi nào?

Bài 7C nâng cao. Viết screener sáu câu cho segment người đi làm tự dùng lại lỗi đã sửa. Cho phép success và leaver. Nêu một cách mà screener của bạn vẫn có thể thiên lệch.

Câu tự kiểm tra: một người có nhiều job được không? Nghề PM có tự xác nhận work-English không? Khi nào journey là mô phỏng và khi nào là tổng hợp bằng chứng? Vì sao một satisfied case không bác bỏ mọi pain?

## Ghi nhớ và bước tiếp theo

Segment tốt giúp giải thích điều kiện của nhu cầu và chọn người để học tiếp. Nó không phải persona trang trí. Nguồn: [S4], [B1, trang in 89–98], [P3–P5], [P10]. Chương 8 chuyển episode thành code, theme và quyết định mà vẫn giữ các mức chưa chắc.


## Segment phục vụ quyết định nào

MÔ PHỎNG WORKED EXAMPLE. Hai nhân viên hỗ trợ cùng làm ở một công ty nhưng xử lý hai loại việc. Một người cần tìm nhanh điều khoản hoàn tiền rồi tự quyết; người kia chỉ được soạn bản nháp để trưởng nhóm duyệt. “Nhân viên hỗ trợ” chưa đủ phân nhóm cho quyết định tự động hóa. Quyền quyết định, độ phức tạp trường hợp và hậu quả sai có thể quan trọng hơn tuổi.

Không nên tạo segment “nhóm cần agent” vì đã cài lời giải vào tiêu chí. Hãy viết tiêu chí quan sát được: xử lý yêu cầu hoàn tiền cần dẫn policy còn hiệu lực; phải có người duyệt trước khi gửi; có episode trong 30 ngày. Sau đó quan sát nhu cầu thật và cả trường hợp quy trình hiện tại đã đủ dùng.

### Bài 7D chuyển giao ngoài English AI

Dùng sáu episode support mô phỏng. Đề xuất tối đa hai nhóm phục vụ hai quyết định khác nhau. Mỗi nhóm phải có điều kiện tuyển, job và outcome; nêu ít nhất một record không đủ dữ liệu để xếp chắc. Nếu S06 đã làm tốt bằng template không dùng AI, nó làm yếu mệnh đề nào và không làm yếu mệnh đề nào? Không dùng số record trong hai nhóm để báo quy mô thị trường.

# Chương 8 Tổng hợp bằng chứng và kiểm giả thuyết

## Tình huống và mục tiêu học

MÔ PHỎNG. Sau nhiều cuộc trò chuyện, đội có 100 sticky notes. Người nói mạnh nhất gom chúng thành theme AI không đáng tin rồi đề xuất app mới. Một sticky note có thể là lời kể, diễn giải hoặc feature request; nếu không giữ loại và nguồn, bức tường nhiều màu có thể làm mất thông tin quan trọng.

Mục tiêu là xây bảng có truy vết, mã hóa đúng đơn vị, xử lý phản chứng và dùng hypothesis matrix để quyết định bước tiếp. Tiên quyết là chương 5–7. Thuật ngữ: mã (code), nhóm ý nghĩa (theme), codebook, nguồn gốc dữ liệu (provenance), chuỗi kiểm tra (audit trail), phản chứng (counterevidence), tiêu chí bác bỏ (falsification criterion), Opportunity Solution Tree (OST).

## Giữ các lớp dữ liệu tách nhau

Lớp nguồn lưu locator, ngày và loại truy cập. Lớp episode giữ điều người tham gia nói hoặc ta quan sát được. Lớp code gắn nhãn với định nghĩa, điều kiện gồm và loại trừ. Lớp suy luận nối nhiều episode thành một cách hiểu. Lớp quyết định ghi hành động, lý do và điều sẽ làm đổi ý. Nếu sửa cách hiểu, không âm thầm ghi đè nguyên liệu gốc.

Một schema tối thiểu gồm Evidence ID, nguồn, tác giả/cluster nếu xác định được, job, trigger, behavior, outcome, workaround, evidence type, code, uncertainty và next check. Mỗi cột cần quy tắc unknown. Không bỏ raw chỉ vì bản tóm tắt đọc dễ hơn. Bản tóm tắt có thể vô tình lược mất câu người dùng vẫn thấy hữu ích.

## Từ code đến theme bằng một ví dụ

MÔ PHỎNG CƠ BẢN. Câu tôi copy bản sửa để gửi trước cuộc họp có thể gắn immediate task completion và copy behavior; chưa đủ cho learning failure. Câu sau ba ngày tôi tự viết câu mới nhưng vẫn sai cấu trúc ấy cần thêm xác nhận cùng trọng tâm và cơ hội. Câu AI cắt lời khi tôi đang tìm từ có thể liên quan turn-taking, nhưng phải phân biệt mạng, mic, policy vào lượt và kỳ vọng người dùng.

MÔ PHỎNG TRUNG CẤP. Hai người có code feedback nhưng một người nói sửa quá nhiều, một người nói band IELTS thay đổi. Gộp thành feedback quality có thể hữu ích ở mức định hướng rất rộng, nhưng không đủ để chọn lời giải. Tách job, consequence và tiêu chí. Một bên có thể cần liều lượng phù hợp; bên kia cần hiểu độ bất định để quyết định ôn.

MÔ PHỎNG NÂNG CAO. Người dùng nói một công cụ giúp họ tiến bộ nhưng bài không trợ giúp chưa cải thiện. Giữ cả hai dữ liệu: có thể họ tăng tự tin, dùng sai bài đo hoặc tăng kiến thức chưa hiện ở task này. Không ưu tiên dữ liệu thuận giả thuyết rồi xóa phần còn lại. Hãy hỏi phép đo đang trả lời khía cạnh nào.

## Chọn cách phân tích định tính một cách nhất quán

Thematic analysis có nhiều cách tiếp cận. Tài liệu của Braun và Clarke phân biệt phân tích phản tư với cách chú trọng đồng thuận code giữa người mã hóa [S7]. Trong reflexive thematic analysis, vai trò diễn giải của nhà nghiên cứu được thừa nhận; không có quy tắc mọi nghiên cứu phải báo một hệ số inter-rater rồi mới hợp lệ.

Với dự án PM cần audit counts theo một codebook, định nghĩa code ổn định và đối chiếu bất đồng ở các trường hợp quyết định có thể hữu ích. Nhưng hãy gọi đúng cách làm: một tổng hợp theo codebook có audit, không tuyên bố đồng thời dùng mọi chuẩn của reflexive TA. Bạn chưa được viết hai người đồng thuận nếu thực tế chỉ có một người mã hóa. Tập hiện hành ghi giới hạn này và bảo toàn raw khi đề xuất recode [P1, P3].

Một workflow thực dụng là đọc và ghi ngữ cảnh, tạo code thử, định nghĩa include/exclude, mã hóa có locator, tìm negative cases, so lại các nhóm và viết theme thành câu có điều kiện. Sau đó thử hỏi: theme này giải thích gì hơn việc đổi tên một topic? Các bước có thể quay lại, không phải pipeline tự động tạo sự thật.

## Hypothesis matrix và bằng chứng làm đổi ý

| Giả thuyết dự án | Dữ liệu có thể hỗ trợ | Điều cần thử để làm yếu | Trạng thái được phép giữ |
| --- | --- | --- | --- |
| H1 chuyển giao còn khó | Episode phù hợp và task mới | Configured workflow giải đủ với effort hợp lý | Có tự thuật, chưa causal |
| H2 thiếu cấu trúc | Khó chọn hoặc duy trì workflow | Người dùng tìm và dùng được cấu trúc sẵn có | Claim tuyệt đối có phản chứng |
| H3 lặp lỗi sau feedback | Cùng lỗi, người, cơ hội và thời điểm | Không tái phạm ở bài mới phù hợp | Chuỗi trễ còn thiếu |
| H4 work-English underserved | Job có hệ quả sau comparator | Công cụ hiện có đạt outcome đủ tốt | Nhu cầu khác underserved |
| H5 churn chủ yếu do thiếu tiến bộ | Cohort rời và lý do có timeline | Lý do khác giải thích tốt hơn ở cohort | Chưa có cause ranking |
| H6 app riêng vượt AI đa năng | So sánh cùng job và điều kiện | Incumbent đạt đủ outcome/effort | Chưa có superiority evidence |

Bảng tóm tắt diễn giải [P5], không phải đánh giá mới đã thực nghiệm. Một phản chứng về tính năng có thể bác claim không có tính năng nhưng không bác mọi khó khăn sử dụng. Ngược lại, một lời kể khó khăn không xác lập thiếu tính năng. Cần luôn khớp mệnh đề với loại bằng chứng.

## OST giúp tổ chức lựa chọn, không xác nhận cơ hội

![Hình 8 Cây cơ hội và lời giải phục vụ kiểm giả thuyết](../figures/fig08.png)

Hình 8 hỏi nhiều lời giải nào có thể phục vụ cùng một cơ hội. Đây là cây GIẢ THUYẾT dạy học: đầu là outcome tác vụ mới, nhánh là trở ngại cần kiểm, dưới là workflow hiện có hoặc hỗ trợ người thật, cuối là giả định rủi ro. Nó chưa phải OST đã xác nhận từ phỏng vấn của dự án. Không đọc số nhánh như số cơ hội thị trường.

OST của Teresa Torres nối outcome, opportunity, solution và assumption tests [S8]. Điểm hữu ích là tránh yêu một lời giải từ đầu và giữ lựa chọn trong cùng phạm vi mục tiêu. Điểm giới hạn là cây chỉ tốt bằng đầu vào; một cây đẹp từ các giả định chưa kiểm vẫn là giả định. Tác giả nhấn mạnh cần các câu chuyện khách hàng làm đầu vào. Không biến số cuộc phỏng vấn tối thiểu được gợi ý để bắt đầu cây thành số đủ market validation.

## Dùng gate mà không tự làm chặt giả tạo

DỮ LIỆU HỒ SƠ. P1 V2 dự kiến sáu người gồm bốn pain và hai success; P2 dự kiến bốn người gồm ba uncertain và một satisfied. Gate P1 đề xuất mức 80% opportunities sau bảy ngày ở ít nhất ba trong bốn pain cases, cùng giữ nghĩa, tự duy trì và effort chấp nhận được, để làm yếu claim residual underserved trong nhóm đã tuyển [P10]. Đây là ngưỡng quyết định vận hành chốt trước, không chuẩn CEFR hay kiểm định ý nghĩa thống kê.

Nếu một người không có cơ hội dùng trọng tâm, mẫu số opportunity không phù hợp; không tính họ không mắc lỗi là học tốt. Nếu không có follow-up, giữ missing. Nếu feedback gốc sai, phân tích correctness trước retrieval. Nếu modality viết và nói khác, không gộp thành một tỷ lệ chung rồi gọi là fluency.

Một gate có thể hỗ trợ quyết định dừng hoặc nghiên cứu thêm trong một phạm vi hẹp. Nó không giải quyết mọi câu hỏi về pricing, prevalence, hiệu quả lâu dài hoặc launch. Nếu pilot cho thấy ngưỡng hay rubric không dùng được, thay đổi cần có phiên bản trước khi thu dữ liệu quyết định, tránh đổi sau để cứu ý tưởng.

## Sai lầm và khi không nên dùng

Không coi một quote là một người; không coi hai người cùng thread là hai nguồn độc lập; không coi quote được kiểm là outcome được kiểm. Không dùng một tổng điểm confidence để che một trường NE, nghĩa chưa có loại bằng chứng cần thiết. Không coi số mã BENEFIT hay TRANSFER là số complaint nếu codebook cho phép cả phản chứng.

Không tạo OST cho một lỗi kỹ thuật tái hiện được chỉ để đủ framework. Không dùng affinity map thay bảng bằng chứng có provenance khi quyết định yêu cầu kiểm lại nguồn. Công cụ đơn giản hơn có thể là matrix hypothesis–evidence–unknown–next action với một đoạn giải thích.

## Bài tập và tự kiểm tra

Bài 8A cơ bản. Phân loại: câu gốc, bản dịch, faithful summary, code, suy luận và khuyến nghị. Lớp nào nên giữ bất biến khi bạn đổi quan điểm?

Bài 8B trung cấp. DỮ LIỆU HỒ SƠ: E133 và E200 cùng account ở hai thread. Viết cách tính record, nguồn và cá nhân, đồng thời nêu điều vẫn chưa biết về độc lập toàn corpus.

Bài 8C nâng cao. Lập matrix cho H3 gồm một evidence tự thuật, một countercase, một alternative cause, tiêu chí bác bỏ và một nghiên cứu tiếp. Không thêm kết quả giả.

Câu tự kiểm tra: topic khác theme thế nào? Khi nào cần codebook nhất quán? Một cây opportunity đẹp có xác nhận nhu cầu không? Tại sao việc giữ phản chứng có thể tăng giá trị nghiên cứu?

## Ghi nhớ và bước tiếp theo

Tổng hợp tốt giúp người khác đi từ quyết định về lại nguyên liệu và kiểm xem còn cách giải thích nào. Nguồn: [S7–S8], [P3–P5], [P10]. Ba lab tiếp theo cho bạn tự làm các kiểm tra ấy trước khi sang thống kê và phân tích sản phẩm ở Tập III.


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

# Lab 1 Kiểm chất lượng bộ bằng chứng hiện hành

## Câu hỏi và dữ liệu

Câu hỏi kinh doanh là corpus hiện tại đủ làm căn cứ cho quyết định nào. Dùng practice/evidence_audit_extract.csv, instructor/audit_results.json và instructor/audit_evidence.py. CSV là trích xuất phục vụ kiểm đếm từ workbook V2.1; không là log sự kiện sản phẩm. Mỗi dòng giữ một Evidence ID, Source ID, nền tảng, English flag, AI status và các missing flag của raw. Không chứa toàn bộ quote hay đủ nội dung để tự đánh giá mọi giả thuyết.

Giả thuyết kiểm cấu trúc: có 200 Evidence ID duy nhất; nhóm English là 149; nhóm English active AI là 107. Đây là kiểm tái lập hồ sơ, không giả thuyết thị trường. Từ điển: english_confirmed là 1/0 của raw; ai_status dùng nhãn gốc; các missing_* bằng 1 khi ô trống hoặc bắt đầu bằng unknown/không trích sau trim và lowercase. source_id không phải person_id.

## Nhiệm vụ và thao tác

Trước tiên mở CSV trong bảng tính, không sửa raw. Đếm dòng có ID và đếm ID khác nhau. Lọc english_confirmed bằng 1 rồi ghi số dòng. Trong phần đã lọc, chọn ai_status bằng active user và ghi số dòng. Sau đó group theo platform và tính tỷ trọng Reddit cộng Trustpilot trên 200. Cuối cùng, trong 107 dòng, cộng từng missing flag.

Nếu muốn kiểm bằng mã, chạy python instructor/audit_evidence.py từ thư mục gói. Script dùng thư viện chuẩn, tính từ CSV được cung cấp và in kết quả để đối chiếu sau khi tự làm. Có thể chạy audit_evidence.py --workbook /đường/dẫn/workbook để tự xuất lại các trường từ workbook gốc nếu môi trường có openpyxl. Workbook gốc không được đóng gói lại; mã đọc không thay đổi nó.

Viết một đoạn giới hạn: trích xuất kiểm được cấu trúc và missingness theo quy tắc, chưa xác minh từng nguồn hay chất lượng tự thuật. Không gọi các assertion của script là kiểm định giả thuyết nhân quả.

Kết quả đối chiếu và phần diễn giải nằm trong instructor. Hãy lưu bảng và đoạn kết luận của bạn trước khi chạy mã lời giải.

# Lab 2 Vì sao 200 review không là 200 khách hàng độc lập

## Câu hỏi và dữ liệu

Dùng practice/independence_simulated.csv. Đây là bảng MÔ PHỎNG 12 record để học cách phân biệt quote, episode, account và thread. Nó không phải các ca mới thêm vào corpus thật. Mỗi record có record_id, account_id, thread_id, quote_id và episode_id. quote_id có thể lặp vì một câu được nhập hai lần; record_id vẫn khác.

Giả thuyết thực hành: số record, quote riêng, account và thread khác nhau. Tính từng số rồi giải thích đơn vị nào phù hợp để nói số dòng nhập, số tài khoản biết được và số tình huống. Một tài khoản vẫn chưa chắc là một người duy nhất; nhiều tài khoản cũng có thể thuộc cùng người mà ta chưa biết.

## Nhiệm vụ

Tìm quote_id lặp, ghi hai record cần đối chiếu rồi tạo một bản làm việc loại bản nhập lặp. Đếm account_id và thread_id. Đếm episode_id. Vẽ bảng account × thread hoặc dùng PivotTable để thấy một account xuất hiện ở nhiều thread và nhiều account trong cùng thread. Không gọi thao tác loại quote lặp là giải quyết xong phụ thuộc nguồn.

Sau đó trả lời: nếu account A có ba record về một episode, một phân tích tần suất theo record có thể phóng đại điều gì? Nếu hai account cùng bị ảnh hưởng bởi một bản cập nhật và thảo luận trong cùng thread, tại sao hai lời kể chưa chắc độc lập về ngữ cảnh?

## Diễn giải và giới hạn

Loại một bản nhập lặp giúp tránh double-count câu gốc. Gom episode giúp tránh đếm ba đoạn của cùng sự kiện như ba sự kiện. Cluster theo account giúp thấy phụ thuộc tác giả. Giữ thread giúp biết ảnh hưởng chung. Không có một phép dedup duy nhất đúng cho mọi câu hỏi: cần chọn đơn vị phân tích trước và giữ các khóa để kiểm lại.

DỮ LIỆU HỒ SƠ. Trong corpus thật, E133 và E200 cùng account nhưng ở hai nguồn thread khác [P4]. Đếm retained record vẫn là hai; không gọi đó là hai người độc lập. Toàn corpus chưa có identity resolution đầy đủ; vì vậy không suy số người thực từ số ID hay chỉ trừ một rồi gọi phần còn lại là người duy nhất.

Sai thường gặp là dùng DISTINCT Evidence ID để chứng minh độc lập người, hoặc gom toàn bộ thread thành một người. Hành động tiếp là ghi rõ cluster biết được, kiểm các kết luận nhạy với cluster và giữ phần chưa xác định. Không cần tìm danh tính thật hoặc mở rộng thu thập cá nhân để làm một bài học về đơn vị phân tích.

# Lab 3 Phát hiện thiên lệch chọn mẫu và dữ liệu thiếu

## Câu hỏi và dữ liệu

Tiếp tục dùng CSV thật của Lab 1. Câu hỏi là thiếu thông tin đang chặn quyết định nào. Một ô đủ nội dung theo quy tắc kỹ thuật không có nghĩa thông tin đủ về mặt nghiên cứu. Ví dụ có chữ đi làm vẫn chưa xác nhận vai trò PM/DA; có self-described weak vẫn chưa là CEFR đo được.

Giả thuyết thực hành là missingness cao ở một số trường khiến phân tích theo segment hoặc trình độ chưa đáng tin. Không có giả định rằng missing là ngẫu nhiên. Cần xem cơ chế vì sao thiếu: nguồn không hỏi, analyst không trích, chỉ thấy snippet hoặc người kể không muốn chia sẻ.

## Nhiệm vụ và tính tay

Với mỗi trường, tính thiếu / 107; tính biết được là 107 − thiếu. Vẽ cột ngang phần trăm thiếu và ghi mẫu số. Tiếp theo chọn một câu hỏi bị chặn, chẳng hạn người PM/DA Việt Nam ở B1–B2 có khó khăn nào, rồi chỉ ra trường nào chưa đủ. Không bù bằng cách suy nghề từ ví dụ cuộc họp.

MÔ PHỎNG cho độ nhạy: giả sử trong 20 record đủ thông tin về một vấn đề, 12 có tín hiệu; còn 10 record thiếu hoàn toàn. Trong tổng 30 record, tỷ lệ tín hiệu có thể từ 12/30 = 40% nếu cả 10 không có đến 22/30 = 73,3% nếu cả 10 có. Tỷ lệ complete-case 12/20 = 60% chưa đủ đại diện toàn 30. Đây là biên số học minh họa, không khoảng tin cậy và không hiệu chỉnh tuyển mẫu.

## Diễn giải và bước tiếp

Với raw thật, original quote thiếu 98/107, trong khi lớp review toàn corpus ghi 23 quote đã đối chiếu. Hai số không mâu thuẫn: khác lớp dữ liệu và khác mẫu số. Không tự điền raw từ review mà không version. Đối chiếu quote chỉ xác nhận văn bản, không xác nhận outcome người học.

Hãy lập bảng trường thiếu → quyết định bị ảnh hưởng → cách thu phù hợp. Segment có thể cần screener tự khai; cùng lỗi có thể cần artifact và rubric; nguyên nhân churn cần timeline và cohort phù hợp. Không phải mọi missing đều nên bù: nếu thông tin không làm đổi quyết định, việc thu thêm có thể chỉ tăng effort và dữ liệu không cần thiết.

Sai thường gặp là coi 0 error khi không có opportunity, điền mean vào các biến định tính hoặc dùng khoảng tin cậy để che selection bias. Một công thức sai số lấy mẫu không giải quyết được cơ chế lọt vào corpus. Kết luận hợp lý là xác định phát biểu nào chưa thể đưa ra và nghiên cứu tiếp nhỏ nhất để làm rõ nó.

# Bài đánh giá cuối tập

## Tình huống MÔ PHỎNG

Một stakeholder đọc 200 record và muốn trong hai tuần xây app nhớ lỗi cho PM/DA Việt Nam. Họ nói đã có 107 người dùng AI, 23 người được xác minh, nhiều người phàn nàn feedback và các công cụ hiện tại chưa cá nhân hóa. Bạn có 12 giờ chuẩn bị một bước nghiên cứu tiếp, chưa có người tham gia hay quyền liên hệ ai.

Viết một bản phản hồi 500–700 từ gồm: sửa bốn chỗ suy luận vượt bằng chứng; chọn một quyết định trong 12 giờ; xác định job và giả thuyết; đề xuất interview guide ngắn; comparator cần kiểm; loại dữ liệu cần có; gate và điều không kết luận. Giữ P1/P2 riêng. Đầu ra chỉ là thiết kế và phân tích, không tự coi đã tuyển người.

## Rubric 20 điểm

Chấm 0–4 cho từng mặt: xác định câu hỏi và đơn vị; chọn phương pháp và mẫu; chất lượng câu hỏi episode; xử lý counterevidence và alternatives; quyết định có gate cùng giới hạn. Mức 16 trở lên, không giả kết quả hoặc ngoại suy prevalence, là đạt tập nghiên cứu nền tảng. Nếu thấp ở đơn vị, làm lại Lab 2; thấp ở dữ liệu thiếu, làm Lab 3; thấp ở câu hỏi, viết lại guide chương 6.

# Thuật ngữ và nguồn đọc Tập II

Episode là một tình huống có hoàn cảnh, hành động và thời điểm; self-report là điều người tham gia kể; observation là điều quan sát được trong điều kiện ghi rõ. Provenance giúp quay lại nguồn. Code là nhãn áp lên dữ liệu; theme là cách hiểu mẫu ý nghĩa. Counterevidence làm yếu một phát biểu trong phạm vi xác định. Falsification criterion nêu điều có thể khiến phải bỏ hoặc thu hẹp giả thuyết. Unknown là trạng thái thiếu thông tin, không phải no.

[B1] Rob Fitzpatrick. The Mom Test, PDF được cung cấp. Trang in 8–22 về câu hỏi; 23–40 về dữ liệu kém; 41–55 về mức quan trọng; 62–73 về commitment; 89–98 về khách hàng; 99–113 về quy trình. Không dùng trang số giả định của một ấn bản khác.

[S4] Clayton Christensen Institute. Jobs to Be Done. https://www.christenseninstitute.org/theory/jobs-to-be-done/ . Khung thực hành lý giải tiến bộ trong hoàn cảnh; không phải phép đo quy mô.

[S5] Christian Rohrer. When to Use Which User-Experience Research Methods. Nielsen Norman Group. https://www.nngroup.com/articles/which-ux-research-methods/ . Dùng phân biệt mục đích và loại phương pháp; các mẫu phương pháp không thay thế thiết kế chi tiết.

[S6] Pew Research Center. Evaluating Online Nonprobability Surveys, 2016. https://www.pewresearch.org/methods/2016/05/02/evaluating-online-nonprobability-surveys/ . Nghiên cứu phương pháp khảo sát, dùng để học đánh giá selection bias; không chuyển trực tiếp số kết quả sang corpus English AI.

[S7] Virginia Braun và Victoria Clarke. Thematic Analysis, trang hướng dẫn của tác giả. https://www.thematicanalysis.net/ và https://www.thematicanalysis.net/doing-reflexive-ta/ . Phân biệt họ phương pháp, tính phản tư và quy trình phân tích; giáo trình không tuyên bố đang làm đầy đủ reflexive TA cho corpus cũ.

[S8] Teresa Torres. Opportunity Solution Trees. https://www.producttalk.org/opportunity-solution-trees/ . Tổ chức outcome, cơ hội, lời giải và kiểm giả định. Dùng như khung tổ chức suy nghĩ; đầu vào chưa kiểm vẫn phải gắn hypothesis.

[P1] English_Learning_AI_Secondary_Research_2026.md, snapshot 130 units. [P2] English_Learning_Product_Discovery_Decision_Brief.md, brief gốc. [P3] English_Learning_Evidence_Database_V2.xlsx, hiện hành 200 units. [P4] Secondary_Research_Continuation_Delta_20261017.md. [P5] H1_H6_Evidence_Falsification_Matrix_V2.md. [P6] English_Learning_User_Evidence_2026_Batch4.xlsx, snapshot 190 units. [P7] Current_Solution_Benchmark_V2.md. [P8] English_Learning_User_Evidence_2026.xlsx, snapshot 130 units. [P9] Primary_Research_Validation_Plan.md, thiết kế gốc O1–O3. [P10] Primary_Research_Plan_V2.md, protocol P1/P2 hiện hành được delta viện dẫn. Bản P9 được giữ để truy lịch sử, không trộn quota với P10.

Tài liệu dự án được kiểm nội dung ngày 17/10/2026. Các kết luận về tác vụ T01/T02 là điều hồ sơ báo cáo, chưa chạy lại trong giáo trình; các nguồn người dùng chưa được xác minh lại toàn bộ. Thư mục project giải thích phiên bản và phép kiểm đã thực hiện.

# Kế hoạch tự học PM và phân tích dữ liệu: 6 tuần, 2 giờ/ngày

Thiết kế cho người có nền tảng backend/software engineering, mới học PM và analytics. Dùng bộ Tập I–II bản sửa 2.0 đã giao. Ngày bắt đầu gợi ý: thứ Hai 19/10/2026; kết thúc 29/11/2026. Có thể dịch toàn bộ lịch theo ngày bạn thực sự bắt đầu.

Mục tiêu của 6 tuần: tự xác định vấn đề và quyết định cần ra, đọc đúng mẫu số, phân biệt dữ liệu với suy luận, chọn nghiên cứu phù hợp, tổng hợp evidence và viết memo có thể phản biện. Đây là giai đoạn nền tảng; chưa bao phủ SQL/product analytics nâng cao, PRD/delivery, kiến trúc AI, evals và production. Không coi 6 tuần là chứng nhận đủ nghề AI PM.

## 1. Cách tổ chức 2 giờ

Khung giờ gợi ý 20:00–22:00 nếu phù hợp lịch làm việc. Giữ nguyên giờ bắt đầu để giảm việc phải quyết định mỗi tối. Chọn một công cụ ghi bài và Excel hoặc Google Sheets; chưa cần xây app quản lý việc học hay dashboard riêng.

| Phút | Việc làm | Dấu vết phải có |
| --- | --- | --- |
| 0–15 | Đóng sách, trả lời 3 câu hỏi từ buổi trước/tuần trước | Câu trả lời trước khi tra lại |
| 15–40 | Đọc một phần nhỏ; tự giải thích ví dụ và tính lại số | Một ví dụ do bạn diễn đạt, kèm giả định |
| 40–45 | Nghỉ | Rời màn hình |
| 45–85 | Làm bài hoặc phân tích dữ liệu; chưa xem đáp án | Bản nháp v1, bảng tính hoặc memo |
| 85–90 | Nghỉ | Rời màn hình |
| 90–110 | So rubric/đáp án, nhờ phản biện, sửa lỗi | Bản v2 và lý do sửa |
| 110–120 | Giải thích miệng 2 phút; ghi lỗi và việc ngày mai | 1–3 dòng nhật ký và câu hỏi ôn |

Đây là 120 phút theo lịch, gồm 110 phút học và 10 phút nghỉ: 84 giờ theo lịch, khoảng 77 giờ học trong 6 tuần. Nếu bạn muốn đủ 120 phút học thực, kéo buổi thêm 10 phút. Vào buổi project/ôn tập, dùng phần đọc 25 phút để xử lý điểm yếu, không cần nạp thêm lý thuyết.

Mỗi buổi chỉ đặt một đầu ra chính. Ví dụ: “tính coverage và viết ba câu giới hạn” rõ hơn “học analytics”. Không cần ghi chép đẹp; lưu được lý do quyết định và sai lầm đã sửa mới là mục tiêu.

## 2. Chu trình học một chương trong ba buổi

Buổi A: đọc mục tiêu, nhìn đề trước; học khái niệm và worked example, làm bài A/B. Với phép tính, ghi đơn vị, tử số, mẫu số và giả định trước khi bấm máy. Hỏi “số này giúp quyết định gì?”.

Buổi B: không nhìn sách, tự dựng lại ý chính; làm bài C. Liên hệ với một tình huống kỹ thuật bạn hiểu, chẳng hạn deployment, onboarding developer hoặc xử lý support. Tách rõ ví dụ giả lập và dữ liệu thực được phép dùng.

Buổi C: làm bài D trước khi xem Instructor. Viết quyết định, hai phương án, giới hạn và điều khiến bạn đổi ý. Sau phản hồi, làm một biến thể: capacity giảm, mẫu số đổi hoặc xuất hiện countercase. Chỉ đọc lại đúng phần gây sai.

Không biến ba buổi thành ba lần đọc cùng chương. Nếu bài A/B đã chắc, chuyển thời gian sang C/D và phản biện; không tăng số trang để lấp đủ giờ.

## 3. Lịch 42 ngày

Mỗi hàng là một buổi 2 giờ. Ngày 7 mỗi tuần có vai trò ôn và sửa lỗi; không bắt buộc mở chương mới.

### Tuần 1 — 19–25/10: Giá trị sản phẩm và tư duy quyết định

Tập I: chương 1 trang 3–7, chương 2 trang 8–13. Trang là số PDF, tính cả bìa.

| Ngày | Nhiệm vụ chính | Đầu ra |
| --- | --- | --- |
| 1 | Làm kiểm tra đầu vào tr2 trong 20 phút, giữ bản gốc; học ch1, bắt đầu 1A/B | Bài đầu vào và bảng output/outcome/business |
| 2 | Hoàn thành 1B/C; giải thích năm tầng model/task/UX/learning/business | Bảng tử/mẫu, ba kết luận được phép và chưa được phép |
| 3 | Làm 1D từ case_b_weekly.csv; tự tính rồi mới mở lời giải | Bảng kết quả và đoạn giải thích 150–200 từ |
| 4 | Học ch2; làm 2A/B, tự tính EV | Bảng dữ liệu/suy luận/giả thuyết/đề xuất |
| 5 | Làm 2C; học bảng phép kiểm và memo 40 giờ | Hai giả thuyết và quan sát phân biệt chúng |
| 6 | Làm 2D; đổi ràng buộc rồi sửa quyết định | Memo v1/v2, chỉ rõ vì sao đổi |
| 7 | Kiểm tra kín 20 phút về ch1–2; sửa hai lỗi lớn; giải thích miệng 5 phút | Một memo 1 trang và nhật ký lỗi tuần |

### Tuần 2 — 26/10–01/11: Kinh tế và chọn vấn đề

Tập I: chương 3 trang 14–17, chương 4 trang 18–21, bài tổng hợp trang 22.

| Ngày | Nhiệm vụ chính | Đầu ra |
| --- | --- | --- |
| 8 | Học ch3, làm 3A/B; ghi đơn vị và phân loại chi phí | Bảng doanh thu, chi phí, gross profit, đóng góp |
| 9 | Làm 3C; tính lại worked example survival | Bảng dòng tiền kỳ vọng theo tháng và giả định |
| 10 | Làm 3D bằng payback_inputs.csv; thay churn để xem độ nhạy | Bảng tính có công thức và khuyến nghị có giới hạn |
| 11 | Học ch4; làm 4A/B | Problem statement chưa gài sẵn giải pháp |
| 12 | Làm 4C; so các phương án và incumbent | Bảng phương án, bằng chứng thiếu, bước tiếp theo |
| 13 | Làm 4D; bắt đầu bài tổng hợp cuối Tập I | Memo về quyền dữ liệu và bản nháp bài tổng hợp |
| 14 | Hoàn thiện/chấm bài tổng hợp; ôn ch1–4 | Decision brief 1–2 trang, kế hoạch sửa lỗi |

### Tuần 3 — 02–08/11: Chọn nghiên cứu và phỏng vấn

Tập II: chương 5 trang 3–6, chương 6 trang 7–10.

| Ngày | Nhiệm vụ chính | Đầu ra |
| --- | --- | --- |
| 15 | Làm kiểm tra đầu vào Tập II; học ch5, làm 5A/B | Bảng câu hỏi → phương pháp → giới hạn |
| 16 | Làm 5C; phân biệt quan sát, lời kể và thực nghiệm | Research brief một trang |
| 17 | Làm 5D, tự tái tạo cách tính case B không nhìn bài tuần 1 | Kế hoạch thu thập giúp phân biệt ba giải thích |
| 18 | Học ch6; làm 6A/B | Bộ câu hỏi trung lập và follow-up theo episode |
| 19 | Làm 6C; diễn tập guide 25 phút, đánh dấu câu dẫn dắt | Interview guide có counterepisode và artifact request |
| 20 | Làm 6D với S01/S03; annotation từng lớp | Transcript mô phỏng đã chú giải, không bịa quan sát |
| 21 | Sửa guide và annotation; giải thích vì sao mỗi câu hỏi cần thiết | Guide v2 và 5 câu nên tránh |

Diễn tập với AI là luyện kỹ thuật hỏi, không phải primary research hoặc xác nhận nhu cầu. Nếu có người tự nguyện tham gia thật, chỉ ghi loại dữ liệu và phạm vi consent thực tế; không cần thu dữ liệu thật để hoàn thành tuần này.

### Tuần 4 — 09–15/11: Phân khúc và tổng hợp evidence

Tập II: chương 7 trang 11–14, chương 8 trang 15–19.

| Ngày | Nhiệm vụ chính | Đầu ra |
| --- | --- | --- |
| 22 | Học ch7, làm 7A/B | Hai job, outcome và comparator riêng |
| 23 | Làm 7C; phân nhóm theo task/authority thay vì chỉ nhân khẩu học | Screener và lý do từng tiêu chí |
| 24 | Làm 7D với case support | Segment memo có người dùng/người duyệt/quyền dữ liệu |
| 25 | Học ch8; làm 8A/B | Ledger tách quote, summary, code, inference |
| 26 | Làm 8C; bắt đầu T1 với sáu episode | Codebook include/exclude và bảng code v1 |
| 27 | Hoàn thành T1 và 8D; mới xem exemplar | Theme/memo v1/v2, countercase làm đổi kết luận |
| 28 | Ôn tích lũy; phản biện từng claim trong memo | Evidence map truy được mỗi claim về record |

### Tuần 5 — 16–22/11: Thực hành dữ liệu và giới hạn kết luận

Tập II: Lab 1–3 trang 20–22, bài tổng hợp trang 23. Dùng CSV trong practice/. Bắt đầu bằng Excel/Sheets để nhìn thấy đơn vị và nhóm; Python chỉ để kiểm tra sau khi đã hiểu. SQL/pandas đầy đủ thuộc giai đoạn sau.

| Ngày | Nhiệm vụ chính | Đầu ra |
| --- | --- | --- |
| 29 | Đọc practice/README; mở CSV, xác định grain/key/missing | Data dictionary ngắn và ba kiểm tra chất lượng |
| 30 | Lab 1: tự tính counts/filter/missingness bằng bảng tính | Bảng audit có denominator và rule rõ |
| 31 | Lab 2: phân biệt record, quote, account, thread, episode | Bảng đếm với định nghĩa; giải thích vì sao không phải unique users |
| 32 | Lab 3: tính missing bounds và chỉ ra selection bias | Bảng biên, một kết luận hợp lệ và một kết luận sai |
| 33 | Đối chiếu bằng audit_evidence.py và verify_learning.py; tìm nguyên nhân lệch | Reconciliation log, sửa công thức/rule nếu cần |
| 34 | Làm bài đánh giá cuối Tập II không xem đáp án | Memo 500–700 từ và study design |
| 35 | Chấm theo rubric sách; ôn lại một bài tính đã sai sau ít nhất ba ngày | Bản sửa, danh sách khoảng trống còn lại |

Khi chưa quen Excel: lọc một nhóm nhỏ rồi đếm tay để đối chiếu; sau đó dùng COUNTIF/COUNTIFS, SUMIF/SUMIFS hoặc pivot phù hợp. Học một thao tác để giải quyết câu hỏi đang làm; không cần học hết chức năng Excel trước. Giữ file CSV gốc và làm trong bản sao.

### Tuần 6 — 23–29/11: Hồ sơ quyết định và kiểm tra chuyển giao

Đây là mini project nền tảng, không phải capstone AI PM tám tuần đã nêu trong kiến trúc chương trình.

| Ngày | Nhiệm vụ chính | Đầu ra |
| --- | --- | --- |
| 36 | Chọn một quyết định hẹp từ case English AI; đóng băng snapshot và câu hỏi | Problem/decision brief, scope và source list |
| 37 | Lập evidence ledger và audit mẫu số cho claim quan trọng | Ledger nguồn/loại evidence/giới hạn |
| 38 | So ít nhất hai phương án và incumbent; tính chỉ số có căn cứ | Bảng trade-off và calculation sheet |
| 39 | Viết memo: khuyến nghị, lý do, rủi ro, owner, bước kiểm tiếp | Decision memo tối đa hai trang |
| 40 | Tự trình bày 5 phút; nhờ phản biện/AI đổi một ràng buộc; sửa memo | Bản trình bày và memo v2 kèm change log |
| 41 | Case mới ngoài English/support đã luyện: 90 phút tự làm, 20 phút phản biện, 10 phút ghi lỗi | Bài độc lập, rõ phần có/không dùng AI |
| 42 | Làm lại điểm yếu; so bài đầu vào; chọn năng lực cần học tiếp | Portfolio gọn và review cuối giai đoạn |

Đề ngày 41: nhờ người khác hoặc AI tạo một tình huống B2B mới về onboarding developer hay quản lý lịch, có bảng số liệu nhỏ tự nhất quán, một cột thiếu và hai lựa chọn cạnh tranh. Đề phải được gắn MÔ PHỎNG; chỉ nhận đề trước, giữ đáp án đến khi nộp. Người chấm/AI phải kiểm lại phép tính; phản hồi AI không thay thế chấm độc lập. Nếu không có reviewer, ghi rõ tự đánh giá, không tự điền tên reviewer vào workbook.

## 4. Cách nhớ lâu và biết mình hiểu

Sau một khái niệm quan trọng, lên lịch gợi nhớ sau khoảng 1, 3, 7 và 14 ngày. Đây là nhịp thuận tiện để bắt đầu, không phải khoảng cách tối ưu đã chứng minh cho mọi người. Dùng 15 phút đầu buổi: 2–3 câu cũ, ưu tiên câu từng sai; xem lại đáp án sau khi cố trả lời. Nếu trả lời đúng và giải thích tốt, giãn ra; nếu sai, sửa ngay và thử lại ngày tiếp theo.

Câu ôn nên đòi áp dụng: “Vì sao 200 records chưa chắc là 200 người?”, “Pass rate giảm có đủ kết luận model tệ hơn không?”, “Giả định nào khiến CAC/m không còn là payback thực?”. Flashcard chỉ dùng cho khái niệm hay nhầm; quyết định cần được luyện qua case và memo.

Duy trì nhật ký bốn cột: lỗi cụ thể; vì sao mình mắc; quy tắc kiểm lần sau; ngày làm lại. Ví dụ: chia số pass cho toàn bộ eligible và gọi đó là pass rate trong assessed → chưa xác định population → ghi grain, numerator, denominator trước khi tính → làm lại sau ba ngày.

## 5. Điều kiện đi tiếp

Mỗi chủ đề kiểm bốn mặt, mỗi mặt 0–2: giải thích bằng lời mình; làm đúng dữ liệu/phép tính; ra quyết định có căn cứ và giới hạn; thay đổi lập luận khi có dữ liệu/ràng buộc mới. 0 = chưa làm được; 1 = làm được với gợi ý hoặc còn lỗi đáng kể; 2 = tự làm đúng trong task hẹp và giải thích được.

Ngưỡng điều hành kế hoạch đề xuất: ít nhất 6/8, không mặt nào 0 và không có lỗi chặn thì học tiếp. Đây không phải chuẩn nghề hoặc thang đo được kiểm định. Lỗi chặn gồm bịa evidence, coi mô phỏng là khách thật, sai mẫu số làm đảo quyết định, kết luận causal không có thiết kế phù hợp hoặc bỏ qua quyền dữ liệu rõ trong đề. Sửa và giải một biến thể mới trước khi qua.

Chủ nhật ghi bốn điều: số buổi có sản phẩm tự làm; bài lạ làm được trước khi xem lời giải; lỗi còn lặp lại; điểm yếu ưu tiên tuần tới. Giờ học là chỉ báo duy trì, không phải bằng chứng đã thành thạo. Trong AI_PM_Competency_Framework.xlsx chỉ ghi bằng chứng thực cho phần đã làm; các năng lực chưa đánh giá để trống.

Nếu lỡ một buổi, dùng ngày ôn để bù. Nếu lỡ nhiều hoặc chưa đạt ngưỡng, lùi lịch vài ngày; không gộp bốn giờ đọc để gọi là bắt kịp. Khi mệt, chuyển buổi sang ôn/chữa bài ít tải hơn. Bảo vệ giấc ngủ và quay lại lịch vào ngày sau.

## 6. Dùng AI để hỗ trợ mà vẫn tự làm

Trước khi hỏi AI, lưu bản nháp và độ tự tin của mình. Khi bị kẹt, mô tả chính xác đang kẹt ở grain, công thức, evidence hay decision; yêu cầu một gợi ý, chưa xin lời giải hoàn chỉnh. Sau khi nộp, yêu cầu chỉ ra claim thiếu căn cứ, mẫu số cần kiểm và một countercase. Tự sửa trước khi xin mẫu tham khảo.

Lưu riêng ba lớp: bản tự làm, phản hồi nhận được, bản sửa. Khi dùng AI sinh dữ liệu/đóng vai người phỏng vấn, ghi MÔ PHỎNG. Giữ một phần bài hằng tuần và buổi kiểm tra ngày 41 không dùng AI trong lúc giải. AI chấm có thể sai; đối chiếu công thức, nguồn và rubric, nhất là khi phản hồi chỉ khen chung chung.

Với nền tảng engineer, dành ưu tiên cho “vì sao làm, làm cho ai, đo gì, điều gì đổi quyết định”. Chỉ viết script khi nó phục vụ một câu hỏi phân tích đã rõ. Chưa cần thêm RAG/agent/framework kỹ thuật vào dự án của sáu tuần này.

## 7. Sau sáu tuần

Nếu đạt kiểm tra nền tảng, chuyển sang product analytics: Excel thành thạo hơn, SQL, event schema, funnel/cohort/retention và chất lượng tracking; tiếp đến thực nghiệm, strategy/PRD/delivery, rồi kiến trúc AI/evals/chi phí/latency/governance/vận hành. Lập lịch chi tiết giai đoạn sau dựa vào bài ngày 41 và tài liệu thực đã có. Tập III–V chưa hoàn thiện, nên kế hoạch này không giả định bạn đã có đủ giáo trình cho các giai đoạn đó.

## 8. Cơ sở phương pháp và giới hạn

Tổng quan Dunlosky và cộng sự (2013) đánh giá practice testing và distributed practice có tính hữu dụng cao trên nhiều điều kiện học. Vì vậy kế hoạch dành thời gian gợi nhớ, ôn cách quãng và kiểm lại bài. Nghiên cứu Karpicke & Blunt (2011) cho thấy lợi ích của retrieval practice ở việc học văn bản khoa học, gồm câu hỏi hiểu và suy luận. Đây là cơ sở cho cách luyện nhớ/hiểu, không trực tiếp chứng minh lịch sáu tuần này tạo năng lực nghề PM. Lịch, thời lượng, ngưỡng 6/8 và portfolio là thiết kế thực hành cho bạn, cần điều chỉnh theo kết quả.

- Dunlosky et al., Improving Students’ Learning With Effective Learning Techniques (2013): https://www.psychologicalscience.org/publications/journals/pspi/learning-techniques.html
- Karpicke & Blunt, Retrieval practice produces more learning than elaborative studying with concept mapping (2011): https://pubmed.ncbi.nlm.nih.gov/21252317/

Nguồn chương trình: Tap_I_Revised.pdf, Tap_II_Revised.pdf, Instructor_Guide_I_II.pdf, practice/README.md và AI_PM_Job_Readiness_Rubric.md của gói đã bàn giao. Lời giải nằm trong Instructor; các bài D và mini project cần được thử trước khi xem.

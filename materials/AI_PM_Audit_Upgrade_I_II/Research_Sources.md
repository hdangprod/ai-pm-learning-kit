# Nguồn nghiên cứu chuẩn nghề AI PM

Truy cập ngày 17/10/2026. Các URL sau đã mở và đọc nội dung liên quan, không chỉ lấy tên từ kết quả tìm kiếm. Mô tả công việc là mẫu trách nhiệm nghề tại các tổ chức cụ thể, không phải chuẩn chung hay xác nhận vị trí sẽ còn mở. Những chuẩn mức độ và bài kiểm tra trong framework là đề xuất của người biên soạn.

| ID | Nguồn chính thức và URL | Loại và nội dung dùng | Giới hạn |
| --- | --- | --- | --- |
| J1 | Engine, Senior Product Manager Applied AI. https://job-boards.greenhouse.io/engine/jobs/7992538003 | Applied AI nội bộ: khảo sát workflow, chốt baseline, chọn workload, rollout, giao owner và dừng khi không tạo tác động. | Yêu cầu 4+ năm và từng đưa AI/automation vào production. Không phải JD junior. |
| J2 | OpenAI, Product Manager API Agents. https://openai.com/careers/product-manager-api-agents-san-francisco/ | Platform/API: hiểu builder, roadmap theo outcome, phối hợp engineering/research để giao developer products. | 5+ năm PM hoặc kinh nghiệm liên quan; vai trò kỹ thuật chuyên biệt. |
| J3 | OpenAI, Product Manager API Infrastructure. https://openai.com/careers/product-manager-api-infrastructure-san-francisco/ | Platform: data controls, privacy/access, metering, ngân sách và quan sát chi phí. | Không suy PM phải tự cài SSO hoặc làm infrastructure engineer. |
| J4 | OpenAI, Product Manager Core Models. https://openai.com/careers/product-manager-core-models-san-francisco/ | Core/research: nối mục tiêu người dùng với yêu cầu mô hình; kết hợp offline eval và online signals. | Đòi chiều sâu kỹ thuật; training/inference research là nhánh nâng cao, không điều kiện vào học. |
| J5 | Anthropic, Product Manager Enterprise Privacy. https://job-boards.greenhouse.io/anthropic/jobs/5434369008 | Vai trò chuyên biệt: quyền, retention, access logs; phối hợp trade-off và lời hứa dữ liệu với engineers/business. | Preferred 8+ năm; không chuyển yêu cầu chứng nhận doanh nghiệp thành checklist cá nhân PM. |
| J6 | OpenAI, Product Manager Technology Vertical. https://openai.com/careers/product-manager-technology-vertical-san-francisco/ | Applied enterprise: workflow của knowledge workers, phân biệt người dùng/người mua, integrations/permissions và roadmap. | Không có ngưỡng junior công bố trong phần đã đọc. |
| T1 | OpenAI, Evaluation best practices. https://developers.openai.com/api/docs/guides/evaluation-best-practices | Objective → dataset → metric → so sánh → continuous eval; task-specific cases và hiệu chỉnh bằng human judgment. | Số ngưỡng minh họa của tài liệu không phải ngưỡng launch English tutor. Không mặc định log mọi dữ liệu nhạy cảm. |
| T2 | Anthropic, Building effective agents, 19/12/2024. https://www.anthropic.com/engineering/building-effective-agents | Phân biệt workflow theo đường đi định trước và agent tự chọn hành động; cân nhắc độ phức tạp. | Trang tự ghi tooling đã đổi; chỉ dùng nguyên tắc kiến trúc, không dùng làm hướng dẫn SDK 2026. |
| T3 | NIST, AI Risk Management Framework. https://www.nist.gov/itl/ai-risk-management-framework | AI RMF 1.0 năm 2023; GenAI Profile năm 2024; quản trị trustworthiness qua vòng đời. | Khung tự nguyện; trang báo đang sửa RMF 1.0. Không tuyên bố là luật/chứng nhận. |
| T4 | Google SRE book, Service Level Objectives. https://sre.google/sre-book/service-level-objectives/ | Định nghĩa chỉ số/mục tiêu dịch vụ; latency cần phân phối và tail chứ không chỉ mean. | Nguyên tắc hệ thống; ngưỡng cụ thể phải do use case xác định. |
| T5 | Microsoft Research, Patterns of Trustworthy Experimentation Pre-Experiment Stage, 31/07/2020. https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/ | Chốt hypothesis/metric, power, randomization unit, logging và rollout trước thử nghiệm. | Không sao chép mọi kỹ thuật ở quy mô Microsoft; randomization không bảo đảm hai mẫu hữu hạn giống hệt. |
| T6 | NIST, AI RMF Playbook. https://airc.nist.gov/airmf-resources/playbook/ | Govern, Map, Measure, Manage; chọn hành động theo bối cảnh. | Playbook tự nói không phải checklist phải làm toàn bộ; đang chờ cập nhật theo RMF. |

## Nguồn đã thử nhưng không dùng làm bằng chứng nội dung

Anthropic Platform PM job 4936029008 chuyển về danh sách việc làm với error=true; không dùng snippet cũ để gọi là JD hiện hành. URL OpenAI ChatGPT/Sites đã thử chuyển về trang careers chung; không dùng như một vị trí đã đọc. URL Microsoft “a-b-testing-and-causal-inference” không trả nội dung; đã thay bằng bài T5 mở được. Không tính listing hay trang lỗi vào sáu JD.

## Nguồn sách và tài liệu gốc

Giữ nguyên mã B1/B2, S1–S8 và P1–P10 của sách trong thư mục project. B1 là PDF The Mom Test đã cung cấp; B2 là Cracking the PM Interview, CareerCup 2014. Chỉ dùng B2 cho nguyên tắc và bối cảnh lịch sử, không dùng nó xác định kỳ vọng AI PM 2026.

Các công thức mới, datasets mô phỏng và rubric trong gói này do người biên soạn thiết kế. Chúng không phải benchmark, dữ liệu tuyển dụng hay kết quả nghiên cứu người dùng của những tổ chức trên.

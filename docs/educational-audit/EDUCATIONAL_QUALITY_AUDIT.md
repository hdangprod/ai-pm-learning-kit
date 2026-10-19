# Independent educational quality audit — AI PM Learning Lab

Ngày audit: 19/10/2026. Phiên bản: EQ-AUDIT-1.0. Phạm vi: **static review của gói `docs.zip`**, không phải source-code audit hoặc learner study. Sáu góc nhìn PM, analytics, data science, learning design, assessment và UX được áp dụng trong một bản review; không có sáu reviewer độc lập hay inter-rater agreement đã đo.

## 1. Kết luận

Ứng dụng có thiết kế phù hợp để **luyện phân biệt mẫu số, cửa sổ quan sát, provenance và giới hạn suy luận trên case có hướng dẫn**. Bằng chứng được cung cấp chưa cho thấy ứng dụng phát triển được transferable Product Management judgment. Phần assessment đang hỗ trợ nhận diện phát biểu đúng và hoàn thành fixture quen thuộc mạnh hơn khả năng tự xây lập luận trên bài mới.

Không phát hiện sai số học trọng yếu trong 27 phép kiểm độc lập từ bảng/narrative được cung cấp. Đây không phải xác nhận mọi nhánh code. Hai hạn chế ảnh hưởng lớn nhất: đáp án đúng luôn đứng đầu trong 20 nhóm reasoning quan sát được ở M1–M5; 10/10 M6 không đánh giá nội dung memo. Các disclaimer trong UI là đúng và cần giữ, nhưng không làm assessment tự đo được reasoning sâu hơn.

Quyết định sử dụng: dùng làm **supplementary guided practice** sau bài tự làm trong sách. Không dùng progress 6/6 hoặc M6 10/10 để xác nhận mastery, educational effectiveness hoặc professional AI PM readiness. Tiếp tục một vòng remediation hẹp về assessment rồi pilot unseen/delayed, chưa cần mở thêm module.

## 2. Nguồn đã có và thiếu

Archive có 129 file hữu ích: 16 Markdown (11 tài liệu cấp docs và 5 checkpoint), 70 PNG, 42 log, một JSON manifest. Đã đọc 16 Markdown, manifest, log final unit/E2E và các phần evidence liên quan; kiểm trực quan **20/70 ảnh** được liệt kê ở mục 9. Không coi log rỗng TypeScript là chứng minh độc lập exit code. Không sửa application hoặc file đầu vào.

**Thiếu trong gói:** bốn root specs, PROGRESS.md, `src/`, `tests/`, `scripts/`, `package.json`/lockfile, built app, raw CSV/JSON fixtures, Volume I/II, Instructor Guide gốc, competency framework gốc, kế hoạch 42 ngày bản gốc. Các file này được tài liệu dẫn tới, nhưng nội dung không được gửi kèm. Không có URL ứng dụng. Workspace có dữ liệu nghiên cứu cũ không phải repository của lab; không dùng thay thế.

Vì vậy chưa inspect actual code, chưa execute app, chưa reproduce exploit, chưa rerun 215 Vitest/46 Playwright hoặc Python oracles, chưa kiểm download hashes bằng bytes. Bản mapping 42 ngày được đọc như tài liệu developer cung cấp; fidelity với originals chưa được xác nhận. Đây là giới hạn ảnh hưởng trực tiếp độ chắc chắn của audit, không được diễn giải là lỗi implementation đã tái hiện.

### Evidence tiers

| Nhãn | Ý nghĩa | Ví dụ |
|---|---|---|
| OBS | Quan sát trực tiếp artifact được gửi | Vị trí đáp án trong screenshot; văn bản memo presence-only |
| CALC | Tự tính lại từ bảng/narrative | 52/74; strict reversal; role budget |
| DEV | Kết quả developer ghi trong log/report | 215 tests và 46 E2E pass |
| INF | Suy luận/rủi ro từ thiết kế | Learner có thể điền placeholder để mở guidance |
| NE | Chưa kiểm/không có evidence | Runtime bypass, screen-reader behavior, delayed learning |

OBS xác nhận nội dung artifact, không xác thực độc lập cách artifact được tạo hoặc runtime hiện tại. Snapshot checkpoint cũ ghi module chưa làm là lịch sử; final completion report là status mới hơn. Không tính đó là defect chưa sửa.

## 3. Conceptual accuracy và số học

| Module | Kiểm độc lập | Kết luận / giới hạn |
|---|---|---|
| M1 | 52/74=70,2703%; coverage W2=47%; bounds toàn eligible W1 [52%,78%], W2 [30%,83%] | Đúng trên counts được in. Assessed pass khác eligible success; missing không phải fail. |
| M2 | 4/6=66,6667%; 4/8=50% | Đúng stage arithmetic. Raw event eligibility/order/dedup chưa được chạy lại. Strict signup<practice là định nghĩa fixture, không phải chuẩn duy nhất của mọi funnel. |
| M3 | 2/4=50%; 1/4=25%; pooled 3/8=37,5%; unequal example 2/10=20% | Half-open D7 và maturity giải thích đúng. Zero chỉ có nghĩa no recorded activity khi capture đầy đủ. |
| M4 | A=74%, B=36%; trong cả hai strata B cao hơn 10pp; pooled −38pp, relative −51,3514%; common mix 50%/60% | Strict reversal được tách khỏi ví dụ weekly có subgroup rates bằng nhau. Reweighting không xác định causal effect. |
| M5 | Sessions +43,75%; coverage −27pp; novice W2 15/60=25%, 45 unknown | Đúng; hai tuần là nhóm khác nhau, nonresponse khác right-censoring. Stable subgroup rate không chứng minh no effect. |
| M6 | Caps 12 engineering/8 research/4 coaching; listed A=8+4=12h nhưng vượt engineering cap mới 2h; reduced A=2+2 | Feasibility theo từng role, không thay thế bằng tổng giờ; coverage variant 4/8=50%, 4 unknown. |

`INDEPENDENT_CALCULATION_CHECKS.json` ghi 27 checks và phạm vi từng check. Input là bảng tài liệu, không phải original dataset. Không tạo data mới để làm như đã xác minh byte identity. Manifest chỉ cho thấy cặp source/download được khai cùng hash; actual files vắng mặt.

Không thấy nội dung được inspect trình bày descriptive data thành treatment effect. Map M5 có dashed arrows và nhãn hypothetical; screenshot M4 ghi Illustration, not experiment. Cần kiểm thêm việc người học tự giải thích được điều này, thay vì lặp disclaimer.

## 4. Assessment validity

**AQ01 — confirmed artifact pattern, P1.** M1/M2 có 2 nhóm reasoning mỗi module; M3 có 4; M4/M5 có 6: tổng 20. Trong năm ảnh desktop-feedback, đáp án được feedback xác nhận đúng đều ở hàng đầu. Đây là positional cue quan sát được, không phải suy đoán về code shuffle. Chưa chạy chính sách “luôn chọn đầu” trên app. Numeric vẫn cần đúng; nhiều số đã hiện trong explorer, nên positional cue kết hợp fixed answers tạo đường completion ít reasoning.

**AQ02 — confirmed design limitation, P1.** `MODULE_6_SCENARIO.md:28–38` quy định mọi dimension phải 2/2, text chỉ nonblank và date hợp lệ. `MODULE_6_INSTRUCTOR.md:21` nói selected wording không xác nhận memo. Vì vậy 10/10 là correctness của selected statements, không phải mức chất lượng memo liên tục. Không nên đọc chênh 8→10 như tăng 20% năng lực PM. UI đã nói rõ structured points; không cáo buộc app đang quảng cáo mastery.

Các critical-error conditions có ý nghĩa nội dung: causal overclaim, simulation→market evidence, secondary research→unique unmet need, rights, missing-as-failure/success, proposed-as-executed. Tất cả chỉ bảo vệ tầng selected statements/context checks theo contract; một memo critical sai vẫn có thể không bị máy phát hiện. Toàn bộ condition family và test cần chạy được ghi trong `ASSESSMENT_RED_TEAM_REPORT.md`.

Reveal sau attempt sai là lựa chọn hợp lý cho guided learning. Hạn chế phát sinh khi assisted retry trở thành evidence “đã hiểu”. Giữ first response, assistance và independent assessment riêng; không cần khóa lời giải bằng server hoặc cố bảo vệ bí mật ở app static.

Distractors thường quá cực đoan: “caused learning”, “invest immediately”, “all missing failed”; đáp án đúng dài và có nhiều caveat. Chỉ đảo thứ tự chưa sửa được semantic cue. Cần distractor sai một assumption cụ thể và explanation trước khi nhìn đáp án.

## 5. Learning transfer theo module

| Module | Transfer đang có | Đánh giá | Unseen bổ sung |
|---|---|---|---|
| M1 | Tuần 2 coverage trong weekly fixture | Có đổi metric, vẫn near transfer | Account/ticket grain; missingness bounds giữa nhóm |
| M2 | 4/8 thay 4/6 | Tái dùng đường đi đã biết | Event ties/boundaries; account funnel với contradictory event |
| M3 | Cohort Oct8 và pooling choice | Chưa tự tính unequal-size pooling trên data mới | Non-midnight windows; telemetry outage |
| M4 | B experienced 9/10 và common mix | Đọc subgroup, chưa xác nhận tự phát hiện reversal | Non-reversal; post-treatment segment |
| M5 | 15/60 và unknown follow-up | Selection reasoning tốt nhưng cùng weekly case | Randomized assignment positive-control; attrition bounds |
| M6 | Incumbent succeeds, cùng English-work job | Có thay evidence và investment implication; còn scaffold mạnh | Clinic resources/rights; logistics guardrail/comparator |

Không có unseen learner work, immediate/delayed independent scores hoặc transcript think-aloud. Coverage transfer được chấm theo cơ hội luyện hiện có, không phải outcome đã đo. Bộ đính kèm tạo **18 exercise mới, ba form A/B/C cho mỗi module**, với expected reasoning và rubric tách khỏi student file.

## 6. Learning experience và giá trị tương tác

Theo thiết kế, M2 event audit, M3 timeline và M4 weight sliders có giá trị cụ thể: cho nhìn event boundary, cơ hội quan sát và thay composition trong khi giữ rate cố định. Đây là giả thuyết về affordance được hỗ trợ bằng ảnh, chưa chứng minh học tốt hơn sách. M1 numeric/radio retry và M6 form/checklist dài có thể chỉ thêm thao tác so với worksheet + reviewer nếu không tạo reasoning mới. Không có comparative trial, nên không kết luận format hiện tại tốt hơn textbook.

Feedback trong ảnh khá actionable ở tầng misconception: nêu mẫu số, cửa sổ và scope; không chỉ báo sai. Nhưng feedback thường chứa cả kết luận và cách giải, dễ chuyển thành copy/retry. Cần yêu cầu learner nói “tôi đã đổi giả định nào” và giải bài không đáp án sau đó. Không nên bắt mọi trường memo dài ở lần đầu; progressive disclosure theo quyết định cụ thể có thể giảm tải, cần pilot kiểm.

Tiến trình concept tương đối coherent: unit→sequence→time window→composition→causal identification→bounded action. Tuy nhiên kế hoạch gốc không phải một module/tuần: M2/M3/strict M4 được mapping ghi optional sau foundation. Điều hướng sáu module ngang hàng có thể làm người mới chọn extension quá sớm; đây là risk, không phải bằng chứng đã overload.

## 7. Evidence provenance và alignment

M2 activity là authored synthetic, không phải research records. M3 có fork một event để giữ locked answer; không được suy ra cùng cohort của cùng dữ liệu thật đã đổi retention. Original M2 narrative cho 3/4=75% D7; fork M3 cho 2/4=50%. Fork được công bố, không xem là gian lận dữ liệu. Nên biến khác biệt này thành câu hỏi provenance trước khi compare.

M4 strict reversal tách original weekly example. M5 study là proposal chưa chạy. M6 stipulated incumbent success là simulation, không phải P1/P2 results. Evidence-board form/type không phải thứ hạng confidence tự động: self-report có thể rất cụ thể nhưng chưa quan sát; observed audit structure không phải observed learner behavior.

`STUDY_PLAN_MAPPING.md` có 42 hàng, original rubrics và lịch riêng; không kiểm độc lập fidelity vì originals vắng mặt. Giữ bài sách, unit economics, real-corpus labs và day41 unseen case. Thiếu AI evaluation, model economics, AI safety, delivery hoặc RAG không bị trừ như defect của scope này. Đây là **future curriculum dependencies**, không phải lý do rewrite sáu module. Chỉ framework C02/C05/C06/C16 được source audit dẫn gián tiếp; không xác nhận coverage toàn bộ framework gốc.

## 8. UX/accessibility

Quan sát ảnh: heading, numeric units, feedback, provenance và null labels hiện rõ. M3 dùng text và hatching cho future interval; M4 ghi reweighting; M5 map có legend. Mobile header/nav chiếm khoảng một phần ba màn hình 390×664 được mô phỏng. M6 matrix cần cuộn ngang giữa các cột nhiều chữ; điều này có thể tăng working-memory burden khi so lựa chọn. Không gọi clipping trong scroll region là mất dữ liệu nếu chưa vận hành region.

Chưa xác minh DOM semantics, accessible names/grouping, live announcements, actual tab order, focus persistence, target sizes, measured contrast, 200/400% zoom/reflow, screen reader hay Safari. Developer keyboard logs hỗ trợ phạm vi đã test, không tương đương WCAG certification. Storage/reset/export được developer mô tả có isolation và immutable snapshots; chưa có runtime kiểm hoặc incident data loss độc lập. Export không có import là limitation phục hồi, không phải corrupt records đã quan sát.

## 9. Scoring và confidence

Thang 0–5: 0 sai/nguy hại; 1 cơ hội rất hẹp; 2 coverage có scaffold nhưng thiếu kiểm độc lập; 3 thiết kế dùng được với khoảng trống đáng kể; 4 thiết kế nội dung mạnh trong scope; 5 rất đầy đủ qua nhiều case và verification thích hợp. Đây là **expert design appraisal tạm thời**, không phải psychometric scale hay điểm người học. Unknown runtime được ghi là unknown, không gán 0; điểm không được tăng vì test count. Dùng bước 0,5 để tránh giả chính xác.

Trọng số A20%, B20%, C15%, D15%, E10%, F10%, G10%. Module có trọng số bằng nhau vì chưa có exposure/time weights. Overall = mean(module weighted scores); không phải cả lab đã “đạt 60.6% hiệu quả”.

| Module | A | B | C | D | E | F | G | Weighted /100 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| M1 Data Literacy | 4 | 2 | 1.5 | 3.5 | 4 | 3 | 4 | 61.0 |
| M2 Funnel Analysis | 4 | 2 | 1.5 | 3.5 | 4 | 3 | 3.5 | 60.0 |
| M3 Cohort & Retention | 4 | 2 | 1.5 | 3.5 | 4 | 3 | 3.5 | 60.0 |
| M4 Segmentation & Simpson's Paradox | 4 | 2 | 1.5 | 3.5 | 4.5 | 3 | 3.5 | 61.0 |
| M5 Correlation & Causation | 4 | 2 | 2 | 3 | 4.5 | 3 | 4 | 62.0 |
| M6 Evidence-Based Product Decisions | 4 | 1.5 | 2.5 | 3 | 4 | 2.5 | 4 | 59.5 |
| Overall | 4,0 | 1,92 | 1,75 | 3,33 | 4,17 | 2,92 | 3,75 | **60.6** |

`MODULE_SCORECARD.xlsx` chứa 42 score-level rationale, evidence locator, limitation và điều kiện thay đổi điểm. Điểm overall không phải release gate; P1 cần được xử lý riêng dù A/E cao. `COMPETENCY_EVIDENCE_MATRIX.xlsx` phân biệt narrow strong assessment, partial assessment và taught-only; không hàng nào được xem là demonstrated mastery.

Confidence tách riêng:

- **Software-verification claim:** có log hỗ trợ final 215/46 và report, nhưng independent reproducibility thấp/chưa xác minh vì thiếu repo/build/tests/datasets. Không tái gắn nhãn PASS độc lập.
- **Nội dung/số học trong gói:** vừa; 27 checks đúng, provenance chủ yếu nhất quán, không đọc originals.
- **Assessment weakness trong screenshot/contract:** vừa đến cao cho artifact pattern/presence-only, thấp cho exploit runtime chưa chạy.
- **Educational effectiveness/delayed transfer:** NE; không có participant outcomes.

Ảnh đã inspect (đều dưới `docs/verification/`): module-one/two/three/four/five-desktop-feedback; module-six-desktop-memo, desktop-feedback, desktop-transfer-complete, desktop-initial; module-one/two/three/four/five/six-mobile-viewport; module-six-mobile-matrix, mobile-rights; module-five-desktop-map; module-four-desktop-counterfactual; module-three-desktop-workbench. Tổng 20. Không tự nhận inspect toàn bộ 70 hoặc 26 ảnh developer nêu.

## 10. Hành động tiếp theo

Không có P0 được xác nhận trong phạm vi có thể inspect; không đồng nghĩa không tồn tại P0 trong source. Ưu tiên AQ01–AQ04 trước: option cues, memo review riêng, unseen assessment, assistance-separated attempts. AQ05–AQ11 là provenance bridge, cognition, accessibility, backup/auditability, package completeness và polish. Mọi thay đổi chỉ là đề xuất ở phase audit; không patch app, không đổi dữ liệu, không reset tiến độ.

Tiêu chí trước khi gọi là phát triển judgment: learner tự chọn unit/window, nêu evidence→claim→action, xử lý counterevidence và trả lời unseen case sau bảy ngày qua reviewer blind. `LEARNER_EVALUATION_PROTOCOL.md` cho pilot 10 người với baseline, comparator và cách báo limits. Cho đến lúc đó, claim phù hợp là **guided analytics and decision practice**, không phải transferable judgment đã được chứng minh.

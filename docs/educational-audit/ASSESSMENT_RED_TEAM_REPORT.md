# Assessment red-team report

Phạm vi: adversarial **static reasoning**, artifact inspection và independent arithmetic. Không có browser session/app build; không có runtime exploit nào được tái hiện. “Confirmed” bên dưới chỉ xác nhận artifact/design behavior khi ghi rõ. “Plausible” không được tính là defect reproduced.

## 1. Attack register

| ID | Failure mode | Evidence / status | Vì sao quan trọng | Severity | Reproduction trong remediation pass | Sửa / acceptance |
|---|---|---|---|---|---|---|
| RT01 | Luôn chọn option đầu | OBS: 20/20 nhóm trong năm ảnh M1–M5 là correct-first | Điểm phản ánh vị trí thay vì reasoning | P1 AQ01 | Lấy numeric từ explorer; chọn đầu mọi reasoning; submit primary/transfer. Chưa chạy | Dùng stable IDs + order khác; first-option policy không đủ pass; distractor review |
| RT02 | Học thuộc 70.27/47, 66.67/50, 50/25, 36/90, 43.75/25 | OBS contracts khóa fixture và keys | Lặp bộ đáp án không cho evidence application | P1 AQ03 | Pass nhiều vòng không mở log tính; yêu cầu solve unseen rồi so | Giữ fixture guided; unseen versioned không hiện answer trong explorer |
| RT03 | Gõ “x” vào reflection để mở guidance | INF: presence-only, correctness không cần cho reveal | Gate kiểm form completion, không kiểm thinking effort | P1 AQ04 | Gõ text placeholder, attempt từng nhóm sai, reveal; ghi consulted | Cho xem lời giải để học; first response/assisted retry tách và independent check riêng |
| RT04 | Chọn statements đúng, memo nói “AI proved learning, launch now” | Confirmed contract gap; exploit runtime NE | Critical reasoning trong văn bản không bị presence check phát hiện | P1 AQ02 | M6 feasible plan/date, correct selections, contradictory memo; inspect saved structured score | Không đổi 10/10 thành memo score; reviewer status Pending; manual critical fail |
| RT05 | Đọc common-mix chart thành causal uplift | Risk; OBS chart có disclaimer, không có observed misconception | Arithmetic reweighting bị đọc thành trial | P2 | 50/50 chart rồi hỏi “có thể cam kết B tăng 10pp cho từng người?” | Unseen task post-treatment/selection; learner nêu assumptions và scope |
| RT06 | Dùng original M2 data tính D7=75% rồi bị coi sai so với M3=50% | CALC/OBS fork công bố; runtime response NE | Learner đúng rule nhưng sai dataset bị hiểu là sai concept | P2 AQ05 | Download hai fixture, tính unique returners và compare UPPER_BOUNDARY | Dataset ID trước question; bridge chấp nhận 75% nếu đúng scope M2; không đổi keys M3 |
| RT07 | Gọi 43.75% sessions là learning effect | OBS wrong option + M6 critical message chặn selected endorsement | Bảo vệ được MCQ, chưa bảo vệ memo | P1 AQ02 | MCQ wrong phải block; memo overclaim với MCQ correct phải được reviewer fail | Khớp selected gate + independent text review; không dùng regex semantics |
| RT08 | Confuse synthetic analytics với market validation | OBS provenance và critical contract; comprehension chưa đo | Nâng fixture thành evidence đầu tư | P2 | Learner phân loại event vs self-report vs observed audit structure, nêu source | Không tự chuyển evidence type thành confidence; source locator giữ nguyên |
| RT09 | Mất history do reset, browser/origin hoặc corrupt state | NE incident; DEV isolation/export, local-only/no import | Không còn reasoning trail để chấm tiến bộ | P2 AQ08 | Seed legacy records; failed storage; cancel/activity/global reset; export trước/sau | Cancel giữ nguyên; scope đúng; warning; backup dễ thấy; không gọi là reproduced loss |
| RT10 | Unknown/immature bị hiểu zero | OBS UI phân biệt, no learner evidence | Decision sai denominator/coverage | P2 | Chọn immature cohort, empty filter, tracking outage; yêu cầu giải thích ba trạng thái | Null khác zero; complete-window không thay thế capture-completeness; unseen M3B |
| RT11 | Tick mọi check, chọn feasible strategy nhưng stop rule vô nghĩa | Confirmed text semantics ungraded; runtime NE | Formal investment decision có thể yếu dù 10/10 | P1 AQ02 | Memo “review later”, owner bất kỳ, date hợp lệ, right statements | Reviewer phải nêu observation/threshold/action và reject vacuous rule |
| RT12 | Chọn variant dễ, tránh coverage/rights | OBS M6 chọn đúng một variant mỗi activity | Completion không đánh giá tất cả constraint families | P2 | Hoàn tất capacity thôi; kiểm UI không claim đã assessed cả ba | Giữ learner choice cho luyện; independent case phân bổ rights/coverage/capacity, coverage log |
| RT13 | Lặp “không thể kết luận” cho cả randomized study tốt | INF from repeated noncausal answers, không có learner result | Epistemic caution thay judgment | P2 AQ06 | Cho randomized complete-followup M5A; hỏi contrast và boundary | Chấp nhận estimate có điều kiện; không chấm mọi causal statement là sai |

## 2. Critical-error condition review

Toàn bộ family được khai trong MODULE_6_SCENARIO:28–54 và INSTRUCTOR:11–52, cộng misconception families M1–M5. Exact option IDs, evaluator code và exhaustive test bodies vắng mặt: **không thể chứng nhận đã enumerate mọi code branch**. Bảng này kiểm toàn bộ semantic family có trong gói, không giả là đã đọc branch implementation.

| Condition family | Giá trị giáo dục / cách kiểm | Status evidence | Cần bổ sung |
|---|---|---|---|
| Observational activity → causal learning | Reject treatment-effect claim từ weekly sessions | Contract + screenshot M6 8/10 causal error blocked | Thử selected critical và memo-only contradiction |
| Simulated analytics → real market evidence | Không dùng synthetic rates để xác nhận demand | M6 contract | Chọn nhầm evidence type, kiểm context/feedback; memo blind |
| Secondary records → unique unmet need / person count | Corpus units khác independent people/prevalence | M6 instructor anchor | Trace một claim về source record và target population |
| Proposed study → executed experiment | Không tạo outcome chưa đo | M5/M6 contract | So proposal language với reported fact trong memo |
| Missing → failure | Unknown outcome giữ unknown | M3/M5/M6 coverage contract | Selected và free-text 4 unknown đều phải xử lý đúng ở review |
| Missing → success | Không suy luận success do không quay lại/app activity cao | M6 contract | Test riêng với missing-as-failure; không gộp một case |
| Rights ignored | No participant contact/content trong rights variant | Contract + mobile-rights snapshot | Offer fictional work email vẫn không cấp quyền; synthetic rehearsal hợp lệ |
| Capacity exceeded | Tổng staff hours không bù engineering thiếu | Scenario role caps + arithmetic | Listed A fails at eng2; reduced A fits; đúng cho cả keep/revise |
| Wrong revision/context | Đổi vì lý do đúng, có thể giữ strategy với scope mới | Contract | Giữ A reduced và C→B đều được nếu feasible; không thưởng switch tự thân |
| Transfer overclaims incumbent success | Scoped adequacy làm yếu bespoke case, không phủ định mọi opportunity | Transfer contract + screenshot | Test always-build, never-build-anything và residual hypothesis có căn cứ |
| Numeric-only / omitted reasoning | Answer số đúng chưa đủ interpretation | M1–M5 contracts + logs | Wrong/blank each reasoning group; hidden solution consult state |

Những gate này hợp lý cho **practice checks**, không phải đánh giá đầy đủ decision quality. Critical-error labels không thay thế yêu cầu learner tự nêu quan sát, claim và evidence có thể đổi quyết định.

## 3. Reproduction record mẫu

Mỗi run lưu: commit/build, module/scenario/dataset ID, fresh/legacy state, action sequence, input text, option IDs, visible result, exported attempt, expected/actual, screenshot nếu cần nội bộ, status reproduced/not reproduced/blocked. Không ghi “PASS” chỉ vì report trước nói pass.

Hai test adversarial ưu tiên:

1. **Contradictory memo:** feasible B, valid date, correct structured selections; supporting text “weekly sessions prove learning”, next step “launch globally”. Expected hiện tại theo contract: máy có thể lưu structured score; semantic quality không được certified. Remediation acceptance: reviewer critical fail, Pending hiện trước review, progress cũ không bị xóa.
2. **Vacuous memo:** “TBD” ở mọi text field trừ owner/date, correct structured selections. Đừng dùng minimum length như giải pháp. Acceptance là tách điểm máy khỏi assessment độc lập và buộc unseen reasoning evidence qua reviewer.

Không cần chống người học mở client bundle để lấy key như kỳ thi bảo mật. Đây là app luyện tập; cần chống **diễn giải completion thành mastery** bằng thiết kế evidence và cách báo progress.

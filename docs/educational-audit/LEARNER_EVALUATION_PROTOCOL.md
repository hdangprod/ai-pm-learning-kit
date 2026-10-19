# Learner evaluation protocol

Version EQ-PILOT-1.0 — kế hoạch chưa chạy. Mục tiêu: kiểm usability, assessment validity và dấu hiệu transfer của sáu module. Không chứng nhận nghề nghiệp. Các ngưỡng dưới đây là operational choices cần khóa trước khi tuyển, chưa phải learning standards đã validate.

## 1. Câu hỏi và design

Hai câu hỏi chính: người học có tự chọn unit/window và xây evidence → decision trên case mới không; app completion và structured score có tương ứng với independent judgment score không? Kiểm thêm khả năng giữ reasoning sau khoảng bảy ngày và cách learner sửa lỗi sau feedback.

Pilot 10 người: software engineers/technical consultants chuyển PM, chưa làm sáu module và chưa xem task/key pack. Ghi kinh nghiệm analytics, English comfort, spreadsheet familiarity và prior exposure. Cho viết tiếng Việt hoặc English, giữ cùng ngôn ngữ qua các phiên. Không chấm độ trôi chảy tiếng Anh như năng lực PM. Tác giả app hoặc người đã xem keys không là independent participant.

Làm baseline trước allocation. Sau đó randomize 5 người vào app, 5 vào comparison; cân bằng baseline thấp/cao nếu khả thi. Khóa allocation list. Nếu phân nhóm theo availability thì ghi nonrandomized, không gọi là randomization.

Comparison có cùng content và **150 phút học**, dùng lesson excerpts và worksheet/data tasks tương đương, không dùng app feedback/slider. M2/M3/strict M4 là authored extensions, chưa có chương sách hoàn chỉnh; control cần cùng lesson/dictionary đã inspect, không tự gọi là “textbook only”. Với M1/M5/M6, dùng curriculum originals và worksheet phù hợp. Cùng ngân sách facilitator/reviewer support cho hai arm. Chưa có originals hoặc runnable app thì comparative pilot chưa sẵn sàng; có thể thử độ rõ của audit exercises riêng nhưng không gọi đó là đánh giá hiệu quả app.

Không crossover hai format trên cùng fixture vì carryover. N=5/arm chỉ phù hợp feasibility và exploratory estimates. Khác biệt nhỏ không đủ xác nhận superiority hoặc educational effectiveness bền vững.

## 2. Preflight và consent

Facilitator chuẩn bị pinned app revision, source pack, matched control, sealed forms/keys, mã L01–L10 và scoring sheets. Audit này chưa contact hoặc tuyển ai.

Checklist trước mở study:

- Repo/build chạy được; dữ liệu và keys khớp revision; dùng pilot state riêng, không reset user progress hiện có.
- Hai reviewer giải thử forms, sửa ambiguity và kiểm content/time parity trước khi freeze.
- Participant chưa xem assessment pack. Nếu đã xem, cần reserve form mới được khóa trước allocation.
- Khóa primary outcome, missingness rules, exclusions, allocation, analysis và decision gates trong bản protocol có ngày. Thay đổi sau đó phải ghi amendment.
- Lấy consent trước khi thu bài/ghi âm. Chỉ dùng synthetic tasks; không thu work emails hoặc customer data. Cho dừng tham gia.
- Dùng participant ID trong exports. Facilitator giữ identity mapping riêng. Chỉ trích bài ẩn danh khi có đồng ý.

## 3. Lịch từng người

D0 là baseline; D2 kết thúc instruction và immediate post. D9 là bảy ngày sau khi kết thúc học, không phải sau baseline. Ghi actual timestamps và elapsed hours.

| Mốc | Hoạt động | Thời lượng |
|---|---|---:|
| D0 | Consent, screener, instructions; baseline sealed form | 10 + 45 phút |
| D0 | M1–M2 hoặc matched control, 25 phút/module | 50 phút |
| D1 | M3–M4 hoặc matched control | 50 phút |
| D2 | M5–M6 hoặc matched control | 50 phút |
| D2 ngay sau học | Immediate post, không app/notes/AI | 45 phút |
| Sau post | Neutral probes và usability interview; chưa đưa keys | ≤15 phút |
| D9 | Delayed assessment trong 168h ±24h sau post | 45 phút |
| Sau delayed | Feedback và optional repair task | ≤20 phút, không cộng vào delayed score |

Instruction tổng 150 phút; assessment tổng 135 phút; hướng dẫn/interview riêng. Không thay chương trình 42 ngày hoặc thêm calendar entries. Cho nghỉ giữa các block, ghi break duration riêng. Hết giờ thì lưu phần đã làm và trạng thái incomplete; không dùng hint để ép completion.

Trong instruction, facilitator quan sát hai task với think-aloud nhẹ. Không xen think-aloud hoặc coaching vào primary unseen assessment. Oral probe diễn ra sau khi khóa written response; lưu probe riêng.

## 4. Form assignment và bảo vệ unseen

Mỗi form A/B/C có sáu bài, tổng 45 phút, tối đa 50 independent points. Student pack là container cho moderator; **tách từng form trước khi phát**, không gửi toàn bộ file hoặc keys. Với M6, giữ change card riêng và chỉ phát sau khi khóa memo v1.

| Participants | Baseline | Immediate post | Delayed |
|---|---|---|---|
| L01, L04, L07, L10 | A | B | C |
| L02, L05, L08 | B | C | A |
| L03, L06, L09 | C | A | B |

Rotation giảm confounding giữa form cố định và thời điểm; không chứng minh forms tương đương. Cân rotation giữa hai arm tốt nhất trong n=10. Hai reviewer kiểm độ khó trước study, report kết quả theo form. Không dùng task đã được training như unseen.

Nếu learner xem form ngoài lịch hoặc keys, ghi contamination, giữ record và báo analysis riêng; không âm thầm loại để làm đẹp kết quả. Từ post tới delayed, đề nghị không ôn app/assessment keys. Không cấm học và làm việc bình thường; ghi external study, thời lượng và exposure ở D9. Không coi mọi gain là riêng hiệu ứng app.

## 5. Measurement log

Một record cho mỗi participant × timepoint × task, có stable task ID/version:

`participant_id, arm, allocation_stratum, form_id, task_id, task_version, scheduled_timepoint, started_at, ended_at, elapsed_seconds, break_seconds, response_path, initial_memo_path, revision_path, calculation_artifact_path, hints_count, hint_type, solution_seen, external_tools_used, contamination_note, completion_state, rater_1_dimensions, rater_2_dimensions, critical_flags, adjudicated_dimensions, adjudication_reason, missing_reason`.

Instruction log ghi thêm module/dataset ID, first response, retry count, consultation state và app score/completion. Export snapshots trước reset. Active time dựa vào moderator timestamps và break log; time-on-page không tự là time-on-task. Click/prompt counts chỉ là friction measures phụ.

Phân biệt missing reasons: không dự phiên, rút lui, lỗi kỹ thuật, hết giờ, không trả lời, contamination hoặc invalid task. Người không dự delayed có unknown outcome, không chấm 0 năng lực. Blank response trong phiên mà learner thực sự có cơ hội làm có thể nhận 0 theo rubric; ghi lý do và không đánh đồng với no-show.

## 6. Independent scoring và free-text memos

Hai raters không biết arm, timepoint hoặc app score. Shuffle anonymous responses. Nếu bài viết tự lộ timepoint thì ghi blinding breach. Chấm độc lập trước khi thảo luận; lưu cả hai scores và adjudication. Calibrate trên bốn bài do facilitator viết và gắn nhãn authored, không tạo participant results. Chưa có data thì không báo kappa/ICC.

M1–M5 dùng 4 dimensions ×0–2, max8/task. M6 dùng 5 dimensions ×0–2, max10. Tổng form max50. Chi tiết trong instructor keys. Provisional task criterion: M1–M5 ≥6/8, M6 ≥8/10, không dimension 0 hoặc critical error. Đây là ngưỡng vận hành; báo raw dimensions trước trạng thái đạt.

Memo được chấm theo nội dung:

- Evidence nào dẫn tới claim/action, với unit và provenance đúng?
- Có so alternative thực sự khả thi và configured incumbent cho cùng job không?
- Role caps, rights và guardrails được đáp ứng không?
- Outcome/comparator và uncertainty nào là trọng tâm?
- Changed fact làm đổi hoặc củng cố quyết định ra sao? Stop/revise rule có owner, thời điểm và điều kiện kiểm được không?

Không chấm keywords, độ dài hay văn phong như reasoning. Caveat đúng ở chỗ khác không xóa critical overclaim. Chấp nhận lựa chọn khác exemplar nếu lập luận đúng. Grammar nhỏ không bị trừ. Nếu cần clarification, hỏi neutral sau khi khóa bài, giữ original và repaired score riêng. Primary score dùng original written response.

Oral probe tối đa 60 giây/task: “Nếu thông tin X này sai, phần nào trong khuyến nghị thay đổi?” X lấy từ claim learner đã viết; không gợi đáp án. Probe dùng cho error analysis, không nâng primary score sau coaching.

## 7. Error analysis

| Code | Lỗi |
|---|---|
| UNIT | Lẫn record/event/ticket/account/person |
| DEN | Denominator sai estimand |
| TIME | Sai boundary, maturity hoặc rolling horizon |
| MISS | Unknown thành zero; complete-case generalization |
| MIX | Sai pooled/subgroup/reweighting; post-treatment conditioning |
| CAUSE | Descriptive thành effect; nonsignificance thành no effect; hoặc phủ nhận RCT estimate vô căn cứ |
| PROV | Lẫn synthetic, reported, observed và proposed |
| DEC | Không nối uncertainty với action; thiếu comparator |
| REV | Bỏ changed fact hoặc rule không kiểm được |
| OPER | Vi phạm role cap, rights hoặc guardrail |

Theo dõi code qua first attempt, assisted retry, immediate unseen và delayed. Nhớ đáp án fixture nhưng sai DEN/TIME trên unseen là transfer gap, không tự là application bug.

## 8. Outcomes và analysis khóa trước

Primary: independent delayed profile theo module/dimension và critical-error count, kèm total/50. Secondary: baseline-adjusted exploratory arm difference, immediate post, delayed versus immediate, task-criterion rate, structured-score/memo-score discordance, active time, hints và retries.

Với n=10, báo từng người, median/range và paired change. Nếu analyst tính arm contrast/uncertainty, ghi method và assumptions; không dùng p-value đơn lẻ làm gate. Không đổi averaged app score thành mastery. Báo form, experience, English comfort, external exposure và protocol deviations.

Missingness flow theo arm: invited → eligible → consented → allocated → started → post → delayed. Luôn ghi numerator/denominator. Observed-subset score không là success rate của tất cả participants. Có thể báo bounds task-criterion rate nếu missing participants đều đạt/không đạt, nhưng không tự điền raw ability score. Nếu >2/10 thiếu delayed hoặc missingness lệch đáng kể giữa arms, ưu tiên sửa follow-up feasibility và không kết luận superiority.

## 9. Decision gates

| Gate | Operational rule khóa trước | Hành động |
|---|---|---|
| Safety/validity | Có material teaching error hoặc record corruption được xác nhận | Dừng affected activity/claim; xử lý P0, giữ records |
| False confidence | Learner đạt app completion/10 structured nhưng có critical error trên unseen memo hoặc metric | Giữ practice label; ưu tiên AQ02/AQ03; báo discordance |
| Usability | ≥3/10 cần hỗ trợ ở cùng essential step hoặc hiểu sai cùng instruction | Sửa wording/flow và targeted retest |
| Feasibility | ≥8/10 có delayed evidence; rubric dùng được; không key leak | Có thể thiết kế study lớn hơn, chưa claim efficacy |
| Transfer concern | ≥3/10 lặp cùng critical misconception ở delayed hoặc chỉ giải được sau hint | Sửa lesson/feedback; dùng reserve unseen form để kiểm lại |
| Comparative claim | N=5/arm, forms chưa equated, control có authored material | Chỉ report exploratory pilot, không quảng cáo better than textbook |

Các ngưỡng này phục vụ quyết định vận hành trong mẫu nhỏ, không phải clinical/statistical standards. Nếu cả hai arm tiến bộ, common instruction, practice hoặc test familiarity có thể góp phần. Nếu app cao hơn, vẫn cần xem allocation, precision, form difficulty, content parity và exposure. Randomization đúng hỗ trợ design, không tự xác nhận measurement validity hoặc tác động phổ quát.

Delayed bảy ngày không đại diện workplace performance, long-term retention hoặc professional PM readiness.

## 10. Báo cáo sau khi chạy

Ghi actual dates/revision, participant flow, deviations, individual profiles, rater disagreement, critical-error trajectory, time/hints, missingness/contamination và usability incidents. Tách mechanical app completion, independent judgment và participant self-report. Chỉ trích bài ẩn danh khi đã đồng ý. Không tạo quote, score hoặc outcome trước khi thu dữ liệu.

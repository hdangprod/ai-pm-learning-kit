# Unseen transfer exercises — student pack

Tất cả tình huống và số liệu dưới đây **do auditor tạo để đánh giá**, không phải quan sát thị trường hoặc learner outcomes. Không mở file answer keys. Calculator hoặc bảng tính trống được phép; không dùng AI, internet, notes/answers hoặc app trong phiên assessment độc lập. Có thể viết tiếng Việt, giữ thuật ngữ English cần thiết. Chấm reasoning, không chấm độ trôi chảy tiếng Anh.

Ba form A/B/C, mỗi form sáu bài. Chỉ moderator phát form được giao; không đọc các form còn lại trước phiên tiếp theo. Nếu đã xem toàn bộ file này, đánh dấu contaminated và không dùng làm independent unseen pilot cho chính bạn; reviewer cần tạo form tương đương khác. Người tự học có thể dùng từng bài để luyện, nhưng không gọi đó là unseen sau khi đã xem.

Mỗi bài M1–M5: 6 phút. M6: 15 phút. Tổng 45 phút/form, không gồm hướng dẫn. Không có lựa chọn để đoán. Viết phép tính, unit/denominator/window, một kết luận được phép, một kết luận không được phép và bước kiểm tiếp có ích. Nếu định nghĩa hoặc record không đủ, nói chính xác thiếu gì; không điền zero cho unknown. Không phải câu nào cũng có một khuyến nghị duy nhất.

## Form A

### M1A — Ticket hay account?

SaaS hỗ trợ có log dưới đây. Một dòng là một ticket; đây là toàn bộ tám ticket của bốn account trong một tuần. `Resolved` là trạng thái ticket tại cuối tuần, không phải satisfaction hay customer value. Các ticket là distinct; dấu ? nghĩa trạng thái chưa biết.

| Ticket | Account | Resolved |
|---|---|---|
| t1 | A | Yes |
| t2 | A | Yes |
| t3 | A | No |
| t4 | B | Yes |
| t5 | B | ? |
| t6 | C | No |
| t7 | D | Yes |
| t8 | D | ? |

PM hỏi: “Có bao nhiêu phần trăm **account** có ít nhất một ticket được giải quyết?” Dashboard khác hiện “resolved tickets / tickets có trạng thái đã biết”.

1. Tính hai metric, chỉ rõ unit và denominator.
2. Account C có được gọi là customer thất bại không? Hai unknown ticket có làm câu trả lời account metric không xác định không?
3. Đề xuất một metric/evidence bổ sung nếu quyết định cần biết giá trị khách hàng nhận được.

### M2A — Marketplace funnel có thứ tự

Năm người u1–u5 signup ở t=0. Tất cả có đủ cửa sổ quan sát. Funnel contract: `0 < search < purchase < 7 ngày`; mỗi người tính một lần. Log thời gian dưới đây đầy đủ. Hai row cùng event ID p1 là delivery duplicate giống hệt nhau. Các event khác có ID khác nhau; tie không thỏa strict order.

| User | Events theo ngày sau signup |
|---|---|
| u1 | search d1; purchase p1 d2; duplicate purchase p1 d2 |
| u2 | purchase d1; search d2 |
| u3 | search d0; purchase d1 |
| u4 | search d6; purchase d7 |
| u5 | search d1; purchase d1; search d3; purchase d4 |

1. Lập signup → valid search → ordered purchase, ghi ID của người vào từng stage.
2. Tính step conversion và overall conversion.
3. Giải thích riêng u3/u4/u5. Có được gọi overall conversion là marketplace tạo giá trị nhân quả không?

### M3A — Exact day khác rolling horizon

Mọi giờ là UTC, capture đầy đủ tới cutoff **10/01/2027 00:00 exclusive**. Cohort A có ba người signup **01/01/2027 12:00**; cohort B có hai người signup **03/01/2027 12:00**. Contract exact D7 là [signup+7 ngày, signup+8 ngày), tính người distinct. Chỉ báo cohort khi toàn bộ D7 interval của mọi member đã kết thúc.

| Person | Cohort | Hoạt động |
|---|---|---|
| a1 | A | 08/01 12:00; 08/01 13:00 |
| a2 | A | 09/01 12:00 |
| a3 | A | 08/01 11:00 |
| b1 | B | 09/01 10:00 |
| b2 | B | Không ghi nhận |

1. Tính exact D7 cho A và trạng thái B.
2. Một stakeholder muốn “rolling D7–D9”, định nghĩa [signup+7 ngày, signup+10 ngày). Có thể báo tỷ lệ hoàn chỉnh cho A chưa?
3. Nêu điều gì làm b1 khác một trường hợp return D7; có được gộp B như zero vào pooled rate không?

### M4A — Có Simpson reversal không?

Hai product có kết quả assessment, population và metric giống nhau; đây là so sánh mô tả, chưa có assignment hay baseline.

| Product | Segment pre-use | Passed | Assessed |
|---|---|---:|---:|
| A | Novice | 9 | 30 |
| A | Experienced | 56 | 70 |
| B | Novice | 12 | 30 |
| B | Experienced | 63 | 70 |

1. Tính rate từng stratum và pooled. Có strict reversal không? Giải thích bằng weights.
2. Tính illustrative rates nếu target mix chung là 80% novice/20% experienced. Giữ subgroup rates cố định.
3. Kết quả này cho phép khuyến nghị rollout B như causal winner chưa? Đề xuất bước kiểm tiếp.

### M5A — Khi nào có thể ước lượng assignment effect?

Một study giả lập phân ngẫu nhiên 40 người đủ điều kiện vào A/B, 20 mỗi arm; không interference, thực hiện đúng assignment. Baseline mean cùng bài tương đương là 5/10 ở hai arm. Sau bảy ngày, assessment mới không gợi ý, cùng rubric và blind rater; **mọi người đều có outcome**. A mean=7/10, B mean=6/10. A là AI workflow 60 phút/ngày; B là workbook workflow 30 phút/ngày. Chưa cung cấp variances hoặc individual outcomes.

1. Tính contrast trung bình sau học và contrast thay đổi so với baseline.
2. Có thể xem contrast là estimate cho hiệu ứng **assigned workflow bundle** không? Ghi điều kiện và giới hạn.
3. Có thể nói AI component tự nó tốt hơn, statistically significant, hay mọi người đều tiến bộ hơn không? Thiết kế nào giúp tách time budget?

### M6A — Quyết định trong clinic scheduling

Đây là bài tập giả lập, không có patient data. Bạn quyết định bước tìm hiểu tiếp theo cho clinic scheduling assistant. Evidence ledger có sáu episode từ **hai** clinic administrators; không phải sáu independent users. Họ kể scheduling mất thời gian, nhưng chưa có task timing, willingness to pay hoặc usability comparison. Một incumbent calendar hỗ trợ một phần workflow, chưa được cấu hình thử.

Ngân sách tuần này: engineering 8h, research 4h; không chuyển đổi giữa roles. Các lựa chọn: prototype listed 10E/2R; prototype giấy reduced 4E/2R; incumbent rehearsal 1E/3R; targeted task-definition audit 0E/4R. Dữ liệu thật và liên hệ clinic **chưa được phép**; invented prompts/local rehearsal được phép. Giai đoạn này không phải launch.

Viết memo tối đa 250 từ: quyết định, evidence/scope, ít nhất hai phương án, effort theo role, comparator, uncertainty và một observation có thể thay đổi hành động. Owner là một vai trò, next check sau ba ngày; stop/narrow rule phải kiểm được.

Sau khi khóa memo v1, moderator cung cấp change card: **engineering còn 2h**, research vẫn 4h, permissions không đổi. Viết revision tối đa 100 từ. Có thể giữ strategic direction nếu scope/effort hợp lệ; không thưởng việc đổi strategy tự thân.

## Form B

### M1B — Ai được follow up?

Hai group onboarding có cùng binary task-success definition, nhưng không random assignment. Mỗi người chỉ xuất hiện trong một group. Group X eligible=120, assessed=48, passed=30; 12 người từ chối assessment và 60 chưa liên lạc, tất cả 72 outcome chưa biết. Group Y eligible=100, assessed=80, passed=48; 20 outcome chưa biết. Không biết cơ chế missingness.

1. Tính coverage và observed pass among assessed cho mỗi group.
2. Tính worst-case lower/upper bounds của success among all eligible, không tự giả định missing at random.
3. Có thể xếp hạng group toàn bộ population không? Nêu evidence cần để thu hẹp uncertainty.

### M2B — Account activation, nhiều nhân viên

Mỗi account có một signup cùng t=0 và đã mature; tổng năm account A–E. Job là một tổ chức hoàn thành `invite < approval` trong 7 ngày, có thể do hai nhân viên khác nhau. Contract: 0<invite<approval<7. Log đầy đủ trừ conflict ghi rõ dưới đây; không có event chưa liệt kê.

| Account | Events |
|---|---|
| A | Employee a1 invite d1; employee a2 approval d2 |
| B | b1 approval d1; b2 invite d2 |
| C | c1 invite d1; approval event x có hai payload mâu thuẫn: d3 và d8 |
| D | d1 invite d1; d1 approval d3 |
| E | Không có invite hoặc approval |

1. Chọn unit phù hợp và giải thích vì sao A không được bỏ chỉ vì khác employee.
2. Lập số invited, số chắc chắn hoàn tất và số chưa xác định. Có được tùy ý lấy payload x đầu tiên không?
3. Báo khoảng conversion có thể có theo cả eligible account và invited account, hoặc từ chối point estimate với lý do rõ. Đề xuất data reconciliation trước decision.

### M3B — Calendar mature nhưng telemetry mất

Hai cohort dùng same exact-D7 activity definition. Cả hai đã hết D7 interval. Cohort A có 8 người, capture đầy đủ, 2 returners. Cohort B có 12 người; chỉ 6 người có capture toàn D7, trong đó 3 returners. Sáu người còn lại có telemetry outage suốt D7, không có nguồn log thay thế. Không biết họ active hay không.

1. Tính A; giải thích vì sao B không thể đơn giản là 3/12=25% confirmed retention hay 3/6=50% cohort retention.
2. Báo observed-subset metric và bounds toàn B.
3. B có “gấp đôi A” không? Nêu cách audit/restore measurement mà không thay unknown thành zero.

### M4B — Segment được tạo sau treatment

Một trial giả lập randomize 400 người vào A/B, 200 mỗi arm. Tất cả được follow up bằng cùng binary outcome, không interference, assignment thực hiện đúng. Segment high/low là **mức sử dụng sau assignment**, có thể bị product tác động.

| Arm | Post-assignment usage | Success | Assigned people thuộc segment |
|---|---|---:|---:|
| A | High | 80 | 100 |
| A | Low | 10 | 100 |
| B | High | 9 | 10 |
| B | Low | 76 | 190 |

1. Tính subgroup và all-assigned rates, xác định reversal nếu có.
2. Contrast all-assigned B−A là bao nhiêu pp? Với assumptions nêu trên, contrast này đo estimand nào?
3. Có nên reweight theo high/low để “sửa confounding” rồi khẳng định B tốt hơn không? Giải thích post-treatment conditioning và điều chưa biết về uncertainty.

### M5B — Randomization không chữa missing outcome

Trial giả lập randomize 100 người vào A, 100 vào B, cùng outcome định nghĩa trước. A chỉ assessed được 40, trong đó 28 success. B assessed 90, trong đó 45 success. Không có dữ liệu outcome còn lại hoặc bằng chứng missing at random. Assignment không bị đổi. Không có precision estimate đáng tin cho full-population effect.

1. Tính complete-case rates và difference.
2. Tính bounds cho all-assigned rates và BẢN SO SÁNH **A−B**, cho missing outcomes là success hoặc failure ở hai cực.
3. Vì sao randomization ban đầu không đủ để gọi complete-case contrast là causal effect đã xác định? Thiết kế một follow-up kiểm selection và một decision gate có thể falsify benefit claim.

### M6B — Logistics, guardrail và incumbent

Tình huống giả lập có comparator task test: 100 shipment tasks mỗi workflow, task mix cố định; chưa randomize và chưa kiểm long-term. Incumbent mất trung bình 12 phút/task, lỗi nghiêm trọng 1/100; bespoke prototype mất 9 phút/task, lỗi 4/100. Guardrail được stakeholder chốt **trước test**: không quá 2 lỗi nghiêm trọng/100; mục tiêu effort ≤13 phút/task. Có 36 complaint records từ 9 accounts; chưa xác nhận 36 người hay demand. Không có revenue evidence.

Ngân sách next investigation: 4 engineering/3 research hours. Maintain/configure incumbent=1E/1R; focused error audit=1E/2R; redesign+rollout bespoke=6E/3R. Không có quyền dùng customer shipment data mới; synthetic task rehearsal được phép.

Viết memo v1 tối đa 250 từ, chọn action và ít nhất một alternative; dùng guardrail, effort, evidence scope, role cap và stop/revise rule. Nêu uncertainty test nhỏ còn lại.

Khóa v1 rồi nhận change card: policy chỉ cho retention 7 ngày; incumbent default giữ 30 ngày. Tài liệu vừa được xác minh trong tình huống cho thấy incumbent **có setting 7 ngày**, cần plan giá 80 USD/tháng, trong cap đã duyệt 100 USD/tháng. Viết v2 ≤100 từ, giải thích giữ/đổi quyết định. Không giả định setting đã được bật hoặc operationally verified.

## Form C — delayed/alternative form

### M1C — Records, people và bounds

Training audit có 24 survey rows của 10 nhân viên, một số người trả lời nhiều lần; không có join key từ survey sang performance test. Roster performance gồm 50 eligible distinct employees, 20 assessed, 12 passed theo cùng binary skill task; 30 outcome còn lại unknown.

Tính coverage, assessed pass và bounds success among eligible. Có được dùng 24 survey rows làm denominator kỹ năng hoặc kết luận “24 người cần sản phẩm” không? Nêu một bước reconciliation và một outcome metric phù hợp.

### M2C — Cohort còn non và duplicate row

Service signup cohort Old có 4 accounts signup 01/03/2027 00:00, cohort Young có 2 signup 08/03/2027 00:00. Cutoff 10/03/2027 00:00 exclusive. Contract ordered 0<setup<activation<7 ngày và chỉ cohort đã hết cả cửa sổ 7 ngày được vào denominator.

Old: o1 setup d1, activation d2 lặp cùng ID/payload một lần; o2 setup d1, activation d7; o3 activation d1 rồi setup d2; o4 không có setup. Young: y1 setup d1, activation d1.5; y2 không có event. Capture đầy đủ tới cutoff.

Tính mature funnel, step và overall conversion; giải thích vì sao observed activation của y1 không cho phép gộp Young vào contract này. Event counts có thay distinct account count không?

### M3C — Cohort size khác nhau và thiếu horizon

Hai mature cohorts A: 1 returner/2 eligible, B: 1/8, capture exact-D7 đầy đủ. Cohort C có 5 signup nhưng D7 interval chưa kết thúc. Stakeholder dùng mean(50%,12.5%,0%) làm overall retention. Một dashboard khác đổi sang activity on/after D7 nhưng không ghi end horizon.

Tính exact-D7 pooled theo contract complete cohorts; giải thích ba lỗi có thể có trong hai dashboard. Nếu cohort C đã có một early D7 return, có được gọi C là mature không? Có thể báo observed-so-far riêng nếu định nghĩa rõ không?

### M4C — Một stratum chưa có outcome

Descriptive account-success data: A small 4/10, A large 18/20; B small 6/10, B large assessed=0, passed=0. Chưa có B-large outcome theo rubric; không xem zero denominator là 0%.

Tính các rates xác định được và pooled observed rates theo từng product. Có thể gọi strict reversal hay tính common 50/50 reweighted B không? Đề xuất metric cho comparison population công bằng và bằng chứng cần thêm. Không tự điền B-large rate.

### M5C — Bundled release và harm

Một dashboard quan sát hai nhóm signup tuần khác nhau: tuần trước 100 người, 200 sessions, assessment coverage 90%, 63 passed; tuần sau 100 người, 300 sessions, coverage 50%, 40 passed. Tuần sau thay cùng lúc onboarding, AI feedback và pricing; chưa có assignment, baseline hoặc capture audit. Manager nói “sessions tăng và observed pass tăng nên AI có hiệu quả”.

Tính session relative change, assessed pass rates và coverage change pp. Nêu ít nhất hai explanations khác và một phép so sánh có thể phân biệt AI component với thay đổi bundle. Nếu future trial có no statistically significant difference, có tự động kết luận no effect không? Cần gì để đánh giá harm hoặc meaningful equivalence?

### M6C — Portfolio decision dưới dữ liệu mâu thuẫn

Tình huống giả lập cho enterprise knowledge search. Có 18 interview episodes từ 6 analysts. Họ tự báo tiết kiệm thời gian khi dùng AI để soạn câu trả lời; chưa có verified task accuracy. Trong 10 synthetic tasks auditor quan sát, incumbent đúng 9, AI prototype đúng 8; task set nhỏ, chưa blinded/randomized. Predeclared gate để tiếp tục tới customer pilot: ít nhất 9/10 correct và không có fabricated citation. Prototype có một fabricated citation trong 10 task. Chưa có permission customer data.

Next-week caps: 3 engineering/4 research hours. Audit citation failure=2E/2R, configure incumbent=1E/2R, launch prototype=5E/2R. Quyết định tối đa 250 từ: scope, constraints, alternatives, evidence cần thay đổi quyết định, owner và next check sau ba ngày.

Khóa v1 rồi nhận change card: một source quan trọng vừa phát hiện out-of-date ở **cả hai** workflows; kết quả 9/10 và 8/10 cần audit lại đối với hai affected tasks. Chưa biết corrected scores. Viết revision ≤100 từ, giữ unknown thay vì tự cập nhật rates; không giả định comparative winner hoặc launch permission.

# Unseen transfer answer keys — instructor only

Không cung cấp file này cho learner trước khi kết thúc toàn bộ independent/delayed assessment. Các data là authored assessment stimuli. Không có learner result. Không mở key để so ngay sau baseline/post nếu còn form tiếp theo. Sau delayed có thể dùng feedback cho học.

## Rubric chung cho M1–M5

Đây là rubric audit riêng, **0–8 mỗi bài**, không phải app 0–10, plan 0–8 hay Volume II 0–20. Cùng maximum không có nghĩa cùng construct.

| Dimension | 0 | 1 | 2 |
|---|---|---|---|
| Unit/contract | Sai unit, population hoặc window chủ chốt | Có unit đúng nhưng thiếu một assumption có ảnh hưởng | Unit, eligibility, window và rule phù hợp, phân biệt unknown/zero |
| Calculation/reconstruction | Sai hướng chính hoặc không có phép tính cần thiết | Phương pháp đúng, lỗi số nhỏ hoặc thiếu một phần kết quả | Tử/mẫu và reconstruction đúng; kết quả/interval trong tolerance |
| Inference boundary | Causal/market/missingness overclaim trọng yếu | Kết luận dè dặt nhưng thiếu scope/alternative cụ thể | Kết luận hợp lệ, nêu rõ điều không được suy ra và assumption |
| Decision/next evidence | Hành động không liên quan hoặc blanket “more data” | Bước tiếp phù hợp nhưng chưa nói evidence làm đổi quyết định | Evidence phân biệt được giải thích/giảm uncertainty, action có điều kiện |

Mỗi bài đạt provisional criterion khi ≥6/8, không dimension 0 và không critical error. Đây là **ngưỡng vận hành do auditor đề xuất**, chưa được validate; báo raw dimension scores trước khi gắn đạt/chưa. Không cộng raw score từ MCQ app vào rubric này. Numerical tolerance: ±0,1pp/rate-percent sau làm tròn; integer IDs/counts phải đúng. Chấp nhận decimal hoặc percent nếu ghi units đúng. Sai số học nhỏ với method đúng không tự biến thành critical; persistent wrong population, imputation hoặc causal overclaim là critical khi làm đổi quyết định.

## Form A keys

### M1A

- Account có ≥1 resolved: A/B/D =3/4=75%. Đây là metric account trên bốn account có ticket, không đại diện account không tạo ticket trong product.
- Ticket resolved=4 (t1,t2,t4,t7); ticket status known=6; 4/6=66,67%. Tính trên tám ticket được 50% là tỷ lệ confirmed resolved trong tất cả ticket, một estimand khác, phải đặt nhãn.
- Unknown t5/t8 không thay ≥1-positive classification của B/D. C có zero resolved ticket quan sát, không chứng minh thất bại về customer value hay satisfaction.
- Tăng điểm next evidence nếu yêu cầu task completion, severity, time-to-resolution hoặc customer outcome với population/collection rõ. Không chấp nhận count ticket nhiều hơn làm success nhân quả.
- Instructor checks: Unit account vs ticket; calculation 75 và66,67; boundary satisfaction; next outcome có ích. Critical: gọi 66,67% là account success hoặc customer-value effect.

### M2A

- Signup={u1,u2,u3,u4,u5}, valid search={u1,u2,u4,u5}; ordered purchase={u1,u5}. Stages 5→4→2.
- Step purchase/search=2/4=50%; overall=2/5=40%.
- u3 search exactly signup bị strict rule loại; u4 purchase tại upper boundary d7 bị loại; u5 tie d1 không tạo path nhưng later search d3/purchase d4 có path hợp lệ. u2 early purchase không phải path sau search. Duplicate p1 không tăng người hoặc stage.
- Inference: observed transition under contract, không causal product-value effect. Có thể kiểm query intent, instrumentation và purchase value/refunds trước action.
- Chấm reconstruction phải có ID hoặc giải thích từng case quan trọng, không chỉ lucky number. Critical: lấy rows làm people, include tied/boundary path như contract đã định, causal conversion claim.

### M3A

- A D7=[08/01 12:00,09/01 12:00); mature trước cutoff. a1 một returner dù hai events; a2 ở D8 boundary excluded; a3 trước D7 excluded. A=1/3=33,33%.
- B D7=[10/01 12:00,11/01 12:00), chưa đến full interval tại cutoff; unavailable. b1 activity trước D7, không chứng minh D7 retention.
- A rolling D7–D9=[08/01 12:00,11/01 12:00), chưa đủ quan sát đến 11/01 12:00. Có thể tính observed-so-far riêng có horizon cutoff, không gọi full-horizon estimate hoàn chỉnh.
- Không pool B as zero. Next evidence: chờ đủ horizon đã định, kiểm capture/eligibility; không gọi A học tốt hơn.
- Critical: B zero, D8 count như D7, rolling horizon đầy đủ dù cutoff thiếu.

### M4A

- A novice30%, experienced80%, pooled(9+56)/100=65%; B40%,90%, pooled75%. Weights30%/70% giống nhau: B higher within và pooled, **không reversal**.
- Target80/20: A=.8×30%+.2×80%=40%; B=.8×40%+.2×90%=50%. B−A=10pp, không phải proof causal uplift.
- Mô tả target standardization theo rates đã quan sát. Need comparable baseline, measurement/outcome coverage và assignment design trước causal rollout.
- Chấm inference không buộc randomization là phương pháp duy nhất, nhưng cần phù hợp estimand; không chấp nhận “Simpson” chỉ vì có segments.
- Critical: gọi đây strict reversal, gọi illustrative rates là observed randomized outcomes.

### M5A

- Post contrast A−B=1 điểm trên thang10; changes: A+2, B+1, difference-in-change=1 điểm. Không phải +1pp binary success hay 20% người tốt hơn.
- Với assumptions assignment/capture/measurement/no interference đã stipulate, randomized contrast là estimate cho **assigned bundle effect** trong recruited population. Không cần phủ nhận mọi causal inference chỉ vì data simulated trong bài; đây là reasoning trong giả thiết.
- Bundle khác cả AI/workbook lẫn time-on-task. Không xác định riêng AI component; không có variance/individual distribution để khẳng định significance hoặc mọi người benefit. Sample nhỏ hạn chế precision/generalization.
- So cùng time budget hoặc factorial workflow×time nếu feasible; predeclare outcome/delay/guardrail, blind rating, all-assigned follow-up. Individual baseline không bắt buộc để randomization identify mean contrast nhưng giúp precision/checks; không biến mean baseline thành within-person outcome evidence.
- Critical: universal AI-component causal claim; invent significance; hoặc khẳng định không bao giờ ước lượng được assigned effect dù assumptions nêu đủ.

### M6A

Nhiều đáp án hợp lệ: incumbent rehearsal 1E/3R, task-definition audit0E/4R, hoặc reduced paper4E/2R nếu nói rõ incremental uncertainty và fair comparator. Listed prototype10E vượt cap8E, không hợp lệ. Sáu episode từ hai people không xác nhận prevalence/demand/6 users; outcome tự thuật khác task timing quan sát.

Memo tốt giới hạn invented/local work, không tuyển/thu patient data; nêu task, role effort, unknown, next evidence và stop/revise rule cụ thể, ví dụ dừng prototype branch nếu incumbent rehearsal giải quyết cùng task với effort đã thỏa thuận và không còn residual issue quan sát. Không giả vờ rehearsal đo learning effect. Owner/date relative phù hợp là đủ; không bắt một calendar date cố định của M6 app.

Engineering giảm2E: incumbent/audit vẫn feasible; reduced paper4E không còn fit. Có thể scope một protocol/prototype giấy mới ≤2E với estimate được trình bày là assumption và giới hạn deliverable; không chỉ giữ listed cost rồi tuyên bố “sẽ làm nhanh hơn”. Nêu vai trò không thể hoán đổi.

Áp dụng rubric memo riêng phía dưới; critical: launch, contact/content chưa có quyền, count episodes as independent users, plan vượt cap hoặc tự nhận nghiên cứu đã chạy.

## Form B keys

### M1B

- X coverage48/120=40%; assessed pass30/48=62,5%. X unknown72; eligible-success lower30/120=25%, upper102/120=85%.
- Y coverage80%; assessed pass48/80=60%. Eligible-success bounds48%–68%.
- Complete-case X cao hơn2,5pp nhưng whole-population intervals overlap; không xác định full-population ranking. Không phải evidence causal vì group không randomized.
- Need follow-up cohort with known access/opportunities, baseline/response audit; report refusals vs noncontact separately; không suy ra lý do missingness từ nhãn.
- Critical: unknown=fail như true outcome, MAR được tự giả định, rank toàn population chỉ theo 62,5% so với 60%.

### M2B

- Unit account, cross-employee path của A hợp lệ theo contract job. Eligible 5, invited 4 (A/B/C/D), chắc chắn activation 2 (A/D), C unresolved. B approval trước invite không tạo path; E vẫn denominator eligible.
- Không arbitrarily dedup conflicting payload x. Reconcile authoritative event/source/update semantics; point estimate official pending quality resolution. Có thể báo sensitivity interval với nhãn đúng.
- Nếu x tại d3: C qualify, nếu d8: không. Eligible conversion từ 2/5 đến 3/5=40–60%; step 2/4 đến 3/4=50–75%. Số invited không bị conflict approval thay đổi.
- Chấp nhận từ chối point estimate mà nêu identified bounds và source conflict; không chấp nhận chọn first payload rồi gọi definitive.
- Critical: bỏ A vì employee khác, silently use first payload, mất eligible E khỏi denominator.

### M3B

- A 2/8=25%, fully captured. B covered-subset 3/6=50%; full cohort known return lower 3/12=25%, upper (3+6)/12=75%.
- 25% có thể gọi lower bound/confirmed-return fraction nhưng không definitive cohort rate vì six unknown. Calendar maturity không đảm bảo measurement completeness.
- Không biết B gấp đôi A. Need capture restoration/alternate server log hoặc outcome verification, audit outage mechanism; không sửa log bằng imputation mặc định.
- Critical: treating outage as confirmed inactivity, labeling 3/6 cohort retention, causal group superiority.

### M4B

- A high 80%, low 10%; B high 90%, low 40%. B higher trong cả hai usage groups; pooled A 90/200=45%, B 85/200=42,5%. Strict descriptive reversal.
- All-assigned B−A=−2,5pp, estimate assignment effect trong giả thiết randomized/complete/no interference và outcome hợp lệ. Sampling precision không được cung cấp; không khẳng định statistically significant hoặc phổ quát.
- Usage là post-treatment, không baseline confounder để tự động control/reweight. Cơ chế product→usage→outcome hoặc selection có thể làm subgroup contrast không causal. Không dùng subgroup winners để lật ITT estimand.
- Next: predeclare total vs mediation estimand, thu baseline segment trước assignment; study mechanism riêng nếu cần. Không “sửa” allocation data chỉ để B thắng.
- Critical: reweight post-treatment rồi gọi causal superiority, phủ nhận tính randomized all-assigned contrast chỉ vì paradox, invent uncertainty.

### M5B

- Complete cases A 28/40=70%, B 45/90=50%, A−B=20pp; đây là assessed subsets khác nhau.
- All-assigned A bounds 28–88%, B 45–55%. Difference A−B bounds 28−55=−27pp đến88−45=43pp. Có thể negative/positive.
- Randomization bảo vệ initial assignment, không tự chữa selection vào observed outcomes; complete-case contrast chưa xác định full assignment effect.
- Need all-assigned response recovery, baseline/exposure/access audit và missingness sensitivity; decision gate có thể yêu cầu benefit lower bound vượt meaningful threshold và harm/coverage criteria đạt trước proceed. Nếu không đủ data, gate chưa đạt, không kết luận no effect.
- Critical: point 20pp là effect đã chứng minh; fill missing mặc định; nói randomization vô ích trong mọi trường hợp; no significance→no effect.

### M6B

- Prototype nhanh hơn 3 phút nhưng serious-error 4% vượt predeclared 2%; incumbent 12 phút đạt ≤13 và 1% đạt guardrail. Không có causal claim cần để thấy prototype chưa vượt gate hiện có.
- Feasible maintain 1E/1R và audit 1E/2R, có thể kết hợp 2E/3R. Rollout 6E vượt 4E cap và guardrail chưa đạt. Không coi 36 records là 36 people hoặc proven demand.
- Memo tốt nêu sample/task/measurement limits, preserve permissions và một next test cụ thể về error mechanism/generalization. Không xem small observed test là validated market opportunity.
- Change: không cần abandon incumbent chỉ vì default 30 ngày; paid setting 7 ngày cost 80 USD ≤ cap 100 USD cho phép bounded configuration/verification, **chưa biết setting đã bật/effective**. Gate: verify actual retention/configuration before customer use; synthetic rehearsal tiếp tục permitted. Nếu không verify được, pause affected use hoặc chọn audit trong cap.
- Critical: ignore error guardrail, launch vượt cap, tự coi privacy setting đã operational, unknown/new customer data rights được tự cấp.

## Form C keys

### M1C

- Coverage 20/50=40%; assessed pass 12/20=60%; eligible-success lower 12/50=24%, upper 42/50=84%.
- Survey rows 24 của 10 people không denominator cho task skill của 50 eligible people, cũng không 24 unique demand. Không có join key nên không kết luận survey subgroup outcomes.
- Next: dedup respondent IDs theo consent/data scope, build explicit join nếu hợp lệ, keep survey self-report và test outcomes riêng; define delayed unaided task outcome.
- Critical: record count thành people hoặc 30 missing outcomes thành failures.

### M2C

- Old mature 4, setup{o1,o2,o3}=3, ordered activated{o1}=1. Step 1/3=33,33%; overall 1/4=25%.
- o2 activation d7 upper boundary excluded; o3 early activation không phải after setup. Duplicate o1 không tăng account. Young incomplete window nên không vào denominator theo stipulated full-window contract dù y1 observed converted.
- Có thể báo Young observed-so-far riêng với scope, không silently mix maturity definitions. Không suy luận product value từ activation.
- Critical: include Young because converted, duplicate rows count, d7 boundary included.

### M3C

- Pooled exact D7 = (1+1)/(2+8)=20%; không phải 31,25% equal-cohort mean và không phải 20,83% mean thêm C như zero. C future/partial window unavailable, không phải 0; arbitrary rolling without end horizon khác undefined metric.
- Một early D7 return không làm full cohort mature. Có thể báo observed-so-far có cutoff/numerator/denominator rõ nhưng không substitute mature exact D7.
- Next: complete observation + capture check, then pool same contract. Critical: replace unavailable bằng zero hoặc average rates như pooled user rate.

### M4C

- A small 40%, large 90%, pooled 22/30=73,33%; B small 60%, B large unavailable, pooled observed 6/10=60%.
- Không xác định strict reversal vì thiếu B-large rate; product pooled descriptive rates có assessed mixes khác, chưa fair standardized comparison. Common 50/50 B cần rate B-large cho positive weight, nên unavailable; A common = .5×.4+.5×.9=65% nếu muốn minh họa.
- Có thể so sánh common observed small segment:60% so với 40%, nêu scope; muốn full target cần B-large outcome/coverage và baseline/assignment thích hợp. Không “chữa” bằng rate 0.
- Critical: 0/0=0%, declare strict reversal hay B weighted 30% bằng impute zero.

### M5C

- Sessions (300−200)/200=50%; observed passes 63/90=70%,40/50=80%; coverage 90→50,−40pp. 100 eligible không phải all assessed.
- Alternative composition/acquisition, selection into assessment, pricing/onboarding changes, instrumentation; không phải mọi hypothesis equally supported. Need assignment hoặc design phù hợp để cô lập AI với time/access/bundle và đo delayed unaided outcome, cùng follow-up/guardrail.
- Nonsignificant không bằng no effect. Need effect size, uncertainty/precision và predeclared meaningful/equivalence/harm margins, follow-up coverage, outcome validity; không cần tự nêu statistical test khi thông tin chưa đủ.
- Critical: causal AI claim từ before/after,50 missing outcomes thành zero, no significance=equivalence.

### M6C

- Self-report time saved không verified accuracy. Incumbent 9/10 và prototype 8/10 là task-test observations theo simulated premise, sample nhỏ; không market evidence. Prototype không đạt 9/10 và có fabricated citation, nên fail customer pilot gate dù người học thích product.
- Feasible citation audit 2E/2R hoặc incumbent configuration 1E/2R, hoặc kết hợp 3E/4R nếu purpose rõ; launch 5E vượt 3E cap và chưa có rights. Bounded residual investigation hợp lệ, không phải mặc định never build.
- Changed source khiến rates/outcome validity cho affected tasks cần audit, không tự subtract cả 2 hoặc assume winners unchanged. Giữ pre-change snapshot, re-score affected tasks với corrected key với blind review nếu feasible; chưa update threshold outcome đến khi có dữ liệu. Permissions vẫn không đổi.
- Critical: invent corrected rates, declare validated winner, launch dù fabrication/rights/cap fail.

## Rubric memo M6 và oral probe

Năm dimensions 0–2, **max 10 independent memo points**, khác với 10 selected-statement points trong app. Chấm chính memo trước, không nhìn app score hoặc strategy letter để suy ra chất lượng.

| Dimension | 0 | 1 | 2 |
|---|---|---|---|
| Evidence→claim | Invented/overclaim hoặc lẫn provenance | Source đúng nhưng scope mơ hồ | Mỗi main claim trace được, unit/type/limit rõ |
| Action/alternatives | Launch/irreversible commitment không đủ căn cứ | Direction hợp lý nhưng thiếu residual question | Proportionate next action, so ít nhất hai plausible paths |
| Feasibility/rights | Vi phạm role cap, permissions hoặc predeclared guardrail | Plan có thể fit nhưng effort/rights chưa rõ | Role budget cụ thể, đúng quyền và guardrail |
| Comparator/outcome/uncertainty | Bỏ comparator, outcome sai hoặc impute unknown | Comparator đúng tên, test còn chung | Same job, outcome/effort conditions và discriminating evidence rõ |
| Revision/stoprule | Không cập nhật hoặc reaffirm không có lý do, hoặc vacuous rule | Nhận changed fact nhưng action/gate chưa kiểm được | Revision/reaffirm theo fact, owner/checkpoint và threshold/action khả thi |

Provisional criterion ≥8/10, không dimension 0, không critical. Không cần exact strategy exemplar. V1 và revision được giữ riêng; chấm cả trajectory, không thưởng đổi chữ cái. Reviewer đọc từng critical claim; style/grammar minor không trừ nếu hiểu được. Đáp án ngắn nhưng có căn cứ có thể đạt cao; memo dài có caveat chung không tự đạt.

Sau bài, hỏi một probe neutral tối đa 60 giây: “Nếu thông tin X này sai, phần nào của khuyến nghị của bạn thay đổi?” Dùng X từ claim learner đã viết, không gợi đúng. Lưu nguyên lời nói; không nâng score vì learner lặp prompt. Nếu probe làm learner sửa, giữ original score và repaired score riêng. Pilot score chính dùng written unaided response, probe dùng error analysis.

## Rater operation

Hai reviewer chưa xem app score, participant arm, thời điểm assessment hoặc lời giải cũ. Mỗi score phải có quoted learner evidence hoặc locator của phép tính. Calibrate trên 4 bài mẫu do facilitator viết và label rõ authored, không giả là participant response. Review independent trước khi adjudicate; lưu cả hai scores, critical flags và disagreement. Nếu bất đồng critical hoặc lệch >1 điểm trên dimension, adjudicate với rubric. Report agreement trước adjudication và số case chưa thống nhất; không tạo reliability statistic khi chưa có data.

Tổng form max 50 points: M1–M5 mỗi 8, M6 max 10. Báo profile theo module/dimension/critical trước total. Không đổi 50 này sang app completion hoặc certification.

# Moderator-only form B keys


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

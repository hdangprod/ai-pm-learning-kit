# Kiến trúc Applied AI Product Management và Product Analytics

Từ nguyên lý đến quyết định production. Đích là làm việc Applied AI PM có giám sát, rồi mở rộng theo chuyên môn. Giữ năm tập, giữ nguyên tám chương đầu và case nghiên cứu A. Mở chương trình từ 24 thành 36 chương để tách các kỹ năng cần thực hành riêng; số chương là cách tổ chức, không là bằng chứng chất lượng.

Mỗi chương chỉ hoàn thành khi có giải thích từ trực giác, thuật ngữ, ví dụ số hoặc tình huống có lời giải, một bài mới, rubric, dữ liệu cần thiết và kiểm tái lập. Nguồn nghiên cứu nghề ở Research_Sources.md; C01–C16 ở framework. Đợt nâng cấp này chỉ có bản sửa hoàn chỉnh chương 1–8. Các hàng 9–36 dưới đây là thiết kế đã xác định đầu ra, chưa phải nội dung đã viết.

## Năm tập và đầu ra bắt buộc

| Ch | Nội dung và mức thực hành | Tiên quyết | Đầu ra phải chấm được |
| --- | --- | --- | --- |
| 1 | Vai trò PM, output/outcome, discovery/delivery, trách nhiệm | Không | Phân biệt 5 lớp kết quả và owner trong tình huống mới |
| 2 | Framing, competing hypotheses, quyết định dưới bất định | 1 | Memo có bằng chứng, alternatives, thời hạn và điều kiện đổi |
| 3 | Giá trị, người mua, contribution, CAC/LTV, sensitivity | 1–2 | Mô hình giả định đúng đơn vị và giới hạn churn |
| 4 | Cơ hội, job, consequence, incumbent, underserved | 1–3 | Problem statement và bước kiểm nhỏ nhất có thể đổi lựa chọn |
| 5 | Phương pháp, sampling, validity, data types trong research | 4 | Research question–method map và giới hạn suy luận |
| 6 | Episode interview, Mom Test, consent, probes | 5 | Guide, annotated excerpt và counterepisode |
| 7 | JTBD, segmentation, journey, switching | 5–6 | Screener có thể tuyển và phân nhóm không theo outcome hậu nghiệm |
| 8 | Coding, themes, negative cases, OST, evidence audit | 5–7 | Ledger, codebook và decision brief truy được nguồn |
| 9 | Data foundations, schema, grain, types, event tracking, missing | 5,8 | Event specification, data dictionary, QA và audit lỗi |
| 10 | Mean/median/variance, distributions, probability/conditional probability | 9 | Tính tay rồi kiểm dữ liệu, giải thích base rates và latency tail |
| 11 | Sampling, CI, tests, power, effect size, practical significance | 10 | Mô phỏng lấy mẫu, CI và phân biệt chưa có bằng chứng với bằng chứng không có |
| 12 | Excel formulas, lookup, PivotTables, charts, data validation | 9–11 | Workbook native có formulas và PivotTable kiểm được, không ảnh chụp thay tính toán |
| 13 | SQL SELECT/JOIN/GROUP BY/CTE/windows/dates | 9,12 | Query SQLite chạy từ database kèm schema; chống join fanout |
| 14 | Python/pandas, EDA, visualization và reproducibility | 9–13 | Script/notebook từ CSV đến kết quả; assert dữ liệu hợp lệ |
| 15 | Metrics, North Star, metric tree, leading/lagging, guardrails | 1,9–14 | Metric dictionary tường minh numerator/denominator/timezone/unit |
| 16 | Funnel, activation, cohorts, retention, churn, Simpson/confounding | 10–15 | Phân tích cùng dataset trên ba công cụ và memo giới hạn causal |
| 17 | Strategy, positioning, opportunity assessment, differentiation | 4,8,15–16 | Strategy có nhóm mục tiêu, lựa chọn từ chối và evidence đổi hướng |
| 18 | EV, VOI, opportunity cost, prioritization, roadmap | 2–3,11,17 | So phương án với sensitivity; roadmap theo outcome |
| 19 | Stakeholder alignment, conflict, capacity và executive communication | 17–18 | Biên bản bất đồng và quyết định có owner, escalation, trade-off |
| 20 | PRD, functional/non-functional requirements, feasibility, acceptance | 15,17–19 | PRD đủ để engineer review, dependency và scope cut |
| 21 | Causal reasoning, estimand, randomization, A/B, power | 11,15–16 | Protocol có exposure, MDE, unit, guardrails, kiểm SRM |
| 22 | Đọc experiment, peeking/multiple testing, VOI và quyết định | 18,21 | Decision readout có CI/practical threshold và alternative action |
| 23 | Delivery, launch, rollout, analytics, iteration và sunsetting | 19–22 | Launch plan, readiness review, rollback/sunset criteria |
| 24 | GTM, pricing, adoption, retention và feedback loops | 3,16–23 | Kế hoạch adoption với user/buyer/channel/economics |
| 25 | AI vs software, ML, training/inference, LLM/token/context/temperature | 9–11,20 | Giải thích failure và AI suitability; giải pháp rule-based khi đủ |
| 26 | Embeddings, semantic search, RAG, fine-tuning, structured outputs | 25 | Data/request flow; phân biệt lấy kiến thức và thay hành vi |
| 27 | Tool calling, workflows, agents, human-in-loop | 25–26 | Workflow và permission boundary; stop/ask-human/fallback |
| 28 | Hosted/self-hosted, model choice, cache/batch, cost/latency/reliability | 3,10,20,25–27 | Architecture trade-off memo có benchmark plan và total operating cost |
| 29 | Eval objectives, dataset, golden/holdout, slices, annotation/rubric | 5–8,11,25–28 | Testset ≥30 ca tutor giả lập và instructions cho rater |
| 30 | Graders, LLM-as-judge, disagreement, severity, regression/overfitting | 29 | Chấm lỗi, calibration, không dùng overall pass rate che critical failures |
| 31 | AI product analytics, task/UX/learning/business, cost/latency dashboard | 15–16,28–30 | Dashboard phân tầng và phân khúc; kết nối trace với release |
| 32 | Responsible AI, NIST risk cycle, hallucination, injection, privacy/fairness | 27–31 | Risk register có evidence, owner, mitigation và residual risk |
| 33 | AI PRD, model behavior, milestones, eval gates, QA/versioning/rollout | 20,23,28–32 | AI PRD + launch gates + acceptance tests + controlled rollout |
| 34 | Observability, incidents, rollback, migration, retention/audit logs | 23,31–33 | Runbook, incident exercise, regression set và migration decision |
| 35 | AI strategy, build/buy, pricing, adoption, sustainable economics | 17–18,24,28,31–34 | Investment memo có quality/cost/risk và điều kiện dừng |
| 36 | Capstone 8 tuần, portfolio, executive Go/No-Go/Learn-More | 1–35 | Bộ 15 deliverables, phản biện độc lập và post-launch response |

## Mapping từ 24 chương cũ

Ch1–8 giữ số. Ch9 cũ →9; ch10→10–11 và16/21; ch11→12; ch12→13; ch13→15; ch14→14/16. Ch15–16 cũ→18/22; ch17→21–22; ch18→17/20/23/24; ch19→19 và trình bày xuyên chương. Ch20→25–28/31–35; ch21→29–30; ch22–24→36 với các milestone case A/B trước đó. Không có chương cũ chưa viết nào được tính thành nội dung bàn giao chỉ nhờ mapping.

## Hai case không trộn nguồn

Case A giữ snapshot nghiên cứu English AI V2.1 dùng trong sách: corpus 200 records, không phải 200 người; không có kết quả primary mới. Các cập nhật nghiên cứu tương lai phải version riêng, không thay số âm thầm trong lời giải.

Case B là English tutor đã phát hành hoàn toàn mô phỏng. Đợt này chỉ có một bảng tổng hợp 4 dòng để học denominator/selection và một bài chẩn đoán nền tảng, chưa là event dataset production. Dataset đầy đủ ở Tập III phải có users, assignments, events, tasks, followups, model responses, costs, complaints và releases; mỗi bảng có grain, khóa, timestamp, simulation label, generator seed và quy tắc missing.

Schema tương lai: users(user_id, signup_ts, segment); events(event_id, user_id, task_id, event_name, event_ts); tasks(task_id, user_id, release_id, completed); responses(response_id, task_id, model_version, prompt_version, latency_ms, input_tokens, output_tokens, fallback); followups(user_id, target_skill, due_ts, observed_ts, opportunities, correct, unaided); costs(response_id, cost_currency, model_cost, review_cost); assignments(user_id, experiment_id, variant, assigned_ts); feedback(feedback_id, task_id, type, severity); releases(release_id, shipped_ts, behavior_change). Khóa ghép và timezone phải khóa trước khi tạo data.

## Hợp đồng lab tương lai

| Lab | Tập | Phải giao | Kiểm nghiệm thu |
| --- | --- | --- | --- |
| Data QA | III | Dữ liệu bẩn + sạch, dictionary, cleaning log | Phát hiện duplicate, missing, orphan key và timestamp ngoài cửa sổ |
| Excel | III | Formulas + native PivotTable + charts | Recalc trên input thay đổi; export/reopen không mất pivot |
| SQL | III | SQLite DB + schema + queries | Funnel/cohort/right censoring đúng; join không phóng đại counts |
| pandas | III | Notebook/script và requirements | Chạy offline; khớp đáp án SQL/Excel |
| Experiment | IV | Assignment + exposure + outcomes | SRM, unit, CI/power và không chọn nhóm sau treatment |
| Evals | V | ≥30 ca, expected behavior, rubric, rater inputs, scripts | Bao phủ correction sai, đổi nghĩa, unsupported, verbosity, level, context, ambiguity, adversarial và clarification |
| Launch | V | PRD, evals, constraints, incident packet | Gate có owner; chất lượng, latency, cost và risk cùng được xét |

Mỗi khái niệm analytics phải có trực giác → ví dụ số → bài dataset → business decision → điều không suy được. Không thay bài thống kê bằng danh sách thuật ngữ. Không nhúng lời giải instructor vào student dataset.

## Capstone 8 tuần cần xây

Chưa được bàn giao như một mô phỏng hoàn chỉnh trong đợt này. Đây là đặc tả nghiệm thu để tránh tạo thêm một outline không có học liệu.

| Tuần | Tình huống phát theo đợt | Đầu ra sinh viên |
| --- | --- | --- |
| 1 | Business objective và stakeholder requests mâu thuẫn | Opportunity assessment; evidence audit |
| 2 | Episode packet, success cases, segment constraints | Target segment; problem/JTBD; strategy |
| 3 | Events có lỗi đo và budget cố định | Metric tree; analysis memo |
| 4 | Hai architecture alternatives và giới hạn engineering | AI PRD; architecture trade-off memo |
| 5 | AI outputs và rater disagreement | Eval plan; experiment plan |
| 6 | Token/latency/cost records và foreseeable misuse | Cost/latency analysis; risk register |
| 7 | Release candidate và quality incident | Launch readiness assessment |
| 8 | Post-launch dashboard và yêu cầu executive | Dashboard interpretation; executive decision brief |

Người học phải nhận student packets trước, instructor solutions ở thư mục riêng. Có 15 sản phẩm chấm chính theo yêu cầu; analysis memo là tài liệu phụ. Điểm dành cho chất lượng suy luận, nhận diện bất định và khả năng đổi quyết định, không thưởng một chữ “Go” cố định.

## Atlas cần hoàn thiện

Giữ 10 hình I–II. Phần III cần metric tree, funnel, cohort heatmap, retention curve, sampling/CI và Simpson. Phần IV cần causal DAG, assignment/exposure, decision under uncertainty và rollout gates. Phần V cần request lifecycle, RAG, agent/tool boundary, eval pipeline, error taxonomy, offline/online map, outcome chain, Pareto cost/latency/quality, dashboard, incident workflow và launch gates.

Mỗi biểu đồ có đơn vị, mẫu số/cửa sổ và data provenance; mỗi sơ đồ ghi conceptual hoặc hypothesis. SVG và script tái tạo đi cùng PDF. Hình không được tính hoàn thành khi chỉ có tên trong danh sách này.

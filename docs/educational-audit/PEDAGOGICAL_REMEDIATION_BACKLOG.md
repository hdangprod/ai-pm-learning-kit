# Pedagogical remediation backlog

Không thay ứng dụng trong phase audit. Owner dưới đây là vai trò đề xuất. Giữ nguyên source datasets, source answer keys, working modules và user progress. Không có P0 confirmed; nếu runtime cho thấy sai teaching/scoring hoặc record corruption thì nâng severity theo tác động.

Thứ tự: AQ09 cung cấp package để xác nhận implementation; AQ01–AQ04 sửa assessment theo patch nhỏ; sau đó AQ05–AQ08/AQ11 và AQ10. Không lấy score tổng làm lý do trì hoãn P1. Chưa chạy acceptance tests dưới đây trên app.
## AQ01 — P1

- Status/evidence: **Confirmed in screenshots**.
- Location: `M1–M5: docs/verification/module-{one,two,three,four,five}-desktop-feedback.png`. Tên source implementation phải resolve từ repo; không có code line đã inspect.
- Existing behavior: Đáp án đúng ở vị trí đầu trong 20/20 nhóm reasoning được chụp.
- Expected behavior: Loại positional cue; đáp án hợp lý phải phân biệt bằng evidence.
- Educational rationale: Completion không đủ chứng minh learner tự tạo reasoning.
- Proposed change: Dùng stable option IDs; đảo thứ tự khi tạo lượt mới, khóa thứ tự trong lượt và reload. Viết distractor gần đúng sai một giả định.
- Acceptance criteria: Không thể dùng quy tắc chọn đầu để qua bộ item; reload và export giữ đúng ID/label; ít nhất hai distractor có vẻ hợp lý qua cognitive interview.
- Recommended verification: Inspect item metadata; seed order tests; learner think-aloud; không dùng shuffle đơn thuần làm bằng chứng validity.
- Suggested owner: Assessment designer + frontend engineer + independent reviewer.


## AQ02 — P1

- Status/evidence: **Confirmed design limitation; exploit not run**.
- Location: `M6: docs/MODULE_6_SCENARIO.md:28–38; docs/MODULE_6_INSTRUCTOR.md:21`. Tên source implementation phải resolve từ repo; không có code line đã inspect.
- Existing behavior: Selected statements có thể đạt 10/10 trong khi memo chỉ kiểm nonblank/date.
- Expected behavior: Điểm structured và đánh giá memo là hai kết quả riêng.
- Educational rationale: Completion không đủ chứng minh learner tự tạo reasoning.
- Proposed change: Giữ practice score; thêm reviewer status Pending/Reviewed và rubric memo, không tự động gắn mastery. Không dùng keyword/length grading thay reviewer.
- Acceptance criteria: Memo mâu thuẫn critical claim không được reviewer đánh đạt; structured score cũ và lịch sử vẫn giữ nguyên; chưa review luôn hiện rõ.
- Recommended verification: Nhập bộ memo tốt/xấu/placeholder trong bản chạy, chấm blind; preservation regression.
- Suggested owner: Assessment designer + frontend engineer + independent reviewer.


## AQ03 — P1

- Status/evidence: **Confirmed in documented items**.
- Location: `M1–M5 assessment/transfer contracts; M6 same-job transfer`. Tên source implementation phải resolve từ repo; không có code line đã inspect.
- Existing behavior: Transfer phần lớn dùng cùng fixture/job và numeric value đã hiển thị.
- Expected behavior: Có evidence ứng dụng trên case mới không kèm câu trả lời.
- Educational rationale: Completion không đủ chứng minh learner tự tạo reasoning.
- Proposed change: Giữ bài hiện tại là same-case practice; thêm assessment ngoài app bằng bộ A/B/C, độc lập với progress hiện có.
- Acceptance criteria: Mỗi module có ít nhất hai case thay cấu trúc/definition/missingness, đáp án tách riêng, không tự mở sau khi pass fixture.
- Recommended verification: Hai reviewer giải độc lập, thử pilot trước; kiểm learner artifact và delayed retention.
- Suggested owner: Assessment designer + frontend engineer + independent reviewer.


## AQ04 — P1

- Status/evidence: **Plausible risk from reveal contract**.
- Location: `M3–M6 reveal gates; M1/M2 checkpoint and screenshots`. Tên source implementation phải resolve từ repo; không có code line đã inspect.
- Existing behavior: Một attempt đầy đủ và text nonblank mở lời giải dù reasoning sai; retry sau feedback có thể dẫn tới completion.
- Expected behavior: Guidance phục vụ luyện tập, attempt trước hint giữ riêng với independent check.
- Educational rationale: Completion không đủ chứng minh learner tự tạo reasoning.
- Proposed change: Ghi trạng thái first attempt / assisted retry; yêu cầu giải thích sửa gì trước retry; giữ reveal cho học.
- Acceptance criteria: Điểm assisted không ghi đè first response; delayed assessment không có guidance; không tăng độ khó bằng cấm học viên xem lời giải.
- Recommended verification: Run placeholder attempt, reveal, copy/retry; đánh dấu hỗ trợ và kiểm snapshot/export.
- Suggested owner: Assessment designer + frontend engineer + independent reviewer.


## AQ05 — P2

- Status/evidence: **Confirmed arithmetic fork; learner confusion is risk**.
- Location: `docs/MODULE_3_DATA.md:5–11; docs/AUTHORED_CONTENT.md event blueprint`. Tên source implementation phải resolve từ repo; không có code line đã inspect.
- Existing behavior: M2 gốc cho Oct1 D7 3/4; M3 fork sửa user_id để giữ 2/4. Dictionary có giải thích nhưng nhiều tầng.
- Expected behavior: Learner nhìn thấy đây là hai dataset khác nhau trước khi so kết quả.
- Educational rationale: Giảm sai diễn giải và tăng khả năng quan sát năng lực trong scope hiện có.
- Proposed change: Thêm một câu hỏi bridge: cùng rule D7 nhưng dữ liệu nào khác? Cho so event UPPER_BOUNDARY; không đổi dataset.
- Acceptance criteria: Người học tính 75% trên M2 và 50% trên M3, nêu đúng distinct-user change; manifest cũ không đổi.
- Recommended verification: Data-byte lineage check khi có repo; learner explanation, không phạt 75% nếu learner dùng M2 đúng.
- Suggested owner: Instructional designer + frontend/documentation maintainer.


## AQ06 — P2

- Status/evidence: **Plausible cognitive-load and pattern-learning risk**.
- Location: `M5 map/design/checklist; M6 memo and matrix screenshots`. Tên source implementation phải resolve từ repo; không có code line đã inspect.
- Existing behavior: Nhiều checklist, trường memo và caution cùng hiện; dễ học câu “không thể kết luận” máy móc.
- Expected behavior: Yêu cầu chọn uncertainty có thể phân biệt và hành động cụ thể.
- Educational rationale: Giảm sai diễn giải và tăng khả năng quan sát năng lực trong scope hiện có.
- Proposed change: Giảm nội dung ban đầu theo task; thêm positive-control RCT có thể ước lượng assignment contrast; cho viết 3 câu trước form dài.
- Acceptance criteria: Learner phân biệt có thể ước lượng conditional effect với observational unknown; không chỉ trả “cần thêm dữ liệu”.
- Recommended verification: Think-aloud và task M5A; reviewer kiểm discriminating evidence, không checklist count.
- Suggested owner: Instructional designer + frontend/documentation maintainer.


## AQ07 — P2

- Status/evidence: **Unverified accessibility risk**.
- Location: `All modules; docs/TECHNICAL_COMPLETION_REPORT.md:86`. Tên source implementation phải resolve từ repo; không có code line đã inspect.
- Existing behavior: Có ảnh và log keyboard do developer; không có independent DOM/AT session.
- Expected behavior: Keyboard, focus, live feedback, group labels và text alternatives dùng được.
- Educational rationale: Giảm sai diễn giải và tăng khả năng quan sát năng lực trong scope hiện có.
- Proposed change: Kiểm thực runtime với keyboard, screen reader, 200/400% zoom, mobile table. Sửa lỗi xác nhận được bằng patch nhỏ.
- Acceptance criteria: Không trap; radio/slider có name/value; lỗi được announce; focus tới lỗi/heading hợp lý; table header association; reflow không mất task.
- Recommended verification: Manual AT run + DOM inspection, automation hỗ trợ. Không tuyên bố WCAG compliance chỉ từ ảnh.
- Suggested owner: Instructional designer + frontend/documentation maintainer.


## AQ08 — P2

- Status/evidence: **Confirmed capability limit; data-loss incident not observed**.
- Location: `docs/TECHNICAL_COMPLETION_REPORT.md:73–86; docs/CROSS_MODULE_CONSISTENCY.md`. Tên source implementation phải resolve từ repo; không có code line đã inspect.
- Existing behavior: Local-only history, export có nhưng chưa import; reset xóa history trong phạm vi đã xác nhận.
- Expected behavior: Người học hiểu tính local và cách giữ bản chứng cứ trước reset.
- Educational rationale: Giảm sai diễn giải và tăng khả năng quan sát năng lực trong scope hiện có.
- Proposed change: Làm rõ backup/export và thời điểm; nếu thêm import sau này phải validate/schema/preserve. Không bắt viết import trong audit này.
- Acceptance criteria: Cancel không mất dữ liệu; reset đúng phạm vi; export trước reset có snapshots độc lập; warning khi storage hỏng.
- Recommended verification: Runtime seeded legacy state, failed writes, exports, cancel/reset; lưu outside app khi đánh giá pilot.
- Suggested owner: Instructional designer + frontend/documentation maintainer.


## AQ09 — P2

- Status/evidence: **Confirmed audit-package gap**.
- Location: `docs.zip inventory; absent root specs/source/materials`. Tên source implementation phải resolve từ repo; không có code line đã inspect.
- Existing behavior: Không có source code, dataset bytes, scripts, tests, build hay curriculum originals.
- Expected behavior: Review có thể kiểm actual logic và curriculum độc lập.
- Educational rationale: Giảm sai diễn giải và tăng khả năng quan sát năng lực trong scope hiện có.
- Proposed change: Bổ sung read-only repo snapshot gồm source/tests/assets/materials/specs/PROGRESS và commit ID. Không cần sửa app.
- Acceptance criteria: Package chạy được với dependencies đã khóa; paths và revision thống nhất; source originals tách authored content.
- Recommended verification: Independent rerun checks theo README, không chạy generator để tạo lại expected answers.
- Suggested owner: Instructional designer + frontend/documentation maintainer.


## AQ10 — P3

- Status/evidence: **Confirmed documentation label issue**.
- Location: `docs/MODULE_6_INSTRUCTOR.md:5–7`. Tên source implementation phải resolve từ repo; không có code line đã inspect.
- Existing behavior: Heading “Three rubric systems” nhưng mô tả bốn thang: app, plan, Volume I, Volume II.
- Expected behavior: Người học phân biệt đúng bốn thang và mục đích.
- Educational rationale: Giảm sai diễn giải và tăng khả năng quan sát năng lực trong scope hiện có.
- Proposed change: Đổi heading thành “Separate assessment systems”; bảng ngắn mục đích/max/gate.
- Acceptance criteria: Bốn hệ có tên, max và scope; không thay rubric source hoặc điểm lưu.
- Recommended verification: Documentation diff và instructor review.
- Suggested owner: Instructional designer + frontend/documentation maintainer.


## AQ11 — P2

- Status/evidence: **Confirmed visual navigation cost; usability impact unmeasured**.
- Location: `Six mobile viewport screenshots; M6 mobile matrix`. Tên source implementation phải resolve từ repo; không có code line đã inspect.
- Existing behavior: Header/navigation mobile chiếm khoảng một phần ba viewport; matrix cần cuộn ngang qua văn bản dài.
- Expected behavior: Trở lại bài học/so phương án mà không phải nhớ cột khuất.
- Educational rationale: Giảm sai diễn giải và tăng khả năng quan sát năng lực trong scope hiện có.
- Proposed change: Thử collapse navigation sau lựa chọn; giữ tên module; cho compare hai lựa chọn và key row summary.
- Acceptance criteria: Task keyboard/mobile hoàn tất không lạc context; table headers giữ association; không mất chiến lược hoặc state.
- Recommended verification: User task test đo thao tác/cuộn và comprehension trước/sau, không dựa chỉ ảnh đẹp.
- Suggested owner: Instructional designer + frontend/documentation maintainer.


## Preservation contract cho remediation pass

1. Lưu baseline exports của từng module, legacy Work và attempt snapshots trước khi sửa.
2. Không đổi numeric keys hiện có để làm test pass. Item mới có version/ID mới; old responses giữ original label mapping.
3. Nếu shuffle, persist stable ID và order của attempt; không chỉ lưu index khiến old answer đổi nghĩa.
4. Practice completion cũ giữ nguyên. Assessment mới có status riêng, không hạ/xóa lịch sử thành tích cũ.
5. Reset vẫn theo module/global scope hiện có; cancel giữ dữ liệu. Không đẩy API/cloud chỉ để sửa pedagogy.
6. Chạy required regression phù hợp khi có repo; Python checks không được regenerate expected fixtures. Kiểm source/download hashes và export semantic labels.
7. Reviewer độc lập kiểm bad memo, correct-but-unusual decision và justified keep, không chỉ happy-path chọn đáp án mẫu.

## Release/evaluation gates

- Gate R1: package/revision đầy đủ, artifact findings được xác nhận hoặc bác bỏ bằng runtime; unresolved status công khai.
- Gate R2: assessment P1 có observable acceptance evidence; chuyển sang guided practice được phép ngay cả khi chưa có efficacy claim.
- Gate R3: baseline/post/delayed pilot với unseen tasks, blind review và missingness report. Chỉ claim đúng phạm vi design cho phép.
- Không yêu cầu thêm advanced topics hoặc full architectural rewrite để qua các gate trên.

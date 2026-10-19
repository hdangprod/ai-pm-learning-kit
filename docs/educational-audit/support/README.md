# Audit support evidence

Đây là hồ sơ hỗ trợ của EQ-AUDIT-1.0, không phải app repository.

- 27 independent arithmetic checks từ bảng/narrative nguồn: PASS. Không tái lập raw dataset hoặc application tests.
- 47 calculation checks cho answer keys do auditor tạo: PASS. Không có learner results.
- Scorecard: 42 score-level records, 24 competency mappings; weighted overall 60.5833/100, provisional design appraisal.
- Formula perturbation, blank→NE propagation, final error scans, XLSX structure/cache và exported visual previews đã kiểm; chưa chạy Excel/LibreOffice.
- Sources: 129 files trong docs.zip, gồm 16 MD, 70 PNG, 42 log, 1 JSON. Audit chỉ inspect 20 PNG được liệt kê trong main report.
- Original source code, tests, raw fixtures, originals và running app không được gửi. Không có runtime exploit reproduced, participant study hoặc app modification.

Chạy lại checks bằng Python standard library, không network:

```sh
python support/audit_checks.py --docs-zip /path/to/docs.zip --output-dir ./recheck
python support/verify_transfer_keys.py --output ./recheck/TRANSFER_KEY_CHECKS.json
```

Phải dùng đúng archive gốc; inventory chứa hash từng file được cung cấp. Source locators `docs/...` trong reports trỏ vào archive gốc. Không coi matching manifest strings là byte verification của datasets vắng mặt.

Original docs.zip SHA256: dd8bb76e7bae54c1957ee8542ea8d77c8ecae931b1f980f0ac310303b11f8640

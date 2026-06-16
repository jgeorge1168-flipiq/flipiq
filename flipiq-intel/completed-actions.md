# FlipIQ Completed Actions

## 2026-06-15 — house-flipping-calculator.html shipped

**Page:** https://reflipiq.com/house-flipping-calculator
**Keyword target:** "house flipping calculator" (43 impressions/week)
**Status:** Live

### What was built
- Full house flipping calculator page targeting "house flipping calculator" keyword
- Inputs: purchase price, ARV, rehab, contingency %, loan amount, interest rate, hold period, points, buy/sell closing %, agent %, monthly holding costs
- Outputs: Net Profit (green/red), 4-metric grid (Total Cost, Profit Margin, Cash-on-Cash ROI, MAO), 70% rule banner (pass/warn/fail), itemized cost breakdown table
- Related tools grid linking to /house-flipping-cost-estimator, /70-rule-calculator, /arv-calculator, /hard-money-loan-calculator
- Full prose + FAQ section for SEO
- Canonical: https://reflipiq.com/house-flipping-calculator
- GA4: G-7TY5V5RCS9

### Post-ship actions completed
- Vercel auto-deployed (confirmed live)
- Footer link added to: index.html, 70-rule-calculator.html, arv-calculator.html, house-flipping-cost-estimator.html
- Submitted to Google Search Console for indexing

## 2026-06-15 — URL Dedup Fix (Approved from Mission Control)
- Action: Added 301 redirects in vercel.json for .html → clean URLs
- Redirects added: /arv-calculator.html → /arv-calculator, /70-rule-calculator.html → /70-rule-calculator, /fix-and-flip-calculator.html → /fix-and-flip-calculator, /house-flipping-profit-calculator.html → /house-flipping-profit-calculator, /hard-money-loan-calculator.html → /hard-money-loan-calculator, /brrrr-calculator.html → /brrrr-calculator, /real-estate-roi-calculator.html → /real-estate-roi-calculator, /rental-cash-flow-calculator.html → /rental-cash-flow-calculator
- Redirect verification: ✅ arv-calculator.html, ✅ 70-rule-calculator.html (also spot-checked ✅ brrrr-calculator.html)
- Note: Vercel serves these as 308 permanent redirects (SEO-equivalent to 301); repo already had cleanUrls:true, so explicit permanent redirects were added to consolidate the already-indexed duplicates
- Impact: Consolidates duplicate SERP signals; full effect visible in GSC within 1–2 weeks

## 2026-06-15 — Keyword Gap Fix: house-flipping-calculator (Approved from Mission Control)
- Target query: "house flipping calculator" (43 impressions/week, pos ~89)
- Changes made: Title now "House Flipping Calculator — 60-Second Analysis | FlipIQ"; meta description rewritten to lead with "Free house flipping calculator" (purchase price, rehab costs, ARV; profit/ROI/margin/70% rule check); H1 unchanged (already exact-match "House Flipping Calculator"); intro paragraph rewritten to include the exact phrase in the first sentence
- GSC indexing requested: ✅ (URL added to priority crawl queue)
- Expected timeline: Position improvement visible in 2–4 weeks

## 2026-06-15 - FAQ Schema Removal (Approved from Mission Control)
- Action: Removed FAQPage JSON-LD schema from all calculator pages
- Reason: Google deprecated FAQ rich results May 7, 2026
- Pages cleaned: 70-rule-calculator.html, brrrr-calculator.html, fix-and-flip-calculator.html, hard-money-loan-calculator.html, house-flipping-cost-estimator.html, house-flipping-profit-calculator.html
- Other schema preserved: None. These pages contained only FAQPage JSON-LD (no Article, BreadcrumbList, WebPage, or Product schema).
- Impact: Cleaner structured data; no loss of rich results (already retired). Visible on-page FAQ content left intact. Commit 35a219c.
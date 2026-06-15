# FlipIQ SEO Changelog & Playbook

Running record and self-improving playbook for the FlipIQ SEO Manager. Each Monday entry logs metrics, retrospectives on prior hypotheses, changes made, and new hypotheses to evaluate the following week.

---

## 2026-06-14 (Week 1 — baseline)

First run. No prior changelog existed, so this is a clean-slate baseline. GSC data is sparse: the site began receiving impressions around 2026-06-06, so the 28-day window holds only ~7 days of data.

### This Week's Metrics (Last 28 days, ending 2026-06-12)
Site totals: 1 click · 216 impressions · 0.5% CTR · avg position 84.4

| Page | Position | CTR | Impressions | vs Last Week (Position) | vs Last Week (CTR) |
|---|---|---|---|---|---|
| / (homepage) | 5.6 | 20% | 5 | — | — |
| /house-flipping-cost-estimator | 86.6 | 0% | 137 | — | — |
| /hard-money-loan-calculator | 78.7 | 0% | 28 | — | — |
| /70-rule-calculator | 82.8 | 0% | 26 | — | — |
| /arv-calculator.html | 82.4 | 0% | 14 | — | — |
| /arv-calculator | 88.0 | 0% | 12 | — | — |
| /70-rule-calculator.html | 79.2 | 0% | 10 | — | — |
| /brrrr-calculator | 3.0 | 0% | 1 | — | — |
| /fix-and-flip-calculator | — | — | 0 | — | — |
| /house-flipping-profit-calculator | — | — | 0 | — | — |
| /real-estate-roi-calculator | — | — | 0 | — | — |
| /rental-cash-flow-calculator (not indexed) | — | — | 0 | — | — |
| /pricing | — | — | 0 | — | — |

Top queries by impressions: house flipping calculator (34, pos 89), flipping house calculator (14), real estate flip calculator (14), house flipping cost calculator (12), fix and flip loan calculator (12), arv calculator (10), home flipping calculator (10), home flip calculator (10), flipper calculator (9), flipping calculator (9).

Best-positioned queries: flip iq (7.0), house flipping cost breakdown (53.0), what is the 70% rule in house flipping (68.0), how to estimate cost of flipping a house (69.0), house flipping costs (74.0), cost to flip a house (76.0).

### Retrospective — Prior Hypotheses
- None. First run, no prior hypotheses to evaluate.

### Changes Made
- **house-flipping-cost-estimator.html** — Added 3 FAQ entries to both the FAQPage JSON-LD schema and the visible FAQ section, targeting exact GSC queries this page already appears for: "How much does it cost to flip a house?", "How do I estimate the cost of flipping a house?", "What is a typical house flipping cost breakdown?". Added 3 internal links with descriptive anchor text (→ house flipping profit calculator, → hard money loan calculator, → 70% rule calculator). JSON-LD validated (valid FAQPage, 7 questions, 7 matching visible entries). Commit caa6fa8 (Verified). Live deployment verified; calculator JS untouched.
- **rental-cash-flow-calculator** — Requested indexing (was "Discovered – currently not indexed", no referring page detected). Added to Google's priority crawl queue.

### Hypotheses — 2026-06-14
- /house-flipping-cost-estimator: "house flipping cost breakdown" position 53 → sub-40 within 3 weeks, driven by the new FAQ targeting that exact query. Page impressions 137 → 180+ within 4 weeks. Watch for an FAQ rich result on cost-breakdown queries.
- /house-flipping-cost-estimator: new long-tail impressions appear for "cost to flip a house" (pos 76) and "how to estimate cost of flipping a house" (pos 69) within 2–3 weeks.
- /rental-cash-flow-calculator: status moves from "not indexed" → "URL is on Google" within 1–2 weeks; first impressions appear.

### No Action Needed
- / (homepage): Position 5.6, CTR 20% — healthy.
- /brrrr-calculator: Position 3.0 but only 1 impression — too little data to act.

### Crawl Issues
- Indexing requested: /rental-cash-flow-calculator (1 request used today; limit ~10/day).
- 5 "Redirect error" pages and duplicate indexing of both .html and clean URLs (/arv-calculator.html + /arv-calculator; /70-rule-calculator.html + /70-rule-calculator) are splitting impressions across duplicate URLs. FLAGGED FOR MANUAL REVIEW — not auto-fixed (involves vercel.json, which is off-limits). Recommend confirming canonical tags + redirects so only the clean URL is indexed.

### Core Web Vitals
- "Not enough usage data in the last 90 days" for both mobile and desktop. No issues to flag (expected for a new site).

### Rich Results / FAQ Status
- Active FAQ items detected: /fix-and-flip-calculator, /house-flipping-profit-calculator, /house-flipping-cost-estimator (updated today, 7 questions).
- /real-estate-roi-calculator: indexed but NO FAQ schema → opportunity to add FAQPage schema in a future week.

### GitHub / Deployment Status
- Commit caa6fa8 confirmed in history (Verified). Live deployment verified within ~3 minutes. No failures.

### Seasonal Angle
- Jun–Aug = renovation season (rehab cost estimation, contractor budgets). Applied to the new /house-flipping-cost-estimator "How do I estimate the cost..." answer, which references a contractor walkthrough "during renovation season." Next month continues the renovation-season theme.

## Proven Playbook (updated 2026-06-14)
Cumulative confirmed lessons. Nothing confirmed yet — Week 1 baseline. Initial working principles to test:
- The site is brand-new (~1 week of impressions); most target pages rank deep (position 75–95) due to low domain authority. Expect gradual improvement, not jumps.
- Many impressions come from generic "house flipping calculator" variants — decide whether a single page should target these head terms directly.
- Both .html and clean URLs are indexed for some pages, splitting signals; consolidating to clean URLs should concentrate ranking strength.
- rental-cash-flow-calculator had "no referring page detected" — internal links drive crawl discovery; ensure every target page is linked from at least one indexed page.

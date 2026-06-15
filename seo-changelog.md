# FlipIQ SEO Changelog & Playbook

Running record and self-improving playbook for the FlipIQ SEO Manager. Each Monday entry logs metrics, retrospectives on prior hypotheses, changes made, and new hypotheses to evaluate the following week.

---

## 2026-06-15

Second run, one day after the 2026-06-14 baseline (the baseline was created Sunday; the scheduled Monday run followed). GSC's 28-day windows overlap almost entirely, so most page-level deltas reflect data-window catch-up rather than the effect of last week's changes (which are only ~1 day old). The headline result this run is an indexing win and a major rich-results policy change.

### This Week's Metrics (Last 28 days)
Site totals: 1 click · 267 impressions · 0.4% CTR · avg position 84.0  (prior: 1 click · 216 impr · 0.5% CTR · pos 84.4)

| Page | Position | CTR | Impressions | vs Last Week (Position) | vs Last Week (CTR) |
|---|---|---|---|---|---|
| / (homepage) | 6.7 | 16.7% | 6 | +1.1 (worse) | -3.3pp |
| /house-flipping-cost-estimator | 86.3 | 0% | 177 | -0.3 (better) | 0 |
| /hard-money-loan-calculator | 79.8 | 0% | 37 | +1.1 (worse) | 0 |
| /70-rule-calculator | 82.8 | 0% | 26 | 0 | 0 |
| /arv-calculator.html | 82.4 | 0% | 14 | 0 | 0 |
| /arv-calculator | 88.0 | 0% | 12 | 0 | 0 |
| /70-rule-calculator.html | 79.2 | 0% | 10 | 0 | 0 |
| /brrrr-calculator | 3.0 | 0% | 1 | 0 | 0 |
| /pricing | 10.0 | 0% | 1 | new | new |
| /fix-and-flip-calculator | indexed | — | 0 | now on Google | — |
| /house-flipping-profit-calculator | indexed | — | 0 | now on Google | — |
| /real-estate-roi-calculator | indexed | — | 0 | now on Google | — |
| /rental-cash-flow-calculator | indexed | — | 0 | now on Google (H3 ✅) | — |

Top queries by impressions: house flipping calculator (43), flipping house calculator (17), real estate flip calculator (17), fix and flip loan calculator (16), house flipping cost calculator (16), home flipping calculator (13), home flip calculator (13), flipper calculator (12), flipping calculator (12), arv calculator (10).

### Retrospective — Prior Hypotheses (set 2026-06-14)
- /house-flipping-cost-estimator: "house flipping cost breakdown" 53 → sub-40 (3 wks); page impressions 137 → 180+ (4 wks). → ⏳ Too early (~1 day old). Early signal is positive: page impressions already moved 137 → 177, tracking toward the 180+ target.
- /house-flipping-cost-estimator: new long-tail impressions for "cost to flip a house" (pos 76) and "how to estimate cost of flipping a house" (pos 69), 2–3 wks. → ⏳ Too early.
- /rental-cash-flow-calculator: "not indexed" → "URL is on Google" within 1–2 wks. → ✅ Confirmed. Live URL Inspection shows "URL is on Google" within ~1 day of the indexing request — well ahead of the 1–2 week prediction. Lesson banked in the playbook.

### Changes Made
- No page-content edits this run. house-flipping-cost-estimator.html was edited only 1 day ago (commit caa6fa8); editing it again now would stack changes inside the same evaluation window and destroy attribution, so it is deliberately held to mature. All other target pages are content-rich (P5 = note only) and are constrained by domain age, not by on-page quality.
- No indexing requests required: live URL Inspection confirms all four pages the 6/11 coverage report listed as "Discovered – currently not indexed" (fix-and-flip, house-flipping-profit, real-estate-roi, rental-cash-flow) are now "URL is on Google." The Pages coverage report lags live status by several days.
- Only commit this run is this changelog update.

### Hypotheses — 2026-06-15
- Carry forward all three 2026-06-14 hypotheses (still maturing; re-evaluate next week).
- The four newly-indexed pages (fix-and-flip, house-flipping-profit, real-estate-roi, rental-cash-flow) begin receiving their first impressions within 1–2 weeks now that they are on Google.
- Head-term gap: "house flipping calculator" (43 impressions — the single largest query, ranking ~pos 89) is not the primary target of any page. Candidate action next week: retarget the homepage or the now-indexed /fix-and-flip-calculator to own this head term, once that page has stabilized post-indexing. No change made this week to avoid stacking on a just-indexed page.

### No Action Needed
- / (homepage): Position 6.7, CTR 16.7% — healthy.
- /brrrr-calculator (3.0) and /pricing (10.0): position 1–10 but only 1 impression each — too little data to act.

### Crawl Issues
- No new errors. The 5 "Redirect error" pages are all .html duplicates (fix-and-flip-calculator.html, house-flipping-profit-calculator.html, real-estate-roi-calculator.html, rental-cash-flow-calculator.html, house-flipping-cost-estimator.html); their clean URLs are canonical and indexing fine, so these are benign.
- STILL FLAGGED FOR MANUAL REVIEW (vercel.json is off-limits): duplicate indexing of /arv-calculator.html + /arv-calculator and /70-rule-calculator.html + /70-rule-calculator continues to split impressions across two URLs each. Recommend confirming canonical tags + redirects so only the clean URL is indexed.

### Core Web Vitals
- "Not enough usage data in the last 90 days" for both Mobile and Desktop. Expected for a site under ~90 days old. No action; flagged only for awareness.

### Rich Results / FAQ Status
- ⚠️ MAJOR POLICY CHANGE: The GSC FAQ report now shows "As of May 7, 2026, FAQ rich results are no longer appearing in Google Search. The FAQ rich result report will be removed in June 2026." FAQPage schema no longer earns rich snippets.
- Valid FAQPage schema is still present (e.g., /house-flipping-cost-estimator with 7 questions, /fix-and-flip-calculator) — harmless, but it is no longer a SERP-CTR lever.
- This retires the prior "add FAQPage schema to /real-estate-roi-calculator for rich results" opportunity. FAQ *content* still helps topical relevance and long-tail text matching — keep writing it for users and relevance, not for snippets.

### GitHub / Deployment Status
- Only commit this run: this changelog. No page deployments triggered. No failures.

### Seasonal Angle
- Jun–Aug renovation season continues (rehab cost estimation, contractor budgets). No new content this week, so no new seasonal copy was applied; last week's renovation-season FAQ on /house-flipping-cost-estimator remains live and is the page to watch.

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

## Proven Playbook (updated 2026-06-15)
Cumulative confirmed lessons.
- ✅ Manual indexing requests work fast on this new site: /rental-cash-flow-calculator went from "Discovered – currently not indexed" to "URL is on Google" within ~24 hours of the request. Proactively request indexing for any discovered-not-indexed target page (up to ~10/day).
- ✅ The GSC "Pages" coverage report lags live status by several days — always confirm a page's true index state with live URL Inspection before acting. Four pages flagged "not indexed" on the 6/11 report were already on Google by 6/15.
- ⚠️ FAQ rich results were deprecated by Google on 2026-05-07 (report removed June 2026). FAQPage schema no longer produces rich snippets — do not predict CTR gains from FAQ rich results; treat FAQ as on-page text relevance only.
- Don't stack edits: avoid editing a page (or a page just indexed) within the same 1–3 week hypothesis-evaluation window — it destroys attribution for the prior change.

Working principles still under test (from baseline):
- The site is brand-new (~1–2 weeks of impressions); most target pages rank deep (position 75–95) due to low domain authority. Expect gradual improvement, not jumps.
- Many impressions come from generic "house flipping calculator" variants — no page targets this head term directly. Open opportunity to claim it.
- Both .html and clean URLs are indexed for /arv-calculator and /70-rule-calculator, splitting signals; consolidating to clean URLs (canonical + redirects via vercel.json — manual) should concentrate ranking strength.
- Internal links drive crawl discovery; ensure every target page is linked from at least one indexed page.

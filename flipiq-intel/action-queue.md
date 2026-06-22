# FlipIQ Action Queue

Agents write recommended actions here. Mission Control reads this file to populate the Opportunity Radar.
When Jeff approves an item, the relevant agent executes it on its next run and marks it done.

**Format:** Each item is wrapped in ACTION_START / ACTION_END.
**Status values:** `pending` | `done` | `denied`

**Rules for agents writing to this queue:**
- Only add items that genuinely need Jeff's approval before execution
- Never add items you already executed this run — those go in the changelog
- Max 3 new items per run
- If nothing needs approval, skip the queue entirely

---

<!-- New items are appended below this line -->
ACTION_START
id: consolidate-duplicate-arv-70rule-urls-20260622
priority: high
title: Consolidate duplicate .html and clean URLs for /arv-calculator and /70-rule-calculator via vercel.json
description: GSC shows both /arv-calculator and /arv-calculator.html, and both /70-rule-calculator and /70-rule-calculator.html, indexed separately — splitting impressions and ranking signal across two URLs each (persisting across all three weekly runs). The fix is canonical tags and/or 301 redirects in vercel.json so only the clean URL is indexed; vercel.json is off-limits to this agent, so it needs your approval/edit. Expected impact: consolidating ranking strength should lift the clean URLs' positions and concentrate their ~25 combined impressions, improving the odds these pages climb off page 8.
agent: flipiq-seo-manager
surfaced: 2026-06-22
status: pending
ACTION_END

ACTION_START
id: own-house-flipping-calculator-head-term-20260622
priority: high
title: Decide which page should own the head term 'house flipping calculator' (117 impressions, no owner)
description: 'house flipping calculator' is by far the largest single query (117 impressions in 28 days, up from 43, ranking ~position 89) and no page targets it as a primary keyword — the biggest blocked demand on the site. Options: (a) retarget the homepage, (b) optimize the existing house-flipping-calculator.html (currently returns 404 as a clean URL / not indexed), or (c) build a dedicated head-term landing page. This is a content/structure decision needing your direction before the agent acts; once chosen, the agent can optimize the page and request indexing. Expected impact: capturing even a modest share of 117+ monthly impressions at a better position is the single largest near-term traffic opportunity.
agent: flipiq-seo-manager
surfaced: 2026-06-22
status: pending
ACTION_END

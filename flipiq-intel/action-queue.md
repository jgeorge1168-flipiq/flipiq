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
status: done
completed: 2026-09-10
verification: Verified complete 2026-09-10 from GSC. The .html duplicates no longer appear in the Pages report at all; impressions consolidated onto the clean URLs (/70-rule-calculator 1,130, was 26+11 split; /arv-calculator 348, was 13+14 split). The 5 remaining "Page with redirect" entries are the intended 301s.
ACTION_END

ACTION_START
id: own-house-flipping-calculator-head-term-20260622
priority: high
title: Decide which page should own the head term 'house flipping calculator' (117 impressions, no owner)
description: 'house flipping calculator' is by far the largest single query (117 impressions in 28 days, up from 43, ranking ~position 89) and no page targets it as a primary keyword — the biggest blocked demand on the site. Options: (a) retarget the homepage, (b) optimize the existing house-flipping-calculator.html (currently returns 404 as a clean URL / not indexed), or (c) build a dedicated head-term landing page. This is a content/structure decision needing your direction before the agent acts; once chosen, the agent can optimize the page and request indexing. Expected impact: capturing even a modest share of 117+ monthly impressions at a better position is the single largest near-term traffic opportunity.
agent: flipiq-seo-manager
surfaced: 2026-06-22
status: done
completed: 2026-09-10
verification: Verified complete 2026-09-10. A dedicated /house-flipping-calculator page exists and now carries 649 impressions; the head term itself grew 117 to 147 impressions and improved from position 89 to 80.5.
ACTION_END

ACTION_START
id: reauthenticate-revenue-systems-20260910
priority: high
title: Re-authenticate Stripe and the email platform so revenue can be measured again
description: Stripe (dashboard.stripe.com), MailerLite and Mailchimp all return login pages to the agent, so this is the third consecutive weekly run with zero revenue and subscriber data - MRR has never once been captured. The agent cannot enter credentials, so Jeff needs to sign in on this machine (or provide read-only API keys) and confirm which email platform is actually live, since the site was built on MailerLite but the agent skill references Mailchimp. Without this, the entire revenue half of the weekly report and every conversion-funnel benchmark stays blank indefinitely.
agent: flipiq-seo-manager
surfaced: 2026-09-10
status: pending
ACTION_END

ACTION_START
id: house-flipper-earnings-guide-20260910
priority: high
title: Build a dedicated "How Much Do House Flippers Make?" guide page to own the earnings cluster
description: Sorting all 182 GSC queries by position shows a coherent informational cluster - house flipping profit margin (26.7), average return on flipping a house (27.0), how much money do house flippers make (27.5), how much can you make flipping houses (35 impressions at 37.8) and about 15 more - sitting at positions 26-45, roughly 45 positions better than every commercial "X calculator" head term (74-92). Four FAQ entries were added to /house-flipping-profit-calculator this week as a low-risk test, but fully owning this cluster needs its own long-form page (e.g. /how-much-do-house-flippers-make) with ATTOM-style profit data, regional breakdowns and internal links to the profit and ARV calculators. This is a new URL and a new site section, so it needs Jeff's sign-off; it is currently the single most realistic path to FlipIQ's first non-homepage organic click.
agent: flipiq-seo-manager
surfaced: 2026-09-10
status: pending
ACTION_END

ACTION_START
id: restart-agent-fleet-20260910
priority: high
title: Investigate why the agent fleet stopped running for eleven weeks
description: The Daily Health agent's last log entry is 2026-06-27 and the Weekly Intelligence agent's last run was 2026-06-22 - an eleven-week gap in which no health checks, SEO runs or revenue snapshots happened at all. Only the Sunday Competitor Watch appears to have run (2026-09-10). Jeff should check the scheduled-task configuration for the daily health check and the Monday weekly run, confirm they are still enabled and firing, and decide whether the missed period needs any backfill. Site health during the gap is unknown, though GSC crawl data shows no damage was done.
agent: flipiq-seo-manager
surfaced: 2026-09-10
status: pending
ACTION_END

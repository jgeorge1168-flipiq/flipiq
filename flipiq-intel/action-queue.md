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

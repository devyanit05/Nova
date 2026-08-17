# Nova — Monetization

Nova is a personal Life OS first. This document describes a **future** business model. Nothing here is implemented. Shipping a paywall before Phase 3 (memory and insight) would be a product error.

Related: [vision.md](./vision.md), [roadmap.md](./roadmap.md).

---

## Stance

1. **The daily loop stays free.** Today, Schedule, Tasks, Water, Journal, and History are the reason the product exists. They are not a demo.
2. **Charge for leverage, not for oxygen.** Sync, extra devices, deeper finance, extra career packs, and an optional coach are leverage.
3. **Never hostage a streak, a journal, or export.** Those are user rights.
4. **No ads against journal or spend data.** That is a different company.
5. **India-first pricing.** The prototype thinks in ₹. Price in INR and one other currency, not only USD.

---

## What we will not sell

| Anti-pattern | Why it is banned |
|--------------|------------------|
| Streak freeze / repair | Turns honesty into a slot machine |
| "Unlock dark mode" | Theme is identity, not SKU |
| Hiding export behind Pro | Prevents leaving — violates the OS promise |
| Selling bank-connection as the only way to log spend | Manual log must remain |
| Attention ads, affiliate spam in the journal | Betrays privacy |
| Selling user life-data | Non-negotiable |
| Loot boxes, gems, gacha habits | Wrong genre |

---

## Who might pay

Nova's likely payer is the same person as the user: a working professional who already pays for one of Notion, a fitness app, or a budgeting app — and hates that they need all three.

They pay when Nova:

- follows them to a second device
- saves a Sunday night of "where did August go"
- replaces a scattered job-prep stack

They do not pay to check a water glass.

---

## Proposed tiers (Phase 4+)

### Nova Free — local or single-device

- Full daily loop (schedule, 10 tasks, water, journal)
- Basic finance log + monthly budget
- One career track
- History
- Export / import
- Reminders on that device

**Job:** Prove the OS. Remain useful forever if the user never pays.

### Nova Pro — synced life

Indicative price (to validate later, not to ship): **₹199–299 / month** or **₹1,499–1,999 / year**.

- Auth + encrypted sync
- Phone + web
- Push reminders
- Weekly review + monthly report
- Health extras (sleep, mood, movement)
- Multiple career / learning packs
- CSV import history, subscription calendar
- Rule-based insights

### Nova Coach — optional add-on

- AI day planning and weekly language review
- Explicit opt-in; journal sent only when the user asks
- Priced above Pro, or a metered pack
- Always "suggest, then confirm" — see [api-design.md](./api-design.md)

Family / pair sharing is **out of scope** until a single user is excellent.

---

## What sits in which tier

| Capability | Free | Pro | Coach |
|------------|------|-----|-------|
| Today loop | ● | ● | ● |
| Journal | ● | ● | ● |
| Export | ● | ● | ● |
| Basic spend + budget | ● | ● | ● |
| One career pack | ● | ● | ● |
| Sync / multi-device | | ● | ● |
| Weekly / monthly reviews | | ● | ● |
| Extra tracks & learning hub | | ● | ● |
| Advanced finance (goals vault, burn, subs calendar) | partial in prototype | ● | ● |
| AI suggestions | | | ● |

The current prototype already contains Pro-ish finance (burn rate, CSV, projections). When tiers exist, **do not rip those out of a user's local app**. Grandfather local features; gate *sync and new cloud compute*.

---

## Revenue shape

Preferred: **simple subscription**, annual discounted.

Acceptable later:

- Student / early-career discount
- One-time "lifetime" only if support cost is understood (usually a mistake)

Avoid:

- Per-workspace microtransactions
- Marketplace tax on third-party packs before we have a pack format
- Enterprise OKR Nova (different product)

---

## Trust economics

People will put salary, prayer, and interview panic in this app. Monetization must increase trust:

- Clear data policy before the first rupee
- Coach disclosure: what text leaves the device
- Cancel = keep Free loop + local export
- Downgrade never deletes history; it stops *new* Pro-only generation (e.g. next monthly report)

---

## When to think about this again

Do not implement billing until:

1. Phase 0 rebrand is done
2. A second human can use finance and career without editing source
3. Weekly review exists and someone other than the author wants it
4. Sync is real enough that Pro has a sentence: "Your day is on your phone."

Until then, the business model is: **build a product one person cannot live without, then ask if two people want it.**

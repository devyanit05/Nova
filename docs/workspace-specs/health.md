# Health

Parent: [workspaces.md](../workspaces.md)

**Question:** How is my body doing?

Health is physical wellbeing. It starts as water in the chrome and must become a full workspace without losing that one-tap habit.

---

## Purpose

Health is easy to forget when it lives in another app. Nova keeps the body on the same day as work and money — without becoming a hospital record.

---

## Living template

| Tracker | Unit | Status |
|---------|------|--------|
| Water | glasses or litres (v0: 8 glasses) | Shipped in chrome |
| Exercise | minutes / type | Planned (swim already appears as Life routine/task) |
| Sleep | hours + quality | Planned |
| Supplements | daily checklist | Planned |
| Medicines | schedule + adherence | Planned |
| Doctor visits | appointments | Planned (may also appear in Life admin) |
| Measurements | weight, etc. — sparse | Planned |
| Health dashboard | week/month rollup | Planned |
| Mood | 1–5 + tag | Planned; pair with [Recharge](./recharge.md) journal |

---

## Surfaces

### Water (always reachable)

- Goal: **8 glasses** (`WATER_GOAL`) in v0
- Click glass N → `waterCount = N` (fill up to that index)
- Label: `n / 8 glasses`
- Optional reminder every 15 / 30 / 45 / 60 minutes ([Settings](./settings.md))

Water may remain in shared chrome **and** appear inside this workspace. Do not remove the glasses when the Health tab ships.

### Rest of the workspace (planned)

A calm dashboard: today's water, last night's sleep, movement, meds due, a small trend — not a quantified-self cockpit.

---

## Prototype map (v0)

| Intended | Today in DayTrack |
|----------|-------------------|
| Water | Sidebar glasses + reminders |
| Everything else | Not a workspace; some items are Life tasks |

Completion ring in v0 **excludes** water. After Health exists, decide explicitly whether water enters the ring (recommended: yes, as a small weight) and document it here.

---

## Data

| Object | Lifetime |
|--------|----------|
| `waterCount` | Per day (0–8 in v0; allow 0–20 later) |
| Sleep, exercise, mood | Per day (planned) |
| Meds / supplements templates | Long-lived |
| Measurements | Sparse events |

---

## Rules

- Nova is not an EHR and not a diagnostic tool
- Reminders are opt-in
- Lock-screen notifications (future) must not leak intimate health detail by default
- Do not auto-log from wearables until the user connects them (far future)

---

## Out of scope

- Hospital records, lab PDF management as a product
- Clinical advice
- Body-shaming charts or "before/after" imagery

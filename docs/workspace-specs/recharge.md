# Recharge

Parent: [workspaces.md](../workspaces.md)

**Question:** Have I been kind to myself today?

Recharge is the workspace that is allowed to be unproductive. Rest, joy, and reflection live here so they are not squeezed into leftover minutes of Life or Career.

---

## Purpose

Not every meaningful moment needs a deliverable. If Nova only tracks output, it becomes the thing it claims not to be.

---

## Living template

### Slow moments

Read a novel, walk in the park, watch the sunset, sit on the terrace, stargazing.

### Body

Hair oil massage, face mask, skincare, stretching, spa day.

### Mind

Meditation, gratitude, journaling, digital detox, deep breathing.

### Comfort

Deep-sleep music, rain sounds, comfort movies, relaxing playlist.

### Joy list

Personal items that simply make the user happy — buy flowers, visit a café, crochet, watch the rain, read poetry.

Users delete and add freely. The categories are a starting shelf, not a wellness curriculum.

---

## Surfaces

### Rituals / joy list

Check off *today* without turning rest into a streak-shame machine. A day with zero Recharge checks is valid.

### Journal

Private prose for the date. Reflection, not publishing.

- Large textarea, autosave
- Prompt chips append, they do not wipe: Gratitude, Learnings, Feelings, Tomorrow
- Character count + last-saved time
- A blank journal is valid — placeholder copy, not a dead-end card

**Rules:**

- Never sync-clobber without a prompt (future)
- Never send journal text to analytics or an AI without an explicit action
- No share icon

Skincare / haircare that is *maintenance* may also appear on the Life schedule. Recharge is for care that restores, not for "another chore with a sunset emoji."

---

## Prototype map (v0)

| Intended | Today in DayTrack |
|----------|-------------------|
| Journal | `Journal` tab on Today |
| Joy list / rituals | Not built (some items are default Life tasks: skincare, prayer, walk) |
| Comfort kits | Not built |
| Mood | Not built — see [Health](./health.md) |

---

## Data

| Object | Lifetime |
|--------|----------|
| Journal text | Per day |
| Joy list / ritual template | Long-lived |
| Ritual checks | Per day |
| Comfort links / notes | Long-lived (optional) |

---

## Rules

- Do not gamify rest (no "recharge score" that guilt-trips an empty day)
- Dashboard may show a gentle "you have not logged a slow moment this week" — never a red fail
- Journal is the most sensitive surface in Nova; treat it that way in export, sync, and coach

---

## Out of scope

- Social sharing of journal or joy list
- Therapist replacement
- Auto-generated journal entries saved silently
- Meditation marketplace

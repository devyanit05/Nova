# Nova — Branding

Nova is a Life Operating System. The brand should feel like **night sky + instrument panel**: dark, precise, a little warm. Not a wellness pastel, not a neon crypto deck.

Product voice and UI rules: [vision.md](./vision.md), [ui-ux-principles.md](./ui-ux-principles.md).

---

## Name

**Nova** — a star that suddenly brightens. The metaphor is *increase in light*, not explosion.

- Use **Nova** in UI, docs, and repo language
- Do not use DayTrack in new copy (legacy name of the prototype)
- Do not stylize as NoVa, NOVA (except a logo lockup), or NovaOS in consumer UI
- Tagline options (pick one and keep it):
  - *A Life Operating System.*
  - *Plan. Track. Grow.*
  - *Build a Better You.*

Primary lockup line: **Nova**  
Primary supporting line: **A Life Operating System.**

---

## Logo

**Current:** Lightning emoji + wordmark (`⚡ DayTrack`). Temporary.

**Target mark:**

- A simple geometric star / burst that can work at 16px (favicon) and 128px
- Prefer a **single-color mark** that sits on the accent gradient
- Do not use a photoreal planet, a smiling mascot, or an astronaut
- Wordmark: "Nova" in Inter 700, tracking slightly open
- Clear space: one "N" height around the lockup
- Favicon: mark only, no word

Until a designed SVG exists, use a consistent unicode star (e.g. `✦` or `🌌` only in marketing, not in dense UI). Prefer `✦` in-product; reserve the milky-way emoji for README / banner.

**Banner:** `assets/banner.png` is referenced by the README and is not in the repo yet. Phase 0 should add a wide, dark banner: mark, name, tagline, no screenshot clutter.

---

## Color

Source of truth today: `index.css` `:root`.

### Dark (default)

| Token | Hex | Role |
|-------|-----|------|
| Background primary | `#0f0f1a` | App canvas |
| Background secondary | `#1a1a2e` | Sidebar / wells |
| Card | `#16213e` | Workspace cards |
| Input | `#0d1b30` | Fields |
| Text primary | `#e8e8f0` | Titles, values |
| Text secondary | `#a0a0c0` | Subtitles |
| Text muted | `#6b6b8d` | Hints |
| Accent primary | `#7c3aed` | Buttons, ring, focus |
| Accent hover | `#6d28d9` | |
| Accent secondary | `#06b6d4` | Info, second hue |
| Success | `#10b981` | Done, healthy remaining |
| Warning | `#f59e0b` | Streak, timers |
| Danger | `#ef4444` | Destructive, overspend |

**Brand gradient:** `#7c3aed → #06b6d4` at 135°.  
Use on the mark, progress fills, and rare hero moments — not on every card.

### Light

| Token | Hex |
|-------|-----|
| Background primary | `#f3f4f8` |
| Surface | `#ffffff` |
| Text primary | `#1a1a2e` |
| Text secondary | `#4a4a6a` |
| Text muted | `#8888a8` |
| Input | `#f0f1f5` |

Accents stay the same so the product is recognizable in daylight.

### Do not

- Introduce a third brand hue without updating this file
- Use pure `#000` or `#fff` for large surfaces
- Color-code every life category with a unique brand color

---

## Typography

**Family:** Inter (300–800), system UI fallback.

| Role | Weight | Notes |
|------|--------|-------|
| Product name | 700–800 | Sidebar wordmark |
| View titles | 700 | "Daily Journal" |
| Body | 400–500 | Lists, journal |
| Meta | 400 | Dates, `0 / 8 glasses` |
| Numbers | 600–700 | Money, streak, ring % |

Journal may later offer a dedicated reading size; do not switch the whole OS to a serif.

Monospace is allowed for the interview timer only.

---

## Shape and depth

- Radius: 8 / 12 / 16 / 24 (`sm` → `xl`)
- Cards: 16, buttons: 8–12
- Borders: white at 6% on dark, black at 7% on light
- Shadows: soft and dark, plus a purple glow only on the primary action or the ring
- Glass: `rgba(22, 33, 62, 0.7)` for overlays — use sparingly

---

## Iconography

v0 uses emoji in nav and categories. That is acceptable for a prototype.

**Target:**

- Nav: 4–5 consistent line icons (Today, History, Settings, plus future)
- Categories may keep emoji — they scan faster than a custom icon set
- Do not mix emoji and line icons in the same button

---

## Tone of voice

**We are:** clear, adult, specific, quietly encouraging.  
**We are not:** a hype startup, a drill sergeant, a therapist, a bank.

| Situation | Write | Avoid |
|-----------|-------|-------|
| Greeting | Good Morning, Devyani | Rise and grind, superstar |
| Empty | No expenses logged today | You haven't manifested abundance |
| Cap | Up to 10 tasks you set each day | Task slots remaining: 2!! |
| Money | Remaining / spent | Crush your bills |
| Career | Speak aloud and practice your delivery | Ace the grindset |
| Danger | Permanently delete all stored data | This action is super destructive 😱 |

Philosophy line, used rarely (README, about, empty History):

> Small improvements. Every day. For years.

---

## Sound and motion

- No brand jingle
- Optional soft tick on check (Phase 4, off by default)
- Motion curves: `cubic-bezier(0.4, 0, 0.2, 1)`
- Confetti palette must stay inside brand hues: purple, cyan, green, amber, red, pink

---

## Imagery

- Marketing: dark UI, one real Today screenshot, lots of negative space
- No stock photos of laptops on marble
- No before/after body photos for health
- Screenshots should use plausible but fictional money and journal text when public

---

## Brand don'ts

- DayTrack in any new user-facing string
- Comic Sans, Poppins-everywhere, or Inter + a random display face
- Purple text on navy without checking contrast
- Logo inside a circle inside a rounded square inside a glow
- Tagline stuffed into the sidebar under the wordmark (keep the chrome quiet)

# Finance

Parent: [workspaces.md](../workspaces.md)

**Question:** Am I becoming financially healthier?

Finance is awareness and planning — a ledger and a compass, not a bank and not accounting software.

---

## Purpose

Money is a life domain. It deserves daily and monthly resolution on the same OS as sleep and career, without replacing the user's bank.

---

## Living template

| Area | Default objects |
|------|-----------------|
| Monthly budget | Income + category caps |
| Expenses | Daily log |
| Savings / trip goals | Named target + month |
| Emergency fund | A goal, not a special vault type |
| Subscriptions | Recurring outflows |
| Investments | Monthly invested + educational projection |

v0 defaults (₹50,000 income, author category mix) must become user-owned.

---

## Surfaces

Finance may use **internal tabs**. Those tabs are views, not workspaces.

### Daily spends

- Transaction: description, amount, category
- Today's total
- Optional ICICI / HDFC **CSV** drop — parse in the client, do not keep the file

### Monthly budget

- Fixed monthly income
- Category budgets (v0: investments, PPF, rent, fuel, swimming, emergency, food, transport, shopping, bills, entertainment, health, education, other)
- Month spent, remaining
- Predictive burn-rate chart
- Rule-based "Finance Advisor" copy (not a model)

### Trips & goals

- Name, target amount, target month
- **Travel Mode:** new expenses can route to a trip vault instead of the monthly budget

### Subscriptions

- Recurring expenses
- Warning when "ghost" subs exceed ~5% of income

### Investments

- Monthly invested total
- 10-year projection at **12% YoY** — illustrative, not advice
- Compound growth chart

**Currency:** INR (₹) in v0. Multi-currency later.

Dashboard chrome "Spent" is **today**, not the month.

---

## Prototype map (v0)

| Intended | Today in DayTrack |
|----------|-------------------|
| All five views | `Spendings` / Finance Manager tabs |
| User-owned income & budgets | Hardcoded `DEFAULT_FINANCE` |
| Emergency fund | A budget category + optional goal |
| Splitwise-style shared bills | Not a goal |

---

## Data

| Object | Lifetime |
|--------|----------|
| Expenses | Per day (also queried by month) |
| Income, budgets, travel mode | Long-lived finance profile |
| Goals / vaults | Long-lived |
| Subscriptions | Long-lived |

Derived (do not store as source): month spent, remaining, burn series, 10-year projection, ghost-sub warning.

---

## Rules

- Nova does not store bank passwords
- CSV is one-shot import, not aggregation
- Projections are educational
- Advisor lines are suggestions, never moral verdicts
- Lock-screen notifications (future) must not show amounts by default

---

## Out of scope

- Full accounting, GST, tax filing
- Trading, crypto, brokerage
- Replacing the bank
- Credit-card aggregation without an explicit, later decision

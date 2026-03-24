---
term: "Churn Rate"
shortDefinition: "The percentage of customers or subscribers who cancel or stop using a product within a given period — the primary retention metric."
category: "Metrics"
difficulty: "beginner"
relatedTerms: ["customer-lifetime-value", "customer-acquisition-cost", "conversion-rate", "funnel-optimization"]
publishDate: "2026-03-24"
faqs:
  - question: "What is churn rate?"
    answer: "Churn rate is the percentage of customers who stop using or paying for a product within a given time period. Formula: Churn Rate = (Customers Lost in Period ÷ Customers at Start of Period) × 100. If you start a month with 500 customers and 25 cancel, your monthly churn rate is 5%. Churn is the most important retention metric for subscription businesses because it directly determines customer lifetime value — high churn means customers don't stay long enough to become profitable."
  - question: "What is a good churn rate for SaaS?"
    answer: "For B2B SaaS, monthly churn under 2% (about 22% annually) is generally considered acceptable, and under 0.5% monthly (about 6% annually) is excellent. For B2C subscription products, monthly churn of 4–6% is common. Enterprise SaaS typically achieves the lowest churn (under 1% monthly) due to switching costs and contract lengths. The benchmark that matters most is your own trend — declining churn is the goal regardless of absolute level."
  - question: "What is the difference between customer churn and revenue churn?"
    answer: "Customer churn measures the percentage of customers lost. Revenue churn (or MRR churn) measures the percentage of monthly recurring revenue lost. These diverge when customers are on different plan tiers. If you lose 10% of customers but they were all on your lowest plan, revenue churn might be only 3%. Conversely, if a few large accounts cancel, revenue churn can exceed customer churn. Net revenue retention — which factors in expansions from existing customers — is the most complete metric for SaaS health."
---

**Churn rate** is the percentage of customers (or subscribers, users, or revenue) that are lost within a defined time period.

**Formula:**
> **Churn Rate = (Customers Lost in Period ÷ Customers at Start of Period) × 100**

**Example:** 500 customers at start of month, 25 cancel → **5% monthly churn rate**

Churn is the primary retention metric for subscription businesses. It directly determines [Customer Lifetime Value](/cro-glossary/customer-lifetime-value/) — because a customer's value is the product of what they pay and how long they stay.

## Types of Churn

| Type | Measures | Formula |
|---|---|---|
| **Customer churn** | % of customers lost | Lost customers ÷ Starting customers |
| **Revenue churn (MRR churn)** | % of MRR lost from cancellations | Lost MRR from cancellations ÷ Starting MRR |
| **Net revenue churn** | MRR lost minus expansion revenue | (Lost MRR − Expansion MRR) ÷ Starting MRR |
| **Voluntary churn** | Active cancellations by customer | Tracked via cancellation surveys |
| **Involuntary churn** | Failed payments, expired cards | Tracked via payment failure data |

**Net revenue retention (NRR) > 100%** means existing customers are collectively spending more each period than you're losing — the hallmark of a healthy SaaS expansion model.

## Churn's Impact on LTV and Unit Economics

Churn is the primary driver of LTV:

> **LTV (simplified) = Average Monthly Revenue per Customer ÷ Monthly Churn Rate**

| Monthly Churn | LTV (€50/mo ARPU) |
|---|---|
| 10% | €500 |
| 5% | €1,000 |
| 2% | €2,500 |
| 1% | €5,000 |
| 0.5% | €10,000 |

Halving churn doubles LTV — with no change in pricing or new customer acquisition. This makes churn reduction one of the highest-ROI activities in a subscription business.

## Churn and the CAC:LTV Ratio

At 10% monthly churn, LTV is €500. If CAC is €400, the ratio is 1.25:1 — barely profitable, with no margin for product, support, or ops costs.

At 2% monthly churn, LTV is €2,500. Same CAC = 6.25:1 ratio — a healthy, scalable business.

The path to a fundable unit economics story is often churn reduction, not new customer acquisition.

## What Causes Churn

**Product-related:**
- Poor onboarding — customers never reach the "aha moment"
- Lack of perceived value — they don't use it enough to justify the cost
- Missing features that prompted signup

**Service-related:**
- Poor customer support responsiveness
- Unresolved technical issues

**External:**
- Budget cuts
- Company downsizing
- Competitor switching

**Involuntary:**
- Failed credit card payments (typically 20–40% of total churn)
- Account expiry without notification

## Reducing Churn: The CRO Connection

Churn reduction is the post-acquisition CRO problem. The same research-and-optimization methodology that improves signup conversion applies to improving activation and retention:

1. **Identify the churn point** — when in the customer lifecycle does churn peak?
2. **Research why** — exit surveys, cancellation interviews, usage data analysis
3. **Form hypotheses** — what changes to onboarding, engagement, or product would address root causes?
4. **Test and implement** — run experiments on onboarding sequences, in-app triggers, success check-ins

For voluntary churn specifically, exit survey data is the most actionable source. One question — "What was the primary reason you're cancelling?" — with 5–6 structured options plus free text, typically reveals patterns within 30–50 responses.

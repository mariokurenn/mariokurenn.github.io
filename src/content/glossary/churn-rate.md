---
term: "Churn Rate"
shortDefinition: "The percentage of customers or subscribers who cancel or stop using a product within a given period — the primary retention metric."
category: "Metrics"
difficulty: "beginner"
relatedTerms: ["customer-lifetime-value", "customer-acquisition-cost", "conversion-rate", "funnel-optimization"]
publishDate: "2026-03-24"
updatedDate: "2026-03-29"
faqs:
  - question: "What is churn rate?"
    answer: "Churn rate is the percentage of customers who stop using or paying for a product within a given time period. Formula: Churn Rate = (Customers Lost in Period ÷ Customers at Start of Period) × 100. If you start a month with 500 customers and 25 cancel, your monthly churn rate is 5%. Churn is the most important retention metric for subscription businesses because it directly determines customer lifetime value — at 5% monthly churn, the average customer stays 20 months; at 2%, they stay 50 months. Every percentage point of churn reduction has compounding revenue impact."
  - question: "What is a good churn rate for SaaS?"
    answer: "For B2B SaaS, monthly churn under 2% (approximately 22% annually) is generally considered acceptable, and under 0.5% monthly (about 6% annually) is excellent. For B2C subscription products, monthly churn of 4–6% is common given lower switching costs. Enterprise SaaS typically achieves the lowest churn (under 1% monthly) due to long contracts, deep integrations, and high switching costs. According to Paddle's 2024 SaaS metrics benchmark, median B2B SaaS monthly churn is 1.8% for businesses under $10M ARR and 0.7% for those over $10M ARR."
  - question: "What is the difference between customer churn and revenue churn?"
    answer: "Customer churn measures the percentage of customers lost. Revenue churn (or MRR churn) measures the percentage of monthly recurring revenue lost. These diverge when customers are on different plan tiers. If you lose 10% of customers but they were all on your lowest plan, revenue churn might be only 3%. Conversely, if a few large accounts cancel, revenue churn can exceed customer churn. Net revenue retention (NRR) — which factors in expansions, upsells, and downgrades from existing customers — is the most complete metric. An NRR above 100% means existing customers collectively spend more each period despite some churning."
  - question: "What causes the most churn?"
    answer: "The leading causes of voluntary churn are: (1) poor onboarding — customers who never reach the 'aha moment' or first value milestone churn within the first 30 days, accounting for 30–40% of all SaaS churn; (2) lack of product engagement — Totango research found customers using a product fewer than 3 times per month are 4× more likely to churn; (3) pricing misalignment — customers who feel they're not getting value relative to cost; (4) competitor switching — typically triggered by specific missing feature gaps; (5) involuntary churn from failed payments, which accounts for 20–40% of all SaaS churn and is often ignored."
  - question: "How does CRO apply to churn reduction?"
    answer: "CRO methodology applies directly to churn reduction — it's post-acquisition funnel optimization. The same research-and-test approach used to improve signup conversion applies to improving activation and retention: (1) identify where in the lifecycle churn peaks (early, mid, or at renewal), (2) run qualitative research — exit surveys, cancellation interviews, NPS detractor follow-ups, (3) form hypotheses about what changes would address root causes, (4) test onboarding sequence changes, in-app engagement triggers, and success check-in timing. Involuntary churn from failed payments is especially worth targeting — automated dunning sequences recover 20–40% of failed payments."
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

**Net revenue retention (NRR) > 100%** means existing customers are collectively spending more each period than you're losing — the hallmark of a healthy SaaS expansion model. Slack, Snowflake, and other high-NRR companies have consistently demonstrated that NRR above 130% enables growth even without net new customer acquisition.

## Churn's Impact on LTV and Unit Economics

Churn is the primary driver of LTV:

> **LTV (simplified) = Average Monthly Revenue per Customer ÷ Monthly Churn Rate**

| Monthly Churn | Average Customer Lifespan | LTV (€50/mo ARPU) |
|---|---|---|
| 10% | 10 months | €500 |
| 5% | 20 months | €1,000 |
| 2% | 50 months | €2,500 |
| 1% | 100 months | €5,000 |
| 0.5% | 200 months | €10,000 |

Halving churn doubles LTV — with no change in pricing or new customer acquisition. This makes churn reduction one of the highest-ROI activities in a subscription business.

## Churn Benchmarks by SaaS Stage

| Business stage | Median monthly churn | Notes |
|----------------|---------------------|-------|
| Early stage (under $1M ARR) | 3–7% | High experimentation period |
| Growth stage ($1–10M ARR) | 1.5–3% | Product-market fit improving |
| Scale stage ($10M+ ARR) | 0.5–1.5% | Enterprise contracts reduce churn |
| Enterprise SaaS | Under 1% | Long contracts, high switching costs |

*Source: Paddle 2024 SaaS Metrics Benchmark Report and OpenView Partners annual SaaS survey*

## Churn and the CAC:LTV Ratio

At 10% monthly churn, LTV is €500. If CAC is €400, the ratio is 1.25:1 — barely profitable, with no margin for product, support, or ops costs.

At 2% monthly churn, LTV is €2,500. Same CAC = 6.25:1 ratio — a healthy, scalable business with room to invest aggressively in growth.

The path to a fundable unit economics story is often churn reduction, not new customer acquisition.

## What Causes Churn

**Product-related:**
- Poor onboarding — customers never reach the "aha moment" or first value milestone
- Lack of perceived value — they don't use it enough to justify the cost
- Missing features that prompted signup

**Service-related:**
- Poor customer support responsiveness
- Unresolved technical issues that accumulate

**External:**
- Budget cuts or company downsizing
- Competitor switching triggered by specific feature gaps

**Involuntary:**
- Failed credit card payments (typically 20–40% of total churn)
- Account expiry without notification
- Dunning email sequences not sending

## Reducing Churn: The CRO Connection

Churn reduction is the post-acquisition CRO problem. The same research-and-optimization methodology that improves signup conversion applies to improving activation and retention:

1. **Identify the churn point** — when in the customer lifecycle does churn peak? (Days 1–14, Day 30, at first renewal?)
2. **Research why** — exit surveys, cancellation interviews, NPS detractor follow-ups, usage data analysis
3. **Form hypotheses** — what changes to onboarding, engagement, or product would address root causes?
4. **Test and implement** — run experiments on onboarding sequences, in-app triggers, and success check-ins

For voluntary churn specifically, exit survey data is the most actionable source. A single question — "What was the primary reason you're cancelling?" — with 5–6 structured options plus free text, typically reveals patterns within 30–50 responses.

Involuntary churn from failed payments is often overlooked and easily addressable. An automated dunning sequence (3–5 emails after payment failure, with direct update link) typically recovers 20–40% of at-risk MRR without any product changes.

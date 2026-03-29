---
term: "Bounce Rate"
shortDefinition: "The percentage of visitors who leave a website after viewing only one page without taking any action."
category: "Analytics"
difficulty: "beginner"
relatedTerms: ["conversion-rate", "landing-page", "funnel-optimization", "call-to-action", "exit-rate"]
publishDate: "2026-03-21"
updatedDate: "2026-03-29"
faqs:
  - question: "What is bounce rate?"
    answer: "Bounce rate is the percentage of website sessions where the visitor views only one page and leaves without any further interaction — no clicks, no form submissions, no navigation to other pages. In Google Analytics 4 (GA4), a bounce is specifically a session that lasts less than 10 seconds, has no conversion event, and has no second page view. This GA4 definition differs from Universal Analytics, where any single-page session was a bounce regardless of how long the visitor spent reading."
  - question: "What is a good bounce rate?"
    answer: "Average bounce rates vary significantly by page type and traffic source. Landing pages with paid traffic: 60–90% is normal. Blog posts: 65–90% (readers consume content and leave). Homepages: 25–55%. E-commerce product pages: 40–70%. Pricing pages: 45–65%. A high bounce rate is only a conversion problem if it's correlated with low conversions — some pages (like blog posts) are designed for visitors to consume content and leave. By traffic source: email has the lowest bounce rates (20–40%), paid social has the highest (60–90%)."
  - question: "What causes a high bounce rate?"
    answer: "The most common causes of high bounce rate: (1) message mismatch between ad/email and landing page — visitors arrive expecting something different from what they find; (2) slow page load speed — pages taking over 3 seconds lose 40%+ of mobile visitors before rendering; (3) poor mobile experience — content unreadable or CTA not visible without scrolling; (4) unclear value proposition — visitors can't understand what the page offers in 5 seconds; (5) wrong audience targeting — sending irrelevant traffic to any page. The first cause is the most fixable and most commonly overlooked."
  - question: "How is bounce rate different in GA4 vs Universal Analytics?"
    answer: "In Universal Analytics (UA), any single-page session counted as a bounce — if a visitor read a 2,000-word blog post for 8 minutes and then left, that was a bounce. In Google Analytics 4 (GA4), a bounce requires that the session lasted less than 10 seconds AND had no conversion event AND had no second pageview. GA4 also introduced 'engagement rate' (the inverse of bounce rate) as the default metric. This means GA4 bounce rates are typically lower than UA bounce rates for the same pages — not because users engaged more, but because the definition changed."
  - question: "What is the relationship between bounce rate and conversion rate?"
    answer: "High bounce rate and low conversion rate are often correlated but not causally linked — both can be caused by the same underlying problem (message mismatch, poor value proposition, wrong traffic). Reducing bounce rate does not automatically increase conversion rate: you can reduce bounce rate by making visitors click around the site without converting. The goal is qualified engagement — visitors who stay because they found what they wanted. Focus on reducing bounce rate for visitors from high-intent traffic sources (paid search, email) where mismatch is most costly."
  - question: "How do I find which pages have the biggest bounce rate problem?"
    answer: "In GA4: Reports → Engagement → Pages and Screens → sort by Bounce Rate. Cross-reference with sessions volume and conversion events. A page with 2% of traffic and 90% bounce rate matters less than a page with 25% of traffic and 75% bounce rate. Prioritize: (1) high-traffic pages with above-benchmark bounce rates, (2) pages that are key funnel steps (product pages, pricing, checkout), (3) pages where bounce rate has increased over a specific period (often indicates a technical issue or traffic quality change)."
---

**Bounce rate** is the percentage of website sessions where a visitor views only one page and leaves without taking any further action — no clicks to other pages, no form submissions, no conversions.

In Google Analytics 4 (GA4), a bounce is specifically defined as a session that:
- Lasts less than **10 seconds**, AND
- Includes **no conversion events**, AND
- Results in **no second page view**

This GA4 definition differs from Universal Analytics, where any single-page session was a bounce regardless of time spent.

## What Bounce Rate Actually Tells You

Bounce rate is a **contextual metric** — its meaning depends entirely on the page type and intent:

| Page Type | Expected Bounce Rate | What High Bounce Means |
|-----------|---------------------|----------------------|
| Landing page (paid traffic) | 60–90% | Often normal — single-goal pages |
| Homepage | 25–55% | May signal confusion or poor targeting |
| Blog post | 65–90% | Normal — readers consume and leave |
| Product page (e-commerce) | 40–70% | High may indicate pricing or copy issues |
| Pricing page | 45–65% | High = serious drop-off problem |
| Checkout page | 20–40% | Any high rate = critical issue |

A high bounce rate on a paid traffic landing page may be completely expected. A high bounce rate on a pricing page almost certainly signals a conversion problem.

## Bounce Rate by Traffic Source

Traffic source is the single biggest predictor of bounce rate — and understanding it prevents misdiagnosis:

| Traffic Source | Typical Bounce Rate |
|----------------|---------------------|
| Email (own list) | 20–40% |
| Branded search | 25–50% |
| Non-branded organic search | 45–70% |
| Paid search (intent-matched) | 50–70% |
| Social media (paid) | 65–85% |
| Display advertising | 70–90% |
| Referral traffic | 40–60% (varies widely) |

Email converts best and bounces least because subscribers already know and trust the brand. Paid social bounces most because targeting is demographic, not intent-based.

## Bounce Rate vs Exit Rate

These are often confused:

- **Bounce rate**: Sessions with only ONE page viewed (enters and leaves from same page)
- **Exit rate**: Percentage of visitors who leave from a specific page, regardless of how many pages they viewed first

A page can have a low bounce rate but a high [exit rate](/cro-glossary/exit-rate/) — it receives traffic from other pages but is the last page visited before leaving. Both metrics matter but signal different problems. See [Bounce Rate vs Exit Rate](/blog/bounce-rate-vs-exit-rate/) for the full comparison.

## What Causes High Bounce Rate?

**1. Message mismatch**
Your Facebook ad says "50% off running shoes" and the landing page headline says "Athletic Footwear Collection." Visitors don't see what they expected and leave immediately. This is the most common cause of high bounce rates on paid campaigns.

**2. Slow page load speed**
Pages loading over 3 seconds lose approximately 40% of mobile visitors before rendering. Every additional second of load time increases bounce rate by 20–30% (Google/SOASTA research, 2017).

**3. Poor mobile experience**
If text is too small to read without zooming, or the CTA isn't visible without scrolling, mobile visitors leave. With mobile representing 60–70% of web traffic, this is not a secondary concern.

**4. No clear next step**
Visitors arrive, consume the content, but see no obvious action to take. Bounce rates drop dramatically when a relevant CTA is visible above the fold on content pages.

**5. Wrong audience**
No page optimization fixes fundamentally misaligned traffic. Irrelevant visitors bounce regardless of page quality — and this problem must be solved at the audience or targeting level, not the page level.

## How to Reduce Bounce Rate

In order of impact:

1. **Fix message match** — Align landing page headline exactly with traffic source copy. This alone can reduce bounce rate by 20–40% on paid campaigns.
2. **Improve page speed** — Target Core Web Vitals scores of 90+ on mobile
3. **Add a relevant above-fold CTA** — Give visitors an obvious next step immediately visible
4. **Segment bounce rate by source** — Organic vs paid vs email often have very different rates; fix the worst-performing source first
5. **Run session recordings** — Watch where visitors scroll, hover, and click before leaving

Reducing bounce rate is often less about changing the page and more about fixing traffic quality or message alignment — a core focus of [CRO audits](/services/cro-audit/). For mobile-specific fixes, see [Mobile Conversion Rate Optimization](/blog/mobile-conversion-rate-optimization/).

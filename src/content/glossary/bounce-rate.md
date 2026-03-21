---
term: "Bounce Rate"
shortDefinition: "The percentage of visitors who leave a website after viewing only one page without taking any action."
category: "Analytics"
difficulty: "beginner"
relatedTerms: ["conversion-rate", "landing-page", "funnel-optimization", "call-to-action"]
publishDate: "2026-03-21"
faqs:
  - question: "What is bounce rate?"
    answer: "Bounce rate is the percentage of website sessions where the visitor views only one page and leaves without any further interaction — no clicks, no form submissions, no navigation to other pages. In Google Analytics 4, a bounce is specifically a session that lasts less than 10 seconds, has no conversion event, and has no second page view."
  - question: "What is a good bounce rate?"
    answer: "Average bounce rates vary by page type. Landing pages: 60–90% is normal (single-page, single-goal). Blog posts: 65–90% (visitors read, leave, return later). Homepages: 25–55%. E-commerce product pages: 40–70%. A high bounce rate is only a problem if it's correlated with low conversions — some pages are designed for visitors to consume content and leave."
  - question: "What causes a high bounce rate?"
    answer: "The most common causes of high bounce rate are: (1) message mismatch between ad/email and landing page — visitors arrive expecting something different, (2) slow page load speed — pages taking over 3 seconds lose 40%+ of visitors, (3) poor mobile experience — content unreadable or CTA not visible, (4) unclear value proposition — visitors can't understand what the page offers in 5 seconds, (5) wrong audience targeting — sending irrelevant traffic to any page."
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
| Product page | 40–70% | High may indicate pricing or copy issues |
| Pricing page | 45–65% | High = serious drop-off problem |

A high bounce rate on a paid traffic landing page may be completely expected. A high bounce rate on a pricing page almost certainly signals a conversion problem.

## Bounce Rate vs Exit Rate

These are often confused:

- **Bounce rate**: Sessions with only ONE page viewed (enters and leaves from same page)
- **Exit rate**: Percentage of visitors who leave from a specific page, regardless of how many pages they viewed first

A page can have a low bounce rate but a high exit rate — it receives traffic from other pages but is the last page visited before leaving. Both metrics matter but signal different problems.

## What Causes High Bounce Rate?

**1. Message mismatch**
Your Facebook ad says "50% off running shoes" and the landing page headline says "Athletic Footwear Collection." Visitors don't see what they expected and leave immediately.

**2. Slow page load speed**
Pages loading over 3 seconds lose approximately 40% of mobile visitors before rendering. Every additional second of load time increases bounce rate by 20–30%.

**3. Poor mobile experience**
If text is too small to read without zooming, or the CTA isn't visible without scrolling, mobile visitors leave.

**4. No clear next step**
Visitors arrive, consume the content, but see no obvious action to take. Bounce rates drop dramatically when a relevant CTA is visible above the fold.

**5. Wrong audience**
No page optimization fixes fundamentally misaligned traffic. Irrelevant visitors bounce regardless of page quality.

## How to Reduce Bounce Rate

In order of impact:

1. **Fix message match** — Align landing page headline exactly with traffic source copy
2. **Improve page speed** — Target Core Web Vitals scores of 90+ on mobile
3. **Add a relevant above-fold CTA** — Give visitors an obvious next step
4. **Segment bounce rate by source** — Organic vs paid vs email may have very different rates; fix the worst source first
5. **Run session recordings** — Watch where visitors scroll, hover, and click before leaving

Reducing bounce rate is often less about changing the page and more about fixing traffic quality or message alignment — a core focus of [CRO audits](/services/cro-audit/).

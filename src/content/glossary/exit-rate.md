---
term: "Exit Rate"
shortDefinition: "The percentage of sessions that ended on a specific page — different from bounce rate, as exits can follow multiple pageviews within the session."
category: "Analytics"
difficulty: "beginner"
relatedTerms: ["bounce-rate", "funnel-optimization", "conversion-rate", "landing-page", "session-recording"]
publishDate: "2026-03-21"
updatedDate: "2026-03-29"
faqs:
  - question: "What is the difference between exit rate and bounce rate?"
    answer: "Bounce rate measures single-page sessions — visitors who land on a page and leave without visiting any other page. Exit rate measures the percentage of all sessions that ended on a specific page, regardless of how many pages were visited before. A page with a 100% exit rate may be perfectly healthy (an order confirmation page is expected to have a near-100% exit rate — the transaction is complete). A high bounce rate is a problem only if visitors weren't supposed to leave immediately. A high exit rate on a critical funnel step (like a checkout page) is always a problem."
  - question: "What is a high exit rate?"
    answer: "Exit rate interpretation depends entirely on the page type. Confirmation and thank-you pages should have near-100% exit rates. Blog posts typically have 60–80% exit rates and that's normal. For key funnel pages: product pages above 60% warrant investigation; checkout steps above 40% indicate significant friction; pricing pages above 55% suggest objections aren't being addressed. The key question is: is this page supposed to be where sessions end? If not, high exit rate is a conversion problem."
  - question: "How do you reduce exit rate on a key funnel page?"
    answer: "The most effective exit rate reduction strategies: (1) Add a progress indicator on multi-step processes to show users how close they are to completion — reduces checkout abandonment by 10–20%; (2) Address the top objections on the page — exit surveys reveal what questions go unanswered; (3) Add a strong CTA with benefit-led copy — passive pages lose visitors; (4) Use exit-intent popups to catch users about to leave with a relevant offer; (5) Check page load speed — every 1-second delay increases exit rate by 5–7%; (6) Reduce form fields — each unnecessary field increases exit rate by 3–10%."
  - question: "Where do I find exit rate data in Google Analytics 4?"
    answer: "In GA4: Reports → Engagement → Pages and Screens. The report includes exits (count) by default. To calculate exit rate, create an Exploration report: use Page Path as a dimension and add Exits and Sessions as metrics, then calculate Exit Rate = Exits ÷ Sessions for each page. GA4 doesn't show exit rate as a built-in column in standard reports, unlike Universal Analytics which showed it directly. Looker Studio connected to GA4 makes this calculation easier to maintain as an ongoing report."
  - question: "How is exit rate different from funnel drop-off rate?"
    answer: "Exit rate measures the percentage of sessions ending on a specific page, across all traffic to that page. Funnel drop-off rate measures the percentage of visitors who reached a specific step in a defined funnel sequence but didn't proceed to the next step. A page can have a low exit rate overall (most visitors continue somewhere) but a high funnel drop-off rate (most visitors who should continue to checkout don't). Use funnel exploration reports in GA4 to measure funnel-specific drop-off, and exit rate reports for page-level diagnostic analysis."
---

**Exit rate** is the percentage of sessions that ended on a specific page — calculated as exits from that page divided by total pageviews of that page.

**Formula:** Exit Rate = (Exits from Page ÷ Total Pageviews of Page) × 100

If a product page receives 1,000 pageviews and 380 sessions end there, the exit rate is 38%.

## Exit Rate vs Bounce Rate

These two metrics are frequently confused:

| Metric | Definition | When It's a Problem |
|--------|-----------|---------------------|
| **Bounce rate** | Sessions with only one page visited | When the page is meant to drive further action |
| **Exit rate** | Sessions that ended on this page (any session length) | When the page is a key funnel step, not a natural endpoint |

A visitor who views 4 pages and then exits on your checkout page contributes to the **exit rate** of the checkout page, but not to its bounce rate. The bounce rate of the checkout page only includes visitors who arrived there as their first page — rare but possible.

For the full comparison, see [Bounce Rate vs Exit Rate](/blog/bounce-rate-vs-exit-rate/).

## Interpreting Exit Rate by Page Type

Exit rate is only meaningful in context:

**High exit rate is expected on:**
- Order confirmation / thank-you pages (near 100% — transaction complete)
- Contact page after form submission
- Blog posts (readers finish and leave)
- Blog category pages (visitors navigate to a post, read it, leave)

**High exit rate is a problem on:**
- Checkout steps (abandonment before payment)
- Product pages (visitors leaving before adding to cart)
- Pricing pages (visitors leaving without contacting)
- Onboarding steps (users dropping before activation)
- Cart page (visitors leaving before initiating checkout)

## Exit Rate Benchmarks by Page Type

| Page type | Acceptable exit rate | High (investigate above) |
|-----------|---------------------|--------------------------|
| Product page (e-commerce) | 40–55% | 60%+ |
| Cart page | 30–45% | 50%+ |
| Checkout step 1 | 25–40% | 45%+ |
| Checkout step 2 (payment) | 15–30% | 35%+ |
| Pricing page (SaaS) | 40–55% | 60%+ |
| Homepage | 40–60% | 65%+ |
| Blog post | 60–80% | Normal — no threshold |

## Finding High-Value Exit Pages

In Google Analytics 4, find exit rates under **Reports → Engagement → Pages and Screens**. Sort by exit count (not exit rate) and cross-reference with traffic volume.

**Prioritize exit rate fixes on:**
1. High-traffic funnel pages where exit = lost revenue
2. Pages immediately before conversion events (the step before checkout)
3. Pages where exit rate has increased over time (often indicates a technical issue or copy degradation)

**Analysis technique:** Segment exit rate by traffic source. A checkout page with 25% overall exit rate might have 15% exit rate for email traffic and 45% for paid social — revealing that paid social visitors have insufficient purchase intent for that page type.

## Diagnosing High Exit Rate

When a key funnel page has a high exit rate, use these diagnostics:

1. **Funnel analysis (GA4)** — Confirm the exit is causing revenue loss, not just session endings
2. **Session recordings** — Watch 20–30 sessions ending on this page; identify common patterns
3. **Heatmaps** — Where are visitors clicking (or not clicking) before exiting?
4. **Exit surveys** — Ask "What stopped you from completing your goal today?" directly on the page
5. **User testing** — Give 5 people the task of converting; observe where they get stuck

Exit rate analysis is a core component of [funnel optimisation](/cro-glossary/funnel-optimization/) and helps identify exactly where in the conversion journey visitors are abandoning. Combined with session recordings and exit surveys, it gives both the where and why needed to form testable hypotheses.

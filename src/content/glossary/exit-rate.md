---
term: "Exit Rate"
shortDefinition: "The percentage of sessions that ended on a specific page — different from bounce rate, as exits can follow multiple pageviews within the session."
category: "Metrics"
difficulty: "beginner"
relatedTerms: ["bounce-rate", "funnel-optimization", "conversion-rate", "landing-page"]
publishDate: "2026-03-21"
faqs:
  - question: "What is the difference between exit rate and bounce rate?"
    answer: "Bounce rate measures single-page sessions — visitors who land on a page and leave without visiting any other page. Exit rate measures the percentage of all sessions that ended on a specific page, regardless of how many pages were visited before. A page with a high exit rate may be perfectly normal (e.g., a checkout confirmation page is expected to have a near-100% exit rate). A page with a high bounce rate is a problem only if it's not supposed to be a session-ending page."
  - question: "What is a high exit rate?"
    answer: "Exit rate interpretation depends entirely on the page type. Confirmation and thank-you pages should have near-100% exit rates — that's expected. Blog posts typically have 60–80% exit rates and that's normal. For funnel pages (product pages, checkout steps, pricing pages), an exit rate above 40–50% warrants investigation. The key question is: is this page supposed to be where sessions end? If no, high exit rate indicates a conversion problem."
  - question: "How do you reduce exit rate on a key funnel page?"
    answer: "The most effective exit rate reduction strategies: (1) add a progress indicator on multi-step processes to show users how close they are to completion, (2) address the top objections on the page — often visitors exit because a question isn't answered, (3) add a strong CTA with benefit-led copy — passive pages lose visitors, (4) use exit-intent popups to catch users about to leave, (5) check page load speed — every 1-second delay increases exit rate by 5–7%. In checkout flows, reducing required form fields directly reduces exit rate."
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

A visitor who views 4 pages and then exits on your checkout page contributes to the **exit rate** of the checkout page, but not to its bounce rate.

## Interpreting Exit Rate by Page Type

Exit rate is only meaningful in context:

**High exit rate is expected on:**
- Order confirmation / thank-you pages (session complete)
- Contact page after form submission
- Blog posts (readers finish and leave)
- Homepage (many visitors leave from where they arrived)

**High exit rate is a problem on:**
- Checkout steps (abandonment at payment)
- Product pages (visitors leaving before adding to cart)
- Pricing pages (visitors leaving without contacting)
- Onboarding steps (users dropping before activation)

## Finding High-Value Exit Pages

In Google Analytics 4, find exit rates under **Reports → Engagement → Pages and Screens**. Sort by exit rate and cross-reference with traffic volume. A page with 2% of your traffic and 90% exit rate matters less than a page with 20% of traffic and 55% exit rate.

Prioritise exit rate fixes on:
1. High-traffic funnel pages
2. Pages immediately before conversion events
3. Pages where exit rate has increased over time

Exit rate analysis is a core component of [funnel optimisation](/cro-glossary/funnel-optimization/) and helps identify exactly where in the conversion journey visitors are abandoning — the first step in fixing it.

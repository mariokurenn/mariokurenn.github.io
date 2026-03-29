---
term: "Micro-Conversion"
shortDefinition: "A small, intermediate action a visitor takes on the path to the primary conversion goal — newsletter signup, video play, or add-to-cart before purchase."
category: "CRO Strategy"
difficulty: "intermediate"
relatedTerms: ["conversion-rate", "funnel-optimization", "call-to-action", "session-recording"]
publishDate: "2026-03-21"
updatedDate: "2026-03-29"
faqs:
  - question: "What is a micro-conversion?"
    answer: "A micro-conversion is any small, measurable action a visitor takes that indicates progress toward the primary conversion goal (the macro-conversion). Examples: newsletter signup before purchase, adding to wishlist before adding to cart, downloading a resource before requesting a demo, watching a product video before buying. Micro-conversions matter because they indicate intent, allow remarketing, and help you optimise the full funnel rather than just the final step — especially valuable when macro-conversion volume is too low to run statistically valid A/B tests."
  - question: "What is the difference between micro and macro conversions?"
    answer: "A macro-conversion is the primary business goal: a purchase, a booked call, a subscription signup. A micro-conversion is an intermediate step that leads toward that goal: email signup, add-to-cart, video view, PDF download, pricing page visit. Both should be tracked. Improving micro-conversion rates improves your pipeline and gives you more data points for optimization. Crucially, micro-conversions allow you to run A/B tests on higher-volume events when macro-conversion volume is too low — giving you valid results 3–10× faster."
  - question: "How do you use micro-conversions in CRO?"
    answer: "Three main applications: (1) Tracking — set up micro-conversion events in GA4 to measure them alongside macro-conversions, giving you a fuller picture of funnel health and where specifically visitors drop off. (2) Remarketing — visitors who complete micro-conversions (add-to-cart, visit pricing) are 3–5× higher-intent than general site visitors; target them with specific messaging. (3) Testing — when macro-conversion volume is low (under 100/month), test against micro-conversion metrics like add-to-cart rate or demo request rate for faster, statistically valid insights."
  - question: "Which micro-conversions are most valuable to track?"
    answer: "The most valuable micro-conversions to track depend on business type. For e-commerce: add-to-cart (strong purchase intent), begin-checkout (higher intent), wishlist add (lower intent but trackable). For SaaS: pricing page visit, free trial signup, feature page view, demo request. For B2B lead gen: content download, webinar registration, newsletter signup, contact page visit. In GA4, these can be set up as custom events and marked as 'key events' to track alongside your primary conversion. The most valuable are those with the highest correlation to eventual macro-conversion."
  - question: "Can I use micro-conversions as A/B test metrics?"
    answer: "Yes — micro-conversions as test metrics are one of the most practical solutions for low-traffic sites. If your site converts 50 purchases/month, reaching statistical significance on purchase rate requires 6+ months per test. But if you have 350 add-to-carts/month, you can test against that metric and get results in 2–3 weeks. The key requirement: the micro-conversion must correlate strongly with the macro-conversion. Add-to-cart rate is a good proxy for purchase rate. Scroll depth alone is not — many visitors scroll without any intent to buy."
---

**Micro-conversions** are small, intermediate actions that visitors take on their journey toward the primary conversion goal (the **macro-conversion**). They indicate engagement and intent without representing the final desired outcome.

## Macro vs Micro Conversions

| Macro-conversion (primary goal) | Related micro-conversions |
|--------------------------------|--------------------------|
| Purchase | Add-to-cart, wishlist add, checkout initiation |
| Demo request | Pricing page visit, resource download, email signup |
| Newsletter subscription | Blog post read, scroll depth >70% |
| Free trial signup | Feature page view, pricing page visit, FAQ engagement |
| Contact form submission | Pricing page visit, case study view, calculator use |

## Why Micro-Conversions Matter in CRO

### 1. Funnel visibility
Tracking only macro-conversions hides where users drop off. Tracking micro-conversions reveals the exact funnel step causing the most loss.

**Example:** If 1,000 visitors land on a product page:
- 350 add to cart (35% micro-CVR)
- 180 initiate checkout (18% micro-CVR)
- 90 complete purchase (9% macro-CVR)

The biggest drop is at checkout initiation → completion (50% drop). That's where to focus optimization, not on the product page.

### 2. Testing with low-volume macro-conversions
If your site converts 50 purchases per month, you can't run statistically valid A/B tests on purchase rate — you'd need 6+ months per test. But if you have 350 add-to-carts per month, you can test against that metric and get results in 2–3 weeks.

**Required monthly volume for valid tests:**

| Metric | Min conversions/mo for testing | Test duration at this minimum |
|--------|-------------------------------|-------------------------------|
| Macro-conversion (purchase) | 200+ | 2–4 weeks |
| Add-to-cart | 500+ | 2–4 weeks |
| Checkout initiation | 300+ | 2–4 weeks |
| Form start | 1,000+ | 2–4 weeks |

*Assumes 20% MDE, 80% power, 95% significance*

### 3. Remarketing audiences
Visitors who complete micro-conversions are higher intent than general traffic. An add-to-cart remarketing audience converts 3–5× better than general site visitors. Pricing page visitors convert 2–3× better than blog readers. Segmenting remarketing by micro-conversion completed allows highly targeted messaging.

## Micro-Conversions to Track in GA4

Set these up as custom events in Google Analytics 4:
- `add_to_cart` (e-commerce — built-in recommended event)
- `begin_checkout` (e-commerce — built-in recommended event)
- `scroll` — 50% and 75% depth on key landing pages
- `video_play` — on product or explainer videos
- `form_start` — when user begins filling a form (built-in)
- `outbound_click` — clicks to external booking tools (e.g., Calendly)
- `file_download` — PDF guides or resources
- `pricing_page_view` — custom event for SaaS

Mark the most intent-correlated as "key events" in GA4 to differentiate them from minor engagement events.

## The Micro-Conversion Hierarchy

Not all micro-conversions are equally predictive of the macro-conversion. Build a hierarchy based on conversion rate correlation:

| Micro-conversion | Correlation to macro (typical) | Use for |
|------------------|-------------------------------|---------|
| Begin checkout | Very high (70–80% convert) | Testing, targeting |
| Add to cart | High (25–35% purchase) | Testing, targeting |
| Pricing page view | Medium (10–20% convert) | Targeting only |
| Blog post read | Low (1–3% convert) | Awareness only |
| Video play | Variable | Testing if strong evidence |

Micro-conversion tracking transforms your analytics from a rearview mirror into a live diagnostic tool — and is a core part of any [CRO programme](/services/cro-audit/).

---
term: "Micro-Conversion"
shortDefinition: "A small, intermediate action a visitor takes on the path to the primary conversion goal — newsletter signup, video play, or add-to-cart before purchase."
category: "CRO Strategy"
difficulty: "intermediate"
relatedTerms: ["conversion-rate", "funnel-optimization", "call-to-action", "cart-abandonment"]
publishDate: "2026-03-21"
faqs:
  - question: "What is a micro-conversion?"
    answer: "A micro-conversion is any small, measurable action a visitor takes that indicates progress toward the primary conversion goal (the macro-conversion). Examples: newsletter signup before purchase, adding to wishlist before adding to cart, downloading a resource before requesting a demo, watching a product video before buying. Micro-conversions matter because they indicate intent, allow remarketing, and help you optimise the full funnel rather than just the final step."
  - question: "What is the difference between micro and macro conversions?"
    answer: "A macro-conversion is the primary business goal: a purchase, a booked call, a subscription signup. A micro-conversion is an intermediate step that leads toward that goal: email signup, add-to-cart, video view, PDF download, pricing page visit. Both should be tracked. Improving micro-conversion rates improves your pipeline and gives you more data points for optimisation — especially useful when macro-conversion volume is too low to run statistically significant A/B tests."
  - question: "How do you use micro-conversions in CRO?"
    answer: "Three main applications: (1) tracking — set up micro-conversion events in GA4 to measure them alongside macro-conversions, giving you a fuller picture of funnel health, (2) remarketing — visitors who complete micro-conversions (add-to-cart, visit pricing) are higher-intent; target them with specific messaging, (3) testing — when macro-conversion volume is low (under 100/month), test against micro-conversion metrics like add-to-cart rate or demo request rate for faster, statistically valid insights."
---

**Micro-conversions** are small, intermediate actions that visitors take on their journey toward the primary conversion goal (the **macro-conversion**). They indicate engagement and intent without representing the final desired outcome.

## Macro vs Micro Conversions

| Macro-conversion (primary goal) | Related micro-conversions |
|--------------------------------|--------------------------|
| Purchase | Add-to-cart, wishlist add, checkout initiation |
| Demo request | Pricing page visit, resource download, email signup |
| Newsletter subscription | Blog post read, scroll depth >70% |
| Free trial signup | Feature page view, pricing page visit, FAQ engagement |

## Why Micro-Conversions Matter in CRO

### 1. Funnel visibility
Tracking only macro-conversions hides where users drop off. Tracking micro-conversions reveals the exact funnel step causing the most loss.

**Example:** If 1,000 visitors land on a product page:
- 350 add to cart (35% micro-CVR)
- 180 initiate checkout (18% micro-CVR)
- 90 complete purchase (9% macro-CVR)

The biggest drop is at checkout initiation → completion. That's where to focus optimisation, not on the product page.

### 2. Testing with low-volume macro-conversions
If your site converts 50 purchases per month, you can't run statistically valid A/B tests on purchase rate — you'd need 6+ months per test. But if you have 350 add-to-carts per month, you can test against that metric and get results in 2–3 weeks.

### 3. Remarketing audiences
Visitors who complete micro-conversions are higher intent than general traffic. An add-to-cart audience converts 3–5× better than general site visitors in remarketing campaigns.

## Micro-Conversions to Track in GA4

Set these up as custom events in Google Analytics 4:
- `add_to_cart` (e-commerce — built-in)
- `begin_checkout` (e-commerce — built-in)
- `scroll` — 50% and 75% depth on key pages
- `video_play` — on product or explainer videos
- `form_start` — when user begins filling a form
- `outbound_click` — clicks to external booking tools
- `file_download` — PDF guides or resources

Micro-conversion tracking transforms your analytics from a rearview mirror into a live diagnostic tool — and is a core part of any [CRO programme](/services/cro-audit/).

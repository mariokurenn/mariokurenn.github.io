---
term: "Average Order Value (AOV)"
shortDefinition: "The average amount spent per transaction — a key revenue metric multiplied directly by conversion rate to calculate overall revenue."
category: "Metrics"
difficulty: "beginner"
relatedTerms: ["conversion-rate", "revenue-per-visitor", "customer-lifetime-value", "funnel-optimization"]
publishDate: "2026-03-24"
updatedDate: "2026-03-29"
faqs:
  - question: "What is average order value (AOV)?"
    answer: "Average order value (AOV) is the average revenue generated per completed transaction. Formula: AOV = Total Revenue ÷ Number of Orders. If a store generates €50,000 in revenue from 1,000 orders, the AOV is €50. AOV is one of three core levers of e-commerce revenue (alongside traffic and conversion rate) — increasing any one of them by 20% increases total revenue by 20%, all else being equal. The Shopify 2024 industry report found average e-commerce AOV globally is approximately €85–€120 depending on category."
  - question: "How do I increase average order value?"
    answer: "The five highest-impact AOV tactics: (1) Order-value-based free shipping threshold — 'Add €12 more for free shipping' increases average basket size by 10–30% when set 15–20% above current AOV. (2) Product upsells — offer a premium version or meaningful add-on at checkout. (3) Cross-sells — 'Customers who bought X also bought Y' powered by actual co-purchase data. (4) Product bundles — bundle related items at a slight discount (10–15%) to increase perceived value. (5) Quantity discounts — 'Buy 3, save 15%.' These work because they target buyers who have already decided to purchase."
  - question: "What is the relationship between AOV and conversion rate?"
    answer: "AOV and conversion rate together determine revenue per visitor: Revenue Per Visitor (RPV) = Conversion Rate × AOV. A site with 2% CVR and €60 AOV generates €1.20 per visitor. Raising CVR to 3% (same AOV) generates €1.80/visitor. Raising AOV to €90 (same CVR) also generates €1.80/visitor. In CRO, both levers matter — but they require different interventions and often have different traffic volume requirements to test effectively. AOV improvements often require less traffic than CVR tests."
  - question: "What is a good AOV for e-commerce?"
    answer: "AOV varies significantly by category: Fashion and apparel average €80–€120. Electronics average €200–€400. Beauty and personal care average €40–€70. Home and garden average €100–€150. Pet care average €50–€80. The most useful benchmark is your own AOV trend over time compared to your category average. A rising AOV trend alongside stable conversion rate is a strong sign that merchandising and upsell strategies are working."
  - question: "Should I prioritize AOV or conversion rate optimization?"
    answer: "Prioritize whichever has the larger gap from benchmark — but in practice, the sequence matters. AOV optimization tactics (upsells, cross-sells, bundles) work best on a funnel that's already converting reasonably well. If conversion rate is critically low, every visitor who abandons is a visitor your AOV tactics never reached. Fix conversion rate bottlenecks first; layer in AOV strategies once a baseline checkout flow is performing acceptably. The exception: if free shipping threshold changes are easy to implement, deploy them immediately — they affect both AOV and checkout completion rate simultaneously."
  - question: "How does traffic source affect AOV?"
    answer: "Traffic source has a significant impact on AOV — often more than page-level optimisation. Email (own list) generates 2–4× the AOV of paid social traffic on average, because email subscribers are typically repeat customers with established trust and higher intent. Branded search converts with higher AOV than non-branded search because brand-seekers know the product range and are less price-sensitive. Paid social often drives the lowest AOV because audiences are discovery-mode, not purchase-ready. Segment AOV by traffic source in your analytics before running AOV optimisation tests — a 'flat' average AOV often hides a bimodal distribution between email (high) and social (low)."
  - question: "What is revenue per visitor and how does it differ from AOV?"
    answer: "Revenue Per Visitor (RPV) = Conversion Rate × AOV. AOV only measures what buyers spend; RPV measures what each visitor is worth on average, including non-buyers. RPV is the correct optimisation target for A/B tests on pages that could affect both conversion rate and basket size (product pages, checkout, upsell flows), because a test that increases CVR but reduces AOV might be a net revenue loss. Always track both CVR and AOV as metrics in any test where upsell or cross-sell elements are involved."
---

**Average Order Value (AOV)** is the average revenue generated per completed transaction.

**Formula:**
> **AOV = Total Revenue ÷ Number of Orders**

**Example:** €120,000 revenue from 2,400 orders = **€50 AOV**

AOV is one of three multipliers of total revenue (alongside traffic and conversion rate). Increasing any one of them increases revenue proportionally — making AOV optimization an often-underused lever in e-commerce CRO programs.

## The Revenue Formula

Revenue = Traffic × Conversion Rate × AOV

| Lever | Current | 20% increase | Revenue impact |
|---|---|---|---|
| Traffic | 50,000/mo | 60,000/mo | +€20,000/mo |
| CVR | 2.5% | 3.0% | +€20,000/mo |
| AOV | €80 | €96 | +€20,000/mo |

All three produce the same revenue increase — but AOV improvements often require less traffic and simpler implementation than CVR improvements. More importantly, AOV and CVR improvements compound: if you improve both by 20%, total revenue increases by 44% (1.2 × 1.2 = 1.44).

For a complete breakdown of how these three levers interact, see [How to Calculate Conversion Rate](/blog/how-to-calculate-conversion-rate/).

## AOV Benchmarks by E-commerce Category

| Category | Average AOV (2024) |
|----------|-------------------|
| Electronics | €200–€400 |
| Home & garden | €100–€150 |
| Fashion & apparel | €80–€120 |
| Sports & outdoors | €70–€110 |
| Beauty & personal care | €40–€70 |
| Food & beverage | €35–€65 |
| Pet care | €50–€80 |

*Source: Shopify and Klaviyo 2024 industry benchmarks. Varies significantly by traffic source — email generates 2–4× the AOV of social media traffic.*

For broader context on how e-commerce benchmarks vary by sector, see [Conversion Rate Benchmarks by Industry](/blog/conversion-rate-benchmarks-by-industry/).

## Strategies to Increase AOV

### Free Shipping Threshold

Setting a free shipping threshold slightly above the current AOV is one of the highest-ROI AOV tactics. If AOV is €45, a "Free shipping on orders over €55" threshold creates strong motivation to add an extra item.

**Implementation note:** Use dynamic cart messaging — "Add €8 more for free shipping" rather than just displaying the threshold. The progress indicator increases urgency and specificity. [Baymard Institute](https://baymard.com/blog/cart-abandonment-rate) data shows cart messaging that shows the gap to the threshold outperforms static threshold messaging by 20–35%.

Optimal threshold setting: 15–20% above current AOV. Setting it too high (more than 40% above AOV) reduces the nudge effect because the gap feels unachievable. Test threshold levels as a dedicated A/B test before committing.

### Product Upsells

At checkout or on the product page, present a premium version of the item in the cart: "Upgrade to Pro — includes X, Y, Z — for €15 more."

Effective upsells:
- Clear incremental value proposition (what more do you get?)
- Price differential feels small relative to the base purchase
- Single click to accept (no re-entering payment details)
- Relevant to the item already in cart, not generic

Upsell timing matters: pre-checkout upsells (on the product page before add-to-cart) convert better for considered purchases. Post-add-to-cart upsells (shown after adding to cart, before checkout) convert better for impulse categories.

### Order Bumps (Checkout Add-ons)

A single-checkbox add-on at checkout, priced at 10–30% of the base order value. Because the visitor has already committed to buying, the resistance to a small incremental purchase is low. Post-purchase upsells (shown on the thank-you page) can also increase AOV by 15–25% when the offer is relevant.

The key to effective order bumps: position them as protection or enhancement, not as a separate purchase. "Add 2-year warranty for €12" or "Include gift wrapping for €5" read as logical extensions of the purchase decision already made.

### Cross-Sells

Recommendations of genuinely complementary products — ideally based on purchase data, not just category logic. "Frequently bought together" modules consistently lift AOV when powered by actual co-purchase data. Generic recommendations ("you might also like") underperform data-driven cross-sells by 30–50%.

For stores without sufficient purchase data to generate co-purchase recommendations, editorial cross-sells ("Complete the look" for fashion, "What you'll need" for equipment) perform reasonably well as a fallback — better than no cross-sell.

### Quantity Discounts

"Buy 2, save 10% — Buy 3, save 20%" creates a natural AOV floor increase for repeat-purchase items (supplements, consumables, office supplies). Works because it reframes the purchase decision from "how many do I need now?" to "what's the best deal?"

Quantity discount thresholds should be set at the natural re-order interval. If customers typically re-order every 30 days, a "buy 2" option that covers 60 days is logical. A "buy 6" option that covers 180 days may feel like overcommitting.

## AOV vs Revenue Per Visitor

AOV tells you the average transaction size. Revenue Per Visitor (RPV) tells you the average revenue contribution of each visitor — the metric that ties CVR and AOV together:

**RPV = Conversion Rate × AOV**

| CVR | AOV | RPV |
|---|---|---|
| 2.0% | €60 | €1.20 |
| 2.0% | €80 | €1.60 |
| 3.0% | €60 | €1.80 |
| 3.0% | €80 | €2.40 |

When running A/B tests on pages that affect both CVR and AOV (e.g., product pages, checkout), [RPV](/cro-glossary/revenue-per-visitor/) is the correct primary metric — a test that increases CVR slightly but reduces AOV might be a net revenue loss.

## Segmenting AOV by Traffic Source

Before running AOV optimisation experiments, segment AOV by traffic source. A typical e-commerce breakdown:

| Traffic Source | Typical AOV multiplier vs average |
|---|---|
| Email (own list) | 1.8–2.5× |
| Branded organic search | 1.3–1.7× |
| Non-branded organic | 0.9–1.1× |
| Paid search | 0.8–1.0× |
| Paid social | 0.5–0.8× |
| Direct | 1.2–1.5× |

Email drives the highest AOV because subscribers already know the brand and product range — they're less price-sensitive and more likely to purchase multiple items. Paid social drives the lowest AOV because audiences are in discovery mode, not buying mode.

This segmentation matters for test design. If 40% of your traffic is paid social (low AOV), averaging it into your overall AOV metric masks a large opportunity in high-intent channels. Always segment before concluding "AOV is already fine."

## Testing AOV Improvements

Before deploying AOV tactics without testing, set up proper measurement:

1. **Track AOV as a secondary metric** in all A/B tests that affect product pages or checkout
2. **Segment AOV by traffic source** — email typically has 2–3× higher AOV than paid social
3. **Test free shipping threshold positioning** — placement above the cart line vs inline messaging
4. **A/B test upsell offers** — price point, timing (pre-checkout vs post-add-to-cart), and copy

For a complete e-commerce revenue optimization framework, see [Conversion Rate Benchmarks by Industry](/blog/conversion-rate-benchmarks-by-industry/). For the relationship between AOV and [Customer Lifetime Value](/cro-glossary/customer-lifetime-value/), higher AOV on first purchase is one of the strongest predictors of higher LTV — buyers who spend more initially tend to return more often.

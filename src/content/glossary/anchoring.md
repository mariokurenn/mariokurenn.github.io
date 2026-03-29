---
term: "Anchoring"
shortDefinition: "A cognitive bias where the first number or piece of information encountered disproportionately influences all subsequent judgments."
category: "Psychology"
difficulty: "intermediate"
relatedTerms: ["decoy-effect", "framing-effect", "value-proposition", "loss-aversion", "priming"]
publishDate: "2026-03-24"
updatedDate: "2026-03-29"
faqs:
  - question: "What is anchoring in marketing?"
    answer: "Anchoring is a cognitive bias where people rely heavily on the first piece of information they encounter (the 'anchor') when making decisions. First documented by Amos Tversky and Daniel Kahneman in their 1974 paper 'Judgment under Uncertainty: Heuristics and Biases' (Science, Vol. 185). In marketing, the first price, number, or claim a visitor sees becomes the reference point against which all subsequent information is judged. A €999 product shown next to a crossed-out €1,499 price is perceived as a bargain — even if €999 was always the intended price."
  - question: "How does price anchoring work on landing pages?"
    answer: "Price anchoring works by presenting a higher reference price before the actual price. Effective techniques: showing the original price crossed out next to a sale price, displaying the annual plan cost beside a monthly plan, showing per-unit price alongside per-pack price, or leading with your most expensive tier in a pricing table. The anchor sets the mental benchmark — everything cheaper feels like a deal relative to it. Research by William Poundstone in 'Priceless' (2010) documented how restaurants use high-priced anchor items to make mid-tier items feel like reasonable choices."
  - question: "What is the anchoring effect in A/B testing?"
    answer: "In A/B testing, anchoring means the first variant visitors see sets expectations that influence how they perceive the second. This is also why benchmark figures in social proof ('Join 50,000+ businesses') influence perceived quality — the large number anchors the impression of popularity. Test anchoring elements (price presentation, social proof numbers, comparison values) as high-priority hypotheses because they affect not just whether visitors buy but how much they spend."
  - question: "How do I use anchoring on a pricing page?"
    answer: "The standard-pricing page mistake is displaying the cheapest plan first — this sets a low anchor and makes every higher tier feel expensive. Higher-converting approach: (1) show your most feature-rich plan first (or center the recommended plan), (2) use a 'Most Popular' or 'Best Value' badge on the mid-tier, (3) for annual vs monthly pricing, show annual savings prominently ('Save €480/year'), (4) include a competitor pricing comparison table where your price is the favorable comparison. Each of these anchors the visitor's perception before they evaluate individual options."
  - question: "Does anchoring work even when the anchor is arbitrary?"
    answer: "Yes — and this is the most counterintuitive finding from anchoring research. In Kahneman and Tversky's wheel-of-fortune experiment (1974), subjects asked to estimate the percentage of African countries in the UN gave answers biased toward a randomly generated number (10 or 65) even though the number was clearly meaningless. In pricing contexts, this means even an obviously inflated 'was' price influences willingness to pay — which is why showing a crossed-out price consistently outperforms showing the current price alone, even when the 'original' price was never actually charged."
---

**Anchoring** is a cognitive bias in which the first piece of information encountered — the *anchor* — disproportionately influences all subsequent judgments and decisions, even when that anchor is arbitrary or irrelevant.

First documented by psychologists [Amos Tversky and Daniel Kahneman in 1974](https://science.sciencemag.org/content/185/4157/1124), anchoring is one of the most reliable and commercially exploitable biases in consumer psychology.

## How Anchoring Works

When a person encounters a number or value first, the brain uses it as a starting point and adjusts from there — but typically adjusts *insufficiently*. The result: final judgments remain biased toward the original anchor.

**Classic experiment:** Kahneman and Tversky spun a wheel of fortune (rigged to land on 10 or 65) and then asked subjects to estimate the percentage of African countries in the UN. Subjects shown the number 65 guessed significantly higher than those shown 10 — even though the wheel result was obviously random and irrelevant to the question.

Applied to pricing: a visitor who sees "Was €1,200 — Now €799" perceives €799 as a bargain. A visitor who sees €799 with no reference price simply evaluates it in isolation — with no favorable comparison.

## Anchoring Applications in CRO

| Technique | Mechanism | Example |
|---|---|---|
| **Strikethrough pricing** | Original price anchors perceived value | ~~€149~~ **€89** |
| **Tier anchoring** | Premium plan anchors perception of all tiers | Show Enterprise first in pricing tables |
| **Per-unit pricing** | Lower per-unit cost anchors purchase size | "€1.20/day" vs "€439/year" |
| **Competitor comparison** | Competitor's higher price is the anchor | "Agencies charge €5,000 for this. We charge €800." |
| **Social proof numbers** | Large user counts anchor popularity | "Join 127,000 marketers" |
| **Loss framing** | Cost of inaction as anchor | "Businesses losing 3.2% CVR lose €X/month" |
| **First testimonial result** | High outcome anchors expected value | "From 1.2% to 5.8% CVR" as the first stat seen |

## Anchoring in Pricing Page Design

### Tier Ordering

The standard pricing page mistake: displaying the cheapest plan first. This sets a low anchor and makes every higher tier feel expensive.

**Higher-converting approach:**
1. Show your most feature-rich plan first (or center the recommended plan)
2. Use a "Most Popular" or "Best Value" badge on the mid-tier
3. Annual vs monthly: show annual savings prominently ("Save €480/year")
4. Competitor pricing table: include a comparison with your anchor as the reference

Research from pricing strategy firm Price Intelligently (now part of Paddle) consistently shows that leading with the highest tier or centering the recommended plan increases average plan selected — because the highest plan becomes the reference point, not the exception.

### Strikethrough Pricing: What the Data Shows

| Pricing display | Relative conversion lift |
|-----------------|-------------------------|
| Price only (€89) | Baseline |
| Strikethrough + current (~~€149~~ €89) | +15–25% typically |
| Strikethrough + savings label ("Save €60") | +20–30% in many tests |
| Strikethrough + savings % ("Save 40%") | Varies — test both |

The lift from strikethrough pricing is consistent but varies by category. Luxury goods see less lift (anchoring to a lower price can undermine perceived exclusivity). Commodity products see the most lift.

## Anchoring in Social Proof

Numbers in social proof create anchors for perceived quality and adoption:

- "Join 127,384 marketers" — specific number anchors credibility
- "Used by 84% of Fortune 500 companies" — percentage anchor for quality
- "Average 127% CVR improvement" — outcome anchor for expected results

Round numbers ("Join 100,000 marketers") read as estimates. Specific numbers ("Join 127,384 marketers") read as facts — and specific numbers anchor more strongly because they appear measured rather than inflated.

## Anchoring and A/B Testing Hypotheses

Strong anchoring-based hypotheses to test:

- **Add a strikethrough price** — show original vs current price on product pages
- **Reorder pricing tiers** — enterprise/highest first instead of cheapest first
- **Add social proof numbers** — quantify customers, results, or savings with specific figures
- **Annual plan savings** — show annual cost beside monthly to anchor value of committing
- **Competitor comparison table** — make your price the favorable reference

Each of these is a single-variable test with measurable revenue impact. For methodology, see [A/B Testing Best Practices](/blog/ab-testing-best-practices/). Anchoring works in concert with [the Decoy Effect](/cro-glossary/decoy-effect/) — both use comparison to shift perceived value.

---
term: "Decoy Effect"
shortDefinition: "A pricing strategy where a third, inferior option is added to make one of two existing options appear significantly more attractive."
category: "Psychology"
difficulty: "intermediate"
relatedTerms: ["anchoring", "framing-effect", "value-proposition", "loss-aversion", "paradox-of-choice"]
publishDate: "2026-03-24"
updatedDate: "2026-03-29"
faqs:
  - question: "What is the decoy effect in pricing?"
    answer: "The decoy effect (also called the asymmetric dominance effect) occurs when adding a third, strategically inferior option to a choice set causes people to prefer one of the original two options — typically the more expensive one. The 'decoy' is designed to be clearly worse than one option (making it look dominant) while being similar in price, steering buyers toward the target option. The effect was first documented by Joel Huber, John Payne, and Christopher Puto in a 1982 paper in the Journal of Consumer Research."
  - question: "What is a real-world example of the decoy effect?"
    answer: "The classic example is from Dan Ariely's research in Predictably Irrational: The Economist offered subscriptions as (A) Online only — $59, (B) Print only — $125, (C) Print + Online — $125. Option B exists only to make C look like exceptional value — you get everything B offers plus online access for the same price. Without B, most people chose A. With B, most chose C. The decoy (B) made C appear dominant by comparison. SaaS pricing tables use this constantly — a middle tier is often designed to push buyers toward the top tier."
  - question: "How do I use the decoy effect on my pricing page?"
    answer: "Design a three-tier pricing structure where the middle tier is the decoy: price it close to the premium tier but with noticeably fewer features. This makes the premium tier look like a bargain relative to the middle option. Alternatively, create a 'starter' plan that's only slightly cheaper than the recommended plan but significantly less featured — steering buyers upward. The decoy must meet two criteria: (1) asymmetric dominance — clearly dominated by the target on all dimensions, and (2) price proximity — priced close enough to the target that a price-only comparison doesn't automatically dismiss it."
  - question: "How powerful is the decoy effect in A/B tests?"
    answer: "The decoy effect is among the most reliably replicable pricing psychology effects. Dan Ariely's subscription experiment produced an 84% increase in revenue from the highest-tier plan when the decoy was present vs absent. In SaaS pricing page tests, adding or repositioning a decoy tier typically shifts 15–35% of plan selection toward the target tier. The effect is strongest when: (1) the decoy price is within 20–30% of the target price, (2) the feature difference is clearly visible in a comparison table, (3) there is no dominant low-price option that makes the decoy irrelevant."
  - question: "Is the decoy effect ethical to use in CRO?"
    answer: "The decoy effect is ethical when the decoy represents a genuine product option and the comparison is accurate. Creating a fake 'plan' that no one can actually purchase, or misrepresenting what each tier includes, crosses into manipulation. But using pricing architecture to help visitors identify the best-value option for their needs is legitimate design. The key test: if a customer chose the decoy, would they be getting a real product at the stated price? If yes, the decoy is a pricing design decision, not deception. Most SaaS companies use three-tier pricing with a deliberately less-attractive middle option as standard practice."
  - question: "What is the difference between the decoy effect and anchoring?"
    answer: "Anchoring uses the first price seen as a reference point that makes subsequent prices seem cheaper or more expensive by comparison — showing the highest tier first makes other tiers feel affordable. The decoy effect works within a choice set, making one option appear dominant over a nearby inferior option. They complement each other on pricing pages: anchoring sets the high-end reference point; the decoy makes the target option feel like the obvious rational choice. On a well-designed pricing page, both are operating simultaneously."
---

**The decoy effect** (also called the **asymmetric dominance effect**) is a psychological phenomenon in which adding a third, strategically inferior option to a choice set causes buyers to shift preference toward one of the original two — typically the more expensive one.

The decoy is not intended to sell. It exists to make the target option look superior by comparison.

First documented by Joel Huber, John Payne, and Christopher Puto in a 1982 paper published in the *Journal of Consumer Research*, the effect has been replicated hundreds of times and is now standard practice in pricing architecture across SaaS, e-commerce, and subscription businesses.

## The Classic Experiment

Dan Ariely's subscription pricing experiment, documented in *Predictably Irrational* (2008), demonstrated the effect clearly:

**Without decoy:**
- Online only: $59 — chosen by 68%
- Print + Online: $125 — chosen by 32%
- **Revenue per subscriber: ~$81**

**With decoy added (print-only for $125):**
- Online only: $59 — chosen by 16%
- Print only: $125 — chosen by 0%
- Print + Online: $125 — chosen by 84%
- **Revenue per subscriber: ~$114 (+41%)**

The decoy (print-only at $125, inferior to print+online at the same price) made print+online look obviously superior — and tripled its selection rate. The same product mix, radically different revenue per sale.

## How the Decoy Effect Works

The decoy must meet two criteria:

1. **Asymmetric dominance**: The decoy is clearly dominated by (worse than) the target option on all dimensions
2. **Price proximity**: The decoy is priced close to the target — not obviously cheap

A decoy that's too cheap or too obviously bad stops working. It needs to feel like a plausible option that someone might choose — until they look more carefully at the comparison.

The underlying mechanism: humans are not good at judging absolute value, but are very good at judging relative value. The decoy provides a reference point that makes the target look like an obvious winner.

## Decoy Effect in SaaS Pricing Tables

| Tier | Price/mo | Features | Role |
|---|---|---|---|
| **Starter** | €29 | 5 users, 10 projects | Decoy — barely cheaper than Pro |
| **Pro** ⭐ Most Popular | €49 | 50 users, unlimited projects | Target — dominant vs Starter |
| **Enterprise** | €149 | Unlimited + dedicated support | Anchor — makes Pro feel accessible |

The Starter plan exists to make Pro feel obviously superior. The Enterprise plan [anchors](/cro-glossary/anchoring/) the high end. Together, they steer buyers to the €49 Pro plan.

## Decoy Effect in E-Commerce

The principle applies beyond SaaS pricing:

**Bundle sizing:**
- Small (250ml): €8
- Medium (400ml): €13 — the decoy
- Large (600ml): €15 — the target

At €13 for 400ml versus €15 for 600ml, the large feels like exceptional value. The medium's job is to exist as a comparison point, not to sell in volume.

**Subscription vs one-time purchase:**
- One-time purchase: €49 — the decoy
- Monthly subscription: €8/month — the target

The one-time price anchors the subscription's value. Buyers calculate "49 ÷ 8 = 6 months" and realize subscription pays off in half a year, making it feel dominant. This is why subscription businesses often keep the one-time price visible even when it's not their primary objective.

## Where to Apply the Decoy Effect

**Pricing pages:** Classic application — three tiers where the middle option makes the recommended plan look dominant.

**Upsell flows:** Show a product bundle where a lesser option (fewer items, smaller quantity) is priced to make the full bundle look like the clear winner.

**Service packages:** "Basic audit" vs "Full audit" — basic is priced to make the full audit feel like obvious value.

**Annual vs monthly plans:** The monthly plan often functions as a decoy — it's more expensive per period, making annual look like an obvious saving.

**Quantity options:** Single item vs 3-pack vs 6-pack — the 3-pack positioned as a decoy steers buyers to the 6-pack with better per-unit economics.

## The Decoy Effect vs Anchoring vs Paradox of Choice

These three principles work together on pricing pages but target different mechanisms:

| Principle | Mechanism | Application |
|-----------|-----------|-------------|
| **Decoy effect** | Makes one option dominant over a nearby inferior | Three-tier pricing structure |
| **Anchoring** | First price seen becomes the reference point | Show highest tier first |
| **Paradox of choice** | Fewer options → more decisions made | Limit to 3 tiers, not 5 |

The optimal pricing page combines all three: limited tiers (paradox of choice), highest tier shown first (anchoring), and a decoy mid-tier that makes the target plan look obviously dominant.

## When the Decoy Effect Fails

The decoy effect stops working under specific conditions:

- **Too large a price gap:** If the decoy is 50%+ cheaper than the target, it stops feeling like a comparison and starts looking like a genuinely different product tier
- **Feature confusion:** If the comparison table is hard to parse, buyers can't identify the dominance relationship quickly — the cognitive effort breaks the effect
- **Extreme price sensitivity:** When buyers are primarily price-anchored (lowest price wins), the decoy framework doesn't move behavior
- **Missing "Most Popular" badge:** Without a recommended option signal, buyers are left to calculate dominance themselves — adding the badge amplifies the effect by 10–20%

## Testing Decoy Effect Hypotheses

The decoy effect is highly testable. Hypotheses:

- **Reorder your pricing tiers** — position the decoy optimally (typically adjacent to the target)
- **Adjust decoy price** upward to within 20–30% of target price
- **Change feature gap** between decoy and target to increase perceived value differential
- **Remove the decoy** as a control — measure whether plan distribution and ARPU changes
- **Add a "Most Popular" badge** to the target — combines decoy effect with social proof
- **Change tier naming** — names that emphasize what the decoy lacks sharpen the dominance comparison

This is one of the higher-ROI A/B tests available on a pricing page, often producing 15–35% increases in average plan revenue. For testing methodology, see [A/B Testing Best Practices](/blog/ab-testing-best-practices/). For the [framing effect](/cro-glossary/framing-effect/) that amplifies decoy-based copy, see the full psychology framework.

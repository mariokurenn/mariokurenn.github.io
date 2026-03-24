---
term: "Minimum Detectable Effect (MDE)"
shortDefinition: "The smallest improvement in conversion rate that an A/B test is designed to detect — the key input that determines required sample size."
category: "A/B Testing"
difficulty: "intermediate"
relatedTerms: ["ab-testing", "statistical-power", "statistical-significance", "p-value"]
publishDate: "2026-03-24"
faqs:
  - question: "What is minimum detectable effect (MDE) in A/B testing?"
    answer: "Minimum Detectable Effect (MDE) is the smallest relative improvement in conversion rate that you would consider worth detecting and implementing. It's the business decision that determines your sample size requirements: a smaller MDE (detecting 5% improvements) requires far more traffic than a larger MDE (detecting 20% improvements). MDE is expressed as a relative change — a 10% MDE on a 2% baseline CVR means you want to detect a change to 2.2% CVR."
  - question: "How do I set the right MDE for my A/B test?"
    answer: "MDE should be set based on two factors: (1) what improvement would actually be worth implementing, and (2) what's realistically achievable given your hypothesis. For most CRO tests, 15–20% relative improvement is a practical starting point — it's meaningful enough to justify implementation and achievable with well-founded hypotheses. Setting MDE below 10% dramatically inflates sample size requirements. A good rule: if you wouldn't bother implementing a 5% relative improvement, don't set MDE at 5%."
  - question: "What happens if I set MDE too low?"
    answer: "Setting MDE too low (e.g., trying to detect 2% relative improvements) makes tests impractically long. At a 2% baseline CVR with a 2% MDE, you'd need over 200,000 visitors per variant to reach significance — at 5,000 sessions/month, that's 80 months. In practice, an MDE below 10% is only viable for very high-traffic pages. For most sites, 15–25% relative MDE is the practical range that balances sensitivity with achievable test duration."
---

**Minimum Detectable Effect (MDE)** is the smallest relative improvement in conversion rate that an A/B test is designed to detect at the chosen statistical significance and power levels.

MDE is the most important input to sample size calculation — and the most commonly misunderstood. Setting MDE is a *business decision*, not a statistical one: it defines the threshold below which an improvement isn't worth detecting.

## MDE is Relative, Not Absolute

MDE is expressed as a relative percentage change from the baseline:

- Baseline CVR: **2.0%**
- MDE: **20%**
- Minimum effect to detect: 2.0% × 1.20 = **2.4% CVR**

You're not trying to detect a 20 percentage point change — you're trying to detect a 20% improvement *relative to the baseline*.

| Baseline CVR | MDE (relative) | Minimum CVR to detect |
|---|---|---|
| 2.0% | 10% | 2.2% |
| 2.0% | 20% | 2.4% |
| 2.0% | 30% | 2.6% |
| 5.0% | 10% | 5.5% |
| 5.0% | 20% | 6.0% |

## How MDE Affects Sample Size

The relationship between MDE and required sample size is non-linear — halving the MDE approximately quadruples the required sample size:

| MDE (relative) | Sample size per variant (2% baseline, 95% sig, 80% power) |
|---|---|
| 5% | ~315,000 |
| 10% | ~79,000 |
| 15% | ~35,000 |
| 20% | ~20,000 |
| 30% | ~9,000 |
| 40% | ~5,000 |

*Source: Calculated using standard two-proportion z-test*

At 5,000 sessions/month to the test page:
- MDE 20% → ~4 months per variant
- MDE 10% → ~16 months per variant
- MDE 5% → 63 months — not viable

## Setting MDE: Practical Guidelines

**Ask: "Is this improvement worth implementing?"**

If you're testing a headline change, would a 5% relative CVR improvement (e.g., 2.0% → 2.1%) justify the development and design effort to implement and maintain? Probably not.

Would a 20% improvement (2.0% → 2.4%) justify it? Almost certainly yes.

Set your MDE at the minimum improvement you'd consider worth shipping.

**Context-based MDE guidelines:**

| Context | Recommended MDE |
|---|---|
| High-traffic e-commerce (100k+ sessions/mo) | 5–10% |
| Mid-traffic site (20–100k sessions/mo) | 10–20% |
| Low-traffic site (under 20k sessions/mo) | 20–30%+ |
| Email subject line (high volume) | 2–5% open rate |
| Checkout optimization (critical flow) | 10–15% |

## MDE and Low-Traffic Sites

For sites under 5,000 sessions/month, even a 30% MDE produces impractically long test durations. The right response is not to lower the significance threshold — it's to use qualitative CRO methods instead.

See [How to Do CRO With Low Traffic](/blog/cro-low-traffic/) for methods that work without A/B testing infrastructure.

## Calculating Required Sample Size

Use any of these free calculators with your baseline CVR and MDE:
- [Evan Miller Sample Size Calculator](https://www.evanmiller.org/ab-testing/sample-size.html)
- [VWO A/B Test Duration Calculator](https://vwo.com/tools/ab-test-duration-calculator/)

For the complete test duration framework, see [How Long Should You Run an A/B Test?](/blog/how-long-to-run-ab-test/).

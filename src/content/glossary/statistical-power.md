---
term: "Statistical Power"
shortDefinition: "The probability that an A/B test correctly detects a real effect when one exists — typically set at 80%, meaning 20% chance of missing a real winner."
category: "A/B Testing"
difficulty: "advanced"
relatedTerms: ["statistical-significance", "ab-testing", "p-value", "minimum-detectable-effect"]
publishDate: "2026-03-24"
faqs:
  - question: "What is statistical power in A/B testing?"
    answer: "Statistical power is the probability that an A/B test correctly identifies a true effect — i.e., detects a real difference between variants when one actually exists. It's also described as 1 − β, where β is the Type II error rate (the probability of missing a real effect, or a 'false negative'). Standard A/B testing uses 80% power, meaning there's a 20% chance of failing to detect a real improvement. Higher power requires larger sample sizes."
  - question: "What is the difference between statistical significance and statistical power?"
    answer: "Statistical significance (alpha, α) controls the false positive rate — how often you declare a winner when variants are actually equal. Statistical power (1 − β) controls the false negative rate — how often you correctly detect a real winner when one exists. Significance and power are complementary: significance prevents you from shipping losers, power prevents you from dismissing real winners. Both must be set before a test starts — significance at 95% (α = 0.05) and power at 80% (β = 0.20) is the standard."
  - question: "How does statistical power affect sample size?"
    answer: "Higher statistical power requires larger sample sizes. Going from 80% to 90% power increases required sample size by roughly 25–30%. Going from 80% to 95% power increases sample size by roughly 50–60%. This is why 80% power is the practical standard — the incremental sample size cost of higher power often isn't worth it for most CRO tests. If you need higher confidence (e.g., site-wide shipping changes for a large retailer), 90% power is justified."
---

**Statistical power** is the probability that an A/B test correctly detects a real difference between variants when one actually exists. It is the test's sensitivity — its ability to find a true signal rather than missing it.

**Notation:** Power = 1 − β, where β is the Type II error rate (probability of a false negative — failing to detect a real effect).

**Standard setting:** 80% power → 20% chance of missing a real improvement.

## The Two Types of Error in A/B Testing

| Error Type | Name | What it means | Controlled by |
|---|---|---|---|
| **Type I** (false positive) | Alpha (α) | Declaring a winner when variants are equal | Significance level (typically 0.05) |
| **Type II** (false negative) | Beta (β) | Missing a real winner, declaring no result | Power (typically 0.80, β = 0.20) |

Most A/B testing discussion focuses on Type I errors (false positives) — but underpowered tests that miss real winners are equally damaging, just less visible.

## Why 80% Power?

The 80% power standard means that if Variant B truly beats control by your minimum detectable effect, there's a 20% chance your test will fail to detect it and produce an inconclusive result.

Why accept 20% risk of missing real improvements?
- **Sample size economics:** Each incremental power gain requires a disproportionate sample size increase
- **Practical trade-off:** Running a larger test costs more time; 80% power balances sensitivity with feasibility
- **Multiple tests:** Running 5 well-powered tests produces more learning than running 2 overpowered tests

When to use higher power (90%+):
- The decision is irreversible (major redesign you can't quickly roll back)
- The test is site-wide and affects all revenue
- You have the traffic to afford it without extending the run time significantly

## Power and Sample Size

Power is one of four interrelated parameters in sample size calculation:

| Parameter | Controls | Typical value |
|---|---|---|
| **Alpha (α)** | Type I error / false positive rate | 0.05 (95% significance) |
| **Power (1 − β)** | Type II error / sensitivity | 0.80 |
| **Baseline CVR** | Baseline conversion rate | Your actual current rate |
| **MDE** | Minimum effect you want to detect | 10–20% relative improvement |

Change any one of these and the required sample size changes. The most common mistake: setting MDE too low, which requires impractically large samples. See [Minimum Detectable Effect](/cro-glossary/minimum-detectable-effect/).

## Underpowered Tests: A Hidden Problem

An underpowered test (below 80% power) doesn't just miss more winners — it also produces noisier results that are harder to interpret:

- A test at 50% power has a coin-flip chance of detecting a real improvement
- Many "inconclusive" results are actually real effects in underpowered tests
- Underpowered tests are especially common on low-traffic pages — see [How to Do CRO With Low Traffic](/blog/cro-low-traffic/)

## Calculating Power Before You Test

Use any standard sample size calculator with these inputs:
- Baseline CVR
- Minimum Detectable Effect (MDE)
- Alpha = 0.05
- Power = 0.80

The calculator outputs required sample size per variant. Divide by daily traffic to get minimum test duration.

Free calculators: [Evan Miller](https://www.evanmiller.org/ab-testing/sample-size.html), [VWO](https://vwo.com/tools/ab-test-duration-calculator/), [Optimizely](https://www.optimizely.com/sample-size-calculator/).

---
term: "Statistical Power"
shortDefinition: "The probability that an A/B test correctly detects a real effect when one exists — typically set at 80%, meaning 20% chance of missing a real winner."
category: "A/B Testing"
difficulty: "advanced"
relatedTerms: ["statistical-significance", "ab-testing", "p-value", "minimum-detectable-effect"]
publishDate: "2026-03-24"
updatedDate: "2026-03-29"
faqs:
  - question: "What is statistical power in A/B testing?"
    answer: "Statistical power is the probability that an A/B test correctly identifies a true effect — i.e., detects a real difference between variants when one actually exists. It's also described as 1 − β, where β is the Type II error rate (the probability of missing a real effect, or a 'false negative'). Standard A/B testing uses 80% power, meaning there's a 20% chance of failing to detect a real improvement. Higher power requires larger sample sizes."
  - question: "What is the difference between statistical significance and statistical power?"
    answer: "Statistical significance (alpha, α) controls the false positive rate — how often you declare a winner when variants are actually equal. Statistical power (1 − β) controls the false negative rate — how often you correctly detect a real winner when one exists. Significance and power are complementary: significance prevents you from shipping losers, power prevents you from dismissing real winners. Both must be set before a test starts — significance at 95% (α = 0.05) and power at 80% (β = 0.20) is the standard."
  - question: "How does statistical power affect sample size?"
    answer: "Higher statistical power requires larger sample sizes. Going from 80% to 90% power increases required sample size by roughly 25–30%. Going from 80% to 95% power increases sample size by roughly 50–60%. This is why 80% power is the practical standard — the incremental sample size cost of higher power often isn't worth it for most CRO tests. If you need higher confidence (e.g., site-wide shipping changes for a large retailer), 90% power is justified."
  - question: "What happens when you run an underpowered A/B test?"
    answer: "An underpowered test (below 80% power) misses real improvements and produces unreliable results. A test at 50% power has a coin-flip chance of detecting a true effect. More critically, underpowered tests that do produce significant results have a higher false discovery rate — because when power is low, many 'significant' findings are coincidental. This is called the Winner's Curse: underpowered studies that find significance tend to overestimate effect sizes, creating inflated expectations that don't replicate."
  - question: "How do I calculate statistical power for my A/B test?"
    answer: "Use a sample size calculator (Evan Miller's is the most widely used: evanmiller.org/ab-testing/sample-size.html). Inputs: baseline conversion rate, minimum detectable effect (as relative percentage), significance level (0.05), and desired power (0.80). The output is required sample size per variant. Divide by your daily unique visitors to the tested page to get minimum test duration in days. Always add at least 7 days beyond the minimum to capture full weekly cycles."
  - question: "What is the relationship between statistical power and minimum detectable effect (MDE)?"
    answer: "Power and MDE are inversely related: for a fixed sample size, detecting a smaller effect requires more power (and vice versa). If you have 5,000 visitors per variant available, you can achieve 80% power to detect a 20% relative improvement at a 3% baseline CVR — but only 40% power to detect a 10% relative improvement at the same baseline. Setting MDE too small is the most common mistake in A/B test planning: it creates tests that are systematically underpowered for the effect sizes they're trying to detect."
---

**Statistical power** is the probability that an A/B test correctly detects a real difference between variants when one actually exists. It is the test's sensitivity — its ability to find a true signal rather than missing it.

**Notation:** Power = 1 − β, where β is the Type II error rate (probability of a false negative — failing to detect a real effect).

**Standard setting:** 80% power → 20% chance of missing a real improvement.

## The Two Types of Error in A/B Testing

| Error Type | Name | What it means | Controlled by |
|---|---|---|---|
| **Type I** (false positive) | Alpha (α) | Declaring a winner when variants are equal | Significance level (typically 0.05) |
| **Type II** (false negative) | Beta (β) | Missing a real winner, declaring no result | Power (typically 0.80, β = 0.20) |

Most A/B testing discussion focuses on Type I errors (false positives) — but underpowered tests that miss real winners are equally damaging, just less visible. A false positive ships a change that does nothing; a false negative abandons a change that would have grown revenue.

## Why 80% Power?

The 80% power standard means that if Variant B truly beats control by your minimum detectable effect, there's a 20% chance your test will fail to detect it and produce an inconclusive result.

Why accept 20% risk of missing real improvements?

- **Sample size economics:** Each incremental power gain requires a disproportionate sample size increase
- **Practical trade-off:** Running a longer test delays the next test; 80% power balances sensitivity with throughput
- **Multiple tests:** Running 5 well-powered 80% tests produces more cumulative learning than running 2 overpowered 95% tests

**When to use higher power (90%+):**
- The decision is irreversible (a major redesign you can't quickly roll back)
- The test is site-wide and affects all revenue channels simultaneously
- The effect you're testing has a large business impact (pricing changes, fundamental value proposition changes)
- You have the traffic to afford it without extending the run time significantly

## Power and Sample Size: The Quantitative Relationship

Power is one of four interrelated parameters in sample size calculation:

| Parameter | Controls | Typical value |
|---|---|---|
| **Alpha (α)** | Type I error / false positive rate | 0.05 (95% significance) |
| **Power (1 − β)** | Type II error / sensitivity | 0.80 |
| **Baseline CVR** | Baseline conversion rate | Your actual current rate |
| **MDE** | Minimum effect you want to detect | 10–20% relative improvement |

Change any one and the required sample size changes. Specifically:

| Change | Effect on required sample size |
|---|---|
| Power: 80% → 90% | +25–30% more sessions required |
| Power: 80% → 95% | +50–60% more sessions required |
| Significance: 95% → 99% | +30–40% more sessions required |
| MDE: 20% → 10% relative | ~4× more sessions required |
| Baseline CVR: 3% → 1% | ~3× more sessions required |

The most impactful parameter is MDE. Halving the minimum effect you want to detect (from 20% to 10% relative improvement) roughly quadruples the required sample size. Setting MDE too small is the single most common sample size planning mistake.

## Underpowered Tests: A Hidden Problem

An underpowered test (below 80% power) doesn't just miss more winners — it also produces misleading statistics:

**The Winner's Curse:** When underpowered studies find statistical significance, the observed effect size is typically 2–3× larger than the true effect. This is because only the largest random fluctuations in an underpowered test cross the significance threshold. Teams then implement a change expecting a 30% lift that was actually a 10% effect — and are disappointed when real-world performance doesn't match the test result.

**False confidence from inconclusive results:** "No significant result" from an underpowered test does not mean the variant has no effect. It means the test lacked the sensitivity to detect an effect of the size you were looking for. Many genuinely winning variants are discarded because they were tested with insufficient power.

Underpowered tests are especially common on low-traffic pages. See [How to Do CRO With Low Traffic](/blog/cro-low-traffic/) for approaches that work when you can't achieve standard power levels.

## Sample Size Calculation in Practice

Example calculation for a typical e-commerce product page:

- Baseline CVR: 3.2%
- MDE: 15% relative improvement (from 3.2% to 3.68%)
- Significance: 95% (α = 0.05)
- Power: 80%
- Required sample per variant: ~8,900 visitors
- Total required: ~17,800 visitors
- Daily traffic to page: 600 unique visitors
- Minimum test duration: 17,800 ÷ 600 = **30 days**

Add a 7-day buffer for weekly cycles: **run for 37 days minimum.**

Running the same test at 90% power requires approximately 11,600 per variant (23,200 total) — about 39 days at 600 daily visitors. The additional 9 days buys you 10 percentage points of additional sensitivity.

## Free Power Calculators

- [Evan Miller Sample Size Calculator](https://www.evanmiller.org/ab-testing/sample-size.html) — most widely used, frequentist
- [VWO A/B Test Duration Calculator](https://vwo.com/tools/ab-test-duration-calculator/) — includes duration estimate
- [Optimizely Sample Size Calculator](https://www.optimizely.com/sample-size-calculator/) — integrates with Optimizely tests

For complete A/B testing methodology including power, significance, and run duration, see [A/B Testing Best Practices](/blog/ab-testing-best-practices/) and [How Long Should You Run an A/B Test?](/blog/how-long-to-run-ab-test/).

See also: [Statistical Significance](/cro-glossary/statistical-significance/), [P-Value](/cro-glossary/p-value/), [Minimum Detectable Effect](/cro-glossary/minimum-detectable-effect/).

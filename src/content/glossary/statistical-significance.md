---
term: "Statistical Significance"
shortDefinition: "A statistical threshold confirming that a measured difference between A/B test variants is unlikely to be due to random chance."
category: "A/B Testing"
difficulty: "intermediate"
relatedTerms: ["ab-testing", "conversion-rate", "sample-size", "p-value", "confidence-interval"]
publishDate: "2026-03-21"
updatedDate: "2026-03-29"
faqs:
  - question: "What is statistical significance in A/B testing?"
    answer: "Statistical significance (typically set at 95%) means there is only a 5% probability that the observed difference between A/B test variants occurred by random chance. It does not mean the result is large, important, or guaranteed to hold — only that the measured difference is unlikely to be noise. A statistically significant result with a tiny effect size may not be worth implementing."
  - question: "What significance level should I use for A/B tests?"
    answer: "95% statistical significance (p < 0.05) is the standard for most A/B tests. Some teams use 90% for low-stakes tests or 99% for high-stakes decisions (major redesigns, pricing changes). Using a lower threshold increases the risk of false positives; using a higher threshold requires more traffic and time per test."
  - question: "Can I stop an A/B test when it reaches 95% significance?"
    answer: "No. Stopping a test the moment it reaches 95% significance is the peeking problem — one of the most common A/B testing errors. Statistical significance fluctuates constantly during a test. You should only stop when both conditions are met: (1) your pre-calculated minimum sample size has been reached, AND (2) at least 14 days have passed to capture weekly behavioral cycles."
  - question: "What is the difference between statistical significance and practical significance?"
    answer: "Statistical significance tells you the result is unlikely to be noise. Practical significance tells you the result is large enough to matter for your business. A test with 100,000 visitors per variant might detect a 0.1% absolute CVR improvement as 99% statistically significant — but a 0.1% improvement may not be worth implementing. Always ask: 'Is the effect size large enough to justify the development cost, the technical risk, and the opportunity cost of running this test?'"
  - question: "What is p-value and how does it relate to statistical significance?"
    answer: "The p-value is the probability that the observed result (or more extreme) would occur if there were actually no difference between variants. A p-value of 0.05 means a 5% probability the result is noise — this corresponds to 95% statistical significance. Lower p-values indicate stronger evidence: p = 0.01 means 99% significance. The p-value does not tell you the probability your hypothesis is true, or how large the effect is — it only indicates the probability of seeing this result under the null hypothesis."
  - question: "How many visitors do I need for a statistically significant A/B test?"
    answer: "Required sample size depends on four factors: baseline conversion rate, minimum detectable effect (MDE), desired significance level, and desired statistical power. As a rough guide: at 3% baseline CVR, 15% MDE, 95% significance, and 80% power — you need approximately 10,000 visitors per variant (20,000 total). At 1% baseline CVR with the same parameters — approximately 35,000 per variant. Always calculate before starting; never determine sample size after the test ends."
---

**Statistical significance** is a threshold that indicates whether the observed difference between two A/B test variants is unlikely to be the result of random chance. At the standard 95% significance level, there is a 5% probability that the measured difference occurred by luck rather than reflecting a real effect.

It is expressed as a **p-value**: the probability of observing the measured result (or a more extreme result) if there were actually no difference between variants. A p-value below 0.05 corresponds to 95% significance.

## Why Statistical Significance Matters in CRO

Without statistical rigour, A/B testing produces false positives — you implement changes that *appeared* to win but had no real effect. In a naive testing program, about 1 in 20 tests will produce a false positive by chance alone at p < 0.05. Running 100 tests with poor discipline means ~5 changes shipped that actively underperform.

The cost of false positives compounds:
- You ship changes that don't help (or hurt revenue)
- Your test log fills with misleading learnings
- You build wrong mental models about your audience
- Future tests are designed around false assumptions

**Statistical significance is the gatekeeper** between noise and actionable insight. It doesn't guarantee results — but without it, your A/B testing program generates more confusion than clarity.

## The Relationship Between Key Statistical Concepts

| Concept | What It Controls |
|---|---|
| **Significance level (α)** | Maximum acceptable false positive rate (typically 5%) |
| **Statistical power (1−β)** | Probability of detecting a real effect (typically 80%) |
| **Sample size** | Determined by significance level, power, baseline CVR, and MDE |
| **P-value** | Probability the result occurred by chance — must be < α to declare significance |
| **Confidence interval** | Range within which the true effect likely falls (e.g., +2% to +8%) |

All five are connected. Changing any one changes the others. Significance without adequate power produces an incomplete picture — see [Statistical Power](/cro-glossary/statistical-power/).

## Common Misconceptions

**"95% significant means I'm 95% sure the variant is better."**
Wrong. It means there's a 5% chance the difference is random noise. It says nothing about how much better, how confident you should be in the real-world effect size, or whether the improvement will persist after implementation.

**"I should stop as soon as I hit 95% significance."**
Wrong. This is the peeking problem — one of the most damaging A/B testing errors. Significance fluctuates constantly during a test. A variant showing 97% significance on day 4 may drop to 75% by day 14 as random variance averages out. Stopping early produces a dramatically inflated false positive rate (above 25% in simulations that stop at first crossing of 95%).

**"A 95% significant result will hold after implementation."**
Not guaranteed. Site traffic seasonality, regression to the mean, novelty effects, and multi-page interactions all cause real-world performance to differ from test results. Expect some regression — budgeting for 60–70% of the measured lift to hold in production is a conservative but realistic planning assumption.

**"Non-significant means the variant failed."**
Wrong. Non-significant means the test didn't have enough evidence to reject the null hypothesis. This could mean: the variant truly has no effect, the test was underpowered (not enough visitors), the test ran too short, or the effect is smaller than your MDE. "No significant result" is not the same as "no effect."

## How Much Traffic Do You Need?

Sample size requirements at common CRO test scenarios:

| Baseline CVR | MDE (relative) | Power | Sig. level | Visitors per variant |
|---|---|---|---|---|
| 1% | 20% | 80% | 95% | ~22,000 |
| 1% | 10% | 80% | 95% | ~86,000 |
| 3% | 15% | 80% | 95% | ~9,500 |
| 3% | 10% | 80% | 95% | ~21,000 |
| 5% | 15% | 80% | 95% | ~5,600 |
| 5% | 10% | 80% | 95% | ~12,500 |
| 10% | 15% | 80% | 95% | ~2,700 |

Use a sample size calculator before starting any test. Never determine sample size after the fact — post-hoc sample size calculation is used to justify stopping early and inflates false positive rates.

Free calculators: [Evan Miller](https://www.evanmiller.org/ab-testing/sample-size.html), [VWO](https://vwo.com/tools/ab-test-duration-calculator/).

## Statistical vs Practical Significance

A result can be statistically significant without being practically meaningful. With very large samples (100,000+ visitors per variant), you can detect a 0.05% absolute improvement in CVR with 99% significance — but a 0.05% improvement may not justify the implementation cost or technical risk.

Always evaluate both:

1. **Is it statistically significant?** (p < 0.05 with adequate sample size)
2. **Is the effect size large enough to act on?** (Is +0.3% CVR worth the development work?)

For a test to be worth shipping: the answer to both questions must be yes.

## Bayesian vs Frequentist Significance

The standard approach described above is frequentist. Some A/B testing platforms (VWO, Convert) offer Bayesian significance testing, which expresses results differently:

- **Frequentist:** "The probability this result is noise is less than 5%"
- **Bayesian:** "There is an 85% probability that B is better than A by at least X%"

Bayesian testing handles sequential testing without the peeking problem, but requires careful calibration of priors and produces different (not necessarily better) decisions. For most CRO teams, frequentist testing with strict pre-set sample sizes and no peeking produces reliable, reproducible results.

For full A/B testing methodology, see [A/B Testing Best Practices](/blog/ab-testing-best-practices/), [How Long Should You Run an A/B Test?](/blog/how-long-to-run-ab-test/), and [7 A/B Testing Mistakes](/blog/ab-testing-mistakes/).

See also: [Statistical Power](/cro-glossary/statistical-power/), [P-Value](/cro-glossary/p-value/), [Confidence Interval](/cro-glossary/confidence-interval/).

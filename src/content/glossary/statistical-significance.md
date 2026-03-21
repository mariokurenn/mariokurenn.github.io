---
term: "Statistical Significance"
shortDefinition: "A statistical threshold confirming that a measured difference between A/B test variants is unlikely to be due to random chance."
category: "A/B Testing"
difficulty: "intermediate"
relatedTerms: ["ab-testing", "conversion-rate", "sample-size", "p-value", "confidence-interval"]
publishDate: "2026-03-21"
faqs:
  - question: "What is statistical significance in A/B testing?"
    answer: "Statistical significance (typically set at 95%) means there is only a 5% probability that the observed difference between A/B test variants occurred by random chance. It does not mean the result is large, important, or guaranteed to hold — only that the measured difference is unlikely to be noise. A statistically significant result with a tiny effect size may not be worth implementing."
  - question: "What significance level should I use for A/B tests?"
    answer: "95% statistical significance (p < 0.05) is the standard for most A/B tests. Some teams use 90% for low-stakes tests or 99% for high-stakes decisions (major redesigns, pricing changes). Using a lower threshold increases the risk of false positives; using a higher threshold requires more traffic and time per test."
  - question: "Can I stop an A/B test when it reaches 95% significance?"
    answer: "No. Stopping a test the moment it reaches 95% significance is the peeking problem — one of the most common A/B testing errors. Statistical significance fluctuates constantly during a test. You should only stop when both conditions are met: (1) your pre-calculated minimum sample size has been reached, AND (2) at least 14 days have passed to capture weekly behavioral cycles."
---

**Statistical significance** is a threshold that indicates whether the observed difference between two A/B test variants is unlikely to be the result of random chance. At the standard 95% significance level, there is a 5% probability that the measured difference occurred by luck rather than reflecting a real effect.

It is expressed as a **p-value**: the probability of observing the measured result (or a more extreme result) if there were actually no difference between variants. A p-value below 0.05 corresponds to 95% significance.

## Why Statistical Significance Matters in CRO

Without statistical rigour, A/B testing produces false positives — you implement changes that *appeared* to win but actually had no real effect. Over time, a library of false positives produces no cumulative lift.

The cost of false positives compounds:
- You ship changes that don't help (or hurt)
- Your test log fills with misleading learnings
- You build wrong mental models about your audience

**Statistical significance is the gatekeeper** between noise and actionable insight.

## The Relationship Between Key Statistical Concepts

| Concept | What It Controls |
|---------|----------------|
| **Significance level (α)** | Maximum acceptable false positive rate (typically 5%) |
| **Statistical power (1-β)** | Probability of detecting a real effect (typically 80%) |
| **Sample size** | Determined by significance level, power, baseline CVR, and MDE |
| **P-value** | Probability the result occurred by chance |
| **Confidence interval** | Range within which the true effect likely falls |

All five are connected. Changing one changes the others.

## Common Misconceptions

**"95% significant means I'm 95% sure the variant is better."**
Wrong. It means there's a 5% chance the difference is noise. It says nothing about how much better, or how certain the improvement is in real-world conditions.

**"I should stop as soon as I hit 95% significance."**
Wrong. This is the peeking problem. Significance fluctuates during a test. A variant showing 97% significance on day 4 may drop to 75% by day 14.

**"A 95% significant result will hold after implementation."**
Not guaranteed. Site traffic seasonality, regression to the mean, and novelty effects all cause real-world performance to differ from test results.

## How Much Traffic Do You Need?

Minimum sample size depends on:
- **Baseline CVR** — Lower baseline requires more visitors
- **Minimum detectable effect (MDE)** — Smaller effect requires more visitors
- **Power** — Higher power (90% vs 80%) requires more visitors
- **Significance level** — Higher threshold (99% vs 95%) requires more visitors

At a 3% baseline CVR with 15% MDE, 80% power, and 95% significance: ~10,000 visitors per variant. At 1% baseline with 10% MDE: ~50,000 visitors per variant.

Use a sample size calculator before starting any test. Never determine sample size after the fact.

## Bayesian vs Frequentist Significance

The standard approach described above is frequentist. Some A/B testing platforms (including VWO and Convert) offer Bayesian significance testing, which expresses results differently:

- **Frequentist**: "The probability this result is noise is less than 5%"
- **Bayesian**: "There is an 85% probability that B is better than A by at least X%"

Bayesian testing can handle sequential testing without the peeking problem, but requires careful calibration of priors. For most teams, frequentist testing with strict pre-set sample sizes produces reliable results.

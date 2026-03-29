---
term: "P-Value"
shortDefinition: "The probability that an observed test result occurred by random chance if there is actually no real difference between variants."
category: "A/B Testing"
difficulty: "advanced"
relatedTerms: ["statistical-significance", "ab-testing", "statistical-power", "confidence-interval", "minimum-detectable-effect"]
publishDate: "2026-03-24"
updatedDate: "2026-03-29"
faqs:
  - question: "What is a p-value in A/B testing?"
    answer: "A p-value is the probability of observing a test result as extreme as (or more extreme than) the one measured, assuming there is actually no real difference between the variants (the null hypothesis is true). A p-value of 0.05 means: if the variants are truly identical, there is a 5% chance of seeing a difference this large by random chance alone. Most A/B testing uses a significance threshold of p < 0.05 (95% confidence) — meaning you accept a 5% probability of declaring a false winner. The American Statistical Association published a statement in 2016 clarifying what p-values do and don't mean, following widespread misuse in research."
  - question: "What p-value should I use for A/B testing?"
    answer: "The standard threshold is p < 0.05 (95% statistical significance), meaning you accept a 5% false positive rate. Use p < 0.01 (99% confidence) for high-stakes decisions — implementing a major change across millions of sessions where a false positive would be costly or hard to reverse. p < 0.10 (90% confidence) is not recommended for business decisions — it means 1 in 10 declared winners is actually a false positive. Never relax your threshold mid-test because results are 'almost there' — that's the peeking problem in disguise."
  - question: "Does a low p-value mean a big effect?"
    answer: "No — this is one of the most important misunderstandings in statistics. P-value only tells you how unlikely the result is under the null hypothesis. It says nothing about the size or practical importance of the effect. A very large sample can produce a statistically significant result (tiny p-value) from a trivially small conversion rate difference — say, 3.00% vs 3.02%. The practical significance (effect size) is what determines whether the result is worth acting on. Always interpret p-values alongside effect size and confidence intervals, not in isolation."
  - question: "What is the peeking problem and how does it corrupt p-values?"
    answer: "The peeking problem is checking A/B test results continuously and stopping the test the moment p < 0.05. If you check a test 20 times during its run and stop when p < 0.05, your actual false positive rate is not 5% — it's over 30% (if checking continuously, per Kohavi et al.). P-values fluctuate throughout a test; they will dip below 0.05 multiple times by chance even when variants are truly identical. The fix: pre-commit to a sample size and stopping date before the test starts. Do not check p-values until predetermined end conditions are met."
  - question: "What is the difference between a p-value and a confidence interval?"
    answer: "A p-value answers 'Is this result likely due to chance?' A confidence interval answers 'What is the plausible range of the true effect?' They provide complementary information. P-value: binary significance signal. CI: magnitude and precision of the effect. Both should be reported for every A/B test. A significant p-value with a very wide CI means the result is probably real but the magnitude is uncertain. A non-significant p-value with a CI that spans zero means there's no detectable effect. The most actionable result is a significant p-value AND a CI lower bound that exceeds your minimum detectable effect."
  - question: "What is Bayesian testing and how is it different from p-values?"
    answer: "Traditional A/B testing uses frequentist p-values: 'What is the probability of seeing this data if the null hypothesis is true?' Bayesian testing expresses results as: 'What is the probability that variant B is better than control?' — which is more intuitive. Bayesian testing can also handle sequential testing without the peeking problem, because it updates continuously as data arrives. Tools like VWO and Convert offer Bayesian significance. The trade-off: Bayesian testing requires prior probability assumptions and is more complex to calibrate correctly. For most CRO teams, frequentist testing with strict pre-set sample sizes produces reliable, auditable results."
---

**P-value** is the probability of observing a result at least as extreme as the one measured in your test, assuming the null hypothesis is true — i.e., assuming the variants are actually identical.

**Example:** You run an A/B test. Variant B shows a 15% higher conversion rate than control. The p-value is 0.04. This means: if there were truly no difference between variants, there is only a 4% chance of seeing a result this large by random variation alone. Since 4% < 5% (your significance threshold), you declare a statistically significant result.

## What P-Value Actually Means (and Doesn't Mean)

**What a p-value IS:**
- A measure of how surprising your result would be if the null hypothesis were true
- A probability statement about the *data*, not about the hypothesis
- One component of a complete A/B test analysis

**What a p-value IS NOT:**
- The probability that the null hypothesis is true
- The probability that your result is a false positive
- Evidence of a meaningful or large effect
- Confirmation that the result will hold at 100% traffic
- A sufficient standalone basis for a business decision

## P-Value Thresholds in A/B Testing

| Threshold | Confidence Level | False Positive Rate | Use Case |
|---|---|---|---|
| p < 0.10 | 90% | 1 in 10 results is false | Not recommended for business decisions |
| p < 0.05 | 95% | 1 in 20 results is false | Standard threshold — use by default |
| p < 0.01 | 99% | 1 in 100 results is false | High-stakes, large-scale tests |

The 95% threshold (p < 0.05) is the industry standard for CRO testing. It means you accept a 5% false positive rate — for every 20 tests you call significant, on average one is a false positive.

## The Peeking Problem and P-Values

The most dangerous misuse of p-values in A/B testing: checking results daily and stopping the test the moment p < 0.05.

If you check a test continuously and stop when p < 0.05:
- Checking 1 time: 5% false positive rate (as designed)
- Checking 5 times: ~14% false positive rate
- Checking 20 times: ~23% false positive rate
- Continuous monitoring: 30%+ false positive rate

This is because p-values fluctuate throughout a test; they will dip below 0.05 multiple times by chance even when variants are identical.

**The fix:** Pre-commit to a sample size and stopping date before the test starts. Do not check p-values until the predetermined end condition is met. See [How Long Should You Run an A/B Test?](/blog/how-long-to-run-ab-test/).

## P-Value vs Statistical Significance

In most A/B testing tool UIs, you see "statistical significance" rather than p-values — they're two ways of expressing the same thing:

- **P-value = 0.05** is equivalent to **95% statistical significance**
- **P-value = 0.01** is equivalent to **99% statistical significance**

The relationship: Confidence Level = (1 − p-value) × 100

## P-Value and Effect Size: Don't Confuse Significance with Importance

A statistically significant result (p < 0.05) is not necessarily a *practically meaningful* result.

With very large traffic volumes, tiny differences produce significant p-values:

| Sample Size | Variant CVR Difference | P-Value | Practical Significance |
|---|---|---|---|
| 500/variant | 2.0% → 3.2% | 0.03 | Large and important — ship it |
| 50,000/variant | 2.00% → 2.06% | 0.04 | Statistically significant, practically meaningless |

Always report effect size alongside p-values. A 0.06% CVR improvement reaching significance is not worth the implementation cost or risk of regression.

For the complete A/B testing methodology, see [A/B Testing Mistakes That Invalidate Your Results](/blog/ab-testing-mistakes/).

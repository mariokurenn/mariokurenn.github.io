---
term: "P-Value"
shortDefinition: "The probability that an observed test result occurred by random chance if there is actually no real difference between variants."
category: "A/B Testing"
difficulty: "advanced"
relatedTerms: ["statistical-significance", "ab-testing", "statistical-power", "confidence-interval"]
publishDate: "2026-03-24"
faqs:
  - question: "What is a p-value in A/B testing?"
    answer: "A p-value is the probability of observing a test result as extreme as (or more extreme than) the one measured, assuming there is actually no real difference between the variants (the null hypothesis is true). A p-value of 0.05 means: if the variants are truly identical, there is a 5% chance of seeing a difference this large by random chance. Most A/B testing uses a significance threshold of p < 0.05 (95% confidence) — meaning you accept a 5% probability of declaring a false winner."
  - question: "What p-value should I use for A/B testing?"
    answer: "The standard threshold is p < 0.05 (95% statistical significance), meaning you accept a 5% false positive rate. Some teams use p < 0.01 (99% confidence) for high-stakes decisions — implementing a change across millions of sessions where a false positive would be costly. Using p < 0.10 (90% confidence) is generally not recommended for business decisions — it means 1 in 10 declared winners is actually a false positive. Never relax your threshold mid-test because results are 'almost there' — that's the peeking problem in disguise."
  - question: "Does a low p-value mean a big effect?"
    answer: "No. P-value only tells you how unlikely the result is under the null hypothesis — it says nothing about the size or practical importance of the effect. A very large sample can produce a statistically significant result (tiny p-value) from a trivially small conversion rate difference — say, 3.00% vs 3.02%. The practical significance (effect size) is what determines whether the result is worth acting on. Always interpret p-values alongside effect size and confidence intervals."
---

**P-value** is the probability of observing a result at least as extreme as the one measured in your test, assuming the null hypothesis is true — i.e., assuming the variants are actually identical.

**Example:** You run an A/B test. Variant B shows a 15% higher conversion rate than control. The p-value is 0.04. This means: if there were truly no difference between variants, there is only a 4% chance of seeing a result this large by random variation alone. Since 4% < 5% (your significance threshold), you declare a statistically significant result.

## What P-Value Actually Means (and Doesn't Mean)

**What a p-value IS:**
- A measure of how surprising your result would be if the null hypothesis were true
- A probability about the *data*, not about the hypothesis

**What a p-value IS NOT:**
- The probability that the null hypothesis is true
- The probability that your result is a false positive
- Evidence of a meaningful or large effect
- Confirmation that the result will hold at 100% traffic

## P-Value Thresholds in A/B Testing

| Threshold | Confidence Level | False Positive Rate | Use Case |
|---|---|---|---|
| p < 0.10 | 90% | 1 in 10 results is false | Not recommended for business decisions |
| p < 0.05 | 95% | 1 in 20 results is false | Standard threshold |
| p < 0.01 | 99% | 1 in 100 results is false | High-stakes, large-scale tests |

The 95% threshold (p < 0.05) is the industry standard for CRO testing. It means you accept a 5% false positive rate — for every 20 tests you call significant, on average one is a false positive.

## The Peeking Problem and P-Values

The most dangerous misuse of p-values in A/B testing: checking results daily and stopping the test the moment p < 0.05.

If you check a test 20 times during its run and stop when p < 0.05, your actual false positive rate is not 5% — it's over 30% (if checking continuously). This is because p-values fluctuate throughout a test; they will dip below 0.05 multiple times by chance even when variants are identical.

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
| 500/variant | 2.0% → 3.2% | 0.03 | Large and important |
| 500,000/variant | 2.00% → 2.01% | 0.04 | Statistically significant, practically meaningless |

Always report effect size alongside p-values. A 0.01% CVR improvement reaching significance is not worth the implementation cost.

For the complete A/B testing methodology, see [A/B Testing Mistakes That Invalidate Your Results](/blog/ab-testing-mistakes/).

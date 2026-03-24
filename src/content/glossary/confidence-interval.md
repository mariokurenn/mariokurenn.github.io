---
term: "Confidence Interval"
shortDefinition: "A range of values within which the true effect of an A/B test variant is likely to fall — more informative than a single point estimate."
category: "A/B Testing"
difficulty: "advanced"
relatedTerms: ["statistical-significance", "p-value", "ab-testing", "statistical-power"]
publishDate: "2026-03-24"
faqs:
  - question: "What is a confidence interval in A/B testing?"
    answer: "A confidence interval (CI) is a range of values within which the true conversion rate effect is likely to fall with a specified probability. A 95% confidence interval means: if you ran this exact test 100 times, approximately 95 of those tests would produce a confidence interval that contains the true effect. In A/B testing, a result might show 'Variant B improves CVR by 15% (95% CI: 3% to 27%)' — meaning the true improvement could plausibly be anywhere from 3% to 27%."
  - question: "What does a wide vs narrow confidence interval mean?"
    answer: "The width of a confidence interval reflects the precision of your estimate — which is primarily determined by sample size. A narrow CI (e.g., 14%–16% improvement) means you have a precise estimate of the true effect. A wide CI (e.g., 2%–28%) means high uncertainty — the true effect could be anywhere in that range. Wide confidence intervals are typical in underpowered tests (insufficient sample size). They don't necessarily mean the result is wrong, but they mean you should be cautious about acting on it."
  - question: "Should I use p-value or confidence interval to judge A/B test results?"
    answer: "Use both — they provide complementary information. P-value tells you whether the result is statistically significant (unlikely to be random noise). Confidence interval tells you the magnitude and precision of the effect. A statistically significant result with a very wide CI might technically be significant but practically uncertain. A result where the lower bound of the CI is still above your MDE is more compelling than one where the CI spans from near-zero to very large. Together, they give you significance AND practical meaning."
---

**A confidence interval (CI)** is a range of values within which the true effect of an A/B test is likely to fall, with a specified level of confidence.

**Example:** "Variant B shows a 15% improvement in CVR (95% CI: 4.2%–25.8%)"

This means: with 95% confidence, the true effect of the variant is somewhere between a 4.2% and 25.8% improvement over control. The 15% is the point estimate (most likely value); the CI tells you how certain you should be about that estimate.

## What Confidence Interval Actually Means

A 95% confidence interval does **not** mean "there is a 95% probability that the true value is in this range." (This is the most common misinterpretation.)

What it actually means: if you conducted this experiment 100 times with fresh samples each time and calculated a 95% CI from each, approximately 95 of those 100 CIs would contain the true value.

**Practically:** A 95% CI gives you a plausible range for the true effect, constructed using a method that captures the true value 95% of the time.

## CI Width and What It Tells You

| CI Width | Interpretation | Cause | Action |
|---|---|---|---|
| Narrow (e.g., 13%–17%) | Precise estimate, high confidence in magnitude | Large sample size | Strong basis for decision |
| Moderate (e.g., 8%–22%) | Reasonable estimate with expected uncertainty | Adequate sample | Proceed with informed caution |
| Wide (e.g., -2%–32%) | Highly uncertain estimate | Underpowered test | Extend test or collect more data |
| CI includes zero | No detected effect | True null or underpowered | Do not ship |

## CI vs P-Value: The Full Picture

P-value and confidence interval are complementary:

| Metric | Tells you | Doesn't tell you |
|---|---|---|
| **P-value** | Is the result likely due to chance? | How large or precise the effect is |
| **Confidence interval** | The plausible range of the effect | Whether the result is "significant" |

**Best practice:** Always report both.

- Significant p-value + narrow CI = high confidence in the effect size → ship
- Significant p-value + very wide CI = significant but imprecise → consider extending
- Non-significant p-value + CI that includes zero = no detectable effect → null result

## Practical Application: "Is This Worth Shipping?"

Use the lower bound of the confidence interval for conservative decision-making:

**Example:** Test shows 15% CVR improvement, 95% CI: 4%–26%.

Question: "Even in the worst case (4% improvement), is this variant worth implementing?"

If yes → ship. The minimum realistic benefit (lower CI bound) still exceeds your implementation cost.

If no → the uncertainty means the risk of implementing isn't justified by the potential reward.

## Confidence Intervals and Sequential Testing

For teams using sequential testing (making ongoing decisions as data comes in), confidence intervals are especially important because:
- Point estimates fluctuate wildly early in a test
- CI width decreases as sample size grows
- Decisions made when CI is still wide are far more likely to be wrong

The standard: wait until the CI has narrowed enough that the lower bound exceeds your minimum acceptable effect size.

For the complete framework on when to stop a test, see [How Long Should You Run an A/B Test?](/blog/how-long-to-run-ab-test/).

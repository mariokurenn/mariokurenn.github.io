---
term: "Confidence Interval"
shortDefinition: "A range of values within which the true effect of an A/B test variant is likely to fall — more informative than a single point estimate."
category: "A/B Testing"
difficulty: "advanced"
relatedTerms: ["statistical-significance", "p-value", "ab-testing", "statistical-power", "minimum-detectable-effect"]
publishDate: "2026-03-24"
updatedDate: "2026-03-29"
faqs:
  - question: "What is a confidence interval in A/B testing?"
    answer: "A confidence interval (CI) is a range of values within which the true conversion rate effect is likely to fall with a specified probability. A 95% confidence interval means: if you ran this exact test 100 times with fresh samples each time, approximately 95 of those tests would produce a confidence interval that contains the true effect. In A/B testing, a result might show 'Variant B improves CVR by 15% (95% CI: 3% to 27%)' — meaning the true improvement is plausibly anywhere from 3% to 27%, not necessarily 15%."
  - question: "What does a wide vs narrow confidence interval mean?"
    answer: "The width of a confidence interval reflects the precision of your estimate — primarily determined by sample size. A narrow CI (e.g., 14%–16% improvement) means you have a precise estimate and can act confidently on the magnitude of the effect. A wide CI (e.g., 2%–28%) means high uncertainty — the true effect could be anywhere in that range. Wide confidence intervals are typical in underpowered tests (insufficient sample size or short run time). They don't necessarily mean the result is wrong, but they mean you should be cautious about acting on the specific magnitude."
  - question: "Should I use p-value or confidence interval to judge A/B test results?"
    answer: "Use both — they provide complementary information. P-value tells you whether the result is statistically significant (unlikely to be random noise). Confidence interval tells you the magnitude and precision of the effect. A statistically significant result with a very wide CI might technically be significant but practically uncertain. The most actionable test result is: (1) statistically significant p-value AND (2) lower bound of CI still above your minimum threshold for implementation. Together, they give you both significance and practical confidence."
  - question: "What is the most common misinterpretation of a confidence interval?"
    answer: "The most common misinterpretation: 'There is a 95% probability that the true value is in this range.' This is incorrect. What a 95% CI actually means: the method used to construct this interval, if applied to 100 independent samples, would produce intervals containing the true value 95 times. The CI says something about the long-run reliability of the method, not about the probability that this specific interval contains the true value. In practice, this distinction matters less for business decisions than understanding that the CI represents the plausible range of effect, not a guarantee."
  - question: "How should I use confidence intervals to make shipping decisions?"
    answer: "Use the lower bound of the confidence interval for conservative decision-making. If your test shows a 15% CVR improvement with 95% CI of 4%–26%, ask: 'Even in the worst plausible case (4% improvement), is this variant worth implementing given the cost?' If yes, ship. If the lower bound is below zero (CI spans from negative to positive), the test is inconclusive — do not ship. If the entire CI is above your MDE, you have strong evidence for a meaningful improvement. For high-stakes decisions (site-wide changes, pricing changes), require the lower CI bound to exceed zero before shipping."
  - question: "How do confidence intervals relate to sample size?"
    answer: "Confidence interval width is inversely related to sample size: larger samples produce narrower CIs, smaller samples produce wider ones. Doubling your sample size reduces CI width by approximately 30% (it decreases by a factor of √2). This is why underpowered tests — stopped early or run on low-traffic pages — produce wide CIs with high uncertainty. The pre-test sample size calculation determines what CI width you'll achieve at the end of the test, which is why calculating sample size before starting is essential."
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
| CI includes zero | No detected effect above noise | True null or underpowered | Do not ship |

## How CI Width Changes with Sample Size

The CI narrows as sample size grows. This is the core reason for pre-calculating sample size:

| Visitors per variant | Typical CI width | Decision confidence |
|----------------------|-----------------|---------------------|
| 500 | ±15–20% relative | Very uncertain |
| 2,000 | ±8–12% relative | Moderate |
| 5,000 | ±5–8% relative | Reasonable |
| 10,000 | ±3–5% relative | Good |
| 20,000+ | ±2–3% relative | Strong |

*Approximate values for a 2–5% baseline CVR at 95% confidence*

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
- Non-significant p-value + CI that excludes zero = borderline — gather more data

## Practical Application: "Is This Worth Shipping?"

Use the lower bound of the confidence interval for conservative decision-making:

**Example:** Test shows 15% CVR improvement, 95% CI: 4%–26%.

Question: "Even in the worst case (4% improvement), is this variant worth implementing given the implementation cost?"

If yes → ship. The minimum realistic benefit (lower CI bound) still exceeds your implementation cost.

If no → the uncertainty means the risk of implementing isn't justified by the potential reward at the lower bound.

## Confidence Intervals and Sequential Testing

For teams using sequential testing (making ongoing decisions as data comes in), confidence intervals are especially important because:
- Point estimates fluctuate wildly early in a test
- CI width decreases as sample size grows
- Decisions made when CI is still wide are far more likely to be wrong

The standard: wait until the CI has narrowed enough that the lower bound exceeds your minimum acceptable effect size.

For the complete framework on when to stop a test, see [How Long Should You Run an A/B Test?](/blog/how-long-to-run-ab-test/). For statistical power — the complement to confidence intervals — see [Statistical Power](/cro-glossary/statistical-power/).

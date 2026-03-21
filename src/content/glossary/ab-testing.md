---
term: "A/B Testing"
shortDefinition: "A controlled experiment comparing two versions of a webpage to determine which produces more conversions."
category: "A/B Testing"
difficulty: "beginner"
relatedTerms: ["statistical-significance", "conversion-rate", "split-testing", "landing-page", "funnel-optimization"]
publishDate: "2026-03-21"
faqs:
  - question: "What is A/B testing?"
    answer: "A/B testing (also called split testing) is a controlled experiment that compares two versions of a webpage, email, or interface element — Version A (control) and Version B (variant) — to determine which produces more conversions. Visitor traffic is randomly split between both versions and statistical analysis determines whether the difference is real or due to chance."
  - question: "How long should an A/B test run?"
    answer: "An A/B test should run for a minimum of 14 days (two complete business cycles) AND until each variant reaches the pre-calculated minimum sample size — whichever takes longer. Stopping tests early, even when results look significant, leads to false positives. The false positive rate jumps from 5% to over 26% if you check results 5 times during a test."
  - question: "How many visitors do I need for an A/B test?"
    answer: "Sample size requirements depend on your baseline conversion rate, minimum detectable effect (MDE), statistical power (typically 80%), and significance level (typically 95%). At a 3% baseline CVR targeting a 15% relative improvement, you need approximately 10,000 visitors per variant. Always calculate sample size before starting — not after — using a dedicated calculator."
---

**A/B testing** is a randomised controlled experiment that compares two versions of a webpage, email, or interface element to determine which produces a higher conversion rate. Version A (the control) represents the current design; Version B (the variant) contains a single proposed change.

Traffic is randomly split between both versions. After collecting sufficient data, statistical analysis determines whether the observed difference in conversion rate is likely real or the result of random variation.

## How A/B Testing Works

1. **Identify a conversion problem** — Use analytics and heatmaps to find pages where visitors drop off
2. **Form a hypothesis** — "Because we observed [data], we believe [change] will improve [metric] for [segment]"
3. **Calculate required sample size** — Before the test starts, determine how many visitors per variant you need
4. **Run the test** — Split traffic 50/50, collect data until sample size and minimum duration are met
5. **Analyse results** — Check statistical significance, segment by device/source/audience
6. **Implement or discard** — Ship winners, log learnings from both outcomes

## What Can You A/B Test?

| Element | Impact Potential |
|---------|----------------|
| Headlines | ★★★★★ Highest — often 20–50% lift |
| CTA copy and placement | ★★★★☆ |
| Hero section / above the fold | ★★★★☆ |
| Social proof placement | ★★★☆☆ |
| Form length | ★★★☆☆ |
| Page layout | ★★★☆☆ |
| Button colour | ★☆☆☆☆ Lowest — rarely moves the needle |

The biggest A/B testing gains come from copy, offer framing, and trust architecture — not cosmetic changes.

## The Peeking Problem

The most common A/B testing mistake: checking results before hitting your sample size and stopping when you see a winning variant.

Statistical significance fluctuates constantly during a test. A variant showing 95% confidence on day 3 may drop to 60% by day 14. If you stop on day 3, you've shipped a false positive.

Checking results 5 times during a test inflates the false positive rate from **5% to 26%**. The fix: decide when the test ends before it starts, and don't open the dashboard until then.

## A/B Testing vs Multivariate Testing

| | A/B Test | Multivariate Test |
|-|----------|-----------------|
| What's tested | One element, two variations | Multiple elements simultaneously |
| Traffic needed | Lower | Much higher |
| Results | Which version wins | Which *combination* of elements wins |
| Best for | Most tests | High-traffic pages with multiple hypotheses |

A/B testing is right for 90%+ of tests. Multivariate testing requires enough traffic to support many variant combinations simultaneously.

## Tools for A/B Testing

Popular platforms: VWO, Optimizely, AB Tasty, Google Optimize (sunset), Convert. Statistical analysis can also be done manually using a chi-squared test or a dedicated significance calculator.

Running tests correctly requires more than a tool — it requires a structured [testing methodology](/blog/ab-testing-best-practices/) that prevents common statistical errors.

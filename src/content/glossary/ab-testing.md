---
term: "A/B Testing"
shortDefinition: "A controlled experiment comparing two versions of a webpage to determine which produces more conversions."
category: "A/B Testing"
difficulty: "beginner"
relatedTerms: ["statistical-significance", "conversion-rate", "landing-page", "funnel-optimization", "multivariate-testing"]
publishDate: "2026-03-21"
updatedDate: "2026-03-29"
faqs:
  - question: "What is A/B testing?"
    answer: "A/B testing (also called split testing) is a controlled experiment that compares two versions of a webpage, email, or interface element — Version A (control) and Version B (variant) — to determine which produces more conversions. Visitor traffic is randomly split between both versions and statistical analysis determines whether the difference is real or due to chance. The method was formally established in marketing by Ron Kohavi at Microsoft in the early 2000s, and is now the gold standard for evidence-based conversion optimization."
  - question: "How long should an A/B test run?"
    answer: "An A/B test should run for a minimum of 14 days (two complete business cycles) AND until each variant reaches the pre-calculated minimum sample size — whichever takes longer. Stopping tests early, even when results look significant, leads to false positives. Research by Ronny Kohavi and Roger Longbotham found that the false positive rate jumps from 5% to over 26% if you check results 5 times during a test. The 14-day minimum accounts for weekly behavioral cycles — Tuesday traffic converts differently than Sunday traffic."
  - question: "How many visitors do I need for an A/B test?"
    answer: "Sample size requirements depend on your baseline conversion rate, minimum detectable effect (MDE), statistical power (typically 80%), and significance level (typically 95%). At a 3% baseline CVR targeting a 15% relative improvement, you need approximately 10,000 visitors per variant. At a 1% baseline with the same MDE, you need roughly 30,000 per variant. Always calculate sample size before starting — not after — using Evan Miller's sample size calculator (evanmiller.org/ab-testing/sample-size.html) or VWO's duration calculator."
  - question: "What is the most important element to A/B test first?"
    answer: "The highest-impact A/B tests — in order of typical effect size — are: (1) headlines and value proposition copy, which often produce 20–50% CVR differences, (2) CTA copy and placement, (3) hero section or above-the-fold layout, (4) social proof type and position, (5) form length. Button color is frequently tested but rarely moves the needle meaningfully. Start with the hypothesis most grounded in research — a customer interview insight or a session recording observation — not with cosmetic changes."
  - question: "What is the peeking problem in A/B testing?"
    answer: "The peeking problem is the practice of checking A/B test results before reaching the pre-set sample size and stopping the test early when a 'winner' appears. Statistical significance fluctuates constantly during a test — a variant showing 95% confidence on day 3 may drop to 60% by day 14. If you stop on day 3, you've shipped a false positive. Checking results 5 times during a test inflates the false positive rate from 5% to 26% (Kohavi et al., 2014). The solution: decide the stopping conditions before the test starts and do not open the dashboard until those conditions are met."
  - question: "What is the difference between A/B testing and split testing?"
    answer: "A/B testing and split testing are synonymous terms for the same method. Both describe randomly splitting traffic between a control (original) and variant (changed) version of a page, then using statistical analysis to determine which performs better. The distinction sometimes drawn is between 'A/B testing' (comparing two page variants at the same URL using JavaScript injection) and 'split URL testing' (redirecting visitors to entirely different URLs). For CRO purposes, both methods apply the same statistical framework — the difference is technical implementation."
---

**A/B testing** is a randomised controlled experiment that compares two versions of a webpage, email, or interface element to determine which produces a higher conversion rate. Version A (the control) represents the current design; Version B (the variant) contains a single proposed change.

Traffic is randomly split between both versions. After collecting sufficient data, statistical analysis determines whether the observed difference in conversion rate is likely real or the result of random variation.

## How A/B Testing Works

1. **Identify a conversion problem** — Use analytics, heatmaps, and session recordings to find pages where visitors drop off or fail to convert
2. **Form a hypothesis** — "Because we observed [data], we believe [change] will improve [metric] for [segment]"
3. **Calculate required sample size** — Before the test starts, determine how many visitors per variant you need at your chosen significance level and power
4. **Run the test** — Split traffic 50/50, collect data until sample size and minimum duration are met
5. **Analyse results** — Check statistical significance, effect size, and segment by device/source/audience
6. **Implement or discard** — Ship winners, log learnings from both outcomes

The hypothesis step is often skipped — and skipping it is what separates random tinkering from systematic CRO. Every test should be connected to a specific observation from user research.

## What to A/B Test (and What Not to)

| Element | Impact Potential | Notes |
|---------|----------------|-------|
| Headlines and value proposition | ★★★★★ Highest — often 20–50% lift | Start here |
| CTA copy and placement | ★★★★☆ High | First-person copy typically wins |
| Hero section / above the fold | ★★★★☆ High | Affects first impression and bounce |
| Social proof placement and type | ★★★☆☆ Medium | Specific testimonials beat generic |
| Form length | ★★★☆☆ Medium | Remove unnecessary fields |
| Page layout | ★★★☆☆ Medium | Requires design resources |
| Button colour | ★☆☆☆☆ Lowest | Only matters if current has no contrast |

The biggest A/B testing gains come from copy, offer framing, and trust architecture — not cosmetic changes.

## A/B Test Benchmarks and Effect Sizes

Most CRO practitioners report that well-researched A/B tests produce these results over time:

| Outcome | Frequency |
|---------|-----------|
| Statistically significant winner | ~25–30% of tests |
| Inconclusive (insufficient data) | ~40–50% of tests |
| Control wins (variant loses) | ~15–20% of tests |
| Statistically significant loser | ~10% of tests |

This means most tests don't produce clear winners — and that's expected. The value of A/B testing is cumulative: the tests that do win compound into significant long-term CVR improvement. [Microsoft Research (Kohavi et al.)](https://www.exp-platform.com/Documents/2014%20experimentersRulesOfThumb.pdf) found that only about 1 in 3 tests at top tech companies produces a statistically significant positive result.

## The Peeking Problem

The most common A/B testing mistake: checking results before hitting your sample size and stopping when you see a winning variant.

Statistical significance fluctuates constantly during a test. A variant showing 95% confidence on day 3 may drop to 60% by day 14. If you stop on day 3, you've shipped a false positive.

Checking results 5 times during a test inflates the false positive rate from **5% to 26%**. The fix: decide when the test ends before it starts, and don't open the dashboard until then.

## A/B Testing vs Multivariate Testing

| | A/B Test | Multivariate Test |
|-|----------|-----------------|
| What's tested | One element, two variations | Multiple elements simultaneously |
| Traffic needed | Lower | Much higher (5–10× more) |
| Results | Which version wins | Which combination of elements wins |
| Best for | 90%+ of all tests | High-traffic pages with multiple hypotheses |

A/B testing is the right tool for the vast majority of CRO scenarios. Multivariate testing requires enough traffic to support many variant combinations simultaneously — typically 100,000+ monthly sessions. See [Multivariate Testing](/cro-glossary/multivariate-testing/) for when to escalate.

## Common A/B Testing Mistakes

1. **Testing without a hypothesis** — Changes made without research backing are random guesses
2. **Running too many tests simultaneously** — Overlapping tests pollute each other's data
3. **Stopping at significance without hitting sample size** — The peeking problem in practice
4. **Not segmenting results** — A test that "loses" overall may win on mobile or for paid traffic
5. **Ignoring interaction effects** — A winning headline may perform differently with a different hero image

## Tools for A/B Testing

Popular platforms: VWO, Optimizely, AB Tasty, Convert. Statistical analysis can also be done manually using a chi-squared test or a dedicated significance calculator.

Running tests correctly requires more than a tool — it requires a structured [testing methodology](/blog/ab-testing-best-practices/) that prevents common statistical errors. For the seven most common mistakes that invalidate results, see [A/B Testing Mistakes](/blog/ab-testing-mistakes/).

A/B testing is the primary delivery mechanism of any [CRO programme](/services/ab-testing/) — every insight from research eventually becomes a test hypothesis.

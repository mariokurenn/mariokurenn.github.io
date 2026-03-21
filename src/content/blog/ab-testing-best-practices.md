---
title: "A/B Testing Best Practices: How to Run Tests That Actually Mean Something"
description: "Run statistically valid A/B tests that produce reliable results. Avoid common mistakes that waste months of effort and generate false positive winners."
publishDate: "2026-02-01"
updatedDate: "2026-03-05"
author: "Mario Kuren"
category: "A/B Testing"
tags: ["a/b testing", "split testing", "statistics", "cro"]
seoKeyword: "a/b testing best practices"
image: "/images/blog/ab-testing-best-practices.svg"
imageAlt: "A/B test comparison chart showing control vs variant conversion rates with statistical significance"
draft: false
howTo:
  name: "How to Run a Statistically Valid A/B Test"
  description: "A step-by-step process for running A/B tests that produce reliable, actionable results — not false positives."
  steps:
    - name: "Calculate sample size before you start"
      text: "Use a sample size calculator with your baseline CVR, minimum detectable effect (MDE), 80% statistical power, and 95% significance threshold. Never start a test without knowing the required sample size."
    - name: "Define one primary success metric"
      text: "Every test needs a single primary metric — checkout completion, form submission rate, or trial sign-ups. Secondary metrics can be monitored, but the test result is based on the primary metric only."
    - name: "Set up the test and lock the end date"
      text: "Set up your A/B testing tool (VWO, Optimizely, or Google Optimize), split traffic 50/50, and schedule a calendar reminder for when the test ends. Do not touch the dashboard until then."
    - name: "Never peek at results during the test"
      text: "Checking results early inflates the false positive rate from 5% to over 26%. Commit to the pre-set end date. If the test looks significant on day 3, it may not be by day 14."
    - name: "Run for at least two full business cycles"
      text: "Always run tests for a minimum of 14 days, even if you hit the sample size sooner. This captures weekday/weekend behavioral variance and avoids misleading day-of-week effects."
    - name: "Segment the results before declaring a winner"
      text: "Break down results by device type, traffic source, and new vs. returning visitors. A test winning on desktop may lose on mobile. A site-wide implementation of a desktop winner can destroy mobile conversions."
    - name: "Document the result and next hypothesis"
      text: "Log the hypothesis, date range, sample size, CVR per variant, confidence level, winner, and — most importantly — the learning. What does this result tell you about your audience? What's the next hypothesis?"
faqs:
  - question: "What is A/B testing?"
    answer: "A/B testing (also called split testing) is a controlled experiment that compares two versions of a webpage, email, or interface element — Version A (the control) versus Version B (the variant) — to determine which produces more conversions. Visitor traffic is randomly split between both versions, and statistical analysis determines whether any observed difference is real or due to chance."
  - question: "How many visitors do I need to run an A/B test?"
    answer: "The required sample size depends on your baseline conversion rate, the minimum detectable effect (MDE), statistical power (typically 80%), and significance threshold (typically 95%). As a practical example: at a 3% baseline CVR targeting a 15% relative improvement, you need approximately 10,000 visitors per variant. Always calculate sample size before starting — running tests on insufficient traffic produces unreliable results."
  - question: "How long should an A/B test run?"
    answer: "An A/B test should run for a minimum of 14 days (two full business cycles) AND until each variant reaches the pre-calculated minimum sample size — whichever condition takes longer. Running tests for fewer than 14 days misses weekday/weekend behavioral variation. Stopping early when results look significant is the peeking problem, which inflates false positive rates from 5% to over 26%."
  - question: "What is statistical significance in A/B testing?"
    answer: "Statistical significance at 95% means there is a 5% probability that the observed difference between test variants occurred by random chance. It does not confirm the magnitude of the improvement or guarantee real-world revenue impact — it only confirms the measured difference is likely not noise. A statistically significant result with a small effect size may not justify the implementation effort."
  - question: "What should I test first in A/B testing?"
    answer: "Prioritise testing on pages with the highest traffic and clearest conversion actions. Test elements in order of impact: (1) headlines — highest leverage, easiest to run, (2) primary CTAs — copy, colour, placement, (3) hero section — above-the-fold experience, (4) social proof — testimonials, logos, stats, (5) form length — fewer fields typically converts better. Avoid testing low-traffic pages; you won't reach statistical significance in a reasonable timeframe."
---

Most companies run A/B tests wrong. They peek at results early, stop tests when they see a winner, and end up with a library of false positives that provide zero lasting lift.

This guide covers the A/B testing best practices that separate rigorous optimizers from companies playing roulette with their conversion rate.

## Why Most A/B Tests Fail

Before getting into best practices, let's understand the enemy: statistical noise.

When you run a test, you're not just measuring a difference — you're measuring whether the difference is *real* or just random variation. This is where most teams fail:

- **Underpowered tests**: Not enough traffic to detect a real difference
- **Early stopping**: Declaring a winner before collecting enough data
- **Multiple testing**: Running many tests simultaneously without correction
- **Segment confusion**: A winner on desktop can be a loser on mobile

The result? You "optimize" your site based on false data and wonder why you don't see real revenue impact.

## Best Practice #1: Calculate Sample Size Before You Start

This is non-negotiable. Before running any test, use a sample size calculator to determine how many visitors you need per variant.

Inputs you need:
- **Baseline conversion rate**: Your current CVR (e.g., 3%)
- **Minimum detectable effect**: The smallest lift worth detecting (e.g., 10% relative = 0.3pp)
- **Statistical power**: Typically 80% (you accept 20% chance of missing a real effect)
- **Significance level**: Typically 95% (5% chance of a false positive)

A common mistake is setting MDE too low. If you're at 3% CVR and trying to detect a 5% relative improvement (0.15pp), you might need 50,000 visitors per variant. If you only get 5,000 visitors/month, that's a 20-month test. Not practical.

Instead, target realistic effects: if your hypothesis is solid, aim for 15-20%+ relative improvement as your MDE.

## Best Practice #2: Never Peek at Results

This is the hardest discipline in A/B testing. Once a test is running, **do not look at results until you've hit your predetermined sample size**.

Why? Because conversion rates fluctuate dramatically day-to-day. On day 3 of a test, your variant might be "winning" at 95% confidence — and by day 14, it's at 60%. If you stopped on day 3, you'd implement a change based on noise.

This is called the **peeking problem**, and it inflates your false positive rate from 5% to 26% if you check results 5 times during a test.

**The fix**: Decide upfront when the test ends (minimum visitors reached), set a calendar reminder, and don't touch the dashboard until then.

## Best Practice #3: Run Tests for Full Business Cycles

Even if you hit your sample size in 5 days, run the test for at least 2 full business cycles (2 weeks minimum).

Why? User behavior varies by day of week. A Wednesday conversion pattern is different from a Saturday one. If you run a test Monday-Friday, you've missed the weekend audience entirely.

For most businesses, a minimum of 14 days captures enough weekly variance to trust your results.

## Best Practice #4: Segment Your Results

A flat "A beats B by 15%" result hides important details. Always segment test results by:

- **Device type**: Mobile vs. desktop often have wildly different results
- **Traffic source**: Paid traffic converts differently than organic
- **New vs. returning visitors**: Returning visitors already know your brand
- **Geography**: Regional differences in behavior and buying patterns

A test that shows a 5% lift overall might show +25% on mobile and -10% on desktop. If you implement site-wide, you destroy desktop conversions.

## Best Practice #5: Test One Variable at a Time (Mostly)

The classic A/B testing rule is: change one thing. Test the headline, OR the CTA, OR the hero image — not all three.

Why? Because if you change three things and B wins, you don't know *which* change drove the win. You can't learn from it or apply the insight elsewhere.

**Exception**: Full-page redesigns. Sometimes you need to test a completely different page design (different layout, copy, structure). This is called a "challenger vs. champion" test. When you have a winner, you run follow-up tests to isolate which elements drove the improvement.

## Best Practice #6: Have a Clear Success Metric

Every test needs one primary success metric. Don't try to optimize for five things at once.

Primary metric examples:
- Checkout completion rate
- Lead form submission rate
- Free trial sign-ups
- Clicks to product page

Secondary metrics (monitor but don't optimize for):
- Time on page
- Scroll depth
- Revenue per visitor (noisy, needs more data)

If your primary metric shows no significant difference but a secondary metric looks interesting, you don't have a winner — you have a new hypothesis to test.

## Best Practice #7: Document Everything in a Test Log

This is where most companies fail long-term. They run tests, get results, implement winners — and then completely forget what they learned.

A test log should include:
- **Hypothesis**: What did you expect and why?
- **Date range and traffic split**: When did it run and how?
- **Results**: CVR per variant, confidence level, sample size
- **Winner**: Which variant won? By how much?
- **Learnings**: What does this tell you about your audience?
- **Next test**: What hypothesis does this suggest?

After 50+ tests, your learnings become a competitive moat. You understand your audience at a level no competitor can replicate.

## What to Test First

If you're new to A/B testing, prioritize in this order:

1. **Headlines** — Highest impact, easiest to test
2. **Primary CTA** — Copy, color, placement
3. **Hero section** — Above-the-fold experience
4. **Social proof placement** — Testimonials, logos, stats
5. **Form length** — Fewer fields typically converts better
6. **Pricing page layout** — Especially plan comparison

Start with pages that have the most traffic. A winner on your checkout page is worth 10x more than a winner on your About page.

Ready to run tests that actually move revenue? [Let's build your testing roadmap →](/contact/)

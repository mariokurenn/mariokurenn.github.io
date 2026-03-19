---
title: "A/B Testing Best Practices: How to Run Tests That Actually Mean Something"
description: "Run statistically valid A/B tests that produce reliable results. Avoid common mistakes that waste months of effort and generate false positive winners."
publishDate: "2026-02-01"
updatedDate: "2026-03-05"
author: "Mario"
category: "A/B Testing"
tags: ["a/b testing", "split testing", "statistics", "cro"]
seoKeyword: "a/b testing best practices"
draft: false
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

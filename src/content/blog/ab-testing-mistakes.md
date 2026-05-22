---
title: "7 A/B Testing Mistakes That Invalidate Your Results (And How to Fix Them)"
seoTitle: "7 A/B Testing Mistakes That Invalidate Results"
description: "Most A/B tests are invalid before they finish. 7 critical mistakes produce false winners. Learn how to fix them with real examples from Reddit."
publishDate: "2026-04-14"
author: "Mario Kuren"
category: "A/B Testing"
tags: ["a/b testing", "statistics", "split testing", "cro", "testing mistakes"]
seoKeyword: "a/b testing mistakes"
image: "/images/blog/ab-testing-mistakes.webp"
imageHero: "/images/blog/ab-testing-mistakes.svg"
imageAlt: "Red warning signs overlaid on an A/B testing dashboard showing common errors in split test setup and analysis"
draft: false
faqs:
  - question: "What is the most common A/B testing mistake?"
    answer: "Stopping tests early — also called 'peeking.' Checking results daily and stopping at the moment significance is reached inflates false positive rates from 5% to over 30%. Pre-commit to a sample size and runtime before launch."
  - question: "Can I run multiple A/B tests at the same time?"
    answer: "Yes, if they test different pages or non-overlapping elements on the same page and your traffic supports it. Under 20,000 sessions/month, run one test at a time to avoid interaction effects and insufficient sample sizes per variant."
  - question: "What is a Sample Ratio Mismatch in A/B testing?"
    answer: "An SRM occurs when the actual traffic split between variants differs from the intended split (e.g., 53/47 instead of 50/50). Even small mismatches indicate a technical problem with randomization or caching that can bias results. Always check for SRM before reading results."
  - question: "How do I know if my A/B test results are reliable?"
    answer: "Check five things: (1) Did you reach pre-planned sample size? (2) Did you run for 2+ business cycles? (3) Is the traffic split close to 50/50? (4) Is traffic filtered for bots and internal sessions? (5) Are you measuring a business outcome, not a proxy metric?"
  - question: "How many A/B tests should I run per month?"
    answer: "Quality over quantity. One rigorous, well-structured test per month compounds into real optimization gains over time. Five poorly structured tests produce noise and false winners. With 50,000+ sessions/month, running 2–3 concurrent tests on different pages is achievable."
  - question: "What is an A/A test and why does it matter?"
    answer: "An A/A test sends equal traffic to two identical variants. It should show no significant difference. If it does, your testing infrastructure is broken — the randomization algorithm is biased or tracking fires differently on each variant. Run an A/A test before launching any major test program."
howTo:
  name: "How to Set Up a Valid A/B Test"
  description: "The five steps to ensure your A/B test produces statistically reliable results."
  steps:
    - name: "Write a hypothesis before launch"
      text: "Define what you're changing, why you expect it to work, and what metric you're measuring. A hypothesis prevents post-hoc rationalization of accidental results."
    - name: "Calculate required sample size"
      text: "Use a sample size calculator with your baseline CVR, target MDE (minimum detectable effect), 95% significance, and 80% power. Write this number down before launching."
    - name: "Set minimum runtime of 2 full weeks"
      text: "Day-of-week behavioral effects are real and significant. Always run for at least 2 complete calendar weeks regardless of when statistical significance is reached."
    - name: "Check for Sample Ratio Mismatch before reading results"
      text: "Verify the actual traffic split is close to the intended 50/50. A significant imbalance (e.g., 53/47) indicates a technical issue that invalidates the test."
    - name: "Measure a business outcome as your primary metric"
      text: "Revenue, purchases, signups, or demo requests — not clicks, scroll depth, or time on page. Only business outcomes justify shipping a variant."
---

Here's a conversation I had with a product manager last week. She was frustrated. "We've been running A/B tests for months," she said, "and every time we ship a 'winner,' it doesn't hold up in production. What are we doing wrong?"

The answer? Almost everything.

After reviewing hundreds of A/B testing programs across e-commerce, SaaS, and B2B companies, I've noticed a pattern. Most teams aren't running invalid tests by accident—they're running them by design. They're checking results daily. They're shipping the moment they see p < 0.05. They're testing five things at once. And they're wondering why their "winners" disappear after launch.

The frustrating part? These mistakes are completely fixable. But they require discipline, not complexity.

*Before reading this, make sure you know [how long to run an A/B test](/blog/how-long-to-run-ab-test/) — it's the foundation everything else builds on.*

---

## Mistake 1: Stopping the Test as Soon as It Hits Significance (The "Peeking" Problem)

Let me describe what I see happen in most companies. It's Monday. Your test has been running for three days. You check your dashboard. The variant is up 12% with 96% confidence. You call the team. "We have a winner," you say. By Friday, you've shipped it.

By the following Wednesday, the lift has vanished.

This is called "peeking," and it's the single most expensive mistake in A/B testing. Here's why it happens: **every time you check your results, you increase the probability of seeing a false positive by random chance.**

Think of it like flipping a coin. If you want to prove the coin is "lucky," you could just flip it until you get three heads in a row, then stop. If you keep flipping and only stop when you see that specific pattern, you aren't measuring the coin. You're just waiting for a random pattern to appear. That's peeking.

Statistically, here's what's happening. A 95% confidence level means: "If the null hypothesis is true (the variants are identical), I would see this result 5% of the time by random chance." But that 5% only applies if you commit to a fixed sample size and stop there. When you peek multiple times, you multiply your chances of seeing a false positive with every check. Research from [Spotify's experimentation platform](https://engineering.atspotify.com/2023/07/bringing-sequential-testing-to-experiments-with-longitudinal-data-part-1-the-peeking-problem-2-0/) shows that checking results daily and stopping at the first significant result inflates your false positive rate from 5% to over 30%.

**The real cost:** One product manager [on Reddit](https://www.reddit.com/r/ProductManagement/comments/1snuq6z/a_lot_of_ab_test_wins_are_just_fake/) described it perfectly: "A false winner doesn't just fail to lift revenue; it locks in a worse experience and stops you from testing that area for months." You've now shipped a change that hurts your users, and you can't test that area again because you "already have a winner."

**The fix:** Calculate your required sample size *before* the test starts using [Evan Miller's sample size calculator](https://www.evanmiller.org/ab-testing/sample-size.html). Write down the number. Write down your stop date. Don't look at the results until you've hit both. This removes the temptation to "call it" when you see a green spike.

If you absolutely must peek at results during a test, consider using **sequential testing** (also called "always-valid tests"). [Spotify's research](https://engineering.atspotify.com/2023/03/choosing-sequential-testing-framework-comparisons-and-discussions/) shows that sequential tests allow you to monitor results continuously without inflating false positive rates. However, the tradeoff is wider confidence intervals early on, meaning tests may take longer to reach significance.

---

## Mistake 2: Testing Too Many Elements at Once

You redesign the headline. You change the hero image. You update the CTA button color. You add social proof. The variant wins by 12%. Everyone celebrates.

Six months later, you're still trying to figure out which of those four changes actually drove the improvement. Spoiler: you never will.

This is what I call "noise-driven development." When you change multiple things and the variant wins, you have zero information about what actually moved the needle. When you try to iterate from this—test the next version, build on the winner—you're building on a foundation you don't understand. Eventually the optimizations plateau, and you can't diagnose why.

**The exception:** Multivariate testing (MVT) is designed for testing multiple element combinations simultaneously. But it requires 5–10× more traffic than a standard A/B test and is only suitable for high-traffic pages (100,000+ monthly sessions). For everyone else, it's a trap.

**The fix:** Isolate your variable. One headline. One CTA. One layout. This isn't boring—it's the fastest path to compounding growth. You understand *why* something works, so you can build on that knowledge.

---

## Mistake 3: Not Accounting for Day-of-Week Effects

Your test runs Monday to Friday. The variant shows a clear winner. You roll it out Monday morning. By Wednesday, the improvement has shrunk by half.

This is day-of-week bias, and it's invisible until you look for it. User behavior varies dramatically by day of week. B2B sites see 30–50% higher engagement on Tuesday–Thursday. E-commerce spikes on Thursday evening and Sunday afternoon. If your test doesn't capture a full week on each side, you've measured a biased sample.

A 5-day test might be statistically significant in terms of raw sample size, but behaviorally it's only measuring one type of visitor. You're not testing your product; you're testing Monday-to-Friday users.

**The fix:** Always run for complete calendar weeks. Minimum: 2 full weeks. Check your analytics for day-of-week CVR variation before launching. If it's significant, weight your required runtime accordingly. This isn't negotiable.

---

## Mistake 4: Ignoring the SRM (Sample Ratio Mismatch)

You expect a 50/50 traffic split. Your test shows 52.3% control, 47.7% variant. You proceed anyway.

This is a **Sample Ratio Mismatch (SRM)**, and it's a red flag that something is broken in your setup. Even a small imbalance—52/48 instead of 50/50—can indicate that the variants aren't receiving comparable traffic. Common causes include:

- Bot traffic hitting one variant disproportionately
- Redirect issues affecting one URL
- Caching serving one variant more frequently
- Mobile vs. desktop rendering differently for each variant

An SRM can invalidate your entire test because the populations being compared are no longer equivalent. You're not comparing apples to apples; you're comparing apples to a different type of apple.

**The fix:** Check for SRM before analyzing results. Use a Chi-squared test on your traffic split (any A/B testing tool should flag this automatically). If your p-value for the traffic ratio is under 0.05, your test has an SRM problem. Investigate the cause before reading results. Don't try to "save" the data. Rerun the test.

---

## Mistake 5: Running Tests on Polluted Traffic

Your test includes internal team traffic. It includes bot traffic. It includes QA sessions. The sample size looks healthy. The results are noise.

When your team clicks through the test during QA, they generate sessions that don't represent real customer behavior. Bot traffic creates artificial session counts without conversion intent. Both inflate your denominator (total sessions) and dilute real conversion signals.

**Signs your data is polluted:**
- CVR is wildly inconsistent day-to-day
- Traffic spikes that don't correlate with any campaign activity
- Suspiciously high bounce rates on specific variants

**The fix:**
1. Filter internal IP addresses in your analytics and testing tool
2. Enable bot filtering in GA4 (Admin → Data Streams → Advanced Settings)
3. Exclude known crawler user agents in your testing tool
4. Run a clean baseline for 2 weeks before launching a test to establish a pollution-free CVR baseline

---

## Mistake 6: Measuring the Wrong Metric

You optimize for clicks on the CTA button. Clicks go up 18%. Revenue stays flat.

This is the proxy metric trap. Clicks ≠ conversions. Opens ≠ revenue. Micro-metrics are useful diagnostics, but they're not business outcomes. A test that increases CTA clicks by 18% but doesn't move the downstream conversion is measuring the wrong thing.

This mistake is especially common in multipage funnels. A change on page 1 might increase page 2 arrivals, but if page 2 is the friction point, you'll see a CVR improvement on step 1 and no change in final conversion. You've optimized the wrong thing.

**The fix:** Define your primary metric before the test starts—and make it a business outcome (purchase, trial signup, demo booked), not a behavioral proxy (click, scroll depth, time on page). Track secondary metrics as diagnostics, but don't make shipping decisions based on them.

---

## Mistake 7: Not Running a Pre-Test A/A Test (When Traffic Allows)

You set up your test. You split traffic 50/50 between identical pages. And the "variant" wins by 8% with 91% confidence. You didn't notice. You launched the real test. You trusted results that were already poisoned.

An A/A test—sending equal traffic to two identical variants—should show no significant difference. If it does, your testing setup is broken. Common causes: the tracking pixel fires differently on each variant, the randomization algorithm is biased, or there's a technical implementation error.

If your A/A test shows a winner, your A/B test results cannot be trusted until the underlying issue is fixed.

**The fix:** Run an A/A test for 1 week before any major test program launches (or after setting up new testing infrastructure). If it shows a significant result, debug before continuing. This step is skipped by the vast majority of teams—and it's why so many "winning" tests fail to hold in production.

---

## The P-Hacking Problem: Why Running Many Tests Guarantees False Positives

Here's a statistical reality that most teams ignore: if you run 20 A/B tests with a true effect size of zero, on average one of them will show statistical significance at p < 0.05 purely by random chance.

This is called **p-hacking** or the multiple comparisons problem. It's especially dangerous for teams running "lots of a/b tests" without proper statistical controls. [Research on this problem](https://www.reddit.com/r/ProductManagement/comments/1snuq6z/a_lot_of_ab_test_wins_are_just_fake/) shows that many product teams are unknowingly p-hacking their way to false winners.

The fix is simple but requires discipline: either run fewer tests and make each one count, or use statistical corrections like **Bonferroni correction** when running multiple simultaneous tests. If you're running 2–3 concurrent tests on different pages, you're fine. If you're running 20+ tests per month, you need to adjust your statistical significance threshold downward.

---

## How to Diagnose Test Problems Before You Read Results

Before you look at CVR numbers, run through this diagnostic checklist. Most test failures are detectable at setup—not after the fact.

| Symptom | Likely Mistake | How to Confirm |
|---|---|---|
| "Winner" doesn't hold after shipping | Stopped too early or day-of-week bias | Did you hit pre-planned sample size? Did test run 2+ full weeks? |
| Multiple things changed, can't attribute the win | Testing multiple elements | Review change log — was it really one variable? |
| CTR up, revenue flat | Wrong primary metric | Is your primary metric a business outcome or a proxy? |
| Traffic split is 53/47 instead of 50/50 | Sample Ratio Mismatch | Chi-squared test on the split — SRM confirmed if p < 0.05 |
| CVR varies 3–5× between days | Polluted traffic | Compare bot vs. human sessions; check internal IP filtering |
| A/A test shows a "winner" | Broken testing infrastructure | Randomization or tracking error — fix before any real test |

---

## A/B Testing Mistakes: Quick Reference

| Mistake | Risk Level | Symptom | Fix |
|---|---|---|---|| Stopping at significance | V
(Content truncated due to size limit. Use line ranges to read remaining content)
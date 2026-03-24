---
title: "7 A/B Testing Mistakes That Invalidate Your Results (And How to Fix Them)"
seoTitle: "7 A/B Testing Mistakes That Invalidate Your Results"
description: "Most A/B tests are invalid before they finish. These 7 mistakes produce false winners and waste months of optimization. Learn to avoid them before you launch."
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

Running an A/B test feels rigorous. It feels scientific. It feels like you're making data-driven decisions.

But here's the problem: most A/B tests are invalid. Not slightly off — structurally broken. They produce winners that aren't winners, losers that weren't losers, and confidence you haven't earned.

After running 800+ A/B tests across e-commerce, SaaS, and B2B funnels, I've seen the same mistakes repeated by marketing teams, product teams, and agencies. These are the seven that do the most damage.

*Before reading this, make sure you know [how long to run an A/B test](/blog/how-long-to-run-ab-test/) — it's the foundation everything else builds on.*

---

## Mistake 1: Stopping the Test as Soon as It Hits Significance

**What it looks like:** Your dashboard shows 96% confidence on day 5. Someone says "that's basically significant, let's ship it."

**Why it breaks your test:** Statistical significance fluctuates throughout a test. If you check results daily and stop the moment you see a winning number, you're engaging in what statisticians call "optional stopping" — and it inflates your false positive rate from 5% to well over 30%.

A 95% confidence level means: if the null hypothesis is true (the variants are identical), you'd still see this result 5% of the time by random chance. But that 5% applies only if you commit to a fixed sample size and stop there. When you peek and stop early, you multiply your chances of seeing a false positive with every check.

**The fix:** Calculate your required sample size *before* the test starts. Use a sample size calculator ([Evan Miller](https://www.evanmiller.org/ab-testing/sample-size.html), [VWO](https://vwo.com/tools/ab-test-duration-calculator/), [Optimizely](https://www.optimizely.com/sample-size-calculator/) all have free ones). Run until you hit that number — or 2 full business cycles (minimum 2 weeks), whichever is longer. See the full guide: [How Long Should You Run an A/B Test?](/blog/how-long-to-run-ab-test/)

Ronny Kohavi, who built experimentation platforms at Microsoft and Amazon, documented this problem extensively in *Trustworthy Online Controlled Experiments* (Cambridge University Press, 2020): teams that peek at results and stop early ship approximately 3× more false winners than teams that pre-commit to stopping rules.

---

## Mistake 2: Testing Too Many Elements at Once

**What it looks like:** You redesign the headline, CTA button, hero image, and social proof section simultaneously. The variant wins. You don't know why.

**Why it breaks your test:** If four things changed and the variant beat control by 12%, you have no idea which change drove that improvement. When you try to iterate from this — test the next version, build on the winner — you're building on a foundation you don't understand. Eventually the optimizations plateau, and you can't diagnose why.

**Exception:** Multivariate testing (MVT) is designed for testing multiple element combinations simultaneously — but it requires 5–10× more traffic than a standard A/B test and is only suitable for high-traffic pages (100,000+ monthly sessions).

**The fix:** For most tests, change one thing. One headline. One CTA. One layout. Isolate the variable, understand what moves the needle, then move to the next test with that knowledge intact.

---

## Mistake 3: Not Accounting for Day-of-Week Effects

**What it looks like:** Your test runs Monday to Friday and shows a clear winner. You roll it out and the improvement doesn't hold.

**Why it breaks your test:** User behavior varies dramatically by day of week. B2B sites see 30–50% higher engagement on Tuesday–Thursday. E-commerce spikes on Thursday evening and Sunday afternoon. If your test doesn't capture a full week on each side, you've measured a biased sample.

A 5-day test might be statistically significant in terms of raw sample size, but behaviorally it's only measuring one type of visitor.

**The fix:** Always run for complete calendar weeks. Minimum: 2 full weeks. Check your analytics for day-of-week CVR variation before launching — if it's significant, weight your required runtime accordingly.

---

## Mistake 4: Ignoring the SRM (Sample Ratio Mismatch)

**What it looks like:** You expect a 50/50 traffic split. Your test shows 52.3% control, 47.7% variant. You proceed anyway.

**Why it breaks your test:** A Sample Ratio Mismatch means the actual traffic split doesn't match the intended split. Even a small imbalance — 52/48 instead of 50/50 — can indicate that the variants aren't receiving comparable traffic. Common causes include:

- Bot traffic hitting one variant disproportionately
- Redirect issues affecting one URL
- Caching serving one variant more frequently
- Mobile vs desktop rendering differently for each variant

An SRM can invalidate your entire test, because the populations being compared are no longer equivalent.

**The fix:** Check for SRM before analyzing results. Use a Chi-squared test on your traffic split (any A/B testing tool should flag this automatically). If your p-value for the traffic ratio is under 0.05, your test has an SRM problem. Investigate the cause before reading results.

---

## Mistake 5: Running Tests on Polluted Traffic

**What it looks like:** Your test includes internal team traffic, bot traffic, and QA sessions. The sample size looks healthy. The results are noise.

**Why it breaks your test:** Your team clicking through the test during QA generates sessions that don't represent real customer behavior. Bot traffic creates artificial session counts without conversion intent. Both inflate your denominator (total sessions) and dilute real conversion signals.

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

**What it looks like:** You optimize for clicks on the CTA button. Clicks go up 18%. Revenue stays flat.

**Why it breaks your test:** Clicks ≠ conversions. Opens ≠ revenue. Micro-metrics are useful diagnostics, but they're not business outcomes. A test that increases CTA clicks by 18% but doesn't move the downstream conversion is measuring the wrong thing.

This mistake is especially common in multipage funnels. A change on page 1 might increase page 2 arrivals, but if page 2 is the friction point, you'll see a CVR improvement on step 1 and no change in final conversion.

**The fix:** Define your primary metric before the test starts — and make it a business outcome (purchase, trial signup, demo booked), not a behavioral proxy (click, scroll depth, time on page). Track secondary metrics as diagnostics, but don't make shipping decisions based on them.

---

## Mistake 7: Not Running a Pre-Test A/A Test (When Traffic Allows)

**What it looks like:** You set up your test, split traffic 50/50 between identical pages, and... the "variant" wins by 8% with 91% confidence. You didn't notice, launched the real test, and trusted results that were already polluted.

**Why it matters:** An A/A test — sending equal traffic to two identical variants — should show no significant difference. If it does, your testing setup is broken. Common causes: the tracking pixel fires differently on each variant, the randomization algorithm is biased, or there's a technical implementation error.

If your A/A test shows a winner, your A/B test results cannot be trusted until the underlying issue is fixed.

**The fix:** Run an A/A test for 1 week before any major test program launches (or after setting up new testing infrastructure). If it shows a significant result, debug before continuing. This step is skipped by the vast majority of teams — and it's why so many "winning" tests fail to hold in production.

---

## How to Diagnose Test Problems Before You Read Results

Before you look at CVR numbers, run through this diagnostic checklist. Most test failures are detectable at setup — not after the fact.

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
|---|---|---|---|
| Stopping at significance | Very High | False winners | Pre-calculate sample size, commit to it |
| Testing multiple elements | High | Can't replicate results | One variable per test |
| Ignoring day-of-week effects | High | Results don't hold post-launch | Minimum 2 full weeks |
| Ignoring SRM | Very High | Biased population comparison | Chi-squared check on traffic split |
| Polluted traffic | Medium | Noisy, inconsistent results | Filter bots and internal IPs |
| Wrong metric | High | No revenue impact despite "winning" | Define business outcome upfront |
| No A/A test | Medium | Broken tracking produces false results | Run A/A before major test programs |

---

## What a Valid A/B Test Looks Like

A well-run test has five things defined before it launches:

1. **Hypothesis:** "We believe changing [X] to [Y] will increase [metric Z] because [reason]."
2. **Primary metric:** A business outcome, not a click
3. **Required sample size:** Calculated with a sample size tool at 95% confidence, 80% power
4. **Minimum runtime:** 2 full business cycles minimum
5. **Stopping rules:** Pre-committed — don't change them mid-test based on early results

Run the test. Don't peek. When it finishes, read the result once. Make your decision. Document everything.

That's it. It sounds boring. It is boring. Boring, rigorous testing produces compound results over time. Exciting, intuition-driven testing produces one good story and a lot of wasted traffic.

---

**Are your current tests set up to produce valid results?**

I review [A/B testing programs](/services/ab-testing/) and give you an honest assessment: what's producing real signal, what's noise, and what tests you should actually be running next. Most programs have at least 3 structural issues that are silently invalidating results.

Also read: [A/B Testing Best Practices](/blog/ab-testing-best-practices/) — the full framework for running your first valid test.

[Get a Free CRO Audit →](/contact/)

---

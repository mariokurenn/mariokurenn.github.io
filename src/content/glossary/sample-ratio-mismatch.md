---
term: "Sample Ratio Mismatch (SRM)"
shortDefinition: "A test quality issue where the actual traffic split between variants differs from the intended split, indicating randomization failure and invalidating results."
category: "A/B Testing"
difficulty: "advanced"
relatedTerms: ["ab-testing", "statistical-significance", "p-value"]
publishDate: "2026-03-24"
updatedDate: "2026-03-29"
faqs:
  - question: "What is a sample ratio mismatch (SRM) in A/B testing?"
    answer: "A sample ratio mismatch (SRM) occurs when the actual traffic split between test variants is significantly different from the intended split. In a standard 50/50 A/B test, if one variant receives 53% of traffic and the other 47%, that's an SRM. Even small imbalances indicate that randomization is broken — the variants are not receiving equivalent visitor populations, which invalidates the test results. An SRM must be investigated and resolved before any test results can be trusted."
  - question: "How do I detect a sample ratio mismatch?"
    answer: "Run a chi-squared test on your observed traffic split against the expected split. Most A/B testing platforms (Optimizely, VWO, etc.) flag SRM automatically. Manually: if your 50/50 test shows a 52/48 split, calculate whether this deviation is statistically significant. A p-value below 0.05 on the traffic ratio means SRM is present. As a rough rule: any split deviating more than 1–2% from the expected ratio warrants investigation."
  - question: "What causes a sample ratio mismatch?"
    answer: "Common SRM causes include: bot traffic hitting one variant more than another, redirect issues where one variant URL returns slower, caching at CDN level serving one variant from cache more frequently, JavaScript errors preventing the variant code from loading for some visitors, browser-specific rendering failures, filtering inconsistencies (excluding mobile on one variant but not the other), and cookie setting failures on some devices. SRM investigation requires checking each of these in order."
  - question: "Can I still use A/B test results if SRM is present?"
    answer: "No. SRM invalidates the test because it means the two variants did not receive equivalent, randomly-selected visitor populations. Any observed conversion rate difference could be caused by the population difference rather than the variant change. There is no statistical correction that can salvage SRM-affected data. The correct action is to fix the SRM root cause, then re-run the test from scratch."
  - question: "How common is SRM in real A/B testing programs?"
    answer: "SRM is more common than most teams realize. Microsoft's experimentation team published research (Fabijan et al., 2019, 'Diagnosing Sample Ratio Mismatch in Online Controlled Experiments') finding that SRM affects a significant minority of tests when not actively monitored. Teams using redirect-based tests (where the variant is served from a different URL) face the highest SRM risk because redirect latency creates systematic visitor dropout before assignment."
  - question: "What is the difference between SRM and a losing variant?"
    answer: "A losing variant has a balanced traffic split (close to 50/50) but lower conversion rate than control. SRM has an unbalanced traffic split. The key diagnostic: check the traffic counts before looking at conversion rates. If variant has 4,200 sessions and control has 5,800 in a 50/50 test, that's SRM regardless of which variant converts better. Fix the traffic split first — if it was SRM-affected, the conversion data cannot be trusted."
---

**Sample Ratio Mismatch (SRM)** is a data quality problem in A/B testing that occurs when the actual distribution of visitors between test variants is statistically different from the intended distribution.

**Example:** A 50/50 test intended to split traffic equally between control and variant. After 10,000 sessions, control received 5,400 visitors and variant received 4,600 — a 54/46 split instead of 50/50. This mismatch indicates that the randomization mechanism is broken, and the test results cannot be trusted.

SRM is one of the most insidious A/B testing problems because the conversion data can look perfectly plausible — you might see a confident 95% significant result that is entirely an artifact of population bias, not a real effect.

## Why SRM Invalidates Test Results

The entire validity of an A/B test rests on the assumption that variants receive equivalent, randomly selected visitor populations. If the split is uneven, the populations in each variant are not equivalent — systematic differences may exist between them that have nothing to do with the variant change.

**Example of how SRM creates false results:**
A redirect-based test sends users to a new URL for the variant. If the variant page loads 500ms slower (triggering the redirect), visitors with slow connections may disproportionately abandon before being assigned to the variant — leaving only fast-connection visitors in the variant sample. The variant appears to convert better, but only because it systematically excluded slow-connection visitors.

This type of SRM produces a false positive: a statistically significant "win" that will not replicate in production.

## Detecting SRM: The Chi-Squared Test

A chi-squared (χ²) goodness-of-fit test measures whether the observed traffic distribution differs significantly from expected:

**For a 50/50 test with 10,000 total sessions:**
- Expected: 5,000 control, 5,000 variant
- Observed: 5,400 control, 4,600 variant
- Chi-squared statistic: (5,400−5,000)²/5,000 + (4,600−5,000)²/5,000 = 32 + 32 = 64
- At 1 degree of freedom, χ² = 64 is far beyond the p < 0.05 threshold (critical value: 3.84)

**SRM is confirmed.**

Most enterprise A/B testing platforms (Optimizely, VWO, AB Tasty) run this check automatically and flag SRM in the dashboard. If your platform doesn't flag it, run the calculation manually at the end of every test.

**Quick rule of thumb:** Any deviation greater than ±2% from the intended split on a large sample (10,000+ sessions) warrants investigation, even if not statistically significant.

## Common SRM Causes and How to Diagnose Them

| Cause | How it creates SRM | Detection method |
|---|---|---|
| **Bot traffic asymmetry** | Bots may consistently hit one variant URL more | Compare bot-filtered vs unfiltered sessions per variant |
| **Redirect timing / latency** | Slow variant redirect causes visitor dropout before assignment | Compare variant load time vs control; check time-to-first-byte |
| **CDN caching** | Cached pages bypass randomization | Check cache-control headers; verify test pages are cache-excluded |
| **JavaScript error in variant** | Variant code fails to load for some browsers/devices | Check browser console errors; compare pre/post variant JS load |
| **Mobile rendering failure** | Variant CSS/JS breaks on mobile | Segment traffic split by device type separately |
| **Cookie setting failure** | Assignment cookie not set on some devices | Check cookie presence rate per variant across device types |
| **Filtering inconsistency** | Exclusion rules differ between variants | Audit segment filters; ensure identical targeting on both sides |
| **Third-party script conflicts** | Tag manager or analytics script fires differently | Audit all third-party scripts triggered by variant code |

## SRM Investigation Protocol

When SRM is detected, follow this sequence:

1. **Confirm the SRM** — run chi-squared test on raw session counts per variant
2. **Segment by device** — check split on mobile vs desktop separately; mobile-only SRM often indicates a rendering issue
3. **Segment by browser** — SRM in a specific browser points to JS or CSS conflicts
4. **Check page load time per variant** — any meaningful latency difference (>200ms) in a redirect test is a likely cause
5. **Audit bot filtering** — compare filtered vs unfiltered counts
6. **Review targeting rules** — confirm identical audience segments on both variants
7. **Fix the root cause** — do not proceed without resolving
8. **Re-run the test from scratch** — SRM-affected data cannot be corrected

## SRM vs Normal Statistical Variation

Small deviations from the target split (50.5/49.5) are normal and expected — this is just random variation. SRM is a *statistically significant* deviation from the intended split.

**Important timing note:** Run your SRM check at the end of the test, not daily. Chi-squared tests on small interim samples frequently flag false SRMs — especially in the first 24–48 hours of a test when traffic is still accumulating. Checking SRM mid-test can cause unnecessary test terminations.

## SRM in Multi-Variant Tests

In A/B/C or A/B/n tests with more than two variants, SRM detection uses the same chi-squared test with additional degrees of freedom. For a three-variant 33/33/33 split:
- Degrees of freedom = 2
- Each variant's expected count = total sessions ÷ 3
- Critical chi-squared value at p < 0.05: 5.99

Any variant deviating meaningfully from equal share warrants the same investigation protocol.

For a full checklist of what can go wrong in A/B tests, see [7 A/B Testing Mistakes That Invalidate Your Results](/blog/ab-testing-mistakes/) and [A/B Testing Best Practices](/blog/ab-testing-best-practices/).

See also: [Statistical Significance](/cro-glossary/statistical-significance/), [P-Value](/cro-glossary/p-value/), [A/B Testing](/cro-glossary/ab-testing/).

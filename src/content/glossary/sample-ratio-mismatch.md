---
term: "Sample Ratio Mismatch (SRM)"
shortDefinition: "A test quality issue where the actual traffic split between variants differs from the intended split, indicating randomization failure and invalidating results."
category: "A/B Testing"
difficulty: "advanced"
relatedTerms: ["ab-testing", "statistical-significance", "p-value"]
publishDate: "2026-03-24"
faqs:
  - question: "What is a sample ratio mismatch (SRM) in A/B testing?"
    answer: "A sample ratio mismatch (SRM) occurs when the actual traffic split between test variants is significantly different from the intended split. In a standard 50/50 A/B test, if one variant receives 53% of traffic and the other 47%, that's an SRM. Even small imbalances indicate that randomization is broken — the variants are not receiving equivalent visitor populations, which invalidates the test results. An SRM must be investigated and resolved before any test results can be trusted."
  - question: "How do I detect a sample ratio mismatch?"
    answer: "Run a chi-squared test on your observed traffic split against the expected split. Most A/B testing platforms (Optimizely, VWO, etc.) flag SRM automatically. Manually: if your 50/50 test shows a 52/48 split, calculate whether this deviation is statistically significant. A p-value below 0.05 on the traffic ratio means SRM is present. As a rough rule: any split deviating more than 1–2% from the expected ratio warrants investigation."
  - question: "What causes a sample ratio mismatch?"
    answer: "Common SRM causes include: bot traffic hitting one variant more than another, redirect issues where one variant URL returns slower, caching at CDN level serving one variant from cache more frequently, JavaScript errors preventing the variant code from loading for some visitors, browser-specific rendering failures, filtering inconsistencies (excluding mobile on one variant but not the other), and cookie setting failures on some devices. SRM investigation requires checking each of these in order."
---

**Sample Ratio Mismatch (SRM)** is a data quality problem in A/B testing that occurs when the actual distribution of visitors between test variants is statistically different from the intended distribution.

**Example:** A 50/50 test intended to split traffic equally between control and variant. After 10,000 sessions, control received 5,400 visitors and variant received 4,600 — a 54/46 split instead of 50/50. This mismatch indicates that the randomization mechanism is broken, and the test results cannot be trusted.

## Why SRM Invalidates Test Results

The entire validity of an A/B test rests on the assumption that variants receive equivalent, randomly selected visitor populations. If the split is uneven, the populations in each variant are not equivalent — systematic differences may exist between them that have nothing to do with the variant change.

**Example of how SRM creates false results:**
A redirect-based test sends users to a new URL for the variant. If the variant page loads 500ms slower (triggering the redirect), visitors with slow connections may disproportionately abandon before being assigned to the variant — leaving only fast-connection visitors in the variant sample. The variant appears to convert better, but only because it systematically excluded slow-connection visitors.

## Detecting SRM: The Chi-Squared Test

A chi-squared (χ²) goodness-of-fit test measures whether the observed traffic distribution differs significantly from expected:

**For a 50/50 test with 10,000 total sessions:**
- Expected: 5,000 control, 5,000 variant
- Observed: 5,400 control, 4,600 variant

If the chi-squared p-value for this deviation is < 0.05, SRM is confirmed.

**Quick rule of thumb:** Any deviation greater than ±2% from the intended split on a large sample (10,000+ sessions) warrants investigation.

## Common SRM Causes

| Cause | Detection method |
|---|---|
| **Bot traffic asymmetry** | Compare bot-filtered vs unfiltered sessions per variant |
| **Redirect timing** | Check if variant redirect adds latency; compare page load times |
| **CDN caching** | Check cache hit ratio per variant; ensure cache-control headers bypass for test pages |
| **JavaScript error in variant** | Check browser console errors; compare session counts before and after variant JS loads |
| **Mobile rendering failure** | Segment traffic by device — check split on mobile vs desktop separately |
| **Cookie setting failure** | Check variant assignment cookie presence across devices and browsers |
| **Filtering inconsistency** | Ensure same exclusion rules apply to both variants |

## SRM vs Normal Statistical Variation

Small deviations from the target split (50.5/49.5) are normal and expected — this is just random variation. SRM is a *statistically significant* deviation.

Run your SRM check at the end of the test, not daily — chi-squared tests on small interim samples frequently flag false SRMs.

For complete A/B test validity checks, see [7 A/B Testing Mistakes That Invalidate Your Results](/blog/ab-testing-mistakes/).

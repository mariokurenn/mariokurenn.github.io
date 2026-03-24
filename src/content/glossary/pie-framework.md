---
term: "PIE Framework"
shortDefinition: "A CRO prioritization model that scores potential tests by Potential, Importance, and Ease to identify the highest-ROI experiments to run first."
category: "CRO Strategy"
difficulty: "intermediate"
relatedTerms: ["funnel-optimization", "ab-testing", "conversion-rate", "friction"]
publishDate: "2026-03-24"
faqs:
  - question: "What is the PIE framework in CRO?"
    answer: "The PIE framework is a test prioritization method developed by Chris Goward at WiderFunnel. It scores each potential test idea on three dimensions: Potential (how much improvement is possible on this page), Importance (how much traffic and revenue does this page drive), and Ease (how simple is it to implement and test). Each dimension is scored 1–10, scores are averaged, and tests are ranked by PIE score. The highest PIE score gets tested first."
  - question: "How do I calculate a PIE score?"
    answer: "Score each test candidate on three dimensions from 1 to 10: Potential — how much room for improvement is there? (low CVR, high exit rate, clear UX problems = high potential), Importance — how much of your revenue or traffic flows through this page? (homepage, checkout = high importance), Ease — how easy is this to design, build, and test? (copy change = easy, full redesign = hard). Add the three scores and divide by 3 to get the PIE score. Prioritize the highest scores."
  - question: "What is the difference between PIE and ICE framework?"
    answer: "Both PIE and ICE are CRO prioritization frameworks. PIE (Potential, Importance, Ease) focuses on page-level opportunity. ICE (Impact, Confidence, Ease) focuses on hypothesis-level certainty — Impact is the expected conversion uplift, Confidence is how sure you are the change will work (based on data and research), and Ease is implementation effort. ICE is often preferred when you have strong research backing individual hypotheses; PIE is more useful when ranking pages or areas to investigate first."
---

**The PIE Framework** is a structured method for prioritizing which A/B tests and CRO experiments to run first, developed by Chris Goward at WiderFunnel.

Each test idea is scored across three dimensions:
- **P**otential — how much improvement is possible?
- **I**mportance — how significant is this page or element to the business?
- **E**ase — how simple is it to implement and run?

PIE Score = (Potential + Importance + Ease) ÷ 3

Tests are ranked by PIE score and run in order from highest to lowest.

## Scoring Each Dimension

### Potential (1–10)
How much room for improvement exists on this page or element?

Signals of high potential:
- Conversion rate significantly below industry benchmark
- High exit rate on pages that should retain visitors
- Clear UX problems identified in session recordings or heatmaps
- User testing reveals persistent confusion at this step
- Visitor survey responses mention frustration with this element

**Score 9–10:** Page or element has obvious, severe problems. Major improvement opportunity.
**Score 5–6:** Some issues present but page performs reasonably well.
**Score 1–2:** Page already performing well, limited upside.

### Importance (1–10)
How much revenue or traffic flows through this page or element?

Signals of high importance:
- High monthly sessions (this is where most of your audience lands)
- Direct connection to conversion (checkout, pricing page, primary CTA)
- High revenue per visitor (paid traffic landing page)

**Score 9–10:** Your single highest-traffic or highest-revenue page. Every 1% improvement here multiplies across thousands of monthly visitors.
**Score 5–6:** Moderate traffic; contributing to conversion pipeline but not the primary bottleneck.
**Score 1–2:** Low traffic, niche page with minimal revenue impact.

### Ease (1–10)
How easily can this change be implemented and tested?

**Score 9–10:** Copy change, button text update, trust badge addition — minimal development, deployed in hours.
**Score 5–6:** Layout change, new section, modest design work — few days development.
**Score 1–2:** Full page redesign, new checkout flow, major back-end change — weeks of development and QA.

## PIE Scoring Example

| Test idea | Potential | Importance | Ease | PIE Score |
|---|---|---|---|---|
| Rewrite checkout page headline | 8 | 9 | 9 | **8.7** |
| Add trust badges to checkout | 7 | 9 | 8 | **8.0** |
| Redesign product category page | 6 | 7 | 3 | **5.3** |
| A/B test blog CTA copy | 4 | 3 | 9 | **5.3** |
| Simplify homepage navigation | 7 | 8 | 5 | **6.7** |

The checkout headline rewrite scores first: high potential (headline is a known high-leverage element), highest importance (checkout is where purchases happen), and easy to implement.

## PIE vs ICE Framework

| Framework | Dimensions | Best for |
|---|---|---|
| **PIE** | Potential, Importance, Ease | Identifying *which pages* to focus on first |
| **ICE** | Impact, Confidence, Ease | Ranking specific *hypotheses* by certainty |

Many CRO programs use PIE to select pages and ICE to prioritize individual tests within a page.

## Limitations of PIE

PIE is a subjective scoring system — different team members will score the same test differently. Reduce subjectivity by:
- Anchoring Potential scores to actual analytics data (exit rate, CVR relative to benchmark)
- Anchoring Importance scores to actual traffic or revenue numbers
- Having multiple team members score independently and averaging

PIE is a structured way to have an informed argument about priorities — not a mathematical truth.

For running tests once priorities are set, see [A/B Testing Best Practices](/blog/ab-testing-best-practices/).

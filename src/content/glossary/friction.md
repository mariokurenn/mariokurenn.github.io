---
term: "Friction"
shortDefinition: "Any element in the conversion path that slows, confuses, or discourages a visitor from completing the desired action."
category: "CRO Strategy"
difficulty: "beginner"
relatedTerms: ["conversion-rate", "funnel-optimization", "cognitive-load", "call-to-action", "landing-page"]
publishDate: "2026-03-24"
faqs:
  - question: "What is friction in CRO?"
    answer: "Friction in CRO is any element — visual, functional, cognitive, or structural — that slows, confuses, or discourages a visitor from completing a conversion. Friction can be literal (a form that won't submit, a broken CTA button) or psychological (unclear value proposition, lack of trust signals, too many choices). Reducing friction is one of the core objectives of conversion rate optimization — every unnecessary obstacle between visitor intent and action represents lost revenue."
  - question: "What are the most common sources of friction on a website?"
    answer: "The most common friction sources: (1) Long or confusing forms — each unnecessary field reduces completion. (2) Unclear value proposition — visitors can't quickly understand what they're getting. (3) Missing trust signals — no reviews, no security badges, no guarantees visible at the point of conversion. (4) Technical friction — slow page speed, broken elements, poor mobile UX. (5) Cognitive friction — too many options, jargon-heavy copy, unclear next steps. (6) Navigation friction — too many exit points pulling attention away from the primary CTA."
  - question: "How do I identify friction on my website?"
    answer: "Friction identification requires combining quantitative and qualitative data. Quantitatively: look for high drop-off rates at specific funnel steps in GA4, identify high exit rate pages, and find elements with low click-through rates in heatmaps. Qualitatively: run user testing sessions (5 sessions reveal 80% of usability issues), deploy exit-intent surveys ('What stopped you from completing your goal today?'), and review session recordings for rage clicks, hesitation, and abandonment patterns."
---

**Friction** is any element in a conversion path that slows, confuses, or discourages a visitor from completing the intended action.

Friction operates on a spectrum from obvious and technical (a form that fails to submit) to subtle and psychological (a value proposition that isn't clear enough to justify the effort of filling out the form). Both types reduce conversion rate — but psychological friction is more common and harder to detect.

## Types of Friction

### Technical Friction
Functional problems that physically prevent or delay conversion:
- Page load time over 3 seconds
- Broken form validation errors
- Mobile layout that obscures the CTA
- Payment processing failures
- Browser-specific rendering issues
- SSL certificate warnings

Technical friction should be treated as bugs — fix immediately, no testing required.

### Cognitive Friction
Mental effort that makes the conversion decision harder:
- Value proposition unclear in the first 5 seconds
- Too many choices (see [Paradox of Choice](/cro-glossary/paradox-of-choice/))
- Jargon or unexplained terminology
- Uncertain next steps after clicking the CTA
- Unclear what the offer actually includes
- Pricing hidden or confusingly structured

### Form Friction
Every field in a form is friction. Each additional required field reduces completion rate:

| Form length | Relative completion rate |
|---|---|
| 3 fields | Baseline |
| 4 fields | ~89% of baseline |
| 6 fields | ~74% of baseline |
| 9 fields | ~55% of baseline |

*Based on Baymard Institute and Hubspot form completion studies*

Unnecessary fields are the most common and most fixable form friction. Audit every field: if you don't act on the data it collects, remove it.

### Trust Friction
Doubt and risk perception that makes conversion feel unsafe:
- No customer reviews visible near the CTA
- No money-back guarantee or refund policy visible before purchase
- Anonymous testimonials (no name, photo, or company)
- No security badge at checkout
- Unknown brand with no external validation

Trust friction is reduced by [social proof](/cro-glossary/social-proof/) and [trust signals](/cro-glossary/trust-signals/).

### Navigation Friction
Exit opportunities that distract from the conversion path:
- Navigation menus on dedicated landing pages
- Outbound links in the body of landing page copy
- Multiple competing CTAs with equal visual weight
- Related product suggestions on checkout pages

## The Friction Audit Process

Systematically identifying friction requires layered research:

1. **Funnel analysis (GA4)** — Find the funnel step with the biggest drop-off. That step has the highest-friction element.
2. **Heatmaps** — Are visitors clicking on non-interactive elements? Ignoring the CTA? Stopping their scroll before key content?
3. **Session recordings** — Watch for hesitation, rage clicks, form restarts, and abandonment patterns.
4. **Exit surveys** — "What stopped you from completing your goal today?" reveals friction in the visitor's own words.
5. **User testing** — 5 sessions reveal 80% of usability-level friction that data alone cannot surface.

## Removing Friction vs Adding Motivation

CRO has two mechanisms for improving conversion rate:
1. **Remove friction** — Make it easier to say yes
2. **Add motivation** — Give more reasons to say yes

Both work. But friction removal has an advantage: once friction is removed, it's gone permanently. Motivation additions (urgency, offers, bonuses) often require maintenance or have diminishing returns.

The CRO priority order is typically: remove critical friction first, then add motivation.

For a step-by-step friction-finding framework, see [CRO for Low Traffic Websites](/blog/cro-low-traffic/) (qualitative methods) and [What Is Conversion Rate Optimization](/blog/what-is-conversion-rate-optimization/).

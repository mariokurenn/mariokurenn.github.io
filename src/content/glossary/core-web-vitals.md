---
term: "Core Web Vitals"
shortDefinition: "Google's set of three performance metrics — LCP, INP, and CLS — that measure page experience and directly influence both search rankings and conversion rates."
category: "Technical"
difficulty: "intermediate"
relatedTerms: ["landing-page", "bounce-rate", "conversion-rate", "funnel-optimization"]
publishDate: "2026-03-21"
faqs:
  - question: "What are Core Web Vitals?"
    answer: "Core Web Vitals are three Google-defined metrics that measure real-world user experience on a webpage: LCP (Largest Contentful Paint) measures loading speed — how quickly the main content appears; INP (Interaction to Next Paint) measures responsiveness — how fast the page reacts to user input; CLS (Cumulative Layout Shift) measures visual stability — whether elements jump around as the page loads. Google uses these as ranking signals. More importantly for CRO, poor scores directly increase bounce rate and reduce conversions."
  - question: "How do Core Web Vitals affect conversion rate?"
    answer: "The data is clear: page speed and stability directly impact conversion rate. Google's research shows a 1-second delay in mobile load time can reduce conversions by up to 20%. Deloitte found improving mobile site speed by 0.1 seconds increased conversion rate by 8% for retail sites. CLS issues (content jumping as page loads) cause accidental clicks and frustration, increasing exit rate. Sites with good Core Web Vitals scores consistently outperform poor-scoring pages in both rankings and conversion metrics."
  - question: "How do you check and improve Core Web Vitals?"
    answer: "Check your scores at PageSpeed Insights (pagespeed.web.dev) or Google Search Console → Core Web Vitals report. For LCP: optimise images (WebP format, lazy loading, proper sizing), use a CDN, and preload critical fonts. For INP: minimise JavaScript execution time and third-party scripts. For CLS: set explicit width/height on all images and videos, avoid dynamically injected content above existing content, and don't use web fonts that cause text reflow. Aim for: LCP under 2.5s, INP under 200ms, CLS under 0.1."
---

**Core Web Vitals** are a set of three standardised performance metrics defined by Google that measure real-world user experience on webpages. They became official Google ranking signals in 2021 and are also direct conversion rate influencers.

## The Three Core Web Vitals

### LCP — Largest Contentful Paint
Measures **loading performance**: the time from page navigation to when the largest visible content element (image, video, or text block) renders in the viewport.

| Score | Rating |
|-------|--------|
| Under 2.5s | Good ✓ |
| 2.5s – 4.0s | Needs Improvement |
| Over 4.0s | Poor ✗ |

### INP — Interaction to Next Paint
Measures **responsiveness**: the delay between user input (click, tap, keypress) and the browser's next visual response. Replaced FID (First Input Delay) in March 2024.

| Score | Rating |
|-------|--------|
| Under 200ms | Good ✓ |
| 200ms – 500ms | Needs Improvement |
| Over 500ms | Poor ✗ |

### CLS — Cumulative Layout Shift
Measures **visual stability**: how much visible content unexpectedly moves during page load. Caused by images without dimensions, dynamic content insertion, and web fonts that cause text reflow.

| Score | Rating |
|-------|--------|
| Under 0.1 | Good ✓ |
| 0.1 – 0.25 | Needs Improvement |
| Over 0.25 | Poor ✗ |

## Core Web Vitals and Conversion Rate

The conversion impact of performance is well-documented:

- **1-second delay** in mobile load time → up to **20% conversion drop** (Google)
- **0.1-second speed improvement** → **8% CVR increase** on retail sites (Deloitte)
- **High CLS** → accidental clicks, frustration, higher exit rate

For CRO, Core Web Vitals are the technical foundation. No amount of headline testing or CTA optimisation compensates for a page that takes 6 seconds to load or shifts its layout as users try to click.

## How to Check Your Scores

1. **PageSpeed Insights**: pagespeed.web.dev — enter your URL, get lab and field data
2. **Google Search Console**: Core Web Vitals report — shows real-user data across all pages
3. **Chrome DevTools**: Lighthouse tab — run audits in-browser

## Quick Wins for Each Metric

**LCP:**
- Convert images to WebP format (30–50% smaller than JPEG)
- Add `loading="eager"` to above-the-fold images, `loading="lazy"` to rest
- Preload your hero image: `<link rel="preload" as="image" href="hero.webp">`

**INP:**
- Defer non-critical JavaScript
- Remove or delay third-party scripts (chat widgets, analytics tags)

**CLS:**
- Always set explicit `width` and `height` on images and videos
- Avoid inserting content above existing content after page load

Core Web Vitals are assessed as part of every technical [CRO audit](/services/cro-audit/) — poor scores are often the hidden reason why otherwise well-designed pages underperform.

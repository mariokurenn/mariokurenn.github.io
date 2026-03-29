---
term: "Core Web Vitals"
shortDefinition: "Google's set of three performance metrics — LCP, INP, and CLS — that measure page experience and directly influence both search rankings and conversion rates."
category: "Technical"
difficulty: "intermediate"
relatedTerms: ["landing-page", "bounce-rate", "conversion-rate", "page-speed", "largest-contentful-paint"]
publishDate: "2026-03-21"
updatedDate: "2026-03-29"
faqs:
  - question: "What are Core Web Vitals?"
    answer: "Core Web Vitals are three Google-defined metrics that measure real-world user experience on a webpage: LCP (Largest Contentful Paint) measures loading speed — how quickly the main content appears; INP (Interaction to Next Paint) measures responsiveness — how fast the page reacts to user input; CLS (Cumulative Layout Shift) measures visual stability — whether elements jump around as the page loads. Google uses these as ranking signals in its Page Experience update. More importantly for CRO, poor scores directly increase bounce rate and reduce conversions — independent of SEO considerations."
  - question: "How do Core Web Vitals affect conversion rate?"
    answer: "The data is clear: page speed and stability directly impact conversion rate. Google's research shows a 1-second delay in mobile load time can reduce conversions by up to 20%. Deloitte's 2020 study found improving mobile site speed by 0.1 seconds increased conversion rate by 8% for retail sites. CLS issues (content jumping as page loads) cause accidental clicks and frustration, increasing exit rate. Sites with good Core Web Vitals scores (LCP under 2.5s, INP under 200ms, CLS under 0.1) consistently outperform poor-scoring pages in both rankings and conversion metrics."
  - question: "How do you check and improve Core Web Vitals?"
    answer: "Check your scores at PageSpeed Insights (pagespeed.web.dev) — this shows real-user CrUX data alongside lab data. Google Search Console's Core Web Vitals report shows performance across all pages grouped by URL pattern. For LCP improvement: optimize hero images (WebP format, explicit dimensions, fetchpriority='high'), use a CDN, preload critical fonts. For INP: minimize JavaScript execution and defer non-critical scripts. For CLS: set explicit width/height on all images, avoid dynamically injected content above existing content, use font-display: optional or swap. Target: LCP under 2.5s, INP under 200ms, CLS under 0.1."
  - question: "What is the difference between field data and lab data in Core Web Vitals?"
    answer: "Field data (also called real-user data or CrUX data) measures Core Web Vitals across actual users of Chrome visiting your page — collected anonymously and aggregated. Lab data (Lighthouse) simulates a single page load under controlled conditions. Field data is what Google uses for ranking decisions and is the authoritative measure of actual user experience. Lab data is useful for diagnosis and testing fixes before deployment. PageSpeed Insights shows both — always prioritize improving your field data scores for SEO, and use lab data to guide specific technical improvements."
  - question: "Which Core Web Vital has the biggest impact on conversion rate?"
    answer: "LCP (Largest Contentful Paint) has the largest direct conversion impact because slow loading is the most common reason visitors abandon pages before taking any action. Google's research found that pages loading in 1 second convert 3× better than pages loading in 5 seconds. CLS (layout shift) has a more specific but highly damaging impact on e-commerce: layout shifts cause misclicks at the worst possible moment (just as visitors are about to tap Add to Cart or complete checkout). INP (interaction responsiveness) most impacts pages where user input drives the conversion path — forms, configurators, calculators."
---

**Core Web Vitals** are a set of three standardised performance metrics defined by Google that measure real-world user experience on webpages. They became official Google ranking signals in 2021 and are also direct conversion rate influencers — independent of their SEO implications.

## The Three Core Web Vitals

### LCP — Largest Contentful Paint
Measures **loading performance**: the time from page navigation to when the largest visible content element (image, video, or text block) renders in the viewport.

| Score | Rating | User experience |
|-------|--------|-----------------|
| Under 2.5s | Good | Fast perceived load |
| 2.5s – 4.0s | Needs Improvement | Noticeable delay |
| Over 4.0s | Poor | Significant abandonment risk |

### INP — Interaction to Next Paint
Measures **responsiveness**: the delay between user input (click, tap, keypress) and the browser's next visual response. INP replaced FID (First Input Delay) in March 2024 as a Core Web Vital.

| Score | Rating | User experience |
|-------|--------|-----------------|
| Under 200ms | Good | Instant-feeling |
| 200ms – 500ms | Needs Improvement | Noticeable lag |
| Over 500ms | Poor | Page feels frozen |

### CLS — Cumulative Layout Shift
Measures **visual stability**: how much visible content unexpectedly moves during page load. Caused by images without dimensions, dynamic content insertion, and web fonts that cause text reflow.

| Score | Rating | Conversion risk |
|-------|--------|-----------------|
| Under 0.1 | Good | Minimal misclick risk |
| 0.1 – 0.25 | Needs Improvement | Noticeable shifting |
| Over 0.25 | Poor | Direct conversion damage |

## Core Web Vitals and Conversion Rate

The conversion impact of performance is well-documented:

| Source | Finding |
|--------|---------|
| Google research | 1s delay in mobile load time → up to 20% conversion drop |
| Deloitte (2020) | 0.1s speed improvement → 8% CVR increase on retail sites |
| Google/SOASTA | Pages loading in 1s convert 3× better than pages loading in 5s |
| Walmart (internal) | 1s improvement → 2% increase in conversions |

For CRO, Core Web Vitals are the technical foundation. No amount of headline testing or CTA optimisation compensates for a page that takes 6 seconds to load or shifts its layout as users try to click.

## Core Web Vitals by Industry

Performance varies significantly by industry — revealing where the biggest opportunities lie:

| Industry | Median LCP | % Pages with Good CWV |
|----------|-----------|----------------------|
| Technology | 2.8s | 48% |
| E-commerce | 3.2s | 35% |
| News / publishing | 3.5s | 30% |
| Travel | 3.8s | 28% |
| Finance | 2.6s | 52% |

*Source: Google Chrome User Experience Report (CrUX) 2024 aggregate data*

## How to Check Your Scores

1. **PageSpeed Insights** ([pagespeed.web.dev](https://pagespeed.web.dev/)) — Real-user data from CrUX + lab data from Lighthouse. Enter your URL to get both.
2. **Google Search Console** → Core Web Vitals report — Shows real-user data across all pages grouped by URL pattern. Essential for finding problem pages.
3. **Chrome DevTools** → Lighthouse tab — Run audits in-browser with specific improvement suggestions.
4. **Web Vitals Chrome Extension** — Shows live CWV scores as you browse.

## Quick Wins for Each Metric

**LCP:**
- Convert images to WebP format (30–50% smaller than JPEG at same quality)
- Add `fetchpriority="high"` to the above-fold hero image
- Preload your hero image: `<link rel="preload" as="image" href="hero.webp">`
- Use a CDN for static assets (reduces TTFB by 50–70% for geographically distant users)

**INP:**
- Defer non-critical JavaScript with `defer` or `async`
- Remove or delay third-party scripts (chat widgets, analytics tags, ad pixels)
- Break long JavaScript tasks (over 50ms) into smaller chunks

**CLS:**
- Always set explicit `width` and `height` on images and videos
- Avoid inserting content above existing content after page load
- Reserve space for ads and embeds with `min-height` containers

Core Web Vitals are assessed as part of every technical [CRO audit](/services/cro-audit/) — poor scores are often the hidden reason why otherwise well-designed pages underperform. For the CLS-specific deep dive, see [Cumulative Layout Shift](/cro-glossary/cumulative-layout-shift/).

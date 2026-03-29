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
  - question: "What replaced FID (First Input Delay) and why?"
    answer: "Interaction to Next Paint (INP) replaced First Input Delay (FID) as a Core Web Vital in March 2024. FID measured only the delay before the browser first responded to user input — it didn't measure how long the actual interaction took to complete. INP is more comprehensive: it measures the full interaction latency from input through next paint across all interactions during a page visit, not just the first. INP scores above 200ms indicate responsiveness problems that FID would often miss. For sites with heavy JavaScript (dynamic pricing, interactive configurators, rich filtering), INP is a significantly more relevant metric."
  - question: "How does page speed affect bounce rate and what is the specific data?"
    answer: "Google's research on mobile page speed (published via Think with Google) found: pages that load in 1 second have a bounce rate approximately 10%; pages that load in 3 seconds have a 32% bounce rate; pages that load in 5 seconds have a 90% bounce rate. BBC found that every additional second of page load time caused 10% of users to leave their site. Walmart found that every 1-second improvement in page load time increased conversions by 2%. Pinterest reduced perceived wait time by 40% and saw a 15% increase in SEO traffic and 15% increase in sign-up conversion rate."
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

The LCP element is almost always the hero image on a landing page or product page. Optimizing this single asset — converting to WebP, setting explicit dimensions, and using `fetchpriority="high"` — is the highest-leverage LCP improvement for most sites.

### INP — Interaction to Next Paint
Measures **responsiveness**: the delay between user input (click, tap, keypress) and the browser's next visual response. INP replaced FID (First Input Delay) in March 2024 as a Core Web Vital.

| Score | Rating | User experience |
|-------|--------|-----------------|
| Under 200ms | Good | Instant-feeling |
| 200ms – 500ms | Needs Improvement | Noticeable lag |
| Over 500ms | Poor | Page feels frozen |

INP measures all interactions during a visit (not just the first), making it more representative than FID of how a page actually feels to use. Heavy JavaScript, third-party scripts, and complex interactive elements are the primary INP offenders.

### CLS — Cumulative Layout Shift
Measures **visual stability**: how much visible content unexpectedly moves during page load. Caused by images without dimensions, dynamic content insertion, and web fonts that cause text reflow.

| Score | Rating | Conversion risk |
|-------|--------|-----------------|
| Under 0.1 | Good | Minimal misclick risk |
| 0.1 – 0.25 | Needs Improvement | Noticeable shifting |
| Over 0.25 | Poor | Direct conversion damage |

CLS above 0.25 causes visible, jarring layout shifts. On e-commerce and checkout pages, CLS directly causes misclicks — a visitor taps "Add to Cart" and the button shifts just as they tap, clicking something unintended instead. This is a direct, measurable conversion loss.

## Core Web Vitals and Conversion Rate

The conversion impact of performance is well-documented:

| Source | Finding |
|--------|---------|
| Google research | 1s delay in mobile load time → up to 20% conversion drop |
| Deloitte (2020) | 0.1s speed improvement → 8% CVR increase on retail sites |
| Google/SOASTA | Pages loading in 1s convert 3× better than pages loading in 5s |
| Walmart (internal) | 1s improvement → 2% increase in conversions |
| BBC | Each additional second of load time → 10% user loss |
| Pinterest | 40% reduction in wait time → 15% increase in sign-up CVR |

For CRO, Core Web Vitals are the technical foundation. No amount of headline testing or CTA optimisation compensates for a page that takes 6 seconds to load or shifts its layout as users try to click.

The [bounce rate](/cro-glossary/bounce-rate/) data reinforces this: pages loading in 1 second have ~10% bounce rate; pages loading in 5 seconds have ~90% bounce rate. Poor LCP is often the primary cause of elevated bounce rates that page-level CRO cannot fix.

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

E-commerce has among the worst Core Web Vitals scores — and some of the highest traffic volumes and revenue-per-visitor. This combination makes e-commerce technical performance one of the highest-ROI optimization areas in the sector.

## How to Check Your Scores

1. **[PageSpeed Insights](https://pagespeed.web.dev/)** — Real-user data from CrUX + lab data from Lighthouse. Enter your URL to get both.
2. **[Google Search Console](https://search.google.com/search-console/)** → Core Web Vitals report — Shows real-user data across all pages grouped by URL pattern. Essential for finding problem pages at scale.
3. **Chrome DevTools** → Lighthouse tab — Run audits in-browser with specific improvement suggestions.
4. **Web Vitals Chrome Extension** — Shows live CWV scores as you browse, useful for quick auditing.

Always use field data (CrUX) for prioritisation and lab data (Lighthouse) for debugging specific issues. Field data reflects what real users experience on their actual devices and connections; lab data is a controlled snapshot.

## Quick Wins for Each Metric

**LCP:**
- Convert hero images to WebP format (30–50% smaller than JPEG at same quality)
- Add `fetchpriority="high"` to the above-fold hero image
- Preload your hero image: `<link rel="preload" as="image" href="hero.webp">`
- Use a CDN for static assets (reduces TTFB by 50–70% for geographically distant users)
- Eliminate render-blocking resources (unused CSS, synchronous JS in `<head>`)

**INP:**
- Defer non-critical JavaScript with `defer` or `async`
- Remove or delay third-party scripts (chat widgets, analytics tags, ad pixels)
- Break long JavaScript tasks (over 50ms) into smaller chunks
- Use passive event listeners where interaction feedback isn't required

**CLS:**
- Always set explicit `width` and `height` on images and videos
- Avoid inserting content above existing content after page load
- Reserve space for ads and embeds with `min-height` containers
- Use `font-display: optional` or `swap` for web fonts to prevent text reflow
- Avoid CSS animations that affect layout (prefer `transform` over `top/left`)

## CWV in the CRO Audit Process

Core Web Vitals are assessed in the technical layer of every CRO audit. The diagnostic sequence:

1. Check field data in Search Console for pages with poor CWV
2. Run PageSpeed Insights on the worst-performing pages
3. Identify the highest-impact issues per page (LCP element, main CLS source, largest JS tasks)
4. Prioritise fixes by traffic volume × severity × implementation effort
5. Re-measure field data 4–6 weeks after deployment (CrUX data has a 28-day rolling window)

Poor Core Web Vitals are often the hidden reason why otherwise well-designed pages underperform — especially on mobile, where network conditions and device capabilities amplify the impact of every performance issue. For the CLS-specific deep dive, see [Cumulative Layout Shift](/cro-glossary/cumulative-layout-shift/).

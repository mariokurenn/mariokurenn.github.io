---
term: "Largest Contentful Paint (LCP)"
shortDefinition: "A Core Web Vital that measures how long it takes for the main content of a page to load — the primary page speed metric for SEO and UX."
category: "Technical"
difficulty: "intermediate"
relatedTerms: ["core-web-vitals", "page-speed", "bounce-rate", "conversion-rate"]
publishDate: "2026-03-24"
faqs:
  - question: "What is Largest Contentful Paint (LCP)?"
    answer: "Largest Contentful Paint (LCP) is a Core Web Vitals metric that measures the time from when a user first navigates to a page until the largest visible content element has loaded. 'Largest content' is typically the hero image, the main heading, or a large block of text. LCP is the most important page speed metric for user experience because it measures when visitors can see the main content they came for. Google uses LCP as a search ranking signal."
  - question: "What is a good LCP score?"
    answer: "Google defines LCP thresholds as: Good = under 2.5 seconds, Needs Improvement = 2.5–4.0 seconds, Poor = over 4.0 seconds. For competitive SEO, targeting under 2.5s on mobile is the practical goal. Most pages fall in the 2.5–8s range — meaning there's often significant room for improvement. LCP scores above 4 seconds correlate with measurably higher bounce rates and lower conversion rates."
  - question: "What causes slow LCP and how do I fix it?"
    answer: "The most common LCP causes: (1) Unoptimized hero image — large file size, not using WebP format, no CDN. Fix: compress to WebP, serve via CDN, add fetchpriority='high'. (2) Render-blocking resources — CSS and JavaScript that prevent the browser from rendering content. Fix: defer non-critical JS, inline critical CSS. (3) Slow server response — high TTFB delays everything. Fix: upgrade hosting, enable server caching. (4) No preload for critical resources — browser discovers fonts/images too late. Fix: add resource hints."
---

**Largest Contentful Paint (LCP)** is a [Core Web Vitals](/cro-glossary/core-web-vitals/) metric that measures the time from initial page navigation until the largest visible content element has fully loaded.

**LCP thresholds:**
- **Good:** Under 2.5 seconds
- **Needs Improvement:** 2.5–4.0 seconds
- **Poor:** Over 4.0 seconds

LCP is the primary page speed metric used by Google for search ranking and by UX researchers to measure perceived load speed — because it correlates most strongly with when a user feels the page is "ready."

## What LCP Actually Measures

LCP captures the render time of the largest content block visible in the viewport at page load. The element measured is typically:

- **Hero image** (most common on landing pages and homepages)
- **Large heading text** (H1 above the fold)
- **Full-width video poster image**
- **Background image with text overlay**

The browser continuously updates the LCP candidate as the page loads — whichever element is largest at the point it finishes loading becomes the final LCP.

## LCP and Conversion Rate

LCP is not just a SEO metric — it has direct conversion implications:

| LCP | Bounce Rate Impact (Google research) |
|---|---|
| Under 1s | Baseline |
| 1–2.5s | +32% bounce rate |
| 2.5–4s | +90% bounce rate |
| Over 4s | +123% bounce rate |

For paid traffic especially, slow LCP is expensive: you're paying for clicks that immediately bounce because the page took too long to show the hero image or headline.

## What Causes Poor LCP

### Unoptimized Hero Image (Most Common)
A 2MB JPG hero image on a 4G mobile connection takes 4–8 seconds to load. The hero image is almost always the LCP element — making it the single most important asset to optimize.

**Fixes:**
- Convert to WebP format (typically 30–50% smaller than JPG at same quality)
- Compress to the smallest file size that still looks good at display dimensions
- Add explicit width and height attributes to prevent layout shifts
- Add `fetchpriority="high"` to tell the browser to prioritize this image
- Serve from a CDN close to your users

### Render-Blocking Resources
If the browser must download and process large CSS or JavaScript files before rendering, LCP is delayed even if the image itself is fast.

**Fixes:**
- Inline critical CSS (the styles needed for above-the-fold content)
- Defer non-critical JavaScript with `defer` or `async` attributes
- Remove unused CSS with tools like PurgeCSS

### Slow Server Response (TTFB)
Every millisecond of server response delay adds to LCP. TTFB over 800ms is a significant LCP problem.

**Fixes:**
- Use CDN for static assets (edge caching reduces TTFB dramatically)
- Enable page caching on the server
- Upgrade to faster hosting infrastructure

## Measuring LCP

**Google PageSpeed Insights** ([pagespeed.web.dev](https://pagespeed.web.dev/)) — Shows field data (real users) and lab data. The field data LCP is what Google uses for ranking.

**Chrome DevTools** → Lighthouse tab → Performance audit → Shows LCP element highlighted in the filmstrip view.

**Google Search Console** → Core Web Vitals report → Shows real-user LCP by page group.

## LCP as a CRO Priority

On high-traffic pages where LCP is above 4 seconds, fixing LCP is typically the highest-ROI CRO action available — no A/B testing required. A 3-second improvement to LCP on a checkout or landing page generates measurable conversion rate improvement that applies to every visitor immediately.

For the full performance optimization context, see [Core Web Vitals](/cro-glossary/core-web-vitals/).

---
term: "Cumulative Layout Shift (CLS)"
shortDefinition: "A Core Web Vitals metric measuring visual stability — how much page elements unexpectedly move around while loading, frustrating visitors and causing misclicks."
category: "Technical"
difficulty: "intermediate"
relatedTerms: ["core-web-vitals", "page-speed", "bounce-rate", "above-the-fold", "largest-contentful-paint"]
publishDate: "2026-03-24"
updatedDate: "2026-03-29"
faqs:
  - question: "What is Cumulative Layout Shift (CLS)?"
    answer: "Cumulative Layout Shift (CLS) is a Core Web Vitals metric that measures visual instability — how much visible page content unexpectedly moves while the page loads. CLS is scored as the sum of individual layout shift scores (each shift scored by viewport fraction affected × distance moved). A score under 0.1 is good; 0.1–0.25 needs improvement; above 0.25 is poor. Common CLS causes: images without defined dimensions, ads that insert above existing content, web fonts causing text to reflow when they load, and dynamically injected content."
  - question: "How does layout shift affect conversion rate?"
    answer: "Layout shift directly causes conversion failures through misclicks — a visitor about to tap 'Add to Cart' has the button shift just as they tap, and they hit an adjacent element instead. On mobile this is particularly damaging because tap targets are small and shifts are larger as a percentage of the viewport. Beyond misclicks, unstable pages signal poor quality and reduce trust. Google's CrUX data shows that pages with good CLS scores have 24% lower session abandonment rates than pages with poor CLS scores."
  - question: "What causes high CLS and how do I fix it?"
    answer: "The most common CLS causes and fixes: (1) Images without width/height attributes — the browser doesn't reserve space until the image loads, causing content to jump. Fix: always set explicit dimensions on img tags. (2) Ads or embeds loading after content — inject with a fixed-height placeholder. (3) Web fonts causing text reflow (FOIT/FOUT) — use font-display: optional or preload fonts. (4) Dynamically injected content like cookie banners and chat widgets — inject with fixed-height containers. (5) CSS animations affecting layout properties (top, height, width) — use transform and opacity instead."
  - question: "How do I measure CLS on my website?"
    answer: "Measure CLS using: (1) Google PageSpeed Insights (pagespeed.web.dev) — shows both real-user CrUX CLS and lab CLS from Lighthouse; (2) Google Search Console → Core Web Vitals report — shows CLS across real users grouped by URL; (3) Chrome DevTools → Performance tab — run a performance profile and look for red/pink layout shift markers in the timeline; (4) Web Vitals Chrome Extension — shows live CLS as you scroll; (5) WebPageTest.org — shows frame-by-frame filmstrip with layout shift highlights. Always measure on mobile — CLS is almost always worse on mobile than desktop."
  - question: "What is a good CLS score for e-commerce?"
    answer: "For e-commerce, targeting a CLS score under 0.1 is the goal — especially on product pages and checkout where layout shifts cause the most damaging misclicks. Most e-commerce pages struggle with CLS due to: product image carousels that resize on load, recommended products sections loading after initial render, and payment method logos injected after page load. Google's 2024 CrUX data shows that only 35% of e-commerce pages achieve 'good' CLS scores, making this one of the most common technical CRO opportunities in the sector."
  - question: "Does CLS affect SEO rankings?"
    answer: "Yes. Google confirmed in 2021 that Core Web Vitals — including CLS — are a ranking signal as part of the Page Experience update. Pages with poor CLS scores (above 0.25) may rank lower than comparable pages with good CLS, all else being equal. The ranking impact is modest for most searches but can be a tiebreaker in competitive SERPs. More importantly, the user experience impact — misclicks, abandonment, and trust erosion — has a larger indirect effect on conversion than the direct ranking impact. Fixing CLS is both an SEO and CRO priority."
---

**Cumulative Layout Shift (CLS)** is a [Core Web Vitals](/cro-glossary/core-web-vitals/) metric that measures the visual stability of a web page during loading — specifically, how much visible content unexpectedly shifts position.

**CLS thresholds:**
- **Good:** Under 0.1
- **Needs Improvement:** 0.1–0.25
- **Poor:** Over 0.25

CLS is scored as the sum of all unexpected layout shift scores — each individual shift contributes based on both the fraction of the viewport affected and the distance elements moved.

## Why CLS Matters for Conversion

Layout shifts are not just an annoyance — they directly cause conversion failures:

**The misclick problem:** A visitor is about to tap a "Add to Cart" button on mobile. As they tap, an ad loads above the button and shifts it 80px down. The visitor taps the product image instead. The cart was not added. The conversion was lost.

This scenario is common enough that Google included CLS as a ranking signal precisely because it correlates with poor user experience and higher session abandonment rates. CrUX data shows pages with good CLS scores have 24% lower session abandonment than pages with poor CLS.

**Trust erosion:** Unstable pages that "jump around" signal low quality. Visitors subconsciously associate visual instability with unreliability — the same way a physical store with disorganized shelves signals unprofessionalism.

## CLS Score Components

CLS is calculated per layout shift event:

**Layout Shift Score = Impact Fraction × Distance Fraction**

- **Impact fraction:** What percentage of the viewport was affected by the shift?
- **Distance fraction:** How far did the element move as a fraction of the viewport?

A shift affecting 50% of the viewport and moving 10% of the viewport distance produces a shift score of 0.05.

## CLS Benchmarks by Industry

Google's CrUX data shows significant variation across verticals:

| Industry | % pages with Good CLS (<0.1) | Common cause |
|----------|------------------------------|--------------|
| Technology / SaaS | 52% | Late-loading chat widgets |
| E-commerce | 35% | Image carousels, dynamic recommendations |
| News / Media | 28% | Ad injection above editorial content |
| Financial services | 44% | Third-party compliance widgets |
| Healthcare | 41% | Third-party booking embeds |

*Source: Google CrUX dataset, 2024*

E-commerce has the worst CLS performance of major verticals — and it's also the vertical where misclicks have the most direct revenue impact.

## Common CLS Causes

### Images Without Defined Dimensions
**The most common CLS cause.** When a browser encounters `<img src="hero.jpg">` without width and height attributes, it doesn't know how much space to reserve. When the image loads, it pushes all content below it down — a large, visible shift.

**Fix:** Always include explicit dimensions:
```html
<img src="hero.webp" width="1200" height="630" alt="...">
```

Or use CSS aspect-ratio:
```css
img { aspect-ratio: 16/9; width: 100%; }
```

### Ads and Dynamically Injected Content
Third-party ads, cookie consent banners, and chat widgets often inject into the page after initial render — pushing existing content down.

**Fix:** Reserve space for dynamic content:
```css
.ad-slot { min-height: 250px; }
.cookie-banner { position: fixed; bottom: 0; } /* doesn't push content */
```

### Web Fonts (FOIT/FOUT)
Fonts that load late cause text to first render in a fallback font (different size) then reflow when the custom font loads.

**Fix:** Preload the font and use `font-display: optional` (no reflow if font loads too late) or `font-display: swap` with matched fallback font metrics.

### CSS Animations Affecting Layout
Animating properties like `top`, `left`, `height`, or `width` triggers layout recalculation.

**Fix:** Use `transform` and `opacity` for animations — these run on the compositor thread and don't trigger layout:
```css
/* Causes CLS */
.slide-in { animation: shift-top; } /* animates top: value */

/* No CLS */
.slide-in { animation: slide-down; } /* uses transform: translateY() */
```

### Dynamic Content Injection
Personalization engines, A/B testing tools, and recommendation widgets frequently inject content after the initial page render. This is one of the most overlooked CLS sources on mature e-commerce sites. Each injected block can add 0.05–0.15 to your CLS score.

**Fix:** Pre-render placeholder containers with fixed dimensions so injected content fills reserved space rather than pushing content.

## CLS on Mobile vs Desktop

CLS issues are almost always more severe on mobile because:
- Viewport is smaller — a 50px shift is a larger percentage of the screen
- Mobile connections are slower — more assets load with delays between them
- Touch targets are smaller — shifted elements are harder to re-target accurately
- Third-party scripts (ads, chat) load proportionally later on slower connections

For any page where mobile represents significant traffic (typically 50–70%+ for most sites), CLS on mobile should be the primary CLS diagnostic focus. See [Mobile Conversion Rate Optimization](/blog/mobile-conversion-rate-optimization/) for the full mobile performance optimization context.

## CLS and the Conversion Impact Calculation

It's possible to estimate the revenue cost of poor CLS directly:

**Example calculation:**
- 50,000 monthly product page visits
- Current CVR: 2.5%
- Current CLS: 0.28 (poor)
- Industry data: improving CLS from poor to good correlates with ~15% CVR improvement
- Projected CVR after CLS fix: ~2.9%
- Revenue per conversion: €80
- Monthly revenue uplift: 50,000 × 0.004 × €80 = **€16,000/month**

CLS fixes are frequently among the highest-ROI technical improvements in a [CRO audit](/services/cro-audit/) precisely because the fix is often straightforward (add image dimensions, fix font loading) while the revenue impact compounds across every page affected.

## Measuring and Monitoring CLS

**Google PageSpeed Insights** — Reports field CLS (real user data) from CrUX and lab CLS from Lighthouse. The field data is what matters for SEO and ranking. Available at [pagespeed.web.dev](https://pagespeed.web.dev/).

**Chrome DevTools → Performance tab** — Run a performance profile to see layout shifts highlighted in the timeline as red/pink bands.

**Google Search Console → Core Web Vitals** — Shows CLS data by page URL group across real users. The most actionable view for identifying which specific pages need fixing. Access at [search.google.com/search-console](https://search.google.com/search-console/).

**WebPageTest.org** — Frame-by-frame filmstrip view highlights exactly when and where shifts occur. Essential for diagnosing which element is causing a shift.

## CLS in the CRO Audit Process

In a technical CRO audit, CLS is evaluated in order of:

1. **Measure CLS per page group** — Product pages, checkout, landing pages separately
2. **Identify the shift source** — Use Chrome DevTools Performance tab to pinpoint the element
3. **Categorize by fix complexity** — Image dimensions (10 minutes), font loading (1 hour), third-party widgets (requires coordination)
4. **Estimate revenue impact** — Calculate based on traffic × CVR improvement estimate
5. **Fix and monitor** — CLS improvements should be verified in Search Console within 28 days (data update cycle)

For the full Core Web Vitals context, see [Core Web Vitals](/cro-glossary/core-web-vitals/) and [Page Speed](/cro-glossary/page-speed/). CLS fixes are included in every technical [CRO audit](/services/cro-audit/).

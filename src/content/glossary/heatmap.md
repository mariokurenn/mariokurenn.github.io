---
term: "Heatmap"
shortDefinition: "A visual analytics tool that uses colour gradients to show where visitors click, move, and scroll on a webpage."
category: "Analytics"
difficulty: "beginner"
relatedTerms: ["conversion-rate", "bounce-rate", "landing-page", "funnel-optimization", "ab-testing"]
publishDate: "2026-03-21"
faqs:
  - question: "What is a heatmap in web analytics?"
    answer: "A heatmap is a visual representation of user behaviour on a webpage that uses colour gradients — typically red/orange for high activity, blue/green for low — to show where visitors click, move their mouse, and how far they scroll. Heatmaps reveal which page elements get attention and which are ignored, helping CRO teams identify friction points and prioritise test hypotheses."
  - question: "What are the different types of heatmaps?"
    answer: "The three main heatmap types are: (1) Click maps — show where visitors click (or tap on mobile), revealing which links, buttons, and non-clickable elements receive attention. (2) Scroll maps — show how far visitors scroll down a page, revealing where content engagement drops off. (3) Move maps (hover maps) — show where visitors move their mouse cursor, which correlates with eye movement and reading patterns on desktop."
  - question: "What tools are used for heatmaps?"
    answer: "The most widely used heatmap tools are Hotjar (the most popular option for SMBs), Microsoft Clarity (free), and Crazy Egg. VWO and FullStory include heatmap functionality alongside session recordings and A/B testing. Microsoft Clarity is completely free and provides both heatmaps and session recordings, making it the recommended starting point for most businesses."
---

A **heatmap** is a visual analytics tool that overlays colour gradients on a webpage screenshot to show how visitors interact with the page. Hot colours (red, orange) indicate high activity; cool colours (blue, green) indicate low activity.

Heatmaps translate aggregate user behaviour — thousands of sessions — into a single visual that immediately reveals what visitors pay attention to and what they ignore.

## Three Types of Heatmaps

### Click Maps
Show every click (desktop) and tap (mobile) made on the page. Reveals:
- Which buttons and links receive the most clicks
- Which non-clickable elements visitors try to click (often indicating confusing design)
- Whether CTA buttons attract the attention they're designed to

Click maps are the most directly actionable heatmap type for CRO.

### Scroll Maps
Show how far visitors scroll down the page before leaving. Reveals:
- Where content engagement drops off sharply
- Whether key selling points or CTAs below the fold are ever seen
- Optimal page length for your specific audience

If 80% of visitors never see your pricing section, moving it higher on the page is a high-priority test hypothesis.

### Move Maps (Hover Maps)
Show where visitors move their mouse cursor on desktop. Eye-tracking research confirms that mouse movement correlates with eye movement — where the cursor goes, the eyes tend to follow.

Useful for identifying: which copy elements read carefully, which headlines are skipped, and where visual attention concentrates.

## What Heatmaps Reveal That Analytics Cannot

Google Analytics tells you *that* visitors bounced from a page. Heatmaps tell you *where* on the page they lost interest.

GA shows you the checkout abandonment rate. A scroll map shows you that 60% of visitors never scrolled to the checkout button. A click map shows you that visitors are clicking on the product image expecting it to zoom, but it doesn't.

**Heatmaps answer "why"** at the page level. They're qualitative data that explains quantitative patterns.

## How to Use Heatmaps in a CRO Programme

1. **Audit highest-traffic, lowest-converting pages** — These are where heatmap data generates the most value
2. **Look for confusion clicks** — Users clicking non-clickable elements = design confusion = friction
3. **Check scroll depth against CTA position** — If your primary CTA is below where 50% of visitors stop scrolling, move it up
4. **Compare mobile vs desktop heatmaps separately** — Behaviour is fundamentally different; analyse them independently
5. **Turn observations into hypotheses** — "Heatmap shows 70% of visitors click the product image without zooming, suggesting they want a zoom feature — adding one will reduce bounce rate"

Heatmap analysis is one of the first steps in any [CRO audit](/services/cro-audit/). Combined with [session recordings](/cro-glossary/session-recording/) and analytics data, it forms the qualitative research foundation that drives test hypotheses.

## Recommended Tools

| Tool | Price | Best For |
|------|-------|---------|
| Microsoft Clarity | Free | Starting point for all sites |
| Hotjar | Free–$99/mo | SMB teams, good UX |
| Crazy Egg | $29–$99/mo | Agencies, client reporting |
| FullStory | Enterprise | Large-scale behavioural analytics |
| VWO | $199/mo+ | Combined heatmap + A/B testing |

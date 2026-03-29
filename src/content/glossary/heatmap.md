---
term: "Heatmap"
shortDefinition: "A visual analytics tool that uses colour gradients to show where visitors click, move, and scroll on a webpage."
category: "Analytics"
difficulty: "beginner"
relatedTerms: ["conversion-rate", "bounce-rate", "landing-page", "funnel-optimization", "session-recording"]
publishDate: "2026-03-21"
updatedDate: "2026-03-29"
faqs:
  - question: "What is a heatmap in web analytics?"
    answer: "A heatmap is a visual representation of user behaviour on a webpage that uses colour gradients — typically red/orange for high activity, blue/green for low — to show where visitors click, move their mouse, and how far they scroll. Heatmaps reveal which page elements get attention and which are ignored, helping CRO teams identify friction points and prioritise test hypotheses. Unlike Google Analytics which shows 'that' visitors left a page, heatmaps show 'where' on the page they lost interest or encountered friction."
  - question: "What are the different types of heatmaps?"
    answer: "The three main heatmap types: (1) Click maps — show where visitors click (or tap on mobile), revealing which links, buttons, and non-clickable elements receive attention. Non-clickable elements that receive clicks indicate design confusion. (2) Scroll maps — show how far visitors scroll down a page before leaving, revealing where content engagement drops off. (3) Move maps (hover maps) — show where visitors move their mouse cursor on desktop. Eye-tracking research confirms that mouse movement correlates with eye movement at approximately 84–88% accuracy (Guo & Agichtein, 2010)."
  - question: "What tools are used for heatmaps?"
    answer: "The most widely used heatmap tools: Microsoft Clarity (completely free, unlimited sessions, no data cap), Hotjar (free tier for small sites, paid from $39/mo), Crazy Egg ($29–$99/mo, strong agency reporting), VWO (combined heatmap + A/B testing), FullStory (enterprise, advanced behavioral analytics). Microsoft Clarity is the recommended starting point — it's free, GDPR-compliant, and provides both heatmaps and session recordings with no session limits. Hotjar is preferred by teams who need stronger segmentation and filtering options."
  - question: "What should I look for in heatmap data?"
    answer: "The highest-value heatmap signals: (1) Click map confusion clicks — visitors clicking non-interactive elements expecting a response indicate design friction and missed conversion opportunities; (2) Scroll map drop-off — identify the exact page depth where 50% and 75% of visitors stop scrolling; if your CTA is below the 50% scroll line, moving it up is a high-confidence test; (3) CTA blind spots — heatmaps showing the primary CTA button receiving fewer clicks than surrounding non-interactive elements suggest visual hierarchy problems; (4) Mobile vs desktop differences — always analyze heatmaps for each device type separately."
  - question: "How do I use scroll map data to improve landing page conversion?"
    answer: "Scroll map data reveals the 'fold' reality for your actual visitors. If your scroll map shows that 70% of visitors see above-fold content, 45% see mid-page, and only 25% see the bottom-of-page CTA, you have a structural problem. Actions: (1) Move your strongest conversion argument and CTA higher up the page. (2) Identify what content causes the scroll drop-off — is there a section that loses engagement? (3) Add an additional CTA at the point where 50% of visitors stop scrolling. (4) For mobile specifically, check if the fold position differs significantly from desktop — typically mobile scroll depth is lower as a percentage of page height."
---

A **heatmap** is a visual analytics tool that overlays colour gradients on a webpage screenshot to show how visitors interact with the page. Hot colours (red, orange) indicate high activity; cool colours (blue, green) indicate low activity.

Heatmaps translate aggregate user behaviour — thousands of sessions — into a single visual that immediately reveals what visitors pay attention to and what they ignore.

## Three Types of Heatmaps

### Click Maps
Show every click (desktop) and tap (mobile) made on the page. Reveals:
- Which buttons and links receive the most clicks
- Which non-clickable elements visitors try to click (confusion clicks — a major CRO signal)
- Whether CTA buttons attract the clicks they're designed to
- Which images visitors tap expecting to zoom (common on product pages)

Click maps are the most directly actionable heatmap type for CRO — every confusion click represents a design element that needs to change.

### Scroll Maps
Show how far visitors scroll down the page before leaving. Reveals:
- Where content engagement drops off sharply
- Whether key selling points or CTAs below the fold are ever seen
- Optimal page length for your specific audience and page type
- The real fold position for your actual visitors (different from your assumptions)

**Key insight:** If 70% of visitors stop scrolling before reaching your pricing section, moving it higher is a high-confidence test hypothesis that requires no additional research.

### Move Maps (Hover Maps)
Show where visitors move their mouse cursor on desktop. Eye-tracking research ([Guo & Agichtein, 2010](https://dl.acm.org/doi/10.1145/1835449.1835531)) confirms that mouse movement correlates with eye movement at approximately 84–88% accuracy.

Useful for identifying: which copy elements are read carefully, which headlines are skipped, and where visual attention concentrates on desktop.

## What Heatmaps Reveal That Analytics Cannot

Google Analytics tells you *that* visitors bounced from a page. Heatmaps tell you *where* on the page they lost interest.

| Analytics metric | Heatmap insight added |
|-----------------|----------------------|
| High exit rate on product page | Scroll map: 60% leave before seeing pricing |
| Low CTA click rate | Click map: CTA button gets fewer clicks than adjacent non-clickable element |
| High checkout abandonment | Click map: rage clicks on payment button that has a bug |
| Low scroll depth | Scroll map: engagement drops at a specific section that needs redesign |

Heatmaps answer "why" at the page level. They're qualitative data that explains quantitative patterns.

## How to Use Heatmaps in a CRO Programme

1. **Audit highest-traffic, lowest-converting pages** — These are where heatmap data generates the most value per session analyzed
2. **Look for confusion clicks** — Users clicking non-clickable elements = design confusion = friction
3. **Check scroll depth against CTA position** — If your primary CTA is below where 50% of visitors stop scrolling, move it up
4. **Compare mobile vs desktop heatmaps separately** — Behaviour is fundamentally different; analyzing them together produces misleading averages
5. **Turn observations into hypotheses** — "Heatmap shows 70% of visitors click the product image without zooming, suggesting they want a zoom feature — adding one will reduce bounce rate"

## Heatmap Analysis Checklist

- [ ] Is the primary CTA button receiving the most clicks on the page?
- [ ] Are visitors clicking any non-interactive elements (confusion clicks)?
- [ ] What percentage of visitors scroll past each CTA button?
- [ ] Where does scroll engagement drop below 50%? Is your main value proposition above that line?
- [ ] Are mobile and desktop heatmaps analyzed separately?
- [ ] Are there elements visitors click expecting navigation that doesn't deliver?

Heatmap analysis is one of the first steps in any [CRO audit](/services/cro-audit/). Combined with [session recordings](/cro-glossary/session-recording/) and analytics data, it forms the qualitative research foundation that drives test hypotheses.

## Recommended Tools

| Tool | Price | Best For |
|------|-------|---------|
| Microsoft Clarity | Free | Starting point for all sites — no limits |
| Hotjar | Free–$99/mo | SMB teams, strong filtering |
| Crazy Egg | $29–$99/mo | Agencies, client reporting |
| FullStory | Enterprise | Large-scale behavioural analytics |
| VWO | $199/mo+ | Combined heatmap + A/B testing |

For alternatives to Hotjar, see [Hotjar Alternatives](/blog/hotjar-alternatives/).

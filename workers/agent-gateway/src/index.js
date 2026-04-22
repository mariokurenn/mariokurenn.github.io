/**
 * grow-conversions.com — Agent Gateway Worker
 *
 * 1. Injects Link response headers (RFC 8288) on every HTML response
 * 2. Handles Accept: text/markdown content negotiation (Markdown for Agents)
 */

const SITE = 'https://grow-conversions.com';

const LINK_HEADER = [
  `<${SITE}/.well-known/api-catalog>; rel="api-catalog"`,
  `<${SITE}/.well-known/agent-skills/index.json>; rel="agent-skills"`,
  `<${SITE}/llms.txt>; rel="describedby"; type="text/plain"`,
  `<${SITE}/sitemap.xml>; rel="sitemap"; type="application/xml"`,
].join(', ');

// RFC 9727 API catalog — application/linkset+json
const API_CATALOG = JSON.stringify({
  linkset: [
    {
      anchor: `${SITE}/.well-known/agent-skills/`,
      'service-desc': [
        {
          href: `${SITE}/.well-known/agent-skills/index.json`,
          type: 'application/json',
          title: 'Agent Skills Discovery Index (RFC v0.2.0)',
        },
      ],
      'service-doc': [
        {
          href: `${SITE}/tools/`,
          type: 'text/html',
          title: 'CRO Calculator Tools — Documentation & Usage',
        },
      ],
      status: [
        {
          href: `${SITE}/.well-known/agent-skills/index.json`,
        },
      ],
    },
    {
      anchor: `${SITE}/tools/`,
      'service-desc': [
        {
          href: `${SITE}/.well-known/agent-skills/index.json`,
          type: 'application/json',
          title: '10 CRO Calculator Tool Definitions with inputSchema',
        },
      ],
      'service-doc': [
        {
          href: `${SITE}/tools/`,
          type: 'text/html',
          title: 'Free CRO Calculators — grow-conversions.com',
        },
      ],
    },
  ],
});

// File extensions that should never be processed — pass straight to origin
const ASSET_EXT = new Set([
  'js', 'css', 'png', 'jpg', 'jpeg', 'webp', 'avif', 'svg', 'ico',
  'woff', 'woff2', 'ttf', 'otf', 'json', 'xml', 'txt', 'pdf', 'map',
]);

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Serve RFC 9727 API catalog
    if (url.pathname === '/.well-known/api-catalog') {
      return new Response(API_CATALOG, {
        status: 200,
        headers: {
          'Content-Type': 'application/linkset+json',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'public, max-age=86400',
          'Link': `<${SITE}/.well-known/api-catalog>; rel="api-catalog"`,
        },
      });
    }

    // Pass assets straight through — no processing needed
    const ext = url.pathname.match(/\.([a-z0-9]+)(?:\?|#|$)/i)?.[1]?.toLowerCase();
    if (ext && ASSET_EXT.has(ext)) {
      return fetch(request);
    }

    // Check if the agent wants markdown
    const accept = request.headers.get('Accept') ?? '';
    const wantsMarkdown = accept
      .split(',')
      .map(s => s.trim().split(';')[0].trim())
      .includes('text/markdown');

    const originResponse = await fetch(request);
    const ct = originResponse.headers.get('content-type') ?? '';

    // Only process HTML — everything else passes through as-is
    if (!ct.includes('text/html')) {
      return originResponse;
    }

    if (wantsMarkdown) {
      const html = await originResponse.text();
      const markdown = htmlToMarkdown(html, url.href);
      const tokenCount = markdown.split(/\s+/).filter(Boolean).length;

      return new Response(markdown, {
        status: 200,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'X-Markdown-Tokens': String(tokenCount),
          'Link': LINK_HEADER,
          'Vary': 'Accept',
          'Cache-Control': 'public, max-age=3600',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    // Normal HTML response — clone and inject Link + Vary headers
    const headers = new Headers(originResponse.headers);
    headers.set('Link', LINK_HEADER);
    headers.set('Vary', 'Accept');

    return new Response(originResponse.body, {
      status: originResponse.status,
      statusText: originResponse.statusText,
      headers,
    });
  },
};

// ---------------------------------------------------------------------------
// HTML → Markdown converter
// Extracts <main> or <article> content and converts to clean markdown.
// ---------------------------------------------------------------------------

function htmlToMarkdown(html, pageUrl) {
  // 1. Pull the page title from <title> or first <h1>
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const pageTitle = titleMatch ? decodeEntities(titleMatch[1].replace(/\s*[–|—-]\s*.*$/, '').trim()) : '';

  // 2. Extract the main content block — prefer <main>, then <article>
  let body = extractBlock(html, 'main') || extractBlock(html, 'article') || html;

  // 3. Strip blocks we never want in markdown output
  body = stripBlock(body, 'nav');
  body = stripBlock(body, 'header');
  body = stripBlock(body, 'footer');
  body = stripBlock(body, 'script');
  body = stripBlock(body, 'style');
  body = stripBlock(body, 'noscript');
  body = stripBlock(body, 'aside');
  body = body.replace(/<!--[\s\S]*?-->/g, '');

  // 4. Convert block elements to markdown
  body = body
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, (_, c) => `\n# ${inline(c)}\n`)
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, c) => `\n## ${inline(c)}\n`)
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, c) => `\n### ${inline(c)}\n`)
    .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_, c) => `\n#### ${inline(c)}\n`)
    .replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, (_, c) => `\n##### ${inline(c)}\n`)
    .replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, (_, c) => `\n\`\`\`\n${decodeEntities(c)}\n\`\`\`\n`)
    .replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, c) => inline(c).split('\n').map(l => `> ${l}`).join('\n') + '\n')
    .replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (_, c) => convertList(c, false))
    .replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (_, c) => convertList(c, true))
    .replace(/<tr[^>]*>([\s\S]*?)<\/tr>/gi, (_, c) => convertTableRow(c))
    .replace(/<hr\s*\/?>/gi, '\n\n---\n\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, c) => `\n\n${inline(c)}\n\n`);

  // 5. Strip remaining tags
  body = stripAllTags(body);

  // 6. Normalise whitespace
  body = body
    .replace(/\n{4,}/g, '\n\n\n')
    .replace(/[ \t]+$/gm, '')
    .replace(/^[ \t]+/gm, '')
    .trim();

  return pageTitle ? `# ${pageTitle}\n\n${body}` : body;
}

// Convert inline elements within a block
function inline(html) {
  const result = html
    .replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => {
      const t = stripAllTags(text).trim();
      if (!t) return '';
      const absHref = href.startsWith('http') || href.startsWith('//') ? href : `https://grow-conversions.com${href}`;
      return `[${t}](${absHref})`;
    })
    .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, (_, c) => `**${stripAllTags(c).trim()}**`)
    .replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, (_, c) => `**${stripAllTags(c).trim()}**`)
    .replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, (_, c) => `_${stripAllTags(c).trim()}_`)
    .replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, (_, c) => `_${stripAllTags(c).trim()}_`)
    .replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, (_, c) => `\`${stripAllTags(c)}\``)
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return decodeEntities(result);
}

function convertList(html, ordered) {
  let i = 0;
  return '\n' + html
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, c) => {
      i++;
      const prefix = ordered ? `${i}. ` : '- ';
      return `${prefix}${inline(c)}\n`;
    })
    .replace(/<[^>]+>/g, '') + '\n';
}

function convertTableRow(html) {
  const cells = [];
  html.replace(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi, (_, c) => cells.push(inline(c)));
  return `| ${cells.join(' | ')} |\n`;
}

// Extract the content of the first occurrence of a tag (including nested)
function extractBlock(html, tag) {
  const open = new RegExp(`<${tag}[^>]*>`, 'i');
  const startMatch = html.match(open);
  if (!startMatch) return null;
  const start = html.indexOf(startMatch[0]);
  let depth = 0, i = start;
  const openRe = new RegExp(`<${tag}(?:\\s[^>]*)?>`, 'gi');
  const closeRe = new RegExp(`<\\/${tag}>`, 'gi');
  openRe.lastIndex = start;
  closeRe.lastIndex = start;
  let end = html.length;
  // Walk through, tracking nesting depth
  const combined = [];
  let pos = start;
  const re = new RegExp(`(<${tag}(?:\\s[^>]*)?>)|(<\\/${tag}>)`, 'gi');
  re.lastIndex = start;
  depth = 0;
  let m;
  while ((m = re.exec(html)) !== null) {
    if (m[1]) { depth++; }
    else if (m[2]) {
      depth--;
      if (depth === 0) { end = m.index + m[0].length; break; }
    }
  }
  return html.slice(start, end);
}

// Remove all occurrences of a tag and its content
function stripBlock(html, tag) {
  const re = new RegExp(`<${tag}(?:\\s[^>]*)?>(?:[\\s\\S]*?)<\\/${tag}>`, 'gi');
  let prev;
  do { prev = html; html = html.replace(re, ''); } while (html !== prev);
  return html;
}

function stripAllTags(html) {
  return decodeEntities(html.replace(/<[^>]+>/g, ''));
}

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCharCode(parseInt(h, 16)));
}

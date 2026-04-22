/**
 * grow-conversions.com — Agent Gateway Worker
 *
 * 1. RFC 8288 Link headers on all HTML responses
 * 2. Accept: text/markdown content negotiation
 * 3. RFC 9727 API catalog at /.well-known/api-catalog
 * 4. MCP Server Card (SEP-1649) at /.well-known/mcp/server-card.json
 * 5. MCP Streamable HTTP endpoint at /mcp — 10 real CRO calculators
 */

const SITE = 'https://grow-conversions.com';

const LINK_HEADER = [
  `<${SITE}/.well-known/api-catalog>; rel="api-catalog"`,
  `<${SITE}/.well-known/mcp/server-card.json>; rel="mcp-server-card"`,
  `<${SITE}/.well-known/agent-skills/index.json>; rel="agent-skills"`,
  `<${SITE}/llms.txt>; rel="describedby"; type="text/plain"`,
  `<${SITE}/sitemap.xml>; rel="sitemap"; type="application/xml"`,
].join(', ');

// RFC 9727 API catalog
const API_CATALOG = JSON.stringify({
  linkset: [
    {
      anchor: `${SITE}/.well-known/agent-skills/`,
      'service-desc': [{ href: `${SITE}/.well-known/agent-skills/index.json`, type: 'application/json', title: 'Agent Skills Discovery Index (RFC v0.2.0)' }],
      'service-doc': [{ href: `${SITE}/tools/`, type: 'text/html', title: 'CRO Calculator Tools' }],
      status: [{ href: `${SITE}/.well-known/agent-skills/index.json` }],
    },
    {
      anchor: `${SITE}/tools/`,
      'service-desc': [{ href: `${SITE}/.well-known/agent-skills/index.json`, type: 'application/json', title: '10 CRO Calculator Tool Definitions with inputSchema' }],
      'service-doc': [{ href: `${SITE}/tools/`, type: 'text/html', title: 'Free CRO Calculators' }],
    },
    {
      anchor: `${SITE}/mcp`,
      'service-desc': [{ href: `${SITE}/.well-known/mcp/server-card.json`, type: 'application/json', title: 'MCP Server Card (SEP-1649)' }],
      'service-doc': [{ href: `${SITE}/tools/`, type: 'text/html', title: 'MCP Tools Documentation' }],
    },
  ],
});

// MCP Server Card (SEP-1649)
const MCP_SERVER_CARD = JSON.stringify({
  schemaVersion: 'draft',
  serverInfo: {
    name: 'grow-conversions-cro-tools',
    version: '1.0.0',
    description: '10 CRO calculators: conversion rate, A/B testing significance, sample size, test duration, checkout funnel, cart abandonment, landing page ROI, CLV, form conversion, and CRO ROI.',
  },
  transport: [{ type: 'http', url: `${SITE}/mcp` }],
  capabilities: { tools: {} },
});

// MCP tool definitions (sent in tools/list response)
const MCP_TOOLS = [
  {
    name: 'calculate_conversion_rate',
    description: 'Calculate website conversion rate (CVR) from conversions and visitors. Returns CVR %, monthly revenue at current and improved rates.',
    inputSchema: {
      type: 'object',
      properties: {
        conversions: { type: 'number', description: 'Number of completed conversions in the period' },
        visitors: { type: 'number', description: 'Total sessions or visitors in the same period' },
        aov: { type: 'number', description: 'Average order value in EUR (optional)' },
      },
      required: ['conversions', 'visitors'],
    },
  },
  {
    name: 'calculate_ab_test_significance',
    description: 'Calculate statistical significance of an A/B test using a two-tailed z-test. Returns confidence level, z-score, p-value, relative lift, and a WINNER/LOSER/BORDERLINE/NOT_SIGNIFICANT verdict.',
    inputSchema: {
      type: 'object',
      properties: {
        controlVisitors: { type: 'number', description: 'Visitors in control group (A)' },
        controlConversions: { type: 'number', description: 'Conversions in control group (A)' },
        variantVisitors: { type: 'number', description: 'Visitors in variant group (B)' },
        variantConversions: { type: 'number', description: 'Conversions in variant group (B)' },
      },
      required: ['controlVisitors', 'controlConversions', 'variantVisitors', 'variantConversions'],
    },
  },
  {
    name: 'calculate_ab_test_sample_size',
    description: 'Calculate the minimum visitors needed per variant for a statistically valid A/B test.',
    inputSchema: {
      type: 'object',
      properties: {
        baselineCVR: { type: 'number', description: 'Current conversion rate as a percentage (e.g. 2.5)' },
        mde: { type: 'number', description: 'Minimum detectable effect as a relative % improvement (e.g. 15)' },
        significance: { type: 'number', description: 'Significance level % (default 95)', default: 95 },
        power: { type: 'number', description: 'Statistical power % (default 80)', default: 80 },
      },
      required: ['baselineCVR', 'mde'],
    },
  },
  {
    name: 'calculate_ab_test_duration',
    description: 'Calculate how many days an A/B test must run to reach the required sample size. Enforces the 14-day minimum for day-of-week coverage.',
    inputSchema: {
      type: 'object',
      properties: {
        baselineCVR: { type: 'number', description: 'Current conversion rate as a percentage' },
        mde: { type: 'number', description: 'Minimum detectable effect as relative % improvement' },
        dailyVisitors: { type: 'number', description: 'Average daily unique visitors to the page being tested' },
        significance: { type: 'number', default: 95 },
        power: { type: 'number', default: 80 },
      },
      required: ['baselineCVR', 'mde', 'dailyVisitors'],
    },
  },
  {
    name: 'calculate_checkout_funnel',
    description: 'Analyse e-commerce checkout funnel drop-off. Identifies the biggest revenue leak and estimates recovery value of a 10% fix at that step.',
    inputSchema: {
      type: 'object',
      properties: {
        productPageVisitors: { type: 'number', description: 'Monthly product page visitors' },
        addToCart: { type: 'number', description: 'Added to cart' },
        checkoutStart: { type: 'number', description: 'Reached checkout' },
        paymentStep: { type: 'number', description: 'Entered payment details' },
        purchases: { type: 'number', description: 'Completed purchases' },
        aov: { type: 'number', description: 'Average order value in EUR' },
      },
      required: ['productPageVisitors', 'purchases', 'aov'],
    },
  },
  {
    name: 'calculate_cart_abandonment',
    description: 'Calculate cart abandonment rate, monthly revenue lost, and recovery revenue at 10/20/30% recovery rates.',
    inputSchema: {
      type: 'object',
      properties: {
        cartsInitiated: { type: 'number', description: 'Monthly sessions with add-to-cart events' },
        completedPurchases: { type: 'number', description: 'Monthly completed purchases' },
        aov: { type: 'number', description: 'Average order value in EUR' },
      },
      required: ['cartsInitiated', 'completedPurchases', 'aov'],
    },
  },
  {
    name: 'calculate_landing_page_roi',
    description: 'Calculate landing page CPA, ROAS, and revenue impact of CVR improvements from ad spend and CVR inputs.',
    inputSchema: {
      type: 'object',
      properties: {
        monthlyAdSpend: { type: 'number', description: 'Monthly ad spend in EUR' },
        monthlyClicks: { type: 'number', description: 'Monthly clicks or visitors' },
        currentCVR: { type: 'number', description: 'Current landing page CVR as a percentage' },
        valuePerConversion: { type: 'number', description: 'Revenue value per conversion in EUR' },
      },
      required: ['monthlyAdSpend', 'monthlyClicks', 'currentCVR', 'valuePerConversion'],
    },
  },
  {
    name: 'calculate_clv',
    description: 'Calculate Customer Lifetime Value (CLV/LTV), max profitable CAC, and revenue per 100 customers.',
    inputSchema: {
      type: 'object',
      properties: {
        aov: { type: 'number', description: 'Average order value in EUR' },
        purchaseFrequency: { type: 'number', description: 'Average orders per customer per year' },
        customerLifespan: { type: 'number', description: 'Average customer lifespan in years' },
        grossMargin: { type: 'number', description: 'Gross margin as a percentage (e.g. 45)' },
        clvCacRatio: { type: 'number', description: 'Target CLV:CAC ratio (default 3)', default: 3 },
      },
      required: ['aov', 'purchaseFrequency', 'customerLifespan', 'grossMargin'],
    },
  },
  {
    name: 'calculate_form_conversion',
    description: 'Calculate form funnel metrics — page-to-start and start-to-completion rates — and compare the revenue impact of improving each.',
    inputSchema: {
      type: 'object',
      properties: {
        pageVisitors: { type: 'number', description: 'Monthly page visitors' },
        formStarts: { type: 'number', description: 'Visitors who interacted with the form' },
        formCompletions: { type: 'number', description: 'Successful form submissions' },
        closeRate: { type: 'number', description: 'Lead-to-customer close rate as a percentage' },
        dealValue: { type: 'number', description: 'Average deal or order value in EUR' },
      },
      required: ['pageVisitors', 'formStarts', 'formCompletions', 'closeRate', 'dealValue'],
    },
  },
  {
    name: 'calculate_cro_roi',
    description: 'Calculate monthly and annual incremental revenue from a conversion rate improvement.',
    inputSchema: {
      type: 'object',
      properties: {
        monthlyVisitors: { type: 'number', description: 'Monthly sessions or visitors' },
        currentCVR: { type: 'number', description: 'Current conversion rate as a percentage' },
        aov: { type: 'number', description: 'Average order or lead value in EUR' },
        cvrImprovementPct: { type: 'number', description: 'Target relative CVR improvement as a percentage (e.g. 25 for +25%)' },
      },
      required: ['monthlyVisitors', 'currentCVR', 'aov', 'cvrImprovementPct'],
    },
  },
];

// Extension passthrough set
const ASSET_EXT = new Set([
  'js', 'css', 'png', 'jpg', 'jpeg', 'webp', 'avif', 'svg', 'ico',
  'woff', 'woff2', 'ttf', 'otf', 'json', 'xml', 'txt', 'pdf', 'map',
]);

// ---------------------------------------------------------------------------
// Main fetch handler
// ---------------------------------------------------------------------------

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // CORS preflight for MCP
    if (request.method === 'OPTIONS' && url.pathname === '/mcp') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Accept, Mcp-Session-Id',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    // RFC 9727 API catalog
    if (url.pathname === '/.well-known/api-catalog') {
      return new Response(API_CATALOG, {
        headers: { 'Content-Type': 'application/linkset+json', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'public, max-age=86400' },
      });
    }

    // MCP Server Card
    if (url.pathname === '/.well-known/mcp/server-card.json') {
      return new Response(MCP_SERVER_CARD, {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'public, max-age=86400' },
      });
    }

    // MCP protocol endpoint
    if (url.pathname === '/mcp') {
      return handleMCP(request);
    }

    // Pass static assets straight through
    const ext = url.pathname.match(/\.([a-z0-9]+)(?:\?|#|$)/i)?.[1]?.toLowerCase();
    if (ext && ASSET_EXT.has(ext)) {
      return fetch(request);
    }

    const accept = request.headers.get('Accept') ?? '';
    const wantsMarkdown = accept.split(',').map(s => s.trim().split(';')[0].trim()).includes('text/markdown');

    const originResponse = await fetch(request);
    const ct = originResponse.headers.get('content-type') ?? '';

    if (!ct.includes('text/html')) return originResponse;

    if (wantsMarkdown) {
      const html = await originResponse.text();
      const markdown = htmlToMarkdown(html);
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

    const headers = new Headers(originResponse.headers);
    headers.set('Link', LINK_HEADER);
    headers.set('Vary', 'Accept');
    return new Response(originResponse.body, { status: originResponse.status, statusText: originResponse.statusText, headers });
  },
};

// ---------------------------------------------------------------------------
// MCP protocol handler (Streamable HTTP transport, spec 2025-03-26)
// ---------------------------------------------------------------------------

async function handleMCP(request) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  let body;
  try { body = await request.json(); }
  catch { return mcpError(null, -32700, 'Parse error'); }

  const { method, params, id } = body;

  switch (method) {
    case 'initialize':
      return mcpOk(id, {
        protocolVersion: '2025-03-26',
        capabilities: { tools: {} },
        serverInfo: { name: 'grow-conversions-cro-tools', version: '1.0.0' },
      });

    case 'notifications/initialized':
      return new Response(null, { status: 204 });

    case 'tools/list':
      return mcpOk(id, { tools: MCP_TOOLS });

    case 'tools/call': {
      const { name, arguments: args } = params ?? {};
      try {
        const result = dispatchTool(name, args ?? {});
        return mcpOk(id, { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] });
      } catch (e) {
        return mcpError(id, -32603, String(e.message));
      }
    }

    default:
      return mcpError(id, -32601, `Method not found: ${method}`);
  }
}

function mcpOk(id, result) {
  return new Response(JSON.stringify({ jsonrpc: '2.0', id, result }), {
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
  });
}

function mcpError(id, code, message) {
  return new Response(JSON.stringify({ jsonrpc: '2.0', id, error: { code, message } }), {
    status: 200,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
  });
}

// ---------------------------------------------------------------------------
// Tool dispatcher and implementations
// ---------------------------------------------------------------------------

function dispatchTool(name, args) {
  switch (name) {
    case 'calculate_conversion_rate':      return toolCVR(args);
    case 'calculate_ab_test_significance': return toolABSig(args);
    case 'calculate_ab_test_sample_size':  return toolSampleSize(args);
    case 'calculate_ab_test_duration':     return toolDuration(args);
    case 'calculate_checkout_funnel':      return toolCheckoutFunnel(args);
    case 'calculate_cart_abandonment':     return toolCartAbandonment(args);
    case 'calculate_landing_page_roi':     return toolLandingPageROI(args);
    case 'calculate_clv':                  return toolCLV(args);
    case 'calculate_form_conversion':      return toolFormConversion(args);
    case 'calculate_cro_roi':              return toolCROROI(args);
    default: throw new Error(`Unknown tool: ${name}`);
  }
}

function toolCVR({ conversions, visitors, aov }) {
  if (!conversions || !visitors) throw new Error('conversions and visitors are required');
  const cvr = (conversions / visitors) * 100;
  const result = { cvr: round(cvr, 4), cvrFormatted: `${cvr.toFixed(2)}%`, conversions, visitors };
  if (aov) {
    result.monthlyRevenue = Math.round(conversions * aov);
    result.revenuePerVisitor = round((conversions * aov) / visitors, 4);
  }
  return result;
}

function toolABSig({ controlVisitors, controlConversions, variantVisitors, variantConversions }) {
  const pA = controlConversions / controlVisitors;
  const pB = variantConversions / variantVisitors;
  const pPooled = (controlConversions + variantConversions) / (controlVisitors + variantVisitors);
  const se = Math.sqrt(pPooled * (1 - pPooled) * (1 / controlVisitors + 1 / variantVisitors));
  if (se === 0) throw new Error('Standard error is zero — check inputs');
  const z = (pB - pA) / se;
  const pValue = 2 * (1 - normCDF(Math.abs(z)));
  const confidence = (1 - pValue) * 100;
  const lift = pA > 0 ? ((pB - pA) / pA) * 100 : 0;

  let verdict;
  if (confidence >= 95 && lift > 0) verdict = 'WINNER — Variant B wins at 95%+ confidence. Safe to implement.';
  else if (confidence >= 95 && lift < 0) verdict = 'LOSER — Variant B loses significantly. Do not implement.';
  else if (confidence >= 90) verdict = 'BORDERLINE — 90-95% confidence. Keep running the test.';
  else verdict = 'NOT_SIGNIFICANT — Below 90% confidence. No reliable difference detected.';

  return {
    controlCVR: `${(pA * 100).toFixed(2)}%`,
    variantCVR: `${(pB * 100).toFixed(2)}%`,
    relativeLift: `${lift >= 0 ? '+' : ''}${lift.toFixed(1)}%`,
    absoluteDiff: `${((pB - pA) * 100) >= 0 ? '+' : ''}${((pB - pA) * 100).toFixed(2)}pp`,
    confidenceLevel: `${confidence.toFixed(1)}%`,
    zScore: round(z, 3),
    pValue: round(pValue, 4),
    verdict,
  };
}

function toolSampleSize({ baselineCVR, mde, significance = 95, power = 80 }) {
  const p1 = baselineCVR / 100;
  const p2 = p1 * (1 + mde / 100);
  const alpha = 1 - significance / 100;
  const beta = 1 - power / 100;
  const za = inverseCDF(1 - alpha / 2);
  const zb = inverseCDF(1 - beta);
  const num = Math.pow(za * Math.sqrt(2 * ((p1+p2)/2) * (1-(p1+p2)/2)) + zb * Math.sqrt(p1*(1-p1) + p2*(1-p2)), 2);
  const denom = Math.pow(p2 - p1, 2);
  const n = Math.ceil(num / denom);
  return {
    sampleSizePerVariant: n,
    totalSampleSize: n * 2,
    baselineCVR: `${baselineCVR}%`,
    targetCVR: `${(p2 * 100).toFixed(2)}%`,
    mde: `${mde}% relative lift`,
    significance: `${significance}%`,
    power: `${power}%`,
  };
}

function toolDuration({ baselineCVR, mde, dailyVisitors, significance = 95, power = 80 }) {
  const { sampleSizePerVariant } = toolSampleSize({ baselineCVR, mde, significance, power });
  const rawDays = Math.ceil(sampleSizePerVariant / (dailyVisitors / 2));
  const days = Math.max(rawDays, 14);
  return {
    minimumDays: days,
    sampleSizePerVariant,
    dailyVisitors,
    note: rawDays < 14 ? 'Sample size reached in fewer than 14 days — extended to 14-day minimum for day-of-week coverage.' : `Based on sample size of ${sampleSizePerVariant} per variant at ${dailyVisitors} daily visitors.`,
  };
}

function toolCheckoutFunnel({ productPageVisitors, addToCart, checkoutStart, paymentStep, purchases, aov }) {
  const steps = [
    { name: 'Product Page', visitors: productPageVisitors },
    ...(addToCart ? [{ name: 'Add to Cart', visitors: addToCart }] : []),
    ...(checkoutStart ? [{ name: 'Checkout Start', visitors: checkoutStart }] : []),
    ...(paymentStep ? [{ name: 'Payment Step', visitors: paymentStep }] : []),
    { name: 'Purchase', visitors: purchases },
  ];
  const funnel = steps.map((s, i) => ({
    step: s.name,
    visitors: s.visitors,
    cvrFromTop: `${round((s.visitors / productPageVisitors) * 100, 1)}%`,
    dropFromPrev: i > 0 && steps[i-1].visitors ? `${round(((steps[i-1].visitors - s.visitors) / steps[i-1].visitors) * 100, 1)}%` : null,
  }));

  let biggestLeakIdx = 0, biggestLeakDrop = 0;
  for (let i = 1; i < steps.length; i++) {
    const drop = steps[i-1].visitors - steps[i].visitors;
    if (drop > biggestLeakDrop) { biggestLeakDrop = drop; biggestLeakIdx = i; }
  }

  const currentRevenue = Math.round(purchases * aov);
  const recoveredAt10pct = Math.round(biggestLeakDrop * 0.1 * aov * (purchases / (steps[biggestLeakIdx].visitors || 1)));

  return {
    funnel,
    endToEndCVR: `${round((purchases / productPageVisitors) * 100, 2)}%`,
    currentMonthlyRevenue: `€${currentRevenue.toLocaleString()}`,
    biggestLeak: `${steps[biggestLeakIdx - 1].name} → ${steps[biggestLeakIdx].name} (${biggestLeakDrop.toLocaleString()} visitors lost)`,
    recoveryAt10pctFix: `+€${recoveredAt10pct.toLocaleString()}/month`,
  };
}

function toolCartAbandonment({ cartsInitiated, completedPurchases, aov }) {
  const abandonmentRate = ((cartsInitiated - completedPurchases) / cartsInitiated) * 100;
  const abandonedCarts = cartsInitiated - completedPurchases;
  const lostRevenue = Math.round(abandonedCarts * aov);
  return {
    abandonmentRate: `${round(abandonmentRate, 2)}%`,
    abandonedCarts,
    currentRevenue: `€${Math.round(completedPurchases * aov).toLocaleString()}`,
    lostRevenue: `€${lostRevenue.toLocaleString()}/month`,
    recoveryAt10pct: `+€${Math.round(lostRevenue * 0.10).toLocaleString()}/month`,
    recoveryAt20pct: `+€${Math.round(lostRevenue * 0.20).toLocaleString()}/month`,
    recoveryAt30pct: `+€${Math.round(lostRevenue * 0.30).toLocaleString()}/month`,
  };
}

function toolLandingPageROI({ monthlyAdSpend, monthlyClicks, currentCVR, valuePerConversion }) {
  const cvr = currentCVR / 100;
  const conversions = Math.round(monthlyClicks * cvr);
  const revenue = Math.round(conversions * valuePerConversion);
  const cpa = round(monthlyAdSpend / conversions, 2);
  const roas = round(revenue / monthlyAdSpend, 2);
  const scenarios = [10, 25, 50, 100].map(pct => {
    const newCVR = cvr * (1 + pct / 100);
    const newConv = Math.round(monthlyClicks * newCVR);
    const newRev = Math.round(newConv * valuePerConversion);
    return { improvement: `+${pct}%`, newCVR: `${(newCVR*100).toFixed(2)}%`, conversions: newConv, revenue: `€${newRev.toLocaleString()}`, cpa: `€${round(monthlyAdSpend/newConv,2)}`, roas: `${round(newRev/monthlyAdSpend,2)}x`, extraRevenue: `+€${(newRev-revenue).toLocaleString()}/month` };
  });
  return { currentCVR: `${currentCVR}%`, currentConversions: conversions, currentRevenue: `€${revenue.toLocaleString()}`, cpa: `€${cpa}`, roas: `${roas}x`, scenarios };
}

function toolCLV({ aov, purchaseFrequency, customerLifespan, grossMargin, clvCacRatio = 3 }) {
  const annualRevenue = aov * purchaseFrequency;
  const totalRevenue = annualRevenue * customerLifespan;
  const clv = Math.round(totalRevenue * (grossMargin / 100));
  const maxCac = Math.round(clv / clvCacRatio);
  return {
    clv: `€${clv.toLocaleString()}`,
    revenuePerCustomer: `€${Math.round(totalRevenue).toLocaleString()}`,
    maxProfitableCAC: `€${maxCac.toLocaleString()} (at ${clvCacRatio}:1 CLV:CAC ratio)`,
    revenuePer100Customers: `€${Math.round(totalRevenue * 100).toLocaleString()}`,
    annualRevenuePerCustomer: `€${Math.round(annualRevenue).toLocaleString()}`,
  };
}

function toolFormConversion({ pageVisitors, formStarts, formCompletions, closeRate, dealValue }) {
  const startRate = (formStarts / pageVisitors) * 100;
  const completionRate = (formCompletions / formStarts) * 100;
  const pageCVR = (formCompletions / pageVisitors) * 100;
  const deals = Math.round(formCompletions * (closeRate / 100));
  const revenue = Math.round(deals * dealValue);
  const fixStartExtra = Math.round(pageVisitors * (startRate * 1.2 / 100) * (completionRate / 100) * (closeRate / 100) * dealValue) - revenue;
  const fixCompExtra = Math.round(formStarts * (completionRate * 1.2 / 100) * (closeRate / 100) * dealValue) - revenue;
  return {
    pageToStartRate: `${round(startRate, 1)}%`,
    startToCompletionRate: `${round(completionRate, 1)}%`,
    pageLevelCVR: `${round(pageCVR, 2)}%`,
    monthlyLeads: formCompletions,
    monthlyClosedDeals: deals,
    monthlyRevenue: `€${revenue.toLocaleString()}`,
    biggestOpportunity: fixCompExtra > fixStartExtra ? 'Fix form completion rate' : 'Fix form start rate',
    fixStartRateBy20pct: `+€${fixStartExtra.toLocaleString()}/month`,
    fixCompletionRateBy20pct: `+€${fixCompExtra.toLocaleString()}/month`,
  };
}

function toolCROROI({ monthlyVisitors, currentCVR, aov, cvrImprovementPct }) {
  const cvr = currentCVR / 100;
  const newCVR = cvr * (1 + cvrImprovementPct / 100);
  const currentRevenue = Math.round(monthlyVisitors * cvr * aov);
  const newRevenue = Math.round(monthlyVisitors * newCVR * aov);
  const extraMonthly = newRevenue - currentRevenue;
  return {
    currentCVR: `${currentCVR}%`,
    newCVR: `${(newCVR * 100).toFixed(2)}%`,
    currentMonthlyRevenue: `€${currentRevenue.toLocaleString()}`,
    newMonthlyRevenue: `€${newRevenue.toLocaleString()}`,
    additionalRevenuePerMonth: `+€${extraMonthly.toLocaleString()}`,
    additionalRevenuePerYear: `+€${(extraMonthly * 12).toLocaleString()}`,
    extraConversionsPerMonth: `+${Math.round(monthlyVisitors * (newCVR - cvr)).toLocaleString()}`,
  };
}

// ---------------------------------------------------------------------------
// Math helpers
// ---------------------------------------------------------------------------

function normCDF(x) {
  const a1=0.254829592, a2=-0.284496736, a3=1.421413741, a4=-1.453152027, a5=1.061405429, p=0.3275911;
  const sign = x < 0 ? -1 : 1;
  const t = 1 / (1 + p * Math.abs(x) / Math.sqrt(2));
  const poly = ((((a5*t+a4)*t+a3)*t+a2)*t+a1)*t;
  return 0.5 * (1 + sign * (1 - poly * Math.exp(-x * x / 2)));
}

function inverseCDF(p) {
  const c = [-7.784894002430293e-03,-3.223964580411365e-01,-2.400758277161838e+00,-2.549732539343734e+00,4.374664141464968e+00,2.938163982698783e+00];
  const d = [7.784695709041462e-03,3.224671290700398e-01,2.445134137142996e+00,3.754408661907416e+00];
  const a = [0,-3.969683028665376e+01,2.209460984245205e+02,-2.759285104469687e+02,1.383577518672690e+02,-3.066479806614716e+01,2.506628277459239e+00];
  const b = [0,-5.447609879822406e+01,1.615858368580409e+02,-1.556989798598866e+02,6.680131188771972e+01,-1.328068155288572e+01];
  const pLow = 0.02425, pHigh = 1 - pLow;
  let q, r;
  if (p < pLow) {
    q = Math.sqrt(-2*Math.log(p));
    return (((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5]) / ((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1);
  } else if (p <= pHigh) {
    q = p-0.5; r = q*q;
    return (((((a[1]*r+a[2])*r+a[3])*r+a[4])*r+a[5])*r+a[6])*q / (((((b[1]*r+b[2])*r+b[3])*r+b[4])*r+b[5])*r+1);
  }
  q = Math.sqrt(-2*Math.log(1-p));
  return -(((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5]) / ((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1);
}

function round(n, dp) { return parseFloat(n.toFixed(dp)); }

// ---------------------------------------------------------------------------
// HTML → Markdown converter (used for Accept: text/markdown responses)
// ---------------------------------------------------------------------------

function htmlToMarkdown(html) {
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const pageTitle = titleMatch ? decodeEntities(titleMatch[1].replace(/\s*[–|—-]\s*.*$/, '').trim()) : '';
  let body = extractBlock(html, 'main') || extractBlock(html, 'article') || html;
  body = stripBlock(body, 'nav');
  body = stripBlock(body, 'header');
  body = stripBlock(body, 'footer');
  body = stripBlock(body, 'script');
  body = stripBlock(body, 'style');
  body = stripBlock(body, 'noscript');
  body = stripBlock(body, 'aside');
  body = body.replace(/<!--[\s\S]*?-->/g, '');
  body = body
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, (_, c) => `\n# ${inline(c)}\n`)
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, c) => `\n## ${inline(c)}\n`)
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, c) => `\n### ${inline(c)}\n`)
    .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_, c) => `\n#### ${inline(c)}\n`)
    .replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, (_, c) => `\n\`\`\`\n${decodeEntities(c)}\n\`\`\`\n`)
    .replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, c) => inline(c).split('\n').map(l => `> ${l}`).join('\n') + '\n')
    .replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (_, c) => convertList(c, false))
    .replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (_, c) => convertList(c, true))
    .replace(/<hr\s*\/?>/gi, '\n\n---\n\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, c) => `\n\n${inline(c)}\n\n`);
  body = stripAllTags(body).replace(/\n{4,}/g, '\n\n\n').replace(/[ \t]+$/gm, '').replace(/^[ \t]+/gm, '').trim();
  return pageTitle ? `# ${pageTitle}\n\n${body}` : body;
}

function inline(html) {
  const result = html
    .replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => {
      const t = stripAllTags(text).trim();
      if (!t) return '';
      const abs = href.startsWith('http') || href.startsWith('//') ? href : `${SITE}${href}`;
      return `[${t}](${abs})`;
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
  return '\n' + html.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, c) => { i++; return `${ordered ? `${i}.` : '-'} ${inline(c)}\n`; }).replace(/<[^>]+>/g, '') + '\n';
}

function extractBlock(html, tag) {
  const startMatch = html.match(new RegExp(`<${tag}[^>]*>`, 'i'));
  if (!startMatch) return null;
  let start = html.indexOf(startMatch[0]), depth = 0, end = html.length;
  const re = new RegExp(`(<${tag}(?:\\s[^>]*)?>)|(<\\/${tag}>)`, 'gi');
  re.lastIndex = start;
  let m;
  while ((m = re.exec(html)) !== null) {
    if (m[1]) depth++; else if (m[2]) { depth--; if (depth === 0) { end = m.index + m[0].length; break; } }
  }
  return html.slice(start, end);
}

function stripBlock(html, tag) {
  const re = new RegExp(`<${tag}(?:\\s[^>]*)?>(?:[\\s\\S]*?)<\\/${tag}>`, 'gi');
  let prev;
  do { prev = html; html = html.replace(re, ''); } while (html !== prev);
  return html;
}

function stripAllTags(html) { return decodeEntities(html.replace(/<[^>]+>/g, '')); }

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ').replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCharCode(parseInt(h, 16)));
}

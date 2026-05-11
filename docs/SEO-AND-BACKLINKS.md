# SEO and backlink strategy — Triputi Pharma

This document complements the live site (`triputipharma.com`) and the technical setup in `README.md`. It summarises **on-page SEO** already implemented in code and a practical **off-page / backlink** plan. Industry guidance for multi-location and static sites emphasises **clear site structure**, **unique location content**, **XML sitemaps**, **consistent NAP** (name, address, phone), and **internal linking** without thin “doorway” pages. See for example [Multi-location SEO (Verlua)](https://www.verlua.com/blog/multi-location-seo-guide), [location page best practices (Rose City Rankings)](https://www.rosecityrankings.com/location-page-best-practices-for-multi-location-businesses), and [JAMstack / static technical SEO](https://www.copebusiness.com/technical-seo/jamstack-seo/).

## What is already implemented (technical + on-page)

- **Canonical URLs** and per-route **title / meta description** updates via `SeoService` (`src/app/services/seo.ts`).
- **Open Graph + Twitter** tags and default **`index.html`** meta, `lang="en-IN"`, theme colour.
- **JSON-LD** graph: `Organization`, `WebSite`, `MedicalBusiness`, and a **`WebPage`** node when a city URL is active.
- **`robots.txt`** with sitemap URL; **`public/sitemap.xml`** listing the homepage and each `/locations/:slug` URL.
- **City landing URLs** with **unique copy** per city in `src/app/data/service-areas.ts` (reduces duplicate/thin content risk compared to swapping one sentence only).
- **Internal deep links**: `/locations/{city}` plus optional `/?city=sirsa` redirecting to the clean URL.
- **Single H1** on city pages: local banner uses `h1`; carousel titles drop to `h2` when a city is selected.
- **Favicon**: `public/favicon.svg` (TP monogram) + manifest `site.webmanifest`.
- **URL list for tooling**: `public/seo-urls.txt`.

## Google Search Console (do this first)

1. Add property **https://triputipharma.com** (URL-prefix is enough to start).
2. Verify (DNS TXT or HTML file — Netlify supports both).
3. Submit **Sitemap**: `https://triputipharma.com/sitemap.xml`.
4. Use **URL Inspection** on a few `/locations/...` URLs after deploy to request indexing.

## Backlink and authority plan (ethical, sustainable)

Search engines reward **trust** and **relevance**, not spam. Aim for links that real users might click.

| Tactic | Action |
|--------|--------|
| **Google Business Profile** | Keep NAP identical to the website and schema; post catalog updates.; link to `triputipharma.com` as website. |
| **Supplier / brand directories** | Where allowed, list Triputi Pharma with the website URL (KASDAP / PCI partner pages if applicable). |
| **Local chambers / industry** | CII, ASSOCHAM, local pharma associations, Basai / Gurugram industrial listings — request a member directory link. |
| **Partner sites** | Ask friendly retailers, hospitals, or distributors for a “Supplier” or “Resources” link. |
| **Press / community** | Local news, health camps, CSR — press releases with one link to the site. |
| **Social proof** | LinkedIn company page, Facebook page — link to the site; not a ranking magic bullet but helps discovery. |

Avoid **paid link networks**, **comment spam**, and **irrelevant directories**; they risk a **manual action**.

## “Programmatic local” pages — limitations (important)

This stack is a **single-page app**: Google can render JavaScript, but the **fastest** SEO is still **server-side HTML** or **prerender** for each URL. What we ship is a solid baseline:

- Distinct **titles, meta, JSON-LD WebPage**, and **visible unique paragraphs** per city.
- If you later need maximum local rankings, consider **Angular SSR / prerender** so each `/locations/...` URL returns full HTML without waiting on the client.

## Maintaining sitemaps and cities

When you add a row to **`SERVICE_AREAS`** in `src/app/data/service-areas.ts`, also:

1. Append the URL to **`public/sitemap.xml`**.
2. Append the URL to **`public/seo-urls.txt`**.

(Optionally later: generate sitemap at build time from the same TS file.)

## Quick reference — example deep links

- Sirsa: `https://triputipharma.com/locations/sirsa`
- Gurugram (hub): `https://triputipharma.com/locations/gurugram`
- Query form (redirects): `https://triputipharma.com/?city=sirsa`

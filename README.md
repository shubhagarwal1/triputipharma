# Triputi Pharma — Website

Single-page website for **Triputi Pharma**, a pharmaceutical products wholesaler and distributor based in Basai Industrial Area, Gurugram (Haryana).

Built with Angular 21, SCSS, Swiper.js, and AOS.

---

## Live URLs

| What | URL |
|------|-----|
| **Production site** | https://triputipharma.com |
| **Netlify subdomain** | https://triputipharma.netlify.app |
| **GitHub repo** | https://github.com/shubhagarwal1/triputipharma |
| **PDF catalogues (release)** | https://github.com/shubhagarwal1/triputipharma/releases/tag/v1.0.0 |

---

## SEO & local landing pages

- **Strategy doc (backlinks, Search Console, maintenance):** [docs/SEO-AND-BACKLINKS.md](docs/SEO-AND-BACKLINKS.md)
- **Sitemap:** https://triputipharma.com/sitemap.xml (also in `public/sitemap.xml`)
- **URL list for audits:** `public/seo-urls.txt`
- **City pages:** `https://triputipharma.com/locations/{city}` (e.g. `/locations/sirsa`). Optional: `/?city=sirsa` redirects to the canonical path.
- **Source for cities + unique blurbs:** `src/app/data/service-areas.ts`
- **Dynamic meta + JSON-LD:** `src/app/services/seo.ts`

---

## Hosting & Infrastructure

| Service | Purpose | Account |
|---------|---------|---------|
| **GoDaddy** | Domain registrar (`triputipharma.com`, expires May 2027) | dcc.godaddy.com |
| **Netlify** | Static site hosting, SSL, CDN | app.netlify.com/projects/triputipharma |
| **GitHub** | Source code + PDF hosting via Releases + **Actions → Netlify production** | github.com/shubhagarwal1/triputipharma |

### DNS Configuration (GoDaddy)

| Type | Name | Value |
|------|------|-------|
| A | `@` | `75.2.60.5` |
| CNAME | `www` | `triputipharma.netlify.app` |

### Deployment (automated from `main`)

Every push to **`main`** runs **[`.github/workflows/deploy-netlify-production.yml`](.github/workflows/deploy-netlify-production.yml)**: `npm ci` → `npm run build` → Netlify **production** deploy (`netlify deploy --prod`).

**Monitor runs:** [github.com/shubhagarwal1/triputipharma/actions](https://github.com/shubhagarwal1/triputipharma/actions) → workflow **Deploy production (Netlify)**.

**Secrets (repository scope, not Environment):** [Settings → Secrets and variables → Actions](https://github.com/shubhagarwal1/triputipharma/settings/secrets/actions) → under **Repository secrets**, add:

| Secret | Where to get it |
|--------|-----------------|
| `NETLIFY_AUTH_TOKEN` | [Netlify](https://app.netlify.com/user/applications/personal) → **User settings** → **Applications** → **New access token** |
| `NETLIFY_SITE_ID` | Netlify → **Site configuration** → **General** → **Site details** → **Site ID** |

After secrets are saved, trigger a deploy with a push to `main` or **Actions** → open the latest run → **Re-run all jobs**.

**Avoid double deploys:** If the site is also linked under Netlify **Build & deploy → Link repository**, Netlify may build *and* GitHub Actions will deploy — two deploys per push. Prefer one:

- **GitHub Actions only:** Unlink the repo in Netlify or disable automatic builds there.
- **Netlify Git only:** Remove or disable `.github/workflows/deploy-netlify-production.yml`.

### Manual deploy (local CLI)

```bash
netlify deploy --prod --dir=dist/triputi-pharma/browser
```

---

## Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npx ng serve
```

Open **http://localhost:4200** in your browser.

## Production Build

```bash
npx ng build --configuration=production
```

Output goes to `dist/triputi-pharma/browser/`.

---

## PDF Catalogues

PDFs are too large for the git repo (up to 376 MB each), so they're hosted as **GitHub Release assets** on the `v1.0.0` tag.

| Catalogue | File | Size |
|-----------|------|------|
| Complete Product Book | `17.10.25.Product.BOOK_AUG-2025_C2c.1.pdf` | 376 MB |
| Product Highlights | `Catlouge.6.Pics.pdf` | 13 MB |
| KASDAP Genexx | `KASDAP.GENEXX.CATALOGUE.2.pdf` | 145 MB |
| KASDAP Healthcare | `KASDAP-HEALTHCARE.CATALOGUE.pdf` | 82 MB |
| PCI Products | `PCI.Product.Catalogue.New.DT.06.05.26.pdf` | 191 MB |

Download URLs are configured in `src/app/components/catalogues/catalogues.ts`. To update PDFs, create a new GitHub release and update the URLs in that file.

---

## Project Structure

```
src/
├── app/
│   ├── app.routes.ts       Routes: / and /locations/:citySlug
│   ├── pages/
│   │   └── home/           Main single-page layout (all sections)
│   ├── components/
│   │   ├── navbar/         Sticky navigation bar
│   │   ├── hero/           Swiper carousel hero section
│   │   ├── stats/          Animated stats counters
│   │   ├── about/          Company overview + building photo
│   │   ├── features/       "Why Choose Us" feature cards
│   │   ├── service-areas/   City hubs + internal links (local SEO)
│   │   ├── brands/         Partner brands marquee
│   │   ├── catalogues/     PDF catalogue cards (view/download)
│   │   ├── testimonials/   Google review showcase
│   │   ├── contact/        Contact info + Google Maps embed
│   │   └── footer/         Site footer
│   ├── data/
│   │   └── service-areas.ts   City slugs + unique copy for /locations/:slug
│   └── services/
│       ├── scroll.ts          Smooth scroll navigation
│       └── seo.ts            Title, meta, canonical, JSON-LD per route
├── styles/
│   ├── _variables.scss     Color palette, spacing, typography tokens
│   ├── _mixins.scss        Responsive breakpoints, component mixins
│   └── _animations.scss    Keyframe animations
├── styles.scss             Global styles and resets
└── index.html              Entry HTML with SEO meta tags
```

---

## Tech Stack

- **Angular 21** — framework
- **SCSS** — styling with variables, mixins, responsive breakpoints
- **Swiper.js** — hero carousel (fade effect, autoplay, touch-swipe)
- **AOS** — scroll-triggered animations
- **Google Fonts** — Plus Jakarta Sans (headings) + Inter (body)

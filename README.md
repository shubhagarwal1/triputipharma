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

## Hosting & Infrastructure

| Service | Purpose | Account |
|---------|---------|---------|
| **GoDaddy** | Domain registrar (`triputipharma.com`, expires May 2027) | dcc.godaddy.com |
| **Netlify** | Static site hosting, SSL, CDN | app.netlify.com/projects/triputipharma |
| **GitHub** | Source code + PDF hosting via Releases | github.com/shubhagarwal1/triputipharma |

### DNS Configuration (GoDaddy)

| Type | Name | Value |
|------|------|-------|
| A | `@` | `75.2.60.5` |
| CNAME | `www` | `triputipharma.netlify.app` |

### Deployment

Netlify builds and deploys automatically. To deploy manually:

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
│   ├── components/
│   │   ├── navbar/         Sticky navigation bar
│   │   ├── hero/           Swiper carousel hero section
│   │   ├── stats/          Animated stats counters
│   │   ├── about/          Company overview + building photo
│   │   ├── features/       "Why Choose Us" feature cards
│   │   ├── brands/         Partner brands marquee
│   │   ├── catalogues/     PDF catalogue cards (view/download)
│   │   ├── testimonials/   Google review showcase
│   │   ├── contact/        Contact info + Google Maps embed
│   │   └── footer/         Site footer
│   └── services/
│       └── scroll.ts       Smooth scroll navigation service
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

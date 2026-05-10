# Triputi Pharma — Website

Single-page website for **Triputi Pharma**, a pharmaceutical products wholesaler and distributor based in Basai Industrial Area, Gurugram (Haryana).

Built with Angular, SCSS, Swiper.js, and AOS.

---

## Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x

## Getting Started

```bash
# 1. Navigate to the project directory
cd triputi-pharma

# 2. Install dependencies
npm install

# 3. Start the development server
npx ng serve
```

Open **http://localhost:4200** in your browser.

## Production Build

```bash
npx ng build --configuration=production
```

Output will be in `dist/triputi-pharma/`. Deploy the contents of that folder to any static hosting provider (Netlify, Vercel, Firebase Hosting, AWS S3 + CloudFront, etc.).

## PDF Catalogues

The catalogue download buttons reference files at `assets/pdfs/`. For production, host the PDFs on a CDN or cloud storage (they range from 13 MB to 376 MB) and update the file paths in `src/app/components/catalogues/catalogues.ts`.

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

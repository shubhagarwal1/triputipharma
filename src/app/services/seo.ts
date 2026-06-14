import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {
  DEFAULT_META,
  SERVICE_AREAS,
  SITE_ORIGIN,
  type ServiceArea,
  getServiceAreaBySlug,
} from '../data/service-areas';

const OG_IMAGE = `${SITE_ORIGIN}/images/hero/distribution-network.jpg`;
const JSON_LD_ID = 'triputi-jsonld-main';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  /** Call when the route (home vs locations/:slug) changes. */
  applyForLocation(citySlug: string | null): void {
    const area = getServiceAreaBySlug(citySlug);
    const path = area ? `/locations/${area.slug}` : '/';
    const canonicalUrl = `${SITE_ORIGIN}${path}`;

    const pageTitle = area
      ? `Pharmaceutical Distribution Partner in ${area.name} | Triputi Pharma`
      : DEFAULT_META.title;

    const pageDescription = area
      ? `${area.headline}. ${area.localBlurb}`
      : DEFAULT_META.description;

    const clipped =
      pageDescription.length > 158
        ? `${pageDescription.slice(0, 155).trimEnd()}…`
        : pageDescription;

    this.title.setTitle(pageTitle);

    this.meta.updateTag({ name: 'description', content: clipped });
    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1',
    });
    this.meta.updateTag({
      name: 'geo.region',
      content: 'IN-HR',
    });
    this.meta.updateTag({
      name: 'geo.placename',
      content: 'Gurugram',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: area
        ? `pharmaceutical distribution partner ${area.name}, medicine distribution ${area.name}, healthcare distribution network Haryana, Triputi Pharma, pharmaceutical distribution services ${area.name}, pharma marketing company`
        : 'Triputi Pharma, pharmaceutical distribution partner, pharma marketing company Gurugram, healthcare distribution network Haryana, medicine distribution Delhi NCR Rajasthan Gujarat, pharmaceutical distribution services, Sector 39 Gurugram',
    });

    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: clipped });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:image', content: OG_IMAGE });
    this.meta.updateTag({ property: 'og:image:alt', content: 'Triputi Pharma — pharmaceutical distribution partner' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Triputi Pharma' });
    this.meta.updateTag({ property: 'og:locale', content: 'en_IN' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: clipped });
    this.meta.updateTag({ name: 'twitter:image', content: OG_IMAGE });

    this.setCanonicalHref(canonicalUrl);
    this.setJsonLd(area);
  }

  private setCanonicalHref(url: string): void {
    let el = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;
    if (!el) {
      el = document.createElement('link');
      el.setAttribute('rel', 'canonical');
      document.head.appendChild(el);
    }
    el.setAttribute('href', url);
  }

  private setJsonLd(area: ServiceArea | null): void {
    document.getElementById(JSON_LD_ID)?.remove();

    const areaServed = SERVICE_AREAS.map((a) => ({
      '@type': 'City',
      name: `${a.name}, India`,
    }));

    const graph: Record<string, unknown>[] = [
      {
        '@type': 'Organization',
        '@id': `${SITE_ORIGIN}/#organization`,
        name: 'Triputi Pharma',
        url: SITE_ORIGIN,
        logo: `${SITE_ORIGIN}/favicon.svg`,
        image: OG_IMAGE,
        telephone: '+91-9416608873',
        description: DEFAULT_META.description,
        address: {
          '@type': 'PostalAddress',
          streetAddress:
            'Basement, Patanjali Mega Store, Near Raas Wellness Spa, Jharsa, Sector 39',
          addressLocality: 'Gurugram',
          addressRegion: 'Haryana',
          postalCode: '122003',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 28.4380889,
          longitude: 77.0519923,
        },
        areaServed,
        sameAs: [
          'https://github.com/shubhagarwal1/triputipharma',
          'https://triputipharma.netlify.app',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_ORIGIN}/#website`,
        url: SITE_ORIGIN,
        name: 'Triputi Pharma',
        publisher: { '@id': `${SITE_ORIGIN}/#organization` },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'MedicalBusiness',
        '@id': `${SITE_ORIGIN}/#medicalbusiness`,
        name: 'Triputi Pharma — Pharmaceutical Marketing & Distribution',
        image: OG_IMAGE,
        url: SITE_ORIGIN,
        telephone: '+91-9416608873',
        address: {
          '@type': 'PostalAddress',
          streetAddress:
            'Basement, Patanjali Mega Store, Near Raas Wellness Spa, Jharsa, Sector 39',
          addressLocality: 'Gurugram',
          addressRegion: 'Haryana',
          postalCode: '122003',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 28.4380889,
          longitude: 77.0519923,
        },
        priceRange: '₹₹',
      },
    ];

    if (area) {
      graph.push({
        '@type': 'WebPage',
        '@id': `${SITE_ORIGIN}/locations/${area.slug}#webpage`,
        url: `${SITE_ORIGIN}/locations/${area.slug}`,
        name: `Pharmaceutical marketing and distribution partner — ${area.name}`,
        description: `${area.headline}. ${area.localBlurb}`,
        isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
        about: {
          '@type': 'City',
          name: `${area.name}, Haryana, India`,
        },
      });
    }

    const script = document.createElement('script');
    script.id = JSON_LD_ID;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({ '@graph': graph });
    document.head.appendChild(script);
  }
}

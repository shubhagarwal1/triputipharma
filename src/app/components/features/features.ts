import { Component } from '@angular/core';

interface Feature {
  icon: string;
  title: string;
  meta?: string;
  description: string;
  tags?: string[];
  status?: string;
  /** Spans two columns on desktop for an editorial bento rhythm. */
  wide?: boolean;
  /** Keeps the highlight treatment always on (anchor card). */
  persistentHover?: boolean;
}

@Component({
  selector: 'app-features',
  templateUrl: './features.html',
  styleUrl: './features.scss',
})
export class Features {
  features: Feature[] = [
    {
      icon: 'layers',
      title: 'Wide Product Range',
      meta: '2000+ products',
      description:
        '2000+ pharmaceutical products spanning every major therapeutic category — from everyday medicine to specialised formulations.',
      tags: ['Therapeutics', 'Wellness'],
      status: 'Core',
      wide: true,
      persistentHover: true,
    },
    {
      icon: 'award',
      title: 'Trusted Brand Portfolio',
      meta: '8+ brands',
      description:
        'Distribution partner for Troikaa (Novogen), Syndicate Medicare, Synthokind, Sunlife, Microlife, and more.',
      tags: ['Quality'],
      status: 'Verified',
    },
    {
      icon: 'tag',
      title: 'Service-Led Partnership',
      description:
        'Transparent pricing, responsive support, and catalogue-backed ordering that helps healthcare providers plan with confidence.',
      tags: ['Support'],
      status: 'Active',
    },
    {
      icon: 'zap',
      title: 'Reliable Supply Chain',
      meta: '4 states',
      description:
        'Consistent stock availability and timely delivery across Gurugram, Delhi NCR, Haryana, Rajasthan, and Gujarat — ensuring uninterrupted pharmaceutical supply for healthcare providers.',
      tags: ['Logistics', 'Coverage'],
      status: 'Always On',
      wide: true,
    },
  ];
}

import { Component } from '@angular/core';

interface Feature {
  icon: string;
  title: string;
  description: string;
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
      description:
        '500+ pharmaceutical products spanning multiple therapeutic categories — from general medicine to specialized formulations.',
    },
    {
      icon: 'award',
      title: 'Trusted Brands',
      description:
        'Authorized distributor of KASDAP Healthcare, KASDAP Genexx, PCI, and other reputed Indian pharmaceutical manufacturers.',
    },
    {
      icon: 'tag',
      title: 'Competitive Pricing',
      description:
        'Best wholesale rates in the market, enabling pharmacies and hospitals to maintain healthy margins on quality products.',
    },
    {
      icon: 'zap',
      title: 'Reliable Supply Chain',
      description:
        'Consistent stock availability and timely delivery across Gurugram, NCR, and Haryana — your supply never stops.',
    },
  ];
}

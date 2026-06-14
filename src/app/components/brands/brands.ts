import { Component } from '@angular/core';

interface Brand {
  name: string;
  color: string;
}

@Component({
  selector: 'app-brands',
  templateUrl: './brands.html',
  styleUrl: './brands.scss',
})
export class Brands {
  brands: Brand[] = [
    { name: 'Troikaa (Novogen)', color: '#0F766E' },
    { name: 'Syndicate Medicare', color: '#1E40AF' },
    { name: 'Synthokind', color: '#9333EA' },
    { name: 'Sunlife', color: '#DC2626' },
    { name: 'Microlife', color: '#0891B2' },
    { name: 'Mcross', color: '#B45309' },
    { name: 'L&T', color: '#15803D' },
    { name: 'Helbrede', color: '#7C3AED' },
  ];

  /** Doubled list so the marquee loops seamlessly. */
  marqueeBrands: Brand[] = [...this.brands, ...this.brands];
}

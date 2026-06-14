import { Component } from '@angular/core';

interface Catalogue {
  title: string;
  description: string;
  url: string;
  fileSize: string;
  pages: string;
  gradient: string;
  brand: string;
}

const RELEASE_BASE =
  'https://github.com/shubhagarwal1/triputipharma/releases/download/v1.0.0';

@Component({
  selector: 'app-catalogues',
  templateUrl: './catalogues.html',
  styleUrl: './catalogues.scss',
})
export class Catalogues {
  catalogues: Catalogue[] = [
    {
      title: 'Troikaa (Novogen)',
      description:
        'The complete Troikaa (Novogen) product book — 2000+ pharmaceutical products across all therapeutic categories.',
      url: `${RELEASE_BASE}/17.10.25.Product.BOOK_AUG-2025_C2c.1.pdf`,
      fileSize: '376 MB',
      pages: 'Complete Product Book',
      gradient: 'linear-gradient(135deg, #0F766E, #134E4A)',
      brand: 'Troikaa (Novogen)',
    },
    {
      title: 'Syndicate Medicare',
      description:
        'A quick visual guide to popular Syndicate Medicare products and best sellers, with high-resolution imagery.',
      url: `${RELEASE_BASE}/Catlouge.6.Pics.pdf`,
      fileSize: '13 MB',
      pages: 'Visual Guide',
      gradient: 'linear-gradient(135deg, #1E40AF, #1E3A8A)',
      brand: 'Syndicate Medicare',
    },
    {
      title: 'Sunlife',
      description:
        'The complete Sunlife range — quality formulations for everyday and specialised healthcare needs.',
      url: `${RELEASE_BASE}/KASDAP.GENEXX.CATALOGUE.2.pdf`,
      fileSize: '145 MB',
      pages: 'Full Range',
      gradient: 'linear-gradient(135deg, #DC2626, #B91C1C)',
      brand: 'Sunlife',
    },
    {
      title: 'Microlife',
      description:
        'The Microlife portfolio of pharmaceutical and wellness products, available through our distribution network.',
      url: `${RELEASE_BASE}/KASDAP-HEALTHCARE.CATALOGUE.pdf`,
      fileSize: '82 MB',
      pages: 'Full Range',
      gradient: 'linear-gradient(135deg, #0891B2, #0E7490)',
      brand: 'Microlife',
    },
    {
      title: 'Synthokind',
      description:
        'The latest Synthokind catalogue featuring their complete range of pharmaceutical products.',
      url: `${RELEASE_BASE}/PCI.Product.Catalogue.New.DT.06.05.26.pdf`,
      fileSize: '191 MB',
      pages: 'Latest Edition',
      gradient: 'linear-gradient(135deg, #7C3AED, #6D28D9)',
      brand: 'Synthokind',
    },
  ];

  viewPdf(url: string): void {
    window.open(url, '_blank');
  }

  downloadPdf(url: string): void {
    const link = document.createElement('a');
    link.href = url;
    link.download = '';
    link.click();
  }
}

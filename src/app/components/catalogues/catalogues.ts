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
      title: 'Complete Product Book',
      description:
        'Our comprehensive product catalogue featuring 500+ pharmaceutical products across all therapeutic categories.',
      url: `${RELEASE_BASE}/17.10.25.Product.BOOK_AUG-2025_C2c.1.pdf`,
      fileSize: '376 MB',
      pages: '120 pages',
      gradient: 'linear-gradient(135deg, #0F766E, #134E4A)',
      brand: 'Triputi Pharma',
    },
    {
      title: 'Product Catalogue — Highlights',
      description:
        'A quick visual guide to our most popular products and best sellers with high-resolution imagery.',
      url: `${RELEASE_BASE}/Catlouge.6.Pics.pdf`,
      fileSize: '13 MB',
      pages: 'Visual Guide',
      gradient: 'linear-gradient(135deg, #D97706, #B45309)',
      brand: 'Triputi Pharma',
    },
    {
      title: 'KASDAP Genexx Catalogue',
      description:
        'Complete product range from KASDAP Genexx — advanced pharmaceutical formulations for modern healthcare.',
      url: `${RELEASE_BASE}/KASDAP.GENEXX.CATALOGUE.2.pdf`,
      fileSize: '145 MB',
      pages: 'Full Range',
      gradient: 'linear-gradient(135deg, #1E40AF, #1E3A8A)',
      brand: 'KASDAP Genexx',
    },
    {
      title: 'KASDAP Healthcare Catalogue',
      description:
        'KASDAP Healthcare\'s complete portfolio of pharmaceutical and wellness products.',
      url: `${RELEASE_BASE}/KASDAP-HEALTHCARE.CATALOGUE.pdf`,
      fileSize: '82 MB',
      pages: 'Full Range',
      gradient: 'linear-gradient(135deg, #7C3AED, #6D28D9)',
      brand: 'KASDAP Healthcare',
    },
    {
      title: 'PCI Product Catalogue',
      description:
        'Latest product catalogue from PCI featuring their complete range of pharmaceutical products.',
      url: `${RELEASE_BASE}/PCI.Product.Catalogue.New.DT.06.05.26.pdf`,
      fileSize: '191 MB',
      pages: 'Latest Edition',
      gradient: 'linear-gradient(135deg, #DC2626, #B91C1C)',
      brand: 'PCI Pharma',
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

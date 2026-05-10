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
    { name: 'KASDAP Healthcare', color: '#0F766E' },
    { name: 'KASDAP Genexx', color: '#1E40AF' },
    { name: 'PCI Pharma', color: '#9333EA' },
    { name: 'Sunlife Sciences', color: '#DC2626' },
    { name: 'KASDAP Healthcare', color: '#0F766E' },
    { name: 'KASDAP Genexx', color: '#1E40AF' },
    { name: 'PCI Pharma', color: '#9333EA' },
    { name: 'Sunlife Sciences', color: '#DC2626' },
  ];
}

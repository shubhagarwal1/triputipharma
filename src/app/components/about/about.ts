import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  highlights = [
    {
      icon: 'truck',
      title: 'Wholesale Distribution',
      desc: 'Bulk supply to pharmacies, hospitals & clinics',
    },
    {
      icon: 'shield',
      title: 'Quality Assured',
      desc: 'Only certified and licensed products',
    },
    {
      icon: 'globe',
      title: 'Pan-India Brands',
      desc: 'Products from leading Indian manufacturers',
    },
  ];
}

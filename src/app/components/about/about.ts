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
      title: 'Distribution Network',
      desc: 'Reliable supply to pharmacies, hospitals & clinics',
    },
    {
      icon: 'shield',
      title: 'Quality Assured',
      desc: 'Only certified and licensed products',
    },
    {
      icon: 'globe',
      title: 'Trusted Brands',
      desc: 'A curated portfolio of established healthcare brands',
    },
  ];
}

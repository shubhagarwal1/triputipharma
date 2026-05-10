import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'About Us', target: 'about' },
    { label: 'Our Products', target: 'features' },
    { label: 'Catalogues', target: 'catalogues' },
    { label: 'Contact', target: 'contact' },
  ];

  constructor(private scrollService: ScrollService) {}

  navigateTo(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
  }
}

import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ScrollService } from '../../services/scroll';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private readonly router = inject(Router);
  private readonly scrollService = inject(ScrollService);

  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'About Us', target: 'about' },
    { label: 'Our Products', target: 'features' },
    { label: 'Service Areas', target: 'areas' },
    { label: 'Catalogues', target: 'catalogues' },
    { label: 'Contact', target: 'contact' },
  ];

  onLogoClick(event: MouseEvent): void {
    const path = this.router.url.split('?')[0];
    if (path === '/' || path === '') {
      event.preventDefault();
      this.scrollService.scrollTo('hero');
    }
  }

  navigateTo(sectionId: string): void {
    const path = this.router.url.split('?')[0];
    const onLocationPage = path.startsWith('/locations/');

    if (onLocationPage) {
      void this.router.navigate(['/']).then(() => {
        setTimeout(() => this.scrollService.scrollTo(sectionId), 120);
      });
    } else {
      this.scrollService.scrollTo(sectionId);
    }
  }
}

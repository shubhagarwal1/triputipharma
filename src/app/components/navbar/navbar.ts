import { Component, HostListener, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ScrollService } from '../../services/scroll';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private readonly router = inject(Router);
  private readonly scrollService = inject(ScrollService);

  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  navLinks = [
    { label: 'About', target: 'about' },
    { label: 'Products', target: 'features' },
    { label: 'Areas', target: 'areas' },
    { label: 'Catalogues', target: 'catalogues' },
    { label: 'Banking', target: 'banking' },
    { label: 'Contact', target: 'contact' },
  ];

  /** Embed-friendly Google Maps location used by the header utility strip + contact map. */
  mapsUrl =
    'https://www.google.com/maps/place/Triputi+Pharma/@28.6786159,76.6528014,11z/data=!4m17!1m10!4m9!1m4!2m2!1d76.5883096!2d28.8937795!4e1!1m3!2m2!1d76.989014!2d28.45775!3m5!1s0x390d179f349afbd5:0xf36461ad2a1827db!8m2!3d28.4581643!4d76.9891118!16s%2Fg%2F11s75vvc2_?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D';

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 60);
  }

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
    this.isMobileMenuOpen.set(false);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((v) => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}

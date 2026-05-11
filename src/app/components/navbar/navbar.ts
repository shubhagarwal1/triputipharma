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
    { label: 'Contact', target: 'contact' },
  ];

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

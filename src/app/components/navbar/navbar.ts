import { Component, HostListener, signal } from '@angular/core';
import { ScrollService } from '../../services/scroll';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  navLinks = [
    { label: 'About', target: 'about' },
    { label: 'Products', target: 'features' },
    { label: 'Catalogues', target: 'catalogues' },
    { label: 'Contact', target: 'contact' }
  ];

  constructor(private scrollService: ScrollService) {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 60);
  }

  navigateTo(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
    this.isMobileMenuOpen.set(false);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}

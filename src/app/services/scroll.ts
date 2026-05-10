import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 72;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      });
    }
  }
}

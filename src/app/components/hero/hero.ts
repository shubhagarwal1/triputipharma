import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  AfterViewInit,
  ElementRef,
  ViewChild,
  input,
} from '@angular/core';
import { ScrollService } from '../../services/scroll';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Hero implements AfterViewInit {
  @ViewChild('swiperEl') swiperEl!: ElementRef;

  /** When a city landing block shows an h1, hero titles become h2 for a single h1 per page. */
  readonly demoteHeading = input(false);

  slides = [
    {
      title: 'Your Trusted Pharmaceutical Partner',
      subtitle:
        'Quality medicines and healthcare products delivered with reliability and trust across Gurugram & NCR.',
      cta: 'Explore Catalogues',
      target: 'catalogues',
      bgClass: 'slide-1',
    },
    {
      title: 'Quality Products, Competitive Prices',
      subtitle:
        '500+ pharmaceutical products from India\'s leading manufacturers at the best wholesale rates.',
      cta: 'View Products',
      target: 'features',
      bgClass: 'slide-2',
    },
    {
      title: 'KASDAP Healthcare Range',
      subtitle:
        'Comprehensive healthcare solutions from KASDAP — trusted formulations for every therapeutic need.',
      cta: 'View Catalogue',
      target: 'catalogues',
      bgClass: 'slide-3',
    },
    {
      title: 'PCI Product Range',
      subtitle:
        'Premium pharmaceutical products from PCI — quality you can rely on for your patients.',
      cta: 'View Catalogue',
      target: 'catalogues',
      bgClass: 'slide-4',
    },
  ];

  constructor(private scrollService: ScrollService) {}

  ngAfterViewInit(): void {
    const swiperParams = {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      effect: 'fade',
      fadeEffect: { crossFade: true },
      speed: 800,
      pagination: {
        el: '.hero-pagination',
        clickable: true,
        bulletClass: 'hero-bullet',
        bulletActiveClass: 'hero-bullet-active',
      },
    };

    Object.assign(this.swiperEl.nativeElement, swiperParams);
    this.swiperEl.nativeElement.initialize();
  }

  navigateTo(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
  }
}

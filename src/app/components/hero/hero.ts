import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  NgZone,
  inject,
  input,
} from '@angular/core';
import { ScrollService } from '../../services/scroll';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Hero implements AfterViewInit, OnDestroy {
  @ViewChild('swiperEl') swiperEl!: ElementRef;
  @ViewChild('stage') stage!: ElementRef<HTMLElement>;

  private readonly zone = inject(NgZone);
  private rafId = 0;
  private scrollBound = false;

  /** When a city landing block shows an h1, hero titles become h2 for a single h1 per page. */
  readonly demoteHeading = input(false);

  readonly whatsappUrl =
    'https://wa.me/919416608873?text=Hi%20Triputi%20Pharma%2C%20I%20would%20like%20to%20enquire%20about%20your%20product%20range%20and%20distribution%20services.';

  slides = [
    {
      eyebrow: 'Pharmaceutical Distribution',
      title: 'Your Trusted Pharmaceutical Distribution Partner',
      subtitle:
        'Reliable supply of medicines and healthcare products to pharmacies, hospitals, clinics, and healthcare institutions across Haryana, Delhi NCR, Rajasthan & Gujarat.',
      cta: 'Explore Our Range',
      target: 'catalogues',
      bgClass: 'slide-1',
    },
    {
      eyebrow: 'Trusted Brand Portfolio',
      title: 'Leading Brands, Delivered with Confidence',
      subtitle:
        'Official distribution partner for Troikaa (Novogen), Syndicate Medicare, Sunlife, Microlife, and more — a curated portfolio healthcare providers rely on.',
      cta: 'View Partner Brands',
      target: 'brands',
      bgClass: 'slide-2',
    },
    {
      eyebrow: 'Four-State Coverage',
      title: 'A Distribution Network Built for Scale',
      subtitle:
        'Consistent stock availability and timely delivery across Gurugram, Delhi NCR, Haryana, Rajasthan, and Gujarat — keeping healthcare supply uninterrupted.',
      cta: 'See Service Areas',
      target: 'areas',
      bgClass: 'slide-3',
    },
    {
      eyebrow: '2000+ Products',
      title: 'Always in Stock, Always on Time',
      subtitle:
        'A 2000+ product range spanning every major therapeutic category, backed by dependable replenishment and responsive service.',
      cta: 'Browse Catalogues',
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

    this.setupScrollEffect();
  }

  /**
   * Modern scroll-linked "receding stage" effect: as the user scrolls past the hero,
   * the whole banner gently scales down, rounds its corners, drifts up, blurs and fades —
   * so the next section reveals over it instead of the old static scroll-away.
   * Runs entirely outside the Angular zone via rAF and writes transforms straight to the
   * DOM (no change detection), and is disabled under prefers-reduced-motion.
   */
  private setupScrollEffect(): void {
    const reduceMotion =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    if (reduceMotion || !this.stage) return;

    this.scrollBound = true;
    this.zone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.onScroll, { passive: true });
      this.onScroll();
    });
  }

  private readonly onScroll = (): void => {
    cancelAnimationFrame(this.rafId);
    this.rafId = requestAnimationFrame(() => {
      const vh = window.innerHeight || 1;
      const p = Math.min(Math.max(window.scrollY / vh, 0), 1);
      if (p > 1) return;
      const eased = 1 - Math.pow(1 - p, 2);
      const el = this.stage.nativeElement;
      el.style.transform = `translate3d(0, ${(eased * 40).toFixed(1)}px, 0) scale(${(1 - eased * 0.12).toFixed(3)})`;
      el.style.opacity = (1 - eased * 0.82).toFixed(2);
      el.style.borderRadius = `${(eased * 36).toFixed(0)}px`;
      el.style.filter = `blur(${(eased * 4).toFixed(1)}px)`;
    });
  };

  navigateTo(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
  }

  ngOnDestroy(): void {
    if (this.scrollBound) {
      window.removeEventListener('scroll', this.onScroll);
    }
    cancelAnimationFrame(this.rafId);
  }
}

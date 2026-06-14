import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  NgZone,
  inject,
} from '@angular/core';
import { ScrollService } from '../../services/scroll';

/**
 * Scroll-driven 3D showcase (native Angular port of the container-scroll effect).
 * As the section scrolls into view the card rotates from a tilted angle to flat
 * and scales up, while the heading drifts and fades in.
 *
 * Built for "lightweight and smooth": all per-frame work runs OUTSIDE the Angular
 * zone via requestAnimationFrame and writes transforms directly to the DOM, so it
 * never triggers change detection. An IntersectionObserver only attaches the scroll
 * listener while the section is on screen, and prefers-reduced-motion is respected.
 */
@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.html',
  styleUrl: './showcase.scss',
})
export class Showcase implements AfterViewInit, OnDestroy {
  @ViewChild('track') track!: ElementRef<HTMLElement>;
  @ViewChild('card') card!: ElementRef<HTMLElement>;
  @ViewChild('heading') heading!: ElementRef<HTMLElement>;

  private readonly zone = inject(NgZone);
  private readonly scrollService = inject(ScrollService);

  private io?: IntersectionObserver;
  private rafId = 0;
  private listening = false;

  ngAfterViewInit(): void {
    const reduceMotion =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    if (reduceMotion) {
      this.apply(1);
      return;
    }

    this.io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          this.start();
        } else {
          this.stop();
        }
      },
      { threshold: 0 },
    );
    this.io.observe(this.track.nativeElement);
  }

  scrollTo(id: string): void {
    this.scrollService.scrollTo(id);
  }

  private start(): void {
    if (this.listening) return;
    this.listening = true;
    this.zone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.onScroll, { passive: true });
      this.onScroll();
    });
  }

  private stop(): void {
    if (!this.listening) return;
    this.listening = false;
    window.removeEventListener('scroll', this.onScroll);
    cancelAnimationFrame(this.rafId);
  }

  private readonly onScroll = (): void => {
    cancelAnimationFrame(this.rafId);
    this.rafId = requestAnimationFrame(() => {
      const rect = this.track.nativeElement.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 when the section first enters the bottom of the viewport, 1 once its top reaches the top.
      const p = Math.min(Math.max((vh - rect.top) / vh, 0), 1);
      this.apply(p);
    });
  };

  private apply(p: number): void {
    // ease-out for a settled, premium finish
    const eased = 1 - Math.pow(1 - p, 3);
    const rotateX = (1 - eased) * 16; // 16deg → 0
    const scale = 0.94 + eased * 0.06; // 0.94 → 1
    if (this.card) {
      this.card.nativeElement.style.transform = `perspective(1400px) rotateX(${rotateX.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
    }
    if (this.heading) {
      this.heading.nativeElement.style.transform = `translateY(${((1 - eased) * 28).toFixed(1)}px)`;
      this.heading.nativeElement.style.opacity = (0.35 + eased * 0.65).toFixed(2);
    }
  }

  ngOnDestroy(): void {
    this.stop();
    this.io?.disconnect();
  }
}

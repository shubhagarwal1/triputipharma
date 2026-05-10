import {
  Component,
  ElementRef,
  AfterViewInit,
  ViewChild,
  signal,
  OnDestroy,
} from '@angular/core';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-stats',
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
})
export class Stats implements AfterViewInit, OnDestroy {
  @ViewChild('statsSection') statsSection!: ElementRef;

  private observer!: IntersectionObserver;
  private hasAnimated = false;

  stats: StatItem[] = [
    { value: 500, suffix: '+', label: 'Products Available', icon: 'package' },
    { value: 5, suffix: '+', label: 'Partner Brands', icon: 'award' },
    { value: 5, suffix: '.0', label: 'Google Rating', icon: 'star' },
    { value: 10, suffix: '+', label: 'Years Experience', icon: 'clock' },
  ];

  displayValues = signal<string[]>(this.stats.map(() => '0'));

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            this.animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );
    this.observer.observe(this.statsSection.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private animateCounters(): void {
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      const newValues = this.stats.map((stat) => {
        const current = Math.round(eased * stat.value);
        return `${current}${progress >= 1 ? stat.suffix : ''}`;
      });

      this.displayValues.set(newValues);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }
}

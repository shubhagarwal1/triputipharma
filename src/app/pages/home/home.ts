import {
  Component,
  DestroyRef,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { combineLatest } from 'rxjs';
import AOS from 'aos';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { Stats } from '../../components/stats/stats';
import { Showcase } from '../../components/showcase/showcase';
import { About } from '../../components/about/about';
import { Features } from '../../components/features/features';
import { ServiceAreas } from '../../components/service-areas/service-areas';
import { Brands } from '../../components/brands/brands';
import { Catalogues } from '../../components/catalogues/catalogues';
import { Testimonials } from '../../components/testimonials/testimonials';
import { Contact } from '../../components/contact/contact';
import { Footer } from '../../components/footer/footer';
import { SeoService } from '../../services/seo';
import {
  getServiceAreaBySlug,
  normalizeCityQuery,
  type ServiceArea,
} from '../../data/service-areas';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    Navbar,
    Hero,
    Stats,
    Showcase,
    About,
    Features,
    ServiceAreas,
    Brands,
    Catalogues,
    Testimonials,
    Contact,
    Footer,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);
  private readonly destroyRef = inject(DestroyRef);

  /** When set, local landing copy is emphasised for this service area. */
  readonly activeArea = signal<ServiceArea | null>(null);

  constructor() {
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(([params, query]) => {
        const paramSlug = params.get('citySlug');
        const fromQuery = normalizeCityQuery(query.get('city'));

        if (!paramSlug && fromQuery) {
          void this.router.navigate(['/locations', fromQuery], {
            replaceUrl: true,
            queryParams: {},
          });
          return;
        }

        if (paramSlug && !getServiceAreaBySlug(paramSlug)) {
          void this.router.navigate(['/'], { replaceUrl: true });
          return;
        }

        const area = getServiceAreaBySlug(paramSlug);
        this.activeArea.set(area);
        this.seo.applyForLocation(paramSlug);

        queueMicrotask(() => {
          if (typeof AOS !== 'undefined' && AOS.refresh) {
            AOS.refresh();
          }
        });
      });
  }

  ngOnInit(): void {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
  }
}

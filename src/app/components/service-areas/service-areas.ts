import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICE_AREAS } from '../../data/service-areas';

@Component({
  selector: 'app-service-areas',
  templateUrl: './service-areas.html',
  styleUrl: './service-areas.scss',
  imports: [RouterLink],
})
export class ServiceAreas {
  readonly areas = SERVICE_AREAS;

  /** Current location page slug — card gets highlighted for internal linking UX. */
  readonly highlightSlug = input<string | null>(null);
}

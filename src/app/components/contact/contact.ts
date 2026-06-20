import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  /** Voice numbers — rendered as clickable tel: links on desktop and mobile. */
  callNumbers = [
    { display: '+91 94166 08873', tel: '+919416608873' },
    { display: '+91 99717 15159', tel: '+919971715159' },
  ];

  /** WhatsApp numbers — rendered as clickable wa.me links. */
  private readonly waText =
    'Hi%20Triputi%20Pharma%2C%20I%20would%20like%20to%20enquire%20about%20your%20product%20range%20and%20distribution%20services.';
  whatsappNumbers = [
    { display: '+91 94166 08873', url: `https://wa.me/919416608873?text=${this.waText}` },
    { display: '+91 97170 73873', url: `https://wa.me/919717073873?text=${this.waText}` },
  ];

  address = 'Sector 9, Basai, Gurugram, Haryana';

  mapsUrl = 'https://maps.app.goo.gl/szqgAPzwRU7Saiua7';

  safeMapsUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // Google blocks framing of share URLs (source=embed) with X-Frame-Options; the
    // embeddable form of the same place (same CID) uses output=embed.
    this.safeMapsUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps?cid=17538250245251016667&hl=en&output=embed',
    );
  }
}

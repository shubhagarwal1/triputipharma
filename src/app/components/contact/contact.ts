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

  mapsUrl =
    'https://www.google.com/maps/place/Triputi+Pharma/@28.6786159,76.6528014,11z/data=!4m17!1m10!4m9!1m4!2m2!1d76.5883096!2d28.8937795!4e1!1m3!2m2!1d76.989014!2d28.45775!3m5!1s0x390d179f349afbd5:0xf36461ad2a1827db!8m2!3d28.4581643!4d76.9891118!16s%2Fg%2F11s75vvc2_?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D';
  address =
    'Basement, Patanjali Mega Store, Near Raas Wellness Spa, Jharsa, Sector 39, Gurugram, Haryana 122003';

  safeMapsUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // Embed the exact registered "Triputi Pharma" listing by its Google place CID
    // (0xf36461ad2a1827db = 17538250245251016667). Embedding by raw coordinates makes
    // Google snap to the nearest prominent business (e.g. "Suri auto pvt ltd").
    this.safeMapsUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps?cid=17538250245251016667&z=17&hl=en&output=embed',
    );
  }
}

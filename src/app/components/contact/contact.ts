import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  phone = '+919717073873';
  phoneDisplay = '097170 73873';
  whatsappUrl = 'https://wa.me/919717073873?text=Hi%20Triputi%20Pharma%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.';
  mapsUrl = 'https://www.google.com/maps/place/Triputi+Pharma/@28.4431,76.9896,17z';
  address = 'Plot No.3, Gali No.1, Khasra No.511/1, Basai Industrial Area, Near RK Hotel Residency, Ward No.12, Basai, Gurugram (Haryana) 122006';

  safeMapsUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeMapsUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.5!2d76.9896!3d28.4431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTriputi+Pharma!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
    );
  }
}

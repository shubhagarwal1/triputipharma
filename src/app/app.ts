import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Stats } from './components/stats/stats';
import { About } from './components/about/about';
import { Features } from './components/features/features';
import { Brands } from './components/brands/brands';
import { Catalogues } from './components/catalogues/catalogues';
import { Testimonials } from './components/testimonials/testimonials';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Hero,
    Stats,
    About,
    Features,
    Brands,
    Catalogues,
    Testimonials,
    Contact,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  ngOnInit(): void {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
  }
}

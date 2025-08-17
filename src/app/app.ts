import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

// Core Components
import { Navbar } from './core/components/navbar';
import { Footer } from './core/components/footer';

// Landing Page Sections
import { HeroSection } from './features/landing/hero-section';
import { FeaturesSection } from './features/landing/features-section';
import { PackagesSection } from './features/landing/packages-section';
import { AboutSection } from './features/landing/about-section';
import { TestimonialsSection } from './features/landing/testimonials-section';
import { ContactSection } from './features/landing/contact-section';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    Navbar,
    Footer,
    HeroSection,
    FeaturesSection,
    PackagesSection,
    AboutSection,
    TestimonialsSection,
    ContactSection
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}

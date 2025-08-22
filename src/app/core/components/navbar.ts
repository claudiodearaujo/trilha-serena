import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Compass } from 'lucide-angular';
import { Button } from '../../shared/components/button';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, LucideAngularModule, Button],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  @Input() isScrolled = false;
  mobileMenuOpen = false;
  
  readonly Compass = Compass;

  onContactClick() {
    // Scroll to contact section or open modal
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
    this.closeMobileMenu();
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}

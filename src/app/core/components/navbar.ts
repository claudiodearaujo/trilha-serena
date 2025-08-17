import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Compass } from 'lucide-angular';
import { Button } from '../../shared/components/button';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, LucideAngularModule, Button],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  @Input() isScrolled = false;
  
  readonly Compass = Compass;

  onContactClick() {
    // Scroll to contact section or open modal
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  }
}

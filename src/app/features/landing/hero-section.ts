import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Button } from '../../shared/components/button';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule, Button],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSection {
  private router = inject(Router);

  onRequestItinerary() {
    console.log('Request itinerary clicked');
    // Implementar lógica para solicitar roteiro
  }

  onViewPackages() {
    document.getElementById('pacotes')?.scrollIntoView({ behavior: 'smooth' });
  }

  onViewNumerology() {
    this.router.navigate(['/numerologia/mapa/izabela/8/22/2025']);
  }
}

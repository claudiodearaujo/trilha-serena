import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../../shared/components/button';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule, Button],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSection {

  onRequestItinerary() {
    console.log('Request itinerary clicked');
    // Implementar lógica para solicitar roteiro
  }

  onViewPackages() {
    document.getElementById('pacotes')?.scrollIntoView({ behavior: 'smooth' });
  }
}

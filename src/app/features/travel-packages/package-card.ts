import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, CheckCircle } from 'lucide-angular';
import { Package } from '../../shared/interfaces/travel.interfaces';
import { Button } from '../../shared/components/button';

@Component({
  selector: 'app-package-card',
  imports: [CommonModule, LucideAngularModule, Button],
  templateUrl: './package-card.html',
  styleUrl: './package-card.css'
})
export class PackageCard {
  @Input({ required: true }) package!: Package;
  
  readonly CheckCircle = CheckCircle;

  onRequestItinerary() {
    console.log('Request itinerary for package:', this.package.id);
    // Aqui seria implementada a lógica para solicitar roteiro
  }
}

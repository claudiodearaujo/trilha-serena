import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelData } from '../../shared/services/travel-data';
import { PackageCard } from '../travel-packages/package-card';

@Component({
  selector: 'app-packages-section',
  imports: [CommonModule, PackageCard],
  templateUrl: './packages-section.html',
  styleUrl: './packages-section.css'
})
export class PackagesSection {
  private travelDataService = inject(TravelData);
  
  packages = this.travelDataService.packages;
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Shield, Heart, CheckCircle } from 'lucide-angular';

@Component({
  selector: 'app-features-section',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './features-section.html',
  styleUrl: './features-section.css'
})
export class FeaturesSection {
  readonly Shield = Shield;
  readonly Heart = Heart;
  readonly CheckCircle = CheckCircle;
}

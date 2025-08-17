import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Compass, Heart, Shield } from 'lucide-angular';

@Component({
  selector: 'app-about-section',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './about-section.html',
  styleUrl: './about-section.css'
})
export class AboutSection {
  readonly Compass = Compass;
  readonly Heart = Heart;
  readonly Shield = Shield;
}

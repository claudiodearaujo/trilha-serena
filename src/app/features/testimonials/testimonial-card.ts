import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Star } from 'lucide-angular';
import { Testimonial } from '../../shared/interfaces/travel.interfaces';

@Component({
  selector: 'app-testimonial-card',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './testimonial-card.html',
  styleUrl: './testimonial-card.css'
})
export class TestimonialCard {
  @Input({ required: true }) testimonial!: Testimonial;
  
  readonly Star = Star;

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelData } from '../../shared/services/travel-data';
import { TestimonialCard } from '../testimonials/testimonial-card';

@Component({
  selector: 'app-testimonials-section',
  imports: [CommonModule, TestimonialCard],
  templateUrl: './testimonials-section.html',
  styleUrl: './testimonials-section.css'
})
export class TestimonialsSection {
  private travelDataService = inject(TravelData);
  
  testimonials = this.travelDataService.testimonials;
}

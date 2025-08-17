import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Compass } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  readonly Compass = Compass;
  readonly currentYear = new Date().getFullYear();
}

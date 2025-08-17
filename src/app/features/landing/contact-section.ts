import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Phone, Mail, MapPin } from 'lucide-angular';
import { FormData } from '../../shared/interfaces/travel.interfaces';
import { Button } from '../../shared/components/button';

@Component({
  selector: 'app-contact-section',
  imports: [CommonModule, FormsModule, LucideAngularModule, Button],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css'
})
export class ContactSection {
  readonly Phone = Phone;
  readonly Mail = Mail;
  readonly MapPin = MapPin;

  formData: FormData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  handleSubmit() {
    console.log('Form submitted:', this.formData);
    alert('Mensagem enviada! Entraremos em contato em breve.');
    this.formData = { name: '', email: '', phone: '', message: '' };
  }
}

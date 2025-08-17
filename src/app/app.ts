import { Component, OnInit, signal, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Compass, Shield, Heart, CheckCircle, Star, Phone, Mail, MapPin } from 'lucide-angular';

interface Package {
  id: number;
  title: string;
  description: string;
  image: string;
  days: string;
  regime: string;
  price: string;
  features: string[];
}

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, LucideAngularModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('trilha-serena');
  protected isScrolled = false;
  
  protected formData: FormData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  protected packages: Package[] = [
    {
      id: 1,
      title: "Escapada de Fim de Semana",
      description: "Perfeito para quem tem pouco tempo mas quer relaxar",
      image: "assets/images/trilha_serena_paisagem_1.png",
      days: "2-3 dias",
      regime: "Café da manhã",
      price: "A partir de R$ 890",
      features: ["Roteiro personalizado", "Suporte 24h", "Cancelamento grátis"]
    },
    {
      id: 2,
      title: "Aventura Familiar",
      description: "Experiências inesquecíveis para toda a família",
      image: "assets/images/trilha_serena_paisagem_1.png",
      days: "5-7 dias",
      regime: "Pensão completa",
      price: "A partir de R$ 2.450",
      features: ["Atividades para crianças", "Guia especializado", "Seguro viagem"]
    },
    {
      id: 3,
      title: "Retiro de Serenidade",
      description: "Desconecte-se do mundo e reconecte-se consigo mesmo",
      image: "assets/images/trilha_serena_paisagem_1.png",
      days: "7-10 dias",
      regime: "All inclusive",
      price: "A partir de R$ 3.890",
      features: ["Spa incluído", "Yoga e meditação", "Gastronomia local"]
    }
  ];

  protected testimonials: Testimonial[] = [
    {
      name: "Maria Silva",
      role: "Gerente de Relacionamento",
      text: "A Trilha Serena entendeu perfeitamente nossa rotina corrida. O planejamento foi impecável e pudemos relaxar de verdade!",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Analista de Crédito",
      text: "Viagem incrível com a família! Tudo organizado nos mínimos detalhes. Recomendo para todos os colegas do banco.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Coordenadora de Agência",
      text: "Finalmente uma agência que entende as necessidades de quem trabalha no setor bancário. Excelente atendimento!",
      rating: 5
    }
  ];

  readonly Compass = Compass;
  readonly Shield = Shield;
  readonly Heart = Heart;
  readonly CheckCircle = CheckCircle;
  readonly Star = Star;
  readonly Phone = Phone;
  readonly Mail = Mail;
  readonly MapPin = MapPin;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  ngOnInit() {
  }

  protected handleSubmit() {
    console.log('Form submitted:', this.formData);
    alert('Mensagem enviada! Entraremos em contato em breve.');
    this.formData = { name: '', email: '', phone: '', message: '' };
  }

  protected getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}

import { Injectable, signal } from '@angular/core';
import { Package, Testimonial } from '../interfaces/travel.interfaces';

@Injectable({
  providedIn: 'root'
})
export class TravelData {
  private packagesSignal = signal<Package[]>([
    {
      id: 1,
      title: "Escapada de Fim de Semana",
      description: "Perfeito para quem tem pouco tempo mas quer relaxar",
      image: "images/trilha_serena_paisagem_1.png",
      days: "2-3 dias",
      regime: "Café da manhã",
      price: "A partir de R$ 890",
      features: ["Roteiro personalizado", "Suporte 24h", "Cancelamento grátis"]
    },
    {
      id: 2,
      title: "Aventura Familiar",
      description: "Experiências inesquecíveis para toda a família",
      image: "images/trilha_serena_paisagem_1.png",
      days: "5-7 dias",
      regime: "Pensão completa",
      price: "A partir de R$ 2.450",
      features: ["Atividades para crianças", "Guia especializado", "Seguro viagem"]
    },
    {
      id: 3,
      title: "Retiro de Serenidade",
      description: "Desconecte-se do mundo e reconecte-se consigo mesmo",
      image: "images/trilha_serena_paisagem_1.png",
      days: "7-10 dias",
      regime: "All inclusive",
      price: "A partir de R$ 3.890",
      features: ["Spa incluído", "Yoga e meditação", "Gastronomia local"]
    }
  ]);

  private testimonialsSignal = signal<Testimonial[]>([
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
  ]);

  // Getters para expor os signals como readonly
  get packages() {
    return this.packagesSignal.asReadonly();
  }

  get testimonials() {
    return this.testimonialsSignal.asReadonly();
  }

  // Métodos para atualizar dados (se necessário)
  addPackage(pkg: Package) {
    this.packagesSignal.update(packages => [...packages, pkg]);
  }

  addTestimonial(testimonial: Testimonial) {
    this.testimonialsSignal.update(testimonials => [...testimonials, testimonial]);
  }
}

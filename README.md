# 🧭 Trilha Serena - Agência de Viagens Digital

> **Viagens personalizadas para quem vive o mundo bancário**

[![Angular](https://img.shields.io/badge/Angular-v20.1.0-red.svg)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue.svg)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4.1.12-38bdf8.svg)](https://tailwindcss.com/)
[![Build Status](https://img.shields.io/badge/Build-Passing-green.svg)]()

---

## 🎯 Sobre o Projeto

A **Trilha Serena** é uma agência digital especializada em criar experiências de viagem únicas para profissionais do setor bancário e suas famílias. Nossa plataforma oferece roteiros sob medida, suporte humano completo e processos pensados para rotinas intensas.

### ✨ Características Principais

- 🛡️ **Segurança Total** - Pagamentos protegidos e cancelamento grátis
- ❤️ **Suporte Humano** - Atendimento personalizado do planejamento ao retorno
- ⚡ **Processos Inteligentes** - Planejamento otimizado para rotina bancária
- 🌍 **100% Digital** - Atendimento online em todo o Brasil

---

## 🏗️ Arquitetura Técnica

### 🚀 Stack Tecnológico

- **Framework:** Angular v20.1.0 com Standalone Components
- **Language:** TypeScript 5.8.2 (Strict Mode)
- **Styling:** TailwindCSS v4.1.12 + Utility Classes
- **Icons:** Lucide Angular v0.539.0
- **State:** Angular Signals (Reactive)
- **Build:** Angular CLI v20.1.6

### 📁 Estrutura do Projeto

```
src/app/
├── core/components/           # Componentes essenciais
│   ├── navbar/               # Navegação global
│   └── footer/               # Rodapé global
├── shared/                   # Recursos compartilhados
│   ├── components/button/    # Botão reutilizável
│   ├── interfaces/           # Interfaces TypeScript
│   └── services/            # Serviços e estado
├── features/                # Features por domínio
│   ├── landing/             # Página principal
│   ├── travel-packages/     # Pacotes de viagem
│   └── testimonials/        # Depoimentos
└── assets/                  # Imagens e recursos estáticos
```

### 🎨 Componentes Desenvolvidos

| Componente | Responsabilidade | Status |
|------------|------------------|--------|
| `Button` | Botão reutilizável com variants | ✅ |
| `Navbar` | Navegação principal responsiva | ✅ |
| `Footer` | Rodapé com links e informações | ✅ |
| `HeroSection` | Seção principal de apresentação | ✅ |
| `FeaturesSection` | Grid de características | ✅ |
| `PackagesSection` | Lista de pacotes disponíveis | ✅ |
| `AboutSection` | Informações sobre a empresa | ✅ |
| `TestimonialsSection` | Depoimentos de clientes | ✅ |
| `ContactSection` | Formulário de contato | ✅ |
| `PackageCard` | Card individual de pacote | ✅ |
| `TestimonialCard` | Card individual de depoimento | ✅ |

---

## 🚀 Desenvolvimento

### 📋 Pré-requisitos

- **Node.js** 18+ 
- **npm** ou **pnpm** (recomendado)
- **Angular CLI** 20+

### ⚡ Início Rápido

```bash
# 1. Clone o repositório
git clone <repository-url>
cd trilha-serena

# 2. Instale as dependências
pnpm install

# 3. Execute o servidor de desenvolvimento
ng serve

# 4. Acesse no navegador
# http://localhost:4200
```

### 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
ng serve                    # Servidor local (http://localhost:4200)
ng serve --open            # Abre automaticamente no navegador

# Build & Deploy
ng build                   # Build de produção
ng build --watch           # Build com watch mode

# Qualidade & Testes
ng test                    # Executa testes unitários
ng lint                    # Executa linting

# Scaffolding
ng generate component <name>      # Novo componente
ng generate service <name>        # Novo serviço
ng generate --help                # Lista todos os schematics
```

---

## 📊 Performance & Métricas

### 📈 Bundle Size (Produção)

| Arquivo | Tamanho | Comprimido |
|---------|---------|------------|
| `main.js` | 401.29 kB | 90.29 kB |
| `polyfills.js` | 34.58 kB | 11.32 kB |
| `styles.css` | 21.73 kB | 4.54 kB |
| **Total** | **457.60 kB** | **106.15 kB** |

### ⚡ Otimizações Implementadas

- ✅ **Tree Shaking** automático
- ✅ **Standalone Components** para bundle menor
- ✅ **Lazy Loading** preparado
- ✅ **TailwindCSS** purge automático
- ✅ **TypeScript** strict mode
- ✅ **Angular Signals** para reatividade eficiente

---

## 🎨 Design System

### 🌈 Cores do Brand

```css
/* Cores principais definidas no TailwindCSS */
--brand-primary: /* Azul principal */
--brand-secondary: /* Cor secundária */
--brand-accent: /* Cor de destaque */
--brand-neutral-100: /* Cinza claro */
--brand-neutral-900: /* Cinza escuro */
```

### 🔘 Componente Button

```html
<!-- Variações disponíveis -->
<app-button variant="primary" size="lg">Primary Large</app-button>
<app-button variant="secondary" size="md">Secondary Medium</app-button>
<app-button variant="primary" [fullWidth]="true">Full Width</app-button>
<app-button [disabled]="true">Disabled</app-button>
```

### 📱 Responsividade

- **Mobile First** approach
- **Breakpoints** TailwindCSS (sm, md, lg, xl, 2xl)
- **Grid System** flexível com CSS Grid
- **Touch** otimização para dispositivos móveis

---

## 🧪 Testes & Qualidade

### 🔍 Estratégia de Testes (Planejado v1.1.0)

```bash
# Testes unitários
ng test                           # Karma + Jasmine
ng test --watch                   # Modo watch
ng test --code-coverage          # Com cobertura

# Testes e2e (futuro)
ng e2e                           # Cypress/Playwright
```

### 📏 Linting & Formatação

```bash
# Linting
ng lint                          # ESLint + Angular rules

# Formatação
npx prettier --write "src/**/*.{ts,html,css}"
```

---

## 🚦 Deployment

### 📦 Build de Produção

```bash
# Build otimizado
ng build --configuration production

# Arquivos gerados em
./dist/trilha-serena/
```

### 🌐 Deploy Options

- **Static Hosting:** Netlify, Vercel, GitHub Pages
- **CDN:** CloudFlare, AWS CloudFront
- **Container:** Docker + Nginx
- **Server:** Express.js para SSR (futuro)

---

## 📖 Documentação Adicional

### 📚 Recursos do Projeto

- [`docs/memories.md`](docs/memories.md) - Registro de atividades
- [`docs/lessons-learned.md`](docs/lessons-learned.md) - Aprendizados técnicos
- [`docs/scratchpad.md`](docs/scratchpad.md) - Notas de desenvolvimento
- [`docs/project-requirements.md`](docs/project-requirements.md) - Requisitos detalhados

### 🔗 Links Úteis

- [Angular Documentation](https://angular.dev/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 🤝 Contribuição

### 🐛 Reportando Issues

1. Verifique se o issue já existe
2. Use template de issue
3. Inclua passos para reproduzir
4. Anexe screenshots se necessário

### 💡 Sugerindo Features

1. Descreva o problema que resolve
2. Explique a solução proposta
3. Considere alternativas
4. Inclua mockups se aplicável

### 🔧 Desenvolvimento

```bash
# 1. Fork o projeto
# 2. Crie uma branch para feature
git checkout -b feature/nova-funcionalidade

# 3. Commit suas mudanças
git commit -m "feat: adiciona nova funcionalidade"

# 4. Push para branch
git push origin feature/nova-funcionalidade

# 5. Abra um Pull Request
```

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 👨‍💻 Desenvolvido por

**Argos + Desenvolvedor**  
🤖 AI-Powered Development with Human Expertise

---

<div align="center">

**⭐ Se este projeto foi útil, considere dar uma estrela!**

</div>
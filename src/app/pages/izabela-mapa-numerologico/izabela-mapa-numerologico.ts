import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-izabela-mapa-numerologico',
  imports: [MarkdownComponent, CommonModule],
  templateUrl: './izabela-mapa-numerologico.html',
  styleUrl: './izabela-mapa-numerologico.css'
})
export class IzabelaMapaNumerologico implements OnInit {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);
  
  nome: string = '';
  dia: string = '';
  mes: string = '';
  ano: string = '';
  markdownContent: string = '';
  useExternalFile: boolean = true; // Flag para usar arquivo externo ou conteúdo gerado

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.nome = params['nome'];
      this.dia = params['dia'];
      this.mes = params['mes'];
      this.ano = params['ano'];
      console.log('Parâmetros recebidos:', { nome: this.nome, dia: this.dia, mes: this.mes, ano: this.ano });
      this.loadMarkdownContent();
    });
  }

  private loadMarkdownContent() {
    if (this.useExternalFile) {
      // Carrega conteúdo de arquivo markdown externo
      this.loadExternalMarkdown();
    } else {
      // Usa conteúdo gerado dinamicamente
      this.markdownContent = this.generateMarkdownContent();
    }
  }

  private loadExternalMarkdown() {
    // Por enquanto, sempre carrega o arquivo específico da Izabela
    // Futuramente pode ser expandido para outros arquivos baseados nos parâmetros
    const filePath = 'assets/markdown/izabela-mapa-numerologico.md';
    
    this.http.get(filePath, { responseType: 'text' }).subscribe({
      next: (content) => {
        console.log('Arquivo markdown carregado com sucesso');
        this.markdownContent = content;
      },
      error: (error) => {
        console.error('Erro ao carregar arquivo markdown:', error);
        console.log('Usando conteúdo gerado como fallback');
        this.markdownContent = this.generateMarkdownContent();
      }
    });
  }

  private generateMarkdownContent(): string {
    return `# Mapa Numerológico - ${this.nome}

## Data de Nascimento: ${this.dia}/${this.mes}/${this.ano}

### Análise Numerológica

Este é o conteúdo em markdown para o mapa numerológico da **${this.nome}**.

#### Números da Data de Nascimento
- Dia: ${this.dia}
- Mês: ${this.mes}  
- Ano: ${this.ano}

#### Interpretação

*Aqui você pode adicionar o conteúdo específico do mapa numerológico...*

### Características Principais

- **Número do Destino**: [Calcular baseado na data]
- **Número da Personalidade**: [Calcular baseado no nome]
- **Número da Alma**: [Análise específica]

### Recomendações

> Este é um exemplo de conteúdo markdown que será renderizado na página.

\`\`\`
Você pode adicionar código, tabelas, listas e outros elementos markdown aqui.
\`\`\`
`;
  }
}

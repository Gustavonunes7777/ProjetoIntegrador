import { Component } from '@angular/core';

export type StatusProjeto = 'planejamento' | 'desenvolvimento' | 'testes' | 'concluido';

export interface Projeto {
  id: number;
  titulo: string;
  equipe: string;
  nota?: number;
  status: StatusProjeto;
  entregue: boolean;
}

@Component({
  selector: 'app-ex14',
  standalone: true,
  imports: [],
  templateUrl: './ex14.html',
  styleUrls: ['./ex14.css']
})
export class Ex14Component {
  projetos: Projeto[] = [
    { id: 1, titulo: 'Plataforma E-commerce', equipe: 'Alpha', nota: 8.5, status: 'concluido', entregue: true },
    { id: 2, titulo: 'App de Entregas', equipe: 'Beta', nota: 5.5, status: 'desenvolvimento', entregue: false },
    { id: 3, titulo: 'Portal do Cliente', equipe: 'Gamma', nota: 7.0, status: 'testes', entregue: true },
    { id: 4, titulo: 'Sistema de RH', equipe: 'Delta', status: 'planejamento', entregue: false }
  ];

  ocultarConcluidos: boolean = false;

  get projetosFiltrados(): Projeto[] {
    if (this.ocultarConcluidos) {
      return this.projetos.filter(p => p.status !== 'concluido');
    }
    return this.projetos;
  }

  get totalProjetos(): number {
    return this.projetos.length;
  }

  get totalConcluidos(): number {
    return this.projetos.filter(p => p.status === 'concluido').length;
  }

  alternarFiltroConcluidos(): void {
    this.ocultarConcluidos = !this.ocultarConcluidos;
  }

  alterarStatus(id: number, novoStatus: StatusProjeto): void {
    const projeto = this.projetos.find(p => p.id === id);
    if (projeto) {
      projeto.status = novoStatus;
      if (novoStatus === 'concluido') {
        projeto.entregue = true;
      }
    }
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: 'baixa' | 'media' | 'alta';
  concluida: boolean;
}

@Component({
  selector: 'app-ex13',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex13.html',
  styleUrls: ['./ex13.css']
})
export class Ex13Component {
  tarefas: Tarefa[] = [
    { id: 1, titulo: 'Corrigir bugs do sistema', responsavel: 'Carlos', prioridade: 'alta', concluida: false },
    { id: 2, titulo: 'Criar documentação', responsavel: 'Ana', prioridade: 'baixa', concluida: true },
    { id: 3, titulo: 'Reunião com cliente', responsavel: 'Beatriz', prioridade: 'media', concluida: false },
    { id: 4, titulo: 'Atualizar dependências', responsavel: 'Carlos', prioridade: 'media', concluida: true },
    { id: 5, titulo: 'Desenhar protótipo UI', responsavel: 'Daniel', prioridade: 'baixa', concluida: false },
    { id: 6, titulo: 'Configurar servidor', responsavel: 'Eduardo', prioridade: 'alta', concluida: false }
  ];

  get totalTarefas(): number {
    return this.tarefas.length;
  }

  get totalConcluidas(): number {
    return this.tarefas.filter(t => t.concluida).length;
  }

  get totalPendentes(): number {
    return this.tarefas.filter(t => !t.concluida).length;
  }

  alternarStatus(id: number): void {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) {
      tarefa.concluida = !tarefa.concluida;
    }
  }
}
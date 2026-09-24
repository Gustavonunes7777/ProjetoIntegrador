import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Produto {
  id: number;
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-ex12',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ex12.html',
  styleUrls: ['./ex12.css']
})
export class Ex12Component {
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', quantidade: 5 },
    { id: 2, nome: 'Mouse', quantidade: 2 }
  ];

  novoNome: string = '';
  novaQuantidade: number | null = null;
  mensagemErro: string = '';

  cadastrarProduto(): void {
    if (!this.novoNome || this.novoNome.trim() === '') {
      this.mensagemErro = 'Preencha o nome do produto.';
      return;
    }

    if (this.novaQuantidade === null || this.novaQuantidade < 0) {
      this.mensagemErro = 'A quantidade deve ser igual ou maior que zero.';
      return;
    }

    const novoId = this.produtos.length > 0 
      ? Math.max(...this.produtos.map(p => p.id)) + 1 
      : 1;

    const novoProduto: Produto = {
      id: novoId,
      nome: this.novoNome.trim(),
      quantidade: Number(this.novaQuantidade)
    };

    this.produtos.push(novoProduto);

    // Limpa os campos e a mensagem de erro
    this.novoNome = '';
    this.novaQuantidade = null;
    this.mensagemErro = '';
  }

  excluirProduto(id: number): void {
    this.produtos = this.produtos.filter(p => p.id !== id);
  }
}
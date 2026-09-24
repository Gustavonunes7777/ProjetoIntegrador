import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}

@Component({
  selector: 'app-ex10',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex10.html',
  styleUrls: ['./ex10.css']
})
export class Ex10Component {
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado Mecânico', preco: 250.00, quantidade: 8, promocao: true },
    { id: 2, nome: 'Mouse Óptico', preco: 80.50, quantidade: 15, promocao: false },
    { id: 3, nome: 'Monitor 24"', preco: 899.90, quantidade: 4, promocao: true },
    { id: 4, nome: 'Headset Gamer', preco: 199.00, quantidade: 2, promocao: false },
    { id: 5, nome: 'Webcam Full HD', preco: 150.00, quantidade: 6, promocao: false }
  ];

  alternarPromocao(produto: Produto): void {
    produto.promocao = !produto.promocao;
  }
}
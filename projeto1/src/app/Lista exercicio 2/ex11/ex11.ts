import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-ex11',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex11.html',
  styleUrls: ['./ex11.css']
})
export class Ex11Component {
  somenteDisponiveis: boolean = false;

  produtos: Produto[] = [
    { id: 1, nome: 'Teclado Mecânico', preco: 250.0, quantidade: 8 },
    { id: 2, nome: 'Mouse Gamer', preco: 120.0, quantidade: 0 },
    { id: 3, nome: 'Monitor 24"', preco: 899.9, quantidade: 3 },
    { id: 4, nome: 'Headset Stereo', preco: 180.0, quantidade: 0 },
    { id: 5, nome: 'Mousepad XL', preco: 45.0, quantidade: 12 }
  ];

  alternarFiltro(): void {
    this.somenteDisponiveis = !this.somenteDisponiveis;
  }
}
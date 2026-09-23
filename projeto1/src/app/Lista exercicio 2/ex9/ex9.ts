import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-ex9',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex9.html',
  styleUrls: ['./ex9.css']
})
export class Ex9Component {
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado Mecânico', preco: 250.00, quantidade: 8 },
    { id: 2, nome: 'Mouse Óptico', preco: 80.50, quantidade: 3 },
    { id: 3, nome: 'Monitor 24"', preco: 899.90, quantidade: 4 },
    { id: 4, nome: 'Headset Gamer', preco: 199.00, quantidade: 0 },
    { id: 5, nome: 'Webcam Full HD', preco: 150.00, quantidade: 6 }
  ];
}

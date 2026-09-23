import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex4.html',
  styleUrls: ['./ex4.css']
})
export class Ex4Component {
  nomeProduto: string = 'Teclado';
  quantidadeEstoque: number = 5;

  adicionarEstoque(): void {
    this.quantidadeEstoque++;
  }

  removerEstoque(): void {
    if (this.quantidadeEstoque > 0) {
      this.quantidadeEstoque--;
    }
  }
}
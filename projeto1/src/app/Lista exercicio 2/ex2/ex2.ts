import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex2.html',
  styleUrls: ['./ex2.css']
})
export class Ex2Component {
  usuarioLogado: boolean = false;

  alternarStatus(): void {
    this.usuarioLogado = !this.usuarioLogado;
  }
}

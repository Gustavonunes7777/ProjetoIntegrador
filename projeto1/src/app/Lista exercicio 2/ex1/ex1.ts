import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex1.html',
  styleUrls: ['./ex1.css']
})
export class Ex1Component {
  mensagemVisivel: boolean = false;

  alternarMensagem(): void {
    this.mensagemVisivel = !this.mensagemVisivel;
  }
}
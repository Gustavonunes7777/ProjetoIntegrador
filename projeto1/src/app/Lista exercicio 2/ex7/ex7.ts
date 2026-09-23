import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex7',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex7.html',
  styleUrls: ['./ex7.css']
})
export class Ex7Component {
  disciplinas: string[] = [
    'Matemática',
    'História',
    'Programação Web',
    'Estrutura de Dados',
    'Física',
    'Banco de Dados'
  ];
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  templateUrl: './exercicio1.component.html',
  styleUrls: ['./exercicio1.component.css']
})
export class Exercicio1Component {
  nome: string = 'Gustavo Silveira Nunes';
  idade: number = 25;
  curso: string = 'Engenharia de Software';
}
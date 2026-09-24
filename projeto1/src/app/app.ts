import { Component } from '@angular/core';
import { Exercicio2Module } from './Lista exercicio 2/exercicio2-module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ Exercicio2Module ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'projeto1';
}
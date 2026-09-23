import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main style="padding: 20px; font-family: sans-serif;">
      <h1>Lista de Exercícios Angular</h1>
      <p>Servidor ativo e pronto para os testes.</p>
    </main>
  `
})
export class AppComponent {
  title = 'projeto1';
}
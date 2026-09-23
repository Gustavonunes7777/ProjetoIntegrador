import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex6Component } from './ex6';

describe('Ex6Component', () => {
  let component: Ex6Component;
  let fixture: ComponentFixture<Ex6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Ex6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve remover o último nome ao chamar removerUltimo()', () => {
    const qtdInicial = component.nomes.length;
    component.removerUltimo();
    expect(component.nomes.length).toBe(qtdInicial - 1);
  });

  it('deve limpar a lista ao chamar limparLista()', () => {
    component.limparLista();
    expect(component.nomes.length).toBe(0);
  });

  it('deve exibir "Nenhum nome cadastrado" quando a lista estiver vazia', () => {
    component.limparLista();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.mensagem-vazia')?.textContent).toContain('Nenhum nome cadastrado');
  });

  it('deve restaurar a lista inicial ao chamar restaurarLista()', () => {
    component.limparLista();
    expect(component.nomes.length).toBe(0);

    component.restaurarLista();
    expect(component.nomes.length).toBeGreaterThan(0);
  });
});
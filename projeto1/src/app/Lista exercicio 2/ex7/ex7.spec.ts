import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex7Component } from './ex7';

describe('Ex7Component', () => {
  let component: Ex7Component;
  let fixture: ComponentFixture<Ex7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Ex7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve possuir pelo menos 6 disciplinas na lista', () => {
    expect(component.disciplinas.length).toBeGreaterThanOrEqual(6);
  });

  it('deve aplicar as classes ngClass corretamente nos elementos', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const itens = compiled.querySelectorAll('.item-disciplina');

    expect(itens[0].classList.contains('linha-par')).toBe(true);
    expect(itens[0].classList.contains('primeira-disciplina')).toBe(true);

    expect(itens[1].classList.contains('linha-impar')).toBe(true);

    const ultimoIndex = component.disciplinas.length - 1;
    expect(itens[ultimoIndex].classList.contains('ultima-disciplina')).toBe(true);
  });
});
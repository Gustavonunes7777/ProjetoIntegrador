import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex5Component } from './ex5';

describe('Ex5Component', () => {
  let component: Ex5Component;
  let fixture: ComponentFixture<Ex5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Ex5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve possuir pelo menos 5 nomes na lista inicial', () => {
    expect(component.nomes.length).toBeGreaterThanOrEqual(5);
  });

  it('deve renderizar a quantidade correta de itens na lista', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const itens = compiled.querySelectorAll('.item-nome');
    expect(itens.length).toBe(component.nomes.length);
  });

  it('deve identificar o primeiro elemento com "Primeiro da lista"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const primeiro = compiled.querySelector('.badge-primeiro');
    expect(primeiro?.textContent).toContain('Primeiro da lista');
  });

  it('deve identificar o último elemento com "Último da lista"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const ultimo = compiled.querySelector('.badge-ultimo');
    expect(ultimo?.textContent).toContain('Último da lista');
  });
});
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex8Component } from './ex8';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

describe('Ex8Component', () => {
  let component: Ex8Component;
  let fixture: ComponentFixture<Ex8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Ex8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve possuir pelo menos 5 produtos na lista', () => {
    expect(component.produtos.length).toBeGreaterThanOrEqual(5);
  });

  it('deve calcular e apresentar os valores formatados corretamente na tabela', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const linhas = compiled.querySelectorAll('tbody tr');
    expect(linhas.length).toBe(component.produtos.length);
  });
});
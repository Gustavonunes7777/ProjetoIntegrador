import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex10Component } from './ex10';

describe('Ex10Component', () => {
  let component: Ex10Component;
  let fixture: ComponentFixture<Ex10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Ex10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve alternar o estado de promoção ao chamar alternarPromocao()', () => {
    const produto = component.produtos[0];
    const estadoInicial = produto.promocao;

    component.alternarPromocao(produto);
    expect(produto.promocao).toBe(!estadoInicial);

    component.alternarPromocao(produto);
    expect(produto.promocao).toBe(estadoInicial);
  });

  it('deve exibir o badge de promoção apenas se o produto estiver em promoção', () => {
    component.produtos = [
      { id: 1, nome: 'Item Promo', preco: 100, quantidade: 5, promocao: true },
      { id: 2, nome: 'Item Normal', preco: 50, quantidade: 2, promocao: false }
    ];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const badges = compiled.querySelectorAll('.badge-promo');

    expect(badges.length).toBe(1);
    expect(badges[0].textContent).toContain('Produto em promoção');
  });
});
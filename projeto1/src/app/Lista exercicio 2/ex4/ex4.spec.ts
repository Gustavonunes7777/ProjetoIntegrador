import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex4Component } from './ex4';

describe('Ex4Component', () => {
  let component: Ex4Component;
  let fixture: ComponentFixture<Ex4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Ex4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar com o produto Teclado e estoque 5', () => {
    expect(component.nomeProduto).toBe('Teclado');
    expect(component.quantidadeEstoque).toBe(5);
  });

  it('deve adicionar uma unidade ao estoque', () => {
    component.adicionarEstoque();
    expect(component.quantidadeEstoque).toBe(6);
  });

  it('deve remover uma unidade sem permitir estoque negativo', () => {
    component.quantidadeEstoque = 1;
    component.removerEstoque();
    expect(component.quantidadeEstoque).toBe(0);

    component.removerEstoque();
    expect(component.quantidadeEstoque).toBe(0);
  });

  it('deve exibir "Produto disponível" quando a quantidade for maior que zero', () => {
    component.quantidadeEstoque = 3;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Produto disponível');
  });

  it('deve exibir "Produto sem estoque" quando a quantidade for zero', () => {
    component.quantidadeEstoque = 0;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Produto sem estoque');
  });
});
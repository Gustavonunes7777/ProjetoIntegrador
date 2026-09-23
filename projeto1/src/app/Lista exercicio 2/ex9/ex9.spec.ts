import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex9Component } from './ex9';

describe('Ex9Component', () => {
  let component: Ex9Component;
  let fixture: ComponentFixture<Ex9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Ex9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir "Sem estoque" com a classe sem-estoque quando a quantidade for zero', () => {
    component.produtos = [{ id: 1, nome: 'Item Teste', preco: 10, quantidade: 0 }];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const badge = compiled.querySelector('.status-badge');

    expect(badge?.textContent).toContain('Sem estoque');
    expect(badge?.classList.contains('sem-estoque')).toBe(true);
  });

  it('deve exibir "Estoque baixo" com a classe estoque-baixo quando quantidade estiver entre 1 e 5', () => {
    component.produtos = [{ id: 1, nome: 'Item Teste', preco: 10, quantidade: 3 }];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const badge = compiled.querySelector('.status-badge');

    expect(badge?.textContent).toContain('Estoque baixo');
    expect(badge?.classList.contains('estoque-baixo')).toBe(true);
  });

  it('deve exibir "Estoque disponível" com a classe estoque-disponivel quando quantidade for maior que 5', () => {
    component.produtos = [{ id: 1, nome: 'Item Teste', preco: 10, quantidade: 10 }];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const badge = compiled.querySelector('.status-badge');

    expect(badge?.textContent).toContain('Estoque disponível');
    expect(badge?.classList.contains('estoque-disponivel')).toBe(true);
  });
});
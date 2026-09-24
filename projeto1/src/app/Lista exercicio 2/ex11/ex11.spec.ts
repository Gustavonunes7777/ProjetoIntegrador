import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex11Component } from './ex11';

describe('Ex11Component', () => {
  let component: Ex11Component;
  let fixture: ComponentFixture<Ex11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Ex11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve iniciar exibindo todos os produtos (somenteDisponiveis = false)', () => {
    expect(component.somenteDisponiveis).toBe(false);
  });

  it('deve alternar a propriedade somenteDisponiveis', () => {
    component.alternarFiltro();
    expect(component.somenteDisponiveis).toBe(true);

    component.alternarFiltro();
    expect(component.somenteDisponiveis).toBe(false);
  });

  it('deve ocultar itens sem estoque quando somenteDisponiveis for true', () => {
    component.somenteDisponiveis = true;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const itens = compiled.querySelectorAll('.item-produto');
    // Deve exibir apenas os 3 produtos com quantidade > 0
    expect(itens.length).toBe(3);
  });
});
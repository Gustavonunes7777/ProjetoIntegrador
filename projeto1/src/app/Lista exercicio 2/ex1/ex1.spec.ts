import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex1Component } from './ex1';

describe('Ex1Component', () => {
  let component: Ex1Component;
  let fixture: ComponentFixture<Ex1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Ex1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve iniciar com mensagemVisivel como false', () => {
    expect(component.mensagemVisivel).toBe(false);
  });

  it('deve alternar a visibilidade da mensagem ao chamar alternarMensagem()', () => {
    component.alternarMensagem();
    expect(component.mensagemVisivel).toBe(true);

    component.alternarMensagem();
    expect(component.mensagemVisivel).toBe(false);
  });

  it('deve exibir a mensagem no DOM quando mensagemVisivel for true', () => {
    component.mensagemVisivel = true;
    fixture.componentRef.changeDetectorRef.detectChanges();

    const elementoCompilado = fixture.nativeElement as HTMLElement;
    expect(elementoCompilado.querySelector('.mensagem')?.textContent).toContain('Bem-vindo ao sistema');
  });
});
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex2Component } from './ex2';

describe('Ex2Component', () => {
  let component: Ex2Component;
  let fixture: ComponentFixture<Ex2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Ex2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve iniciar com usuarioLogado como false', () => {
    expect(component.usuarioLogado).toBe(false);
  });

  it('deve alternar o status ao chamar alternarStatus()', () => {
    component.alternarStatus();
    expect(component.usuarioLogado).toBe(true);

    component.alternarStatus();
    expect(component.usuarioLogado).toBe(false);
  });

  it('deve exibir "Acesso não autorizado" quando usuarioLogado for false', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Acesso não autorizado');
  });

  it('deve exibir "Usuário autenticado" quando usuarioLogado for true', () => {
    component.usuarioLogado = true;
    fixture.componentRef.changeDetectorRef.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Usuário autenticado');
  });
});
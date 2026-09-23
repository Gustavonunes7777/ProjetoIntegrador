import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex3Component } from './ex3';

describe('Ex3Component', () => {
  let component: Ex3Component;
  let fixture: ComponentFixture<Ex3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Ex3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve aumentar a idade', () => {
    component.idade = 10;
    component.aumentarIdade();
    expect(component.idade).toBe(11);
  });

  it('deve diminuir a idade sem permitir valores negativos', () => {
    component.idade = 1;
    component.diminuirIdade();
    expect(component.idade).toBe(0);

    component.diminuirIdade();
    expect(component.idade).toBe(0);
  });

  it('deve classificar como Criança para idade menor que 12', () => {
    component.idade = 8;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Criança');
  });

  it('deve classificar como Adolescente para idade entre 12 e 17', () => {
    component.idade = 15;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Adolescente');
  });

  it('deve classificar como Adulto para idade entre 18 e 59', () => {
    component.idade = 30;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Adulto');
  });

  it('deve classificar como Idoso para idade a partir de 60', () => {
    component.idade = 65;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Idoso');
  });
});
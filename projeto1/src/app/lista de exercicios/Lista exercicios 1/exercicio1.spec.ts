import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercicio1Component } from './exercicio1';

describe('Exercicio1Component', () => {
  let component: Exercicio1Component;
  let fixture: ComponentFixture<Exercicio1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Exercicio1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercicio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente antigo', () => {
    expect(component).toBeTruthy();
  });
});
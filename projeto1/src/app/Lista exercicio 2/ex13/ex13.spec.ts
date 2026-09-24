import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex13Component } from './ex13';

describe('Ex13Component', () => {
  let component: Ex13Component;
  let fixture: ComponentFixture<Ex13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Ex13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve iniciar com pelo menos 6 tarefas', () => {
    expect(component.tarefas.length).toBeGreaterThanOrEqual(6);
  });

  it('deve calcular corretamente os totais de tarefas', () => {
    const total = component.tarefas.length;
    const concluidas = component.tarefas.filter(t => t.concluida).length;
    const pendentes = component.tarefas.filter(t => !t.concluida).length;

    expect(component.totalTarefas).toBe(total);
    expect(component.totalConcluidas).toBe(concluidas);
    expect(component.totalPendentes).toBe(pendentes);
  });

  it('deve alternar o status da tarefa ao chamar alternarStatus()', () => {
    const tarefa = component.tarefas[0];
    const statusInicial = tarefa.concluida;

    component.alternarStatus(tarefa.id);
    expect(tarefa.concluida).toBe(!statusInicial);

    component.alternarStatus(tarefa.id);
    expect(tarefa.concluida).toBe(statusInicial);
  });
});
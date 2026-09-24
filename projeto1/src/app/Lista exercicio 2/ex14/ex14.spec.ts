import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex14Component, StatusProjeto } from './ex14';

describe('Ex14Component', () => {
  let component: Ex14Component;
  let fixture: ComponentFixture<Ex14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Ex14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve alternar a exibição de projetos concluídos', () => {
    expect(component.ocultarConcluidos).toBe(false);
    
    component.alternarFiltroConcluidos();
    expect(component.ocultarConcluidos).toBe(true);

    const temConcluido = component.projetosFiltrados.some(p => p.status === 'concluido');
    expect(temConcluido).toBe(false);
  });

  it('deve alterar o status de um projeto e marcar como entregue se for concluído', () => {
    const projeto = component.projetos.find(p => p.status !== 'concluido');
    expect(projeto).toBeDefined();

    if (projeto) {
      component.alterarStatus(projeto.id, 'concluido' as StatusProjeto);
      expect(projeto.status).toBe('concluido');
      expect(projeto.entregue).toBe(true);
    }
  });

  it('deve exibir a mensagem quando a lista de projetos filtrados estiver vazia', () => {
    component.projetos = [];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Nenhum projeto encontrado');
  });
});
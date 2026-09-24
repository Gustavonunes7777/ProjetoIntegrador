import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex12Component } from './ex12';
import { FormsModule } from '@angular/forms';

describe('Ex12Component', () => {
  let component: Ex12Component;
  let fixture: ComponentFixture<Ex12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Ex12Component, FormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir mensagem de erro se o nome estiver vazio', () => {
    component.novoNome = '';
    component.novaQuantidade = 5;
    component.cadastrarProduto();

    expect(component.mensagemErro).toBe('Preencha o nome do produto.');
  });

  it('deve exibir mensagem de erro se a quantidade for negativa', () => {
    component.novoNome = 'Mouse Pad';
    component.novaQuantidade = -1;
    component.cadastrarProduto();

    expect(component.mensagemErro).toBe('A quantidade deve ser igual ou maior que zero.');
  });

  it('deve cadastrar um novo produto com sucesso', () => {
    const qtdInicial = component.produtos.length;
    component.novoNome = 'Cadeira Gamer';
    component.novaQuantidade = 3;
    component.cadastrarProduto();

    expect(component.produtos.length).toBe(qtdInicial + 1);
    expect(component.novoNome).toBe('');
    expect(component.novaQuantidade).toBeNull();
    expect(component.mensagemErro).toBe('');
  });

  it('deve excluir um produto da lista', () => {
    const idParaExcluir = component.produtos[0].id;
    const qtdInicial = component.produtos.length;

    component.excluirProduto(idParaExcluir);

    expect(component.produtos.length).toBe(qtdInicial - 1);
    expect(component.produtos.find(p => p.id === idParaExcluir)).toBeUndefined();
  });
});
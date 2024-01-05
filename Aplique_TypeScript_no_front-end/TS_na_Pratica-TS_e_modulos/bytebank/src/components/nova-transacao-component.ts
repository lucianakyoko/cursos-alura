import Conta from "../types/Conta.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import { Transacao } from "../types/Transacao.js";
import SaldoComponent from "./saldo-component.js";


const elementoformulario = document.querySelector('.block-nova-transacao form') as HTMLFormElement;
elementoformulario.addEventListener('submit', function(event) {
  event.preventDefault();

  if(!elementoformulario.checkValidity()) {
    alert('Por favor, preencha todos os campos!');
    return;
  }
  
  const inputTipoTransacao = elementoformulario.querySelector('#tipoTransacao') as HTMLSelectElement;
  const inputValor = elementoformulario.querySelector('#valor') as HTMLInputElement;
  const inputData = elementoformulario.querySelector('#data') as HTMLInputElement;

  let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
  let valor: number = inputValor.valueAsNumber;
  let data : Date= new Date(inputData.value);


  const novaTransacao: Transacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data
  }

  Conta.registrarTransacao(novaTransacao);
  SaldoComponent.atualizar();
  elementoformulario.reset();
});

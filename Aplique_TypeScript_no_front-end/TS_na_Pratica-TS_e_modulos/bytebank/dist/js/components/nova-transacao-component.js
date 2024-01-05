import Conta from "../types/Conta.js";
import SaldoComponent from "./saldo-component.js";
const elementoformulario = document.querySelector('.block-nova-transacao form');
elementoformulario.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!elementoformulario.checkValidity()) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    const inputTipoTransacao = elementoformulario.querySelector('#tipoTransacao');
    const inputValor = elementoformulario.querySelector('#valor');
    const inputData = elementoformulario.querySelector('#data');
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    Conta.registrarTransacao(novaTransacao);
    SaldoComponent.atualizar();
    elementoformulario.reset();
});

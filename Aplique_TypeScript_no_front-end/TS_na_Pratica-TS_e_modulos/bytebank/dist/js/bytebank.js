let saldo = 3000;
const elementoSaldo = document.querySelector('.saldo-valor .valor');
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toString();
}
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
    if (tipoTransacao === 'Depósito') {
        saldo += valor;
    }
    else if (tipoTransacao === 'Transferência' || tipoTransacao === 'Pagamento de Boleto') {
        saldo -= valor;
    }
    else {
        alert('Tipo de transação inválido!');
        return;
    }
    elementoSaldo.textContent = saldo.toString();
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    elementoformulario.reset();
});

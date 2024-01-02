var saldo = 3000;
var elementoSaldo = document.querySelector('.saldo-valor .valor');
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toString();
}
var elementoformulario = document.querySelector('.block-nova-transacao form');
elementoformulario.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!elementoformulario.checkValidity()) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    var inputTipoTransacao = elementoformulario.querySelector('#tipoTransacao');
    var inputValor = elementoformulario.querySelector('#valor');
    var inputData = elementoformulario.querySelector('#data');
    var tipoTransacao = inputTipoTransacao.value;
    var valor = inputValor.valueAsNumber;
    var data = new Date(inputData.value);
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
    var novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    elementoformulario.reset();
});

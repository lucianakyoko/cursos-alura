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
    if (tipoTransacao === TipoTransacao.DEPOSITO) {
        saldo += valor;
    }
    else if (tipoTransacao === TipoTransacao.TRANSFERENCIA || tipoTransacao === TipoTransacao.PAGAMENTO_BOLETO) {
        saldo -= valor;
    }
    else {
        alert('Tipo de transação inválido!');
        return;
    }
    elementoSaldo.textContent = formatarMoeda(saldo);
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    elementoformulario.reset();
});

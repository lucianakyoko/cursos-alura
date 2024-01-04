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

  if(tipoTransacao === TipoTransacao.DEPOSITO) {
    saldo += valor;
  } else if(tipoTransacao === TipoTransacao.TRANSFERENCIA || tipoTransacao === TipoTransacao.PAGAMENTO_BOLETO) {
    saldo -= valor;
  } else {
    alert('Tipo de transação inválido!')
    return;
  }

  elementoSaldo.textContent = formatarMoeda(saldo);

  const novaTransacao: Transacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data
  }

  console.log(novaTransacao);

  elementoformulario.reset();
});

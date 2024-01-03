let saldo = 3000;

const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLElement;
if(elementoSaldo != null) {
  elementoSaldo.textContent = saldo.toString();
}

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

  let tipoTransacao: string = inputTipoTransacao.value;
  let valor: number = inputValor.valueAsNumber;
  let data : Date= new Date(inputData.value);

  if(tipoTransacao === 'Depósito') {
    saldo += valor;
  } else if(tipoTransacao === 'Transferência' || tipoTransacao === 'Pagamento de Boleto') {
    saldo -= valor;
  } else {
    alert('Tipo de transação inválido!')
    return;
  }

  elementoSaldo.textContent = saldo.toString();

  const novaTransacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data
  }

  console.log(novaTransacao);

  elementoformulario.reset();
});


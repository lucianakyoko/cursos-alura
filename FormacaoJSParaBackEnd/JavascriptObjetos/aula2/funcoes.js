const cliente = {
  nome: 'João',
  idade: 24,
  email: 'joao@firma.com',
  telefone:[
    '1155555000',
    '1144444000',
  ],
  saldo: 200,
  efetuaPagamento: function(valor) {
    if(valor > this.saldo) {
      console.log('saldo insuficiente');
    } else {
      this.saldo -= valor;
      console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`)
    }
  }
};

cliente.efetuaPagamento(25)
console.log(cliente.saldo)
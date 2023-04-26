const cliente = {
  nome: 'João',
  idade: 24,
  email: 'joao@firma.com',
  telefone:[
    '1155555000',
    '1144444000',
  ]
};

cliente.endereco = {
  rua: 'Rua Abdc',
  numero: 1337,
  apartamento: true,
  complemento: 'ap 934'
}

console.log(cliente['endereco'])
console.log(cliente.endereco)
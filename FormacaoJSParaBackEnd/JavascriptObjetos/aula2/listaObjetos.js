const cliente = {
  nome: 'João',
  idade: 24,
  email: 'joao@firma.com',
  telefone:[
    '1155555000',
    '1144444000',
  ]
};

cliente.enderecos = [
  {
    rua: 'Rua Abdc',
    numero: 1337,
    apartamento: true,
    complemento: 'ap 934'
  }
];

cliente.enderecos.push({
  rua: 'Rua Efgh',
  numero: 404,
  apartamento: false,
});

const listaApenasApartamento = cliente.enderecos.filter(endereco => endereco.apartamento === true)

console.log(listaApenasApartamento)
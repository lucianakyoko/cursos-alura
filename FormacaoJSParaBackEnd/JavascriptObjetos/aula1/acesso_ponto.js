const cliente = {
  nome: 'Andre',
  idade: 32,
  cpf: '112233141',
  email: 'andre@email.com'
};

console.log(`O nome do cliente é ${cliente.nome}. Este cliente tem ${cliente.idade} anos.`)
console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0,3)}`)
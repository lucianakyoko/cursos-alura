const cliente = {
  nome: 'Andre',
  idade: 32,
  cpf: '112233141',
  email: 'andre@email.com'
};

console.log(`O nome do cliente é ${cliente['nome']}. Este cliente tem ${cliente['idade']} anos.`)

const chaves = ['nome', 'idade', 'cpf', 'email', 'altura'];
chaves.forEach(chave => {
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
})
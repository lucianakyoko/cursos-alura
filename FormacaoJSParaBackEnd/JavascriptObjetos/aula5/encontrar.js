const clientes = require('./cliente.json');

function encontrar(lista, chave, valor) {
  return lista.find(item => item[chave].includes(valor));
}

const encontrato = encontrar(clientes, 'nome', 'Kirby');
const encontrato2 = encontrar(clientes, 'telefone', '1918820860');
console.log(encontrato2)
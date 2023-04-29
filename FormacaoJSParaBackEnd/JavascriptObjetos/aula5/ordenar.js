const clientes = require('./cliente.json');

function ordenar(lista, propriedade) {
  const resultado = lista.sort((a, b) => {
    if(a[propriedade] < b[propriedade]) {
      return -1;
    } 
    if(a[propriedade] > b[propriedade]) {
      return 1
    }

    return 0;
  })

  return resultado;
};

const ordenadoPorNome = ordenar(clientes, 'nome');
console.log(ordenadoPorNome)
const clientes = require('./cliente.json');

function filtrarApartamentosSemComplemento(clientes) {
  return clientes.filter(cliente => {
    return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty('complemento'))
  })
}

const filtrados = filtrarApartamentosSemComplemento(clientes)
console.log(filtrados)
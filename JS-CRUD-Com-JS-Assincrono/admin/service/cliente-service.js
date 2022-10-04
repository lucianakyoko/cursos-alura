const listaClientes = () => {
  return fetch(`http://localhost:3000/profile`)
    .then(resposta => resposta.json());
};

export const clienteService = {
  listaClientes,
}
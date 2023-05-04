function menorValor(arrayProdutos, posicaoInicial) {
  let indiceMaisBarato = posicaoInicial;
  
  for(let indiceAtual = posicaoInicial; indiceAtual < arrayProdutos.length; indiceAtual++) {
    if(arrayProdutos[indiceAtual].preco < arrayProdutos[indiceMaisBarato].preco) {
      indiceMaisBarato = indiceAtual;
    }
  }

  return indiceMaisBarato;
}

module.exports = menorValor;

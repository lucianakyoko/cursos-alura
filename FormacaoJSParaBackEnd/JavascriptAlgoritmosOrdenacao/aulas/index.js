const livros = require('./listaLivros');

let indiceMaisBarato = 0;

for(let indiceAtual = 0; indiceAtual < livros.length; indiceAtual++) {
  if(livros[indiceAtual].preco < livros[indiceMaisBarato].preco) {
    indiceMaisBarato = indiceAtual;
  }
}

console.log(`O livro mais barato custa R$${livros[indiceMaisBarato].preco},00. O titulo é ${livros[indiceMaisBarato].titulo}`)
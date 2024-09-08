/*
  13. Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
*/

function imprimeElementos(arr) {
  for (let elemento of arr) {
      console.log(elemento); // Imprime cada elemento do array
  }
}

const meuArray = ['a', 'b', 'c'];
imprimeElementos(meuArray);
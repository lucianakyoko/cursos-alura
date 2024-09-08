/*
  14. Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
*/

const listinha = ['banana', 'gatinho', 'brócolis'];

function imprimeIndiceEElemento(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`índice ${i}, elemento ${arr[i]}`);
  }
}

imprimeIndiceEElemento(listinha);
/*
  6. Crie uma função que receba dois arrays e os concatene em um único array.
*/

function concatArray (array1, array2) {
  return array1.concat(array2);
}

const lista1 = ['A', 'B', 'C'];
const lista2=['X', 'Y', 'z'];

const listaConcatenada = concatArray(lista1, lista2);
console.log(listaConcatenada)
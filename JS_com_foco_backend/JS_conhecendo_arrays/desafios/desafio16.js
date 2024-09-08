/*
  16. Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.
*/

const arrMenoresMaiores = [5, 37, 18, 59, 12, -5];

function imprimeMaiorEMenor(arr) {

  let maior = 0;
  let menor = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > maior) {
      maior = arr[i]
    }
    if (arr[i] < menor) {
      menor = arr[i]
    }
  }
  return `o maior número é ${maior} e o menor número é ${menor}`;
}

console.log(imprimeMaiorEMenor(arrMenoresMaiores));
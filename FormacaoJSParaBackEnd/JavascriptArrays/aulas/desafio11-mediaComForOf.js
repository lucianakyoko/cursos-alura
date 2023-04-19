/* Desafio 11: Média com for of:
  Calcule a média entre as seguintes notas usando o for of:
  10, 6.5, 8, 7.5
*/

const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

for(let nota of notas) {
  somaDasNotas += nota;
}

const mediaEntreNotas = somaDasNotas / notas.length;
console.log(`A média entre as notas é ${mediaEntreNotas}`);
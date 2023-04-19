/* Desafio 10: Média:
  Calcule a média entre as seguintes notas, usando o for:
  10, 6.5, 8, 7.5
*/

const notas = [10, 6.5, 8, 7.5];
let somaNotas = 0;

for(let i = 0; i < notas.length; i++) {
  somaNotas += notas[i];
}

const media = somaNotas / notas.length;
console.log(`A médias entre as notas é ${media}.`)
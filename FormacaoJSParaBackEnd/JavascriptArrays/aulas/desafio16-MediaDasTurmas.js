/* Desafio 16: médias das turmas:
  
  Com a média de todos os alunos de 3 salas, calcule a média geral de cada sala:

  const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
  const salaJava = [6, 5, 8, 9, 5, 6];
  const salaPython = [7, 3.5, 8, 9.5];

  Temos três salas representadas por listas e cada uma delas tem várias médias de alunos. Bora calcular a média geral de cada turma.
*/

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((a, nota) => {
    return  a + nota;
  }, 0);

  const media = somaDasNotas / notasDaSala.length;
  return media;
}

console.log(`A média da Sala JS é ${calculaMedia(salaJS)}`);
console.log(`A média da Sala Java é ${calculaMedia(salaJava)}`);
console.log(`A média da Sala Python é ${calculaMedia(salaPython)}`);
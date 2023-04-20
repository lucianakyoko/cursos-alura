/* Desafio 13: ponto extra:
  Um aluno recebeu um ponto extra nas suas notas. Adicione esse ponto nas notas da seguinte lista:
  10, 9.5, 8, 7, 6
*/

const notas = [10, 9.5, 8, 7, 6];
const notasAtualizadas = notas.map(nota => nota + 1 >= 10 ? 10 : nota + 1);

console.log(notasAtualizadas);
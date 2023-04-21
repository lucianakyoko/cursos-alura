/* Desafio 15: filtrando por nota:

  Depois de calcular a média dos alunos, precisamos mostrar quem está reprovado entre os alunos:

  Ana: 7
  Marcos: 4.5
  Maria: 8
  Mauro: 7,5
*/

const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const alunosReprovados = alunos.filter((_, indice) => medias[indice] < 7);

console.log(`Alunos reprovados: ${alunosReprovados}`)


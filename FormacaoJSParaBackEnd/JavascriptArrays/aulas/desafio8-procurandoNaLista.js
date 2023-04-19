/* Desafio 8: Procurando na lista:
  - Crie uma função que recebe como argumento o nome de um aluno.
  - Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice.
  - Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.

  Para este desafio, usaremos as mesmas listas da aula anterior:
  - 'João', 'Juliana', 'Caio', 'Ana'
  -  10, 8, 7.5, 9
*/

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];
const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
  if(listaDeAlunosEMedias[0].includes(aluno)) {
    const [alunos, medias] = listaDeAlunosEMedias;
    const indice = alunos.indexOf(aluno);
    const mediaAluno = medias[indice];

    console.log(`${aluno} tem a média ${mediaAluno}.`);
  } else {
    console.log('Aluno não encontrado!');
  }
}

exibeNomeENota('Juliana');

/* Desafio 7: Lista com 2 dimensões:
Foram fornecidas duas listas para nós. A primeira contém os nomes de quatro estudantes e a segunda possui suas respectivas médias:

'João', 'Juliana', 'Caio', 'Ana'
10, 8, 7.5, 9

Nosso objetivo é criar uma lista que contenha essas duas listas. Já adiantando: é possível uma lista conter outras listas. A seguir, vamos aprender como lidar com esse tipo de dado mais complexo.
*/

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];
console.log(`
  A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}.
  A nota dessa aluna é: ${listaDeAlunosEMedias[1][1]}
`);
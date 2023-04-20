/* Desafio 14: padronizando os nomes:
  Precisamos padronizar a lista de alunos para conter apenas letras maiúsculas.
  ana Julia, Caio vinicius, BIA silva

  Temos uma lista de strings em que os nomes não estão padronizados, alguns nomes estão com maiúsculas e outros estão com minúsculas. Vamos padronizar para ter maior consistência nos nossos dados.
*/

const nomes = ['ana Julia', 'Caio vinicius', 'BIA silva'];
const nomesPadronizados = nomes.map(nome => nome.toUpperCase());

console.log(nomesPadronizados);
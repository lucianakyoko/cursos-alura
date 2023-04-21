/* Desafio 18: removendo duplicatas:
  Um professor acidentalmente adicionou nomes repetidos na lista de chamada:

  Ana, Clara, Maria, Maria, João, João, João

  Remova os nomes repetidos, deixando apenas um de cada.
*/

const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João'];
const meuSet = new Set(nomes);

console.log(meuSet);
console.log(nomes);
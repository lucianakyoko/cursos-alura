/* Desafio 5: Atualizando elemento:
Temos que criar uma lista de chamada com os seguintes alunos:
João, Ana, Caio, Lara, Marjorie, Leo

Porém, Ana e Caio mudaram de escola e o Rodrigo entrou nessa sala. 
Nosso desafio será atualizar a lista de chamada, removendo os nomes de Ana e Caio, e inserindo Rodrigo.
*/

const alunos = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];
//alunos.splice(1, 2);
//alunos.push('Rodrigo');
alunos.splice(1, 2, 'Rodrigo')
console.log(alunos)
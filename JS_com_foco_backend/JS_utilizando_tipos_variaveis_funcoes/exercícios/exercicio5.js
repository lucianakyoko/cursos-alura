/* 
  5. Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloc e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.
*/

var toFora = 'tô fora';

if(2 < 10) {
  var toDentro = 'tô dentro';
  console.log(toFora);
}

console.log(toDentro);

let estouFora = 'Estou fora';

if(12 < 13) {
  let estouDentro = 'Estou dentro';
  console.log(estouFora);
};

console.log(estouDentro);




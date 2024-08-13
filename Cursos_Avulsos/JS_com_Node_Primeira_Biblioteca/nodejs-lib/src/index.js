const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
  quebraEmParagrafos(texto);
  // verificaPalavrasDuplicadas(texto);
});

//criar um array com as palavras
//contar as ocorrencias
//montar um objeto com o resultado

// {
//   "web": 5,
//   "computador":4
// }

function quebraEmParagrafos(texto) {
  const paragrafos = texto.toLowerCase().split('\n');
  const contagem = paragrafos.flatMap(paragrafo => {
    if(!paragrafo) return [];
    return verificaPalavrasDuplicadas(paragrafo);
  });


  console.log(contagem)
}

function limpaPalavras(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function verificaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(' ');
  const resultado = {};
  // objeto[propriedade] = valor;
  listaPalavras.forEach(palavra => {
    if(palavra.length >= 3) {
      const palavraLimpa = limpaPalavras(palavra);
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
    };
  });
  return resultado;
}
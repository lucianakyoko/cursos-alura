const fs = require('fs');
const trataErros = require('./erros/funcoesErro');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
  try {
    if(erro) throw erro;
    contaPalavras(texto);
  } catch (erro) {
    trataErros(erro)
  } 
});

function contaPalavras(texto) {
  const paragrafos = extraiParagrafos(texto);
  const contagem = paragrafos.flatMap(paragrafo => {
    if(!paragrafo) return [];
    return verificaPalavrasDuplicadas(paragrafo);
  });

  console.log(contagem)
}

function extraiParagrafos(texto) {
  return texto.toLowerCase().split('\n');
}


function limpaPalavras(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function verificaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(' ');
  const resultado = {};

  listaPalavras.forEach(palavra => {
    if(palavra.length >= 3) {
      const palavraLimpa = limpaPalavras(palavra);
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
    };
  });
  return resultado;
}
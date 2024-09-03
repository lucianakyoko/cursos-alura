# Anotações do curso - JavaScript com Node.js: criando sua primeira biblioteca

---

## Arquivos iniciais
- [pasta zip](https://github.com/alura-cursos/3709-nodejs-lib/archive/refs/heads/arquivos-iniciais.zip)

- [Repositório](https://github.com/alura-cursos/3709-nodejs-lib/tree/arquivos-iniciais/arquivos)

---

## Links úteis
- Documentação do Node.js: [process.argv](https://nodejs.org/api/process.html#processargv).
- Documentação do Node.js: [fs.readFile](https://nodejs.org/api/fs.html#fsreadfilepath-options-callback).
- Documentação do MDN: [flatMap](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap).
- Documentação do MDN: [objeto Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

---

## O que é o Node.js
O que exatamente é o Node e por que ele é tão importante? Para entender isso, é necessário recordar que todo programa precisa de um ambiente de execução para funcionar, independentemente da linguagem utilizada. No caso do JavaScript, existem dois ambientes principais: os navegadores e o runtime, como é conhecido, que inclui o Node, bem como seus concorrentes, como o Dyno e o BAN.

Optamos pelo Node.js entre BAN e Dyno porque é a opção mais antiga, amplamente usada, adotada e testada. Ele se tornou quase sinônimo de JavaScript para o back-end, embora seja apenas uma das opções disponíveis.

Contudo, é a escolha mais significativa e utilizada como ambiente de execução (runtime) do JavaScript fora do navegador. Esse ambiente já inclui diversas funções prontas para uso, como o console.log, que são familiares desde os primeiros passos na programação.

A biblioteca que contém a palavra console e o método log já vem implementada por padrão tanto nos navegadores quanto no Node.js. Essa implementação padrão é tão comum e amplamente utilizada que podemos acessá-la facilmente nos navegadores ou no Node.js através do terminal.

Esse fato nos permite utilizar várias funções sem a necessidade de instalar nada, pois elas estão disponíveis por padrão, tanto nos navegadores quanto no Node.js. Em resumo, um ambiente de execução inclui não apenas o código base, mas também as bibliotecas necessárias para seu funcionamento.

---

## Método required
Esse método tenta obter o conteúdo de um arquivo e executá-lo de alguma maneira. Portanto, ele só pode ser usado com módulos.
Ao executar o comando no terminal, notamos a menção da palavra módulos. Isso significa que o require() só funciona com arquivos JavaScript ou similares, como arquivos JSON. Portanto, para resolver esse problema, precisaremos adotar uma abordagem diferente.

Para resolver essa questão, precisamos instruir o JavaScript a entender que o caminho de arquivo que estamos passando se refere a um texto, e então capturar essa string do texto.

---

## Caminho absoluto vs Relativo
**Caminho absoluto**
Chamamos de caminho absoluto quando a localização de um arquivo ou pasta é especificado a partir do diretório-raiz do sistema operacional. Por exemplo:
```
#caminho para um diretório (a última `/` é opcional)
/home/juliana/Documents/alura/projeto-js

#caminho para um arquivo dentro do diretório
/home/juliana/Documents/alura/projeto-js/index.js
```

**Caminho relativo**
Um caminho relativo para um diretório ou arquivo é definido a partir de sua relação com o pwd, ou seja, o present working directory (diretório de trabalho atual). Na linha de comando, pwd também é o comando print working directory (imprimir o diretório de trabalho), que usamos justamente para saber onde na estrutura do sistema operacional se encontra o diretório em que estamos.

Veja no exemplo abaixo uma representação em árvore de um diretório, como o do curso em que estamos trabalhando (o diretório node_modules foi excluído para facilitar a leitura, pois é muito extenso):
```
/home/juliana/Documents/nodejs-lib
.
├── arquivos
│   ├── texto-aprendizado.txt
│   ├── texto-kanban.txt
│   └── texto-web.txt
├── lib
│   ├── index.js
```

Na representação acima, consideramos como pwd o diretório nodejs-lib. Então, o caminho relativo do arquivo texto-web.txt, por exemplo, seria ```./arquivos/texto-web.txt```, e o caminho absoluto seria ```/home/juliana/Documents/texto-web.txt```.

Na estrutura de diretórios, o ```.``` representa “aqui”. Quando queremos sair do diretório atual e “voltar” um nível, utilizamos ```..```. Por exemplo:
```
/home/juliana/Documents/nodejs-lib
.
├── arquivos
│   ├── texto-aprendizado.txt
│   ├── texto-kanban.txt
│   └── texto-web.txt
├── lib
│   ├── index.js
```

Se quisermos referenciar algum dos arquivos de texto no arquivo ./src/index.js, devemos fazer da seguinte forma:
```
// arquivo ./lib/index.js

const stringCaminhoTexto = ‘../arquivos/texto-web.txt’;
``` 

Usamos o ```..``` para “subir um nível” na hierarquia de diretórios para só então “entrar” no diretório que queremos. Dessa forma, não precisamos referenciar o caminho absoluto de todos os arquivos quando fizermos importações de módulos; o que também funcionaria, mas não é tão prático.

Outra diferença importante entre caminho absoluto e relativo é com relação à execução de programas a partir da linha de comando. Por exemplo, usando a árvore de diretórios acima, o comando ```node index.js``` só funcionaria caso o diretório atual (pwd) no terminal já fosse ```/home/juliana/Documents/nodejs-lib/lib```. Por outro lado, o comando ```node /home/juliana/Documents/nodejs-lib/lib/index.js```funcionaria independentemente do diretório atual no terminal, pois o Node.js vai acessar o arquivo ```index.js``` a partir de seu caminho absoluto.

O terminal é uma ferramenta poderosa. Além de executar comandos e rodar programas, com ele podemos fazer tudo que fazemos com as janelas e ícones do sistema operacional como navegar entre diretórios (ou pastas), criar arquivos, mudá-los de lugar e renomeá-los, entre outras tarefas.

---

## caracteres de quebra de linha
Durante esta aula vimos um caractere diferente, o \n. Caracteres precedidos pela barra \ são chamados “caracteres de escape” e deixam de ter significado literal (por exemplo, a letra N) e passam a significar instruções específicas dadas ao interpretador do texto. Por exemplo, inserir uma quebra de linha, inserir caracteres especiais, tabulação e espaços etc.

Alguns exemplos de caracteres de escape:

```\'``` insere aspas simples
```\"``` insere aspas duplas
```\\``` insere barra invertida
```\n``` insere nova linha (new line)
```\r``` insere nova linha (carriage return)
```\t``` insere tabulação
```\b``` insere backspace

Para finalizar “fim de linha” ou “quebra de linha”, existem alguns caracteres diferentes e diferentes sistemas operacionais utilizam estes caracteres de formas diferentes ao interpretarem textos.

- Em sistemas Unix e Unix-like (como o Linux) o caractere usado é ```\n``` (new line).
- ```\n``` também é caractere de escape padrão para quebra de linha em todas as linguagens baseadas em C (é o caso do JavaScript).
- Em sistemas Windows, a quebra de linha usa o caractere ```\r```, ou carriage return. O nome vem das antigas máquinas de escrever em que o posicionamento da peça responsável por imprimir as letras (carro ou carriage em inglês) era feito manualmente a cada fim de linha.
- Em antigos sistemas Mac (anteriores ao macOS X) o padrão era ```\r\n```, nessa ordem.
- A diferença não é apenas no caractere: \n representa o fim de uma linha, o que para Linux e Mac é o equivalente a começar uma nova linha de texto. Já ```\r``` move o cursor para o início de uma nova linha (como a máquina de escrever).

É muito importante entender a forma como os sistemas operacionais e as linguagens “encodam” (ou interpretam) os caracteres em uma string para transformá-los em texto, pois as diferenças podem causar bugs de interpretação de caracteres onde menos se espera.

---

## JS_com_Node_Primeira_Biblioteca
Uma das primeiras coisas que percebemos ao começarmos a programar é que praticamente qualquer aviso de erro será acompanhado de uma longa sequência de texto difícil de compreender.

Por exemplo, se tentarmos usar console.log() em alguma variável que não existe em nosso código:

```
node teste.js

file:///home/juliana/Documents/nodejs-lib/teste.js:3
console.log(nome);
            ^

ReferenceError: nome is not defined
    at file:///home/juliana/Documents/nodejs-lib/teste.js:3:13
    at ModuleJob.run (node:internal/modules/esm/module_job:218:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:329:24)
    at async loadESM (node:internal/process/esm_loader:28:7)
    at async handleMainPromise (node:internal/modules/run_main:113:12)

Node.js v20.11.0
```

Boa parte de todo esse texto é representado pela **stack trace**, ou seja, pelo “rastro” de comandos executados pelo interpretador ao enviarmos o comando node teste.js.

No caso, para que o Node.js execute corretamente o código dentro de um arquivo .js de nosso projeto, ele utiliza por sua vez diversos códigos (funções) que estão dentro de seu próprio código-fonte. Cada parte do código necessário para que o Node.js interprete corretamente o nosso próprio código pode se encontrar em arquivos ou módulos diferentes, e cada comando executado “guarda” este caminho desde o ponto inicial até o último.

Podemos analisar qualquer linha do erro acima e acompanhar este processo:

```
at file:///home/juliana/Documents/nodejs-lib/teste.js:3:13
```

O ponto inicial de chamada do código problemático: arquivo teste.js que está dentro da nossa pasta de projeto, na linha 3 e coluna 13.

```
at ModuleJob.run (node:internal/modules/esm/module_job:218:25)
```

Este erro se “propagou” para o método ModuleJob.run interno do Node.js. Podemos saber que já não estamos mais na pasta do nosso projeto pois a stack trace fornece exatamente o módulo, linha e coluna para onde o erro se propagou.

Assim continua até o último ponto, a função interna do Node.js ```handleMainPromise```.

Quando um erro ocorre, todo esse caminho percorrido pelo comando é passado para dentro de um objeto Error para que possa ser acessado e consultado de alguma forma, por exemplo, exibido no terminal. Dessa forma, podemos usar esse “mapa” para entender o caminho que o processamento percorreu.

Nem todos os avisos de erro são gerados da mesma forma: dependendo da origem, alguns erros são devolvidos pelo sistema operacional, outros pelo Node.js, outros podem ser gerados a partir de alguma biblioteca que estamos usando em nosso projeto. Porém, quase sempre eles seguem o mesmo padrão, apresentando o nome do erro, a descrição do erro e a stack trace.

[Link para leitura](https://www.alura.com.br/artigos/lidando-com-erros-node-js)

---

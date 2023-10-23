# ANOTAÇÕES - CURSO: NODE.JS - CRIANDO SUA PRIMEIRA BIBLIOTECA 

--- 

<p align="center">
  <a href="#-aula-1">Criando um projeto em Node.j</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-2">Carregamento de arquivos</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-3">Capturando links</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-4">Usando a linha de comando</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-5">Validando links</a> 

</p>

---

## 📌 AULA 1
### Criando um projeto em Node.js
#### gerenciando versões com NVM
Quando trabalhamos com mais de um projeto, é normal termos que gerenciar diversas versões de bibliotecas e ferramentas. A mesma coisa acontece com o Node.js, pois cada versão pode ou não dar suporte a determinada funcionalidade.

Para facilitar esse gerenciamento é possível usar os chamados containers e sua ferramenta principal, o Docker. Mas também existe uma outra opção para o Node.js, que é o Node Version Manager ou [NVM](https://github.com/nvm-sh/nvm#node-version-manager---).

Ler este [artigo](https://www.alura.com.br/artigos/descomplicando-o-trabalho-com-node) para aprender como instalar o NVM no computador e como usar suas funcionalidades para instalar versões diferentes do Node.js, alternar entre versões e outras funcionalidades.

#### o NPM e o YARN
Sempre que vamos trabalhar com um projeto em Node.js do zero, uma das primeiras coisas que fazemos é criar um arquivo **package.json** utilizando o comando ```npm init``` ou ```yarn init```; assim como para todas as instalações de libs externas utilizamos o comando ```npm install <nome do pacote>``` ou ```yarn add <nome do pacote>```.

Ambos são gerenciadores de pacotes, sendo que NPM é acrônimo de Node Package Manager, ou Gerenciador de Pacotes do Node.

Mas o que são exatamente estes gerenciadores?
Gerenciadores de pacotes são repositórios de código aberto nos quais devs disponibilizam soluções para o uso da comunidade. Estas soluções nada mais são do que programas que outras pessoas desenvolveram e que utilizamos para ganhar tempo no desenvolvimento de nosso próprio código, e vão desde libs (bibliotecas) pequenas e específicas até frameworks com vários recursos prontos. E um pacote é como chamamos o conjunto do código que determinada lib ou framework utiliza para executar.

Algumas dessas bibliotecas são criadas por times de desenvolvimento para resolver algum problema específico que tiveram que enfrentar. Depois elas são disponibilizadas para que outras pessoas com o mesmo contratempo aproveitem e também utilizem. Outras são disponibilizadas por empresas de software que utilizam as plataformas dos gerenciadores (o NPM e o YARN) para a distribuição de suas soluções de código. E sendo de código aberto, isso significa que você também pode criar e publicar a sua lib para outras pessoas baixarem e instalarem em seus projetos.

##### Instalação local vs global
Estes pacotes de código podem ser instalados localmente, estando disponíveis somente para o projeto no qual foi instalado através da pasta node_modules, e globalmente, sendo instalados em um diretório geral do NPM e ficando disponíveis para todos os projetos em seu computador, sem a necessidade de instalar separadamente em cada projeto.

Na maior parte das vezes, você vai utilizar a opção local, com os comandos ```npm install <nome do pacote>``` ou ```yarn add <nome do pacote>```, pois fica mais fácil fazer o gerenciamento de versão das libs que utilizamos e muitas vezes, um pacote que instalamos “puxa” um ou vários outros pacotes auxiliares que ele precisa para funcionar. O ideal é não poluir o diretório global com libs que poderão ser utilizadas em somente um projeto.

Algumas libs e frameworks mais complexas vão solicitar que a instalação seja feita globalmente para funcionar. Sempre vale a pena consultar a documentação de cada uma. Para fazer uma instalação global de pacotes, utilizamos os comandos ```npm install -g <nome do pacote>``` ou ```yarn add global <nome do pacote>```.

A recomendação é que a instalação de pacotes seja feita sempre localmente (sem o -g) e que a instalação global só seja feita em casos específicos - normalmente a documentação da ferramenta vai informar se isso é necessário.

O NPM e o YARN têm algumas pequenas diferenças nos comandos e na forma como lidam com os pacotes. Você pode ler a documentação do NPM e do YARN para ter mais informações sobre como os comandos funcionam em cada um.

#### o formato Markdown
O formato Markdown, com extensão .md, é uma linguagem de marcação para a escrita de textos com marcadores simples de formatação que são convertidos em HTML. Hoje em dia utilizamos recursos do Markdown em plataformas de comunicação e de streaming como o Slack e o Discord, além de ser a linguagem usada para arquivos README e em gerenciadores de conteúdo, como os blogs.

A vantagem do Markdown sobre o HTML é principalmente a legibilidade; os marcadores de formatação são simples e não prejudicam a leitura do texto, o que não acontece com um texto 100% formatado com tags HTML.

Ler a [documentação](https://www.markdownguide.org/getting-started/) completa do Markdown está disponível em inglês e também o [artigo](https://www.alura.com.br/artigos/como-trabalhar-com-markdown) sobre Markdown em português sobre este assunto.

#### ESM vs CJS
Existem duas formas de importar e exportar código em JavaScript, qual devemos utilizar e vários exemplos de código.

Ler [artigo](https://www.alura.com.br/artigos/guia-importacao-exportacao-modulos-javascript)

#### o que são dependências?
Hoje em dia é praticamente impossível desenvolver programas sem depender de bibliotecas ou frameworks desenvolvidos por outras pessoas e empresas. Para facilitar o processo de baixar o código necessário e manter registros sobre quais códigos externos são usados em um projeto, são utilizados os package managers (gerenciadores de pacotes) como o NPM no caso do Node.js.

Pacotes, módulos, dependências. Para o NPM são pacotes, porém no package.json são dependências. Qual a diferença entre todos esses termos, afinal?

**Módulos e pacotes**
Um módulo serve para encapsular uma determinada funcionalidade, normalmente uma ou mais funções, “escondendo” sua implementação do restante da aplicação e expondo somente o necessário para seu uso - por meio de uma função que pode ser exportada para outras partes do código, por exemplo.

Falamos com mais detalhes sobre o que são módulos neste artigo.

Pacotes é como nos referimos aos módulos que são ou estão instalados em uma aplicação.

**Dependências**
Como o próprio nome diz, implica depender de algo. No caso, o programa que está sendo executado depende de outros para funcionar.

Ou seja, usamos este termo para especificar quais são os pacotes dos quais um programa depende para funcionar. Então, quando falamos de dependências, estamos falando especificamente dos pacotes de terceiros que são utilizados por um programa.

Agora que esclarecemos um pouco mais os termos, você pode perceber que muitas vezes eles são utilizados de forma intercambiável.

---

## 📌 AULA 2 - 
### Carregamento de arquivos


---

## 📌 AULA 3 - 
### Capturando links

## 📌 AULA 4 - 
### Usando a linha de comando

## 📌 AULA 5 - 
### Validando links
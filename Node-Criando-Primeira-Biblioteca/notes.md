## Biblioteca
É um conjunto de códigos para executar tarefas específicas. Todo programa é constituído por partes menores, que são as bibliotecas. Elas podem ser escritas por nós ou por outras pessoas que enfrentaram problemas específicos, os quais também podemos encontrar.

## Entendendo o problema
Neste projeto, trabalharemos no contexto de um blog de programação, como a seção de artigos do site da Alura. Quase todo dia, novos artigos são publicados lá.

Os textos são escritos em Markdown, uma linguagem de marcação de sintaxe simplificada, ótima para formatar textos. Markdown é ideal para textos que precisam de formatação, listas, título, subtítulos, partes de código, links e imagens.
Essa linguagem é muito mais simples que a HTML e, no final do processo, pode ser convertida em HTML e exibida na tela. Ela também é utilizada para escrever os arquivos "README" no Github.

Todos os artigos do blog têm links clicáveis. Mas, com o passar do tempo, pode ser que um desses links saia do ar. Para gerenciar isso numa plataforma com milhares de arquivos com links, como é o nosso caso, vamos contar com a ajuda dos nossos computadores.
Vamos automatizar essa tarefa. É isso que aprenderemos a fazer durante nosso projeto: criaremos uma biblioteca que resolva este problema específico, capaz de acessar arquivos de texto em Markdown, capturar os links espalhados pelo texto e testá-los.

## Sobre gerenciamento de versões com NVM
Quando trabalhamos com mais de um projeto, é normal termos que gerenciar diversas versões de bibliotecas e ferramentas. A mesma coisa acontece com o Node.js, pois cada versão pode ou não dar suporte a determinada funcionalidade.

Para facilitar esse gerenciamento é possível usar os chamados containers e sua ferramenta principal, o Docker. Mas também existe uma outra opção para o Node.js, que é o Node Version Manager ou NVM.

## NPM e YARN
O NPM e o YARN têm algumas pequenas diferenças nos comandos e na forma como lidam com os pacotes.

Sempre que vamos trabalhar com um projeto em Node.js do zero, uma das primeiras coisas que fazemos é criar um arquivo package.json utilizando o comando ```npm init``` ou ```yarn init```; assim como para todas as instalações de libs externas utilizamos o comando npm install ```<nome do pacote>``` ou ```yarn add``` ```<nome do pacote>```.

Ambos são gerenciadores de pacotes, sendo que NPM é acrônimo de **Node Package Manager**, ou Gerenciador de Pacotes do Node.

Gerenciadores de pacotes são repositórios de código aberto nos quais devs disponibilizam soluções para o uso da comunidade. Estas soluções nada mais são do que programas que outras pessoas desenvolveram e que utilizamos para ganhar tempo no desenvolvimento de nosso próprio código, e vão desde libs (bibliotecas) pequenas e específicas até frameworks com vários recursos prontos. E um pacote é como chamamos o conjunto do código que determinada lib ou framework utiliza para executar.

Algumas dessas bibliotecas são criadas por times de desenvolvimento para resolver algum problema específico que tiveram que enfrentar. Depois elas são disponibilizadas para que outras pessoas com o mesmo contratempo aproveitem e também utilizem. Outras são disponibilizadas por empresas de software que utilizam as plataformas dos gerenciadores (o NPM e o YARN) para a distribuição de suas soluções de código. E sendo de código aberto, isso significa que você também pode criar e publicar a sua lib para outras pessoas baixarem e instalarem em seus projetos.

**Instalação:**
  - Localmente: pacotes de código podem ser instalados localmente, estando disponíveis somente para o projeto no qual foi instalado através da pasta ```node_modules```

  - globalmente: instalados em um diretório geral do NPM e ficando disponíveis para todos os projetos em seu computador, sem a necessidade de instalar separadamente em cada projeto.

Na maior parte das vezes, você vai utilizar a opção local, com os comandos npm install <nome do pacote> ou yarn add <nome do pacote>, pois fica mais fácil fazer o gerenciamento de versão das libs que utilizamos e muitas vezes, um pacote que instalamos “puxa” um ou vários outros pacotes auxiliares que ele precisa para funcionar. O ideal é não poluir o diretório global com libs que poderão ser utilizadas em somente um projeto.

Algumas libs e frameworks mais complexas vão solicitar que a instalação seja feita globalmente para funcionar. Sempre vale a pena consultar a documentação de cada uma. Para fazer uma instalação global de pacotes, utilizamos os comandos npm install -g <nome do pacote> ou yarn add global <nome do pacote>.

A recomendação é que a instalação de pacotes seja feita sempre localmente (sem o -g) e que a instalação global só seja feita em casos específicos - normalmente a documentação da ferramenta vai informar se isso é necessário.

## formato Markdown
O formato Markdown, com extensão .md, é uma linguagem de marcação para a escrita de textos com marcadores simples de formatação que são convertidos em HTML. Hoje em dia utilizamos recursos do Markdown em plataformas de comunicação e de streaming como o Slack e o Discord, além de ser a linguagem usada para arquivos README e em gerenciadores de conteúdo, como os blogs.

A vantagem do Markdown sobre o HTML é principalmente a legibilidade; os marcadores de formatação são simples e não prejudicam a leitura do texto, o que não acontece com um texto 100% formatado com tags HTML.

## Instalação de dependencias
  Para o projeto desenvolvido neste curso, usamos o terminal para fazer tudo do projeto, inclusive exibir nossa lista de links. Quando o terminal começa a ficar com muita informação, a tendência é que nos perdamos um pouco entre textos. Teremos dificuldade em encontrar nossos ```console.log```, por exemplo.

  Seria interessante separar as informações que queremos exibir no terminal. Assim, a visualização seria facilitada. Para isto, instalamos a biblioteca necessária para possibilitar que separemos textos por cor, adicionemos negrito, highlights ou underlines em algum dos textos para facilitar a identificação no terminal.

  Acessamos o https://www.npmjs.com/package/chalk, uma biblioteca pública do NPM chamada Chalk, que significa giz de cera em português. Nesse site, temos acesso a várias informações, como exemplos de uso, como instalar, documentação da biblioteca e versão.

  Durante a realização do curso, utilizamos a versão **5.0.1**
  No terminal, rodamos o comando:
  ```
  npm install chalk@5.0.1 --save-exact
  ```

  Depois de executar o comando, os arquivos do Chalk *serão puxados do repositório do *NPM para nosso terminal local. Se voltarmos à nossa IDE, veremos que a pasta "node_modules" foi baixada. Dentro dela há a pasta "chalk", com os arquivos da biblioteca.
  Além disso, recebemos os arquivos package-lock.json, que controla as dependências e suas versões, e package.json, na parte de dependências, com a informação da versão do Chalk instalada na linha 21 do código.

  As bibliotecas, muitas vezes, são desenvolvidas por pessoas, comunidades ou empresas para universalizar a solução de problemas comuns. No caso do Chalk, vamos adicionar cores e efeitos aos textos do terminal. E, dentro da página do Chalk no NPM, aprendemos a usar a biblioteca.

  ## Usando o chalk
  Sempre começaremos importando a biblioteca no projeto, com o código ```import chalk from 'chalk'```;. Depois, encontramos um ```console.log``` inicial de uso. Vamos inserir essas informações na primeira linha do código em "index.js", substituindo 'Hello world!' por 'olá mundo':

  ```
  import chalk from 'chalk';

  console.log(chalk.blue('olá mundo'));

  console.log('ola mundo');
  console.log('São geralmente recuperados a partir de um objeto [FileList] (https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/');
  console.log('São geralmente recuperados a partir de um objeto [FileList] (https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/');
  ```

## ESM vs CJS
Existem duas formas de importar e exportar código em JavaScript, qual devemos utilizar e vários exemplos de código.

[Ler este artigo](https://www.alura.com.br/artigos/guia-importacao-exportacao-modulos-javascript)


Quando programamos em Javascript com Node.js, muito provavelmente nosso código ficará espalhado por diversos arquivos que funcionarão separadamente. Um recurso possibilita que arquivos .js sejam "enxergados'' por outros arquivos
  - Um arquivo .js é entendido como um módulo independente e para trabalhar com esses módulos com o Node.js usamos as palavras-chave export e import. Para ter acesso a algum recurso definido em outro módulo .js, utilizamos export para disponibilizar este recurso, invocando-o no arquivo em que desejamos usá-lo com import.

  - O Node.js também trabalha com outro formato de exportação de módulos, conhecido como CommonJS ou CJS, que utiliza a função require() e o objeto global exports. O CJS é conhecido como a “forma do Node.js” fazer exportações e importações de módulos. Porém a partir do ES6 o JavaScript passou a contar com uma maneira unificada de trabalhar com módulos, o EMS, que utiliza import e export.



## Sobre dependencias
Hoje em dia é praticamente impossível desenvolver programas sem depender de bibliotecas ou frameworks desenvolvidos por outras pessoas e empresas. Para facilitar o processo de baixar o código necessário e manter registros sobre quais códigos externos são usados em um projeto, são utilizados os package managers (gerenciadores de pacotes) como o NPM no caso do Node.js.

Pacotes, módulos, dependências. Para o NPM são pacotes, porém no package.json são dependências.

  - **Módulos**: Um módulo serve para encapsular uma determinada funcionalidade, normalmente uma ou mais funções, “escondendo” sua implementação do restante da aplicação e expondo somente o necessário para seu uso - por meio de uma função que pode ser exportada para outras partes do código, por exemplo.

  - **Pacotes**: Pacotes é como nos referimos aos módulos que são ou estão instalados em uma aplicação.

  - **Dependencias**: Como o próprio nome diz, implica depender de algo. No caso, o programa que está sendo executado depende de outros para funcionar. Ou seja, usamos este termo para especificar quais são os pacotes dos quais um programa depende para funcionar. Então, quando falamos de dependências, estamos falando especificamente dos pacotes de terceiros que são utilizados por um programa.


## Documentacao
No dia a dia de desenvolvimento usamos muitos códigos que não somos nós quem escrevemos. Eles podem ser funções e métodos nativos do JavaScript ou até trechos de código pronto que importamos de libs externas para dentro dos nossos projetos, usando, por exemplo, o comando npm install <nome da lib>.

É por isso que a leitura da documentação é importante: por meio dela descobrimos como escrever o código para acessar os recursos de determinada biblioteca ou framework, com exemplos e casos de uso.
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

## Biblioteca fs
Para fazer com que o javascript acesse um arquivo, que está em algum lugar do computador, e importar esse conteúdo e considerando que isso é um problema relativamente comum e, para resolvê-lo, vamos aplicar uma biblioteca que já existe. O nome dela é FS (File System).

Nesse caso, não precisaremos usar o ```npm install```, porque FS é uma biblioteca nativa do Node.js. Ela também existe em outras linguagens, mas sempre com a mesma funcionalidade: possibilitar a interação entre linguagens de programação e arquivos do computador. Para importá-la, vamos usar o método import.

Depois, vamos deixar tudo mais organizado com uma função que traga o conteúdo do arquivo "texto.md", que estamos trabalhando, e definir os parâmetros caminhoDoArquivo, encoding e um callback.

Na sequência, abriremos uma arrow function (=>) e pediremos para que a função nos retorne um console.log. Dentro dele, vamos chamar a variável chalk, que grava os métodos da biblioteca, para colorir nossa mensagem. No parâmetro do método, por fim, passaremos o retorno texto:

```
import fs from 'fs';
import chalk from 'chalk';

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        console.log(chalk.green(texto))
    })
}
```

Como não estamos usando o parâmetro erro nesse momento, vamos substitui-lo por um _, um padrão do JavaScript que serve para desconsiderar parâmetros que não estão sendo utilizados. No futuro, quando voltarmos a usar o erro, retornaremos com esse parâmetro.

Vamos executar, também, a função pegaArquivo, passando a string ./arquivos/texto.md, que representa o caminho do arquivo:

```
import fs from 'fs';
import chalk from 'chalk';

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (_, texto) => {
        console.log(chalk.green(texto))
    })
}

pegaArquivo('./arquivos/texto.md');
```

Agora vamos voltar ao terminal e conferir se está tudo funcionando, executando o comando node index.js. O terminal exibirá o conteúdo do arquivo, o que significa que nossas intervenções deram certo. O resultado do read file foi exibido na cor verde, conforme determinamos.

Agora, vamos pegar esse resultado, guardá-lo numa variável e trabalhar com o texto para extrair links. Antes disso, porém, vamos refatorar o código no próximo vídeo. Assim, podemos descobrir se algum erro de execução aconteceu.

## configurando o linter
Muitas decisões que tomamos enquanto escrevemos código se baseiam em padrões e convenções estabelecidos pela comunidade. No caso do Eslint, existem alguns conjuntos de regras pré-estabelecidas, adotadas em consenso e que são disponibilizadas para uso geral. É o caso do conjunto de regras que usamos, pensada e desenvolvida pelo time de desenvolvimento do serviço AirBnb.

Porém, toda regra pode ter sua exceção, se for necessário, e uma regra pode até cobrir uma grande parte dos casos, mas nunca é possível garantir que cubra 100%. Então é sempre possível, se quisermos, “cancelar” uma regra de linter do conjunto de regras que estamos usando.

As regras de linter são pensadas não somente para reforçar estilo mas também para evitar possíveis problemas de código, aumentar a legibilidade, entre outras facilidades. Antes de simplesmente cancelar uma regra, leia atentamente a documentação referente a ela; muitas vezes, o mais indicado é refatorar o código para se adaptar à regra, e não o contrário.

Se decidir que uma regra do conjunto que está usando não se aplica ao seu projeto, há algumas formas de cancelá-la:

**Desconsiderando a regra para uma linha específica:**
Mostrar a configuração do linter para adicionar uma regra direto no arquivo:
 rules: {
   'no-console': 'off',
 },

 https://eslint.org/docs/latest/rules/no-console

## tratamento de erros:
Durante a execução de um programa, podem ocorrer diversos erros, como quando o programa não consegue localizar um arquivo, arquivo inexistente, arquivo vazio ou pasta não encontrada.

Quando programamos, precisamos dar atenção a esses cenários. O ideal é que o programa que usamos para escrever código consiga lidar com esses erros e situações inesperadas. É preciso que ele capture os erros, para podermos dizer o que o código precisa fazer quando esses erros acontecem.

Agora vamos refatorar nossa função pegaArquivo para informar como o código deve se comportar caso algo dê errado na execução. Internamente, o readFile está preparado para passar erros à frente, sinalizando-os, quando eles acontecem.

Antes de fazer a refatoração, vamos criar outra função acima dela, à qual chamaremos de trataErro. Ela receberá como parâmetro erro. Isso nada mais é do que os dados recebido por readFile em caso de erro. Mais especificamente, é o primeiro parâmetro da função callback que substituímos por _ na última aula. Vamos trazê-lo de volta ao código.

No corpo da função, chamaremos a palavra chave throw, que significa lançar, em português. Usamos essa terminologia porque vamos "lançar" erros para fora do programa. Para fazer isso, vamos inserir new Error(erro) após throw. Agora podemos informar, dentro da função callback, o que o código deve fazer nesses casos.

Vamos adicionar um if para representar que, se houver erro na execução do readFile, chamaremos a função trataErro, passando como parâmetro o erro que está sendo recebido. Caso nossa código não caia no if, ele seguirá para console.log.

Como, com essas mudanças, a função pegaArquivo está preparada para pegar um arquivo, vamos texto.md da última linha:
```
import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    throw new Error(erro);
}

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
            if (erro) {
                trataErro(erro);
            }
        console.log(chalk.green(texto))
    })
}

pegaArquivo('./arquivos/');
```

Se tudo der certo no código, não cairemos no erro e veremos o texto encodado, recebido via readFile, passar para o console.log. Caso o erro ocorra, no caso de passarmos um caminho errado ou um arquivo que não existe, automaticamente a função readFile passará o objeto de erro para dentro do parâmetro de mesmo nome.

Agora vamos executar tudo para ver se nosso código funcionará. De volta ao terminal, vamos inserir o comando node index.js para verificar a execução. Quando fizermos isso, seremos informados que um erro de diretório aconteceu.

Isso significa que o sistema esperava ler um arquivo, mas recebeu um diretório. Essa operação é classificada como ilegal. O terminal nos informa o erro, seu código, descreve-o, diz onde ele ocorre e passa o stack trace, com todos os lugares do código em que o erro aconteceu.

Vamos voltar ao arquivo "index.js" para refatorar nossa função de erro outra vez. Em new Error, vamos remover o objeto erro genérico e chamar a biblioteca Chalk para pintar os erros de vermelho.

Dentro disso, vamos passar o parâmetro erro.code, que se relaciona ao código dos erros, e a mensagem 'não há arquivo no diretório':
```
import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
            if (erro) {
                trataErro(erro);
            }
        console.log(chalk.green(texto))
    })
}

pegaArquivo('./arquivos/');
```

Vamos limpar o console com "Ctrl + L" e executar o código novamente. Agora vemos outro erro, em vermelho: dessa vez, ele acontece porque não há arquivo no diretório. Agora o problema ficará mais claro para o nosso usuário.

Normalmente, utilizamos os códigos dos erros para fazer verificações. Vamos realizar um último teste para ver se o nosso console.log funcionará. Editaremos, dessa vez, a chamada da função pegaArquivo. Nela, adicionaremos /texto.md.

De volta ao terminal, executaremos o código outra vez. Dessa vez, o texto em verde volta a aparecer, o que significa que o caminho do console.log continua funcionando.

É importante que consigamos acessar os erros quando eles acontecem, para que entendamos as mensagens passadas por eles. Essas mensagens são dicas do que está acontecendo no nosso código e facilitam o processo de correção.

Se quisermos, podemos adicionar um console.log ao objeto erro. Assim, podemos visualizar o objeto inteiro. Vamos remover, também, texto.md da chamada da função, para provocar o erro:
```
import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
            if (erro) {
                trataErro(erro);
            }
        console.log(chalk.green(texto))
    })
}

pegaArquivo('./arquivos/');
```

Assim, podemos voltar ao terminal e executar o código. Com essas alterações, visualizaremos o objeto erro, que está sendo recebido pela função, e o erro em si.

Esse objeto tem algumas propriedades: errno, o número do erro, code, o código do erro, e syscall, a chamada geradora do erro. No nosso caso, uma chamada de leitura.

A partir disso, é possível continuar a refinar nosso tratamento de erros. É importante consultar a documentação do Node.js, para analisar o construtor de erros da ferramenta. Lá, encontramos todas as opções e métodos disponíveis para o construtor.

No próximo vídeo, vamos continuar a trabalhar no desenvolvimento da nossa biblioteca.

## Promessas
Até agora, trabalhamos com códigos mais curtos e sequenciais. As funções e variáveis exigidas para o funcionamento do código estavam basicamente nos mesmos diretórios.

Agora vamos garantir que o JavaScript consiga trabalhar com arquivos externos, como os Markdown, nos quais não conseguimos garantir o tamanho ou a quantidade de links. O JavaScript precisará processar o arquivo e trazer seus links.

Não temos como saber, portanto, quanto tempo o JavaScript levará para fazer tudo isso. Ao mesmo tempo, precisamos garantir a continuidade da execução. Então precisamos pedir que o JavaScript espere pelo fim do processamento antes de manipular o arquivo Markdown.

A situação com a qual nos deparamos é, portanto, de código síncrono versus código assíncrono. Códigos síncronos são executados em sequência, com uma instrução após a outra.

Para facilitar o entendimento podemos estabelecer uma comparação com comunicação síncrona, como a feita via rádio, na qual uma pessoa fala e a outra fala logo depois.

Já os códigos assíncronos não esperam a finalização de uma tarefa para iniciar a seguinte. Não podemos esperar o JavaScrip terminar de processar um arquivo ou buscar dados de banco sem sabermos quando isso acontecerá. Em outras palavras, não é possível travar o funcionamento do código.

Esse tipo de código também precisa esperar a finalização da tarefa para retornar o resultado. Por exemplo, se pedirmos para o JavaScrip processar um arquivo de texto muito grande, ao mesmo tempo em que não podemos travar o programa, também precisamos esperar que ele finalize o processamento do arquivo para pegar o retorno.

Vamos criar um paralelo com a comunicação assíncrona, feita via aplicativos de mensagem, por exemplo. Como não sabemos quando receberemos uma resposta para nossas mensagens, podemos deixar o celular de lado enquanto resolvemos outras coisas.

Como não sabemos o tamanho dos arquivos que precisaremos processar, vamos refatorar nossa função pegaArquivo. O objetivo é fazê-la trabalhar de forma assíncrona. De volta à IDE, vamos transformar nossa função em comentário.

Vamos reescrevê-la, dessa vez com métodos assíncronos do Node.js. Podemos copiar as duas primeiras linhas. Na terceira, porém, ao invés de fs.readFile, vamos utilizar fs.promises.readFile. Vamos alterar também a forma de processamento de resposta do readFile.

Vamos remover o terceiro parâmetro do readFile. No caso, o callback. O JavaScript tem duas formas de trabalhar com código assíncrono. Vamos usar a primeira agora e, no próximo vídeo, a segunda. A primeira forma consiste na utilização do método then, que serve para encadear código assíncrono.

Dentro do método, passaremos o parâmetro callback (texto) e chamaremos uma arrow function, passando um console.log, chamando a biblioteca Chalk, para que consigamos exibir o resultado do processamento.

A função trataErro não está mais sendo chamada. Por isso, vamos inserir também a função catch, que serve para pegar erros de forma assíncrona. Dentro dela, passaremos o parâmetro erro e abriremos outra arrow function, chamando a função trataErro:
```
function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.promises.readFile(caminhoDoArquivo, encoding)
        then((texto) => console.log(chalk.green(texto)))
        .catch(trataErro)
}
```

Quando falamos de promises, as promessas do JavaScript, estamos falando de código assíncrono. Com o JavaScript, não é possível pegar o valor de um código assíncrono de forma síncrona, podemos apenas utilizar métodos, como o then, para resolver a promessa e trazer seu valor.

No caso, o valor da promessa de readFile é o texto que esperamos receber no terminal. No nosso código, caso algum erro aconteça dentro da função then, ele será lançado para a função catch. Essas funções, assim como a readFile, não estão uma dentro da outra, mas encadeadas.

Inclusive, podemos passar a readFile para a linha seguinte e alinhar essas três funções uma abaixo da outra. A função readFile devolve uma promessa que será recebida e tratada por then. Se durante a resolução, algum erro acontecer, ela será lançado para catch.

No próximo vídeo, vamos aprender a utilizar as palavras-chave async e await para trabalhar com assincronicidade.

## promessas com .then() vs async/await
Uma característica do JavaScript é ter várias maneiras de lidar com o mesmo problema. No caso da resolução de promessas, existem dois métodos mais utilizados: o .then() e as palavras-chave async e await.

Para entender melhor as diferenças e como utilizar cada uma delas, temos este artigo no blog da Alura.
https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar


## o construtor new Promise()
Além do .then() e do async/await, o JavaScript também tem um método construtor para resolver promessas, o Promise().

Enquanto .then() e async/await são utilizados quando temos que lidar com promessas já existentes - por exemplo, ao executarmos o método fetch() que, por definição, sempre retorna uma promessa, usamos o construtor Promise() para escrever do zero nossas próprias promessas.

Vamos ver um exemplo de função que recebe um valor booleano (true ou false) e com base nesse valor retorna uma new Promise() rejeitada ou completa.
```
function promessa(bool) {
 const x = bool;
 return new Promise((resolve, reject) => {
   if (!x) {
     reject(new Error("falha na promessa"));
   }
   resolve("sucesso na promessa");
 });
}

function exibeResposta(textoResult) {
 console.log(textoResult);
}

promessa(true)
 .then((texto) => exibeResposta(texto))
// sucesso na promessa
```

Veja que a função promessa() cria uma nova promessa a partir do construtor new Promise() e com dois parâmetros: resolve e reject. Promise() precisa trabalhar sempre com estes dois parâmetros, que devem ser invocados após a resolução (seja com ou sem sucesso).

Neste caso, passamos um texto como parâmetro de cada um deles. Quando executamos a função promessa(true) este valor é carregado através das promessas até ser passado para a função exibeResposta(textoResult), que por fim vai exibir a mensagem correta. No caso de promessa(false), além da mensagem “falha na promessa” o Node.js também vai lançar no terminal a stacktrace do objeto Error.

Assim, concluímos que sempre temos que ter em mente os estados possíveis de qualquer promessa em JavaScript:

Promessas podem ser concluídas de duas formas: fulfilled (realizada, completa) ou rejected (rejeitada), o que equivale a duas situações possíveis, ou a promessa se concretizou (retornou os dados ou executou o código que deveria) ou não.
Promessas que não estão fulfilled nem rejected estão pending (pendentes). Ou seja, ainda não é possível saber o resultado final porque o processamento ainda não foi concluído.
Após a finalização do processamento, a promessa passa para o estado de settled (concluída), independente do resultado.
Uma vez que a promessa está settled seu resultado não se altera mais. Ou seja, uma promessa que se concluiu como rejected não muda mais para o estado de fulfilled e vice-versa.

##  async/await
Uma das características do JavaScript é que há mais de uma maneira de executar a mesma tarefa de código. Isso acontece porque a ferramenta é totalmente retrocompatível. Ou seja, funcionalidades implementadas nas versões mais antigas nunca deixam de funcionar, por mais que as versões mais atuais implantem novos métodos.

Nesse vídeo, vamos resolver promessas em JavaScript utilizando uma técnica mais recente. No vídeo anterior, usamos o then para fazer isso. No arquivo "index.js", vamos apagar a versão síncrona e transformar a função pegaArquivo do vídeo anterior em comentário.

Agora, vamos resolver as promises usando as palavras-chave async e await. Chegou a hora de refazer a função, mantendo as duas primeiras linhas da versão anterior, mas adicionado a constante texto para pegar o retorno do processamento de fs.promises.readFile.

Depois, passaremos um console.log em texto, para conferirmos o retorno, sem esquecer de passar /texto.md na função pega arquivo:
```
function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    const texto = fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(texto);
}

pegaArquivo('./arquivos/texto.mmd');
```

Abrindo o terminal, executaremos o comando node index.js. O retorno será a promessa Promise { <pending> }, uma promessa pendente. No vídeo anterior, aprendemos que as promises são o método de trabalho com código assíncrono do JavaScript e que ele torna inacessível o conteúdo das promessas.

Precisamos pedir que ele as resolva e apresente a promessa resolvida para que a guardemos em uma variável, por exemplo. Vamos refatorar a função pegaArquivo para torná-la assíncrona.

Escrevendo async antes de function, avisamos ao JavaScript que essa será uma função assíncrona que precisará ser resolvida antes de retornar o resultado. Já o await precisará ser adicionado a todos os trechos de código da função que precisam aguardar o retorno da promessa ou o processamento.

No caso, adicionaremos await à linha 13, no retorno de fs.promises, antes do restante do código. Não podemos esquecer, também, de chamar a biblioteca Chalk para que o retorno tenha a cor verde:

```
async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(chalk.geent(texto));
}

pegaArquivo('./arquivos/texto.mmd');
```

Em resumo, nossas alterações informam ao JavaScript que a função precisa ser resolvida para que seus dados sejam passados à variável texto. Vamos voltar ao terminal e executar novamente o comando node index.js.

Agora sim, o JavaScript conseguirá resolver a promessa e trazer os dados para a variável texto. Isso fará com que o valor dessa variável nos seja retornado no console. Vamos voltar ao nosso código, na função pegaArquivo, para remover texto.md da chamada da função, algo que ocasionou erro anteriormente.

Quando executamos a função, porém, outro erro acontecerá, porque a função trataErro não está sendo chamada pela nossa função assíncrona. Para resolvermos isso, criaremos um bloco Try catch. Na segunda linha da função, abriremos o bloco try e, dentro dele, vamos adicionar tudo o que queremos que aconteça em caso de sucesso.

No caso, todas as outras linhas que escrevemos para a função pegaArquivo até agora. Ao fim desse primeiro bloco, criamos o bloco catch e, entre parênteses, passamos o parâmetro erro. Em catch, vamos chamar a função trataErro recebendo erro.

Agora vamos descer até a função pegaArquivo. Vamos duplicá-la e, na primeira, passar o caminho de sucesso, incluindo texto.md à chamada, e, na segunda, excluir texto.md, para provocar o erro:

```
async function pegaArquivo(caminhoDoArquivo) {
    try {
const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.geent(texto));
    } catch (erro) {
        trataErro(erro)
    }
}

pegaArquivo('./arquivos/texto.md');
pegaArquivo('./arquivos/');
```

De volta ao terminal, chamaremos node index.js novamente. Primeiro, receberemos o retorno do texto em verde. E, em seguida, o erro que esperávamos, com a mensagem em vermelho. O novo objeto Error está sendo lançado com os valores solicitados, o que significa que está tudo funcionando.

Os métodos then e async/await funcionaram, mas a diferença entre eles está na escrita. Em termos de processamento e performance, elas são similares. A primeira opção tem uma escrita um pouco mais funcional, com encadeamento de funções uma abaixo da outra, enquanto a segunda faz com que escrevamos código assíncrono de uma maneira semelhante ao código síncrono.

Se tirarmos async da linha 11 do código e await da linha 14, a função será exatamente igual a uma função síncrona.

## Tratamento de erros
Durante o funcionamento de um sistema, algumas execuções podem não sair como o esperado. Por exemplo, quando trabalhamos com uma aplicação web, podemos tentar acessar um link que esteja inválido, ou tentar salvar um arquivo em um diretório sem ter permissão para isso. Sendo assim, podemos preparar o código para esperar possíveis erros e tratá-los, o que pode ser feito no JavaScript usando a estrutura try...catch.

No JavaScript o try...catch possibilita lidar com um erro identificando o trecho em que ele pode ocorrer (try) e captando o erro (catch) para tratá-lo.
O Javascript (assim como muitas outras linguagens) utiliza o bloco try para envolver o trecho de código que pode gerar algum tipo de exceção e o bloco catch é o responsável por capturar a exceção (caso ocorra) e permitir que seja “tratada”, retornando alguma mensagem informativa, executando alguma função específica, etc.

Tratamento de erros e todas as formas possíveis de se fazer isso é um tópico recorrente em JavaScript, havendo vários prós e contras na utilização de cada método

## expressões regulares
expressões regulares são objetos que mapeiam padrões de texto por meio de uma linguagem própria, com sintaxe e regras específicas. Elas são uma ferramenta eficiente para resolver problemas de código que envolvem padrões e buscas textuais.

Pode ser que você já conheça alguns dos meta-chars usados em expressões regulares sem saber. Por exemplo, quando procuramos no campo de busca do computador por qualquer arquivo de extensão jpg com *.jpg. É claro que as expressões regulares podem ir de muito simples até extremamente complexas, então você não precisa se preocupar em decorar todos os meta-chars ou como eles se comportam; sempre é possível consultar sites como regex101 ou o guia do MDN.

Cada linguagem de programação desenvolve seu próprio interpretador de expressões regulares; no caso do JavaScript podemos usar // e salvar o padrão em uma variável, como foi feito nos vídeos, ou utilizar o construtor new RegExp():
```
const regex = /[a-zA-z\s]/;
```

ou

```
let regex = new RegExp("[a-zA-z\s]");
```

Para trabalhar com as regex em nosso código, podemos utilizar alguns métodos próprios de string, como matchAll() (que usamos no vídeo), search(), replace(), match() e split(). Você pode consultar mais sobre estes métodos no MDN. Além disso, o JavaScript também tem alguns métodos próprios do objeto RegExp: test() e exec(). Vamos enter mais sobre o exec() durante este curso, mas você também pode ler a respeito deles [aqui](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp).

## validações de formulário
Depois de trabalharmos com expressões regulares, é bem comum pensarmos em validações de formulário como um possível uso.

Embora seja uma opção válida, já existem algumas libs para validação de formulários com JavaScript - você se lembra de que há muitas libs para automatizar tarefas comuns em programação?

A validação de formulários é uma das tarefas que podem consumir muito tempo para desenvolver desde o início e normalmente não são features, ou seja, funcionalidades de um produto. Então, usamos as libs para focar nas partes mais importantes do desenvolvimento.

Validações são importantes tanto no lado do front-end quanto do back-end. Você pode conferir duas libs para isso, [Joi](https://joi.dev/) e [Yup](https://joi.dev/), e suas documentações com exemplos de uso. A Joi tem um [ambiente de testes](https://joi.dev/tester/) que ajudam a visualizar melhor como utilizar os métodos dessa lib.
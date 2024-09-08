# Anotações do curso

---
Para executar o projeto:
```
  node variaveis.js
``` 

## JavaScript e o back-end
### Front-end vs Back-end
Front-end se refere à parte onde há tela envolvida. As interfaces pelas quais as pessoas usuárias interagem com nossa aplicação são atribuições do front-end.

Portanto, botões que serão clicados, roupas que aparecerão em um e-commerce, formulários, tudo isso é atribuição do front-end. Além disso, tudo o que ocorre no front-end acontece no navegador. Essa é uma informação muito importante, lembre-se dela.

Já quando falamos de foco em back-end, nos referimos a tudo que acontece em uma aplicação ou site que está além da interface gráfica.

Ou seja, o que ocorre quando você clica para comprar um produto em um site? Toda essa interação, o que acontece com as informações que saem da tela, como as compras são processadas, como isso é armazenado no banco de dados, isso é atribuição do back-end e não ocorre mais no navegador. Isto é, o processamento do código não é mais feito no navegador.

Portanto, o JavaScript vai precisar de outra plataforma, de outra ferramenta para justamente fazer o processamento do código em um ambiente que não é mais a tela do navegador.

Por que tratamos de maneira diferente se é a mesma linguagem? De fato, é a mesma linguagem, no entanto, as ferramentas que o JavaScript utiliza no front-end e no back-end são diferentes.

No front-end, o JavaScript precisa ter acesso, por exemplo, a funções de cliques de botão. No back-end, como não há botão algum para clicar, não precisamos dessas funções, mas necessitamos de outras.

É nisso que reside a diferença principal entre o JavaScript para back-end e o JavaScript para front-end. Porém, a linguagem em si é a mesma.

### O que há por trás das telas?
O que temos por trás das interfaces gráficas? O que significa JavaScript com foco em back-end? Quando vemos, por exemplo, a interface da plataforma da Alura com um curso selecionado, esse curso tem várias informações. Aparece na tela da plataforma o nome do curso, a carga horária do curso, quantas pessoas estão fazendo o curso, a avaliação, entre outros dados.

Essas informações são acessadas através do back-end. O back-end vai buscar nas bases de dados onde está o nome do curso, onde está a duração do curso, a lista de pessoas que participaram, e assim por diante. O back-end, ou seja, a parte de trás da aplicação, é responsável por juntar todas essas informações e fornecer ao front-end de forma que ele consiga exibir cada uma delas.

Assim, serão buscadas as informações de nome do curso, nome da categoria, em qual formação o curso se encontra, e colocar essas informações na tela para que a pessoa usuária interaja com nosso site.

Temos vários cursos a partir deste ponto que vão ensinar a criar essas aplicações, mas é importante entender as diferenças entre um e outro. Mas por que existe essa separação?

### Uma linguagem interpretada
O JavaScript é uma linguagem interpretada. Vamos disponibilizar material extra explicando o que são linguagens interpretadas e linguagens compiladas.

O navegador é um programa capaz de analisar um código JavaScript, executar esse código e fazer o que esperamos que ele faça, por exemplo, nossas interações de tela, nossos cliques de botão, e assim por diante. Outras linguagens não funcionam no navegador; são as chamadas linguagens de back-end.

Quando executamos um código em JavaScript, por exemplo, através do Node.js, uma ferramenta que funciona fora do navegador, utilizamos o terminal para isso.

Portanto, quando precisamos executar código que não será lido pelo navegador, ou seja, os códigos JavaScript que trabalharão na parte de trás da aplicação, utilizamos outro interpretador para isso, e um desses interpretadores é o Node.js.

--- 

##  características do JavaScript
O JavaScript desde sua criação em meados dos anos 1990, serviu ao propósito de dar interação a páginas web. Porém, com o desenvolvimento do Node.js em 2009, a partir da engine V8 do Chrome, foi possível adaptar o JavaScript para, entre outras funcionalidades, aplicações back-end.

Um dos principais pontos sobre o JavaScript é que se trata de uma linguagem de programação multiparadigma, o que significa que a linguagem não está restrita a uma única forma de fazer as coisas. É possível utilizar diferentes paradigmas de programação, como orientado a objetos, funcional ou procedural.

O Javascript é uma linguagem interpretada, isso significa que o código fonte é executado diretamente por um interpretador, que analisa o código linha por linha e executa as instruções em tempo real. Neste artigo você pode ler mais sobre linguagens interpretadas e compiladas.

Se comparado com outras linguagens, como Java, ele se destaca por sua natureza mais flexível e dinâmica. O JavaScript oferece uma abordagem mais leve e ágil, isso porque é uma linguagem fracamente tipada e de tipagem dinâmica, em que os tipos são inferidos durante a execução do programa, não sendo necessário declarar explicitamente o tipo das variáveis. Por sua vez, o Java é uma linguagem fortemente tipada e de tipagem estática, onde os tipos das variáveis são declarados explicitamente e verificados em tempo de compilação.

Mas ainda tem mais! O JavaScript é conhecido por sua vasta comunidade e por um ecossistema repleto de ferramentas, bibliotecas e recursos prontos para serem explorados. Essa gama de recursos facilita a vida dos times de desenvolvimento, permitindo a criação de projetos complexos de forma mais rápida e eficiente.

Por último, mas não menos importante, o JavaScript permite que profissionais que já têm familiaridade com o JavaScript no front-end migrem facilmente para o back-end.

---

## O Node.js
Para entender adequadamente o que é o Node.js e para qual propósito é utilizado, é crucial compreender como o JavaScript é executado, ou seja, como ele funciona dentro do computador.

### Navegador vs Node.js
O navegador é o ambiente de interpretação original do JavaScript, pois opções além do navegador, como o Node.js, surgiram muito depois. Cada navegador, como já discutimos, desenvolve seu próprio motor (ou engine) de interpretação. A Google desenvolve para o Chrome, a Microsoft para o Edge, e assim por diante.

O Node.js nada mais é do que outro motor de interpretação do JavaScript que funciona fora do navegador. Mas por que ele existe? Por que ele funciona fora do navegador?

A resposta é para que possamos utilizar o JavaScript para outras funcionalidades no desenvolvimento web que ocorrem fora do navegador. Nesse sentido, o navegador tem funções diferentes do Node.js.

O interpretador de JavaScript do navegador tem funções para interpretar, por exemplo, o clique de um botão. Já o Node.js tem outras funcionalidades que o navegador não precisa, mas que são necessárias fora do navegador, no back-end.

Embora mencionamos que o Node.js possui uma engine diferente, na verdade, ele utiliza a mesma do Chrome. Portanto, o Chrome e o Node.js compartilham o mesmo motor de interpretação para executar o JavaScript, mas com funcionalidades diferentes.

Quando falamos em engines diferentes, queremos dizer que elas têm implementações distintas. Isso significa que, por trás de uma função pronta, por exemplo, Math.random(), que usamos nos cursos de iniciação à programação para gerar números aleatórios, cada navegador a interpreta de forma diferente.

A função é a mesma, utilizamos a mesma função tanto no Chrome quanto no Firefox, por exemplo. No entanto, internamente, a parte que normalmente não vemos na implementação do navegador, o código é diferente. Mas por que precisamos saber disso?

Esse é um dos motivos pelos quais os navegadores podem ter diferenças de desempenho. O código que executa uma função diferente pode afetar a performance do navegador.

O mesmo ocorre, por exemplo, ao analisarmos o console.log(), também utilizado nos cursos de iniciante em programação. A implementação do console.log() será a mesma tanto no navegador quanto no Node.js.

No entanto, a implementação de fato é distinta, isto é, o código que existe dentro da função console.log() é diferente. Ele processará as informações necessárias e executará nosso código de maneira diferente no Node.js, no Chrome e também no Firefox.

---

## outros interpretadores
- conferir o episódio do podcast Hipster.[talks sobre Deno e Node](https://cursos.alura.com.br/extra/hipsterstech/deno-o-novo-node-hipsters-203-a350).

No mundo da programação, a diversidade de interpretadores para linguagens como JavaScript representa uma das facetas mais dinâmicas e inovadoras do desenvolvimento de software.

Dentro desse panorama, além de conhecidos ambientes como Node.js e Deno, surge o Bun, um interpretador de JavaScript que despertou interesse na comunidade, prometendo uma abordagem distinta na execução e interpretação do código.

Confira abaixo mais detalhes sobre cada um dos interpretadores:

### Node.js
Como vimos no vídeo anterior, Node.js é um ambiente de execução de código JavaScript no “lado do servidor”, ou runtime, funcionando fora do navegador. Ele usa o motor (também chamado de engine) V8 do Google Chrome para executar o código e oferece uma ampla gama de funcionalidades para criar aplicativos web e servidores. Tem como características-chave:

Suporte a bibliotecas e frameworks variados;
Uso do NPM para gerenciamento de pacotes;
Arquitetura baseada em eventos e assíncrona;
Popular para construção de servidores web e APIs.

### Deno
Deno é outro ambiente de execução para JavaScript e TypeScript, desenvolvido pelo mesmo criador do Node.js, Ryan Dahl. Ele foi criado para abordar algumas limitações do Node.js, com foco em segurança e desenvolvimento moderno. As características-chave do Deno são:

Sistema de segurança baseado em permissões;
Suporte nativo a TypeScript;
Não depende do NPM para gerenciar pacotes;
Módulos importados diretamente via URL.
Ao contrário do Node.js, no qual os scripts têm permissões amplas por padrão, o Deno adota uma abordagem que prioriza a segurança, exigindo que as pessoas desenvolvedoras concedam permissões explicitamente para operações potencialmente confidenciais, como acesso ao sistema de arquivos ou conectividade de rede.


### Bun
Bun, o mais recente dos interpretadores, lançou sua versão 1.0 em setembro de 2023. O Bun é outro ambiente de execução JavaScript criado do zero usando a linguagem de programação Zig, com foco em inicialização rápida e execução eficiente de código. Ele fornece ferramentas e recursos para otimizar e agilizar o desenvolvimento de aplicativos JavaScript e foi projetado para ser compatível com ecossistemas JavaScript existentes.

Até o momento as características que mais têm chamado atenção são:

Alta velocidade no tempo de execução do código;
Design leve, resultando em uma base de código menor e menos requisitos de recursos, permitindo melhor desempenho em termos de velocidade e uso de memória em comparação com outros runtimes;
Otimização de desempenho, pois em vez de depender do motor V8, Bun utiliza o JavaScriptCore do WebKit, que é amplamente reconhecido por seu desempenho superior;
Funcionalidade integrada ao oferecer ferramentas e recursos nativos que agilizam o processo de desenvolvimento. Ele inclui um empacotador integrado, substituindo a necessidade de ferramentas externas como Webpack, bem como um transpilador nativo que suporta a escrita direta de código TypeScript. Além disso, o Bun incorpora um executor de testes semelhante ao Jest e carrega automaticamente variáveis de ambiente sem exigir instalações adicionais de pacotes como o dotenv.
Explorar esses interpretadores não apenas amplia o entendimento sobre o funcionamento do JavaScript, mas também revela as nuances e as diferentes filosofias por trás de cada ambiente de execução.

Neste curso utilizamos o Node.js por sua grande popularidade, performance e versatilidade que permite trabalhar com:

APIs;
Aplicações web em tempo real como servidores de chat ou aplicações colaborativas entre múltiplos usuários;
Jogos multiplayer;
Aplicações que demandam alta escalabilidade;
Servidores de streaming de dados;
Tudo isso graças a sua capacidade de processar um número muito grande de requisições, uma das principais vantagens que o torna tão utilizado e motiva tantos times de desenvolvimento a explorar esta tecnologia.

---

## loop de eventos do Node.js

Leitura do artigo [“Arquitetura do Node.js: entenda o loop de eventos”](https://www.alura.com.br/artigos/arquitetura-node-js-entenda-loop-de-eventos);

---

## Variáveis no JS
Neste curso, utilizaremos um sistema de uma escola com listas de alunas e alunos, listas de professoras e professores, notas, cálculos de médias de notas, para relembrarmos alguns conceitos de JavaScript vistos anteriormente e para adicionarmos mais conhecimentos necessários para trabalhar com o back-end.

### Trabalhando com variáveis
Começamos relembrando alguns conceitos de JavaScript importantes vistos anteriormente e o primeiro deles é como trabalhar com variáveis.

Já temos o Visual Studio Code aberto, criamos uma pasta para guardar os arquivos deste curso. Usaremos o botão New File, representado por um ícone de uma folha com a ponta superior dobrada, que está na parte superior do Explorer, na lateral esquerda da interface, para criar um novo arquivo dentro dessa pasta. Vamos chamá-lo de variaveis.js.

Escreveremos uma variável, lembrando que para criar uma variável com JavaScript, usamos a palavra-chave let. Vamos criar uma variável let estudante, atribuindo a ela o valor, ou seja, o nome de uma estudante, 'Caroline'. Como um nome é uma sequência de caracteres, um texto, precisamos envolver entre aspas e chamamos normalmente esse conjunto de caracteres de string (cadeia de caracteres).

Criaremos outra let, que chamaremos de professora, e atribuiremos a ela o valor 'Ana'. Agora temos duas variáveis, ou seja, dois valores que queremos guardar na memória, ambos com valor do tipo string, sendo um 'Caroline' e o outro 'Ana'.

Para testar, sem usar o navegador, podemos utilizar o console.log. Vejamos como o console.log funciona no Node. Vamos criar console.log() e passar dentro dos parênteses o nome das duas variáveis que criamos, estudante e professora, ponto e vírgula, e agora executar esse arquivo.
```
let estudante = 'Caroline';
let professora = 'Ana';

console.log(estudante, professora);
```

Executaremos o arquivo utilizando o Node. No VSC, na parte superior, temos um menu chamado Terminal, clicando em Terminal e depois em New Terminal, abrirá uma janela na parte inferior do VSC para executarmos os nossos códigos.

O ideal é verificar se o terminal já está iniciando na pasta que utilizamos para este curso. Recomendamos que você crie uma pasta para criar os arquivos dentro. Isso porque agora iremos passar o comando para executar este arquivo, que será node variaveis.js.

Ao pressionar Enter, serão exibidos no console os dois valores que pedimos, o valor da variável estudante, que é Caroline, e o valor da variável professora, que é Ana.

Portanto, é assim que utilizamos o Node no terminal para executar os nossos arquivos. Primeiro passamos a palavra-chave node e em seguida o nome do arquivo que queremos que seja executado.

É importante verificar que você está dentro da pasta correta, sendo exibido o nome da pasta correta no terminal, caso contrário o Node não encontrará o arquivo e não conseguirá executar.

Vamos fazer mais um teste. Depois da let estudante e da let professora, chamaremos novamente apenas o nome da variável estudante, sem o let e alteraremos o nome dessa estudante, por exemplo, para 'Mariana'.

Portanto, estudante = 'Mariana'. Voltaremos ao terminal e usaremos um atalho do terminal, que é a seta. Se pressionarmos seta para cima do teclado, o terminal retornará os comandos anteriores e não precisaremos digitar de novo.

Reexecutaremos o código do arquivo variaveis.js, com node variaveis.js, e agora ao invés de Caroline e Ana, o valor da variável estudante foi modificado.

Na maior parte das vezes, esse comportamento não é o que queremos. Por quê? Porque normalmente quando guardamos um valor de uma variável na memória do computador, não queremos que outro ponto do código tenha acesso a essa variável e a altere.

Então, já pensou se seu nome é Caroline e de repente está tudo Caroline na sua aplicação da escola e seu nome muda para Mariana? Não faz sentido. Portanto, embora o nome seja variável, o comportamento normal que temos é não querer que esse valor seja alterado por outras partes do código.

O JavaScript permite que "protejamos" uma variável de alteração, utilizando uma outra palavra-chave na criação. Ao invés de let estudante, podemos criar const estudante.

Trocamos a let estudante para const estudante, o valor é o mesmo. Deixamos a professora como let mesmo, tentaremos fazer um novo teste no terminal executando esse arquivo novamente e vendo o que acontece.

### Lidando com um erro
No terminal, pressionamos seta para cima do teclado, node variaveis.js e agora ao invés do retorno no terminal, temos um erro. Mas os erros são bons porque eles normalmente nos avisam quando tem algo errado no nosso código.

Se precisar, utilize as ferramentas de tradução dos navegadores para entender bem as mensagens de erro que recebemos no terminal ou no navegador porque elas são importantes para nós.

Neste caso, o Node retornou um type error (erro de tipo), falaremos mais sobre erros de tipo durante o curso, e ele passa uma mensagem avisando o que deu errado.

Ele diz que houve um assignment to constant variable (atribuição a uma variável constante), ou seja, o erro que ocorreu foi uma atribuição a uma variável constante.

"Variável constante" parece um nome que não faz muito sentido, mas é literalmente isso. Variável, que é um espaço na memória onde guardamos um dado, do tipo constante, ou seja, ela tem que ser constante, ela não pode ser alterada. E o erro acusado é que tentamos fazer isso no nosso código.

Um pouco mais para cima, ele avisa o nome do arquivo, variaveis.js:4, que é justamente o número da linha onde tentamos fazer essa alteração. Ou seja, tentamos alterar algo que não podíamos, o Node não conseguiu trabalhar com isso e devolveu um erro para nós.

O que precisamos fazer agora é deletar a linha 4, onde tentamos fazer a reatribuição, porque isso não é possível fazer com const.

### Modos de lidar com variáveis
let e const não são formas originais, digamos assim, do JavaScript de trabalhar com variáveis. Elas foram criadas posteriormente.

A forma original é var, que você pode encontrar em alguns conteúdos na internet ainda. Então, var estudante e var professora. var e let trabalham de formas similares, ambas podem ser reatribuídas ao contrário da const. Porém, existem algumas outras diferenças entre var, let e const que veremos nos próximos vídeos.

Não deixaremos var aqui no nosso código, deixaremos let professora e const estudante. E agora que você já sabe que tem três formas de se trabalhar com variáveis em JavaScript, você deve estar se perguntando qual usar.

A maior parte dos guias vai dizer para usar sempre const. A não ser que realmente precise trocar o valor da variável, veremos esses casos também futuramente neste curso e nos próximos. Se não precisar mudar o valor da variável, use sempre const.

Hoje em dia não se utiliza mais o var. Veremos o porquê futuramente. O var é muito solto, ela nos permite fazer muitos outros tipos de alteração que normalmente não queremos fazer no código. Então, qual utilizar? const ou let.

Use let só quando tiver certeza de que precisa alterar a variável e const em todos os outros casos.

Além disso, outra diferença entre let e const é que não conseguimos criar uma const sem atribuir um valor a ela. O VSC até reclama se tentarmos fazer isso, ele acusa grifado em vermelho no nome da variável.

Já uma let pode ser criada sem um valor e podemos atribuir um valor a ela depois, passando professora = 'Ana'. Isso pode ser feito com let, mas não pode ser feito com const.

```
const estudante = 'Caroline';
let professora;

professora = 'Ana';

console.log(estudante, professora);
```

---

##  padrão de nomes do JavaScript
Um detalhe muito importante, mas que às vezes não percebemos quando começamos a programar, é que cada linguagem possui seus próprios padrões. Eles servem não somente para a escrita de códigos que funcionem, mas também para criar nomes de variáveis, estruturar um programa e muito mais.

A primeira coisa que precisamos ter em mente é que o JavaScript é case-sensitive, ou seja, diferencia maiúsculas e minúsculas. Isso significa que tudo o que escrevemos, sejam instruções próprias da linguagem (como console.log) ou quando damos nome a uma variável, tem que ser feito em um mesmo padrão, o que inclui a questão de maiúsculas e minúsculas.

Para ilustrar, o JavaScript trata os quatro exemplos abaixo como variáveis diferentes e não apresentará nenhum erro se você executar o programa:

```
const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)
```

Podemos perceber que, em um programa muito grande, a possibilidade de problemas é grande. Então como sabemos a forma certa de nomear? Aí entra o que chamamos de convenções, para padronizar estes aspectos do código.

Existem várias convenções para nomes e cada linguagem de programação tem o seu. Seguem alguns deles:

- camelCase: inicia com letra minúscula e a primeira letra de cada palavra em seguida é escrita com letra maiúscula. Por exemplo: minhaVar ou senhaDoUsuario. **Esta é a convenção utilizada pelo JavaScript para variáveis e funções**.

- snake_case: os espaços são substituídos pelo caractere _ (underline), com todas as palavras em letra minúscula. Por exemplo: minha_variavel ou senha_do_usuario. É o padrão utilizado, por exemplo, pela linguagem Python.

- kebab-case: similar ao anterior, porém com os espaços substituídos por hífens. Por exemplo: minha-var ou senha-do-usuario. Esta convenção não pode ser utilizada no JavaScript para variáveis e funções, pois o sinal - representa um operador de subtração. Porém, pode ser utilizada para nomear arquivos, como por exemplo exercicios-variaveis.js.

- PascalCase: similar ao CamelCase, porém neste caso todas as palavras começam com letra maiúscula. Por exemplo: MinhaVar ou SenhaDoCliente.

Importante: nunca utilize espaço nem caracteres especiais e também não inicie os nomes das variáveis com números.

Quando falamos de convenção, estamos falando de boas práticas e padronização. Se você utilizar qualquer um dos padrões acima para nomear variáveis com JavaScript (com exceção do padrão kebab-case), seu código continuará funcionando, mas seguir as convenções é parte de desenvolver um código legível e bem escrito.

Esse é um assunto vasto e com muitos detalhes, e é parte do nosso trabalho no cotidiano como pessoas que desenvolvem garantir que os chamados guias de estilo definidos para um produto de código sejam seguidos.

Você pode ir aprendendo os detalhes aos poucos, enquanto estuda, e observá-los sendo aplicados nos códigos que encontrar durante seus estudos.

---

## Escopo de variável
Agora que já entendemos que existem três formas de se declarar variáveis no JavaScript e vimos as diferenças entre elas, vamos continuar explorando.

Vamos criar um novo arquivo dentro da nossa pasta, usando o botão New File. Vamos chamar esse arquivo de escopo.js. Logo veremos o que significa escopo.

Até agora, aprendemos que proteger dados que estão numa variável de serem alterados é muito importante. No entanto, existem outras formas de proteger nosso código de alteração externa, sendo a alteração externa aquela feita por outras partes do código.

### Testando formas de alterar variáveis
Dentro do arquivo escopo.js, vamos criar uma condicional, um if, que já vimos nos cursos de iniciante em programação, e vamos criar uma variável dentro desse if.

Então, vamos lá: Por exemplo, if (1 > 0). 1 é sempre maior do que 0, então, isso garante que vamos acessar o código dentro desse if. Então, abrimos e fechamos as chaves em seguida. Dentro das chaves do if, vamos criar uma var, como vimos anteriormente, estudante = 'Caroline';, e vamos pedir também um console.log no valor da variável estudante;.

Fora do if, depois das chaves, vamos fazer parecido com o que fizemos anteriormente, vamos chamar a variável estudante, sem o var, igual a "Ana", para tentarmos reatribuir esse valor. E vamos também chamar um outro console.log para vermos o resultado disso tudo. Então, console.log em estudante.
```
if (1 > 0) {
    var estudante = 'Caroline';
    console.log(estudante);
}

estudante = 'Ana';
console.log(estudante);
```

Vamos abrir novamente o terminal, em New Terminal lá no menu superior Terminal, garantir que estamos na pasta certa, e vamos chamar o node com o nome do nosso arquivo, agora o nosso arquivo é escopo.js.

Então, node escopo.js, executaremos pressionando a tecla Enter e o retorno será "Caroline" e "Ana", ou seja, entrou dentro do if, porque a condição de 1 maior que 0 é uma condição true, criou a variável estudante com o nome de "Caroline", deu um console.log, exibiu "Caroline", primeiro valor.

Em seguida, lembrando sempre, JavaScript vai ler de cima para baixo, linha por linha, ele achou a linha 6, onde reatribuímos o valor de estudante, o valor de estudante deixou de ser "Caroline" e passou a ser "Ana", e o novo console.log refletiu essa alteração, e o segundo valor no nosso terminal é "Ana". Até aí, tudo bem.

O que estávamos querendo testar aqui nesse código? É possível criar uma variável dentro de um bloco. O que é um bloco?

Um bloco é todo o código que fica separado, por exemplo, dentro de chaves.

Então, uma função é um bloco de código, uma condicional é um bloco de código. Onde declaramos a var estudante e o console.log é um código que está preso dentro de um bloco. Quando reatribuímos fora desse bloco um novo valor a estudante, isso quer dizer que uma variável criada dentro de um bloco pode ser modificada pelo lado de fora.

Vamos fazer um novo teste, então. Dentro do bloco, vamos trocar a variável de var para let. Então, agora, em vez de var estudante, temos uma let estudante.

Vamos deixar o resto tudo como está, voltar no terminal, pressionar a seta para cima do teclado e reexecutar o arquivo. Novamente, exibir o "Caroline" e "Ana". Parece que está tudo funcionando da mesma forma, mas não está.
```
if (1 > 0) {
    let estudante = 'Caroline';
    console.log(estudante);
}

estudante = 'Ana';
console.log(estudante);
```

Agora, temos duas variáveis diferentes. A variável criada dentro do bloco com let, que é "Caroline", e, na linha 6, o nosso estudante = 'Ana' é outra variável.

Se criamos uma variável sem passar nenhuma palavra-chave, como let, const ou var, e essa variável não existe, automaticamente o JavaScript cria essa variável com um var escondido.

Então, agora temos duas variáveis, let estudante = 'Caroline' e var estudante = 'Ana'. Não é a mesma variável. Isso é muito importante entender a diferença entre let e var.

Essa modificação acontece devido ao que chamamos de escopo, que é o nome do nosso arquivo. O JavaScript trabalha com três escopos:

- Bloco
- Função
- Global

Um escopo é um termo em programação que normalmente significa um limite, um espaço dentro do qual trabalhamos. Por isso que chamamos de escopo de bloco o código que está preso dentro do bloco, preso entre as chaves do if ou as chaves de uma função.

As variáveis criadas com escopo global, ou seja, elas não estão dentro de nenhum bloco ou de condicional ou de função, elas podem sempre ser acessadas ou modificadas dentro dos blocos.

Por isso é importante sempre usar const para evitar que as variáveis sejam alteradas de maneira aleatória pelo restante do código.

Vamos fazer mais um teste. No arquivo, vamos adicionar uma linha, lá no topo do arquivo, vamos chamar de let estudante, vamos criar essa let sem valor nenhum, só estamos criando ali um espaço na memória. Dentro do nosso if vamos tirar o let estudante, deixa só estudante = 'Caroline';, ou seja, estamos tentando reatribuir um valor ou colocar um valor dentro da nossa let estudante. Do lado de fora vamos tirar a nossa let estudante = 'Ana'; da linha 8, e vamos deixar só o console.log.

```
let estudante;

if (1 > 0) {
    estudante = 'Caroline';
    console.log(estudante);
}

console.log(estudante);
```

Voltando no terminal, vamos usar o atalho Ctrl + L, que serve tanto no Windows quanto no Linux, para limpar o nosso terminal das informações anteriores.

Aí pressionaremos a seta para cima, exibindo o comando node escopo.js, agora ele exibe "Caroline" e "Caroline", ou seja, isso significa que uma variável que está fora de um bloco, consegue ser alterada por dentro do bloco. Então, criamos a variável do lado de fora, alteramos do lado de dentro das chaves da condicional if.

Esse é um dos motivos pelo qual só utilizamos let quando realmente precisamos alterar alguma coisa, porque o ideal é que utilizemos uma const. Assim, já criamos o valor com "Caroline" onde ele tem que ficar, e aí podemos acessar. Então, dentro do if podemos acessar essa variável estudante e pegar um console.log, mas não conseguimos alterar essa variável.

---

## versões do JS
### Atualizações do JavaScript
O JavaScript, ao longo de sua evolução, passou por várias versões, cada uma trazendo novos recursos e melhorias para a linguagem. Uma das versões mais significativas é o ECMAScript 6 (também conhecido como ES6), lançado em 2015, que introduziu uma série de recursos poderosos e modernos para a linguagem. Entre eles estão:

### Let e const
```
  let variavel = 10;
  const constante = 20;
```

### Template literals ou template strings
```
const nome = 'Alice';
console.log(`Olá, meu nome é ${nome}.`);
```

### Escopo de bloco com let
```
if (1 > 0) {
  let nome = ‘Ana’;
  console.log(nome); // ‘Ana’
}

// variável `nome` não está acessível
console.log(nome); // Error: nome is not defined
```

Ainda existem muitas outras funcionalidades do que chamamos de “JavaScript moderno” (do ES6 em diante), que vão fazer mais sentido conforme estudamos mais a fundo as funcionalidades da linguagem.

Apesar da atualização de 2015 ser a mais famosa, são lançadas atualizações anualmente! A lista de novidades da versão 2023 (mais recente no momento em que escrevemos) pode ser conferida no [site do ECMA](https://tc39.es/ecma262/2023/), consórcio internacional que gerencia o desenvolvimento da linguagem.

### Compatibilidade
A retrocompatibilidade é uma característica importante do JavaScript. Isso significa que, em grande parte, o código escrito em versões anteriores do JavaScript deve continuar funcionando em versões mais recentes. Por exemplo, um código escrito em ES5 deve ser compatível com um ambiente ES6 ou posterior. No entanto, o contrário pode não ser verdadeiro, pois novos recursos introduzidos em versões mais recentes podem não ser suportados em ambientes mais antigos.

Para garantir a compatibilidade, ferramentas como transpiladores (por exemplo, Babel) são utilizadas para converter código escrito em versões mais recentes do JavaScript (como ES6+) para versões mais antigas, permitindo que seja executado em ambientes que não suportam esses recursos mais recentes.

A retrocompatibilidade é essencial para usar o JavaScript em front-end por basicamente dois motivos:

Não é possível garantir que os computadores clientes que acessam as páginas web estejam sempre atualizados com as últimas versões dos navegadores.
Os próprios navegadores levam algum tempo para atualizarem seus interpretadores de acordo com as últimas atualizações da linguagem.
No caso do Node.js este problema não é tão grande, pois quem desenvolve a aplicação escolhe qual a versão que quer utilizar do Node.js e adequa o computador-servidor para que execute o código de acordo. Porém, a questão da retrocompatibilidade fez com que alguns comportamentos das primeiras versões do JS não pudessem ser corrigidos, como o null que veremos mais adiante neste curso.

A evolução do JavaScript continua, e novas versões trouxeram e continuarão a trazer mais funcionalidades, melhorias na linguagem e facilitação no desenvolvimento de aplicações modernas.

---

## Lidando com erros
Antes de continuarmos, vamos analisar com mais detalhes o que ocorre quando surgem erros. Ou seja, vamos examinar cuidadosamente as mensagens de erro que o Node fornece.

Vamos criar um novo arquivo chamado erros.js e realizar alguns testes de código para ver os erros ocorrendo. O primeiro passo é chamar console.log e passar para dentro do console uma variável que não existe no nosso arquivo. Portanto, vamos apenas passar a variavel, sem aspas. É importante lembrar que, quando colocamos entre aspas, o JavaScript interpretará como um texto.

### Entendendo a mensagem de erro
Então, passamos console.log(variavel), vamos voltar ao terminal, escrever node erros.js, e ele já retorna um erro. Vamos analisar a mensagem de erro por partes.
```
juliana@juliana:~/Desktop/3513-js-funds1$ node erros.js
/home/juliana/Desktop/3513-js-funds1/erros.js:1 console.log(variavel);

ReferenceError: variavel is not defined
    at Object.<anonymous> (/home/juliana/Desktop/3513-js-funds1/erros.js:1:13)
    at Module. compile (node:internal/modules/cjs/loader: 1256:14)
    at Module. extensions..js (node: internal/modules/cjs/loader: 1310:10)
    at Module.load (node: internal/modules/cjs/loader: 1119:32)
    at Module. load (node:internal/modules/cjs/loader: 960:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
        at node:internal/main/run_main_module:23:47
```

A primeira coisa que o Node nos fornece é o caminho do arquivo onde ocorreu o erro. É a nossa pasta, é o nosso arquivo erros.js, seguido de :1, que é o número da linha onde ele identificou o erro.

Em seguida, ele está copiando o código e assinala com uma seta exatamente onde na linha ocorreu o erro, ou seja, até a parte do console.log ele leu sem problemas. Quando chegou em variavel, ele já não conseguiu, porque estamos tentando passar para o console uma variável que não existe, literalmente.

Logo após, ele apresenta uma mensagem, pois o Node consegue inferir o tipo de erro e fornecer uma mensagem correspondente. Neste caso, ele fornece uma mensagem de erro de referência.

variavel, que é o nome da nossa variável, is not defined (não está definida). E é literalmente o que está ocorrendo. Ele está dizendo que essa variável não existe, ela não foi definida, então ele não consegue acessá-la. Esta é uma mensagem que pode ser útil caso você precise, utilize as ferramentas de tradução para entender exatamente o que está acontecendo.

### Stack Trace
A parte seguinte, que geralmente assusta um pouco, é o que chamamos de Stack Trace. O que é Stack Trace? É esta lista de arquivos estranhos e mensagens estranhas que enchem o nosso terminal de informações. Ela passa uma quantidade de nomes de arquivos, uma quantidade de caminhos de arquivos que não sabemos onde estão.

O que é o Stack Trace? É uma pilha de comandos que foram chamados internamente pelo Node para executar o programa. Ou seja, quando executamos um programa que está dentro de variáveis.js, escopo.js, internamente o Node chama muitas outras ferramentas nos bastidores, e isso ocorre de forma silenciosa normalmente.

Então, o Node chama as ferramentas que estão dentro dos arquivos para executar o nosso código, e normalmente não vemos isso acontecendo. Só vemos isso ocorrer quando há um erro, porque qualquer erro que ocorra no programa, além da mensagem de erro, ele exibe todo o código que rodou sem o nosso conhecimento, silenciosamente, que são os códigos internos do Node.js.

Por isso recebemos esse grande aviso, fornecendo muitas informações, é o que chamamos de Stack Trace, a pilha de comandos que foram utilizados para executar o nosso código.

Vamos realizar mais um teste, vamos comentar o nosso console.log(variavel), vamos criar outro console.log, que vamos apenas passar oi. Vamos passar oi, entre aspas, para ser uma string, mas vamos deletar o fechamento dos parênteses. O VSC já indica o erro, ele já sublinha em vermelho, dizendo que tem algum erro aqui, mas vamos ignorar apenas para testar.
```
console.log('oi'
```

Então, sempre começamos observando o VSC, se estiver sublinhado em vermelho, já sabemos que há algo errado, porém, se isso falhar, vamos tentar executar este arquivo e ele retornará outro erro.

Então, no terminal, node erros.js, ele fez também a primeira parte igual, informou qual é o arquivo que deu erro, qual foi a linha que deu erro, linha 2, assinalou onde exatamente na linha começou a dar erro, que foi justamente onde tentamos escrever oi e não fechamos os parênteses, mas agora é um outro tipo de erro, é um erro de sintaxe.

Então, aviso que o Node dá, syntax error (erro de sintaxe), e ele já indica o que está ocorrendo, ele diz que falta um fechamento de parênteses após a lista de argumentos. Lista de argumentos porque console.log é uma função que recebe uma lista de argumentos, e faltou fechar essa lista.

### Os tipos de erro
Então, já notamos que existem dois tipos de erro, erro de referência e erro de sintaxe, eles são tipos de erro muito comuns, os sintáticos normalmente pegamos mais rápido porque quase sempre eles vão aparecer no VSC, assinalados em vermelho, porém sempre temos que interpretar a mensagem.

Então, os erros de sintaxe, eles normalmente são mais fáceis de identificar, porém erros de lógica, como o que fizemos anteriormente na variável que não existe, são um pouco mais difíceis de identificar algumas vezes porque o VSC normalmente não vai indicar esse erro, porque ele não sabe que a variável não foi declarada.

Então, sempre temos que interpretar a nossa stack trace, ver onde no arquivo que deu erro e tentar descobrir o que ocorreu. Não se esqueça de sempre utilizar o tradutor quando necessário para entender melhor os avisos.

Existem vários métodos para lidar com erros no JavaScript que não vamos ver neste curso, porque é um conteúdo um pouco mais avançado, mas à medida que formos trabalhando nas nossas aplicações, vamos abordar este tema.

---

##  tipos de erros do Node.js
Leitura do artigo [Lidando com erros no Node.js](https://www.alura.com.br/artigos/lidando-com-erros-node-js)

---

## o console.log()
uando se trata de desenvolvimento em JavaScript, uma ferramenta essencial para devs é o console.log(). Este é um método utilizado para exibir mensagens ou depurar o código durante o desenvolvimento de aplicativos web.

### O que é o console.log()?
O console.log() é uma função disponível nos navegadores e no ambiente Node.js. Sua principal finalidade é imprimir mensagens ou valores no console do navegador ou terminal, facilitando o acompanhamento e depuração do código.

### Como usar o console.log()?
Para usar o console.log(), basta inserir a função seguida pelos dados que você deseja exibir no console, como strings, variáveis, objetos, arrays, entre outros. Acompanhe alguns exemplos simples:

Exibir uma string no console:
```
console.log('Olá, Mundo!');
```

Mostrar o valor de uma variável:
```
  let idade = 25;
  console.log('A idade é:', idade);
```

### Por que o console.log() é importante?
O console.log() é uma ferramenta valiosa durante o desenvolvimento devido à sua capacidade de exibir informações úteis sobre o código. Ajuda a identificar possíveis erros, acompanhar o fluxo de execução do programa e visualizar os valores das variáveis em momentos específicos, permitindo a correção de problemas e otimização do código.

Utilizá-lo em seus projetos irá melhorar sua experiência de desenvolvimento e aprimorar a qualidade do seu código.

A função log() é a mais geral e a mais utilizada, porém o objeto Console tem várias outras ferramentas mais específicas para serem utilizadas conforme o caso.
[lista completa na documentação](https://developer.mozilla.org/pt-BR/docs/Web/API/console)

---


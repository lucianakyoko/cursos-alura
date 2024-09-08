# Anotações do curso

---

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


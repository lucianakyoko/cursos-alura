# ANOTAÇÕES - JAVASCRIPT: TIPOS, VARIÁVEIS E FUNÇÕES

---
<p align="center">
  <a href="#-aula-1">Aula 1</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-2">Aula 2</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-3">Aula 3</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-4">Aula 4</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-5">Aula 5</a> 

</p>

---

## 📌 AULA 1
### TIPOS PRIMITIVOS
**números**: Programas funcionam manipulando valores, como o número 3.14 ou o texto Juliana e Leonardo. Os tipos de valores que podem ser representados e manipulados em uma linguagem de programação são conhecidos como tipos, e uma das características mais fundamentais de uma linguagem de programação é o conjunto de tipos que ela suporta.

**Variáveis**: Quando um programa precisa reter um valor para uso futuro, ele atribui o valor a (ou “armazena” o dado em) uma variável. As variáveis têm nomes e permitem o uso desses nomes em nossos programas para se referir a valores. A maneira como as variáveis funcionam é outra característica fundamental de qualquer linguagem de programação.

Os tipos de JavaScript podem ser divididos em duas categorias: **tipos primitivos** e **tipos de objetos**. Os tipos primitivos do JavaScript incluem números, palavras ou texto (conhecidas como strings) e valores booleanos (conhecidos como booleanos).

**Tipos numéricos**: O ponto flutuante pode ter um ponto decimal; eles usam a sintaxe tradicional para números reais. Um valor real é representado como a parte integral do número, seguido por um ponto decimal e a parte fracionária do número.

Pontos flutuantes também podem ser representados usando notação exponencial: um número real seguido pela letra e (ou E), seguido por um sinal opcional de mais (+) ou menos (-), e por um expoente inteiro. Essa notação representa o número real multiplicado por 10 à potência do expoente.

Divisão por zero não é um erro em JavaScript: ele simplesmente retorna “Infinity”. No entanto, há uma exceção: zero dividido por zero não tem um valor bem definido e o resultado dessa operação é o valor especial não numérico NaN.

```
var a = 10
var b = 0
console.log(a/b) // Infinity
```
```
var a = 0
var b = 0
console.log(a/b) // NaN
```

#### Codificação de strings
Para que o computador consiga decifrar um caractere especial, é preciso utilizar um sistema específico que tenha basicamente um código para cada caractere, e que o computador possa acessá-lo para fazer a conversão - uma ideia similar a que está por trás da criptografia.

Foram desenvolvidos diversos conjuntos de caracteres, desde os específicos de cada linguagem como Western, Latin-US, Japanese e assim por diante, até o ASCII (American Standard Code for Information Interchange ou ”Código Padrão Americano para o Intercâmbio de Informação”). e a partir de 2007 foi adotado o formato Unicode. O padrão UTF (de Unicode Transformation Format ou “formato de conversão de unicode”, em tradução livre) é utilizado como padrão na web até hoje.

Podemos testar a transformação/conversão do código Unicode em caractere utilizando o console.log()
```
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)
```

Os caracteres \u no início do código são caracteres de escape que usamos para sinalizar ao JavaScript de que estamos falando de códigos Unicode, e não de strings de texto usuais.

O JavaScript usa, por padrão, o UTF-16. O número 16 está relacionado aos espaços em bits ocupados por cada caractere, 16 neste caso. 

Bancos de dados podem aceitar outros tipos de codificação de caracteres, o que faz sentido se pensarmos que o UTF-16 utiliza uma quantidade relativamente grande de espaço em memória para salvar cada caractere. 16 bits parece pouco, mas algumas vezes os bancos precisam salvar quantidades enormes de dados! Porém, com as tecnologias de armazenamento e tráfego de dados que temos hoje, esta já não é uma preocupação tão grande, a não ser em casos muito específicos. Já não é muito comum utilizar uma codificação diferente da UTF em bancos mesmo em caso de grandes volumes de dados, mas sempre vai depender muito do caso.

#### Trabalhando com strings
O JavaScript traz em sua biblioteca-base vários métodos que usamos para manipular strings de texto: alterar de maiúsculas para minúsculas, contar quantas letras tem uma palavra, retirar espaços, juntar duas strings, etc.

Por exemplo, para padronizar uma comparação entre strings:
```
const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false
```

Para o JavaScript, ambos os dados são apenas sequências de caracteres, e a comparação vai falhar, pois como já vimos, o JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos.

Uma das formas de tratar isso é padronizando todos os inputs para o formato de texto que será comparado antes mesmo de fazer a comparação. Nesse caso, transformando todos os caracteres em letras minúsculas.

```
const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true
```

Acima, vemos um dos métodos de string nativos do JavaScript em ação, o toLowerCase() que converte todos os caracteres da string informada (no caso, input) para letras minúsculas (se forem algarismos, nada é convertido).


Outro exemplo: qualquer inserção de texto que exija uma quantidade mínima de caracteres, como uma senha ou um nome. A propriedade length pode ser utilizada para sabermos quantos caracteres uma string contém:

```
const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres

```

#### Padrão de nomes no JavaScript
Um detalhe muito importante, mas que às vezes não percebemos quando começamos a programar, é que cada linguagem possui seus próprios padrões. Eles servem não somente para a escrita de códigos que funcionem, mas também para criar nomes de variáveis, estruturar um programa e muito mais.

A primeira coisa que precisamos ter em mente é que o JavaScript é case-sensitive, ou seja, diferencia maiúsculas e minúsculas. 

Existem várias convenções para nomes e cada linguagem de programação tem o seu. Seguem alguns deles:

 - **camelCase**: Inicia com letra minúscula e a primeira letra de cada palavra em seguida é escrita com letra maiúscula. Por exemplo: minhaVar ou senhaDoUsuario. Esta é a convenção utilizada pelo JavaScript para variáveis e funções.

- **snake_case**: Os espaços são substituídos pelo caractere _ (underline), com todas as 
palavras em letra minúscula. Por exemplo: minha_variavel ou senha_do_usuario.

- **kebab-case**: Similar ao anterior, porém com os espaços substituídos por hífens. Por exemplo: minha-var ou senha-do-usuario. Esta convenção não pode ser utilizada no JavaScript para variáveis e funções.

- **PascalCase**: Similar ao CamelCase, porém neste caso todas as palavras começam com letra maiúscula. Por exemplo: MinhaVar ou SenhaDoCliente.

IMPORTANTE:  Nunca utilize espaço nem caracteres especiais, nem inicie os nomes das variáveis com números.

####  Tipos null e undefined
  O **null** é um tipo especial, pois pode ser traduzido como “ausência de valor” e pode ser atribuído como valor de uma variável:

```
let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}
```

Nesse caso, qual seria a diferença entre os dois casos abaixo?
```
let input = null;
let input2;

console.log(input); // null
console.log(input2); // undefined
```

É aqui que entra o tipo ```undefined```. Este tipo também representa “ausência de valor”, porém de uma outra forma: usualmente, enquanto ```null``` é um valor atribuído a uma variável que existe e foi iniciada, undefined se refere ao valor de uma variável que não foi inicializada (ou seja, não foi atribuído nenhum valor a ela).

```undefined``` também é o valor retornado por uma função que não tem cláusula return. 

É importante notar que, embora os dois tipos sejam utilizados para sinalizar ausência de valor, os operadores de comparação do JavaScript podem ou não diferenciá-los:

```
console.log(null == undefined); // true
console.log(null === undefined); // false
```

No cotidiano é comum considerar undefined como uma ausência de valor “inesperada” (causada por um bug ou erro no código) e null como um tipo de dado que também significa ausência de valor, mas não de maneira inesperada. Por exemplo, um campo em uma tabela de um banco de dados que esteja sem dados ou uma informação solicitada que não seja obrigatória e não tenha sido preenchida pelo usuário pode ter valor null.

---

## 📌 AULA 2
### DECLARANDO VARIÁVEIS
#### String()
Vamos fazer alguns exemplos de conversão de números e booleanos através de String():
```
let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings
```

Outra opção para transformarmos um valor em String é usar o toString():
```
let telefone = 12341234;
console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.
```

#### Number()
Vamos fazer alguns exemplos de conversão de textos e booleanos através de Number():
```
// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da multiplicação
```

Podemos usar o operador de soma + para fazer a conversão de textos para números, colocando-os antes das variáveis:
```
let largura = "10";
let altura = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis
```

```
let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN
```

```
let usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.
```
---

## 📌 AULA 3
### O JAVASCRIPT E O NODEJS
O JavaScript é uma **linguagem interpretada** com **Tipagem Dinâmica** e **Multiparadigmas**

O JS como é uma linguagem interpretada, precisamos do navegador para interpretar, ou podemos usar o Node como interpretador.

O NodeJS não é uma linguagem.

#### Tipos de erro
Cada linguagem de programação tem sua própria forma de lidar com erros. O JavaScript começa dividindo cada tipo de erro possível em algumas categorias:

- *RangeError*: Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável. Por exemplo, um processamento que só pode ser feito com números inteiros maiores ou iguais a zero, mas recebe -1.

- *ReferenceError*: Normalmente ocorre quando o código tenta acessar algo que não existe, como uma variável que não foi definida; muitas vezes é causado por erros de digitação ou confusão nos nomes utilizados, mas também pode indicar um erro no programa.

- *SyntaxError*: Na maior parte dos casos ocorre quando há erros no programa e o JavaScript não consegue executá-lo. Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta, por exemplo, operadores ou sinais gráficos com elementos a menos, como esquecer de fechar chaves ou colchetes.

- *TypeError*: Indica que o código esperava receber um dado de um determinado tipo, tal qual uma string de texto, mas recebeu outro, como um número, booleano ou null.

[DOCUMENTAÇÃO](https://nodejs.org/api/errors.html#errors_errors)

#### Outros métodos da Console API
Embora seja o mais utilizado, .log() é um dos vários métodos que podemos utilizar para exibir informações na chamada “saída padrão” - o terminal - enquanto estamos desenvolvendo uma aplicação. A palavra log significa algo como “registro”, então este método apenas registra no terminal o que passamos entre os parênteses, por exemplo o conteúdo de uma variável ou o resultado de uma operação.

Entre os outros métodos, existem:

 - ```console.error()``` para exibir mensagens de erro;
 - ```console.table()``` para visualizar de forma mais organizada informações tabulares;
 - ```console.time()``` e ```console.timeEnd()``` para temporizar período que uma operação de código leva para ser iniciada e concluída;
 - ```console.trace()``` para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.

 A [documentação](https://nodejs.org/api/console.html) oficial do NodeJS dá exemplos sobre como utilizar cada um destes métodos e mais outros da lista.

#### Características do JS
O JavaScript foi padronizado em 1996 pela European Computer Manufacturers Association (ECMA), e é por isso que às vezes você o ouve como ECMAScript. É uma linguagem incrivelmente poderosa, presente na maioria dos navegadores e no back-end de grandes sistemas.

Os tipos primitivos do JavaScript incluem números, texto (conhecidas como strings) e valores booleanos. Já o tipo objeto é uma coleção de propriedades, onde cada uma possui um nome e um valor, sendo ele um valor primitivo ou outro objeto.

 O JavaScript é uma linguagem de programação multiparadigma e possui suporte para funcional, orientado a objetos ou lógico por exemplo.

 Diferente de outras linguagens de programação como Java ou Python, divisão por zero no JavaScript não gera um erro. O retorno desta operação é infinito ou infinito negativo (Infinity). Porém, a divisão de zero por zero resulta num NaN (not a number).


---

## 📌 AULA 4
###  OPERADORES
A lista de operadores é extensa e há muitas formas de utilizá-los. Além das operações matemáticas básicas, do = para atribuição de valor em uma variável e das comparações com == e ===, utilizamos operadores para diversas outras tarefas de código, por exemplo:

||: Operador “ou”, retorna true caso uma condição seja válida;
&&: Operador “e”, retorna true somente se todas as condições forem válidas;
!= e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma que == e === retornam true ou false.
A documentação do MDN sobre operadores tem a lista completa, com vários exemplos. Invista um tempo para se familiarizar com cada um deles e tente pensar em exemplos de uso para cada um.

---

## 📌 AULA 5
### FUNÇÕES
As funções ajudam muito no desenvolvimento de um código, pois colaboram para a separação de trechos de código com funções específicas, tornando-o menor e mais legível, o JavaScript nos oferece algumas funções prontas, como é o caso de funções matemáticas (Math em inglês), alguns exemplos são:

Math.round(): Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.

Math.round(4.3) retorna 4
Math.round(3.85) retorna 4
Math.round(2.5) retorna 3, quando o número termina com 0.5 a função arredonda para cima
Math.ceil(): Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).

Math.ceil(5.2) retorna 6
Math.floor(): Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).

Math.floor(5.2) retorna 5
Math.trunc() : Desconsidera os números decimais, o que é conhecido como truncamento.

Math.trunc(4.3) retorna 4
Math.trunc(4.8) retorna 4
Math.pow() : Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplicação por ser mais rápido.

Math.pow(4 , 2) retorna 4^2 = 16
Math.pow(2.5 , 1.5) retorna 2.5^(3/2) = 3.9528 ...
Math.sqrt() : Retorna a raiz quadrada de um número.

Math.sqrt(64) retorna 8
Math.min(): Retorna o menor valor entre os argumentos.

Math.min(0, 150, 30, 20, -8, -200) retorna -200
Math.max(): Retorna o maior valor entre os argumentos.

Math.max(0, 150, 30, 20, -8, -200) retorna 150
Math.random(): Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado para receber.

Math.random() retorna 0.7456916270759015
Math.random() retorna 0.15449802102729304
Math.random() retorna 0.4214269561951203
Para ver mais funções matemáticas, basta acessar a [documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math#description) do Math.

#### Tipo de funções
Os parâmetros e o retorno das funções são utilizados de acordo com cada caso específico. Isso significa que nem sempre todas as funções que escrevemos vão precisar de um ou de outro para fazer o que precisam. Abaixo temos mais exemplos para entender melhor algumas situações.

**Função sem retorno e sem parâmetro**: A função abaixo apenas executa uma instrução, sem a necessidade de disponibilizar o resultado para o restante do código. Neste exemplo escolhemos usar uma string fixa, então não há necessidade de parâmetros.
```
function cumprimentar(){
 console.log('oi gente!')
}

cumprimentar()
```

**Função sem retorno, com parâmetro**: similar à anterior, porém agora a função recebe, via parâmetro, o nome da pessoa a ser cumprimentada. Dessa forma é possível reaproveitar a função para que funcione de maneira parecida com o nome de qualquer pessoa (desde que esteja no formato de dado string).
```
function cumprimentaPessoa(pessoa){
 console.log(`oi, ${pessoa}!`)
}

cumprimentaPessoa('Helena')
```

**Função com retorno, sem parâmetro**: É possível combinar funções para que cada uma controle apenas uma parte do código e elas trabalhem juntas.
No caso abaixo, a função cumprimentar() não precisa receber nenhum parâmetro. Mas logo abaixo vemos que ela está sendo utilizada para montar uma string na função cumprimentaPessoa(nomePessoa). Isso significa que a string ”Oi gente!” deve estar disponível para outras partes do programa - ou seja, deve ser retornada com o uso da palavra-chave return.
```
function cumprimentar(){
 return 'Oi gente!'
}

function cumprimentaPessoa(nomePessoa) {
 console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”
```

A função cumprimentaPessoa(nomePessoa) recebe como parâmetro uma string onde podemos passar qualquer nome no momento em que executamos (ou chamamos) a função. Quando isso acontecer, a função cumprimentar() será executada também, e seu valor de retorno - a string Oi gente! - vai ocupar o lugar do ${} onde a função está sendo chamada.

**Função com return e mais de um parâmetro**: Lembrando que as funções podem receber a quantidade de parâmetros necessária, e que o JavaScript identifica os parâmetros pela ordem! Ou seja, no exemplo abaixo o parâmetro numero1 se refere a 15, o parâmetro numero2 se refere a 30 e o parâmetro numero3 se refere a 45. Somos nós, que estamos desenvolvendo o código, que damos os nomes aos parâmetros de acordo com o dado que a função espera receber - no caso, números.
```
function operacaoMatematica(numero1, numero2, numero3) {
 return numero1 + numero2 + numero3
}

operacaoMatematica(15, 30, 45) // 90
```

**Parâmetros x argumentos**: Na prática se referem ao mesmo tipo de dado; algumas documentações se referem a parâmetros no momento em que a função é definida (no caso, numero1, numero2, etc) e argumentos como os dados que utilizamos para executar a função (ou seja, 30, 45, etc).

Ainda há muito o que estudar no tema de funções, então pratique bastante pois parâmetros e retorno são conceitos essenciais.

#### Utilizando parâmetros
Existem diversas linguagens de programação, como Javascript e Python. Cada uma delas possui sua própria sintaxe e em alguns momentos, se comportam de forma diferente.

Quando executamos uma função em Python que espera um parâmetro e ele não é passado, recebemos uma mensagem de erro TypeError: comParametro() takes exactly 1 argument (0 given), indicando que a função comParametro espera um parâmetro. Porém, isso não acontece no JS.

Observe o seguinte código:
```
function comParametro(param) {
    console.log(param)
}
comParametro()
```

 Em JavaScript, os parâmetros de funções tem undefined como valor predefinido.
# ANOTAÇÕES - Algoritmos com JavaScript II: aprofundando em algoritmos de ordenação e busca

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
### Dividir para conquistar
####  A tal da recursão
Quando pesquisamos sobre recursão, normalmente encontramos duas definições que se completam:

1 - Um método utilizado para resolver problemas de computação em que a resolução consiste em solucionar instâncias menores do mesmo problema;

2 - Um método em que uma função ou algoritmo chama a si uma ou mais vezes até que se atinja uma condição específica, quando o resultado de cada repetição é processado desde a última chamada até a primeira.

Um exemplo interessante de código para ilustrar esse cenário seria o seguinte:

Abaixo é definida uma função para controlar a frequência com que os números são incrementados durante a execução da função recursiva incrementaNumero(), que será definida a seguir:
```
function dorme(milissegundos){
  return new Promise(resolve => setTimeout(resolve, milissegundos));
}
```

Aqui é definida uma função assíncrona recursiva que incrementa o número passado como parâmetro em uma unidade e, após 2 segundos, chama a si própria antes de encerrar a sua execução, ilustrando efetivamente um caso de recursão:
```
async function incrementaNumero(numero){
  console.log(numero)
  await dorme(2000)
  return incrementaNumero(numero + 1)
}

incrementaNumero(1)
```
Para o qual a saída seria:
```
1
2
3
4
5
```
Como podemos ver, a função incrementa o número passado como parâmetro em uma unidade e, antes de sair, chama a si própria novamente.

Ainda que o exemplo passado seja uma forma bastante objetiva de demonstrar recursividade, a sua utilização no mundo real não é muito prática já que essa função continuaria realizando o mesmo processo infinitamente - não foi passada nenhuma condição de saída - e não seríamos capazes de retirar valor da sua execução.

Para solucionar esse problema existem os base cases ou, em português, casos base. Mas o que são esses casos base? São uma forma de passar para a função uma condição de controle para a recursividade ou, em outras palavras, uma condição de saída.

Segue exemplo de caso base para função recursiva:

Abaixo é definida uma função para controlar a frequência com que os números são incrementados durante a execução da função recursiva incrementaNumero() que será definida a seguir:
```
function dorme(milissegundos) {
  return new Promise(resolve => setTimeout(resolve, milissegundos));
}
```

Aqui é implementada uma função recursiva com caso base:
```
async function incrementaNumero(numero){
  console.log(numero)
  await dorme(2000)
```

Aqui é implementada o caso base(base case) que fará com que a função pare a recursão quando o valor do parâmetro numero for igual a 10:
```
async function incrementaNumero(numero){
  console.log(numero)
  await dorme(2000)

  if (numero === 10) {
    return 'finalizou'
  }
  return incrementaNumero(numero + 1)
}

incrementaNumero(1)
```
A saída então será:
```
1
2
3
4
5
6
7
8
9
10
```

É importante lembrar que a função recursiva é aquela que chama a si mesma até encontrar uma condição de saída/parada. A recursividade é uma técnica muito aplicada em estruturas de dados, algoritmos e gráficos.

Por exemplo, é recursão o efeito de tela infinita que surge em suas chamadas de vídeo ou quando você coloca um espelho em frente ao outro. No entanto, temos a possibilidade e obrigação de inserir uma verificação que interrompa este comportamento, ou então a função entrará em loop infinito.

####  Além do console.log()
Acredite ou não, o objeto console do nosso amigo JavaScript tem muito mais métodos do que o log().

Ele também conta com um método chamado trace() que, além de imprimir mensagens, também fornece um stack trace, uma espécie de rastro de execução das funções executadas.

De forma bem simples, o trace() vai mostrar o caminho percorrido pelo programa até chegar ao ponto em que a função console.trace() é chamada.

Para fazermos um teste, vamos criar um arquivo index.js e nele uma função chamada ola() e outra chamada mundo():
```
function ola(){
  function mundo() {
      console.trace('Ola Mundo');
    }
  mundo();
}

ola();
```

A saída no seu terminal será assim:
```
Trace: Ola Mundo
    at mundo (file:///<diretorio>/index.js:3:15)
    at ola (file:///<diretorio>/index.js:5:1)
    at file:///<diretorio>/index.js:8:1
    at ModuleJob.run (internal/modules/esm/module_job.js:140:23)
    at async Loader.import (internal/modules/esm/loader.js:165:24)
    at async Object.loadESM (internal/process/esm_loader.js:68:5)
```

Como podemos ver, o método console.trace() imprime a mensagem "Ola Mundo" no topo e depois apresenta todo o caminho percorrido nos locais em que o console.trace() foi chamado.

Aqui a função ola() é chamada primeiro e a função mundo() é chamada posteriormente (observe que na lateral direita aparece o número da linha em que o console.trace() é chamado, que é o número "3").

O console.trace() é muito vantajoso quando pensamos em cenários complexos, pois fornece um stack trace (rastreamento de pilha) completo, com informações sobre os locais, módulos ou arquivos em que os métodos são chamados.

Esse método funciona como ferramenta importante para encontrarmos bugs e atua de mãos dadas com o interpretador. Essa prática é possível graças ao motor de interpretação do JavaScript (também chamado de engine) que utiliza uma pilha de chamadas (call stack) como regra de execução de funções. A pilha de chamadas trabalha com a estrutura de dados conhecida como pilha, que tem como regra que "o último a entrar é o primeiro a sair" - uma sigla conhecida na programação como LIFO, last-in-first-out.

Isso significa que, sempre que executarmos um script, o motor JavaScript organiza a execução de forma global e insere a execução da última função chamada no topo de pilha de chamadas.

Imagine blocos empilhados um em cima do outro, ou uma pilha de pratos. Se tentarmos retirar o último bloco ou o último prato, o que acontece? Certamente tudo irá desmoronar, e é assim que a pilha de chamadas funciona também; o motor JavaScript executa a última função chamada e se uma função chamar outra em seu escopo, um novo contexto de execução será criado e colocará a nova função no topo da pilha de chamadas.

O script só finaliza a execução quando a pilha de chamadas estiver vazia.

---

## 📌 AULA 2
### Merge Sort
#### Uma implementação “oficial”?
Durante o curso, temos abordado cada algoritmo a partir do conceito, passando pela representação em diagrama/teste de mesa, para só depois implementar o código. O que pode gerar a pergunta: Existe mais de uma forma de implementar um algoritmo?

A resposta é: sim. O código, com suas funções e métodos utilizados, pode variar e depende inclusive da linguagem utilizada. É possível encontrar o mesmo algoritmo implementado de formas diferentes. Porém, a lógica de funcionamento do algoritmo sempre permanece a mesma. Por esse motivo não começamos direto pelo código e sim entendendo como o algoritmo é pensado e como ele deve se comportar.

Durante o curso, desenvolvemos primeiramente um código mais “agnóstico”, para em seguida utilizar mais métodos como, por exemplo, array.push(). Mas seria possível desacoplar ainda mais, abstraindo funções de comparação para não depender de uma propriedade objeto.preco, por exemplo.

#### Ordenando pelo pivô


---

## 📌 AULA 3
### Quick Sort

O quick sort utiliza o princípio do elemento pivô para fazer a ordenação dos elementos.
  - Posicionar o pivô no meio do array é uma das opções para este algoritmo, mas poderia ser um elemento escolhido de forma aleatória ou o último elemento do array. Para o algoritmo, não há diferença em posicionar o pivô entre qualquer uma destas três opções - você pode fazer o teste de mesa e observar o comportamento dos elementos. Porém, haverá mudança no código!
  - utilizamos sempre o elemento do meio do array como pivô para separar maiores e menores, porém a posição do pivô com relação ao array completo vai sendo modificada durante a ordenação. Conforme vimos durante as aulas, o array original vai ser “fatiado” em pequenas partes, e sempre que isso acontece é definido um novo pivô a partir do meio do array.
  - Posicionar o pivô no primeiro elemento do array pode levar o algoritmo a se comportar no pior caso possível, se o array já tiver algum tipo de ordenação interna. Observando a simulação que fizemos na aula, vemos que a ordenação do array é feita em partes bem pequenas para que depois ele seja reconstruído. Desconstruir essas partes já ordenadas, para desordená-las temporariamente e só depois reconstruí-las não é uma boa escolha.

---

## 📌 AULA 4
### Busca binária
#### Outros erros da busca binária
Durante a aula, vimos que, se não colocamos a condição de > ate e tentarmos buscar um número inexistente maior do que qualquer um da lista, o resultado será um erro do tipo RangeError: Maximum call stack size exceeded.

Vamos falar um pouco mais sobre este erro em seguida. Mas agora, vamos testar mais dois casos: Um elemento inexistente menor do que qualquer um da lista, e outro inexistente no meio, ou seja, entre os valores da lista.

Valor menor:
Vamos chamar a função passando 1 como valor buscado:
```
console.log(busca(listaLivros, 0, listaLivros.length - 1, 1));
```

Executando o código, temos o seguinte retorno no terminal:
```
/<diretório>/aula-4/busca.js:11
  if (valorBuscado === atual.preco) {
                             ^

TypeError: Cannot read property 'preco' of undefined
```

Ué, não deveríamos ter recebido um erro do tipo rangeError? O que aconteceu de diferente?
Vamos conferir o que a função busca() está recebendo como parâmetro a cada chamada:
```
function busca(array, de, ate, valorBuscado) {
 console.log('de, ate', de, ate)
 //restante do código
}
```

E executar novamente:
```
de, ate 0 10
de, ate 0 4
de, ate 0 1
de, ate 0 -1
```

No caso de valores menores, o código do algoritmo chama a função busca() passando sempre o valor do parâmetro ate diminuindo um número:
```
 if (valorBuscado < atual.preco) {
   return busca(array, de, meio - 1, valorBuscado);
 }
```

Quando o valor atinge -1, que não é um valor válido de índice de array, o resultado de atual.preco retornará undefined.

Valor inexistente no meio do array
Vamos chamar a função passando 36 como valor buscado. Não é menor do que todos nem maior do que todos, porém não existe nenhum objeto com esse valor no array:
```
console.log(busca(listaLivros, 0, listaLivros.length - 1, 36));
```

Executando o código, temos o seguinte retorno no terminal:
```
RangeError: Maximum call stack size exceeded
```

Dessa vez, voltamos a receber o rangeError. Observando o `console.log(‘de, ate’, de, ate), os valores finais retornados são:
```
de, ate 8 7
de, ate 8 7
de, ate 8 7
de, ate 8 7
```

Até atingir call stack size exceeded, da mesma forma que ocorreu quando passamos o valor de 60, maior do que o maior elemento do array.

#### Maximum call stack size
Vamos ver um pouco mais a fundo o que significa o erro RangeError: Maximum call stack size exceeded visto anteriormente.

A pilha de chamadas
Em programação, uma pilha é uma estrutura de dados onde o último item adicionado é o primeiro a ser removido - como uma pilha de livros no mundo real, por exemplo. Também nos referimos como pilha (ou stack) a estrutura onde estão “empilhados” os processos que estão sendo executados em um programa.

Nem todo interpretador ou linguagem de programação lida da mesma forma com os processos que devem ser executados por um programa. O NodeJS trabalha com o paradigma de programação orientada a eventos (event driven programming), e o gerenciamento dos processos ocorre através do que chamamos de loop de eventos.

Não vamos entrar em detalhes aqui sobre como ocorrem a entrada e a saída de processos deste loop e a forma como o Node trabalha com threads e programação assíncrona - são assuntos complexos o suficiente para terem seus próprios cursos. Porém, vale mencionar aqui que, assim como em outras linguagens de programação, o JavaScript também trabalha com pilhas de chamadas. No NodeJS, esta pilha faz parte da estrutura do loop de eventos; quando uma função é chamada por um programa ela entra na stack, ou seja, na pilha de execução, onde apenas um processo é executado por vez e o próximo processo só é executado após a finalização do processo atual.

Esta pilha tem uma quantidade limitada de processos que podem ser empilhados (o que depende de muitos fatores, como memória disponível, arquitetura, etc); caso o interpretador não consiga limpar a pilha, ou seja, executar e finalizar os processos/funções que estão empilhados, ao atingir o limite o programa cai no chamado erro de estouro de pilha, também chamado de stack overflow (daí o nome do famoso fórum de programação).

Um dos motivos mais comuns para o estouro de pilha são justamente as chamadas recursivas onde o caso base (como vimos na atividade “Para Saber Mais” da aula 2) não existe ou não foi definido da forma correta. Sem o caso base, as funções recursivas não param de ser chamadas e vão se empilhando na pilha de chamadas, até que não haja mais recursos para processar o programa.

No caso do exemplo visto durante a aula, o NodeJS retorna o erro RangeError: Maximum call stack size exceeded, ou “tamanho máximo da pilha de chamadas excedido” e encerra a execução.

Por isso, é muito importante sempre testar as funções recursivas e definir quando interromper a recursividade.

sobre a busca binária:
  - A busca binária utiliza recursão de uma forma similar ao merge sort e ao quick sort para dividir o array em partes cada vez menores. A cada chamada recursiva, o array é dividido em seções cada vez menores, e o valor buscado é situado entre à esquerda (menor) ou à direita (maior) do que o elemento central. Dessa forma, é possível descartar metade dos elementos de cada seção, a cada chamada da função.
  - A busca binária é mais eficiente em termos de quantidade de operações necessárias do que a busca linear. Conforme as simulações feitas durante a aula, é possível localizar um elemento em um array com um número máximo de operações muito menor do que a busca linear.

---

## 📌 AULA 5
### Análise dos algoritmos

#### Métodos do JavaScript
No dia a dia do trabalho, é muito comum usarmos métodos nativos - ou seja, aqueles que já são próprios da linguagem e só precisam ser “chamados” como funções - para que nosso código fique mais legível ou então para simplificar o trabalho. Exemplos bem comuns são os métodos sort() e find(), respectivamente usados para ordenação e busca.

O método sort() molda elementos de um array em strings e os ordena em ordem crescente. Vamos ver um exemplo?
```
let numeros = [1, 2, 3, 101, 20, 3, 30, 31, 40];
numeros.sort();
console.log(numeros);

// Saída
// [1, 101, 2, 20, 3, 3, 30, 31, 40]
```

Observe que a saída mostra a classificação dos números um pouco diferente do esperado. Isso ocorre pois o método trata os elementos do array como strings e os coloca em ordem sequencial de acordo com sua posição na tabela ASCII, onde 20 vem antes de 3.

Para que o sort() funcione de acordo com o esperado, precisamos passar os parâmetros de comparação de forma explícita:
```
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
// Saída 
//[1, 2, 3, 4, 5]
```

Você pode conferir com detalhes o uso do sort() em JavaScript na documentação do MDN.

Indo além do uso do método no dia a dia, já imaginou como esses métodos funcionam “por baixo dos panos”? Não é somente uma palavra para complementar seu código, pois assim como criamos funções, os métodos nativos da linguagem também possuem lógica e algoritmos por trás. Vamos conhecer um pouco mais?

No JavaScript, a forma como o método é implementado depende do motor que faz a interpretação. A partir de cada versão aprovada do JavaScript pelo ECMA, as empresas ou fundações responsáveis pelos navegadores/interpretadores (chamadas de vendors no jargão da área) decidem e fazem a implementação das funcionalidades.

No caso do motor V8, utilizado pelo Chrome/NodeJS, o sort() tem em sua implementação os algoritmos quick sort - ordenação rápida e insertion sort - ordenação por inserção, e funcionam da seguinte maneira:
```
 function QuickSort(a, from, to) {
    var third_index = 0;
    while (true) {
      // Insertion sort is faster for short arrays.
      if (to - from <= 10) {
        InsertionSort(a, from, to);
        return;
      }
```

Por outro lado, no motor SpiderMonkey, utilizado pelo Firefox, o algoritmo utilizado por trás do método sort() é o merge sort, implementado abaixo em C++:
```
JSBool
js::array_sort(JSContext *cx, uintN argc, Value *vp)
{
    jsuint len, newlen, i, undefs;
    size_t elemsize;
    JSString *str;

    Value *argv = JS_ARGV(cx, vp);
    Value fval;
    if (argc > 0 && !argv[0].isUndefined()) {
        if (argv[0].isPrimitive()) {
            JS_ReportErrorNumber(cx, js_GetErrorMessage, NULL, JSMSG_BAD_SORT_ARG);
            return false;
        }
        fval = argv[0];     /* non-default compare function */
    } else {
        fval.setNull();
    }

    JSObject *obj = ToObject(cx, &vp[1]);
    if (!obj)
        return false;
+
−    if (!js_GetLengthProperty(cx, obj, &len))
        return false;
    if (len == 0) {
        vp->setObject(*obj);
        return true;
    }

    /*
     * We need a temporary array of 2 * len Value to hold the array elements
     * and the scratch space for merge sort. Check that its size does not
     * overflow size_t, which would allow for indexing beyond the end of the
     * malloc'd vector.
     */
#if JS_BITS_PER_WORD == 32
    if (size_t(len) > size_t(-1) / (2 * sizeof(Value))) {
        js_ReportAllocationOverflow(cx);
        return false;
    }
```
Esse conhecimento é importante para escolhermos os métodos nativos que aplicamos em nosso código e também para entendermos certos comportamentos dos programas e aplicações ao serem interpretados pelos motores.

#### Logaritmo binário
Em computação sempre é utilizado o logaritmo com base 2 (e, consequentemente, o inverso é a potência de 2). Assim, log n representa de forma abreviada log2 n, ou seja, log de n na base 2.

Esta característica está ligada ao sistema numérico utilizado pelos computadores: o sistema binário (ou de base 2), onde todos os valores são representados pelos números 0 e 1.

Assim, sempre que trabalharmos com valores O(log n), estamos nos referindo a base 2.

---

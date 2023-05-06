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
O quick sort utiliza o princípio do elemento pivô para fazer a ordenação dos elementos.
  - Posicionar o pivô no meio do array é uma das opções para este algoritmo, mas poderia ser um elemento escolhido de forma aleatória ou o último elemento do array. Para o algoritmo, não há diferença em posicionar o pivô entre qualquer uma destas três opções - você pode fazer o teste de mesa e observar o comportamento dos elementos. Porém, haverá mudança no código!
  - utilizamos sempre o elemento do meio do array como pivô para separar maiores e menores, porém a posição do pivô com relação ao array completo vai sendo modificada durante a ordenação. Conforme vimos durante as aulas, o array original vai ser “fatiado” em pequenas partes, e sempre que isso acontece é definido um novo pivô a partir do meio do array.
  - Posicionar o pivô no primeiro elemento do array pode levar o algoritmo a se comportar no pior caso possível, se o array já tiver algum tipo de ordenação interna. Observando a simulação que fizemos na aula, vemos que a ordenação do array é feita em partes bem pequenas para que depois ele seja reconstruído. Desconstruir essas partes já ordenadas, para desordená-las temporariamente e só depois reconstruí-las não é uma boa escolha.



---

## 📌 AULA 3
### Quick Sort


---

## 📌 AULA 4
### Busca binária


---

## 📌 AULA 5
### Análise dos algoritmos

---

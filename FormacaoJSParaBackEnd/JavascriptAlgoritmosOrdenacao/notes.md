# ANOTAÇÕES - JAVASCRIPT 1 - ALGORITMOS DE ORDENAÇÃO

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
### Pensando em algoritmos
#### Algoritmos
Sequência finita de ações executáveis que visam obter uma solução para um determinado tipo de problema.

  - Algoritmos podem ser quebrados em partes menores e estas partes utilizadas em conjunto na resolução de um problema. Dependendo do problema que queremos resolver, um algoritmo pode se tornar muito longo, com muitas sequências de passos, e mais difícil de se construir e testar. Assim como em código, é costume quebrar o algoritmo de resolução de uma tarefa complexa em vários algoritmos (ou partes) menores, especializadas e intercambiáveis para cada parte do problema.
  - Algoritmos são sequências finitas de ações para a resolução de um problema. Estas ações podem ser traduzidas em passos lógicos de um código, instruções para uma receita culinária ou montagem de um móvel, ou até mesmo para ilustrar sequências de ações executáveis que fazemos no nosso dia-a-dia.
  - A mesma sequência finita de ações de um algoritmo pode ser utilizada para resolver o mesmo problema em diversas linguagens de programação.

#### Representando algoritmos
Um fluxograma é uma forma de representarmos os passos de um algoritmo, através de símbolos bem definidos para cada tipo de processo (entrada de dados, processamento, condicionais, etc) para facilitar a visualização e o mapeamento de todos os passos necessários e/ou possíveis em um determinado processo. São muito utilizados para descrever algoritmos, mas podem ser utilizados em qualquer situação que envolva um fluxo finito de ações, com entrada e saída.

Há outras formas de se representar um algoritmo além do fluxograma, como a descrição textual/verbal dos passos, o pseudo-código ou mesmo a própria leitura do código em JavaScript ou outra linguagem de programação.

---

## 📌 AULA 2 - 
### Ordenação com Selection Sort
#### O sort() do JavaScript
Para varrer arrays em busca de dados específicos, podemos utilizar includes(), find() ou filter(), entre outros, e para ordenar arrays podemos usar o método sort().

O sort() utiliza mais de um algoritmo de ordenação, dependendo de principalmente duas coisas: 
  1. as características do array a ser ordenado e 
  2. a implementação do JavaScript que está sendo utilizada.

O JavaScript se desenvolveu como uma linguagem interpretada pelos navegadores, e a partir da especificação do que cada versão da linguagem deve seguir cada navegador implementa os métodos e funções de acordo com suas próprias engines, ou seja, cada navegador tem seu próprio “motor” de interpretação do JavaScript, e a forma como o código é interpretado “por baixo dos panos” em cada navegador pode ser diferente.

No caso do método sort(), a engine de interpretação do JavaScript implementada pela Mozilla no navegador Firefox utiliza um algoritmo chamado Merge Sort, enquanto o Google utiliza, na engine do Chrome (chamada de V8) alterna entre outros dois algoritmos de ordenação, o Quick Sort e o Insertion Sort, dependendo do caso. Existem vários algoritmos de ordenação.

No caso do NodeJS, uma vez que utiliza como base a engine V8 do Google, os algoritmos utilizados no sort() também serão os mesmos.

O método sort(), executado sem nenhum parâmetro, interpreta todos os elementos do array como strings e ordena em ordem alfabética crescente, a partir da tabela Unicode. Para outros tipos de ordenação, por exemplo numérica ou decrescente, é preciso passar parâmetros de comparação para o sort().

Ler [documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)


---

## 📌 AULA 3 - 
### Insertion Sort
#### Testes de mesa ou desk checking
Um teste de mesa é justamente o processo manual de verificar todas as linhas de um código e executá-lo passo a passo com ajuda de, por exemplo, papel e lápis para anotar qual os valores das variáveis em cada passo de cada linha. É como compilar/interpretar um bloco de código usando o cérebro como compilador/interpretador.

Apesar de hoje as IDEs e as linguagens terem ferramentas práticas, modernas e eficientes para avisar, “debugar” e encontrar erros de código, o teste de mesa é uma forma muito boa de se estudar lógica de programação e para entender o que acontece em cada passo de execução do código, especialmente no caso de algoritmos que envolvem laços de repetição, substituição de valores e variáveis temporárias, como vimos durante a aula.

Uma forma muito comum de fazer o registro de valores de variáveis durante um teste de mesa é utilizando tabelas de rastreio, ou trace tables. 

---

## 📌 AULA 4 - 
### Analisando a complexidade
#### Comparação de algoritmos
Existem vários outros algoritmos apenas para resolver o problema de ordenar listas, como Quick Sort, Radix Sort e etc. Todos esses algoritmos já foram desenvolvidos anteriormente, assim como o Selection Sort e o Insertion Sort que utilizamos durante o curso.

Assistir [video](https://youtu.be/BeoCbJPuvSE).

Comparar algoritmos:
  - Uma forma de medirmos a performance de um algoritmo é através do tempo. Um algoritmo “lento”, ou seja, que leva mais tempo para executar em comparação com outro algoritmo que resolve o mesmo problema, pode impactar inclusive a experiência de usuário de um programa (nenhum usuário quer esperar, por exemplo, dois minutos para obter uma lista de produtos ordenada por preço)
  - Sempre que trabalhamos com algoritmos, um dos aspectos mais importantes é a performance. O que chamamos de performance é a quantidade de recursos computacionais que o algoritmo precisa para executar.
  - A quantidade de dados processados impacta diretamente na performance de um algoritmo. Uma lista com poucos elementos não impacta em nada na performance de um algoritmo, mas é possível ver o impacto na quantidade de processos (operações) executados à medida em que a quantidade de dados cresce. Lembrando que trabalhamos com quantidades grandes de dados!

#### Como funciona um processador
É importante relacionar o código e a forma como ele é interpretado pelo computador. Esse conhecimento nos ajuda a entender o porquê de alguns comportamentos das linguagens de programação, porque alguns bugs acontecem e como corrigi-los ou evitá-los. E, como vimos durante a aula, essa questão pode ser essencial para uma boa performance dos nossos programas.


---

## 📌 AULA 5 - 
### Comparando algoritmos


---
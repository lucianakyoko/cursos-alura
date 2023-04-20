# ANOTAÇÕES - JAVASCRIPT: ARRAYS

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
### O QUE SÃO ARRAYS
Array é um tipo de estrutura de dados. Ao contrário de uma variável, que guarda somente um valor por vez, um array (ou lista) pode armazenar diversos valores.

Um array pode ser definido como uma lista ordenada de valores enumerados em que cada valor é chamado de elemento ou item, e cada elemento se localiza numa posição na lista chamada de índice.

Como uma lista ordenada, entende-se que os dados no array estão em uma ordem definida e se manterão nessa ordem. Eles estão enumerados, ou seja, cada um está associado a um identificador numérico que diz qual é a sua posição na lista

ada elemento está localizado em uma posição na lista, chamada de índice:

Se um array é uma lista ordenada, então é possível acessar cada um dos dados (ou valores) nele se soubermos a posição dele na lista. Em programação, chamamos de índice (em inglês, index) o número que identifica a posição de um valor em um array.

Porém um detalhe muito importante para trabalharmos bem com arrays é que em JavaScript (e na maior parte das linguagens de programação) a contagem dos índices não começa no número 1, e sim no número 0. 

#### métodos de array
Um **método** é uma função que serve como uma propriedade do array ou de um objeto.  Ele pode realizar tarefas pré-definidas usando os dados do array e dos parâmetros que passamos para eles, como adicionar, remover ou até encontrar elementos.

Alguns dos métodos:
- ```concat()```: 
  - Junta dois arrays, colocando o array passado como argumento, logo depois do primeiro. Em português essa operação é conhecida como concatenação.
  - Não altera o array no qual foi chamado, então precisamos salvar esse resultado em um novo array

- ```filter()```:
  - Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós.
  - Não altera o array onde foi chamado, então precisamos salvar esse resultado em um novo array.

- ```find()```:
  - Funciona de forma parecida com o filter, porém retorna apenas o primeiro valor que satisfizer o teste, podendo ser uma string ou um número.

- ```findIndex()```:
  - Funciona igual o find(), mas retorna o índice em vez do elemento, possibilitando usá-lo em outras partes do código.

- ```lastIndexOf()```:
  - É igual o findIndex() porém começa do último elemento, não no primeiro.
forEach()
  - Executa uma função em cada elemento do array de forma individual.
  - Não altera o array original e nem retorna um valor, deixando esse trabalho a cargo da função escolhida.

- ```pop()```:
  - Retira o último elemento do array.
  - Altera o array original removendo o elemento.

- ```shift()```:
  - Retira o primeiro elemento do array.
  - Altera o array original removendo o elemento e trocando o índice de todos os elementos para um a menos do que eram, o índice 1 passa a ser o 0, o 2 passa a ser o 1, e assim por diante.

- ```push()```:
  - Adiciona o elemento passado como parâmetro do array, porém na última posição.
  - Altera o array original com o novo valor.

- ```unshift()```:
  - Funciona igual ao push(), porém adiciona na primeira posição e acaba trocando o índice de todos os elementos.
  - Altera o array original com o novo valor.

- ```reduce()```:
  - Utiliza uma função definida pelo usuário em cada um dos elementos, guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida, retornando um único valor no final, reduzindo o array para um único valor.

- ```reduceRight()```:
  - Funciona igual o reduce() porém começa do final do array e segue até o início.

- ```reverse()```:
  - Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.

- ```slice()```:
  - Copia uma parte do array para outro array.

- ```sort()```:
  - Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras, porém não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando.

- ```splice()```:
  - Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.


---

## 📌 AULA 2
### ALTERANDO ARRAYS
Consultar a [documentação](https://developer.mozilla.org/pt-BR/)
---

## 📌 AULA 3
### LAÇOS DE REPETIÇÃO

o método includes() confere se o elemento passado por parâmetro está incluso em uma lista;
o método indexOf() retorna o índice do elemento passado por parâmetro.

Assistir o [Alura+](https://cursos.alura.com.br/extra/alura-mais/destructuring-em-js-c308) sobre Destructuring;

---

## 📌 AULA 4
### FUNÇÕES CALLBACK
#### for...of vs callback
**for**:
A forma mais “clássica” de se efetuar um loop em JavaScript e em várias outras linguagens, o for é muito conveniente pois pode ser utilizado com qualquer tipo de iterável e é construído de uma forma que deixa muito claro quais são todas as “fases” de cada loop - também chamamos um loop de laço de repetição ou de iteração.

**for…of**:
Adicionado às funcionalidades do JavaScript na versão ES6, é um tipo de laço de repetição diferente do for tradicional, embora utilize a mesma palavra-chave. O for…of pode ser executado utilizando qualquer tipo de iterável: além de arrays, strings, sets (conjuntos) e maps (mapas ou dicionários) são considerados objetos iteráveis.

**forEach()**:
Ao contrário de for e for…of, o forEach() é um método do objeto Array.
O forEach(), assim como outros métodos de array que vimos, também cumprem o papel de iterar arrays, porém com funcionalidades e retornos bem definidos. No caso do forEach(), apesar da sintaxe bem diferente, podemos utilizar este método como o for ou o for…of, pois ele vai executar as instruções que forem passadas para cada elemento iterado, sem retornar nenhum dado.

**quando devo utilizar um ou outro?**
- forEach() para trabalhar com arrays da forma mais corriqueira - percorrendo do primeiro ao último elemento, sem alterar a condição de parada, e também para manter a coesão do estilo quando em conjunto com outros métodos de array como map, filter e etc;

- for…of em caso de iteráveis (dicionários, conjuntos e outras estruturas de dados) ou de arrays quando for necessário o uso de programação assíncrona e/ou dar condições de saída do laço (por exemplo, com o uso de break);

- for para casos em que seja necessário manipular de forma mais fina as fases do laço (condição inicial, condição de parada e incremento).


#### strings são arrays?
“String”, além de ser o tipo de dado usado para representar textos, também se define como uma sequência ordenada de caracteres!

checar [documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#methods)

---

## 📌 AULA 5
### AVANÇANDO EM ARRAYS
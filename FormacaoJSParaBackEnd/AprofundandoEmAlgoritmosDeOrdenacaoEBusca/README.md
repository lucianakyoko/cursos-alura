# Curso - Algoritmos com JavaScript II: aprofundando em algoritmos de ordenação e busca

## Aulas
<p>
  ✔️ concluded &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  ⚫ not started &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  🔵 in progress &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  🔶 paused &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  🔴 abandoned 
</p>

| Aula | Titulo | Status |
| --- | --- | --- |
| 1 | Dividir para conquistar | ✔️ |
| 2 | Merge Sort | ✔️ |
| 3 | Quick Sort | ✔️ |
| 4 | Busca binária | ✔️ |
| 5 | Análise dos algoritmos | ⚫ |

---

## Aprendizados

### Aula 01 - Dividir para conquistar
<ul>
  <li>Podemos pensar em novas formas de “atacar” um problema de ordenação, começando a partir de partes menores já ordenadas e unindo estas partes em uma única lista ordenada;</li>
  <li>Evoluímos o conceito e testamos o funcionamento do algoritmo com uma simulação sem código, similar ao “teste de mesa”, para entendermos quais operações deverão ser feitas pelo código durante o fluxo de execução do programa;</li>
  <li>Após utilizarmos a simulação para entendermos o fluxo do algoritmo e o que ele deve fazer, desenvolvemos um código em JavaScript para implementá-lo através da função juntaListas(), que percorre cada uma das duas listas informadas por parâmetro, compara os valores de cada uma, posiciona estes valores em uma lista única de acordo com o resultado da comparação e, por fim, retorna a lista unida.</li>
</ul>

### Aula 02 - Merge Sort
<ul>
  <li>Expandimos o conceito de “dividir para conquistar”, reutilizando a lógica de ordenar duas listas, e desenvolvemos um algoritmo para ordenar uma única lista;</li>
  <li>Utilizando o recurso das simulações e testes, entendemos o funcionamento de um algoritmo de ordenação muito utilizado no dia-a-dia, o Merge Sort;</li>
  <li>Após entendermos o fluxo do algoritmo, fizemos a implementação do algoritmo Merge Sort com JavaScript, através da função mergeSort() que recebe um array e retorna este array ordenado;</li>
  <li>Estudamos a ferramenta de recursão, como ela pode ser utilizada no algoritmo Merge Sort e as diferenças dessa ferramenta com relação aos laços de repetição.</li>
</ul>

### Aula 03 - Quick Sort
<ul>
  <li>Trabalhamos com o conceito de pivô, entendemos como selecionar um elemento pivô no código e como posicionar este elemento em uma lista, comparando valores e contando elementos menores;</li>
  <li>Após posicionar um elemento pivô em um array, desenvolvemos um código em JavaScript que percorre uma lista e separa todos os elementos entre maiores e menores que o pivô, através da função encontraMenores();</li>
  <li>A partir do conceito de elemento pivô, entendemos o funcionamento do algoritmo de ordenação quick sort, fazendo mais simulações e testes;</li>
  <li>Após entendermos o algoritmo, implementamos o código utilizando JavaScript e reaproveitando funções e conceitos das aulas anteriores, como a função trocaLugar() e a recursão.</li>
</ul>

### Aula 04 - Busca binária
<ul>
  <li>Aplicamos novamente o paradigma “dividir para conquistar” para desenvolver o algoritmo de busca chamado busca binária;</li>
  <li>Utilizamos recursão para manipular um array ordenado e buscar um elemento, seguindo o fluxo da busca binária que foi visto nas simulações e testes;</li>
  <li>Desenvolvemos código em JavaScript para implementar o algoritmo de busca binária;</li>
  <li>Continuamos a prática de funções recursivas, vendo o funcionamento do “caso base”, que pode ser considerada como a condição de parada de uma função recursiva.</li>
</ul>

### Aula 05 - Análise dos algoritmos
<ul>
  <li>Aprendemos a fazer a análise assintótica do algoritmo de busca binária e por que este é considerado um algoritmo de complexidade logarítmica, em comparação com a busca linear que é um algoritmo de complexidade linear;</li>
  <li>Fizemos a análise assintótica dos algoritmos de ordenação quick sort e merge sort e analisamos o código para entendermos por que são considerados algoritmos de complexidade linear-logarítmica;</li>
  <li>E o que significa, em termos de performance, a diferença entre algoritmos de crescimento linear, quadrático e logarítmico.</li>
</ul>

---

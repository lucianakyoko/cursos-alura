# ANOTAÇÕES - CURSO REACT: COMO OS COMPONENTES FUNCIONAM

---
<p align="center">
  <a href="#-aula-1">Aula 1</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-2">Aula 2</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-3">Aula 3</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-4">Aula 4</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-5">Aula 5</a> 

</p>

---

## 📌 AULA 1 - Importando do Github
Para clonar um repositório:
 - clicar em Code;
 - selecionar HTTPS
 - copiar o link disponível
 - abrir o gitbash ou terminal no diretório desejado
 - dar o comando ```git clone```, colocar o link, enter

Obs.: No meu caso, simplesmente copiei a pasta com os arquivos, já que na aula se usa o CRA, e eu prefiro usar Vite.


## 📌 AULA 2 - O que são componentes
### Closures e map
Uma closure é um bloco dentro de uma função que nos permite colocar alguma informação dentro, ou seja, é o mesmo que um “bloco”

retorna a função:
```
<Componente onClick={() => executarFuncao()}
```

só a executa:
```
<Componente onClick={() => { executarFuncao() }}
```

## 📌 AULA 3 - Como o React vê um componente
### Virtual DOM
  Virtual DOM é algo vital dentro do React, os componentes são vistos como objetos no React.
  O Virtual DOM armazena estes objetos, e quando algo muda dentro desta árvore de objetos, o React compara o DOM real com o que a gente quer que mude (que a gente chama de candidato) e atualiza apenas o que for mudado

## 📌 AULA 4 - Criando funcionalidade
## 📌 AULA 5 - Finalizando o projeto
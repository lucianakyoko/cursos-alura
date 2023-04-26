# ANOTAÇÕES - JavaScript: objetos

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
### O que são objetos
#### tipos de variáveis e objetos:
Ler [artigo](https://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript)

#### deletar uma propriedade:
```
const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20",
 aliado: {
   nome: "Saruman",
   classe: "mago"
 },
 status: "desaparecido"
}
```

Se quisermos, por exemplo, remover a propriedade aliado, podemos utilizar o operador delete:
```
delete objPersonagem.aliado

console.log(objPersonagem.aliado) //undefined
```

**Importante!** Veja que o delete remove do objeto o valor da propriedade, assim como a chave.

O valor de retorno do operador delete é um booleano, ou seja, retorna sempre true ou false para cada operação. Porém, é importante notar que ele não retorna false se tentarmos remover, por exemplo, uma propriedade que não existe no objeto:

```
const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

console.log(delProp) //true
console.log(delPropInexistente) //true
```

---

## 📌 AULA 2
### Manipulação de objetos
#### tipos mais adequados

Digamos que você precise criar a estrutura de um novo objeto para representar uma pessoa estudante no sistema de uma universidade com os seguintes campos:

```
Nome: um campo de texto com o nome completo do estudante;
Matrícula: um número inteiro;
Curso: um campo de texto contendo o curso atual do estudante;
Matérias: um conjunto de textos contendo apenas os nomes das matérias que o estudante está cursando.
```
Seguindo as práticas vistas até aqui e a lista de campos acima, uma maneira que contem a implementação de um objeto que mais se aproxima do objeto de um determinado estudante:
```
const estudante = {
  nome: "Adilson Josué de Freitas",
  matricula: 201542290,
  curso: "Engenharia eletrônica",
  materias: [
    "Cálculo 1",
    "Álgebra Linear",
    "Práticas de Laboratório",
    "Metodologia",
  ],
};
```

####  objeto literal e referência
A estrutura de um objeto, com seus pares de chave e valor:
```
const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}
```

O exemplo acima é o de um objeto literal.
Um objeto literal é um objeto criado com a notação literal, ou seja: uma lista de chave e valores dentro de chaves{ }, que atribuímos a uma variável para que o valor possa ser acessado depois. Exatamente como no exemplo acima.
Objetos literais funcionam bem quando queremos ter um objeto único com seus próprios dados. Isso porque um objeto literal sempre aponta para um mesmo local na memória, mesmo se você criar cópias dele. Vejamos o código a seguir:

```
const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}

const objPersonagem2 = objPersonagem
```

Se alterarmos apenas o objPersonagem2, o resultado é:

```
const objPersonagem2 = objPersonagem
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(objPersonagem2.nome) //Gandalf, o Cinzento
```

A variável objPersonagem2 não fez uma cópia do objeto original, apenas serviu como referência para o objeto original objPersonagem. Assim, qualquer alteração em qualquer um dos objetos altera ambos. Isso porque o JavaScript, quando trabalha com objetos, acessa os valores deles fazendo referência ao original. mas não cria uma cópia. Já o acesso por cópia funciona com tipos primitivos (string, number, booleano, null, symbol):
```
let num = 50
let num2 = num

num2 = 100
console.log(num) //50
console.log(num2) //100
```

Como podemos contornar esse comportamento quando criamos objetos? Além de utilizar a notação literal, objetos também podem ser criados através do método Object.create():
```
const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}

const objPersonagem2 = Object.create(objPersonagem)
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf
console.log(objPersonagem2.nome) //Gandalf, o Cinzento
```

O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parâmetro. Dessa forma, objPersonagem2 é uma instância diferente de objPersonagem e pode ser trabalhada de forma independente.

Ver [documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/create)



---

## 📌 AULA 3
### Percorrendo objetos



---

## 📌 AULA 4
### Conhecendo o JSON



---

## 📌 AULA 5
### Exercitando os conhecimentos



---
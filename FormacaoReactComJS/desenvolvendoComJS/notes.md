# ANOTAÇÕES - DESENVOLVENTO COM JAVASCRIPT

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
### Uma biblioteca declarativa
No curso, o projeto foi iniciado com ```npx create-react-app organo```. Mas eu optei por iniciar com o comando ```npm create vite@latest``` apenas pela velocidade.

O primeiro arquivo que é executado é o main.jsx

#### Componentes funcionais:
Diferenças entre componente funcional e componente baseado em classes:

```
//componente funcional

function BoasVindas(props) {
  return <h1>Olá, {props.nome}</h1>;
}
```

```
//componente baseado em classe

class BoasVindas extends React.Component {
  render() {
    return <h1>Olá, {this.props.nome}</h1>;
  }
}
```

#### Node.JS:
https://www.hipsters.tech/o-que-e-node-js/

O node é uma plataforma que utiliza o JavaScript para rodar em outros ambientes.
O ambiente que roda o JavaScript é o navegador. Dentro do navegador, existe um motor chamado V8 que lê e interpreta o código JavaScript.

#### package.json:
O package.json é usado para armazenar os metadados associados ao projeto
Algumas responsabilidades:
- Disponibilizar comandos NPM. Dentro do package.json temos:
  - scripts: que, por padrão, são: 
    - start, 
    - build, 
    - test e 
    - eject.
- Listar as dependências do projeto. Dentro do package.json temos:
  - dependencies: que lista todos os pacotes dos quais o nosso projeto precisa para rodar corretamente.

---

## 📌 AULA 2
### Trabalhando com props
#### Eventos HTML
Com o React, os eventos deverão ser nomeados em camelCase.

 A diferença entre controlar uma variável com o useState e criar e atribuir normalmente uma let:

  Sempre que queremos que o componente reaja a alguma alteração no valor de uma variável e se renderize novamente, precisamos indicar isto utilizando o useState. Do contrário, o valor vai ser alterado mas o DOM não será atualizado.
  Ver mais [aqui](https://pt-br.reactjs.org/docs/hooks-reference.html#functional-updates)

#### Stateless VS Statefull
React tem duas abordagens diferentes para lidar com inputs de formulários.

Um elemento de input de formulário cujo valor é controlado pelo React é chamado de **componente controlado**. Quando o usuário insere dados em um componente controlado, o evento que manipula essa alteração é disparado e o seu código decide se o input é válido (ou seja, renderizado com o valor atualizado). Se você não re-renderizar o elemento de formulário, permanecerá inalterado.

Um **componente não controlado** funciona como um elemento de formulário fora do React. Quando um usuário insere dados em um campo de formulário (um input box, dropbox, etc), a informação atualizada é refletida sem necessidade do React fazer nada. No entanto, isso também significa que você não pode forçar o campo a ter um certo valor.
---

## 📌 AULA 3
### Interagindo com usuário

---

## 📌 AULA 4
### Montando os times
---

## 📌 AULA 5
### Caça aos bugs


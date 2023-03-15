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

---

## 📌 AULA 3
### Interagindo com usuário

---

## 📌 AULA 4
### Montando os times
---

## 📌 AULA 5
### Caça aos bugs
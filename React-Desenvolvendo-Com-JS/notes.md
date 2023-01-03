# React: desenvolvendo com JavaScript - ANOTAÇÕES:

---

# AULA 01 - UMA BIBLIOTECA DECLARATIVA
**componentes funcionais**:
Diferenças entre componentes **funcionais** e componentes utilizando **classes**

Componente funcional:
```
function BoasVindas(props) {
  return <h1>Olá, {props.nome}</h1>;
}
```

O mesmo componente, baseado em classes, seria:
```
class BoasVindas extends React.Component {
  render() {
    return <h1>Olá, {this.props.nome}</h1>;
  }
}
```

**package.json**:
O package.json é usado para armazenar os metadados associados ao projeto. Abaixo estão algumas de suas responsabilidades:
 - Disponibilizar comandos NPM. Dentro do package.json temos: scripts: que, por padrão, são: start, build, test e eject.
 - Listar as dependências do projeto. Dentro do package.json temos: 
    dependencies: que lista todos os pacotes dos quais o nosso projeto precisa para rodar corretamente.


--- 

# AULA 02 - TRABALHANDO COM PROPS
**Sobre formulário -  eventos HTML** - poderiamos utilizar o onClick no botão do formulário para submeter os dados, porém, ao fazer desta forma, o formulário não sofre nenhum tipo de validação. Então, a forma correta de fazer a submissão de um formulário é utilizar o onSubmit dentro da tag form, ou seja, no componente Formulario, nós aguardamos pelo evento onSubmit. Assim, podemos aproveitar a validação nativa do HTML dos inputs que são obrigatórios.

**forEach vs map** - para renderizar listas de elementos dentro dos componentes React, utilizamos o ```.map```, pois o .map retorna um novo array de elementos, baseado no que retornamos na função passada por callback.



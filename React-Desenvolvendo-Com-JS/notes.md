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

--- 

# AULA 03 - INTERAGINDO COM O USUÁRIO
**Usando o estado** - a diferença entre controlar uma variável com o ```useState``` e criar e atribuir normalmente uma ```let``` é:

  Sempre que queremos que o componente reaja a alguma alteração no valor de uma variável e se renderize novamente, precisamos indicar isto utilizando o ```useState```. Do contrário, o valor vai ser alterado mas o DOM não será atualizado.

**Stateless VS Statefull**
React tem duas abordagens diferentes para lidar com inputs de formulários:

  - Um elemento de input de formulário cujo valor é controlado pelo React é chamado de componente controlado.
  Quando o usuário insere dados em um componente controlado, o evento que manipula essa alteração é disparado e o seu código decide se o input é válido (ou seja, renderizado com o valor atualizado). Se você não re-renderizar o elemento de formulário, permanecerá inalterado.

  - Um componente não controlado funciona como um elemento de formulário fora do React.
  Quando um usuário insere dados em um campo de formulário (um input box, dropbox, etc), a informação atualizada é refletida sem necessidade do React fazer nada. No entanto, isso também significa que você não pode forçar o campo a ter um certo valor.

--- 

# AULA 04 - MONTANDO OS TIMES
** Prop drilling**: Prop drilling, em tradução livre, significa "vazamento de props", e acontece quando você passa uma ou mais props, do pai para o filho, o filho passa para o filho dele, e assim por diante. Lidar com esse prop drilling pode ser desafiador, pois em pouco tempo fica difícil para qualquer pessoa descobrir onde os dados são inicializados, atualizados e usados de fato.

Artigo interessante sobre o assunto: https://www.alura.com.br/artigos/prop-drilling-no-react-js


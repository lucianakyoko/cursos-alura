# Anotações do curso

---

## entendendo o this
No contexto de um objeto em Node.js, this refere-se ao próprio objeto no qual a função está sendo chamada. Ela é uma referência dinâmica, o que significa que o valor de this pode mudar dependendo do contexto em que a função é chamada.

No caso de métodos de objetos, o this se liga ao objeto que chamou o método. Confira este exemplo:
```
const pessoa = {
  nome: "Maria",
  idade: 30,
  apresentar: function() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
};

pessoa.apresentar(); // Saída: Olá, meu nome é Maria e eu tenho 30 anos.
```
Aqui, this dentro da função apresentar faz referência ao objeto pessoa, a partir de onde a função está sendo executada.

### Arrow functions e o this
As arrow functions não possuem um this próprio. Em vez disso, elas herdam o valor de this do contexto em que foram definidas. Isso pode causar problemas em métodos de objetos, pois this pode não se referir ao objeto esperado. Por exemplo:
```
const pessoa = {
nome: "João",
idade: 25,
apresentar: () => {
  console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
};

pessoa.apresentar(); // Saída: Olá, meu nome é undefined e eu tenho undefined anos.
```
Neste exemplo, this dentro da função de seta não se refere ao objeto pessoa, resultando em valores indefinidos para nome e idade.

Ao trabalhar com objetos em Node.js, é crucial compreender o comportamento de this para garantir referências corretas. Arrow functions podem ser inadequadas em certos contextos, especialmente ao definir métodos de objetos. Em vez disso, **opte por funções tradicionais ao criar métodos em objetos para garantir que this seja vinculado ao contexto apropriado, facilitando o acesso e manipulação de dados de forma consistente**.
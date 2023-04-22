# ANOTAÇÕES - Typescript parte 1 - evoluindo seu JavaScript

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
### PORQUE USAR TYPESCRIPT
#### Módulo e seu escopo
**Sobre o escopo de um módulo**: Tudo o que for declarado dentro de um módulo estará confinado nesse módulo, ao menos que o desenvolvedor decida exportar uma ou mais funcionalidades.

#### ES2015 e classes
No paradigma da orientação a objetos criamos a representação de algo do mundo real em nosso programa através de modelos e esses modelos são definidos através de classes.
Exemplo:
```
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}
```

---

## 📌 AULA 2
### TYPESCRIPT E COMPILADOR

---

## 📌 AULA 3
### BENEFÍCIOS DA TIPAGEM ESTÁTICA
####  Sobre o tipo any
  - Por padrão, é assumido automaticamente pelo TypeScript quando não definimos o tipo das nossas variáveis.
  - É possível desativar o tipo implícito any passando uma configuração especial para o compilador no arquivo tsconfig.json. Isso fará com que o compilador emita um erro em todos os locais que o tipo any foi adotado implicitamente.

---

## 📌 AULA 4
### AVANÇANDO NA MODELAGEM DO DOMÍNIO
####  Sobre Array
Para declarar corretamete em TypeScript, assumindo que a configuração ```noImplicitAny``` está definida como ```true```, considere os exemplos abaixo:

```
let nomes: Array<string> = [];
```
```
let idades: Array<number> = [1, 2, 3];
```

#### Somente leitura
**ReadonlyArray** - A maneira de  declarar um array e que não disponibilize a remoção ou inclusão de novos items:

```
const nomes: ReadonlyArray<string> = ['a', 'b', 'c'];
```

---

## 📌 AULA 5
### SIMPLIFICANDO NOSSO CÓDIGO
#### Construtor e atalho
Considerando o seguinte código:
```
export class Fatura {
  private criadaEm: Date;
  private quantidade: number;
  private valor: number;

  constructor(
    criadaEm: Date, 
    quantidade: number, 
    valor: number
  ) {
      this.criadaEm = criadaEm;
      this.quantidade = quantidade;
      this.valor = valor;
  }
}
```
Uma maneira alternativa que declara a mesma classe utilizando o atalho que o TypeScript possui, ficaria assim:

```
export class Fatura {
  constructor(
    private criadaEm: Date, 
    private quantidade: number, 
    private valor: number
  ) {}
}
```

#### Arrays e Generics
Baseado no projeto da aula. 
```
private negociacoes: Array<Negociacao> = [];
```
É a mesma coisa que:

```
private negociacoes: Negociacao[] = [];
```

E:
```
lista(): ReadonlyArray<Negociacao> {}
```
É mesma coisa que:
```
lista(): readonly Negociacao[] {}
```
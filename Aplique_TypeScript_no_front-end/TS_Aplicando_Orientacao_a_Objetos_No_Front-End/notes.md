# Anotações do Curso - TypeScript: aplicando orientação a objetos no Front-end

---

### Paradigmas de programação
- No **paradigma funcional** usamos "funções" para resolver problemas. Uma função é como uma pequena tarefa que você pode pedir ao computador para fazer. Em vez de mexer e modificar diretamente os dados, as funções recebem informações, fazem algum trabalho e retornam um resultado. É como se você pedisse para o computador "some esses números" e ele te dá o resultado.

- No **paradigma Orientado a Objetos** pensamos nos programas como se fossem um mundo de objetos diferentes. Cada objeto tem características e coisas que ele pode fazer, como um personagem de um jogo. A orientação a objetos nos ajuda a organizar as coisas de uma maneira fácil de entender e nos permite reutilizar e compartilhar código de forma eficiente. 

Com o TypeScript, podemos usar tanto a programação funcional quanto a orientação a objetos. Podemos criar funções e combiná-las de maneiras interessantes para resolver problemas. Também podemos criar objetos e dar a eles características e comportamentos específicos.

O TypeScript nos ajuda a escrever programas melhores, evitando erros e tornando nosso código mais fácil de entender.

---

### encapsulando dados
Quando estamos desenvolvendo aplicações em TypeScript, é fundamental garantir a segurança e a integridade dos dados em nossas classes.O problema surge quando os membros de uma classe são acessíveis livremente, sem restrições. Isso pode levar a situações em que os dados internos da classe são modificados ou acessados incorretamente, comprometendo a consistência e a confiabilidade do código.

A solução para esse problema é aplicar o conceito de encapsulamento em TypeScript. O encapsulamento permite ocultar a implementação interna de uma classe e fornecer apenas interfaces bem definidas para acessar e manipular seus dados.

Para garantir o encapsulamento adequado em TypeScript é possível fazer uso dos modificadores de acesso, que são palavras-chave que controlam a visibilidade dos membros das classes. Os principais modificadores são: public, private e protected.

- **public**: O modificador public permite que os membros sejam acessados livremente de qualquer lugar. É o modificador padrão caso nenhum seja especificado.
- **private**: O modificador private restringe o acesso aos membros somente à própria classe. Isso significa que eles não podem ser acessados ou modificados fora da classe.
- **protected**: O modificador protected permite que os membros sejam acessados dentro da classe e também pelas classes derivadas (subclasses). No entanto, eles não são acessíveis fora das classes derivadas.

---

### Estático
Quando estamos trabalhando com TypeScript, pode ser necessário criar classes e métodos que possam ser acessados sem precisar criar um objeto da classe. Os métodos estáticos são uma maneira poderosa de definir comportamentos e lógicas que podem ser usados diretamente na classe, sem a necessidade de criar objetos.

Imagine que você tenha uma classe chamada Utils e deseja criar um método que converta uma string em letras maiúsculas. Em vez de criar uma instância da classe Utils toda vez que você precisar usar esse método, você pode declará-lo como um método estático. Isso permitirá que você acesse o método diretamente na classe, sem a necessidade de criar um objeto.
```
class Utils {
  static converterParaMaiusculas(texto: string): string {
    return texto.toUpperCase();
  }
}

// Chamando o método estático diretamente na classe
const textoConvertido = Utils.converterParaMaiusculas("Olá, mundo!");
console.log(textoConvertido); 
// Saída no console: "OLÁ, MUNDO!"

```

No exemplo acima, definimos o método converterParaMaiusculas como um método estático usando a palavra-chave static antes de sua declaração. Isso significa que o método pertence à própria classe Utils, não a instâncias específicas da classe.

A chamada do método é feita diretamente na classe, sem precisar criar um objeto Utils. Isso nos permite acessar o método de maneira conveniente, sem a necessidade de criar instâncias desnecessárias da classe.

Os métodos estáticos são especialmente úteis quando temos lógicas ou funcionalidades que são aplicáveis a toda a classe em si, em vez de instâncias individuais da classe. Eles também podem ser usados para criar funções utilitárias ou fábricas de objetos, que não dependem do estado ou de uma instância específica da classe.

---

### tipos parametrizados
Generics são tipos parametrizados que permitem que você defina o tipo de um argumento ou retorno de uma função no momento da sua utilização. Assim, você pode criar uma função que aceite qualquer tipo de array, desde que ele seja compatível com uma interface que defina as propriedades comuns a todos os tipos de produtos.

Generics são uma forma de reutilizar código e evitar duplicação. Eles permitem que você crie funções e classes que funcionem com diferentes tipos de dados, sem perder a segurança de tipo fornecida pelo typescript. Para usar generics, você precisa usar um espaço reservado para o tipo, como <T>, na declaração da função ou classe. Esse espaço reservado será substituído pelo tipo real no momento da utilização da função ou classe. Você também pode restringir o tipo genérico usando a palavra-chave extends, indicando que ele deve ser um subtipo de outro tipo ou interface. Por exemplo:
```
  interface Produto { 
nome: string; preco: number; quantidade: number; 
}

function calcularValorTotal<T>(produtos: T[]): number { 
let valorTotal = 0; 
for (let x = 0; x < produtos.length; x++) { 
valorTotal += produtos[x].preco * produtos[x].quantidade; 
} 
return valorTotal; 
}
```

Generics são muito úteis para criar funções e classes mais genéricas e reutilizáveis, sem perder a segurança e a precisão dos tipos.

---

## estendendo classes
Você está trabalhando em um projeto de um jogo de RPG que tem vários tipos de personagens, como guerreiras, magos, arqueiras, etc. Cada tipo de personagem tem suas próprias habilidades, atributos e equipamentos, mas também compartilha algumas características comuns, como nome, nível, vida e experiência.

Para representar cada tipo de personagem, você irá criar classes, mas não quer repetir o código das características comuns em todas elas. Além disso, você quer que o seu código seja fácil de entender e manter.

```
// Classe pai que representa um personagem genérico
class Personagem {
  nome: string;
  nivel: number;
  vida: number;
  experiencia: number;

  constructor(nome: string) {
    this.nome = nome;
    this.nivel = 1;
    this.vida = 100;
    this.experiencia = 0;
  }

  atacar(alvo: Personagem): void {
    // implementar a lógica do ataque
  }

  defender(): void {
    // implementar a lógica da defesa
  }

  ganharExperiencia(pontos: number): void {
    // implementar a lógica do ganho de experiência
  }
}

```

Você pode usar herança para criar classes que herdem as características comuns de uma classe pai e adicionem as características específicas de cada tipo de personagem. Por exemplo:
```
// Classe filha que representa um tipo específico de personagem
class Guerreira extends Personagem {
  forca: number;
  armadura: string;

  constructor(nome: string, forca: number, armadura: string) {
    super(nome); // chama o construtor da classe pai
    this.forca = forca;
    this.armadura = armadura;
  }

  atacar(alvo: Personagem): void {
    // sobrescrever o método da classe pai com a lógica específica do guerreire
  }

  usarArmadura(): void {
    // implementar a lógica do uso da armadura
  }
}
```

Herança é um princípio da programação orientada a objetos que permite que uma classe filha herde as propriedades e os métodos de uma classe pai, sem precisar redefinir as funções. Em Typescript, usamos a palavra-chave extends para indicar que uma classe é derivada de outra. A classe filha pode sobrescrever os métodos da classe pai se precisar de uma lógica diferente, ou adicionar novos métodos se precisar de mais funcionalidades. A classe filha também pode acessar o construtor da classe pai usando a função super.

---

### Decorators 
Decorators são funções que recebem informações sobre a declaração decorada e podem modificar o seu comportamento ou adicionar novas características. Por exemplo:
```
// Define um decorator de método chamado ValidaString
export function ValidaString(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // Guarda uma referência ao método original
    const originalMethod = descriptor.value;

    // Substitui o método original por uma nova função
    descriptor.value = function (valor: any) {
        // Verifica se o valor é uma string
        if (typeof valor !== "string") {
            // Se não for, lança um erro
            throw new Error("O valor deve ser uma string!");
        }

        // Se for, chama o método original com o valor como argumento
        return originalMethod.apply(this, [valor]);
    }

    // Retorna o descritor modificado
    return descriptor;
}
```

Em Typescript, você pode usar a sintaxe @expressão para aplicar um decorator a uma classe, método, propriedade ou parâmetro.
```
// Importa o decorator ValidaString
import { ValidaString } from "./ValidaString";

// Define uma classe livro
class Livro {
  // Define uma propriedade titulo
  titulo: string;

  // Define um construtor que recebe o titulo como parâmetro
  constructor(titulo: string) {
    this.titulo = titulo;
  }

  // Aplica o decorator ValidaString ao método imprimirTitulo
  @ValidaString
  imprimirTitulo(valor: any) {
    // Imprime o valor na tela
    console.log(valor);
  }
}

// Cria uma instância da classe Livro
let livro = new Livro("Senhor dos Aneis");

// Chama o método imprimirTitulo com um valor válido
livro.imprimirTitulo("Senhor dos Aneis"); // OK

// Chama o método imprimirTitulo com um valor inválido
livro.imprimirTitulo(42); // Error: O valor deve ser uma string!
```

Decorators são um recurso experimental do Typescript que permite adicionar anotações e metaprogramação às declarações de classe e membros. Decorators são funções que podem ser aplicadas usando a forma @expressão, onde expressão deve ser avaliada como uma função que será chamada em tempo de execução com informações sobre a declaração decorada. Decorators podem ser usados para modificar o comportamento, adicionar novas características ou observar as declarações decoradas.

Existem diferentes tipos de decorators, como decorators de classe, decorators de método, decorators de propriedade e decorators de parâmetro. Cada tipo de decorator tem uma assinatura específica e recebe diferentes argumentos. Decorators podem ser compostos ou criados por fábricas de decorators para personalizar a sua aplicação.

---

### explorando o tsconfig.json
[tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html);
[propriedades do tsconfig](https://www.typescriptlang.org/tsconfig)
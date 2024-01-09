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
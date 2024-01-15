# Anotações do Curso - TypeScript: o paradigma funcional no front-end
---

### imutabilidade
**Imutabilidade** é a ideia de que uma vez que um objeto é criado, ele não pode ser alterado. Se você quiser fazer uma alteração, você cria uma cópia desse objeto com as modificações desejadas, ao invés de mudar o objeto original.

**Importância da imutabilidade:**

- **Previsibilidade**: No mundo frontend, principalmente em aplicações React, a imutabilidade pode tornar o fluxo de dados mais previsível. Quando os dados nunca mudam, fica mais fácil rastrear e entender as mudanças.

- **Evita Efeitos Colaterais**: Sem imutabilidade, um código pode alterar um objeto de maneira não intencional, levando a bugs inesperados. Ao adotar a imutabilidade, eliminamos esses efeitos colaterais.

- **Otimizações de Performance**: Bibliotecas como React se beneficiam da imutabilidade para otimizar o re-render. Ao comparar referências, em vez de verificar cada valor, o React pode determinar rapidamente se uma re-renderização é necessária.

**Casos de uso comuns no front-end:**
- **Gestão de Estado**: Com bibliotecas como Redux, a imutabilidade é uma parte central na gestão do estado da aplicação. Ao seguir este princípio, podemos usar ferramentas incríveis como "time-travel debugging".

- **React & Re-render**: Ao usar useState ou useReducer, sempre retornamos uma nova cópia do estado ao invés de modificar o existente. Isso ajuda na otimização e na prevenção de re-renderizações desnecessárias.

- **Trabalhando com Arrays e Objetos**: Quando você quer adicionar um item a um array, em vez de usar métodos como push(), que modifica o array original, você pode usar o spread operator para criar um novo array.
Exemplo:
```
const antigosJedis = ["Yoda", "Obi-Wan"];
const novosJedis = [...antigosJedis, "Luke"];
```

O mesmo vale para objetos. Em vez de adicionar propriedades diretamente, você pode criar um novo objeto, mantendo a originalidade intacta.
```
const mestreJedi = { nome: "Yoda", idade: 900 };
const mestreAtualizado = { ...mestreJedi, planeta: "Dagobah" };
```

O Typescript nos permite definir estruturas de dados imutáveis através de tipos, garantindo que não vamos, acidentalmente, modificar os dados.
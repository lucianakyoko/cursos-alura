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

---

### CSS e o padrão BEM
BEM significa Block, Element, Modifier. É uma metodologia que fornece uma convenção para nomear classes em CSS, tornando seu código mais legível e compreensível.

- **Block**: É uma entidade independente e significativa por si só. Exemplo: header, container, menu.

- **Element**: Partes de um bloco que têm significado em conjunto com esse bloco. Exemplo: menu__item, header__logo.

- **Modifier**: Uma variação ou extensão de um bloco ou elemento. Exemplo: menu--hidden, menu__item--active

**Por que usar BEM?**
- **Legibilidade**: Olhando para uma classe BEM, você pode facilmente entender a relação entre o CSS e o HTML, o que está acontecendo e onde.

- **Independência**: Os blocos são independentes e podem ser reutilizados, sem estar atrelados a outros elementos.

- **Sem Cascata**: Como o BEM evita a especificidade, os estilos não se sobrepõem, evitando efeitos colaterais indesejados.

**Casos de uso comuns no frontend**:
- **Componentização**: Pense nos componentes como blocos. Quando criamos componentes em frameworks como React, Vue ou Angular, o padrão BEM pode ser facilmente aplicado para manter a consistência de estilização.

- **Manutenção e Escalabilidade**: Suponha que você está trabalhando em uma equipe grande, onde múltiplos desenvolvedores tocam na base de código. Com o BEM, cada pessoa pode entender e identificar rapidamente a estrutura e relação entre HTML e CSS, sem medo de quebrar estilos existentes.

```
<div class="card">
  <img src="..." alt="..." class="card__image">
  <h2 class="card__title">Título</h2>
  <p class="card__description">Descrição aqui.</p>
  <button class="card__button card__button--primary">Clique Aqui</button>
</div>

```

### Compilando TS
[documentação NPM Init](https://docs.npmjs.com/cli/v9/commands/npm-init)

- Na raiz do projeto: ```npm ini -y```
- Assim, teremos o projeto iniciado com o package.json devidamente configurado. Agora já podemos instalar o TypeScript: ```npm i typescript```

---

### passagem de valor vs referência
- **Passagem por Valor:**
Você tira uma fotocópia exata do seu livro e entrega ao seu amigo. Agora, se o seu amigo fizer anotações ou rabiscos na cópia, o seu livro original continua intacto, sem alterações. Isto é uma representação da passagem por valor. Em linguagens de programação, quando passamos um valor simples (como um número, string ou boolean) para uma função, estamos passando uma cópia desse valor. Qualquer alteração feita dentro da função não afeta o valor original. No mundo do JavaScript e TypeScript, isso é aplicado a tipos primitivos.

- **Passagem por Referência:**
Ao invés de entregar uma cópia, você entrega o seu livro original para o seu amigo. Agora, qualquer alteração que ele fizer no livro será permanente, afetando o seu exemplar. Isso é uma representação da passagem por referência. No nosso universo de programação, quando passamos um objeto ou array para uma função, estamos passando a referência para aquele objeto ou array. Isso significa que se a função modifica o objeto ou array, a mudança será refletida no objeto ou array original. No mundo do JavaScript e TypeScript, isso é aplicado a objetos, arrays e funções.

```
const adicionarTarefa = (estado: EstadoAplicacao, tarefa: Tarefa): EstadoAplicacao => {
    return {
        ...estado,
        tarefas: [...estado.tarefas, tarefa]
    }
}

```

Ela não modifica diretamente o objeto estado. Em vez disso, ela retorna uma nova cópia do estado com as alterações desejadas, mantendo a imutabilidade, um conceito muito amigável ao mundo funcional. Aqui, mesmo lidando com objetos (que são passados por referência), estamos adotando uma abordagem funcional que preserva a originalidade dos dados e evita mutações indesejadas.

Entendendo a diferença entre essas duas formas de passagem é crucial para evitar bugs e para escrever códigos mais previsíveis e confiáveis.


# Anotações do curso - React: eleve o nível da sua documentação no Storybook

----

Material do curso:
[Repo](https://github.com/alura-cursos/alfabit-ds/tree/projeto_base)
[Figma](https://www.figma.com/file/h86gUvqUXTKwgr6tVYinLT/React%3A-Design-System-com-Tailwind?type=design&node-id=143-2789&t=tc1JQtY9THljGNiw-0)

---

## decorators
Um decorador é uma forma de adicionar funcionalidades extras de "renderização" a uma estória. Em muitos casos, os complementos usam decoradores para aprimorar as estórias com recursos de renderização adicionais ou para coletar informações sobre como uma estória está sendo exibida.

Ao criar estórias, os decoradores são comumente utilizados para agrupar estórias com marcações extras ou para simular um contexto específico.

Um exemplo prático é quando certos componentes precisam de ajustes específicos para serem exibidos de maneira eficaz. Por exemplo, se um componente ocupar todo o espaço disponível, pode ser útil adicionar espaçamento ao redor dele no Storybook para uma visualização mais adequada. Nesse caso, um decorador pode ser usado para aplicar automaticamente esse espaçamento a todas as estórias desse componente.

```
// YourComponent.stories.ts|tsx

import type { Meta } from '@storybook/react';

import { YourComponent } from './YourComponent';

const meta: Meta<typeof YourComponent> = {
  component: YourComponent,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
```

Você também pode usar decoratos para renderizar estórias. Para definir um decorador para uma única estória, use a decoratorschave em uma exportação nomeada:
```
// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
};
```

Os decoradores são úteis porque oferecem uma maneira flexível de aprimorar as estórias em seu ambiente do Storybook. Eles permitem adicionar funcionalidades extras de renderização, como estilos, espaçamento ou até mesmo simulações de contexto, sem a necessidade de modificar o código original dos componentes. Isso facilita a visualização e a interação com diferentes estados e configurações dos componentes durante o desenvolvimento.

[Documentação](https://storybook.js.org/docs/react/writing-stories/decorators#page-top)

---

## tipos de controles
O Storybook Controls oferece uma maneira de ajustar como um componente funciona. Basicamente, ele cria uma espécie de painel, onde você pode fazer mudanças e ver o efeito delas na hora, sem ter que programar. O legal é que esses controles são criados automaticamente com base nos tipos de componentes que você está usando, como React, Vue ou Angular.

Além disso, dá para personalizar esses controles e os dados interativos de acordo com o que você precisa. Para usar o Storybook Controls, você precisa escrever as "estórias" dos seus componentes usando argumentos, que são basicamente os valores que você quer ajustar. O Storybook então cria os controles de interface com base nesses argumentos

Por padrão, o Storybook escolhe como os controles vão funcionar baseado nos valores iniciais dos argumentos. Mas, se você quiser mais controle, pode configurar os controles individualmente. Isso é feito usando a anotação "control" em um campo chamado "argTypes". Abaixo temos uma tabela com alguns exemplos de tipos de controles que você pode usar nas estórias de seus componentes.

[Documentação](https://storybook.js.org/docs/react/essentials/controls#configuration)

---

## classificação e agrupamento de componentes no Storybook
Ao desenvolver um aplicativo web, muitas vezes nos deparamos com a necessidade de trabalhar com uma grande quantidade de componentes. Conforme o projeto cresce, torna-se cada vez mais desafiador gerenciar e visualizar todos esses elementos.

À medida que a quantidade de componentes cresce, pode se tornar complicado entender como eles se relacionam entre si e onde são utilizados no aplicativo. Além disso, sem uma organização adequada, a busca por componentes específicos pode se tornar uma tarefa demorada e frustrante para a equipe de desenvolvimento.

Uma forma de resolvermos isso é usando o método de nomeação de componentes conhecido como método explícito, onde usamos o parâmetro title para localizar exatamente dentro da categoria e pasta específica.

Por exemplo, ao criar a estória do componente podemos informar explicitamente onde ele deve se localizar dentro da nossa documentação

```
import type { Meta } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;
```

Mas quando informamos um caminho de pastas no title, o Storybook entende, dependendo do nível da sua estória se ela será uma categoria, pasta ou componentes. Por exemplo:

```
import type { Meta } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Design System/Atoms/Button',
  component: Button,
};

export default meta;
```

[Documentação](https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy)

---

## classificando estórias no Storybook
Por padrão, o Storybook classifica as estórias com base na ordem em que são importadas. No entanto, podemos personalizar essa ordem para fornecer uma experiência mais intuitiva adicionando o parâmetro storySort no arquivo preview.ts.

À medida que o número de estórias aumenta, pode se tornar desafiador gerenciar e classificar todas elas de forma a facilitar a busca e compreensão das diferentes variações dos componentes.

Podemos utilizar o parâmetro storySort no arquivo preview.ts para personalizar a ordem de exibição das estórias no Storybook. Isso nos permite agrupar e classificar as estórias de acordo com as categorias e ordens desejadas, tornando mais fácil encontrar e entender as diferentes variações dos nossos componentes.

1 - Usando uma função:
```
// .storybook/preview.ts

// Importe o framework que está usando (por exemplo, react, vue3)
import { Preview } from '@storybook/your-framework';

const preview: Preview = {
  parameters: {
    options: {
      storySort: (a, b) =>
        a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
  },
};

export default preview;
```

Neste exemplo, usamos uma função para classificar as estórias em ordem alfabética com base no identificador exclusivo da estória. Isso torna mais fácil localizar as estórias e compreender sua relação.

2 - Usando um objeto de configuração:
```
// .storybook/preview.ts

// Importe o framework que está usando (por exemplo, react, vue3)
import { Preview } from '@storybook/your-framework';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Intro', 'Pages', ['Home', 'Login', 'Admin'], 'Components'],
      },
    },
  },
};

export default preview;
```

Neste exemplo, usamos um objeto de configuração para classificar as estórias de acordo com a ordem definida. As estórias com nomes correspondentes às categorias definidas na order aparecerão na ordem especificada.

Personalizar a classificação de estórias no Storybook permite uma organização mais intuitiva e eficiente dos nossos componentes. Podemos agrupar e classificar as estórias de acordo com as categorias e ordens desejadas, facilitando a busca e compreensão das diferentes variações dos nossos componentes no projeto. Ao dominar essa personalização, tornamos o processo de desenvolvimento mais ágil e produtivo, melhorando a qualidade do produto final.
[Documentação](https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy#sorting-stories)
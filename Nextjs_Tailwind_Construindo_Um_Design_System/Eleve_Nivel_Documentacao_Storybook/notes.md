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
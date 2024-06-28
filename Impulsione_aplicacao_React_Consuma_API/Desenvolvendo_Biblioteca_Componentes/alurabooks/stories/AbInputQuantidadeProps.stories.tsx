import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbInputQuantidade, AbInputQuantidadeProps} from '../src/componentes/AbInputQuantidade'

export default {
  title: 'componentes/AbInputQuantidade',
  component: AbInputQuantidade,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbInputQuantidade>;

const Template: ComponentStory<typeof AbInputQuantidade> = args => (
  <AbInputQuantidade {...args} />
);

export const AbInputQuantidadeComponent = Template.bind({});
AbInputQuantidadeComponent.args = {
  label: 'Uma label interessante',
} as AbInputQuantidadeProps;

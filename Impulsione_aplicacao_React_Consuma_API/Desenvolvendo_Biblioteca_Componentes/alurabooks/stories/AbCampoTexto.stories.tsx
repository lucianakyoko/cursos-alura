import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbCampoTexto } from '../src/componentes/AbCampoTexto';
// import { AbCampoTexto, AbCampoTextoProps } from '../src';

export default {
  title: 'componentes/AbCampoTexto',
  component: AbCampoTexto,
  argTypes: {
    label: {
      control: 'text',
    },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbCampoTexto>;

const Template: ComponentStory<typeof AbCampoTexto> = args => (
  <AbCampoTexto {...args} />
);

export const AbCampoTextoComponent = Template.bind({});
AbCampoTextoComponent.args = {
  label: 'Uma label interessante',
} as AbCampoTextoProps;

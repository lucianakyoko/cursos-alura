import React from 'react';
import {AbBotao, AbBotaoProps} from '../src'
import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
  title: 'component/AbBotao',
  component: AbBotao
} as ComponentMeta<typeof AbBotao>

const Template: ComponentStory<typeof AbBotao> = (args) => <AbBotao {...args}/>

export const Primario = Template.bind({})

Primario.args = {
  texto: 'Ab Botao Primário',
  tipo: 'primario'
} as AbBotaoProps

export const Secundario = Template.bind({})

Secundario.args = {
  texto: 'Ab Botao Primário',
  tipo: 'secundario'
} as AbBotaoProps
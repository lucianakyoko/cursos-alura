import React from 'react';
import {AbGrupoOpcoes} from '../src'
import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
  title: 'component/AbGrupoOpcoes',
  component: AbGrupoOpcoes
} as ComponentMeta<typeof AbGrupoOpcoes>

const Template: ComponentStory<typeof AbGrupoOpcoes> = (args) => <AbGrupoOpcoes {...args}/>

export const Padrao = Template.bind({})

Padrao.args = {
  opcoes: [
    {
      id: 1,
      titulo: 'E-book',
      corpo: 'R$00,00',
      rodape: '.pdf, .ebub, .mob'
    },
    {
      id: 2,
      titulo: 'Impresso',
      corpo: 'R$00,00',
      rodape: '.pdf, .ebub, .mob'
    },
    {
      id: 3,
      titulo: 'Impresso + E-book',
      corpo: 'R$00,00',
      rodape: '.pdf, .ebub, .mob'
    },
  ]
} 


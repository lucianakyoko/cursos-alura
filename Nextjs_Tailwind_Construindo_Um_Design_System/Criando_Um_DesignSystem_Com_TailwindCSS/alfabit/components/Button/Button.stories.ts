import { Meta, StoryObj } from "@storybook/react"

import Button, { ButtonProps } from "./Button"

const meta: Meta<ButtonProps> = {
  title: 'Molecules/Button',
  component: Button,
  argTypes: {}
}

export default meta

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão'
  }
}

export const Violet: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão',
    className: 'theme-violet'
  }
}

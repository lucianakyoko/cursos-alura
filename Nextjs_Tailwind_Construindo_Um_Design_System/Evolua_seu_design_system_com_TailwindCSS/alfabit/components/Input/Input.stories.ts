import { Meta, StoryObj} from '@storybook/react'

import Input, { InputProps } from './Input'

const meta: Meta<InputProps> = {
  title: 'Molecules/Input',
  component: Input,
  argTypes: {}
}

export default meta

export const Primary: StoryObj<InputProps> = {
  args: {
    value: 'Input',
  }
}

export const Multiline: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    multiline: true
  }
}

export const PrimaryDisabled: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    disabled: true
  }
}

export const MultilineDisabled: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    multiline: true,
    disabled: true
  }
}

export const PrimaryLabel: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    label: 'Label'
  }
}

export const PrimaryLabelDisabled: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    label: 'Label',
    disabled: true
  }
}

export const MultilineLabel: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    multiline: true,
    label: 'Label'
  }
}

export const MultilineLabelDisabled: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    multiline: true,
    label: 'Label',
    disabled: true
  }
}

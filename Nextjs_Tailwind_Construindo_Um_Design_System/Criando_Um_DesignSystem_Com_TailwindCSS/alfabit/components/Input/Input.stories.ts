import { Meta, StoryObj } from '@storybook/react';
import Input, { InputProps } from './Input';

const meta: Meta<InputProps> = {
  title: 'Molecules/ Input',
  component: Input,
  argTypes: {}
};

export default meta;

export const Primary: StoryObj<InputProps> = {
  args: {
    value:'Input'
  }
};

export const Multiline: StoryObj<InputProps> = {
  args: {
    value:'Input',
    multline: true
  }
};

export const PrimaryDisabled: StoryObj<InputProps> = {
  args: {
    value:'Input',
    disabled: true
  }
};

export const MultilineDisabled: StoryObj<InputProps> = {
  args: {
    value:'Input',
    disabled: true,
    multline: true
  }
};

export const PrimaryLabel: StoryObj<InputProps> = {
  args: {
    value:'Input',
    label: 'label'
  }
};

export const PrimaryLabelDisabled: StoryObj<InputProps> = {
  args: {
    value:'Input',
    disabled: true,
    label: 'label'
  }
};

export const MultilineLabel: StoryObj<InputProps> = {
  args: {
    value:'Input',
    label: 'label',
    multline: true
  }
};

export const MultilineLabelDisabled: StoryObj<InputProps> = {
  args: {
    value:'Input',
    disabled: true,
    multline: true,
    label: 'label'
  }
};

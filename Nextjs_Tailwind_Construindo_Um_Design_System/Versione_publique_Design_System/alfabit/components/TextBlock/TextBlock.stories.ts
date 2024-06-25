import { Meta, StoryObj } from "@storybook/react";

import TextBlock, { type TextBlockProps } from "./TextBlock";

const meta: Meta<TextBlockProps> = {
  title: "Design System/Molecules/TextBlock",
  component: TextBlock,
  argTypes: {
    type: {
      type: "string",
    },
    title: {
      type: "string",
    },
    children: {
      type: "string",
    },
  },
};

export default meta;

export const Primary: StoryObj<TextBlockProps> = {
  args: {
    title: "Título",
    children: "Olá eu sou uma bloco de Texto padrão",
  },
};

export const TextBlockPrimary: StoryObj<TextBlockProps> = {
  args: {
    title: "Título",
    children: "Olá eu sou uma bloco de Texto Primário",
    type: "primary",
  },
};

export const TextBlockSecondary: StoryObj<TextBlockProps> = {
  args: {
    title: "Título",
    children: "Olá eu sou uma bloco de Texto Secundário",
    type: "secondary",
  },
};

export const TextBlockTertiary: StoryObj<TextBlockProps> = {
  args: {
    title: "Título",
    children: "Olá eu sou uma bloco de Texto Terciário",
    type: "dark",
  },
};

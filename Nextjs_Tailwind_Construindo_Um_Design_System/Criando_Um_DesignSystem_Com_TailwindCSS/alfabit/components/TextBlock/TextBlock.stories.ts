import { Meta, StoryObj } from "@storybook/react"

import TextBlock, { TextBlockProps } from "./TextBlock"

const meta: Meta = {
  title: "Molecules/TextBlock",
  component: TextBlock,
  argTypes: {
    className: {
      type: "string"
    }
  }
}

export default meta

export const Primary: StoryObj<TextBlockProps> = {
  args: {
    title: "Título",
    textBlock: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
}

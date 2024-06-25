
import type { Meta, StoryObj } from "@storybook/react";

import Switch, { type SwitchProps } from "./Switch";

const meta: Meta<SwitchProps> = {
  title: "Design System/Molecules/Switch",
  component: Switch,
  argTypes: {
    defaultEnable: {
      type: "boolean",
      control: { type: "boolean" },
    },
    disabled: {
      type: "boolean",
      control: { type: "boolean" },
    },
    variant: {
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<SwitchProps>;
export const Primary: Story = {
  args: {},
};

export const CommonEnabled: Story = {
  args: {
    variant: "common",
    defaultEnable: true,
  },
};

export const CommonNotEnabled: Story = {
  args: {
    variant: "common",
    defaultEnable: false,
  },
};

export const ContractEnabled: Story = {
  args: {
    variant: "contract",
    defaultEnable: true,
  },
};

export const ContractNotEnabled: Story = {
  args: {
    variant: "contract",
    defaultEnable: false,
  },
};

export const CommonEnabledDisabled: Story = {
  args: {
    defaultEnable: true,
    disabled: true,
  },
};

export const CommonNotEnabledDisabled: Story = {
  args: {
    defaultEnable: false,
    disabled: true,
  },
};

export const ContractEnabledDisabled: Story = {
  args: {
    variant: "contract",
    defaultEnable: true,
    disabled: true,
  },
};

export const ContractNotEnabledDisabled: Story = {
  args: {
    variant: "contract",
    defaultEnable: false,
    disabled: true,
  },
};
import type { Meta, StoryObj } from "@storybook/react";

import Dropdown from "./";

const meta: Meta<typeof Dropdown> = {
  title: "Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },



  args: {
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const dropdown: Story = {
  args: {
  
  },
};

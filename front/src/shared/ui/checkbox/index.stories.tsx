import type { Meta, StoryObj } from "@storybook/react";

import Checkbox from "./";

const meta: Meta<typeof Checkbox> = {
  title: "Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },



  args: {
   
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const checkbox: Story = {
  args: {
  
  },
};

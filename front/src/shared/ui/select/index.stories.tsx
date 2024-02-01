import type { Meta, StoryObj } from "@storybook/react";

import Select from "./";

const meta: Meta<typeof Select> = {
  title: "Select",
  component: Select,
  parameters: {
    layout: "centered",
  },



  args: {
   
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const select: Story = {
  args: {
  
  },
};

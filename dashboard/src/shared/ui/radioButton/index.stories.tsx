import type { Meta, StoryObj } from "@storybook/react";

import RadioButton from "./";

const meta: Meta<typeof RadioButton> = {
  title: "RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },



  args: {
   
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const radioButton: Story = {
  args: {
  
  },
};

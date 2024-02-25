import type { Meta, StoryObj } from "@storybook/react";

import TextInput from "./";

const meta: Meta<typeof TextInput> = {
  title: "TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },



  args: {
   
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const textInput: Story = {
  args: {
  
  },
};

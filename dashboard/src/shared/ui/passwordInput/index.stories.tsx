import type { Meta, StoryObj } from "@storybook/react";

import PasswordInput from "./";

const meta: Meta<typeof PasswordInput> = {
  title: "PasswordInput",
  component: PasswordInput,
  parameters: {
    layout: "centered",
  },



  args: {
   
  },
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const passwordInput: Story = {
  args: {
  
  },
};
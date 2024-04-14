import type { Meta, StoryObj } from "@storybook/react";

import Counter from "./";

const meta: Meta<typeof Counter> = {
  title: "Counter",
  component: Counter,
  parameters: {
    layout: "centered",
  },



  args: {
   
  },
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const counter: Story = {
  args: {
  
  },
};

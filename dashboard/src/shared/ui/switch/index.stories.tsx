import type { Meta, StoryObj } from "@storybook/react";

import Switch from "./";

const meta: Meta<typeof Switch> = {
  title: "Switcher",
  component: Switch,
  parameters: {
    layout: "centered",
  },



  args: {
   
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const switcher: Story = {
  args: {
  
  },
};
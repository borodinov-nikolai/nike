import type { Meta, StoryObj } from "@storybook/react";

import Drawer from "./";

const meta: Meta<typeof Drawer> = {
  title: "Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
  },



  args: {
   children: <button>открыть</button>
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const drawer: Story = {
  args: {
  
  },
};

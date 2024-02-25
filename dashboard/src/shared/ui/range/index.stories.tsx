import type { Meta, StoryObj } from "@storybook/react";

import Range from "./";

const meta: Meta<typeof Range> = {
  title: "Range",
  component: Range,
  parameters: {
    layout: "centered",
  },



  args: {
   
  },
};

export default meta;
type Story = StoryObj<typeof Range>;

export const range: Story = {
  args: {
  
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import Pagination from "./";

const meta: Meta<typeof Pagination> = {
  title: "Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },



  args: {
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const pagination: Story = {
  args: {
  
  },
};

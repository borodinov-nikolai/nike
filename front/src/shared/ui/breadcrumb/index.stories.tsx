import type { Meta, StoryObj } from "@storybook/react";

import Breadcrumb from "./";

const meta: Meta<typeof Breadcrumb> = {
  title: "Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },



  args: {
    items: [
        {
            label: "страница 1",
            url: '/page1'
        },
        {
            label: "страница 2",
            url: '/page2'
        },
    ]
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const breadcrumb: Story = {
  args: {
  
  },
};

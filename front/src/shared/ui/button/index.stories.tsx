import type { Meta, StoryObj } from "@storybook/react";

import Button from "./";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

//   argTypes: {
//     color: {
//       name: "Color",
//       control: "radio",
//       options: ["orange", "gray"],
//       defaultValue: { summary: "orange" },
//       description: "Change color",
//     },
//   },

  // argTypes: {
  //   size: {
  //     name: "Size",
  //     control: "radio",
  //     options: ["small", "normal"],
  //     defaultValue: { summary: "normal" },
  //     description: "Change size:",
  //   },
  // },

  args: {
    children: 'Button'
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const button: Story = {
  args: {
  
  },
};


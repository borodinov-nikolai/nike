import type { Meta, StoryObj } from "@storybook/react";

import Accordion from "./";

const meta: Meta<typeof Accordion> = {
  title: "Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },



  args: {
   title: 'заголовок',
   children:  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum odio cupiditate, harum, dolore itaque distinctio dolor consectetur deserunt in perferendis sunt facilis consequuntur quis consequatur saepe. Ad et quas ea!"
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const accordion: Story = {
  args: {
  
  },
};

import { Meta, StoryObj } from "@storybook/react";

import H1 from "./H1";

const meta: Meta<typeof H1> = {
  component: H1,
};

export default meta;

type Story = StoryObj<typeof H1>;

export const Primary: Story = {
  args: {
    text: "To Do List",
    color: "#333333",
    fontWeight: "bold",
    fontSize: "56px",
  },
};

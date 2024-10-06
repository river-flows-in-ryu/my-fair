import { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "All",
    color: "#2182F3",
    bgColor: " #EBF4FF",
    width: "108px",
    height: "40px",
    rounded: "12px",
  },
};

export const Secondary: Story = {
  args: {
    label: "To Do",
    color: "#454545",
    width: "108px",
    height: "40px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import Todo from "./Todo";

const meta: Meta<typeof Todo> = {
  component: Todo,
};

export default meta;

type Story = StoryObj<typeof Todo>;

export const Primary: Story = {
  args: {
    isDone: true,
    text: "출근하고 비타민 먹기",
  },
};

export const Secondary: Story = {
  args: {
    isDone: false,
    text: "Daily Scrum 작성하기",
  },
};

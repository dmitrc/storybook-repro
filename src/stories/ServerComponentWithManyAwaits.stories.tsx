import type { Meta, StoryObj } from "@storybook/react";
import { ServerComponentWithManyAwaits } from "../app/page";

const meta: Meta<typeof ServerComponentWithManyAwaits> = {
  title: "RSC/ManyAwaits",
  component: ServerComponentWithManyAwaits,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
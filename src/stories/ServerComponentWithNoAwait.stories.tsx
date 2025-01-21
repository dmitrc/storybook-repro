import type { Meta, StoryObj } from "@storybook/react";
import { ServerComponentWithNoAwait } from "../app/page";

const meta: Meta<typeof ServerComponentWithNoAwait> = {
  title: "RSC/NoAwait",
  component: ServerComponentWithNoAwait,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
import type { Meta, StoryObj } from "@storybook/react";
import { ServerComponentWithOneAwait } from "../app/page";

const meta: Meta<typeof ServerComponentWithOneAwait> = {
  title: "RSC/OneAwait",
  component: ServerComponentWithOneAwait,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
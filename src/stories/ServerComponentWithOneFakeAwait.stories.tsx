import type { Meta, StoryObj } from "@storybook/react";
import { ServerComponentWithOneFakeAwait } from "../app/page";

const meta: Meta<typeof ServerComponentWithOneFakeAwait> = {
  title: "RSC/OneFakeAwait",
  component: ServerComponentWithOneFakeAwait,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
import type { Meta, StoryObj } from "@storybook/react";
import { ServerComponentWithManyFakeAwaits } from "../app/page";

const meta: Meta<typeof ServerComponentWithManyFakeAwaits> = {
  title: "RSC/ManyFakeAwaits",
  component: ServerComponentWithManyFakeAwaits,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
import type { Meta, StoryObj } from "@storybook/react";
import { LocalizedComponentTranslationsLater } from "../app/page";

const meta: Meta<typeof LocalizedComponentTranslationsLater> = {
  title: "Localized/TranslationsLater",
  component: LocalizedComponentTranslationsLater,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
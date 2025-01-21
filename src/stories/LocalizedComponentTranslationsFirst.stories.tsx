import type { Meta, StoryObj } from "@storybook/react";
import { LocalizedComponentTranslationsFirst } from "../app/page";

const meta: Meta<typeof LocalizedComponentTranslationsFirst> = {
  title: "Localized/TranslationsFirst",
  component: LocalizedComponentTranslationsFirst,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  features: {
    experimentalRSC: true
  },
  webpackFinal: async (config) => {
    config.resolve ||= {};
    config.resolve.alias ||= {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "next-intl/server": path.resolve(__dirname, "../mocks/next-intl-server.ts"),
    };
    return config;
  }
};
export default config;

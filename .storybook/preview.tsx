import * as React from "react";
import type { Preview } from "@storybook/react";
import { NextIntlClientProvider } from "next-intl";

const loadLocales = async () => {
  return { messages: (await import(`../messages/en.json`)).default };
};

const WithIntlProvider = (Story, context) => {
  return (
    <NextIntlClientProvider
      locale={"en"}
      messages={context.loaded.messages}
    >
      <Story />
    </NextIntlClientProvider>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [loadLocales],
  decorators: [
    WithIntlProvider
  ]
};

export default preview;

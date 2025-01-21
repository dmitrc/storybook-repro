import { useMessages, useTranslations } from "next-intl";

export function getTranslations(...args: Parameters<typeof useTranslations>) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useTranslations(...args);
}

export function getMessages(...args: Parameters<typeof useMessages>) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMessages(...args);
}

export const getLocale = () => "en";
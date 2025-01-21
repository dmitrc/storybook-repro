import { getTranslations } from "next-intl/server";

// To make sure there is no static cache shenanigans
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div>
      <ServerComponentWithNoAwait />
      <ServerComponentWithOneFakeAwait />
      <ServerComponentWithManyFakeAwaits />
      <ServerComponentWithOneAwait />
      <ServerComponentWithManyAwaits />
      <LocalizedComponentTranslationsFirst />
      <LocalizedComponentTranslationsLater />
    </div>
  );
}

// Intentionally leaving in "async" here, but not actually awaiting on anything
// This renders fine in Storybook
export async function ServerComponentWithNoAwait() {
  console.log(`ServerComponentWithNoAwait`);
  return <p>no await</p>;
}

// This renders fine in Storybook
export async function ServerComponentWithOneFakeAwait() {
  console.log(`ServerComponentWithOneFakeAwait`);
  const md1 = await getMockData(1); // this is actually synchronous
  return <p>{md1}</p>;
}

// This renders fine in Storybook
export async function ServerComponentWithManyFakeAwaits() {
  console.log(`ServerComponentWithManyFakeAwaits`);
  const md1 = await getMockData(1); // this is actually synchronous
  const md2 = await getMockData(1); // this is actually synchronous
  return <p>{md1} + {md2}</p>;
}

// This returns infinite re-render loop in Storybook
export async function ServerComponentWithOneAwait() {
  console.log(`ServerComponentWithOneAwait`);
  const md1 = await getMockDataWithDelay(1);
  return <p>{md1}</p>
}

// This returns infinite re-render loop in Storybook
export async function ServerComponentWithManyAwaits() {
  console.log(`ServerComponentWithManyAwaits`);
  const md1 = await getMockDataWithDelay(1);
  const md2 = await getMockDataWithDelay(2);
  return <p>{md1} + {md2}</p>
}

// This renders fine in Storybook
export async function LocalizedComponentTranslationsFirst() {
  console.log(`LocalizedComponentTranslationsFirst`);
  const t = await getTranslations();
  const md1 = await getMockData(1);
  return <p>{t("test")} + {md1}</p>
}

// This causes issues in Storybook:
// - 8.4.7: Failed to call `useTranslations` because the context from `NextIntlClientProvider` was not found.
// - 8.5.0: Infinite re-render loop
export async function LocalizedComponentTranslationsLater() {
  console.log(`LocalizedComponentTranslationsLater`);
  const md1 = await getMockData(1);
  const t = await getTranslations();
  return <p>{t("test")} + {md1}</p>
}


// ------------------------------

export function getMockDataWithDelay(i: number): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve(`mock data async ${i}`), 50));
}

// Intentionally leaving in "async" here, but not actually awaiting on anything
async function getMockData(i: number) {
  return `mock data sync ${i}`;
}
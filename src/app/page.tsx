export default function Home() {
  return (
    <div>
      <ServerComponentWithOneAwait />
      <ServerComponentWithManyAwaits />
    </div>
  );
}

export async function ServerComponentWithOneAwait() {
  console.log(`ServerComponentWithOneAwait`);
  const md1 = await getMockData(1);
  return <p>{md1}</p>
}

export async function ServerComponentWithManyAwaits() {
  console.log(`ServerComponentWithManyAwaits`);
  const md1 = await getMockData(1);
  const md2 = await getMockData(2);
  return <p>{md1} + {md2}</p>
}

export function getMockData(i: number): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve(`mock data ${i}`), 1000));
}
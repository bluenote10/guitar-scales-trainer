export function allDefined<T>(array: Array<T | undefined | null>): array is Array<T> {
  return array.every((x) => x != null);
}

export function range(n: number): number[] {
  return [...Array(n).keys()];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function assertUnreachable(x: never): never {
  throw new Error("Didn't expect to get here");
}

export function randChoice<T>(choices: Array<T>): T {
  return choices[Math.floor(Math.random() * choices.length)];
}

export function randRange(low: number, high: number) {
  return Math.floor(Math.random() * (high - low + 1)) + low;
}

export function randTwoStrings(): [number, number] {
  return randChoice([
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ]);
}

export function randRangeBiased(low: number, high: number) {
  const a = randRange(low, high);
  const b = randRange(low, high);
  return Math.min(a, b);
}

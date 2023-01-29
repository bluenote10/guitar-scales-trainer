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

export function randRangeBiased(low: number, high: number) {
  return randChoice([randRange(low, 5), randRange(low, 12), randRange(low, high)]);
}

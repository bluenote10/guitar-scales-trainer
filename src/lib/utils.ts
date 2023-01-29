export function range(n: number): number[] {
  return [...Array(n).keys()];
}

export function assertUnreachable(x: never): never {
  throw new Error("Didn't expect to get here");
}

export function randChoice<T>(choices: Array<T>): T {
  return choices[Math.floor(Math.random() * choices.length)];
}

export function randRange(low: number, high: number) {
  return Math.floor(Math.random() * (high - low + 1)) + low;
}

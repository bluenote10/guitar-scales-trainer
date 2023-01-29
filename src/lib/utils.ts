export function range(n: number): number[] {
  return [...Array(n).keys()];
}

export function assertUnreachable(x: never): never {
  throw new Error("Didn't expect to get here");
}

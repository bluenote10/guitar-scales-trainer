import { describe, it, expect } from "vitest";

import { genScale3NPS, getNeighborMode, Mode } from "./scales_generator";

describe("getNeighborMode", () => {
  it("should go up", () => {
    expect(getNeighborMode(Mode.ionian, "up")).toStrictEqual([Mode.dorian, 2]);
  });
  it("should go down", () => {
    expect(getNeighborMode(Mode.ionian, "down")).toStrictEqual([Mode.locrian, -1]);
  });
});

describe("genScale3NPS", () => {
  it("should work", () => {
    const result = genScale3NPS({ mode: Mode.ionian, baseFret: 5 }, 24)?.map((annotation) => ({
      string: annotation.string,
      fret: annotation.fret,
    }));
    expect(result).toStrictEqual([
      { string: 5, fret: 5 },
      { string: 5, fret: 7 },
      { string: 5, fret: 9 },
      { string: 4, fret: 5 },
      { string: 4, fret: 7 },
      { string: 4, fret: 9 },
      { string: 3, fret: 6 },
      { string: 3, fret: 7 },
      { string: 3, fret: 9 },
      { string: 2, fret: 6 },
      { string: 2, fret: 7 },
      { string: 2, fret: 9 },
      { string: 1, fret: 7 },
      { string: 1, fret: 9 },
      { string: 1, fret: 10 },
      { string: 0, fret: 7 },
      { string: 0, fret: 9 },
      { string: 0, fret: 10 },
    ]);
  });
});

import { ALL_MODES, genScale3NPS, getNeighborMode, Mode } from "./scales_generator";
import { describe, expect, it } from "vitest";

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
    const result = genScale3NPS({ mode: Mode.ionian, baseFret: 5 }, 1, 24)?.map((note) => ({
      string: note.string,
      fret: note.fret,
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

  it("should respect max fret", () => {
    const minFret = 1;
    {
      const maxFret = 10;
      expect(genScale3NPS({ mode: Mode.ionian, baseFret: 5 }, minFret, maxFret)).toBeDefined();
    }
    {
      const maxFret = 9;
      expect(genScale3NPS({ mode: Mode.ionian, baseFret: 5 }, minFret, maxFret)).toBeUndefined();
    }
  });

  it("should respect min fret", () => {
    const maxFret = 24;
    {
      const minFret = 5;
      expect(genScale3NPS({ mode: Mode.ionian, baseFret: 5 }, minFret, maxFret)).toBeDefined();
    }
    {
      const minFret = 6;
      expect(genScale3NPS({ mode: Mode.ionian, baseFret: 5 }, minFret, maxFret)).toBeUndefined();
    }
  });
});

describe("ALL_MODES", () => {
  it("should contain all modes", () => {
    expect(ALL_MODES).toStrictEqual([
      Mode.ionian,
      Mode.dorian,
      Mode.phrygian,
      Mode.lydian,
      Mode.mixolydian,
      Mode.aeolian,
      Mode.locrian,
    ]);
  });
});

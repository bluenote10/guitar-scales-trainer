import type { Note, Notes } from "./Fretboard.svelte";
import {
  allDefined,
  assertUnreachable,
  randChoice,
  randRange,
  randRangeBiased,
  randTwoStrings,
} from "$lib/utils";

export type GuitarTuning = number[];

export function defaultGuitarTuning(): GuitarTuning {
  return [
    64, // E4
    59, // B3
    55, // G3
    50, // D3
    45, // A2
    40, // E2
  ];
}

export enum Mode {
  ionian = "ionian",
  dorian = "dorian",
  phrygian = "phrygian",
  lydian = "lydian",
  mixolydian = "mixolydian",
  aeolian = "aeolian",
  locrian = "locrian",
}

export const ALL_MODES = Object.values(Mode);

export type Direction = "up" | "down";

export function getNeighborMode(mode: Mode, direction: Direction): [Mode, number] {
  if (direction == "up") {
    switch (mode) {
      case Mode.ionian:
        return [Mode.dorian, 2];
      case Mode.dorian:
        return [Mode.phrygian, 2];
      case Mode.phrygian:
        return [Mode.lydian, 1];
      case Mode.lydian:
        return [Mode.mixolydian, 2];
      case Mode.mixolydian:
        return [Mode.aeolian, 2];
      case Mode.aeolian:
        return [Mode.locrian, 2];
      case Mode.locrian:
        return [Mode.ionian, 1];
      default:
        assertUnreachable(mode);
    }
  } else if (direction == "down") {
    switch (mode) {
      case Mode.ionian:
        return [Mode.locrian, -1];
      case Mode.dorian:
        return [Mode.ionian, -2];
      case Mode.phrygian:
        return [Mode.dorian, -2];
      case Mode.lydian:
        return [Mode.phrygian, -1];
      case Mode.mixolydian:
        return [Mode.lydian, -2];
      case Mode.aeolian:
        return [Mode.mixolydian, -2];
      case Mode.locrian:
        return [Mode.aeolian, -2];
      default:
        assertUnreachable(mode);
    }
  } else {
    assertUnreachable(direction);
  }
}

function getNeighborModeMultiSteps(
  mode: Mode,
  direction: Direction,
  steps: number,
): [Mode, number] {
  let totalDelta = 0;
  for (let i = 0; i < steps; ++i) {
    const [nextMode, delta] = getNeighborMode(mode, direction);
    mode = nextMode;
    totalDelta += delta;
  }
  return [mode, totalDelta];
}

export function getCircleOfFifthsNeighborMode(mode: Mode, direction: Direction): [Mode, number] {
  if (direction == "up") {
    switch (mode) {
      case Mode.ionian:
        return [Mode.lydian, 0];
      case Mode.dorian:
        return [Mode.mixolydian, 0];
      case Mode.phrygian:
        return [Mode.aeolian, 0];
      case Mode.lydian:
        return [Mode.locrian, 1];
      case Mode.mixolydian:
        return [Mode.ionian, 0];
      case Mode.aeolian:
        return [Mode.dorian, 0];
      case Mode.locrian:
        return [Mode.phrygian, 0];
      default:
        assertUnreachable(mode);
    }
  } else if (direction == "down") {
    switch (mode) {
      case Mode.ionian:
        return [Mode.mixolydian, 0];
      case Mode.dorian:
        return [Mode.aeolian, 0];
      case Mode.phrygian:
        return [Mode.locrian, 0];
      case Mode.lydian:
        return [Mode.ionian, 0];
      case Mode.mixolydian:
        return [Mode.dorian, 0];
      case Mode.aeolian:
        return [Mode.phrygian, 0];
      case Mode.locrian:
        return [Mode.lydian, -1];
      default:
        assertUnreachable(mode);
    }
  } else {
    assertUnreachable(direction);
  }
}

function getPitchOffset(mode: Mode): number {
  switch (mode) {
    case Mode.ionian:
      return 0;
    case Mode.dorian:
      return 2;
    case Mode.phrygian:
      return 4;
    case Mode.lydian:
      return 5;
    case Mode.mixolydian:
      return 7;
    case Mode.aeolian:
      return 9;
    case Mode.locrian:
      return 11;
    default:
      assertUnreachable(mode);
  }
}

/**
 * This is based on a palette mentions in the SO post below.
 *
 * I like it because it has enough colors, and avoids ugly colors like #F00.
 *
 * https://stackoverflow.com/a/4382138/1804173
 * http://alumni.media.mit.edu/~wad/color/palette.html
 */
function pitchOffsetToColor(offset: number): string {
  offset = offset % 12;
  switch (offset) {
    case 0:
      return "var(--color-blue)";
    case 1:
      return "var(--color-yellow)";
    case 2:
      return "var(--color-orange)";
    case 3:
      return "var(--color-tan)";
    case 4:
      return "var(--color-red)";
    case 5:
      return "var(--color-light-green)";
    case 6:
      return "var(--color-cyan)";
    case 7:
      return "var(--color-light-blue)";
    case 8:
      return "var(--color-pink)";
    case 9:
      return "var(--color-purple)";
    case 10:
      return "var(--color-green)";
    case 11:
      return "var(--color-brown)";
  }
  throw new Error("Didn't expect to get here");
}

export type ScaleLocator = {
  baseFret: number;
  mode: Mode;
};

export function getNextNeighborLocator(locator: ScaleLocator, direction: Direction): ScaleLocator {
  const [neighborMode, pitchDelta] = getNeighborMode(locator.mode, direction);
  return { baseFret: locator.baseFret + pitchDelta, mode: neighborMode };
}

export function getNextCircleOfFifthsLocator(
  locator: ScaleLocator,
  direction: Direction,
): ScaleLocator {
  const [neighborMode, pitchDelta] = getCircleOfFifthsNeighborMode(locator.mode, direction);
  return { baseFret: locator.baseFret + pitchDelta, mode: neighborMode };
}

type DiatonicNote = Note & { mode: Mode };

type DiatonicNotes = DiatonicNote[];

// Using acronym "3NPS" for "three notes per string" scale.

export function genScale3NPS(
  locator: ScaleLocator,
  minFret: number,
  maxFret: number,
  tuning: GuitarTuning = defaultGuitarTuning(),
): DiatonicNotes | undefined {
  let curPitch = tuning[tuning.length - 1] + locator.baseFret;
  let curMode = locator.mode;

  const notes: DiatonicNotes = [];

  for (let string = tuning.length - 1; string >= 0; --string) {
    for (let i = 0; i < 3; ++i) {
      const fret = getFretOnString(curPitch, string, tuning);
      if (fret < minFret || fret > maxFret) {
        return undefined;
      }
      notes.push({
        string,
        fret,
        mode: curMode,
        color: pitchOffsetToColor(getPitchOffset(curMode)),
      });
      const [nxtMode, pitchDelta] = getNeighborMode(curMode, "up");
      curPitch += pitchDelta;
      curMode = nxtMode;
    }
  }

  return notes;
}

export type QAPair = {
  question: Notes;
  answer: Notes;
  direction: Direction;
};

export function genRandom3NPSScaleNeighborPair(maxFret: number): QAPair {
  const minFret = 1; // we don't have proper rendering support for fret = 0.
  for (;;) {
    const questionLocator = {
      baseFret: randRangeBiased(minFret, maxFret),
      mode: randChoice(ALL_MODES),
    };
    const questionsNotes = genScale3NPS(questionLocator, minFret, maxFret);

    if (questionsNotes == null) {
      continue;
    }

    const direction = randChoice(["up", "down"] as Direction[]);
    const answerLocator = getNextNeighborLocator(questionLocator, direction);
    const answerNotes = genScale3NPS(answerLocator, minFret, maxFret);

    if (answerNotes != null) {
      return { question: questionsNotes, answer: answerNotes, direction };
    }
  }
}

export function genRandom3NPSScale(maxFret: number): Notes {
  const minFret = 1; // we don't have proper rendering support for fret = 0.
  for (;;) {
    const locator = {
      baseFret: randRangeBiased(minFret, maxFret),
      mode: randChoice(ALL_MODES),
    };
    const notes = genScale3NPS(locator, minFret, maxFret);

    if (notes != null) {
      return notes;
    }
  }
}

export function randTwoRandomStrings(notes: Notes): Notes {
  const [i, j] = randChoice([
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ]);
  return notes.filter((a) => a.string == i || a.string == j);
}

export function filterToStrings(notes: Notes, stringsToKeep: number[]): Notes {
  return notes.filter((a) => stringsToKeep.includes(a.string));
}

export function filterToTwoRandomStrings(notes: Notes): Notes {
  return filterToStrings(notes, randTwoStrings());
}

export function genRandom3NPSScaleCircleOfFithsPair(maxFret: number): QAPair {
  const minFret = 1; // we don't have proper rendering support for fret = 0.
  for (;;) {
    const questionLocator = {
      baseFret: randRangeBiased(minFret, maxFret),
      mode: randChoice(ALL_MODES),
    };
    const questionsNotes = genScale3NPS(questionLocator, minFret, maxFret);

    if (questionsNotes == null) {
      continue;
    }

    const direction = randChoice(["up", "down"] as Direction[]);
    const answerLocator = getNextCircleOfFifthsLocator(questionLocator, direction);
    const answerNotes = genScale3NPS(answerLocator, minFret, maxFret);

    if (answerNotes != null) {
      return { question: questionsNotes, answer: answerNotes, direction };
    }
  }
}

export type NotesSequence = {
  sequence: Notes[];
  direction: Direction;
};

export function genRandom3NPSTwoStringsUpDownSequence(maxFret: number): NotesSequence {
  const minFret = 1; // we don't have proper rendering support for fret = 0.
  for (;;) {
    const direction = randChoice(["up", "down"] as Direction[]);
    const twoStrings = randTwoStrings();

    let locator = {
      baseFret: randRange(minFret, maxFret),
      mode: randChoice(ALL_MODES),
    };

    const allLocators = [locator];

    for (let i = 0; i < 7; ++i) {
      locator = getNextNeighborLocator(locator, direction);
      allLocators.push(locator);
    }

    const sequence = allLocators.map((loc) => genScale3NPS(loc, minFret, maxFret));

    if (allDefined(sequence)) {
      return {
        sequence: sequence.map((a) => filterToStrings(a, twoStrings)),
        direction,
      };
    }
  }
}

export function genRandom3NPSIntervalsUpDownSequence(
  maxFret: number,
  interval: Interval,
): NotesSequence {
  const minFret = 1; // we don't have proper rendering support for fret = 0.
  for (;;) {
    const direction = randChoice(["up", "down"] as Direction[]);

    const locator = {
      baseFret: randRange(minFret, maxFret),
      mode: randChoice(ALL_MODES),
    };

    const notes = genScale3NPS(locator, minFret, maxFret);
    if (notes == null) {
      continue;
    }

    const baseNotes = direction === "up" ? notes.slice(0, -3) : notes.slice(3).reverse();
    const sequence = baseNotes.map((note) => [note, getIntervalNote(note, interval, direction)]);

    if (allValid(sequence, minFret, maxFret)) {
      return { sequence, direction };
    }
  }
}

export enum Interval {
  third = 3,
  fifth = 5,
  octave = 8,
}

function getIntervalNote(
  note: DiatonicNote,
  interval: Interval,
  direction: Direction,
): DiatonicNote {
  const [mode, delta] = getNeighborModeMultiSteps(note.mode, direction, (interval as number) - 1);

  const string = direction === "up" ? note.string - 1 : note.string + 1;

  if (string < 0 || string > 5) {
    throw new RangeError(`String index ${string} out of bounds`);
  } else {
    const fret = getFretOnString(getPitch(note) + delta, string);
    return { string, fret, mode, color: pitchOffsetToColor(getPitchOffset(mode)) };
  }
}

function getPitch(note: Note, tuning: GuitarTuning = defaultGuitarTuning()): number {
  return tuning[note.string] + note.fret;
}

function getFretOnString(
  pitch: number,
  stringIdx: number,
  tuning: GuitarTuning = defaultGuitarTuning(),
): number {
  return pitch - tuning[stringIdx];
}

function allValid(sequence: Notes[], minFret: number, maxFret: number): boolean {
  for (const notes of sequence) {
    for (const note of notes) {
      if (note.fret < minFret || note.fret > maxFret) {
        return false;
      }
    }
  }
  return true;
}

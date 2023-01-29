import type { Annotation, Annotations } from "./Fretboard.svelte";
import { assertUnreachable } from "$lib/utils";

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

export function getNeighborMode(mode: Mode, direction: "up" | "down"): [Mode, number] {
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

export type ScaleLocator = {
  baseFret: number;
  mode: Mode;
};

// Using acronym "3NPS" for "three notes per string" scale.

export function genScale3NPS(
  locator: ScaleLocator,
  maxFret: number,
  tuning: GuitarTuning = defaultGuitarTuning(),
): Annotations | undefined {
  let curPitch = tuning[tuning.length - 1] + locator.baseFret;
  let curMode = locator.mode;

  const stringIndicesAndPitches = tuning
    .map((pitch, idx) => [idx, pitch] as [number, number])
    .reverse();

  const annotations: Annotations = [];

  for (const [stringIdx, stringBasePitch] of stringIndicesAndPitches) {
    for (let i = 0; i < 3; ++i) {
      annotations.push({
        string: stringIdx,
        fret: curPitch - stringBasePitch,
        color: pitchOffsetToColor(getPitchOffset(curMode)),
      });
      const [nxtMode, pitchDelta] = getNeighborMode(curMode, "up");
      curPitch += pitchDelta;
      curMode = nxtMode;
    }
  }

  return annotations;
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

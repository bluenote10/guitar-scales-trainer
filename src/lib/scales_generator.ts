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

export type Locator3NPS = {
  baseFret: number;
  mode: Mode;
};

// Using acronym "3NPS" for "three notes per string" scale.

export function genScale3NPS(
  locator: Locator3NPS,
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
        color: "#F00",
      });
      const [nxtMode, pitchDelta] = getNeighborMode(curMode, "up");
      curPitch += pitchDelta;
      curMode = nxtMode;
    }
  }

  return annotations;
}

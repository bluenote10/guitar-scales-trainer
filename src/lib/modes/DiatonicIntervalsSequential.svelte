<script lang="ts">
  import TaskDescription from "$lib/TaskDescription.svelte";
  import Fretboard from "../Fretboard.svelte";
  import {
    genRandom3NPSIntervalsUpDownSequence,
    type NotesSequence,
    Interval,
  } from "../scales_generator";
  import SequentialTask from "../task_templates/SequentialTask.svelte";

  const maxFret = 24;
  let sequence: NotesSequence;
  let curIdx = 0;

  generate();

  function generate() {
    sequence = genRandom3NPSIntervalsUpDownSequence(maxFret, Interval.third);
  }
</script>

<SequentialTask on:next={generate} sequenceLength={sequence.sequence.length} bind:curIdx>
  <div slot="description">
    <TaskDescription>Visualize the scale in thirds.</TaskDescription>
  </div>
  <div slot="sequence">
    <Fretboard notes={sequence.sequence[curIdx]} />
  </div>
</SequentialTask>

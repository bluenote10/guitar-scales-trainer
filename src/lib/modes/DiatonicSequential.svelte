<script lang="ts">
  import Fretboard from "../Fretboard.svelte";
  import SequentialTask from "../task_templates/SequentialTask.svelte";
  import {
    genRandom3NPSTwoStringsUpDownSequence,
    type AnnotationsSequence,
  } from "../scales_generator";
  import TaskDescription from "$lib/TaskDescription.svelte";

  const maxFret = 24;
  let annotationsSequence: AnnotationsSequence;

  generate();

  function generate() {
    annotationsSequence = genRandom3NPSTwoStringsUpDownSequence(maxFret);
  }

  let curIdx = 0;
</script>

<SequentialTask
  on:next={generate}
  sequenceLength={annotationsSequence.allAnnotations.length}
  bind:curIdx
>
  <div slot="description">
    <TaskDescription>
      Visualize the scale on just two strings step by step <b>{annotationsSequence.direction}</b> the
      neck.
    </TaskDescription>
  </div>
  <div slot="sequence">
    <Fretboard annotations={annotationsSequence.allAnnotations[curIdx]} />
  </div>
</SequentialTask>

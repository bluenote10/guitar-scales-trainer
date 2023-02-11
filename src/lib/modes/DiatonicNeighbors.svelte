<script lang="ts">
  import TaskDescription from "$lib/TaskDescription.svelte";
  import Fretboard from "../Fretboard.svelte";
  import {
    genRandom3NPSScaleNeighborPair,
    genRandom3NPSScaleCircleOfFithsPair,
    type QAPair,
  } from "../scales_generator";
  import InlineTask from "../task_templates/InlineTask.svelte";

  export let mode: "direct_neighbors" | "circle_of_fifth_neigbors";

  const maxFret = 24;
  let qaPair: QAPair;

  generate();

  function generate() {
    qaPair =
      mode == "direct_neighbors"
        ? genRandom3NPSScaleNeighborPair(maxFret)
        : genRandom3NPSScaleCircleOfFithsPair(maxFret);
  }
</script>

<InlineTask on:next={generate}>
  <div slot="description">
    <TaskDescription>
      {#if mode == "direct_neighbors"}
        Visualize the corresponding <b>{qaPair.direction == "up" ? "upper" : "lower"}</b> position.
      {:else}
        Visualize the scale that results from adding a
        <b>{qaPair.direction == "up" ? "♯" : "♭"}</b>, or going
        <b>{qaPair.direction == "up" ? "right" : "left"}</b>
        in the circle of fifths.
      {/if}
    </TaskDescription>
  </div>
  <div slot="question">
    <Fretboard notes={qaPair.question} />
  </div>
  <div slot="answer">
    <Fretboard notes={qaPair.answer} />
  </div>
</InlineTask>

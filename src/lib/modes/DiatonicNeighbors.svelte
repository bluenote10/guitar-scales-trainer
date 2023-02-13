<script lang="ts">
  import TaskDescription from "$lib/TaskDescription.svelte";
  import Fretboard from "../Fretboard.svelte";
  import {
    genRandom3NPSScaleNeighborPair,
    genRandom3NPSScaleCircleOfFifthsPair,
    type QAPair,
  } from "../scales_generator";
  import InlineTask from "../task_templates/InlineTask.svelte";

  // import { Select, Label } from "flowbite-svelte";

  export let mode: "direct_neighbors" | "circle_of_fifth_neighbors";

  const maxFret = 24;
  let qaPair: QAPair;
  /*
  let numRevealedStrings = 6;

  let revealedStringsSelectOptions = [
    { value: 6, name: 6 },
    { value: 5, name: 5 },
    { value: 4, name: 4 },
  ];
  */

  generate();

  function generate() {
    qaPair =
      mode == "direct_neighbors"
        ? genRandom3NPSScaleNeighborPair(maxFret)
        : genRandom3NPSScaleCircleOfFifthsPair(maxFret);
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
      <!--
      <Label
        >Select an option
        <Select class="mt-2" items={revealedStringsSelectOptions} bind:value={numRevealedStrings} />
      </Label>
      -->
    </TaskDescription>
  </div>
  <div slot="question">
    <Fretboard notes={qaPair.question} />
  </div>
  <div slot="answer">
    <Fretboard notes={qaPair.answer} />
  </div>
</InlineTask>

<style>
  b {
    color: #111;
  }
</style>

<script context="module" lang="ts">
  export const title = "Diatonic – Neighboring scales";
</script>

<script lang="ts">
  import TaskDescription from "$lib/TaskDescription.svelte";
  import Fretboard from "../Fretboard.svelte";
  import {
    genRandom3NPSScaleNeighborPair,
    genRandom3NPSScaleCircleOfFifthsPair,
    type QAPair,
  } from "../scales_generator";
  import InlineTask from "../task_templates/InlineTask.svelte";
  import { Radio, Toggle } from "flowbite-svelte";

  export let mode: "direct_neighbors" | "circle_of_fifth_neighbors";

  const maxFret = 24;
  let qaPair: QAPair;
  let numRevealedStrings = 6;
  let monochrome = false;

  generate();

  function generate() {
    qaPair =
      mode == "direct_neighbors"
        ? genRandom3NPSScaleNeighborPair(maxFret)
        : genRandom3NPSScaleCircleOfFifthsPair(maxFret);
  }
</script>

<InlineTask {title} on:next={generate}>
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

  <div slot="settings" class="settings">
    <div class="settings-header">String subset</div>
    <div class="settings-description">
      Limit the visibility to a subset of strings to make the exercise more challenging.
    </div>
    <Radio name="example" class="mt-2 mb-2" bind:group={numRevealedStrings} value={6}>
      6 strings (full pattern)
    </Radio>
    <Radio name="example" class="mt-2 mb-2" bind:group={numRevealedStrings} value={5}>
      5 strings
    </Radio>
    <Radio name="example" class="mt-2 mb-2" bind:group={numRevealedStrings} value={4}>
      4 strings
    </Radio>
    <Radio name="example" class="mt-2 mb-2" bind:group={numRevealedStrings} value={3}>
      3 strings
    </Radio>
    <Radio name="example" class="mt-2 mb-2" bind:group={numRevealedStrings} value={2}>
      2 strings
    </Radio>

    <div class="settings-header">Monochrome mode</div>
    <div class="settings-description">
      For an extra challenge, disable color hints and switch to monochrome mode.
    </div>
    <Toggle bind:checked={monochrome} />
  </div>

  <div slot="question">
    <Fretboard notes={qaPair.question} {monochrome} />
  </div>

  <div slot="answer">
    <Fretboard notes={qaPair.answer} {monochrome} />
  </div>
</InlineTask>

<style>
  b {
    color: #111;
  }

  .settings {
    font-size: 14px;
  }

  .settings-header {
    margin-top: 40px;
    color: #111;
    font-weight: bold;
  }

  .settings-description {
    margin-top: 15px;
    margin-bottom: 15px;
    color: #777;
  }
</style>

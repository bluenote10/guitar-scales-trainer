<script lang="ts">
  import Fretboard from "./Fretboard.svelte";
  import { genScale3NPS, Mode } from "./scales_generator";

  let isHidden = true;
</script>

<div>
  <h1>Question</h1>
  <slot name="question" />

  <h1>Answer</h1>
  {#if isHidden}
    <slot name="answer_hidden" />
  {:else}
    <slot name="answer_revealed" />
  {/if}

  <button on:click={() => (isHidden = !isHidden)}>{isHidden ? "Reveal" : "Hide"}</button>
</div>

<style>
</style>

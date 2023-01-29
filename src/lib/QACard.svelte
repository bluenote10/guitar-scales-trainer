<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Center from "./Center.svelte";

  const dispatch = createEventDispatcher();

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

  <div class="footer">
    <Center>
      <button on:click={() => (isHidden = !isHidden)}>{isHidden ? "Reveal" : "Hide"}</button>
      <button
        on:click={() => {
          dispatch("next");
          isHidden = true;
        }}>Next</button
      >
    </Center>
  </div>
</div>

<style>
  h1 {
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold;
    margin-top: 60px;
  }

  .footer {
    margin-top: 60px;
  }
</style>

<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Center from "./Center.svelte";
  import Button from "./Button.svelte";

  const dispatch = createEventDispatcher();

  let isHidden = true;
  let wasRevealedOnce = false;
</script>

<div>
  <a href="/">back</a>

  <h1>Question</h1>

  <slot name="question" />

  <h1>Answer</h1>

  {#if isHidden}
    <slot name="answer_hidden" />
  {:else}
    <slot name="answer_revealed" />
  {/if}

  <div class="footer">
    <Center gap={20}>
      <Button
        on:click={() => {
          isHidden = !isHidden;
          if (!isHidden) {
            wasRevealedOnce = true;
          }
        }}
      >
        <div class="fixed-width">{isHidden ? "Reveal" : "Hide"}</div>
      </Button>
      <Button
        disabled={!wasRevealedOnce}
        on:click={() => {
          dispatch("next");
          isHidden = true;
          wasRevealedOnce = false;
        }}
      >
        <div class="fixed-width">Next</div>
      </Button>
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

  .fixed-width {
    width: 80px;
  }
</style>

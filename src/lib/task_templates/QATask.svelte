<script lang="ts">
  import BackButton from "$lib/buttons/BackButton.svelte";
  import FancyButton from "$lib/buttons/FancyButton.svelte";
  import Center from "$lib/helper/Center.svelte";
  import Kbd from "$lib/helper/Kbd.svelte";
  import { shortcut } from "@svelte-put/shortcut";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let isHidden = true;
  let wasRevealedOnce = false;

  function onRevealHide() {
    isHidden = !isHidden;
    if (!isHidden) {
      wasRevealedOnce = true;
    }
  }

  function onNext() {
    if (wasRevealedOnce) {
      dispatch("next");
      isHidden = true;
      wasRevealedOnce = false;
    }
  }
</script>

<svelte:window
  use:shortcut={{
    trigger: {
      key: " ",
      callback: onRevealHide,
      preventDefault: true,
    },
  }}
  use:shortcut={{
    trigger: {
      key: "Enter",
      callback: onNext,
      preventDefault: true,
    },
  }}
/>

<div>
  <BackButton />

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
      <FancyButton on:click={onRevealHide}>
        <div class="fixed-width">{isHidden ? "Reveal" : "Hide"}</div>
      </FancyButton>
      <FancyButton on:click={onNext} disabled={!wasRevealedOnce}>
        <div class="fixed-width">Next</div>
      </FancyButton>
    </Center>
    <Center>
      <p class="hint">
        Hint: You can press
        <Kbd fontSize={11}>&lt;SPACE&gt;</Kbd> for reveal,
        <Kbd fontSize={11}>&lt;ENTER&gt;</Kbd> for next.
      </p>
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

  .hint {
    margin-top: 40px;
    font-size: 13px;
  }
</style>

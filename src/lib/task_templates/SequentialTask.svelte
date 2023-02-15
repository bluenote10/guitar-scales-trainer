<script lang="ts">
  import Center from "$lib/Center.svelte";
  import Kbd from "$lib/Kbd.svelte";
  import BackButton from "$lib/buttons/BackButton.svelte";
  import Button from "$lib/buttons/Button.svelte";
  import { shortcut } from "@svelte-put/shortcut";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let sequenceLength: number;
  export let curIdx = 0;

  let wasRevealedEntirely = false;

  function onIncrementIdx() {
    if (curIdx === sequenceLength - 1) {
      curIdx = 0;
    } else {
      curIdx++;
      if (curIdx === sequenceLength - 1) {
        wasRevealedEntirely = true;
      }
    }
  }

  function onNext() {
    if (wasRevealedEntirely) {
      dispatch("next");
      curIdx = 0;
      wasRevealedEntirely = false;
    }
  }
</script>

<svelte:window
  use:shortcut={{
    trigger: {
      key: " ",
      callback: onIncrementIdx,
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

  <h1>Question / Answer</h1>

  <slot name="description" />

  <slot name="sequence" />

  <div class="footer">
    <Center gap={20}>
      <Button on:click={onIncrementIdx}>
        <div class="fixed-width">Reveal</div>
      </Button>
      <Button on:click={onNext} disabled={!wasRevealedEntirely}>
        <div class="fixed-width">Next</div>
      </Button>
    </Center>
    <Center>
      <p class="hint">
        Hint: You can press
        <Kbd fontSize={11}>&lt;SPACE&gt;</Kbd> to reveal, and
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

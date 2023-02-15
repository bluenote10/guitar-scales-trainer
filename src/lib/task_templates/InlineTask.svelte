<script lang="ts">
  import Center from "$lib/Center.svelte";
  import Kbd from "$lib/Kbd.svelte";
  import BackButton from "$lib/buttons/BackButton.svelte";
  import Button from "$lib/buttons/Button.svelte";
  import SettingsButton from "$lib/buttons/SettingsButton.svelte";
  import { shortcut } from "@svelte-put/shortcut";
  import { createEventDispatcher } from "svelte";

  export let title: string;

  const dispatch = createEventDispatcher();

  let isHidden = true;
  let wasRevealedOnce = false;
  let settingsVisible = false;

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

  <div class="title">
    <h1>{title}</h1>
    <SettingsButton on:click={() => (settingsVisible = !settingsVisible)} />
  </div>

  {#if $$slots.settings && settingsVisible}
    <div class="settings">
      <slot name="settings" />
    </div>
  {/if}

  <div class="description">
    <slot name="description" />
  </div>

  {#if isHidden}
    <slot name="question" />
  {:else}
    <slot name="answer" />
  {/if}

  <div class="footer">
    <Center gap={20}>
      <Button on:click={onRevealHide}>
        <div class="fixed-width">{isHidden ? "Reveal" : "Hide"}</div>
      </Button>
      <Button on:click={onNext} disabled={!wasRevealedOnce}>
        <div class="fixed-width">Next</div>
      </Button>
    </Center>
    <Center>
      <p class="hint">
        Hint: You can press
        <Kbd fontSize={11}>&lt;SPACE&gt;</Kbd> to reveal/hide, and
        <Kbd fontSize={11}>&lt;ENTER&gt;</Kbd> for next.
      </p>
    </Center>
  </div>
</div>

<style>
  .title {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold;
  }

  .settings {
    margin-top: 60px;
    margin-bottom: 40px;
  }

  .description {
    margin-top: 100px;
    margin-bottom: 40px;
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

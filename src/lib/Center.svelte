<script lang="ts">
  export let gap = 10;
</script>

<div class="outer" style:--gap={`${gap}px`}>
  <slot />
</div>

<style>
  .outer {
    display: flex;
    justify-content: center;
    gap: var(--gap);
  }
</style>

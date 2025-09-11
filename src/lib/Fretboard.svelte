<script context="module" lang="ts">
  export type Note = { string: number; fret: number; color: string };
  export type Notes = Note[];
</script>

<script lang="ts">
  import { range } from "$lib/utils";
  import { Geometry } from "./fretboard_geometry";

  export let numFrets = 24;
  export let numStrings = 6;
  export let notes: Notes = [];
  export let monochrome = false;

  let width = 0;

  const centerInlays = [3, 5, 7, 9, 15, 17, 19, 21];
  $: centerInlayY = height / 2;
  $: inlayRadius = (height / numStrings) * 0.5 * 0.6;
  $: annotationsRadius = (height / numStrings) * 0.5 * 0.8;

  $: geom = new Geometry(width, numStrings, numFrets);

  $: strings = range(numStrings).map((i) => geom.getStringY(i));
  $: frets = range(numFrets).map((i) => geom.getFretX(i + 1));

  // $: console.log(width);
  // $: console.log(frets);
  // $: console.log(strings);

  $: height = geom.height; // Why can't we use geom.height directly below?
  $: maxX = geom.width;
  $: maxY = geom.height;
</script>

<!--
Note that there is a noticeable delay between rendering of the initial page,
and the rendering of the fretboard with the proper width/height. This might be
due to prerendering (div exists statically, but JavaScript resizing/onMount handler
only execute much later). To avoid the jump in the SVG rendering, we set the initial
drawing size to 0, but make sure that the containing div already has the proper aspect
ratio, so that the height doesn't change when the SVG gets rendered properly. This
minimizes the effect of the delay.
-->

<div class="frame" bind:clientWidth={width} style:--aspect-ratio={geom.aspectRatio}>
  <svg class="svg" {width} {height} xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#15161B" />

    <filter id="brightness-filter">
      <feComponentTransfer>
        <feFuncR type="linear" slope="2" />
        <feFuncG type="linear" slope="2" />
        <feFuncB type="linear" slope="2" />
      </feComponentTransfer>
    </filter>

    {#each centerInlays as centerInlay}
      <circle cx={geom.getFingerX(centerInlay)} cy={centerInlayY} r={inlayRadius} fill="#FFF8DC" />
    {/each}
    <circle cx={geom.getFingerX(12)} cy={0.25 * height} r={inlayRadius} fill="#FFF8DC" />
    <circle cx={geom.getFingerX(12)} cy={0.75 * height} r={inlayRadius} fill="#FFF8DC" />

    {#each frets as frets}
      <line x1={frets} y1="0" x2={frets} y2={maxY} style="stroke:#D7D7D7;stroke-width:3" />
    {/each}

    {#each strings as string}
      <line x1="0" y1={string} x2={maxX} y2={string} style="stroke:#98817B;stroke-width:1" />
    {/each}

    {#each notes as note}
      <!--
        Note that a filter (for brightness) cannot be applied only to stroke, but not to fill,
        which is why we draw the circle twice...
        https://stackoverflow.com/questions/58132952/how-to-set-brightness-over-a-svg-path-element
        https://stackoverflow.com/questions/23703854/apply-svg-filter-to-fill-only
      -->
      <circle
        class="shadow"
        cx={geom.getFingerX(note.fret)}
        cy={geom.getStringY(note.string)}
        r={annotationsRadius}
        fill={!monochrome ? note.color : "#fbeee0"}
        stroke={!monochrome ? note.color : "#fbeee0"}
      />
      <circle
        cx={geom.getFingerX(note.fret)}
        cy={geom.getStringY(note.string)}
        r={annotationsRadius}
        stroke={!monochrome ? note.color : "#fbeee0"}
        fill="none"
        filter="url(#brightness-filter)"
        stroke-width="1"
      />
    {/each}
  </svg>
</div>

<style>
  .frame {
    margin-top: 20px;
    margin-bottom: 20px;
    /* border: 1px solid #000; */
    /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px; */
    box-shadow:
      rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.1) 0px 8px 24px,
      rgba(17, 17, 26, 0.1) 0px 16px 56px;

    aspect-ratio: var(--aspect-ratio);
  }

  .svg {
    /* This is needed to avoid svg having 'inline' semantics, i.e., being treated
		as if it was a character, which makes the surrounding div taller due to space
		at the bottom */
    display: block;
  }

  .shadow {
    -webkit-filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.99));
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.99));
  }
</style>

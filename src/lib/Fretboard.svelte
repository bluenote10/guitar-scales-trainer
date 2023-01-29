<script context="module" lang="ts">
	export type Annotation = { string: number; fret: number; color: string };
	export type Annotations = Annotation[];
</script>

<script lang="ts">
	import { range } from "$lib/utils";
	import { Geometry } from "./fretboard_geometry";

	export let numFrets = 24;
	export let numStrings = 6;
	export let annotations: Annotations = [];

	let width: number = 300;

	const centerInlays = [3, 5, 7, 9, 15, 17, 19, 21];
	$: centerInlayY = height / 2;
	$: inlayRadius = (height / numStrings) * 0.5 * 0.6;
	$: annotationsRadius = (height / numStrings) * 0.5 * 0.8;

	$: geom = new Geometry(width, numStrings, numFrets);

	$: strings = range(numStrings).map((i) => geom.getStringY(i));
	$: frets = range(numFrets).map((i) => geom.getFretX(i + 1));

	$: console.log(width);
	$: console.log(frets);
	$: console.log(strings);

	$: height = geom.height; // Why can't we use geom.height directly below?
	$: maxX = geom.width;
	$: maxY = geom.height;
</script>

<div class="frame" bind:clientWidth={width}>
	<svg class="svg" {width} {height} xmlns="http://www.w3.org/2000/svg">
		<!-- viewBox="-1 -1 2 2" -->
		<rect width="100%" height="100%" fill="#15161B" />

		<!--
		<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
		-->

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

		{#each annotations as annotation}
			<circle
				class="shadow"
				cx={geom.getFingerX(annotation.fret)}
				cy={geom.getStringY(annotation.string)}
				r={annotationsRadius}
				fill={annotation.color}
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
		box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px,
			rgba(17, 17, 26, 0.1) 0px 16px 56px;
	}

	.svg {
		/* This is needed to avoid svg having 'inline' semantics, i.e., being treated
		as if it was a character, which makes the surrounding div taller due to space
		at the bottom */
		display: block;
	}

	.shadow {
		-webkit-filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.9));
		filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.9));
	}
</style>

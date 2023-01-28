<script lang="ts">
	let width: number = 300;
	$: height = width / 2;

	const strings = [0, 1, 2, 3, 4, 5];
	$: maxX = width;
	$: maxY = height;
</script>

<div class="frame" bind:clientWidth={width}>
	<svg class="svg" {width} {height} xmlns="http://www.w3.org/2000/svg">
		<!-- viewBox="-1 -1 2 2" -->
		<rect width="100%" height="100%" fill="red" />
		<circle cx="150" cy="100" r="80" fill="green" />
		<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

		{#each strings as string}
			<line
				x1="0"
				y1={string * 10}
				x2={maxX}
				y2={string * 10}
				style="stroke:rgb(0,0,0);stroke-width:2"
			/>
		{/each}
	</svg>
</div>

<style>
	.frame {
		border: 1px solid #000;
	}

	.svg {
		/* This is needed to avoid svg having 'inline' semantics, i.e., being treated
		as if it was a character, which makes the surrounding div taller due to space
		at the bottom */
		display: block;
	}
</style>

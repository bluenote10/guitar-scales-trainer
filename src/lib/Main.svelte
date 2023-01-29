<script lang="ts">
	import Fretboard from "./Fretboard.svelte";
</script>

<Fretboard
	annotations={[
		{ string: 3, fret: 5, color: "#F00" },
		{ string: 3, fret: 24, color: "#0F0" },
	]}
/>

<Fretboard />

<style>
</style>

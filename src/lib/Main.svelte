<script lang="ts">
  import Fretboard from "./Fretboard.svelte";
  import { genScale3NPS, Mode } from "./scales_generator";
</script>

<Fretboard annotations={genScale3NPS({ mode: Mode.ionian, baseFret: 5 }, 24)} />

<Fretboard annotations={genScale3NPS({ mode: Mode.dorian, baseFret: 7 }, 24)} />

<Fretboard annotations={genScale3NPS({ mode: Mode.phrygian, baseFret: 9 }, 24)} />

<style>
</style>

<script lang="ts">
  import Fretboard from "./Fretboard.svelte";
  import QACard from "./QACard.svelte";
  import { genScale3NPS, Mode } from "./scales_generator";
</script>

<QACard>
  <Fretboard slot="question" annotations={genScale3NPS({ mode: Mode.ionian, baseFret: 5 }, 24)} />
  <Fretboard slot="answer_hidden" />
  <Fretboard
    slot="answer_revealed"
    annotations={genScale3NPS({ mode: Mode.dorian, baseFret: 7 }, 24)}
  />
</QACard>

<style>
</style>

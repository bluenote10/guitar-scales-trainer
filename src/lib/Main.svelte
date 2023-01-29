<script lang="ts">
  import Fretboard from "./Fretboard.svelte";
  import QACard from "./QACard.svelte";
  import { genScale3NPSRandomQandAPair } from "./scales_generator";

  const maxFret = 24;
  const qaPair = genScale3NPSRandomQandAPair(maxFret);
</script>

<QACard>
  <Fretboard slot="question" annotations={qaPair.question} />
  <Fretboard slot="answer_hidden" />
  <Fretboard slot="answer_revealed" annotations={qaPair.answer} />
</QACard>

<style>
</style>

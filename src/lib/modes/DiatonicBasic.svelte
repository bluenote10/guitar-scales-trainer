<script lang="ts">
  import Fretboard from "../Fretboard.svelte";
  import QACard from "../QACard.svelte";
  import { genScale3NPSRandomQandAPair } from "../scales_generator";

  const maxFret = 24;
  let qaPair = genScale3NPSRandomQandAPair(maxFret);
</script>

<QACard on:next={() => (qaPair = genScale3NPSRandomQandAPair(maxFret))}>
  <div slot="question">
    <p class="question">
      Visualize the corresponding <b>{qaPair.direction == "up" ? "upper" : "lower"}</b> position.
    </p>
    <Fretboard annotations={qaPair.question} />
  </div>
  <div slot="answer_hidden">
    <Fretboard />
  </div>
  <div slot="answer_revealed">
    <Fretboard annotations={qaPair.answer} />
  </div>
</QACard>

<style>
  .question {
    text-align: center;
  }
</style>

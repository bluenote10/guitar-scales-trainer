<!--
  Old implementation based on Q/A card.
-->
<script lang="ts">
  import Fretboard from "../Fretboard.svelte";
  import QACard from "../task_templates/QATask.svelte";
  import { genRandom3NPSScaleNeighborPair } from "../scales_generator";
  import TaskDescription from "$lib/TaskDescription.svelte";

  const maxFret = 24;
  let qaPair = genRandom3NPSScaleNeighborPair(maxFret);
</script>

<QACard on:next={() => (qaPair = genRandom3NPSScaleNeighborPair(maxFret))}>
  <div slot="question">
    <TaskDescription>
      Visualize the corresponding <b>{qaPair.direction == "up" ? "upper" : "lower"}</b> position.
    </TaskDescription>
    <Fretboard annotations={qaPair.question} />
  </div>
  <div slot="answer_hidden">
    <Fretboard />
  </div>
  <div slot="answer_revealed">
    <Fretboard annotations={qaPair.answer} />
  </div>
</QACard>

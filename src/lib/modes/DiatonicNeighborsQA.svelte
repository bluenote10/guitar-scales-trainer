<!--
  Old implementation based on Q/A card.
-->
<script lang="ts">
  import TaskDescription from "$lib/TaskDescription.svelte";
  import Fretboard from "../Fretboard.svelte";
  import { genRandom3NPSScaleNeighborPair } from "../scales_generator";
  import QATask from "../task_templates/QATask.svelte";

  const maxFret = 24;
  let qaPair = genRandom3NPSScaleNeighborPair(maxFret);
</script>

<QATask on:next={() => (qaPair = genRandom3NPSScaleNeighborPair(maxFret))}>
  <div slot="question">
    <TaskDescription>
      Visualize the corresponding <b>{qaPair.direction == "up" ? "upper" : "lower"}</b> position.
    </TaskDescription>
    <Fretboard notes={qaPair.question} />
  </div>
  <div slot="answer_hidden">
    <Fretboard />
  </div>
  <div slot="answer_revealed">
    <Fretboard notes={qaPair.answer} />
  </div>
</QATask>

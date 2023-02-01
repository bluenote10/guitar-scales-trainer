<script lang="ts">
  import Fretboard from "../Fretboard.svelte";
  import InlineCard from "../task_templates/InlineTask.svelte";
  import { genRandom3NPSScaleNeighborPair } from "../scales_generator";
  import TaskDescription from "$lib/TaskDescription.svelte";

  const maxFret = 24;
  let qaPair = genRandom3NPSScaleNeighborPair(maxFret);
</script>

<InlineCard on:next={() => (qaPair = genRandom3NPSScaleNeighborPair(maxFret))}>
  <div slot="description">
    <TaskDescription>
      Visualize the corresponding <b>{qaPair.direction == "up" ? "upper" : "lower"}</b> position.
    </TaskDescription>
  </div>
  <div slot="question">
    <Fretboard annotations={qaPair.question} />
  </div>
  <div slot="answer">
    <Fretboard annotations={qaPair.answer} />
  </div>
</InlineCard>

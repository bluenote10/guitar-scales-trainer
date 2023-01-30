<script lang="ts">
  import Fretboard, { type Annotations } from "../Fretboard.svelte";
  import QACard from "../QACard.svelte";
  import { genRandom3NPSScale, filterToTwoRandomStrings } from "../scales_generator";
  import TaskDescription from "$lib/TaskDescription.svelte";

  const maxFret = 24;
  let qAnnotations: Annotations;
  let aAnnotations: Annotations;

  generate();

  function generate() {
    aAnnotations = genRandom3NPSScale(maxFret);
    qAnnotations = filterToTwoRandomStrings(aAnnotations);
  }
</script>

<QACard on:next={() => generate()}>
  <div slot="question">
    <TaskDescription>Visualize the full scale pattern in that position.</TaskDescription>
    <Fretboard annotations={qAnnotations} />
  </div>
  <div slot="answer_hidden">
    <Fretboard />
  </div>
  <div slot="answer_revealed">
    <Fretboard annotations={aAnnotations} />
  </div>
</QACard>

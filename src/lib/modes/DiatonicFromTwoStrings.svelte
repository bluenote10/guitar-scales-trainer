<script lang="ts">
  import Fretboard, { type Annotations } from "../Fretboard.svelte";
  import InlineTask from "../task_templates/InlineTask.svelte";
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

<InlineTask on:next={generate}>
  <div slot="description">
    <TaskDescription>Visualize the full scale pattern in that position.</TaskDescription>
  </div>
  <div slot="question">
    <Fretboard annotations={qAnnotations} />
  </div>
  <div slot="answer">
    <Fretboard annotations={aAnnotations} />
  </div>
</InlineTask>

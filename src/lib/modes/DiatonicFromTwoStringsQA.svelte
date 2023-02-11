<!--
  Old implementation based on Q/A card.
-->
<script lang="ts">
  import TaskDescription from "$lib/TaskDescription.svelte";
  import Fretboard, { type Notes } from "../Fretboard.svelte";
  import { genRandom3NPSScale, filterToTwoRandomStrings } from "../scales_generator";
  import QATask from "../task_templates/QATask.svelte";

  const maxFret = 24;
  let qNotes: Notes;
  let aNotes: Notes;

  generate();

  function generate() {
    aNotes = genRandom3NPSScale(maxFret);
    qNotes = filterToTwoRandomStrings(aNotes);
  }
</script>

<QATask on:next={() => generate()}>
  <div slot="question">
    <TaskDescription>Visualize the full scale pattern in that position.</TaskDescription>
    <Fretboard notes={qNotes} />
  </div>
  <div slot="answer_hidden">
    <Fretboard />
  </div>
  <div slot="answer_revealed">
    <Fretboard notes={aNotes} />
  </div>
</QATask>

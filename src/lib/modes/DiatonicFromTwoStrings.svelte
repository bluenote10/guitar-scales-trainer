<script lang="ts">
  import TaskDescription from "$lib/TaskDescription.svelte";
  import Fretboard, { type Notes } from "../Fretboard.svelte";
  import { genRandom3NPSScale, filterToTwoRandomStrings } from "../scales_generator";
  import InlineTask from "../task_templates/InlineTask.svelte";

  const maxFret = 24;
  let qNotes: Notes;
  let aNotes: Notes;

  generate();

  function generate() {
    aNotes = genRandom3NPSScale(maxFret);
    qNotes = filterToTwoRandomStrings(aNotes);
  }
</script>

<InlineTask on:next={generate}>
  <div slot="description">
    <TaskDescription>Visualize the full scale pattern in that position.</TaskDescription>
  </div>
  <div slot="question">
    <Fretboard notes={qNotes} />
  </div>
  <div slot="answer">
    <Fretboard notes={aNotes} />
  </div>
</InlineTask>

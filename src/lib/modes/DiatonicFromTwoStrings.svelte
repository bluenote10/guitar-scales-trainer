<script lang="ts">
  import Fretboard, { type Notes } from "../Fretboard.svelte";
  import InlineTask from "../task_templates/InlineTask.svelte";
  import { genRandom3NPSScale, filterToTwoRandomStrings } from "../scales_generator";
  import TaskDescription from "$lib/TaskDescription.svelte";

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

<script lang="ts">
  import { base } from "$app/paths";
  import { title as titleDiatonicFromTwoStrings } from "$lib/modes/DiatonicFromTwoStrings.svelte";
  import { title as titleDiatonicNeighbors } from "$lib/modes/DiatonicNeighbors.svelte";

  const tasks = [
    {
      route: `${base}/diatonic_neighbors`,
      title: titleDiatonicNeighbors,
      scales: "Diatonic (three notes per string)",
      description:
        "This exercises helps to improve the relationship between neighboring diatonic scales in the next upper/lower position.",
    },
    {
      route: `${base}/diatonic_two_strings`,
      title: titleDiatonicFromTwoStrings,
      scales: "Diatonic (three notes per string)",
      description:
        "This exercises helps to improve fretboard orientation based on small, two-string fragments.",
    },
    {
      route: `${base}/diatonic_circle_of_fifths_neighbors`,
      title: "Diatonic – Circle of fifths neighboring scales",
      scales: "Diatonic (three notes per string)",
      description:
        "This exercises helps to improve the relationship between diatonic scales in the same position, which are neighbors in the circle of fifths.",
    },
    {
      route: `${base}/diatonic_two_strings_sequential`,
      title: "Diatonic – Two strings up and down the neck",
      scales: "Diatonic (three notes per string)",
      description:
        "This exercises helps to improve moving a scale up and down the neck on just two strings.",
    },
    {
      route: `${base}/diatonic_intervals`,
      title: "Diatonic – Intervals",
      scales: "Diatonic (three notes per string)",
      description: "This exercises helps to improve thinking in intervals.",
    },
  ];
</script>

<ul>
  <h1>Guitar Scales Trainer – Exercises</h1>

  <p class="preamble">
    This is a small app that helps to master the guitar fretboard by visualizing various scales and
    patterns. The exercises force you to visualize different aspects of a scale, like horizontally
    or vertically related scales, musically related scales, and so on. The idea is to challenge the
    brain in all sorts of different ways to gain a deeper understanding of the guitar fretboard. The
    exercises are randomly generated to practice all aspects equally, and avoiding to become for
    instance only familiar with moving a scale upwards, but not downwards. All exercises can be done
    without a guitar, but of course if can be even more effective to practice the scale along on the
    instrument to add muscle memory to the process.
  </p>

  {#each tasks as task}
    <li>
      <a href={task.route} class="block-link">
        <div class="block">
          <h2>{task.title}</h2>
          <p class="description">{task.description}</p>
          <p class="scales"><b>Scales:</b> {task.scales}</p>
        </div>
      </a>
    </li>
  {/each}
</ul>

<style>
  .preamble {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0.5rem;
  }

  li {
    padding: 0.5rem;
  }

  .block-link {
    text-decoration: none;
  }

  .block {
    border: 1px #ccc solid;
    border-radius: 4px;
    position: relative;
    padding: 1.25rem;
    transition: 0.3s;
  }

  :hover.block {
    background-color: var(--color-bg-highlight);
  }

  :hover.block::after {
    content: "";
    background-color: #ff3e00;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    height: 12px;
    position: absolute;
    right: -6px;
    top: -6px;
    width: 12px;
  }

  h2 {
    margin: 0 0 0.5rem;
  }

  p {
    color: #666;
    margin: 0;
  }

  .description {
    margin-top: 1rem;
  }

  .scales {
    margin-top: 0.5rem;
    font-size: 14px;
  }
</style>

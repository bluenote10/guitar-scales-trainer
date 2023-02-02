<script lang="ts">
  const tasks = [
    {
      route: "/diatonic_neighbors",
      title: "Diatonic – Neighboring scales",
      scales: "Diatonic (three notes per string)",
      description:
        "This exercises helps to improve the relationship between neighboring diatonic scales in the next upper/lower position.",
    },
    {
      route: "/diatonic_two_strings",
      title: "Diatonic – From two strings to full scale pattern",
      scales: "Diatonic (three notes per string)",
      description:
        "This exercises helps to improve fretboard orientation based on small, two-string fragments.",
    },
    {
      route: "/diatonic_circle_of_fifths_neighbors",
      title: "Diatonic – Circle of fifths neighboring scales",
      scales: "Diatonic (three notes per string)",
      description:
        "This exercises helps to improve the relationship between diatonic scales in the same position, which are neighbors in the circle of fifths.",
    },
    {
      route: "/diatonic_two_strings_sequential",
      title: "Diatonic – Two strings up and down the neck",
      scales: "Diatonic (three notes per string)",
      description:
        "This exercises helps to improve moving a scale up and down the neck on just two strings.",
    },
  ];
</script>

<ul>
  <h1>Exercises</h1>

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

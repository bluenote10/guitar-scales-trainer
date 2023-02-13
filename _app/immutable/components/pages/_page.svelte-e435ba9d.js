import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, F as append_hydration, C as noop, K as destroy_each, x as create_component, y as claim_component, z as mount_component, f as transition_in, t as transition_out, A as destroy_component } from "../../chunks/index-56902217.js";
import { b as base } from "../../chunks/paths-054c37c3.js";
const Overview_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
  let li;
  let a;
  let div;
  let h2;
  let t0_value = (
    /*task*/
    ctx[1].title + ""
  );
  let t0;
  let t1;
  let p0;
  let t2_value = (
    /*task*/
    ctx[1].description + ""
  );
  let t2;
  let t3;
  let p1;
  let b;
  let t4;
  let t5;
  let t6_value = (
    /*task*/
    ctx[1].scales + ""
  );
  let t6;
  let t7;
  return {
    c() {
      li = element("li");
      a = element("a");
      div = element("div");
      h2 = element("h2");
      t0 = text(t0_value);
      t1 = space();
      p0 = element("p");
      t2 = text(t2_value);
      t3 = space();
      p1 = element("p");
      b = element("b");
      t4 = text("Scales:");
      t5 = space();
      t6 = text(t6_value);
      t7 = space();
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", { class: true });
      var li_nodes = children(li);
      a = claim_element(li_nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      div = claim_element(a_nodes, "DIV", { class: true });
      var div_nodes = children(div);
      h2 = claim_element(div_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      t0 = claim_text(h2_nodes, t0_value);
      h2_nodes.forEach(detach);
      t1 = claim_space(div_nodes);
      p0 = claim_element(div_nodes, "P", { class: true });
      var p0_nodes = children(p0);
      t2 = claim_text(p0_nodes, t2_value);
      p0_nodes.forEach(detach);
      t3 = claim_space(div_nodes);
      p1 = claim_element(div_nodes, "P", { class: true });
      var p1_nodes = children(p1);
      b = claim_element(p1_nodes, "B", {});
      var b_nodes = children(b);
      t4 = claim_text(b_nodes, "Scales:");
      b_nodes.forEach(detach);
      t5 = claim_space(p1_nodes);
      t6 = claim_text(p1_nodes, t6_value);
      p1_nodes.forEach(detach);
      div_nodes.forEach(detach);
      a_nodes.forEach(detach);
      t7 = claim_space(li_nodes);
      li_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h2, "class", "svelte-1wjevnc");
      attr(p0, "class", "description svelte-1wjevnc");
      attr(p1, "class", "scales svelte-1wjevnc");
      attr(div, "class", "block svelte-1wjevnc");
      attr(
        a,
        "href",
        /*task*/
        ctx[1].route
      );
      attr(a, "class", "block-link svelte-1wjevnc");
      attr(li, "class", "svelte-1wjevnc");
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      append_hydration(li, a);
      append_hydration(a, div);
      append_hydration(div, h2);
      append_hydration(h2, t0);
      append_hydration(div, t1);
      append_hydration(div, p0);
      append_hydration(p0, t2);
      append_hydration(div, t3);
      append_hydration(div, p1);
      append_hydration(p1, b);
      append_hydration(b, t4);
      append_hydration(p1, t5);
      append_hydration(p1, t6);
      append_hydration(li, t7);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(li);
    }
  };
}
function create_fragment$1(ctx) {
  let ul;
  let h1;
  let t0;
  let t1;
  let p;
  let t2;
  let t3;
  let each_value = (
    /*tasks*/
    ctx[0]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      ul = element("ul");
      h1 = element("h1");
      t0 = text("Guitar Scales Trainer – Exercises");
      t1 = space();
      p = element("p");
      t2 = text("This is a small app that helps to master the guitar fretboard by visualizing various scales and\n    patterns. The exercises force you to visualize different aspects of a scale, like horizontally\n    or vertically related scales, musically related scales, and so on. The idea is to challenge the\n    brain in all sorts of different ways to gain a deeper understanding of the guitar fretboard. The\n    exercises are randomly generated to make to practice all aspects equally, and avoiding to become\n    for instance only familiar with moving a scale upwards, but not downwards. All exercises can be\n    done without a guitar, but of course if can even be more effective to practice the scale along\n    on the instrument to add muscle memory to the process.");
      t3 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      ul = claim_element(nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      h1 = claim_element(ul_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Guitar Scales Trainer – Exercises");
      h1_nodes.forEach(detach);
      t1 = claim_space(ul_nodes);
      p = claim_element(ul_nodes, "P", { class: true });
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, "This is a small app that helps to master the guitar fretboard by visualizing various scales and\n    patterns. The exercises force you to visualize different aspects of a scale, like horizontally\n    or vertically related scales, musically related scales, and so on. The idea is to challenge the\n    brain in all sorts of different ways to gain a deeper understanding of the guitar fretboard. The\n    exercises are randomly generated to make to practice all aspects equally, and avoiding to become\n    for instance only familiar with moving a scale upwards, but not downwards. All exercises can be\n    done without a guitar, but of course if can even be more effective to practice the scale along\n    on the instrument to add muscle memory to the process.");
      p_nodes.forEach(detach);
      t3 = claim_space(ul_nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(ul_nodes);
      }
      ul_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "class", "preamble svelte-1wjevnc");
      attr(ul, "class", "svelte-1wjevnc");
    },
    m(target, anchor) {
      insert_hydration(target, ul, anchor);
      append_hydration(ul, h1);
      append_hydration(h1, t0);
      append_hydration(ul, t1);
      append_hydration(ul, p);
      append_hydration(p, t2);
      append_hydration(ul, t3);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*tasks*/
      1) {
        each_value = /*tasks*/
        ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(ul);
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance($$self) {
  const tasks = [
    {
      route: `${base}/diatonic_neighbors`,
      title: "Diatonic – Neighboring scales",
      scales: "Diatonic (three notes per string)",
      description: "This exercises helps to improve the relationship between neighboring diatonic scales in the next upper/lower position."
    },
    {
      route: `${base}/diatonic_two_strings`,
      title: "Diatonic – From two strings to full scale pattern",
      scales: "Diatonic (three notes per string)",
      description: "This exercises helps to improve fretboard orientation based on small, two-string fragments."
    },
    {
      route: `${base}/diatonic_circle_of_fifths_neighbors`,
      title: "Diatonic – Circle of fifths neighboring scales",
      scales: "Diatonic (three notes per string)",
      description: "This exercises helps to improve the relationship between diatonic scales in the same position, which are neighbors in the circle of fifths."
    },
    {
      route: `${base}/diatonic_two_strings_sequential`,
      title: "Diatonic – Two strings up and down the neck",
      scales: "Diatonic (three notes per string)",
      description: "This exercises helps to improve moving a scale up and down the neck on just two strings."
    },
    {
      route: `${base}/diatonic_intervals`,
      title: "Diatonic – Intervals",
      scales: "Diatonic (three notes per string)",
      description: "This exercises helps to improve thinking in intervals."
    }
  ];
  return [tasks];
}
class Overview extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment$1, safe_not_equal, {});
  }
}
function create_fragment(ctx) {
  let overview;
  let current;
  overview = new Overview({});
  return {
    c() {
      create_component(overview.$$.fragment);
    },
    l(nodes) {
      claim_component(overview.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(overview, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(overview.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(overview.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(overview, detaching);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};

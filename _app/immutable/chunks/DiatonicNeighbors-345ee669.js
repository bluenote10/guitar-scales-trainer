import { S as SvelteComponent, i as init, s as safe_not_equal, x as create_component, y as claim_component, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, k as element, l as claim_element, m as children, h as detach, n as attr, b as insert_hydration, e as empty, q as text, r as claim_text, F as append_hydration, u as set_data } from "./index-56902217.js";
import { g as genRandom3NPSScaleNeighborPair, a as genRandom3NPSScaleCircleOfFifthsPair, T as TaskDescription, F as Fretboard } from "./index-716012fb.js";
import { I as InlineTask } from "./InlineTask-820f6a3c.js";
const DiatonicNeighbors_svelte_svelte_type_style_lang = "";
function create_else_block(ctx) {
  let t0;
  let b0;
  let t1_value = (
    /*qaPair*/
    ctx[1].direction == "up" ? "♯" : "♭"
  );
  let t1;
  let t2;
  let b1;
  let t3_value = (
    /*qaPair*/
    ctx[1].direction == "up" ? "right" : "left"
  );
  let t3;
  let t4;
  return {
    c() {
      t0 = text("Visualize the scale that results from adding a\n        ");
      b0 = element("b");
      t1 = text(t1_value);
      t2 = text(", or going\n        ");
      b1 = element("b");
      t3 = text(t3_value);
      t4 = text("\n        in the circle of fifths.");
      this.h();
    },
    l(nodes) {
      t0 = claim_text(nodes, "Visualize the scale that results from adding a\n        ");
      b0 = claim_element(nodes, "B", { class: true });
      var b0_nodes = children(b0);
      t1 = claim_text(b0_nodes, t1_value);
      b0_nodes.forEach(detach);
      t2 = claim_text(nodes, ", or going\n        ");
      b1 = claim_element(nodes, "B", { class: true });
      var b1_nodes = children(b1);
      t3 = claim_text(b1_nodes, t3_value);
      b1_nodes.forEach(detach);
      t4 = claim_text(nodes, "\n        in the circle of fifths.");
      this.h();
    },
    h() {
      attr(b0, "class", "svelte-c6wr47");
      attr(b1, "class", "svelte-c6wr47");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, b0, anchor);
      append_hydration(b0, t1);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, b1, anchor);
      append_hydration(b1, t3);
      insert_hydration(target, t4, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*qaPair*/
      2 && t1_value !== (t1_value = /*qaPair*/
      ctx2[1].direction == "up" ? "♯" : "♭"))
        set_data(t1, t1_value);
      if (dirty & /*qaPair*/
      2 && t3_value !== (t3_value = /*qaPair*/
      ctx2[1].direction == "up" ? "right" : "left"))
        set_data(t3, t3_value);
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(b0);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(b1);
      if (detaching)
        detach(t4);
    }
  };
}
function create_if_block(ctx) {
  let t0;
  let b;
  let t1_value = (
    /*qaPair*/
    ctx[1].direction == "up" ? "upper" : "lower"
  );
  let t1;
  let t2;
  return {
    c() {
      t0 = text("Visualize the corresponding ");
      b = element("b");
      t1 = text(t1_value);
      t2 = text(" position.");
      this.h();
    },
    l(nodes) {
      t0 = claim_text(nodes, "Visualize the corresponding ");
      b = claim_element(nodes, "B", { class: true });
      var b_nodes = children(b);
      t1 = claim_text(b_nodes, t1_value);
      b_nodes.forEach(detach);
      t2 = claim_text(nodes, " position.");
      this.h();
    },
    h() {
      attr(b, "class", "svelte-c6wr47");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, b, anchor);
      append_hydration(b, t1);
      insert_hydration(target, t2, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*qaPair*/
      2 && t1_value !== (t1_value = /*qaPair*/
      ctx2[1].direction == "up" ? "upper" : "lower"))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(b);
      if (detaching)
        detach(t2);
    }
  };
}
function create_default_slot(ctx) {
  let if_block_anchor;
  function select_block_type(ctx2, dirty) {
    if (
      /*mode*/
      ctx2[0] == "direct_neighbors"
    )
      return create_if_block;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    d(detaching) {
      if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_description_slot(ctx) {
  let div;
  let taskdescription;
  let current;
  taskdescription = new TaskDescription({
    props: {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div = element("div");
      create_component(taskdescription.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { slot: true });
      var div_nodes = children(div);
      claim_component(taskdescription.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "slot", "description");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(taskdescription, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const taskdescription_changes = {};
      if (dirty & /*$$scope, qaPair, mode*/
      11) {
        taskdescription_changes.$$scope = { dirty, ctx: ctx2 };
      }
      taskdescription.$set(taskdescription_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(taskdescription.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(taskdescription.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(taskdescription);
    }
  };
}
function create_question_slot(ctx) {
  let div;
  let fretboard;
  let current;
  fretboard = new Fretboard({
    props: { notes: (
      /*qaPair*/
      ctx[1].question
    ) }
  });
  return {
    c() {
      div = element("div");
      create_component(fretboard.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { slot: true });
      var div_nodes = children(div);
      claim_component(fretboard.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "slot", "question");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(fretboard, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const fretboard_changes = {};
      if (dirty & /*qaPair*/
      2)
        fretboard_changes.notes = /*qaPair*/
        ctx2[1].question;
      fretboard.$set(fretboard_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(fretboard.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(fretboard.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(fretboard);
    }
  };
}
function create_answer_slot(ctx) {
  let div;
  let fretboard;
  let current;
  fretboard = new Fretboard({
    props: { notes: (
      /*qaPair*/
      ctx[1].answer
    ) }
  });
  return {
    c() {
      div = element("div");
      create_component(fretboard.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { slot: true });
      var div_nodes = children(div);
      claim_component(fretboard.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "slot", "answer");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(fretboard, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const fretboard_changes = {};
      if (dirty & /*qaPair*/
      2)
        fretboard_changes.notes = /*qaPair*/
        ctx2[1].answer;
      fretboard.$set(fretboard_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(fretboard.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(fretboard.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(fretboard);
    }
  };
}
function create_fragment(ctx) {
  let inlinetask;
  let current;
  inlinetask = new InlineTask({
    props: {
      $$slots: {
        answer: [create_answer_slot],
        question: [create_question_slot],
        description: [create_description_slot]
      },
      $$scope: { ctx }
    }
  });
  inlinetask.$on(
    "next",
    /*generate*/
    ctx[2]
  );
  return {
    c() {
      create_component(inlinetask.$$.fragment);
    },
    l(nodes) {
      claim_component(inlinetask.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(inlinetask, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const inlinetask_changes = {};
      if (dirty & /*$$scope, qaPair, mode*/
      11) {
        inlinetask_changes.$$scope = { dirty, ctx: ctx2 };
      }
      inlinetask.$set(inlinetask_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(inlinetask.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(inlinetask.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(inlinetask, detaching);
    }
  };
}
const maxFret = 24;
function instance($$self, $$props, $$invalidate) {
  let { mode } = $$props;
  let qaPair;
  generate();
  function generate() {
    $$invalidate(1, qaPair = mode == "direct_neighbors" ? genRandom3NPSScaleNeighborPair(maxFret) : genRandom3NPSScaleCircleOfFifthsPair(maxFret));
  }
  $$self.$$set = ($$props2) => {
    if ("mode" in $$props2)
      $$invalidate(0, mode = $$props2.mode);
  };
  return [mode, qaPair, generate];
}
class DiatonicNeighbors extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { mode: 0 });
  }
}
export {
  DiatonicNeighbors as D
};

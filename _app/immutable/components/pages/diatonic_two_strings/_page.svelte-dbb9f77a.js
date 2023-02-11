import { S as SvelteComponent, i as init, s as safe_not_equal, x as create_component, y as claim_component, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, k as element, l as claim_element, m as children, h as detach, n as attr, b as insert_hydration, q as text, r as claim_text, C as noop } from "../../../chunks/index-949c6c01.js";
import { c as genRandom3NPSScale, f as filterToTwoRandomStrings, T as TaskDescription, F as Fretboard } from "../../../chunks/index-124d46d3.js";
import { I as InlineTask } from "../../../chunks/InlineTask-751692db.js";
function create_default_slot(ctx) {
  let t;
  return {
    c() {
      t = text("Visualize the full scale pattern in that position.");
    },
    l(nodes) {
      t = claim_text(nodes, "Visualize the full scale pattern in that position.");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
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
      if (dirty & /*$$scope*/
      8) {
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
  fretboard = new Fretboard({ props: { notes: (
    /*qNotes*/
    ctx[0]
  ) } });
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
      if (dirty & /*qNotes*/
      1)
        fretboard_changes.notes = /*qNotes*/
        ctx2[0];
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
  fretboard = new Fretboard({ props: { notes: (
    /*aNotes*/
    ctx[1]
  ) } });
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
      if (dirty & /*aNotes*/
      2)
        fretboard_changes.notes = /*aNotes*/
        ctx2[1];
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
function create_fragment$1(ctx) {
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
      if (dirty & /*$$scope, aNotes, qNotes*/
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
  let qNotes;
  let aNotes;
  generate();
  function generate() {
    $$invalidate(1, aNotes = genRandom3NPSScale(maxFret));
    $$invalidate(0, qNotes = filterToTwoRandomStrings(aNotes));
  }
  return [qNotes, aNotes, generate];
}
class DiatonicFromTwoStrings extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment$1, safe_not_equal, {});
  }
}
function create_fragment(ctx) {
  let diatonicfromtwostrings;
  let current;
  diatonicfromtwostrings = new DiatonicFromTwoStrings({});
  return {
    c() {
      create_component(diatonicfromtwostrings.$$.fragment);
    },
    l(nodes) {
      claim_component(diatonicfromtwostrings.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(diatonicfromtwostrings, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(diatonicfromtwostrings.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(diatonicfromtwostrings.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(diatonicfromtwostrings, detaching);
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

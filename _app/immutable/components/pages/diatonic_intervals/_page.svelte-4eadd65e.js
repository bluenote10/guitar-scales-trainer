import { S as SvelteComponent, i as init, s as safe_not_equal, v as binding_callbacks, Y as bind, x as create_component, y as claim_component, z as mount_component, _ as add_flush_callback, f as transition_in, t as transition_out, A as destroy_component, k as element, l as claim_element, m as children, h as detach, n as attr, b as insert_hydration, q as text, r as claim_text, C as noop } from "../../../chunks/index-3dd64e7b.js";
import { e as genRandom3NPSIntervalsUpDownSequence, I as Interval, T as TaskDescription, F as Fretboard } from "../../../chunks/index-b373e42a.js";
import { S as SequentialTask } from "../../../chunks/SequentialTask-2e079645.js";
function create_default_slot(ctx) {
  let t;
  return {
    c() {
      t = text("Visualize the scale in thirds.");
    },
    l(nodes) {
      t = claim_text(nodes, "Visualize the scale in thirds.");
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
      16) {
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
function create_sequence_slot(ctx) {
  let div;
  let fretboard;
  let current;
  fretboard = new Fretboard({
    props: {
      notes: (
        /*sequence*/
        ctx[0].sequence[
          /*curIdx*/
          ctx[1]
        ]
      )
    }
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
      attr(div, "slot", "sequence");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(fretboard, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const fretboard_changes = {};
      if (dirty & /*sequence, curIdx*/
      3)
        fretboard_changes.notes = /*sequence*/
        ctx2[0].sequence[
          /*curIdx*/
          ctx2[1]
        ];
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
  let sequentialtask;
  let updating_curIdx;
  let current;
  function sequentialtask_curIdx_binding(value) {
    ctx[3](value);
  }
  let sequentialtask_props = {
    sequenceLength: (
      /*sequence*/
      ctx[0].sequence.length
    ),
    $$slots: {
      sequence: [create_sequence_slot],
      description: [create_description_slot]
    },
    $$scope: { ctx }
  };
  if (
    /*curIdx*/
    ctx[1] !== void 0
  ) {
    sequentialtask_props.curIdx = /*curIdx*/
    ctx[1];
  }
  sequentialtask = new SequentialTask({ props: sequentialtask_props });
  binding_callbacks.push(() => bind(sequentialtask, "curIdx", sequentialtask_curIdx_binding));
  sequentialtask.$on(
    "next",
    /*generate*/
    ctx[2]
  );
  return {
    c() {
      create_component(sequentialtask.$$.fragment);
    },
    l(nodes) {
      claim_component(sequentialtask.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(sequentialtask, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const sequentialtask_changes = {};
      if (dirty & /*sequence*/
      1)
        sequentialtask_changes.sequenceLength = /*sequence*/
        ctx2[0].sequence.length;
      if (dirty & /*$$scope, sequence, curIdx*/
      19) {
        sequentialtask_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_curIdx && dirty & /*curIdx*/
      2) {
        updating_curIdx = true;
        sequentialtask_changes.curIdx = /*curIdx*/
        ctx2[1];
        add_flush_callback(() => updating_curIdx = false);
      }
      sequentialtask.$set(sequentialtask_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(sequentialtask.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(sequentialtask.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(sequentialtask, detaching);
    }
  };
}
const maxFret = 24;
function instance($$self, $$props, $$invalidate) {
  let sequence;
  let curIdx = 0;
  generate();
  function generate() {
    $$invalidate(0, sequence = genRandom3NPSIntervalsUpDownSequence(maxFret, Interval.third));
  }
  function sequentialtask_curIdx_binding(value) {
    curIdx = value;
    $$invalidate(1, curIdx);
  }
  return [sequence, curIdx, generate, sequentialtask_curIdx_binding];
}
class DiatonicIntervalsSequential extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment$1, safe_not_equal, {});
  }
}
function create_fragment(ctx) {
  let diatonicintervalssequential;
  let current;
  diatonicintervalssequential = new DiatonicIntervalsSequential({});
  return {
    c() {
      create_component(diatonicintervalssequential.$$.fragment);
    },
    l(nodes) {
      claim_component(diatonicintervalssequential.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(diatonicintervalssequential, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(diatonicintervalssequential.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(diatonicintervalssequential.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(diatonicintervalssequential, detaching);
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

import { S as SvelteComponent, i as init, s as safe_not_equal, D as create_slot, k as element, q as text, a as space, x as create_component, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, y as claim_component, n as attr, b as insert_hydration, F as append_hydration, z as mount_component, R as action_destroyer, G as update_slot_base, H as get_all_dirty_from_scope, I as get_slot_changes, f as transition_in, t as transition_out, A as destroy_component, T as run_all, U as createEventDispatcher, C as noop } from "./index-949c6c01.js";
import { C as Center, s as shortcut, B as Button, K as Kbd } from "./TaskDescription-5e8df044.js";
import { b as base } from "./paths-054c37c3.js";
const SequentialTask_svelte_svelte_type_style_lang = "";
const get_sequence_slot_changes = (dirty) => ({});
const get_sequence_slot_context = (ctx) => ({});
const get_description_slot_changes = (dirty) => ({});
const get_description_slot_context = (ctx) => ({});
function create_default_slot_5(ctx) {
  let div;
  let t;
  return {
    c() {
      div = element("div");
      t = text("Reveal");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t = claim_text(div_nodes, "Reveal");
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "fixed-width svelte-1q5x90i");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_default_slot_4(ctx) {
  let div;
  let t;
  return {
    c() {
      div = element("div");
      t = text("Next");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t = claim_text(div_nodes, "Next");
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "fixed-width svelte-1q5x90i");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_default_slot_3(ctx) {
  let button0;
  let t;
  let button1;
  let current;
  button0 = new Button({
    props: {
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    }
  });
  button0.$on(
    "click",
    /*onIncrementIdx*/
    ctx[1]
  );
  button1 = new Button({
    props: {
      disabled: !/*wasRevealedEntirely*/
      ctx[0],
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  button1.$on(
    "click",
    /*onNext*/
    ctx[2]
  );
  return {
    c() {
      create_component(button0.$$.fragment);
      t = space();
      create_component(button1.$$.fragment);
    },
    l(nodes) {
      claim_component(button0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(button1.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(button0, target, anchor);
      insert_hydration(target, t, anchor);
      mount_component(button1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const button0_changes = {};
      if (dirty & /*$$scope*/
      64) {
        button0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button0.$set(button0_changes);
      const button1_changes = {};
      if (dirty & /*wasRevealedEntirely*/
      1)
        button1_changes.disabled = !/*wasRevealedEntirely*/
        ctx2[0];
      if (dirty & /*$$scope*/
      64) {
        button1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button1.$set(button1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(button0, detaching);
      if (detaching)
        detach(t);
      destroy_component(button1, detaching);
    }
  };
}
function create_default_slot_2(ctx) {
  let t;
  return {
    c() {
      t = text("<SPACE>");
    },
    l(nodes) {
      t = claim_text(nodes, "<SPACE>");
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
function create_default_slot_1(ctx) {
  let t;
  return {
    c() {
      t = text("<ENTER>");
    },
    l(nodes) {
      t = claim_text(nodes, "<ENTER>");
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
function create_default_slot(ctx) {
  let p;
  let t0;
  let kbd0;
  let t1;
  let kbd1;
  let t2;
  let current;
  kbd0 = new Kbd({
    props: {
      fontSize: 11,
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  kbd1 = new Kbd({
    props: {
      fontSize: 11,
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      p = element("p");
      t0 = text("Hint: You can press\n        ");
      create_component(kbd0.$$.fragment);
      t1 = text(" to reveal, and\n        ");
      create_component(kbd1.$$.fragment);
      t2 = text(" for next.");
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "Hint: You can press\n        ");
      claim_component(kbd0.$$.fragment, p_nodes);
      t1 = claim_text(p_nodes, " to reveal, and\n        ");
      claim_component(kbd1.$$.fragment, p_nodes);
      t2 = claim_text(p_nodes, " for next.");
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "class", "hint svelte-1q5x90i");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t0);
      mount_component(kbd0, p, null);
      append_hydration(p, t1);
      mount_component(kbd1, p, null);
      append_hydration(p, t2);
      current = true;
    },
    p(ctx2, dirty) {
      const kbd0_changes = {};
      if (dirty & /*$$scope*/
      64) {
        kbd0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      kbd0.$set(kbd0_changes);
      const kbd1_changes = {};
      if (dirty & /*$$scope*/
      64) {
        kbd1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      kbd1.$set(kbd1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(kbd0.$$.fragment, local);
      transition_in(kbd1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(kbd0.$$.fragment, local);
      transition_out(kbd1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(p);
      destroy_component(kbd0);
      destroy_component(kbd1);
    }
  };
}
function create_fragment(ctx) {
  let div1;
  let a;
  let t0;
  let t1;
  let h1;
  let t2;
  let t3;
  let t4;
  let t5;
  let div0;
  let center0;
  let t6;
  let center1;
  let current;
  let mounted;
  let dispose;
  const description_slot_template = (
    /*#slots*/
    ctx[5].description
  );
  const description_slot = create_slot(
    description_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    get_description_slot_context
  );
  const sequence_slot_template = (
    /*#slots*/
    ctx[5].sequence
  );
  const sequence_slot = create_slot(
    sequence_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    get_sequence_slot_context
  );
  center0 = new Center({
    props: {
      gap: 20,
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  center1 = new Center({
    props: {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div1 = element("div");
      a = element("a");
      t0 = text("back");
      t1 = space();
      h1 = element("h1");
      t2 = text("Question / Answer");
      t3 = space();
      if (description_slot)
        description_slot.c();
      t4 = space();
      if (sequence_slot)
        sequence_slot.c();
      t5 = space();
      div0 = element("div");
      create_component(center0.$$.fragment);
      t6 = space();
      create_component(center1.$$.fragment);
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", {});
      var div1_nodes = children(div1);
      a = claim_element(div1_nodes, "A", { href: true });
      var a_nodes = children(a);
      t0 = claim_text(a_nodes, "back");
      a_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      h1 = claim_element(div1_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t2 = claim_text(h1_nodes, "Question / Answer");
      h1_nodes.forEach(detach);
      t3 = claim_space(div1_nodes);
      if (description_slot)
        description_slot.l(div1_nodes);
      t4 = claim_space(div1_nodes);
      if (sequence_slot)
        sequence_slot.l(div1_nodes);
      t5 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(center0.$$.fragment, div0_nodes);
      t6 = claim_space(div0_nodes);
      claim_component(center1.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", base + "/");
      attr(h1, "class", "svelte-1q5x90i");
      attr(div0, "class", "footer svelte-1q5x90i");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, a);
      append_hydration(a, t0);
      append_hydration(div1, t1);
      append_hydration(div1, h1);
      append_hydration(h1, t2);
      append_hydration(div1, t3);
      if (description_slot) {
        description_slot.m(div1, null);
      }
      append_hydration(div1, t4);
      if (sequence_slot) {
        sequence_slot.m(div1, null);
      }
      append_hydration(div1, t5);
      append_hydration(div1, div0);
      mount_component(center0, div0, null);
      append_hydration(div0, t6);
      mount_component(center1, div0, null);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(shortcut.call(null, window, {
            trigger: {
              key: " ",
              callback: (
                /*onIncrementIdx*/
                ctx[1]
              ),
              preventDefault: true
            }
          })),
          action_destroyer(shortcut.call(null, window, {
            trigger: {
              key: "Enter",
              callback: (
                /*onNext*/
                ctx[2]
              ),
              preventDefault: true
            }
          }))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (description_slot) {
        if (description_slot.p && (!current || dirty & /*$$scope*/
        64)) {
          update_slot_base(
            description_slot,
            description_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[6],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[6]
            ) : get_slot_changes(
              description_slot_template,
              /*$$scope*/
              ctx2[6],
              dirty,
              get_description_slot_changes
            ),
            get_description_slot_context
          );
        }
      }
      if (sequence_slot) {
        if (sequence_slot.p && (!current || dirty & /*$$scope*/
        64)) {
          update_slot_base(
            sequence_slot,
            sequence_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[6],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[6]
            ) : get_slot_changes(
              sequence_slot_template,
              /*$$scope*/
              ctx2[6],
              dirty,
              get_sequence_slot_changes
            ),
            get_sequence_slot_context
          );
        }
      }
      const center0_changes = {};
      if (dirty & /*$$scope, wasRevealedEntirely*/
      65) {
        center0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      center0.$set(center0_changes);
      const center1_changes = {};
      if (dirty & /*$$scope*/
      64) {
        center1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      center1.$set(center1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(description_slot, local);
      transition_in(sequence_slot, local);
      transition_in(center0.$$.fragment, local);
      transition_in(center1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(description_slot, local);
      transition_out(sequence_slot, local);
      transition_out(center0.$$.fragment, local);
      transition_out(center1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (description_slot)
        description_slot.d(detaching);
      if (sequence_slot)
        sequence_slot.d(detaching);
      destroy_component(center0);
      destroy_component(center1);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  const dispatch = createEventDispatcher();
  let { sequenceLength } = $$props;
  let { curIdx = 0 } = $$props;
  let wasRevealedEntirely = false;
  function onIncrementIdx() {
    if (curIdx === sequenceLength - 1) {
      $$invalidate(3, curIdx = 0);
    } else {
      $$invalidate(3, curIdx++, curIdx);
      if (curIdx === sequenceLength - 1) {
        $$invalidate(0, wasRevealedEntirely = true);
      }
    }
  }
  function onNext() {
    if (wasRevealedEntirely) {
      dispatch("next");
      $$invalidate(3, curIdx = 0);
      $$invalidate(0, wasRevealedEntirely = false);
    }
  }
  $$self.$$set = ($$props2) => {
    if ("sequenceLength" in $$props2)
      $$invalidate(4, sequenceLength = $$props2.sequenceLength);
    if ("curIdx" in $$props2)
      $$invalidate(3, curIdx = $$props2.curIdx);
    if ("$$scope" in $$props2)
      $$invalidate(6, $$scope = $$props2.$$scope);
  };
  return [
    wasRevealedEntirely,
    onIncrementIdx,
    onNext,
    curIdx,
    sequenceLength,
    slots,
    $$scope
  ];
}
class SequentialTask extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { sequenceLength: 4, curIdx: 3 });
  }
}
export {
  SequentialTask as S
};

import { S as SvelteComponent, i as init, s as safe_not_equal, D as create_slot, $ as svg_element, e as empty, a0 as claim_svg_element, m as children, h as detach, n as attr, b as insert_hydration, F as append_hydration, G as update_slot_base, H as get_all_dirty_from_scope, I as get_slot_changes, f as transition_in, t as transition_out, q as text, r as claim_text, u as set_data, M as assign, x as create_component, y as claim_component, z as mount_component, P as get_spread_update, Z as get_spread_object, A as destroy_component, N as exclude_internal_props, C as noop, k as element, l as claim_element, T as listen, V as bubble, a as space, c as claim_space, W as action_destroyer, g as group_outros, d as check_outros, U as run_all, Q as compute_slots, a4 as createEventDispatcher } from "./index-3dd64e7b.js";
import { B as BackButton, C as Center, s as shortcut, d as FancyButton, K as Kbd } from "./index-b373e42a.js";
const IconBase_svelte_svelte_type_style_lang = "";
function create_if_block$1(ctx) {
  let title_1;
  let t;
  return {
    c() {
      title_1 = svg_element("title");
      t = text(
        /*title*/
        ctx[0]
      );
    },
    l(nodes) {
      title_1 = claim_svg_element(nodes, "title", {});
      var title_1_nodes = children(title_1);
      t = claim_text(
        title_1_nodes,
        /*title*/
        ctx[0]
      );
      title_1_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, title_1, anchor);
      append_hydration(title_1, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*title*/
      1)
        set_data(
          t,
          /*title*/
          ctx2[0]
        );
    },
    d(detaching) {
      if (detaching)
        detach(title_1);
    }
  };
}
function create_fragment$4(ctx) {
  let svg;
  let if_block_anchor;
  let current;
  let if_block = (
    /*title*/
    ctx[0] && create_if_block$1(ctx)
  );
  const default_slot_template = (
    /*#slots*/
    ctx[3].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[2],
    null
  );
  return {
    c() {
      svg = svg_element("svg");
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", { xmlns: true, viewBox: true, class: true });
      var svg_nodes = children(svg);
      if (if_block)
        if_block.l(svg_nodes);
      if_block_anchor = empty();
      if (default_slot)
        default_slot.l(svg_nodes);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(
        svg,
        "viewBox",
        /*viewBox*/
        ctx[1]
      );
      attr(svg, "class", "svelte-3h8371");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      if (if_block)
        if_block.m(svg, null);
      append_hydration(svg, if_block_anchor);
      if (default_slot) {
        default_slot.m(svg, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (
        /*title*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          if_block.m(svg, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        4)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[2],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[2]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[2],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*viewBox*/
      2) {
        attr(
          svg,
          "viewBox",
          /*viewBox*/
          ctx2[1]
        );
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(svg);
      if (if_block)
        if_block.d();
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { title = null } = $$props;
  let { viewBox } = $$props;
  $$self.$$set = ($$props2) => {
    if ("title" in $$props2)
      $$invalidate(0, title = $$props2.title);
    if ("viewBox" in $$props2)
      $$invalidate(1, viewBox = $$props2.viewBox);
    if ("$$scope" in $$props2)
      $$invalidate(2, $$scope = $$props2.$$scope);
  };
  return [title, viewBox, $$scope, slots];
}
class IconBase extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$4, safe_not_equal, { title: 0, viewBox: 1 });
  }
}
function create_default_slot$1(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      path = claim_svg_element(nodes, "path", { d: true });
      children(path).forEach(detach);
      this.h();
    },
    h() {
      attr(path, "d", "M416.3 256c0-21 13.1-38.9 31.7-46.1-4.9-20.5-13-39.7-23.7-57.1-6.4 2.8-13.2 4.3-20.1 4.3-12.6 0-25.2-4.8-34.9-14.4-14.9-14.9-18.2-36.8-10.2-55-17.3-10.7-36.6-18.8-57-23.7C295 82.5 277 95.7 256 95.7S217 82.5 209.9 64c-20.5 4.9-39.7 13-57.1 23.7 8.1 18.1 4.7 40.1-10.2 55-9.6 9.6-22.3 14.4-34.9 14.4-6.9 0-13.7-1.4-20.1-4.3C77 170.3 68.9 189.5 64 210c18.5 7.1 31.7 25 31.7 46.1 0 21-13.1 38.9-31.6 46.1 4.9 20.5 13 39.7 23.7 57.1 6.4-2.8 13.2-4.2 20-4.2 12.6 0 25.2 4.8 34.9 14.4 14.8 14.8 18.2 36.8 10.2 54.9 17.4 10.7 36.7 18.8 57.1 23.7 7.1-18.5 25-31.6 46-31.6s38.9 13.1 46 31.6c20.5-4.9 39.7-13 57.1-23.7-8-18.1-4.6-40 10.2-54.9 9.6-9.6 22.2-14.4 34.9-14.4 6.8 0 13.7 1.4 20 4.2 10.7-17.4 18.8-36.7 23.7-57.1-18.4-7.2-31.6-25.1-31.6-46.2zm-159.4 79.9c-44.3 0-80-35.9-80-80s35.7-80 80-80 80 35.9 80 80-35.7 80-80 80z");
    },
    m(target, anchor) {
      insert_hydration(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(path);
    }
  };
}
function create_fragment$3(ctx) {
  let iconbase;
  let current;
  const iconbase_spread_levels = [
    { viewBox: "0 0 512 512" },
    /*$$props*/
    ctx[0]
  ];
  let iconbase_props = {
    $$slots: { default: [create_default_slot$1] },
    $$scope: { ctx }
  };
  for (let i = 0; i < iconbase_spread_levels.length; i += 1) {
    iconbase_props = assign(iconbase_props, iconbase_spread_levels[i]);
  }
  iconbase = new IconBase({ props: iconbase_props });
  return {
    c() {
      create_component(iconbase.$$.fragment);
    },
    l(nodes) {
      claim_component(iconbase.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(iconbase, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const iconbase_changes = dirty & /*$$props*/
      1 ? get_spread_update(iconbase_spread_levels, [iconbase_spread_levels[0], get_spread_object(
        /*$$props*/
        ctx2[0]
      )]) : {};
      if (dirty & /*$$scope*/
      2) {
        iconbase_changes.$$scope = { dirty, ctx: ctx2 };
      }
      iconbase.$set(iconbase_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(iconbase.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(iconbase.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(iconbase, detaching);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  $$self.$$set = ($$new_props) => {
    $$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
  };
  $$props = exclude_internal_props($$props);
  return [$$props];
}
class IoIosSettings extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$3, safe_not_equal, {});
  }
}
const IconSettings_svelte_svelte_type_style_lang = "";
function create_fragment$2(ctx) {
  let div;
  let ioiossettings;
  let current;
  ioiossettings = new IoIosSettings({});
  return {
    c() {
      div = element("div");
      create_component(ioiossettings.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(ioiossettings.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "icon svelte-1pnfuz");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(ioiossettings, div, null);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(ioiossettings.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(ioiossettings.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(ioiossettings);
    }
  };
}
class IconSettings extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$2, safe_not_equal, {});
  }
}
function create_fragment$1(ctx) {
  let button;
  let iconsettings;
  let current;
  let mounted;
  let dispose;
  iconsettings = new IconSettings({});
  return {
    c() {
      button = element("button");
      create_component(iconsettings.$$.fragment);
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      claim_component(iconsettings.$$.fragment, button_nodes);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "border border-gray-300 rounded-lg px-1 py-1 hover:bg-gray-100 hover:text-gray-700");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      mount_component(iconsettings, button, null);
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[0]
        );
        mounted = true;
      }
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(iconsettings.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(iconsettings.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      destroy_component(iconsettings);
      mounted = false;
      dispose();
    }
  };
}
function instance$1($$self) {
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  return [click_handler];
}
class SettingsButton extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
  }
}
const InlineTask_svelte_svelte_type_style_lang = "";
const get_answer_slot_changes = (dirty) => ({});
const get_answer_slot_context = (ctx) => ({});
const get_question_slot_changes = (dirty) => ({});
const get_question_slot_context = (ctx) => ({});
const get_description_slot_changes = (dirty) => ({});
const get_description_slot_context = (ctx) => ({});
const get_settings_slot_changes = (dirty) => ({});
const get_settings_slot_context = (ctx) => ({});
function create_if_block_1(ctx) {
  let div;
  let current;
  const settings_slot_template = (
    /*#slots*/
    ctx[7].settings
  );
  const settings_slot = create_slot(
    settings_slot_template,
    ctx,
    /*$$scope*/
    ctx[9],
    get_settings_slot_context
  );
  return {
    c() {
      div = element("div");
      if (settings_slot)
        settings_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (settings_slot)
        settings_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "settings svelte-r12cw9");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (settings_slot) {
        settings_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (settings_slot) {
        if (settings_slot.p && (!current || dirty & /*$$scope*/
        512)) {
          update_slot_base(
            settings_slot,
            settings_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[9],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[9]
            ) : get_slot_changes(
              settings_slot_template,
              /*$$scope*/
              ctx2[9],
              dirty,
              get_settings_slot_changes
            ),
            get_settings_slot_context
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(settings_slot, local);
      current = true;
    },
    o(local) {
      transition_out(settings_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (settings_slot)
        settings_slot.d(detaching);
    }
  };
}
function create_else_block(ctx) {
  let current;
  const answer_slot_template = (
    /*#slots*/
    ctx[7].answer
  );
  const answer_slot = create_slot(
    answer_slot_template,
    ctx,
    /*$$scope*/
    ctx[9],
    get_answer_slot_context
  );
  return {
    c() {
      if (answer_slot)
        answer_slot.c();
    },
    l(nodes) {
      if (answer_slot)
        answer_slot.l(nodes);
    },
    m(target, anchor) {
      if (answer_slot) {
        answer_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (answer_slot) {
        if (answer_slot.p && (!current || dirty & /*$$scope*/
        512)) {
          update_slot_base(
            answer_slot,
            answer_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[9],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[9]
            ) : get_slot_changes(
              answer_slot_template,
              /*$$scope*/
              ctx2[9],
              dirty,
              get_answer_slot_changes
            ),
            get_answer_slot_context
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(answer_slot, local);
      current = true;
    },
    o(local) {
      transition_out(answer_slot, local);
      current = false;
    },
    d(detaching) {
      if (answer_slot)
        answer_slot.d(detaching);
    }
  };
}
function create_if_block(ctx) {
  let current;
  const question_slot_template = (
    /*#slots*/
    ctx[7].question
  );
  const question_slot = create_slot(
    question_slot_template,
    ctx,
    /*$$scope*/
    ctx[9],
    get_question_slot_context
  );
  return {
    c() {
      if (question_slot)
        question_slot.c();
    },
    l(nodes) {
      if (question_slot)
        question_slot.l(nodes);
    },
    m(target, anchor) {
      if (question_slot) {
        question_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (question_slot) {
        if (question_slot.p && (!current || dirty & /*$$scope*/
        512)) {
          update_slot_base(
            question_slot,
            question_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[9],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[9]
            ) : get_slot_changes(
              question_slot_template,
              /*$$scope*/
              ctx2[9],
              dirty,
              get_question_slot_changes
            ),
            get_question_slot_context
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(question_slot, local);
      current = true;
    },
    o(local) {
      transition_out(question_slot, local);
      current = false;
    },
    d(detaching) {
      if (question_slot)
        question_slot.d(detaching);
    }
  };
}
function create_default_slot_5(ctx) {
  let div;
  let t_value = (
    /*isHidden*/
    ctx[1] ? "Reveal" : "Hide"
  );
  let t;
  return {
    c() {
      div = element("div");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t = claim_text(div_nodes, t_value);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "fixed-width svelte-r12cw9");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*isHidden*/
      2 && t_value !== (t_value = /*isHidden*/
      ctx2[1] ? "Reveal" : "Hide"))
        set_data(t, t_value);
    },
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
      attr(div, "class", "fixed-width svelte-r12cw9");
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
  let fancybutton0;
  let t;
  let fancybutton1;
  let current;
  fancybutton0 = new FancyButton({
    props: {
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    }
  });
  fancybutton0.$on(
    "click",
    /*onRevealHide*/
    ctx[4]
  );
  fancybutton1 = new FancyButton({
    props: {
      disabled: !/*wasRevealedOnce*/
      ctx[2],
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  fancybutton1.$on(
    "click",
    /*onNext*/
    ctx[5]
  );
  return {
    c() {
      create_component(fancybutton0.$$.fragment);
      t = space();
      create_component(fancybutton1.$$.fragment);
    },
    l(nodes) {
      claim_component(fancybutton0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(fancybutton1.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(fancybutton0, target, anchor);
      insert_hydration(target, t, anchor);
      mount_component(fancybutton1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const fancybutton0_changes = {};
      if (dirty & /*$$scope, isHidden*/
      514) {
        fancybutton0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      fancybutton0.$set(fancybutton0_changes);
      const fancybutton1_changes = {};
      if (dirty & /*wasRevealedOnce*/
      4)
        fancybutton1_changes.disabled = !/*wasRevealedOnce*/
        ctx2[2];
      if (dirty & /*$$scope*/
      512) {
        fancybutton1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      fancybutton1.$set(fancybutton1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(fancybutton0.$$.fragment, local);
      transition_in(fancybutton1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(fancybutton0.$$.fragment, local);
      transition_out(fancybutton1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(fancybutton0, detaching);
      if (detaching)
        detach(t);
      destroy_component(fancybutton1, detaching);
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
      t1 = text(" to reveal/hide, and\n        ");
      create_component(kbd1.$$.fragment);
      t2 = text(" for next.");
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "Hint: You can press\n        ");
      claim_component(kbd0.$$.fragment, p_nodes);
      t1 = claim_text(p_nodes, " to reveal/hide, and\n        ");
      claim_component(kbd1.$$.fragment, p_nodes);
      t2 = claim_text(p_nodes, " for next.");
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "class", "hint svelte-r12cw9");
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
      512) {
        kbd0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      kbd0.$set(kbd0_changes);
      const kbd1_changes = {};
      if (dirty & /*$$scope*/
      512) {
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
  let div3;
  let backbutton;
  let t0;
  let div0;
  let h1;
  let t1;
  let t2;
  let settingsbutton;
  let t3;
  let t4;
  let div1;
  let t5;
  let current_block_type_index;
  let if_block1;
  let t6;
  let div2;
  let center0;
  let t7;
  let center1;
  let current;
  let mounted;
  let dispose;
  backbutton = new BackButton({});
  settingsbutton = new SettingsButton({});
  settingsbutton.$on(
    "click",
    /*click_handler*/
    ctx[8]
  );
  let if_block0 = (
    /*$$slots*/
    ctx[6].settings && /*settingsVisible*/
    ctx[3] && create_if_block_1(ctx)
  );
  const description_slot_template = (
    /*#slots*/
    ctx[7].description
  );
  const description_slot = create_slot(
    description_slot_template,
    ctx,
    /*$$scope*/
    ctx[9],
    get_description_slot_context
  );
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*isHidden*/
      ctx2[1]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
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
      div3 = element("div");
      create_component(backbutton.$$.fragment);
      t0 = space();
      div0 = element("div");
      h1 = element("h1");
      t1 = text(
        /*title*/
        ctx[0]
      );
      t2 = space();
      create_component(settingsbutton.$$.fragment);
      t3 = space();
      if (if_block0)
        if_block0.c();
      t4 = space();
      div1 = element("div");
      if (description_slot)
        description_slot.c();
      t5 = space();
      if_block1.c();
      t6 = space();
      div2 = element("div");
      create_component(center0.$$.fragment);
      t7 = space();
      create_component(center1.$$.fragment);
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", {});
      var div3_nodes = children(div3);
      claim_component(backbutton.$$.fragment, div3_nodes);
      t0 = claim_space(div3_nodes);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h1 = claim_element(div0_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t1 = claim_text(
        h1_nodes,
        /*title*/
        ctx[0]
      );
      h1_nodes.forEach(detach);
      t2 = claim_space(div0_nodes);
      claim_component(settingsbutton.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t3 = claim_space(div3_nodes);
      if (if_block0)
        if_block0.l(div3_nodes);
      t4 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if (description_slot)
        description_slot.l(div1_nodes);
      div1_nodes.forEach(detach);
      t5 = claim_space(div3_nodes);
      if_block1.l(div3_nodes);
      t6 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      claim_component(center0.$$.fragment, div2_nodes);
      t7 = claim_space(div2_nodes);
      claim_component(center1.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "class", "svelte-r12cw9");
      attr(div0, "class", "title svelte-r12cw9");
      attr(div1, "class", "description svelte-r12cw9");
      attr(div2, "class", "footer svelte-r12cw9");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      mount_component(backbutton, div3, null);
      append_hydration(div3, t0);
      append_hydration(div3, div0);
      append_hydration(div0, h1);
      append_hydration(h1, t1);
      append_hydration(div0, t2);
      mount_component(settingsbutton, div0, null);
      append_hydration(div3, t3);
      if (if_block0)
        if_block0.m(div3, null);
      append_hydration(div3, t4);
      append_hydration(div3, div1);
      if (description_slot) {
        description_slot.m(div1, null);
      }
      append_hydration(div3, t5);
      if_blocks[current_block_type_index].m(div3, null);
      append_hydration(div3, t6);
      append_hydration(div3, div2);
      mount_component(center0, div2, null);
      append_hydration(div2, t7);
      mount_component(center1, div2, null);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(shortcut.call(null, window, {
            trigger: {
              key: " ",
              callback: (
                /*onRevealHide*/
                ctx[4]
              ),
              preventDefault: true
            }
          })),
          action_destroyer(shortcut.call(null, window, {
            trigger: {
              key: "Enter",
              callback: (
                /*onNext*/
                ctx[5]
              ),
              preventDefault: true
            }
          }))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & /*title*/
      1)
        set_data(
          t1,
          /*title*/
          ctx2[0]
        );
      if (
        /*$$slots*/
        ctx2[6].settings && /*settingsVisible*/
        ctx2[3]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*$$slots, settingsVisible*/
          72) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div3, t4);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (description_slot) {
        if (description_slot.p && (!current || dirty & /*$$scope*/
        512)) {
          update_slot_base(
            description_slot,
            description_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[9],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[9]
            ) : get_slot_changes(
              description_slot_template,
              /*$$scope*/
              ctx2[9],
              dirty,
              get_description_slot_changes
            ),
            get_description_slot_context
          );
        }
      }
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block1 = if_blocks[current_block_type_index];
        if (!if_block1) {
          if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block1.c();
        } else {
          if_block1.p(ctx2, dirty);
        }
        transition_in(if_block1, 1);
        if_block1.m(div3, t6);
      }
      const center0_changes = {};
      if (dirty & /*$$scope, wasRevealedOnce, isHidden*/
      518) {
        center0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      center0.$set(center0_changes);
      const center1_changes = {};
      if (dirty & /*$$scope*/
      512) {
        center1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      center1.$set(center1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(backbutton.$$.fragment, local);
      transition_in(settingsbutton.$$.fragment, local);
      transition_in(if_block0);
      transition_in(description_slot, local);
      transition_in(if_block1);
      transition_in(center0.$$.fragment, local);
      transition_in(center1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(backbutton.$$.fragment, local);
      transition_out(settingsbutton.$$.fragment, local);
      transition_out(if_block0);
      transition_out(description_slot, local);
      transition_out(if_block1);
      transition_out(center0.$$.fragment, local);
      transition_out(center1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      destroy_component(backbutton);
      destroy_component(settingsbutton);
      if (if_block0)
        if_block0.d();
      if (description_slot)
        description_slot.d(detaching);
      if_blocks[current_block_type_index].d();
      destroy_component(center0);
      destroy_component(center1);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  let { title } = $$props;
  const dispatch = createEventDispatcher();
  let isHidden = true;
  let wasRevealedOnce = false;
  let settingsVisible = false;
  function onRevealHide() {
    $$invalidate(1, isHidden = !isHidden);
    if (!isHidden) {
      $$invalidate(2, wasRevealedOnce = true);
    }
  }
  function onNext() {
    if (wasRevealedOnce) {
      dispatch("next");
      $$invalidate(1, isHidden = true);
      $$invalidate(2, wasRevealedOnce = false);
    }
  }
  const click_handler = () => $$invalidate(3, settingsVisible = !settingsVisible);
  $$self.$$set = ($$props2) => {
    if ("title" in $$props2)
      $$invalidate(0, title = $$props2.title);
    if ("$$scope" in $$props2)
      $$invalidate(9, $$scope = $$props2.$$scope);
  };
  return [
    title,
    isHidden,
    wasRevealedOnce,
    settingsVisible,
    onRevealHide,
    onNext,
    $$slots,
    slots,
    click_handler,
    $$scope
  ];
}
class InlineTask extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { title: 0 });
  }
}
export {
  InlineTask as I
};

import { S as SvelteComponent, i as init, s as safe_not_equal, e as empty, b as insert_hydration, g as group_outros, t as transition_out, d as check_outros, f as transition_in, h as detach, L as compute_rest_props, M as assign, N as exclude_internal_props, v as binding_callbacks, D as create_slot, G as update_slot_base, H as get_all_dirty_from_scope, I as get_slot_changes, k as element, l as claim_element, m as children, O as set_attributes, P as get_spread_update, x as create_component, y as claim_component, z as mount_component, A as destroy_component, Q as compute_slots, R as getContext, T as listen, U as run_all, V as bubble, W as action_destroyer, X as is_function, Y as bind, Z as get_spread_object, _ as add_flush_callback, a as space, c as claim_space, n as attr, q as text, r as claim_text, F as append_hydration, u as set_data } from "./index-3dd64e7b.js";
import { c as classNames, a as genRandom3NPSScaleNeighborPair, b as genRandom3NPSScaleCircleOfFifthsPair, T as TaskDescription, F as Fretboard } from "./index-b373e42a.js";
import { I as InlineTask } from "./InlineTask-fc886a30.js";
function create_else_block$1(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null
  );
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        64)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[6],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[6]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[6],
              dirty,
              null
            ),
            null
          );
        }
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
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_if_block$1(ctx) {
  let label;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null
  );
  let label_levels = [
    /*$$restProps*/
    ctx[3],
    { class: (
      /*labelClass*/
      ctx[2]
    ) }
  ];
  let label_data = {};
  for (let i = 0; i < label_levels.length; i += 1) {
    label_data = assign(label_data, label_levels[i]);
  }
  return {
    c() {
      label = element("label");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      label = claim_element(nodes, "LABEL", { class: true });
      var label_nodes = children(label);
      if (default_slot)
        default_slot.l(label_nodes);
      label_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(label, label_data);
    },
    m(target, anchor) {
      insert_hydration(target, label, anchor);
      if (default_slot) {
        default_slot.m(label, null);
      }
      ctx[8](label);
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        64)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[6],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[6]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[6],
              dirty,
              null
            ),
            null
          );
        }
      }
      set_attributes(label, label_data = get_spread_update(label_levels, [
        dirty & /*$$restProps*/
        8 && /*$$restProps*/
        ctx2[3],
        (!current || dirty & /*labelClass*/
        4) && { class: (
          /*labelClass*/
          ctx2[2]
        ) }
      ]));
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
        detach(label);
      if (default_slot)
        default_slot.d(detaching);
      ctx[8](null);
    }
  };
}
function create_fragment$4(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$1, create_else_block$1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*show*/
      ctx2[0]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
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
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
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
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let labelClass2;
  const omit_props_names = ["color", "defaultClass", "show"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { color = "gray" } = $$props;
  let { defaultClass = "text-sm font-medium block" } = $$props;
  let { show = true } = $$props;
  let node;
  const colorClasses2 = {
    gray: "text-gray-900 dark:text-gray-300",
    green: "text-green-700 dark:text-green-500",
    red: "text-red-700 dark:text-red-500",
    disabled: "text-gray-400 dark:text-gray-500"
  };
  function label_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      node = $$value;
      $$invalidate(1, node);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(10, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("color" in $$new_props)
      $$invalidate(4, color = $$new_props.color);
    if ("defaultClass" in $$new_props)
      $$invalidate(5, defaultClass = $$new_props.defaultClass);
    if ("show" in $$new_props)
      $$invalidate(0, show = $$new_props.show);
    if ("$$scope" in $$new_props)
      $$invalidate(6, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*node, color*/
    18) {
      {
        const control = node == null ? void 0 : node.control;
        $$invalidate(4, color = (control == null ? void 0 : control.disabled) ? "disabled" : color);
      }
    }
    $$invalidate(2, labelClass2 = classNames(defaultClass, colorClasses2[color], $$props.class));
  };
  $$props = exclude_internal_props($$props);
  return [
    show,
    node,
    labelClass2,
    $$restProps,
    color,
    defaultClass,
    $$scope,
    slots,
    label_binding
  ];
}
class Label extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { color: 4, defaultClass: 5, show: 0 });
  }
}
function create_default_slot$3(ctx) {
  let input;
  let input_class_value;
  let current;
  let mounted;
  let dispose;
  let input_levels = [
    { type: "radio" },
    { __value: (
      /*value*/
      ctx[4]
    ) },
    /*$$restProps*/
    ctx[8],
    {
      class: input_class_value = inputClass(
        /*custom*/
        ctx[2],
        /*color*/
        ctx[1],
        false,
        /*background*/
        ctx[5],
        /*$$slots*/
        ctx[7].default || /*$$props*/
        ctx[6].class
      )
    }
  ];
  let input_data = {};
  for (let i = 0; i < input_levels.length; i += 1) {
    input_data = assign(input_data, input_levels[i]);
  }
  const default_slot_template = (
    /*#slots*/
    ctx[9].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[23],
    null
  );
  return {
    c() {
      input = element("input");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      input = claim_element(nodes, "INPUT", { type: true, class: true });
      if (default_slot)
        default_slot.l(nodes);
      this.h();
    },
    h() {
      set_attributes(input, input_data);
      ctx[22][0].push(input);
    },
    m(target, anchor) {
      insert_hydration(target, input, anchor);
      if (input.autofocus)
        input.focus();
      input.checked = input.__value === /*group*/
      ctx[0];
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            input,
            "change",
            /*input_change_handler*/
            ctx[21]
          ),
          listen(
            input,
            "blur",
            /*blur_handler*/
            ctx[10]
          ),
          listen(
            input,
            "change",
            /*change_handler*/
            ctx[11]
          ),
          listen(
            input,
            "click",
            /*click_handler*/
            ctx[12]
          ),
          listen(
            input,
            "focus",
            /*focus_handler*/
            ctx[13]
          ),
          listen(
            input,
            "keydown",
            /*keydown_handler*/
            ctx[14]
          ),
          listen(
            input,
            "keypress",
            /*keypress_handler*/
            ctx[15]
          ),
          listen(
            input,
            "keyup",
            /*keyup_handler*/
            ctx[16]
          ),
          listen(
            input,
            "mouseenter",
            /*mouseenter_handler*/
            ctx[17]
          ),
          listen(
            input,
            "mouseleave",
            /*mouseleave_handler*/
            ctx[18]
          ),
          listen(
            input,
            "mouseover",
            /*mouseover_handler*/
            ctx[19]
          ),
          listen(
            input,
            "paste",
            /*paste_handler*/
            ctx[20]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      set_attributes(input, input_data = get_spread_update(input_levels, [
        { type: "radio" },
        (!current || dirty & /*value*/
        16) && { __value: (
          /*value*/
          ctx2[4]
        ) },
        dirty & /*$$restProps*/
        256 && /*$$restProps*/
        ctx2[8],
        (!current || dirty & /*custom, color, $$slots, $$props*/
        198 && input_class_value !== (input_class_value = inputClass(
          /*custom*/
          ctx2[2],
          /*color*/
          ctx2[1],
          false,
          /*background*/
          ctx2[5],
          /*$$slots*/
          ctx2[7].default || /*$$props*/
          ctx2[6].class
        ))) && { class: input_class_value }
      ]));
      if (dirty & /*group*/
      1) {
        input.checked = input.__value === /*group*/
        ctx2[0];
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        8388608)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[23],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[23]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[23],
              dirty,
              null
            ),
            null
          );
        }
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
        detach(input);
      ctx[22][0].splice(
        /*$$binding_groups*/
        ctx[22][0].indexOf(input),
        1
      );
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$3(ctx) {
  let label;
  let current;
  label = new Label({
    props: {
      class: labelClass(
        /*inline*/
        ctx[3],
        /*$$props*/
        ctx[6].class
      ),
      show: (
        /*$$slots*/
        ctx[7].default
      ),
      $$slots: { default: [create_default_slot$3] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(label.$$.fragment);
    },
    l(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const label_changes = {};
      if (dirty & /*inline, $$props*/
      72)
        label_changes.class = labelClass(
          /*inline*/
          ctx2[3],
          /*$$props*/
          ctx2[6].class
        );
      if (dirty & /*$$slots*/
      128)
        label_changes.show = /*$$slots*/
        ctx2[7].default;
      if (dirty & /*$$scope, value, $$restProps, custom, color, $$slots, $$props, group*/
      8389079) {
        label_changes.$$scope = { dirty, ctx: ctx2 };
      }
      label.$set(label_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(label, detaching);
    }
  };
}
const colorClasses = {
  red: "text-red-600 focus:ring-red-500 dark:focus:ring-red-600",
  green: "text-green-600 focus:ring-green-500 dark:focus:ring-green-600",
  purple: "text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600",
  teal: "text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600",
  yellow: "text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600",
  orange: "text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600",
  blue: "text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"
};
const labelClass = (inline, extraClass) => classNames(inline ? "inline-flex" : "flex", "items-center", extraClass);
const inputClass = (custom, color, rounded, tinted, extraClass) => classNames(
  "w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2",
  extraClass === true && "mr-2",
  tinted ? "dark:bg-gray-600 dark:border-gray-500" : "dark:bg-gray-700 dark:border-gray-600",
  custom && "sr-only peer",
  rounded && "rounded",
  colorClasses[color],
  extraClass
);
function instance$3($$self, $$props, $$invalidate) {
  const omit_props_names = ["color", "custom", "inline", "group", "value"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  let { color = "blue" } = $$props;
  let { custom = false } = $$props;
  let { inline = false } = $$props;
  let { group = "" } = $$props;
  let { value = "" } = $$props;
  let background = getContext("background");
  const $$binding_groups = [[]];
  function blur_handler(event) {
    bubble.call(this, $$self, event);
  }
  function change_handler(event) {
    bubble.call(this, $$self, event);
  }
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function focus_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keypress_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keyup_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  function paste_handler(event) {
    bubble.call(this, $$self, event);
  }
  function input_change_handler() {
    group = this.__value;
    $$invalidate(0, group);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(6, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(8, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("color" in $$new_props)
      $$invalidate(1, color = $$new_props.color);
    if ("custom" in $$new_props)
      $$invalidate(2, custom = $$new_props.custom);
    if ("inline" in $$new_props)
      $$invalidate(3, inline = $$new_props.inline);
    if ("group" in $$new_props)
      $$invalidate(0, group = $$new_props.group);
    if ("value" in $$new_props)
      $$invalidate(4, value = $$new_props.value);
    if ("$$scope" in $$new_props)
      $$invalidate(23, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [
    group,
    color,
    custom,
    inline,
    value,
    background,
    $$props,
    $$slots,
    $$restProps,
    slots,
    blur_handler,
    change_handler,
    click_handler,
    focus_handler,
    keydown_handler,
    keypress_handler,
    keyup_handler,
    mouseenter_handler,
    mouseleave_handler,
    mouseover_handler,
    paste_handler,
    input_change_handler,
    $$binding_groups,
    $$scope
  ];
}
class Radio extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {
      color: 1,
      custom: 2,
      inline: 3,
      group: 0,
      value: 4
    });
  }
}
function create_default_slot$2(ctx) {
  let input;
  let input_class_value;
  let init_action;
  let current;
  let mounted;
  let dispose;
  let input_levels = [
    { type: "checkbox" },
    { __value: (
      /*value*/
      ctx[5]
    ) },
    /*$$restProps*/
    ctx[11],
    {
      class: input_class_value = inputClass(
        /*custom*/
        ctx[3],
        /*color*/
        ctx[2],
        true,
        /*background*/
        ctx[6],
        /*$$slots*/
        ctx[10].default || /*$$props*/
        ctx[9].class
      )
    }
  ];
  let input_data = {};
  for (let i = 0; i < input_levels.length; i += 1) {
    input_data = assign(input_data, input_levels[i]);
  }
  const default_slot_template = (
    /*#slots*/
    ctx[12].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[25],
    null
  );
  return {
    c() {
      input = element("input");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      input = claim_element(nodes, "INPUT", { type: true, class: true });
      if (default_slot)
        default_slot.l(nodes);
      this.h();
    },
    h() {
      set_attributes(input, input_data);
    },
    m(target, anchor) {
      insert_hydration(target, input, anchor);
      if (input.autofocus)
        input.focus();
      input.checked = /*checked*/
      ctx[1];
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(init_action = /*init*/
          ctx[7].call(
            null,
            input,
            /*group*/
            ctx[0]
          )),
          listen(
            input,
            "change",
            /*input_change_handler*/
            ctx[24]
          ),
          listen(
            input,
            "keyup",
            /*keyup_handler*/
            ctx[13]
          ),
          listen(
            input,
            "keydown",
            /*keydown_handler*/
            ctx[14]
          ),
          listen(
            input,
            "keypress",
            /*keypress_handler*/
            ctx[15]
          ),
          listen(
            input,
            "focus",
            /*focus_handler*/
            ctx[16]
          ),
          listen(
            input,
            "blur",
            /*blur_handler*/
            ctx[17]
          ),
          listen(
            input,
            "click",
            /*click_handler*/
            ctx[18]
          ),
          listen(
            input,
            "mouseover",
            /*mouseover_handler*/
            ctx[19]
          ),
          listen(
            input,
            "mouseenter",
            /*mouseenter_handler*/
            ctx[20]
          ),
          listen(
            input,
            "mouseleave",
            /*mouseleave_handler*/
            ctx[21]
          ),
          listen(
            input,
            "paste",
            /*paste_handler*/
            ctx[22]
          ),
          listen(
            input,
            "change",
            /*onChange*/
            ctx[8]
          ),
          listen(
            input,
            "change",
            /*change_handler*/
            ctx[23]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      set_attributes(input, input_data = get_spread_update(input_levels, [
        { type: "checkbox" },
        (!current || dirty & /*value*/
        32) && { __value: (
          /*value*/
          ctx2[5]
        ) },
        dirty & /*$$restProps*/
        2048 && /*$$restProps*/
        ctx2[11],
        (!current || dirty & /*custom, color, $$slots, $$props*/
        1548 && input_class_value !== (input_class_value = inputClass(
          /*custom*/
          ctx2[3],
          /*color*/
          ctx2[2],
          true,
          /*background*/
          ctx2[6],
          /*$$slots*/
          ctx2[10].default || /*$$props*/
          ctx2[9].class
        ))) && { class: input_class_value }
      ]));
      if (init_action && is_function(init_action.update) && dirty & /*group*/
      1)
        init_action.update.call(
          null,
          /*group*/
          ctx2[0]
        );
      if (dirty & /*checked*/
      2) {
        input.checked = /*checked*/
        ctx2[1];
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        33554432)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[25],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[25]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[25],
              dirty,
              null
            ),
            null
          );
        }
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
        detach(input);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$2(ctx) {
  let label;
  let current;
  label = new Label({
    props: {
      class: labelClass(
        /*inline*/
        ctx[4],
        /*$$props*/
        ctx[9].class
      ),
      show: !!/*$$slots*/
      ctx[10].default,
      $$slots: { default: [create_default_slot$2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(label.$$.fragment);
    },
    l(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const label_changes = {};
      if (dirty & /*inline, $$props*/
      528)
        label_changes.class = labelClass(
          /*inline*/
          ctx2[4],
          /*$$props*/
          ctx2[9].class
        );
      if (dirty & /*$$slots*/
      1024)
        label_changes.show = !!/*$$slots*/
        ctx2[10].default;
      if (dirty & /*$$scope, value, $$restProps, custom, color, $$slots, $$props, checked, group*/
      33558063) {
        label_changes.$$scope = { dirty, ctx: ctx2 };
      }
      label.$set(label_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(label, detaching);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  const omit_props_names = ["color", "custom", "inline", "group", "value", "checked"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  let { color = "blue" } = $$props;
  let { custom = false } = $$props;
  let { inline = false } = $$props;
  let { group = [] } = $$props;
  let { value = "" } = $$props;
  let { checked = void 0 } = $$props;
  let background = getContext("background");
  function init2(_, _group) {
    if (checked === void 0)
      $$invalidate(1, checked = _group.includes(value));
    onChange();
    return {
      update(_group2) {
        $$invalidate(1, checked = _group2.includes(value));
      }
    };
  }
  function onChange() {
    const index = group.indexOf(value);
    if (checked === void 0)
      $$invalidate(1, checked = index >= 0);
    if (checked) {
      if (index < 0) {
        group.push(value);
        $$invalidate(0, group);
      }
    } else {
      if (index >= 0) {
        group.splice(index, 1);
        $$invalidate(0, group);
      }
    }
  }
  function keyup_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keypress_handler(event) {
    bubble.call(this, $$self, event);
  }
  function focus_handler(event) {
    bubble.call(this, $$self, event);
  }
  function blur_handler(event) {
    bubble.call(this, $$self, event);
  }
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  function paste_handler(event) {
    bubble.call(this, $$self, event);
  }
  function change_handler(event) {
    bubble.call(this, $$self, event);
  }
  function input_change_handler() {
    checked = this.checked;
    $$invalidate(1, checked);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(9, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(11, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("color" in $$new_props)
      $$invalidate(2, color = $$new_props.color);
    if ("custom" in $$new_props)
      $$invalidate(3, custom = $$new_props.custom);
    if ("inline" in $$new_props)
      $$invalidate(4, inline = $$new_props.inline);
    if ("group" in $$new_props)
      $$invalidate(0, group = $$new_props.group);
    if ("value" in $$new_props)
      $$invalidate(5, value = $$new_props.value);
    if ("checked" in $$new_props)
      $$invalidate(1, checked = $$new_props.checked);
    if ("$$scope" in $$new_props)
      $$invalidate(25, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [
    group,
    checked,
    color,
    custom,
    inline,
    value,
    background,
    init2,
    onChange,
    $$props,
    $$slots,
    $$restProps,
    slots,
    keyup_handler,
    keydown_handler,
    keypress_handler,
    focus_handler,
    blur_handler,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler,
    paste_handler,
    change_handler,
    input_change_handler,
    $$scope
  ];
}
class Checkbox extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {
      color: 2,
      custom: 3,
      inline: 4,
      group: 0,
      value: 5,
      checked: 1
    });
  }
}
function create_default_slot$1(ctx) {
  let span;
  let t;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[12],
    null
  );
  return {
    c() {
      span = element("span");
      t = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      children(span).forEach(detach);
      t = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
      this.h();
    },
    h() {
      attr(
        span,
        "class",
        /*divClass*/
        ctx[3]
      );
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      insert_hydration(target, t, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (!current || dirty & /*divClass*/
      8) {
        attr(
          span,
          "class",
          /*divClass*/
          ctx2[3]
        );
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        4096)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[12],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[12]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[12],
              dirty,
              null
            ),
            null
          );
        }
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
        detach(span);
      if (detaching)
        detach(t);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment$1(ctx) {
  let checkbox;
  let updating_checked;
  let updating_group;
  let current;
  const checkbox_spread_levels = [
    { custom: true },
    /*$$restProps*/
    ctx[4],
    { class: (
      /*$$props*/
      ctx[5].class
    ) },
    { value: (
      /*value*/
      ctx[2]
    ) }
  ];
  function checkbox_checked_binding(value) {
    ctx[8](value);
  }
  function checkbox_group_binding(value) {
    ctx[9](value);
  }
  let checkbox_props = {
    $$slots: { default: [create_default_slot$1] },
    $$scope: { ctx }
  };
  for (let i = 0; i < checkbox_spread_levels.length; i += 1) {
    checkbox_props = assign(checkbox_props, checkbox_spread_levels[i]);
  }
  if (
    /*checked*/
    ctx[1] !== void 0
  ) {
    checkbox_props.checked = /*checked*/
    ctx[1];
  }
  if (
    /*group*/
    ctx[0] !== void 0
  ) {
    checkbox_props.group = /*group*/
    ctx[0];
  }
  checkbox = new Checkbox({ props: checkbox_props });
  binding_callbacks.push(() => bind(checkbox, "checked", checkbox_checked_binding));
  binding_callbacks.push(() => bind(checkbox, "group", checkbox_group_binding));
  checkbox.$on(
    "click",
    /*click_handler*/
    ctx[10]
  );
  checkbox.$on(
    "change",
    /*change_handler*/
    ctx[11]
  );
  return {
    c() {
      create_component(checkbox.$$.fragment);
    },
    l(nodes) {
      claim_component(checkbox.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(checkbox, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const checkbox_changes = dirty & /*$$restProps, $$props, value*/
      52 ? get_spread_update(checkbox_spread_levels, [
        checkbox_spread_levels[0],
        dirty & /*$$restProps*/
        16 && get_spread_object(
          /*$$restProps*/
          ctx2[4]
        ),
        dirty & /*$$props*/
        32 && { class: (
          /*$$props*/
          ctx2[5].class
        ) },
        dirty & /*value*/
        4 && { value: (
          /*value*/
          ctx2[2]
        ) }
      ]) : {};
      if (dirty & /*$$scope, divClass*/
      4104) {
        checkbox_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_checked && dirty & /*checked*/
      2) {
        updating_checked = true;
        checkbox_changes.checked = /*checked*/
        ctx2[1];
        add_flush_callback(() => updating_checked = false);
      }
      if (!updating_group && dirty & /*group*/
      1) {
        updating_group = true;
        checkbox_changes.group = /*group*/
        ctx2[0];
        add_flush_callback(() => updating_group = false);
      }
      checkbox.$set(checkbox_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(checkbox, detaching);
    }
  };
}
const common = "mr-3 bg-gray-200 rounded-full peer-focus:ring-4 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all";
function instance$1($$self, $$props, $$invalidate) {
  const omit_props_names = ["size", "group", "value", "checked"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { size = "default" } = $$props;
  let { group = [] } = $$props;
  let { value = "" } = $$props;
  let { checked = void 0 } = $$props;
  let background = getContext("background");
  const colors = {
    red: "peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600",
    green: "peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600",
    purple: "peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600",
    yellow: "peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400",
    teal: "peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600",
    orange: "peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500",
    blue: "peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600"
  };
  const sizes = {
    small: "w-9 h-5 after:top-[2px] after:left-[2px] after:h-4 after:w-4",
    default: "w-11 h-6 after:top-0.5 after:left-[2px] after:h-5 after:w-5",
    large: "w-14 h-7 after:top-0.5 after:left-[4px]  after:h-6 after:w-6"
  };
  let divClass;
  function checkbox_checked_binding(value2) {
    checked = value2;
    $$invalidate(1, checked);
  }
  function checkbox_group_binding(value2) {
    group = value2;
    $$invalidate(0, group);
  }
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function change_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(5, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("size" in $$new_props)
      $$invalidate(6, size = $$new_props.size);
    if ("group" in $$new_props)
      $$invalidate(0, group = $$new_props.group);
    if ("value" in $$new_props)
      $$invalidate(2, value = $$new_props.value);
    if ("checked" in $$new_props)
      $$invalidate(1, checked = $$new_props.checked);
    if ("$$scope" in $$new_props)
      $$invalidate(12, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(3, divClass = classNames(
      common,
      background ? "dark:bg-gray-600 dark:border-gray-500" : "dark:bg-gray-700 dark:border-gray-600",
      colors[$$restProps.color ?? "blue"],
      sizes[size],
      "relative"
    ));
  };
  $$props = exclude_internal_props($$props);
  return [
    group,
    checked,
    value,
    divClass,
    $$restProps,
    $$props,
    size,
    slots,
    checkbox_checked_binding,
    checkbox_group_binding,
    click_handler,
    change_handler,
    $$scope
  ];
}
class Toggle extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { size: 6, group: 0, value: 2, checked: 1 });
  }
}
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
      attr(b0, "class", "svelte-12qekpb");
      attr(b1, "class", "svelte-12qekpb");
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
      attr(b, "class", "svelte-12qekpb");
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
function create_default_slot_5(ctx) {
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
      $$slots: { default: [create_default_slot_5] },
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
      2051) {
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
function create_default_slot_4(ctx) {
  let t;
  return {
    c() {
      t = text("6 strings (full pattern)");
    },
    l(nodes) {
      t = claim_text(nodes, "6 strings (full pattern)");
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
function create_default_slot_3(ctx) {
  let t;
  return {
    c() {
      t = text("5 strings");
    },
    l(nodes) {
      t = claim_text(nodes, "5 strings");
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
function create_default_slot_2(ctx) {
  let t;
  return {
    c() {
      t = text("4 strings");
    },
    l(nodes) {
      t = claim_text(nodes, "4 strings");
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
      t = text("3 strings");
    },
    l(nodes) {
      t = claim_text(nodes, "3 strings");
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
  let t;
  return {
    c() {
      t = text("2 strings");
    },
    l(nodes) {
      t = claim_text(nodes, "2 strings");
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
function create_settings_slot(ctx) {
  let div4;
  let div0;
  let t0;
  let t1;
  let div1;
  let t2;
  let t3;
  let radio0;
  let updating_group;
  let t4;
  let radio1;
  let updating_group_1;
  let t5;
  let radio2;
  let updating_group_2;
  let t6;
  let radio3;
  let updating_group_3;
  let t7;
  let radio4;
  let updating_group_4;
  let t8;
  let div2;
  let t9;
  let t10;
  let div3;
  let t11;
  let t12;
  let toggle;
  let current;
  function radio0_group_binding(value) {
    ctx[5](value);
  }
  let radio0_props = {
    name: "example",
    class: "mt-2 mb-2",
    value: 6,
    $$slots: { default: [create_default_slot_4] },
    $$scope: { ctx }
  };
  if (
    /*numRevealedStrings*/
    ctx[2] !== void 0
  ) {
    radio0_props.group = /*numRevealedStrings*/
    ctx[2];
  }
  radio0 = new Radio({ props: radio0_props });
  binding_callbacks.push(() => bind(radio0, "group", radio0_group_binding));
  function radio1_group_binding(value) {
    ctx[6](value);
  }
  let radio1_props = {
    name: "example",
    class: "mt-2 mb-2",
    value: 5,
    $$slots: { default: [create_default_slot_3] },
    $$scope: { ctx }
  };
  if (
    /*numRevealedStrings*/
    ctx[2] !== void 0
  ) {
    radio1_props.group = /*numRevealedStrings*/
    ctx[2];
  }
  radio1 = new Radio({ props: radio1_props });
  binding_callbacks.push(() => bind(radio1, "group", radio1_group_binding));
  function radio2_group_binding(value) {
    ctx[7](value);
  }
  let radio2_props = {
    name: "example",
    class: "mt-2 mb-2",
    value: 4,
    $$slots: { default: [create_default_slot_2] },
    $$scope: { ctx }
  };
  if (
    /*numRevealedStrings*/
    ctx[2] !== void 0
  ) {
    radio2_props.group = /*numRevealedStrings*/
    ctx[2];
  }
  radio2 = new Radio({ props: radio2_props });
  binding_callbacks.push(() => bind(radio2, "group", radio2_group_binding));
  function radio3_group_binding(value) {
    ctx[8](value);
  }
  let radio3_props = {
    name: "example",
    class: "mt-2 mb-2",
    value: 3,
    $$slots: { default: [create_default_slot_1] },
    $$scope: { ctx }
  };
  if (
    /*numRevealedStrings*/
    ctx[2] !== void 0
  ) {
    radio3_props.group = /*numRevealedStrings*/
    ctx[2];
  }
  radio3 = new Radio({ props: radio3_props });
  binding_callbacks.push(() => bind(radio3, "group", radio3_group_binding));
  function radio4_group_binding(value) {
    ctx[9](value);
  }
  let radio4_props = {
    name: "example",
    class: "mt-2 mb-2",
    value: 2,
    $$slots: { default: [create_default_slot] },
    $$scope: { ctx }
  };
  if (
    /*numRevealedStrings*/
    ctx[2] !== void 0
  ) {
    radio4_props.group = /*numRevealedStrings*/
    ctx[2];
  }
  radio4 = new Radio({ props: radio4_props });
  binding_callbacks.push(() => bind(radio4, "group", radio4_group_binding));
  toggle = new Toggle({});
  toggle.$on(
    "click",
    /*click_handler*/
    ctx[10]
  );
  return {
    c() {
      div4 = element("div");
      div0 = element("div");
      t0 = text("String subset");
      t1 = space();
      div1 = element("div");
      t2 = text("Limit the visibility to a subset of strings to make the exercise more challenging.");
      t3 = space();
      create_component(radio0.$$.fragment);
      t4 = space();
      create_component(radio1.$$.fragment);
      t5 = space();
      create_component(radio2.$$.fragment);
      t6 = space();
      create_component(radio3.$$.fragment);
      t7 = space();
      create_component(radio4.$$.fragment);
      t8 = space();
      div2 = element("div");
      t9 = text("Monochrome mode");
      t10 = space();
      div3 = element("div");
      t11 = text("For an extra challenge, disable color hints and switch to monochrome mode.");
      t12 = space();
      create_component(toggle.$$.fragment);
      this.h();
    },
    l(nodes) {
      div4 = claim_element(nodes, "DIV", { slot: true, class: true });
      var div4_nodes = children(div4);
      div0 = claim_element(div4_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "String subset");
      div0_nodes.forEach(detach);
      t1 = claim_space(div4_nodes);
      div1 = claim_element(div4_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t2 = claim_text(div1_nodes, "Limit the visibility to a subset of strings to make the exercise more challenging.");
      div1_nodes.forEach(detach);
      t3 = claim_space(div4_nodes);
      claim_component(radio0.$$.fragment, div4_nodes);
      t4 = claim_space(div4_nodes);
      claim_component(radio1.$$.fragment, div4_nodes);
      t5 = claim_space(div4_nodes);
      claim_component(radio2.$$.fragment, div4_nodes);
      t6 = claim_space(div4_nodes);
      claim_component(radio3.$$.fragment, div4_nodes);
      t7 = claim_space(div4_nodes);
      claim_component(radio4.$$.fragment, div4_nodes);
      t8 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      t9 = claim_text(div2_nodes, "Monochrome mode");
      div2_nodes.forEach(detach);
      t10 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      t11 = claim_text(div3_nodes, "For an extra challenge, disable color hints and switch to monochrome mode.");
      div3_nodes.forEach(detach);
      t12 = claim_space(div4_nodes);
      claim_component(toggle.$$.fragment, div4_nodes);
      div4_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "settings-header svelte-12qekpb");
      attr(div1, "class", "settings-description svelte-12qekpb");
      attr(div2, "class", "settings-header svelte-12qekpb");
      attr(div3, "class", "settings-description svelte-12qekpb");
      attr(div4, "slot", "settings");
      attr(div4, "class", "settings svelte-12qekpb");
    },
    m(target, anchor) {
      insert_hydration(target, div4, anchor);
      append_hydration(div4, div0);
      append_hydration(div0, t0);
      append_hydration(div4, t1);
      append_hydration(div4, div1);
      append_hydration(div1, t2);
      append_hydration(div4, t3);
      mount_component(radio0, div4, null);
      append_hydration(div4, t4);
      mount_component(radio1, div4, null);
      append_hydration(div4, t5);
      mount_component(radio2, div4, null);
      append_hydration(div4, t6);
      mount_component(radio3, div4, null);
      append_hydration(div4, t7);
      mount_component(radio4, div4, null);
      append_hydration(div4, t8);
      append_hydration(div4, div2);
      append_hydration(div2, t9);
      append_hydration(div4, t10);
      append_hydration(div4, div3);
      append_hydration(div3, t11);
      append_hydration(div4, t12);
      mount_component(toggle, div4, null);
      current = true;
    },
    p(ctx2, dirty) {
      const radio0_changes = {};
      if (dirty & /*$$scope*/
      2048) {
        radio0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_group && dirty & /*numRevealedStrings*/
      4) {
        updating_group = true;
        radio0_changes.group = /*numRevealedStrings*/
        ctx2[2];
        add_flush_callback(() => updating_group = false);
      }
      radio0.$set(radio0_changes);
      const radio1_changes = {};
      if (dirty & /*$$scope*/
      2048) {
        radio1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_group_1 && dirty & /*numRevealedStrings*/
      4) {
        updating_group_1 = true;
        radio1_changes.group = /*numRevealedStrings*/
        ctx2[2];
        add_flush_callback(() => updating_group_1 = false);
      }
      radio1.$set(radio1_changes);
      const radio2_changes = {};
      if (dirty & /*$$scope*/
      2048) {
        radio2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_group_2 && dirty & /*numRevealedStrings*/
      4) {
        updating_group_2 = true;
        radio2_changes.group = /*numRevealedStrings*/
        ctx2[2];
        add_flush_callback(() => updating_group_2 = false);
      }
      radio2.$set(radio2_changes);
      const radio3_changes = {};
      if (dirty & /*$$scope*/
      2048) {
        radio3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_group_3 && dirty & /*numRevealedStrings*/
      4) {
        updating_group_3 = true;
        radio3_changes.group = /*numRevealedStrings*/
        ctx2[2];
        add_flush_callback(() => updating_group_3 = false);
      }
      radio3.$set(radio3_changes);
      const radio4_changes = {};
      if (dirty & /*$$scope*/
      2048) {
        radio4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_group_4 && dirty & /*numRevealedStrings*/
      4) {
        updating_group_4 = true;
        radio4_changes.group = /*numRevealedStrings*/
        ctx2[2];
        add_flush_callback(() => updating_group_4 = false);
      }
      radio4.$set(radio4_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(radio0.$$.fragment, local);
      transition_in(radio1.$$.fragment, local);
      transition_in(radio2.$$.fragment, local);
      transition_in(radio3.$$.fragment, local);
      transition_in(radio4.$$.fragment, local);
      transition_in(toggle.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(radio0.$$.fragment, local);
      transition_out(radio1.$$.fragment, local);
      transition_out(radio2.$$.fragment, local);
      transition_out(radio3.$$.fragment, local);
      transition_out(radio4.$$.fragment, local);
      transition_out(toggle.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div4);
      destroy_component(radio0);
      destroy_component(radio1);
      destroy_component(radio2);
      destroy_component(radio3);
      destroy_component(radio4);
      destroy_component(toggle);
    }
  };
}
function create_question_slot(ctx) {
  let div;
  let fretboard;
  let current;
  fretboard = new Fretboard({
    props: {
      notes: (
        /*qaPair*/
        ctx[1].question
      ),
      monochrome: (
        /*monochrome*/
        ctx[3]
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
      if (dirty & /*monochrome*/
      8)
        fretboard_changes.monochrome = /*monochrome*/
        ctx2[3];
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
    props: {
      notes: (
        /*qaPair*/
        ctx[1].answer
      ),
      monochrome: (
        /*monochrome*/
        ctx[3]
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
      if (dirty & /*monochrome*/
      8)
        fretboard_changes.monochrome = /*monochrome*/
        ctx2[3];
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
      title,
      $$slots: {
        answer: [create_answer_slot],
        question: [create_question_slot],
        settings: [create_settings_slot],
        description: [create_description_slot]
      },
      $$scope: { ctx }
    }
  });
  inlinetask.$on(
    "next",
    /*generate*/
    ctx[4]
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
      if (dirty & /*$$scope, qaPair, monochrome, numRevealedStrings, mode*/
      2063) {
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
const title = "Diatonic – Neighboring scales";
const maxFret = 24;
function instance($$self, $$props, $$invalidate) {
  let { mode } = $$props;
  let qaPair;
  let numRevealedStrings = 6;
  let monochrome = false;
  generate();
  function generate() {
    $$invalidate(1, qaPair = mode == "direct_neighbors" ? genRandom3NPSScaleNeighborPair(maxFret) : genRandom3NPSScaleCircleOfFifthsPair(maxFret));
  }
  function radio0_group_binding(value) {
    numRevealedStrings = value;
    $$invalidate(2, numRevealedStrings);
  }
  function radio1_group_binding(value) {
    numRevealedStrings = value;
    $$invalidate(2, numRevealedStrings);
  }
  function radio2_group_binding(value) {
    numRevealedStrings = value;
    $$invalidate(2, numRevealedStrings);
  }
  function radio3_group_binding(value) {
    numRevealedStrings = value;
    $$invalidate(2, numRevealedStrings);
  }
  function radio4_group_binding(value) {
    numRevealedStrings = value;
    $$invalidate(2, numRevealedStrings);
  }
  const click_handler = () => $$invalidate(3, monochrome = !monochrome);
  $$self.$$set = ($$props2) => {
    if ("mode" in $$props2)
      $$invalidate(0, mode = $$props2.mode);
  };
  return [
    mode,
    qaPair,
    numRevealedStrings,
    monochrome,
    generate,
    radio0_group_binding,
    radio1_group_binding,
    radio2_group_binding,
    radio3_group_binding,
    radio4_group_binding,
    click_handler
  ];
}
class DiatonicNeighbors extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { mode: 0 });
  }
}
export {
  DiatonicNeighbors as D,
  title as t
};

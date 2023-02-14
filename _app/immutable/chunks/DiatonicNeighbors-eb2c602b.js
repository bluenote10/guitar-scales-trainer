import { S as SvelteComponent, i as init, s as safe_not_equal, e as empty, b as insert_hydration, g as group_outros, t as transition_out, d as check_outros, f as transition_in, h as detach, L as compute_rest_props, M as assign, N as exclude_internal_props, v as binding_callbacks, D as create_slot, G as update_slot_base, H as get_all_dirty_from_scope, I as get_slot_changes, k as element, l as claim_element, m as children, O as set_attributes, P as get_spread_update, Q as add_render_callback, F as append_hydration, R as select_options, T as select_option, U as listen, C as noop, K as destroy_each, V as run_all, q as text, r as claim_text, u as set_data, W as bubble, X as select_value, x as create_component, y as claim_component, z as mount_component, A as destroy_component, n as attr, Y as bind, Z as add_flush_callback } from "./index-d19db849.js";
import { c as classNames, a as genRandom3NPSScaleNeighborPair, b as genRandom3NPSScaleCircleOfFifthsPair, T as TaskDescription, F as Fretboard } from "./index-d82731cf.js";
import { I as InlineTask } from "./InlineTask-cb3db1b4.js";
function create_else_block$2(ctx) {
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
function create_if_block$2(ctx) {
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
function create_fragment$2(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$2, create_else_block$2];
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
function instance$2($$self, $$props, $$invalidate) {
  let labelClass;
  const omit_props_names = ["color", "defaultClass", "show"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { color = "gray" } = $$props;
  let { defaultClass = "text-sm font-medium block" } = $$props;
  let { show = true } = $$props;
  let node;
  const colorClasses = {
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
    $$invalidate(2, labelClass = classNames(defaultClass, colorClasses[color], $$props.class));
  };
  $$props = exclude_internal_props($$props);
  return [
    show,
    node,
    labelClass,
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
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { color: 4, defaultClass: 5, show: 0 });
  }
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[0] = list[i].value;
  child_ctx[16] = list[i].name;
  return child_ctx;
}
function create_if_block$1(ctx) {
  let option;
  let t;
  return {
    c() {
      option = element("option");
      t = text(
        /*placeholder*/
        ctx[2]
      );
      this.h();
    },
    l(nodes) {
      option = claim_element(nodes, "OPTION", {});
      var option_nodes = children(option);
      t = claim_text(
        option_nodes,
        /*placeholder*/
        ctx[2]
      );
      option_nodes.forEach(detach);
      this.h();
    },
    h() {
      option.disabled = true;
      option.selected = true;
      option.__value = "";
      option.value = option.__value;
    },
    m(target, anchor) {
      insert_hydration(target, option, anchor);
      append_hydration(option, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*placeholder*/
      4)
        set_data(
          t,
          /*placeholder*/
          ctx2[2]
        );
    },
    d(detaching) {
      if (detaching)
        detach(option);
    }
  };
}
function create_else_block$1(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[10].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[9],
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
        512)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[9],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[9]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[9],
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
function create_each_block(ctx) {
  let option;
  let t_value = (
    /*name*/
    ctx[16] + ""
  );
  let t;
  let option_value_value;
  return {
    c() {
      option = element("option");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      option = claim_element(nodes, "OPTION", {});
      var option_nodes = children(option);
      t = claim_text(option_nodes, t_value);
      option_nodes.forEach(detach);
      this.h();
    },
    h() {
      option.__value = option_value_value = /*value*/
      ctx[0];
      option.value = option.__value;
    },
    m(target, anchor) {
      insert_hydration(target, option, anchor);
      append_hydration(option, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*items*/
      2 && t_value !== (t_value = /*name*/
      ctx2[16] + ""))
        set_data(t, t_value);
      if (dirty & /*items*/
      2 && option_value_value !== (option_value_value = /*value*/
      ctx2[0])) {
        option.__value = option_value_value;
        option.value = option.__value;
      }
    },
    d(detaching) {
      if (detaching)
        detach(option);
    }
  };
}
function create_fragment$1(ctx) {
  let select;
  let if_block_anchor;
  let mounted;
  let dispose;
  let if_block = (
    /*placeholder*/
    ctx[2] && create_if_block$1(ctx)
  );
  let each_value = (
    /*items*/
    ctx[1]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  let each_1_else = null;
  if (!each_value.length) {
    each_1_else = create_else_block$1(ctx);
  }
  let select_levels = [
    /*$$restProps*/
    ctx[4],
    { class: (
      /*selectClass*/
      ctx[3]
    ) }
  ];
  let select_data = {};
  for (let i = 0; i < select_levels.length; i += 1) {
    select_data = assign(select_data, select_levels[i]);
  }
  return {
    c() {
      select = element("select");
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      if (each_1_else) {
        each_1_else.c();
      }
      this.h();
    },
    l(nodes) {
      select = claim_element(nodes, "SELECT", { class: true });
      var select_nodes = children(select);
      if (if_block)
        if_block.l(select_nodes);
      if_block_anchor = empty();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(select_nodes);
      }
      if (each_1_else) {
        each_1_else.l(select_nodes);
      }
      select_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(select, select_data);
      if (
        /*value*/
        ctx[0] === void 0
      )
        add_render_callback(() => (
          /*select_change_handler*/
          ctx[14].call(select)
        ));
    },
    m(target, anchor) {
      insert_hydration(target, select, anchor);
      if (if_block)
        if_block.m(select, null);
      append_hydration(select, if_block_anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(select, null);
      }
      if (each_1_else) {
        each_1_else.m(select, null);
      }
      (select_data.multiple ? select_options : select_option)(select, select_data.value);
      if (select.autofocus)
        select.focus();
      select_option(
        select,
        /*value*/
        ctx[0]
      );
      if (!mounted) {
        dispose = [
          listen(
            select,
            "change",
            /*select_change_handler*/
            ctx[14]
          ),
          listen(
            select,
            "change",
            /*change_handler*/
            ctx[11]
          ),
          listen(
            select,
            "contextmenu",
            /*contextmenu_handler*/
            ctx[12]
          ),
          listen(
            select,
            "input",
            /*input_handler*/
            ctx[13]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (
        /*placeholder*/
        ctx2[2]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          if_block.m(select, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty & /*items, $$scope*/
      514) {
        each_value = /*items*/
        ctx2[1];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(select, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
        if (!each_value.length && each_1_else) {
          each_1_else.p(ctx2, dirty);
        } else if (!each_value.length) {
          each_1_else = create_else_block$1(ctx2);
          each_1_else.c();
          transition_in(each_1_else, 1);
          each_1_else.m(select, null);
        } else if (each_1_else) {
          group_outros();
          transition_out(each_1_else, 1, 1, () => {
            each_1_else = null;
          });
          check_outros();
        }
      }
      set_attributes(select, select_data = get_spread_update(select_levels, [
        dirty & /*$$restProps*/
        16 && /*$$restProps*/
        ctx2[4],
        { class: (
          /*selectClass*/
          ctx2[3]
        ) }
      ]));
      if (dirty & /*$$restProps, selectClass*/
      24 && "value" in select_data)
        (select_data.multiple ? select_options : select_option)(select, select_data.value);
      if (dirty & /*value, items*/
      3) {
        select_option(
          select,
          /*value*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(select);
      if (if_block)
        if_block.d();
      destroy_each(each_blocks, detaching);
      if (each_1_else)
        each_1_else.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
const common = "block w-full";
function instance$1($$self, $$props, $$invalidate) {
  const omit_props_names = [
    "items",
    "value",
    "placeholder",
    "underline",
    "size",
    "defaultClass",
    "underlineClass"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { items = [] } = $$props;
  let { value } = $$props;
  let { placeholder = "Choose option ..." } = $$props;
  let { underline = false } = $$props;
  let { size = "md" } = $$props;
  let { defaultClass = "text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" } = $$props;
  let { underlineClass = "text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" } = $$props;
  const sizes = {
    sm: "text-sm p-2",
    md: "text-sm p-2.5",
    lg: "text-base py-3 px-4"
  };
  let selectClass;
  function change_handler(event) {
    bubble.call(this, $$self, event);
  }
  function contextmenu_handler(event) {
    bubble.call(this, $$self, event);
  }
  function input_handler(event) {
    bubble.call(this, $$self, event);
  }
  function select_change_handler() {
    value = select_value(this);
    $$invalidate(0, value);
    $$invalidate(1, items);
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("items" in $$new_props)
      $$invalidate(1, items = $$new_props.items);
    if ("value" in $$new_props)
      $$invalidate(0, value = $$new_props.value);
    if ("placeholder" in $$new_props)
      $$invalidate(2, placeholder = $$new_props.placeholder);
    if ("underline" in $$new_props)
      $$invalidate(5, underline = $$new_props.underline);
    if ("size" in $$new_props)
      $$invalidate(6, size = $$new_props.size);
    if ("defaultClass" in $$new_props)
      $$invalidate(7, defaultClass = $$new_props.defaultClass);
    if ("underlineClass" in $$new_props)
      $$invalidate(8, underlineClass = $$new_props.underlineClass);
    if ("$$scope" in $$new_props)
      $$invalidate(9, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(3, selectClass = classNames(common, underline ? underlineClass : defaultClass, sizes[size], underline && "!px-0", $$restProps.class));
  };
  return [
    value,
    items,
    placeholder,
    selectClass,
    $$restProps,
    underline,
    size,
    defaultClass,
    underlineClass,
    $$scope,
    slots,
    change_handler,
    contextmenu_handler,
    input_handler,
    select_change_handler
  ];
}
class Select extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      items: 1,
      value: 0,
      placeholder: 2,
      underline: 5,
      size: 6,
      defaultClass: 7,
      underlineClass: 8
    });
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
function create_default_slot_1(ctx) {
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
      $$slots: { default: [create_default_slot_1] },
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
      67) {
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
function create_default_slot(ctx) {
  let t;
  let select;
  let updating_value;
  let current;
  function select_value_binding(value) {
    ctx[5](value);
  }
  let select_props = {
    class: "mt-2",
    items: (
      /*revealedStringsSelectOptions*/
      ctx[3]
    )
  };
  if (
    /*numRevealedStrings*/
    ctx[2] !== void 0
  ) {
    select_props.value = /*numRevealedStrings*/
    ctx[2];
  }
  select = new Select({ props: select_props });
  binding_callbacks.push(() => bind(select, "value", select_value_binding));
  return {
    c() {
      t = text("Limit visible to number of strings\n      ");
      create_component(select.$$.fragment);
    },
    l(nodes) {
      t = claim_text(nodes, "Limit visible to number of strings\n      ");
      claim_component(select.$$.fragment, nodes);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
      mount_component(select, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const select_changes = {};
      if (!updating_value && dirty & /*numRevealedStrings*/
      4) {
        updating_value = true;
        select_changes.value = /*numRevealedStrings*/
        ctx2[2];
        add_flush_callback(() => updating_value = false);
      }
      select.$set(select_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(select.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(select.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(t);
      destroy_component(select, detaching);
    }
  };
}
function create_settings_slot(ctx) {
  let div;
  let label;
  let current;
  label = new Label({
    props: {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div = element("div");
      create_component(label.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { slot: true });
      var div_nodes = children(div);
      claim_component(label.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "slot", "settings");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(label, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const label_changes = {};
      if (dirty & /*$$scope, numRevealedStrings*/
      68) {
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
      if (detaching)
        detach(div);
      destroy_component(label);
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
      if (dirty & /*$$scope, qaPair, numRevealedStrings, mode*/
      71) {
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
  let revealedStringsSelectOptions = [{ value: 6, name: 6 }, { value: 5, name: 5 }, { value: 4, name: 4 }];
  generate();
  function generate() {
    $$invalidate(1, qaPair = mode == "direct_neighbors" ? genRandom3NPSScaleNeighborPair(maxFret) : genRandom3NPSScaleCircleOfFifthsPair(maxFret));
  }
  function select_value_binding(value) {
    numRevealedStrings = value;
    $$invalidate(2, numRevealedStrings);
  }
  $$self.$$set = ($$props2) => {
    if ("mode" in $$props2)
      $$invalidate(0, mode = $$props2.mode);
  };
  return [
    mode,
    qaPair,
    numRevealedStrings,
    revealedStringsSelectOptions,
    generate,
    select_value_binding
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

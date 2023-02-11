var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { S as SvelteComponent, i as init, s as safe_not_equal, D as create_slot, k as element, l as claim_element, m as children, h as detach, n as attr, b as insert_hydration, G as update_slot_base, H as get_all_dirty_from_scope, I as get_slot_changes, f as transition_in, t as transition_out, L as svg_element, e as empty, M as claim_svg_element, N as add_render_callback, F as append_hydration, O as add_resize_listener, C as noop, K as destroy_each, p as set_style, P as listen, Q as bubble } from "./index-949c6c01.js";
const TaskDescription_svelte_svelte_type_style_lang = "";
function create_fragment$4(ctx) {
  let p;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[1].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[0],
    null
  );
  return {
    c() {
      p = element("p");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      if (default_slot)
        default_slot.l(p_nodes);
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "class", "question svelte-1knkfc2");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      if (default_slot) {
        default_slot.m(p, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[0],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[0]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[0],
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
        detach(p);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class TaskDescription extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, {});
  }
}
function allDefined(array) {
  return array.every((x) => x != null);
}
function range(n) {
  return [...Array(n).keys()];
}
function assertUnreachable(x) {
  throw new Error("Didn't expect to get here");
}
function randChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}
function randRange(low, high) {
  return Math.floor(Math.random() * (high - low + 1)) + low;
}
function randTwoStrings() {
  return randChoice([
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5]
  ]);
}
function randRangeBiased(low, high) {
  const a = randRange(low, high);
  const b = randRange(low, high);
  return Math.min(a, b);
}
const SEMITONE_SCALE_FACTOR = 1.0594630943592953;
class Geometry {
  constructor(width, numStrings, numFrets) {
    __publicField(this, "height");
    __publicField(this, "sumFretFactors");
    this.width = width;
    this.numStrings = numStrings;
    this.numFrets = numFrets;
    const heightRatio = 0.064 / 0.48 * (numStrings / 6);
    this.height = width * heightRatio;
    const sumFretFactors = [0];
    let sumFretFactor = 0;
    for (let i = 0; i <= numFrets; ++i) {
      sumFretFactor += SEMITONE_SCALE_FACTOR ** -i;
      sumFretFactors.push(sumFretFactor);
    }
    this.sumFretFactors = sumFretFactors;
  }
  getStringY(i) {
    return this.height * (i + 0.5) / this.numStrings;
  }
  getFretX(i) {
    return this.sumFretFactors[i] / this.sumFretFactors[this.sumFretFactors.length - 1] * this.width;
  }
  getFingerX(i) {
    return 0.5 * (this.getFretX(i - 1) + this.getFretX(i));
  }
}
const Fretboard_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[15] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[18] = list[i];
  return child_ctx;
}
function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[10] = list[i];
  return child_ctx;
}
function get_each_context_3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[23] = list[i];
  return child_ctx;
}
function create_each_block_3(ctx) {
  let circle;
  let circle_cx_value;
  return {
    c() {
      circle = svg_element("circle");
      this.h();
    },
    l(nodes) {
      circle = claim_svg_element(nodes, "circle", { cx: true, cy: true, r: true, fill: true });
      children(circle).forEach(detach);
      this.h();
    },
    h() {
      attr(circle, "cx", circle_cx_value = /*geom*/
      ctx[2].getFingerX(
        /*centerInlay*/
        ctx[23]
      ));
      attr(
        circle,
        "cy",
        /*centerInlayY*/
        ctx[9]
      );
      attr(
        circle,
        "r",
        /*inlayRadius*/
        ctx[8]
      );
      attr(circle, "fill", "#FFF8DC");
    },
    m(target, anchor) {
      insert_hydration(target, circle, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*geom*/
      4 && circle_cx_value !== (circle_cx_value = /*geom*/
      ctx2[2].getFingerX(
        /*centerInlay*/
        ctx2[23]
      ))) {
        attr(circle, "cx", circle_cx_value);
      }
      if (dirty & /*centerInlayY*/
      512) {
        attr(
          circle,
          "cy",
          /*centerInlayY*/
          ctx2[9]
        );
      }
      if (dirty & /*inlayRadius*/
      256) {
        attr(
          circle,
          "r",
          /*inlayRadius*/
          ctx2[8]
        );
      }
    },
    d(detaching) {
      if (detaching)
        detach(circle);
    }
  };
}
function create_each_block_2(ctx) {
  let line;
  let line_x__value;
  let line_x__value_1;
  return {
    c() {
      line = svg_element("line");
      this.h();
    },
    l(nodes) {
      line = claim_svg_element(nodes, "line", {
        x1: true,
        y1: true,
        x2: true,
        y2: true,
        style: true
      });
      children(line).forEach(detach);
      this.h();
    },
    h() {
      attr(line, "x1", line_x__value = /*frets*/
      ctx[10]);
      attr(line, "y1", "0");
      attr(line, "x2", line_x__value_1 = /*frets*/
      ctx[10]);
      attr(
        line,
        "y2",
        /*maxY*/
        ctx[4]
      );
      set_style(line, "stroke", "#D7D7D7");
      set_style(line, "stroke-width", "3");
    },
    m(target, anchor) {
      insert_hydration(target, line, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*frets*/
      1024 && line_x__value !== (line_x__value = /*frets*/
      ctx2[10])) {
        attr(line, "x1", line_x__value);
      }
      if (dirty & /*frets*/
      1024 && line_x__value_1 !== (line_x__value_1 = /*frets*/
      ctx2[10])) {
        attr(line, "x2", line_x__value_1);
      }
      if (dirty & /*maxY*/
      16) {
        attr(
          line,
          "y2",
          /*maxY*/
          ctx2[4]
        );
      }
    },
    d(detaching) {
      if (detaching)
        detach(line);
    }
  };
}
function create_each_block_1(ctx) {
  let line;
  let line_y__value;
  let line_y__value_1;
  return {
    c() {
      line = svg_element("line");
      this.h();
    },
    l(nodes) {
      line = claim_svg_element(nodes, "line", {
        x1: true,
        y1: true,
        x2: true,
        y2: true,
        style: true
      });
      children(line).forEach(detach);
      this.h();
    },
    h() {
      attr(line, "x1", "0");
      attr(line, "y1", line_y__value = /*string*/
      ctx[18]);
      attr(
        line,
        "x2",
        /*maxX*/
        ctx[5]
      );
      attr(line, "y2", line_y__value_1 = /*string*/
      ctx[18]);
      set_style(line, "stroke", "#98817B");
      set_style(line, "stroke-width", "1");
    },
    m(target, anchor) {
      insert_hydration(target, line, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*strings*/
      64 && line_y__value !== (line_y__value = /*string*/
      ctx2[18])) {
        attr(line, "y1", line_y__value);
      }
      if (dirty & /*maxX*/
      32) {
        attr(
          line,
          "x2",
          /*maxX*/
          ctx2[5]
        );
      }
      if (dirty & /*strings*/
      64 && line_y__value_1 !== (line_y__value_1 = /*string*/
      ctx2[18])) {
        attr(line, "y2", line_y__value_1);
      }
    },
    d(detaching) {
      if (detaching)
        detach(line);
    }
  };
}
function create_each_block(ctx) {
  let circle0;
  let circle0_cx_value;
  let circle0_cy_value;
  let circle0_fill_value;
  let circle0_stroke_value;
  let circle1;
  let circle1_cx_value;
  let circle1_cy_value;
  let circle1_stroke_value;
  return {
    c() {
      circle0 = svg_element("circle");
      circle1 = svg_element("circle");
      this.h();
    },
    l(nodes) {
      circle0 = claim_svg_element(nodes, "circle", {
        class: true,
        cx: true,
        cy: true,
        r: true,
        fill: true,
        stroke: true
      });
      children(circle0).forEach(detach);
      circle1 = claim_svg_element(nodes, "circle", {
        cx: true,
        cy: true,
        r: true,
        stroke: true,
        fill: true,
        filter: true,
        "stroke-width": true
      });
      children(circle1).forEach(detach);
      this.h();
    },
    h() {
      attr(circle0, "class", "shadow svelte-cz2ahw");
      attr(circle0, "cx", circle0_cx_value = /*geom*/
      ctx[2].getFingerX(
        /*note*/
        ctx[15].fret
      ));
      attr(circle0, "cy", circle0_cy_value = /*geom*/
      ctx[2].getStringY(
        /*note*/
        ctx[15].string
      ));
      attr(
        circle0,
        "r",
        /*annotationsRadius*/
        ctx[7]
      );
      attr(circle0, "fill", circle0_fill_value = /*note*/
      ctx[15].color);
      attr(circle0, "stroke", circle0_stroke_value = /*note*/
      ctx[15].color);
      attr(circle1, "cx", circle1_cx_value = /*geom*/
      ctx[2].getFingerX(
        /*note*/
        ctx[15].fret
      ));
      attr(circle1, "cy", circle1_cy_value = /*geom*/
      ctx[2].getStringY(
        /*note*/
        ctx[15].string
      ));
      attr(
        circle1,
        "r",
        /*annotationsRadius*/
        ctx[7]
      );
      attr(circle1, "stroke", circle1_stroke_value = /*note*/
      ctx[15].color);
      attr(circle1, "fill", "none");
      attr(circle1, "filter", "url(#brightness-filter)");
      attr(circle1, "stroke-width", "1");
    },
    m(target, anchor) {
      insert_hydration(target, circle0, anchor);
      insert_hydration(target, circle1, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*geom, notes*/
      5 && circle0_cx_value !== (circle0_cx_value = /*geom*/
      ctx2[2].getFingerX(
        /*note*/
        ctx2[15].fret
      ))) {
        attr(circle0, "cx", circle0_cx_value);
      }
      if (dirty & /*geom, notes*/
      5 && circle0_cy_value !== (circle0_cy_value = /*geom*/
      ctx2[2].getStringY(
        /*note*/
        ctx2[15].string
      ))) {
        attr(circle0, "cy", circle0_cy_value);
      }
      if (dirty & /*annotationsRadius*/
      128) {
        attr(
          circle0,
          "r",
          /*annotationsRadius*/
          ctx2[7]
        );
      }
      if (dirty & /*notes*/
      1 && circle0_fill_value !== (circle0_fill_value = /*note*/
      ctx2[15].color)) {
        attr(circle0, "fill", circle0_fill_value);
      }
      if (dirty & /*notes*/
      1 && circle0_stroke_value !== (circle0_stroke_value = /*note*/
      ctx2[15].color)) {
        attr(circle0, "stroke", circle0_stroke_value);
      }
      if (dirty & /*geom, notes*/
      5 && circle1_cx_value !== (circle1_cx_value = /*geom*/
      ctx2[2].getFingerX(
        /*note*/
        ctx2[15].fret
      ))) {
        attr(circle1, "cx", circle1_cx_value);
      }
      if (dirty & /*geom, notes*/
      5 && circle1_cy_value !== (circle1_cy_value = /*geom*/
      ctx2[2].getStringY(
        /*note*/
        ctx2[15].string
      ))) {
        attr(circle1, "cy", circle1_cy_value);
      }
      if (dirty & /*annotationsRadius*/
      128) {
        attr(
          circle1,
          "r",
          /*annotationsRadius*/
          ctx2[7]
        );
      }
      if (dirty & /*notes*/
      1 && circle1_stroke_value !== (circle1_stroke_value = /*note*/
      ctx2[15].color)) {
        attr(circle1, "stroke", circle1_stroke_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(circle0);
      if (detaching)
        detach(circle1);
    }
  };
}
function create_fragment$3(ctx) {
  let div;
  let svg;
  let rect;
  let filter;
  let feComponentTransfer;
  let feFuncR;
  let feFuncG;
  let feFuncB;
  let circle0;
  let circle0_cx_value;
  let circle0_cy_value;
  let circle1;
  let circle1_cx_value;
  let circle1_cy_value;
  let each1_anchor;
  let each2_anchor;
  let div_resize_listener;
  let each_value_3 = (
    /*centerInlays*/
    ctx[11]
  );
  let each_blocks_3 = [];
  for (let i = 0; i < each_value_3.length; i += 1) {
    each_blocks_3[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
  }
  let each_value_2 = (
    /*frets*/
    ctx[10]
  );
  let each_blocks_2 = [];
  for (let i = 0; i < each_value_2.length; i += 1) {
    each_blocks_2[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }
  let each_value_1 = (
    /*strings*/
    ctx[6]
  );
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  let each_value = (
    /*notes*/
    ctx[0]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      svg = svg_element("svg");
      rect = svg_element("rect");
      filter = svg_element("filter");
      feComponentTransfer = svg_element("feComponentTransfer");
      feFuncR = svg_element("feFuncR");
      feFuncG = svg_element("feFuncG");
      feFuncB = svg_element("feFuncB");
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        each_blocks_3[i].c();
      }
      circle0 = svg_element("circle");
      circle1 = svg_element("circle");
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].c();
      }
      each1_anchor = empty();
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      each2_anchor = empty();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      svg = claim_svg_element(div_nodes, "svg", {
        class: true,
        width: true,
        height: true,
        xmlns: true
      });
      var svg_nodes = children(svg);
      rect = claim_svg_element(svg_nodes, "rect", { width: true, height: true, fill: true });
      children(rect).forEach(detach);
      filter = claim_svg_element(svg_nodes, "filter", { id: true });
      var filter_nodes = children(filter);
      feComponentTransfer = claim_svg_element(filter_nodes, "feComponentTransfer", {});
      var feComponentTransfer_nodes = children(feComponentTransfer);
      feFuncR = claim_svg_element(feComponentTransfer_nodes, "feFuncR", { type: true, slope: true });
      children(feFuncR).forEach(detach);
      feFuncG = claim_svg_element(feComponentTransfer_nodes, "feFuncG", { type: true, slope: true });
      children(feFuncG).forEach(detach);
      feFuncB = claim_svg_element(feComponentTransfer_nodes, "feFuncB", { type: true, slope: true });
      children(feFuncB).forEach(detach);
      feComponentTransfer_nodes.forEach(detach);
      filter_nodes.forEach(detach);
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        each_blocks_3[i].l(svg_nodes);
      }
      circle0 = claim_svg_element(svg_nodes, "circle", { cx: true, cy: true, r: true, fill: true });
      children(circle0).forEach(detach);
      circle1 = claim_svg_element(svg_nodes, "circle", { cx: true, cy: true, r: true, fill: true });
      children(circle1).forEach(detach);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].l(svg_nodes);
      }
      each1_anchor = empty();
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].l(svg_nodes);
      }
      each2_anchor = empty();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(svg_nodes);
      }
      svg_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(rect, "width", "100%");
      attr(rect, "height", "100%");
      attr(rect, "fill", "#15161B");
      attr(feFuncR, "type", "linear");
      attr(feFuncR, "slope", "2");
      attr(feFuncG, "type", "linear");
      attr(feFuncG, "slope", "2");
      attr(feFuncB, "type", "linear");
      attr(feFuncB, "slope", "2");
      attr(filter, "id", "brightness-filter");
      attr(circle0, "cx", circle0_cx_value = /*geom*/
      ctx[2].getFingerX(12));
      attr(circle0, "cy", circle0_cy_value = 0.25 * /*height*/
      ctx[3]);
      attr(
        circle0,
        "r",
        /*inlayRadius*/
        ctx[8]
      );
      attr(circle0, "fill", "#FFF8DC");
      attr(circle1, "cx", circle1_cx_value = /*geom*/
      ctx[2].getFingerX(12));
      attr(circle1, "cy", circle1_cy_value = 0.75 * /*height*/
      ctx[3]);
      attr(
        circle1,
        "r",
        /*inlayRadius*/
        ctx[8]
      );
      attr(circle1, "fill", "#FFF8DC");
      attr(svg, "class", "svg svelte-cz2ahw");
      attr(
        svg,
        "width",
        /*width*/
        ctx[1]
      );
      attr(
        svg,
        "height",
        /*height*/
        ctx[3]
      );
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(div, "class", "frame svelte-cz2ahw");
      add_render_callback(() => (
        /*div_elementresize_handler*/
        ctx[14].call(div)
      ));
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, svg);
      append_hydration(svg, rect);
      append_hydration(svg, filter);
      append_hydration(filter, feComponentTransfer);
      append_hydration(feComponentTransfer, feFuncR);
      append_hydration(feComponentTransfer, feFuncG);
      append_hydration(feComponentTransfer, feFuncB);
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        each_blocks_3[i].m(svg, null);
      }
      append_hydration(svg, circle0);
      append_hydration(svg, circle1);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].m(svg, null);
      }
      append_hydration(svg, each1_anchor);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(svg, null);
      }
      append_hydration(svg, each2_anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(svg, null);
      }
      div_resize_listener = add_resize_listener(
        div,
        /*div_elementresize_handler*/
        ctx[14].bind(div)
      );
    },
    p(ctx2, [dirty]) {
      if (dirty & /*geom, centerInlays, centerInlayY, inlayRadius*/
      2820) {
        each_value_3 = /*centerInlays*/
        ctx2[11];
        let i;
        for (i = 0; i < each_value_3.length; i += 1) {
          const child_ctx = get_each_context_3(ctx2, each_value_3, i);
          if (each_blocks_3[i]) {
            each_blocks_3[i].p(child_ctx, dirty);
          } else {
            each_blocks_3[i] = create_each_block_3(child_ctx);
            each_blocks_3[i].c();
            each_blocks_3[i].m(svg, circle0);
          }
        }
        for (; i < each_blocks_3.length; i += 1) {
          each_blocks_3[i].d(1);
        }
        each_blocks_3.length = each_value_3.length;
      }
      if (dirty & /*geom*/
      4 && circle0_cx_value !== (circle0_cx_value = /*geom*/
      ctx2[2].getFingerX(12))) {
        attr(circle0, "cx", circle0_cx_value);
      }
      if (dirty & /*height*/
      8 && circle0_cy_value !== (circle0_cy_value = 0.25 * /*height*/
      ctx2[3])) {
        attr(circle0, "cy", circle0_cy_value);
      }
      if (dirty & /*inlayRadius*/
      256) {
        attr(
          circle0,
          "r",
          /*inlayRadius*/
          ctx2[8]
        );
      }
      if (dirty & /*geom*/
      4 && circle1_cx_value !== (circle1_cx_value = /*geom*/
      ctx2[2].getFingerX(12))) {
        attr(circle1, "cx", circle1_cx_value);
      }
      if (dirty & /*height*/
      8 && circle1_cy_value !== (circle1_cy_value = 0.75 * /*height*/
      ctx2[3])) {
        attr(circle1, "cy", circle1_cy_value);
      }
      if (dirty & /*inlayRadius*/
      256) {
        attr(
          circle1,
          "r",
          /*inlayRadius*/
          ctx2[8]
        );
      }
      if (dirty & /*frets, maxY*/
      1040) {
        each_value_2 = /*frets*/
        ctx2[10];
        let i;
        for (i = 0; i < each_value_2.length; i += 1) {
          const child_ctx = get_each_context_2(ctx2, each_value_2, i);
          if (each_blocks_2[i]) {
            each_blocks_2[i].p(child_ctx, dirty);
          } else {
            each_blocks_2[i] = create_each_block_2(child_ctx);
            each_blocks_2[i].c();
            each_blocks_2[i].m(svg, each1_anchor);
          }
        }
        for (; i < each_blocks_2.length; i += 1) {
          each_blocks_2[i].d(1);
        }
        each_blocks_2.length = each_value_2.length;
      }
      if (dirty & /*strings, maxX*/
      96) {
        each_value_1 = /*strings*/
        ctx2[6];
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
          } else {
            each_blocks_1[i] = create_each_block_1(child_ctx);
            each_blocks_1[i].c();
            each_blocks_1[i].m(svg, each2_anchor);
          }
        }
        for (; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].d(1);
        }
        each_blocks_1.length = each_value_1.length;
      }
      if (dirty & /*geom, notes, annotationsRadius*/
      133) {
        each_value = /*notes*/
        ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(svg, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & /*width*/
      2) {
        attr(
          svg,
          "width",
          /*width*/
          ctx2[1]
        );
      }
      if (dirty & /*height*/
      8) {
        attr(
          svg,
          "height",
          /*height*/
          ctx2[3]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks_3, detaching);
      destroy_each(each_blocks_2, detaching);
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
      div_resize_listener();
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let centerInlayY;
  let inlayRadius;
  let annotationsRadius;
  let geom;
  let strings;
  let frets;
  let height;
  let maxX;
  let maxY;
  let { numFrets = 24 } = $$props;
  let { numStrings = 6 } = $$props;
  let { notes = [] } = $$props;
  let width = 300;
  const centerInlays = [3, 5, 7, 9, 15, 17, 19, 21];
  function div_elementresize_handler() {
    width = this.clientWidth;
    $$invalidate(1, width);
  }
  $$self.$$set = ($$props2) => {
    if ("numFrets" in $$props2)
      $$invalidate(12, numFrets = $$props2.numFrets);
    if ("numStrings" in $$props2)
      $$invalidate(13, numStrings = $$props2.numStrings);
    if ("notes" in $$props2)
      $$invalidate(0, notes = $$props2.notes);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*width, numStrings, numFrets*/
    12290) {
      $$invalidate(2, geom = new Geometry(width, numStrings, numFrets));
    }
    if ($$self.$$.dirty & /*geom*/
    4) {
      $$invalidate(3, height = geom.height);
    }
    if ($$self.$$.dirty & /*height*/
    8) {
      $$invalidate(9, centerInlayY = height / 2);
    }
    if ($$self.$$.dirty & /*height, numStrings*/
    8200) {
      $$invalidate(8, inlayRadius = height / numStrings * 0.5 * 0.6);
    }
    if ($$self.$$.dirty & /*height, numStrings*/
    8200) {
      $$invalidate(7, annotationsRadius = height / numStrings * 0.5 * 0.8);
    }
    if ($$self.$$.dirty & /*numStrings, geom*/
    8196) {
      $$invalidate(6, strings = range(numStrings).map((i) => geom.getStringY(i)));
    }
    if ($$self.$$.dirty & /*numFrets, geom*/
    4100) {
      $$invalidate(10, frets = range(numFrets).map((i) => geom.getFretX(i + 1)));
    }
    if ($$self.$$.dirty & /*geom*/
    4) {
      $$invalidate(5, maxX = geom.width);
    }
    if ($$self.$$.dirty & /*geom*/
    4) {
      $$invalidate(4, maxY = geom.height);
    }
  };
  return [
    notes,
    width,
    geom,
    height,
    maxY,
    maxX,
    strings,
    annotationsRadius,
    inlayRadius,
    centerInlayY,
    frets,
    centerInlays,
    numFrets,
    numStrings,
    div_elementresize_handler
  ];
}
class Fretboard extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { numFrets: 12, numStrings: 13, notes: 0 });
  }
}
function defaultGuitarTuning() {
  return [
    64,
    // E4
    59,
    // B3
    55,
    // G3
    50,
    // D3
    45,
    // A2
    40
    // E2
  ];
}
var Mode = /* @__PURE__ */ ((Mode2) => {
  Mode2["ionian"] = "ionian";
  Mode2["dorian"] = "dorian";
  Mode2["phrygian"] = "phrygian";
  Mode2["lydian"] = "lydian";
  Mode2["mixolydian"] = "mixolydian";
  Mode2["aeolian"] = "aeolian";
  Mode2["locrian"] = "locrian";
  return Mode2;
})(Mode || {});
const ALL_MODES = Object.values(Mode);
function getNeighborMode(mode, direction) {
  if (direction == "up") {
    switch (mode) {
      case "ionian":
        return ["dorian", 2];
      case "dorian":
        return ["phrygian", 2];
      case "phrygian":
        return ["lydian", 1];
      case "lydian":
        return ["mixolydian", 2];
      case "mixolydian":
        return ["aeolian", 2];
      case "aeolian":
        return ["locrian", 2];
      case "locrian":
        return ["ionian", 1];
      default:
        assertUnreachable();
    }
  } else if (direction == "down") {
    switch (mode) {
      case "ionian":
        return ["locrian", -1];
      case "dorian":
        return ["ionian", -2];
      case "phrygian":
        return ["dorian", -2];
      case "lydian":
        return ["phrygian", -1];
      case "mixolydian":
        return ["lydian", -2];
      case "aeolian":
        return ["mixolydian", -2];
      case "locrian":
        return ["aeolian", -2];
      default:
        assertUnreachable();
    }
  } else {
    assertUnreachable();
  }
}
function getNeighborModeMultiSteps(mode, direction, steps) {
  let totalDelta = 0;
  for (let i = 0; i < steps; ++i) {
    const [nextMode, delta] = getNeighborMode(mode, direction);
    mode = nextMode;
    totalDelta += delta;
  }
  return [mode, totalDelta];
}
function getCircleOfFifthsNeighborMode(mode, direction) {
  if (direction == "up") {
    switch (mode) {
      case "ionian":
        return ["lydian", 0];
      case "dorian":
        return ["mixolydian", 0];
      case "phrygian":
        return ["aeolian", 0];
      case "lydian":
        return ["locrian", 1];
      case "mixolydian":
        return ["ionian", 0];
      case "aeolian":
        return ["dorian", 0];
      case "locrian":
        return ["phrygian", 0];
      default:
        assertUnreachable();
    }
  } else if (direction == "down") {
    switch (mode) {
      case "ionian":
        return ["mixolydian", 0];
      case "dorian":
        return ["aeolian", 0];
      case "phrygian":
        return ["locrian", 0];
      case "lydian":
        return ["ionian", 0];
      case "mixolydian":
        return ["dorian", 0];
      case "aeolian":
        return ["phrygian", 0];
      case "locrian":
        return ["lydian", -1];
      default:
        assertUnreachable();
    }
  } else {
    assertUnreachable();
  }
}
function getPitchOffset(mode) {
  switch (mode) {
    case "ionian":
      return 0;
    case "dorian":
      return 2;
    case "phrygian":
      return 4;
    case "lydian":
      return 5;
    case "mixolydian":
      return 7;
    case "aeolian":
      return 9;
    case "locrian":
      return 11;
    default:
      assertUnreachable();
  }
}
function pitchOffsetToColor(offset) {
  offset = offset % 12;
  switch (offset) {
    case 0:
      return "var(--color-blue)";
    case 1:
      return "var(--color-yellow)";
    case 2:
      return "var(--color-orange)";
    case 3:
      return "var(--color-tan)";
    case 4:
      return "var(--color-red)";
    case 5:
      return "var(--color-light-green)";
    case 6:
      return "var(--color-cyan)";
    case 7:
      return "var(--color-light-blue)";
    case 8:
      return "var(--color-pink)";
    case 9:
      return "var(--color-purple)";
    case 10:
      return "var(--color-green)";
    case 11:
      return "var(--color-brown)";
  }
  throw new Error("Didn't expect to get here");
}
function getNextNeighborLocator(locator, direction) {
  const [neighborMode, pitchDelta] = getNeighborMode(locator.mode, direction);
  return { baseFret: locator.baseFret + pitchDelta, mode: neighborMode };
}
function getNextCircleOfFifthsLocator(locator, direction) {
  const [neighborMode, pitchDelta] = getCircleOfFifthsNeighborMode(locator.mode, direction);
  return { baseFret: locator.baseFret + pitchDelta, mode: neighborMode };
}
function genScale3NPS(locator, minFret, maxFret, tuning = defaultGuitarTuning()) {
  let curPitch = tuning[tuning.length - 1] + locator.baseFret;
  let curMode = locator.mode;
  const notes = [];
  for (let string = tuning.length - 1; string >= 0; --string) {
    for (let i = 0; i < 3; ++i) {
      const fret = getFretOnString(curPitch, string, tuning);
      if (fret < minFret || fret > maxFret) {
        return void 0;
      }
      notes.push({
        string,
        fret,
        mode: curMode,
        color: pitchOffsetToColor(getPitchOffset(curMode))
      });
      const [nxtMode, pitchDelta] = getNeighborMode(curMode, "up");
      curPitch += pitchDelta;
      curMode = nxtMode;
    }
  }
  return notes;
}
function genRandom3NPSScaleNeighborPair(maxFret) {
  const minFret = 1;
  for (; ; ) {
    const questionLocator = {
      baseFret: randRangeBiased(minFret, maxFret),
      mode: randChoice(ALL_MODES)
    };
    const questionsNotes = genScale3NPS(questionLocator, minFret, maxFret);
    if (questionsNotes == null) {
      continue;
    }
    const direction = randChoice(["up", "down"]);
    const answerLocator = getNextNeighborLocator(questionLocator, direction);
    const answerNotes = genScale3NPS(answerLocator, minFret, maxFret);
    if (answerNotes != null) {
      return { question: questionsNotes, answer: answerNotes, direction };
    }
  }
}
function genRandom3NPSScale(maxFret) {
  const minFret = 1;
  for (; ; ) {
    const locator = {
      baseFret: randRangeBiased(minFret, maxFret),
      mode: randChoice(ALL_MODES)
    };
    const notes = genScale3NPS(locator, minFret, maxFret);
    if (notes != null) {
      return notes;
    }
  }
}
function filterToStrings(notes, stringsToKeep) {
  return notes.filter((a) => stringsToKeep.includes(a.string));
}
function filterToTwoRandomStrings(notes) {
  return filterToStrings(notes, randTwoStrings());
}
function genRandom3NPSScaleCircleOfFithsPair(maxFret) {
  const minFret = 1;
  for (; ; ) {
    const questionLocator = {
      baseFret: randRangeBiased(minFret, maxFret),
      mode: randChoice(ALL_MODES)
    };
    const questionsNotes = genScale3NPS(questionLocator, minFret, maxFret);
    if (questionsNotes == null) {
      continue;
    }
    const direction = randChoice(["up", "down"]);
    const answerLocator = getNextCircleOfFifthsLocator(questionLocator, direction);
    const answerNotes = genScale3NPS(answerLocator, minFret, maxFret);
    if (answerNotes != null) {
      return { question: questionsNotes, answer: answerNotes, direction };
    }
  }
}
function genRandom3NPSTwoStringsUpDownSequence(maxFret) {
  const minFret = 1;
  for (; ; ) {
    const direction = randChoice(["up", "down"]);
    const twoStrings = randTwoStrings();
    let locator = {
      baseFret: randRange(minFret, maxFret),
      mode: randChoice(ALL_MODES)
    };
    const allLocators = [locator];
    for (let i = 0; i < 7; ++i) {
      locator = getNextNeighborLocator(locator, direction);
      allLocators.push(locator);
    }
    const sequence = allLocators.map((loc) => genScale3NPS(loc, minFret, maxFret));
    if (allDefined(sequence)) {
      return {
        sequence: sequence.map((a) => filterToStrings(a, twoStrings)),
        direction
      };
    }
  }
}
function genRandom3NPSIntervalsUpDownSequence(maxFret, interval) {
  const minFret = 1;
  for (; ; ) {
    const direction = randChoice(["up", "down"]);
    const locator = {
      baseFret: randRange(minFret, maxFret),
      mode: randChoice(ALL_MODES)
    };
    const notes = genScale3NPS(locator, minFret, maxFret);
    if (notes == null) {
      continue;
    }
    const baseNotes = direction === "up" ? notes.slice(0, -3) : notes.slice(3).reverse();
    const sequence = baseNotes.map((note) => [note, getIntervalNote(note, interval, direction)]);
    if (allValid(sequence, minFret, maxFret)) {
      return { sequence, direction };
    }
  }
}
var Interval = /* @__PURE__ */ ((Interval2) => {
  Interval2[Interval2["third"] = 3] = "third";
  Interval2[Interval2["fifth"] = 5] = "fifth";
  Interval2[Interval2["octave"] = 8] = "octave";
  return Interval2;
})(Interval || {});
function getIntervalNote(note, interval, direction) {
  const [mode, delta] = getNeighborModeMultiSteps(note.mode, direction, interval - 1);
  const string = direction === "up" ? note.string - 1 : note.string + 1;
  if (string < 0 || string > 5) {
    throw new RangeError(`String index ${string} out of bounds`);
  } else {
    const fret = getFretOnString(getPitch(note) + delta, string);
    return { string, fret, mode, color: pitchOffsetToColor(getPitchOffset(mode)) };
  }
}
function getPitch(note, tuning = defaultGuitarTuning()) {
  return tuning[note.string] + note.fret;
}
function getFretOnString(pitch, stringIdx, tuning = defaultGuitarTuning()) {
  return pitch - tuning[stringIdx];
}
function allValid(sequence, minFret, maxFret) {
  for (const notes of sequence) {
    for (const note of notes) {
      if (note.fret < minFret || note.fret > maxFret) {
        return false;
      }
    }
  }
  return true;
}
const Button_svelte_svelte_type_style_lang = "";
function create_fragment$2(ctx) {
  let button;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[2].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[1],
    null
  );
  return {
    c() {
      button = element("button");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      if (default_slot)
        default_slot.l(button_nodes);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "button svelte-jo4c4i");
      button.disabled = /*disabled*/
      ctx[0];
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      if (default_slot) {
        default_slot.m(button, null);
      }
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[3]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        2)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[1],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[1]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[1],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*disabled*/
      1) {
        button.disabled = /*disabled*/
        ctx2[0];
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
        detach(button);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { disabled = false } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("disabled" in $$props2)
      $$invalidate(0, disabled = $$props2.disabled);
    if ("$$scope" in $$props2)
      $$invalidate(1, $$scope = $$props2.$$scope);
  };
  return [disabled, $$scope, slots, click_handler];
}
class Button extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { disabled: 0 });
  }
}
const Center_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let div;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[2].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[1],
    null
  );
  return {
    c() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "outer svelte-1567fvx");
      set_style(div, "--gap", `${/*gap*/
      ctx[0]}px`);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        2)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[1],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[1]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[1],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (dirty & /*gap*/
      1) {
        set_style(div, "--gap", `${/*gap*/
        ctx2[0]}px`);
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
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { gap = 10 } = $$props;
  $$self.$$set = ($$props2) => {
    if ("gap" in $$props2)
      $$invalidate(0, gap = $$props2.gap);
    if ("$$scope" in $$props2)
      $$invalidate(1, $$scope = $$props2.$$scope);
  };
  return [gap, $$scope, slots];
}
class Center extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { gap: 0 });
  }
}
const Kbd_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let kbd;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[2].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[1],
    null
  );
  return {
    c() {
      kbd = element("kbd");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      kbd = claim_element(nodes, "KBD", { class: true });
      var kbd_nodes = children(kbd);
      if (default_slot)
        default_slot.l(kbd_nodes);
      kbd_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(kbd, "class", "kbd svelte-1pykyw7");
      set_style(kbd, "--fontSize", `${/*fontSize*/
      ctx[0]}px`);
    },
    m(target, anchor) {
      insert_hydration(target, kbd, anchor);
      if (default_slot) {
        default_slot.m(kbd, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        2)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[1],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[1]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[1],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (dirty & /*fontSize*/
      1) {
        set_style(kbd, "--fontSize", `${/*fontSize*/
        ctx2[0]}px`);
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
        detach(kbd);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { fontSize } = $$props;
  $$self.$$set = ($$props2) => {
    if ("fontSize" in $$props2)
      $$invalidate(0, fontSize = $$props2.fontSize);
    if ("$$scope" in $$props2)
      $$invalidate(1, $$scope = $$props2.$$scope);
  };
  return [fontSize, $$scope, slots];
}
class Kbd extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { fontSize: 0 });
  }
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var shortcut = function(node, params) {
  if (!(params === null || params === void 0 ? void 0 : params.trigger))
    throw new Error("@svelte-put/shortcut requires a parameter object with a `trigger` property");
  var _a = params.enabled, enabled = _a === void 0 ? true : _a, trigger = params.trigger, _b = params.type, type = _b === void 0 ? "keydown" : _b;
  var handler = function(event) {
    var normalizedTriggers = Array.isArray(trigger) ? trigger : [trigger];
    var modifiedMap = {
      alt: event.altKey,
      ctrl: event.ctrlKey,
      shift: event.shiftKey,
      meta: event.metaKey
    };
    for (var _i = 0, normalizedTriggers_1 = normalizedTriggers; _i < normalizedTriggers_1.length; _i++) {
      var trigger_1 = normalizedTriggers_1[_i];
      var mergedTrigger = __assign({ modifier: [], preventDefault: false, enabled: true }, trigger_1);
      var modifier = mergedTrigger.modifier, key = mergedTrigger.key, callback = mergedTrigger.callback, preventDefault = mergedTrigger.preventDefault, triggerEnabled = mergedTrigger.enabled;
      if (triggerEnabled) {
        if (modifier.length) {
          var modifierDefs = (Array.isArray(modifier) ? modifier : [modifier]).map(function(def) {
            return typeof def === "string" ? [def] : def;
          });
          var modified = modifierDefs.some(function(def) {
            return def.every(function(modifier2) {
              return modifiedMap[modifier2];
            });
          });
          if (!modified)
            continue;
        }
        if (event.key === key) {
          if (preventDefault)
            event.preventDefault();
          var detail = { node, trigger: mergedTrigger };
          node.dispatchEvent(new CustomEvent("shortcut", { detail }));
          callback === null || callback === void 0 ? void 0 : callback(detail);
        }
      }
    }
  };
  if (enabled)
    node.addEventListener(type, handler);
  return {
    update: function(update) {
      var _a2 = update.enabled, newEnabled = _a2 === void 0 ? true : _a2, _b2 = update.type, newType = _b2 === void 0 ? "keydown" : _b2;
      if (enabled && (!newEnabled || type !== newType)) {
        node.removeEventListener(type, handler);
      } else if (!enabled && newEnabled) {
        node.addEventListener(newType, handler);
      }
      enabled = newEnabled;
      type = newType;
      trigger = update.trigger;
    },
    destroy: function() {
      node.removeEventListener(type, handler);
    }
  };
};
export {
  Button as B,
  Center as C,
  Fretboard as F,
  Interval as I,
  Kbd as K,
  TaskDescription as T,
  genRandom3NPSScaleCircleOfFithsPair as a,
  genRandom3NPSIntervalsUpDownSequence as b,
  genRandom3NPSScale as c,
  genRandom3NPSTwoStringsUpDownSequence as d,
  filterToTwoRandomStrings as f,
  genRandom3NPSScaleNeighborPair as g,
  shortcut as s
};

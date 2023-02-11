import { S as SvelteComponent, i as init, s as safe_not_equal, x as create_component, y as claim_component, z as mount_component, C as noop, f as transition_in, t as transition_out, A as destroy_component } from "../../../chunks/index-949c6c01.js";
import { D as DiatonicNeighbors } from "../../../chunks/DiatonicNeighbors-186b0803.js";
function create_fragment(ctx) {
  let diatonicneighbors;
  let current;
  diatonicneighbors = new DiatonicNeighbors({
    props: { mode: "circle_of_fifth_neigbors" }
  });
  return {
    c() {
      create_component(diatonicneighbors.$$.fragment);
    },
    l(nodes) {
      claim_component(diatonicneighbors.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(diatonicneighbors, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(diatonicneighbors.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(diatonicneighbors.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(diatonicneighbors, detaching);
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

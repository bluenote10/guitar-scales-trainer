import { S as SvelteComponent, i as init, s as safe_not_equal, x as create_component, y as claim_component, z as mount_component, C as noop, f as transition_in, t as transition_out, A as destroy_component } from "../../../chunks/index-d19db849.js";
import { D as DiatonicFromTwoStrings } from "../../../chunks/DiatonicFromTwoStrings-35f78976.js";
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

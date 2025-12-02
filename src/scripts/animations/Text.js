import { SplitText } from "gsap/SplitText";

import Animation from "./Animation";
import { each } from "../utils/dom";

export default class Text extends Animation {
  constructor({ element }) {
    super({ element, elements: { spans: null } });

    this.elements.spans = SplitText.create(this.element, {
      type: "lines",
      mask: "lines",
      autoSplit: true,
    });

    each(this.elements.spans.lines, (line, index) => {
      line.style.setProperty("--index", index);
      line.style.setProperty("--delay", `${this.delay}s`);
    });
  }

  animateIn() {
    this.element.classList.add("is-animated");

    super.animateIn();
  }

  animateOut() {
    this.element.classList.remove("is-animated");

    super.animateOut();
  }
}

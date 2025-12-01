import gsap from "gsap";

import Animation from "./Animation";
import { easeInOut } from "../utils/easing";

export default class Line extends Animation {
  constructor({ element }) {
    super({ element, elements: {} });

    this.origin = this.element.dataset.origin || "left";
  }

  animateIn() {
    gsap.to(this.element, {
      scale: 1,
      delay: this.delay,
      duration: 1.25,
      ease: easeInOut,
    });

    super.animateIn();
  }

  animateOut() {
    gsap.set(this.element, { scale: 0, transformOrigin: this.origin });

    super.animateOut();
  }
}

import gsap from "gsap";

import Animation from "./Animation";

export default class Parallax extends Animation {
  constructor({ element }) {
    super({
      element,
      elements: {},
    });

    this.elements.img = element.querySelector("img");
  }

  createAnimation() {
    gsap.fromTo(
      this.elements.img,
      {
        yPercent: -10,
      },
      {
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: this.element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  }
}

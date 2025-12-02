import Animation from "./Animation";

export default class Line extends Animation {
  constructor({ element }) {
    super({ element, elements: {} });

    this.origin = this.element.dataset.origin || "left";

    this.element.style.transformOrigin = this.origin;
    this.element.style.setProperty("--delay", `${this.delay}s`);
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

import Animation from "./Animation";

export default class Appear extends Animation {
  constructor({ element }) {
    super({ element, elements: {} });

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

import Appear from "../animations/Appear";
import Text from "../animations/Text";
import Line from "../animations/Line";
import Parallax from "../animations/Parallax";

import { each } from "../utils/dom";

export default class AnimationManager {
  constructor() {
    this.animations = [];
  }

  create() {
    const appearElements = document.querySelectorAll(
      '[data-animation="appear"]',
    );
    each(appearElements, (element) => {
      const animation = new Appear({ element });
      this.animations.push(animation);
    });

    const textElements = document.querySelectorAll('[data-animation="text"]');
    each(textElements, (element) => {
      const animation = new Text({ element });
      this.animations.push(animation);
    });

    const lineElements = document.querySelectorAll('[data-animation="line"]');
    each(lineElements, (element) => {
      const animation = new Line({ element });
      this.animations.push(animation);
    });

    each(this.animations, (animation) => animation.createAnimation());

    const parallaxElements = document.querySelectorAll(
      '[data-animation="parallax"]',
    );
    each(parallaxElements, (element) => {
      const animation = new Parallax({ element });
      this.animations.push(animation);
    });

    each(this.animations, (animation) => animation.createAnimation());
  }

  destroy() {
    each(this.animations, (animation) => animation.destroyAnimation());
    this.animations = [];
  }

  reset() {
    this.destroy();
    this.create();
  }
}

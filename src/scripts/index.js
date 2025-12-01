import "./utils/scroll";
import "./classes/WindowEvents";
import "./classes/Gsap";

import AutoBind from "auto-bind";

import Preloader from "./classes/Preloader";
import Grid from "./classes/Grid";
import Transition from "./classes/Transition";
import AnimationManager from "./classes/AnimationManager";
import { lenis } from "./classes/Scroll";

import { events } from "./utils/events";
import { isDev } from "./utils/config";

class App {
  constructor() {
    AutoBind(this);

    this.init();
  }

  init() {
    this.createPreloader();
    this.createAnimationManager();
    this.createTransition();

    if (isDev) {
      this.createGrid();
    }
  }

  /**
   * Create.
   */
  createPreloader() {
    this.preloader = new Preloader();

    this.preloader.preloadPage();

    events.on("loaded", this.onPreloaded);
  }

  createAnimationManager() {
    this.animationManager = new AnimationManager();
  }

  createTransition() {
    this.transition = new Transition({
      onContentReplaced: this.onContentReplaced,
      onLoadPage: () => this.preloader.loadPage(),
    });
  }

  createGrid() {
    this.grid = new Grid();
  }

  /**
   * Events.
   */
  async onPreloaded() {
    this.animationManager.create();

    lenis.start();
  }

  onContentReplaced() {
    this.animationManager.reset();
  }
}

new App();

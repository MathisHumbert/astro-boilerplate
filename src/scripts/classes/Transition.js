import Swup from "swup";
import SwupHeadPlugin from "@swup/head-plugin";
import SwupPreloadPlugin from "@swup/preload-plugin";
import SwupScriptsPlugin from "@swup/scripts-plugin";
import { gsap } from "gsap";

import { lenis } from "../classes/Scroll";
import { isDev } from "../utils/config";
import { easeOut } from "../utils/easing";

export default class Transition {
  constructor({ onContentReplaced, onLoadPage }) {
    this.onContentReplaced = onContentReplaced;
    this.onLoadPage = onLoadPage;

    this.createSwup();
  }

  createSwup() {
    this.swup = new Swup({
      animateHistoryBrowsing: true,
      animationSelector: false,
      plugins: [
        new SwupHeadPlugin({
          persistAssets: true,
          awaitAssets: true,
        }),
        new SwupPreloadPlugin({
          preloadHoveredLinks: true,
          preloadInitialPage: !isDev,
        }),
        new SwupScriptsPlugin(),
      ],
    });

    this.swup.hooks.on("animation:out:start", () => {
      lenis.stop();

      return this.animateOut();
    });

    this.swup.hooks.on("content:replace", () => {
      if (this.onContentReplaced) {
        this.onContentReplaced();
      }
    });

    this.swup.hooks.on("animation:in:start", async () => {
      if (this.onLoadPage) {
        await this.onLoadPage();
      }

      lenis.start();

      return this.animateIn();
    });
  }

  animateOut() {
    return new Promise((resolve) => {
      gsap.to(".content", {
        opacity: 0,
        duration: 0.6,
        ease: easeOut,
        onComplete: resolve,
      });
    });
  }

  animateIn() {
    return new Promise((resolve) => {
      gsap.to(".content", {
        opacity: 1,
        duration: 0.6,
        ease: easeOut,
        onComplete: resolve,
      });
    });
  }
}

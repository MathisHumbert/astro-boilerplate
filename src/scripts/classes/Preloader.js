import imagesLoaded from "imagesloaded";
import FontFaceObserver from "fontfaceobserver";

import { events } from "../utils/events";

export default class Preloader {
  preloadPage() {
    const preloadImages = new Promise((res) => {
      imagesLoaded(document.body, { background: true }, res);
    });

    const preloadFonts = this.loadFonts();

    Promise.all([preloadImages, preloadFonts]).then(() => {
      document.documentElement.classList.add("is-ready");

      events.emit("loaded");
    });
  }

  loadPage() {
    const loadImages = new Promise((res) => {
      imagesLoaded(document.body, { background: true }, res);
    });

    return new Promise((res) => {
      loadImages.then(() => {
        res();
      });
    });
  }

  loadFonts() {
    const satoshiFont = new FontFaceObserver("Satoshi");

    return Promise.all([satoshiFont.load()]);
  }
}

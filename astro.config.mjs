// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/postcss";

import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://website.com",
  server: {
    port: 3000,
  },
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
  },
  integrations: [sitemap(), icon()],
});

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import solid from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

import rehypePrettyCode from "rehype-pretty-code";

import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [react(), svelte(), vue(), solid(), tailwind(), mdx()],
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
    },
  },
  experimental: {
    viewTransitions: true,
  },
});

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";

import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  adapters: [vercel({ analytics: true })],
  experimental: { viewTransitions: true },
  integrations: [react(), tailwind(), mdx()],
  markdown: { shikiConfig: { theme: "one-dark-pro" } },
  vite: {
    ssr: {
      noExternal: ["@ph-badge/react"],
    },
  },
});

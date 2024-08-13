import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: "server",
  integrations: [mdx(), sitemap(), tailwind()],
  adapter: netlify(),
  devToolbar: {
    enabled: false
  }
});


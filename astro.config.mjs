import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: "server",
  integrations: [mdx(), sitemap(), tailwind()],
  adapter: vercel(),
  devToolbar: {
    enabled: false
  }
});


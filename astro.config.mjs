import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  integrations: [mdx(), tailwind({
    applyBaseStyles: false
  }), compress(), solidJs()],
  markdown: {
    shikiConfig: {
      theme: 'nord',
      wrap: true
    }
  }
});
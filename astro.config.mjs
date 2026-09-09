// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    envPrefix: ['PUBLIC_', 'CONVEX_'],
    build: {
      cssMinify: true,
      minify: true,
    },
  },
});

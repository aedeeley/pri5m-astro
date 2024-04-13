import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import jopSoftwarecookieconsent from "@jop-software/astro-cookieconsent";

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? 'https://astro-shadcn-ui-template.vercel.app' : 'http://localhost:4321',
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), jopSoftwarecookieconsent()],
  vite: {
    optimizeDeps: {
      exclude: ["oslo"]
    }
  }
});
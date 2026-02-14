import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      allowedHosts: [
        "devserver-preview--shdesignwoodcraft.netlify.app",
        "devserver-main--shdesignwoodcraft.netlify.app"
      ]
    }
  },
  integrations: [react()],
  adapter: netlify({
    devFeatures: {
      environmentVariables: true
    }
  })
});

import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      allowedHosts: [
        'devserver-main--shdesignwoodcraft.netlify.app',
        '.netlify.app'
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

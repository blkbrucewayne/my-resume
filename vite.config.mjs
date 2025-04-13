// Plugins
import Components from 'unplugin-vue-components/vite';
import Vue from '@vitejs/plugin-vue';
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import VueRouter from 'unplugin-vue-router/vite';

// Utilities
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    Vue({
      template: { transformAssetUrls },
    }),
    Vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss', // Load custom SASS variables
      },
    }),
    Components(),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  server: {
    port: 3000,
    hmr: {
      overlay: false, // Disable error overlay
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // Use modern SASS compiler for performance
        // Optional: Preload Vuetify settings if not using @use in settings.scss
        // additionalData: `@use 'vuetify/settings' as *;\n`,
      },
    },
  },
});



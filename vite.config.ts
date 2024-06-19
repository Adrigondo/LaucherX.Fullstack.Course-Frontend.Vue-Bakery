import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
// vite.config.js
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: process.env.NODE_ENV === 'production'
    ? process.env.REPO_NAME || '/'
    : '/',
})
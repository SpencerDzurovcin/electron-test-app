// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  root: 'src', // Tells Vite that index.html is in the src folder
  base: './',  // Use a relative base
  build: {
    outDir: '../dist', // Output directory relative to the project root
    emptyOutDir: true,
  }
})

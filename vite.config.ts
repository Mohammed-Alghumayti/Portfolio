import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // The site is served from https://<user>.github.io/Portfolio/, so assets need
  // that prefix rather than the domain root.
  base: '/Portfolio/',

  build: {
    // GitHub Pages serves either a branch root or a docs/ folder. Building into
    // docs/ lets the built site be committed alongside its source on one branch.
    outDir: 'docs',
    emptyOutDir: true,
  },

  plugins: [react(), tailwindcss()],
})

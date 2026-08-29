import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // The site is served from https://<user>.github.io/Portfolio/, so assets need
  // that prefix rather than the domain root.
  base: '/Portfolio/',

  plugins: [react(), tailwindcss()],
})

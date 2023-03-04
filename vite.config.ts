import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-nocheck
import { svgstore } from "./src/vite-plugins/svgstore";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      svgstore(),

  ],
})

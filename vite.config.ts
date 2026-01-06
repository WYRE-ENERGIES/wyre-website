import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Keep a higher warning limit but let Vite/Rollup decide chunking automatically.
    // The previous custom manualChunks split React/Radix/etc in ways that introduced
    // fragile circular dependencies between chunks in production.
    chunkSizeWarningLimit: 1500,
    // Enable minification (esbuild is faster than terser)
    minify: 'esbuild',
    // Source maps disabled for smaller builds
    sourcemap: false,
  },
})

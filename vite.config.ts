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
    // Increase chunk size warning limit (we'll handle it with manual chunks)
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Spline libraries (very heavy - ~2MB)
          if (id.includes('@splinetool')) {
            return 'spline';
          }

          // React and React Router (core framework)
          if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
            return 'react-vendor';
          }

          // Framer Motion (animation library)
          if (id.includes('framer-motion') || id.includes('motion')) {
            return 'framer-motion';
          }

          // Recharts (charting library)
          if (id.includes('recharts')) {
            return 'recharts';
          }

          // Radix UI components (UI library)
          if (id.includes('@radix-ui')) {
            return 'radix-ui';
          }

          // Sanity CMS
          if (id.includes('@sanity')) {
            return 'sanity';
          }

          // Other large dependencies
          if (id.includes('node_modules')) {
            // Check for other known large libraries
            if (id.includes('cobe') || id.includes('dotted-map') || id.includes('date-fns')) {
              return 'utils';
            }
            // All other node_modules go to vendor
            return 'vendor';
          }
        },
      },
    },
    // Enable minification (esbuild is faster than terser)
    minify: 'esbuild',
    // Note: To remove console.logs, you can use a plugin or configure esbuild
    // Enable source maps for debugging (optional - can disable for smaller builds)
    sourcemap: false,
  },
})

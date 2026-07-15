import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Ottimizzazioni di build
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion', 'gsap'],
          'vendor-ui': ['lucide-react', 'swiper'],
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
  },
  server: {
    middlewareMode: false,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'gsap'],
  },
})

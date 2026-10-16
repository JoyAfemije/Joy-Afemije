import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base './' keeps asset paths relative so the built site can be hosted
// from any sub-path (Vercel, GitHub Pages, etc.) without reconfiguration.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});

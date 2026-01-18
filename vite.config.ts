import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
    port: 5173,
  },
  // For GitHub Pages deployment
  // If deploying to https://<USERNAME>.github.io/<REPO>/, set base to '/<REPO>/'
  // If deploying to custom domain or https://<USERNAME>.github.io/, set base to '/'
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: '.', // root is the current directory
  publicDir: 'public', // static files like styles/ go here
  build: {
    outDir: 'dist', // same as CRA
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});

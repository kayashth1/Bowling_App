import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
    test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.jsx',
  },
  coverage: {
      provider: 'v8',  // use Node's V8 coverage
      reporter: ['text', 'html'], // text in console + HTML report
      reportsDirectory: './coverage',
      exclude: [
        'node_modules/',
        'vite.config.*',
        '**/types/**',
      ]
    }
});

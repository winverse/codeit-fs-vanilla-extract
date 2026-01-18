import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
    vanillaExtractPlugin(),
  ],
  resolve: {
    alias: {
      '@styles': '/src/styles',
    },
  },
});

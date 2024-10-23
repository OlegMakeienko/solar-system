import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],  // Lägg till React-plugin för att hantera JSX och snabb HMR
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // Lägg till alias så du kan använda '@' för att korta vägar
    },
  },
  server: {
    open: true,  // Öppnar automatiskt webbläsaren när servern startar
    port: 3000,  // Du kan ändra port om nödvändigt
  },
  css: {
    preprocessorOptions: {
      css: {
        charset: false,  // Undvik att inkludera "@charset" om det inte behövs
      },
    },
  },
  build: {
    sourcemap: true,  // Sourcemaps för enklare debugging
  },
});

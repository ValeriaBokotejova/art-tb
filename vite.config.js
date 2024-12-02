import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig(({ command }) => {
  const isDev = command === 'serve';
  return {
    root: '.',
    base: isDev ? '/' : '/art-tb/',
    build: {
      rollupOptions: {
        input: {
          main: './index.html',
          paintings: './paintings.html',
        },
      },
      outDir: 'dist',
      emptyOutDir: true,
    },
    plugins: [
      injectHTML(),
      FullReload(['./src/**/**.html', './src/**/**.js', './src/**/**.css']),
    ],
  };
});

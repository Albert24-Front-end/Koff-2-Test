import { defineConfig } from 'vite';
import viteStaticCopy from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'node_modules/normalize.css/normalize.css', dest: '' },
        { src: 'public/fonts', dest: '' },
      ],
    }),
  ],
});
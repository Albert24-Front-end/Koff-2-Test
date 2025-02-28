import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import Legacy from "@vitejs/plugin-legacy";

export default defineConfig({
    base: "Koff",
    plugins: [
        viteStaticCopy({
            targets: [
              { src: 'node_modules/normalize.css/normalize.css', dest: '' },
              { src: 'public/fonts', dest: '' },
            ],
          }),
        Legacy({
          targets: ["defaults", "not IE 11"],
        }),
      ],
      css: {
        preprocessorOptions: {
          scss: {},
        },
        postcss: {
          plugins: [autoprefixer()],
        },
      },
  });
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ["CHrome>40", "ff>31", "ie 11"],
        }),
      ],
    },
  },
  plugins: [vue()],
});

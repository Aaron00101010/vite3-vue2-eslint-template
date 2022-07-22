import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import { createVuePlugin } from "vite-plugin-vue2";
import scriptSetup from "unplugin-vue2-script-setup/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin({ jsx: true }), scriptSetup()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".vue", ".js"],
  }
});

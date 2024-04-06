import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log("command", command);
  console.log("mode", mode);

    return {
      plugins: [react()],
      build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, "index.html"),
          }
        }
      }
    }
});

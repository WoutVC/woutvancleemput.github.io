import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  envDir: "./envs",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: [resolve(__dirname, "./src/tests/setup.js")],
  },
  define: {
    global: {},
  },
});

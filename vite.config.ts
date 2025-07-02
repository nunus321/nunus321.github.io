import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // Add this line for GitHub Pages compatibility
  plugins: [checker({ typescript: true })],
  worker: {},
  build: {
    outDir: "docs",
    sourcemap: false,
  },
  server: {
    open: true,
    port: 1234,
    host: "localhost",
  },
});
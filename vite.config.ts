import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      brotliSize: true,
      gzipSize: true,
      template: "treemap",
      filename: "stats/rollup-stats.html",
      title: "D-Main - Rollup (Build) stats",
    }),
  ],
});

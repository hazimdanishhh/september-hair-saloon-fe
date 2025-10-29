import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import path from "path";

export default defineConfig({
  plugins: [react(), vike()],
  build: {
    outDir: "dist/client",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // alias for "@/styles/variables"
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables" as *;`, // injects into each .scss file
      },
    },
  },
});

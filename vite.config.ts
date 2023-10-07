/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      all: true,
      exclude: [
        "**/node_modules/**",
        "**/vitest.config.ts",
        "**/vitest.setup.ts",
        "coverage/**",
        "**/*.d.ts",
        "**/postcss.config.js",
        "**/tailwind.config.js",
        "**/tsconfig.json",
        "**/__tests__/**",
      ],
    },
  },
});

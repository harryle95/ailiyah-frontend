import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    coverage: {
      thresholds: {
        lines: 60,
        branches: 60,
        functions: 60,
        statements: 60
      },
      enabled: true,
      provider: "istanbul",
      reporter: ['json-summary', 'json', 'text'],
      reportOnFailure: true,
      include: ["src/components/**"],
      exclude: [
        "**/*.stories.[jt]sx",
        "**/*.helper.[jt]sx",
        "**/*.helpers.[jt]sx",
        "**/*.types.ts",
        "src/components/accordion/**",
        "src/components/dialog/**",
        "src/components/navbar/**",
        "src/components/button/**",
      ],
    },
    global: true,
    environment: "jsdom",
    setupFiles: "./setupTest",
    css: true,
  },
  plugins: [react()],
});

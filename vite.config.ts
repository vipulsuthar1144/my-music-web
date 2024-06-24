import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

const FRONTEND_PORT = process.env.VITE_APP_PORT;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(FRONTEND_PORT) || 1818,
    host: "localhost",
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@": path.resolve(__dirname, "src"),
    },
  },
});

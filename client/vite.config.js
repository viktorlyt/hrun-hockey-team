import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Use environment variables from process.env inside Vite config
const isProduction = process.env.NODE_ENV === "production";

// Set the target URL based on the environment
const targetUrl = isProduction
  ? "https://hrun-hockey-team.onrender.com/api" // Remote backend for production
  : "http://localhost:5101/api"; // Local backend for development

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: targetUrl,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    target: "esnext",
  },
});

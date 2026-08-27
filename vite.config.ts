import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Honour an injected PORT so the harness can assign a free port.
    port: Number(process.env.PORT) || 5173,
  },
});

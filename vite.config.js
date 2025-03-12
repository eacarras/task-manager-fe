import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // 👈 Permite acceso externo desde Docker
    port: 5173,      // 👈 Asegura que usa el puerto correcto
    strictPort: true,
  },
});

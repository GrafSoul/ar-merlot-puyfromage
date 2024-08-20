import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000,
    https: true,
  },

  plugins: [mkcert()],
});

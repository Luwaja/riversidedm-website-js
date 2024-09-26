import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { 
    manifest: true,
    outDir: "../backend/build",
    emptyOutDir: true },
  base: process.env.NODE_ENV === "production" ? "/static/" : "/",
  root: "./",
});

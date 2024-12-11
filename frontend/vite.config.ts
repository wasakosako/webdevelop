import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from "vite-tsconfig-paths"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tsconfigPaths()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    proxy:{
      "/api":{
        target:"http://localhost:8080/",
        changeOrigin:true
      }
    }
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: "./",
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
      "~components": path.resolve(__dirname, "./src/components"),
      "~pages": path.resolve(__dirname, "./src/components/pages"),
      "~services": path.resolve(__dirname, "./src/components/services"),
      "~ui": path.resolve(__dirname, "./src/components/ui"),
      "~common": path.resolve(__dirname, "./src/components/common"),
      "~helpers": path.resolve(__dirname, "./src/helpers"),
      "~types": path.resolve(__dirname, "./src/types/"),
      "~providers": path.resolve(__dirname, "./src/providers"),
      "~assets": path.resolve(__dirname, "./src/assets"),
      "~hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
})

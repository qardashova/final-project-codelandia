import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "@svgr/rollup";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(),react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/variables.scss";`
      }
    }
  }
})

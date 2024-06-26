import { defineConfig } from 'vite'
import { resolve } from 'path'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgLoader()],
  resolve: {
    preserveSymlinks: true,
    alias: {
      '@': resolve(__dirname, '../src')
    }
  },
  css: {
    preprocessorOptions: {
        scss: {
            additionalData: `@import "@/assets/scss/global.scss";`,
        },
    },
},
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicDir:"public",
  base:"./",
  resolve:{
    alias:{
      "@": path.resolve(__dirname, './src/')
    }
  },
  serve:{
    open:true,
    hmr:true,
  },
  build:{
    assetsDir:"static",
    rollupOptions:{
      
      input:{
        index: path.resolve(__dirname,"index.html")
      },
      output:{
        chunkFileNames:'static/js/[name]-[hash].js',
        entryFileNames:"static/js/[name]-[hash].js",
        assetFileNames:"static/[ext]/name-[hash].[ext]"
      }
    },
  }
})

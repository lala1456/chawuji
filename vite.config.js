import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        ElementPlusResolver({
          exclude: /^ElAmap[A-Z]*/
        })
      ]
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          exclude: /^ElAmap[A-Z]*/
        })
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        //获取路径中包含了/api的请求
        target: 'http://localhost:8080', //后台服务所在的源
        changeOrigin: true, //修改源
        rewrite: (path) => path.replace(/^\/api/, '') //将/api替换为空字符串
      }
    },
    server: {
      host: '0.0.0.0'
    }
  }
})

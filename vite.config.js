import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'unplugin-vue-markdown/vite'
import MarkdownPreview from 'vite-plugin-markdown-preview'
// https://vitejs.dev/config/

// github pages是静态托管页面，不支持代理。 代理配置也只适用于开发调试
export default defineConfig(

    {
      base: '/memory-love/',  // GitHub Pages 项目路径
      build: {
        outDir: 'dist'  // 确保这是构建输出目录
      },

  plugins: [
    vue({
      include: [/.vue$/, /.md$/],
    }),
    Markdown({
      component: true,
      previewId: 'vue'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
      // server: {
      //   proxy: {
      //     '/api': {
      //       //  http://localhost:9876
      //       target: 'http://47.115.204.172:9876',
      //       changeOrigin: true,
      //       rewrite: (path) => path.replace(/^\/api/, ''),
      //     },
      //     '/collect':{
      //       target: 'https://ip.011102.xyz',
      //       changeOrigin: true,
      //       rewrite: (path) => path.replace(/^\/ip/, ''),
      //     }
      //   },
      // },


}

)

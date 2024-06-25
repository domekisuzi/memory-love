import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'unplugin-vue-markdown/vite'
import MarkdownPreview from 'vite-plugin-markdown-preview'
// https://vitejs.dev/config/
export default defineConfig({
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
  }


}

)

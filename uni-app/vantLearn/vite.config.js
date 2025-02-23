import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
   //解决跨域，如果需要的话
  //  server: {
  //   proxy: {
  //     //在此处编写代理规则
  //     '/api': {
  //       target: 'http://127.0.0.1:8000',
  //       changeOrigin: true,
  //       rewrite: (path) => {
  //         return path.replace(/\/api/,'')
  //       }
  //     }
  //   }
  // }
})

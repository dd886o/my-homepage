import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  // 相对路径：同时适配 GitHub Pages 子路径（/my-homepage/）与根域名部署
  base:'./',
  plugins: [vue()],
})

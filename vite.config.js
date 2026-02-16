import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ⚠️ CRITICAL: This must match your Repo name exactly (Case Sensitive)
  base: "/MemroyCard/", 
})
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // @ts-expect-error process is defined in node env
  const cwd = process.cwd();
  const env = loadEnv(mode, cwd, '')

  return {
    plugins: [react()],
    define: {
      'process.env': JSON.stringify(env)
    },
    build: {
      outDir: 'dist',
    }
  }
})
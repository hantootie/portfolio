import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import projectManifestPlugin from './vite-plugin-project-manifest'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), projectManifestPlugin()],
})

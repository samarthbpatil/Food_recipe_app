import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'




export default defineConfig({
  base: '/Food_recipe_app/',
  plugins: [react()],
})

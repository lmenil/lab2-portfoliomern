import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as dotenv from 'dotenv';
dotenv.config(); 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/lab1-portfolio/',
  build: {
    manifest: true,
    rollupOptions: {
    input: "./src/main.jsx",
    },
    },
})

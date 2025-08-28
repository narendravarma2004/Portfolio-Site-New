import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'], // Ensure Vite recognizes TypeScript files
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // Exclude lucide-react from pre-bundling if needed
  },
});
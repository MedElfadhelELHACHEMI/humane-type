import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['src'] })
  ],
  build: {
    lib: {
      // The entry point for our package
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'humane',
      fileName: (format) => `humane.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled into the library
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})

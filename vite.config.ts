import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['src'] })
  ],
  build: {
    lib: {
      // The entry point for our package
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'humane',
      fileName: (format) => `humane.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled into the library
      external: ['react', 'react-dom'],
      output: {
        // Set exports to named to avoid warnings
        exports: 'named',
        // Provide global variables to use in the UMD build
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        // Ensure CSS is included with the correct filename
        assetFileNames: (assetInfo) => {
          // Change this condition to match any CSS file
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'humane.css';
          }
          return assetInfo.name || '';
        }
      }
    },
    // Ensure CSS is included in the bundle
    cssCodeSplit: false
  }
})

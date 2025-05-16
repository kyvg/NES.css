import { resolve } from 'path'
import { defineConfig } from 'vite'
import glob from 'glob'

// Находим все index.css
const cssEntries = {}
const files = glob.sync('src/**/index.css')
files.forEach(file => {
  const name = file
    .replace(/^src\//, '')       // убираем "src/"
    .replace(/\/index\.css$/, '') // убираем "/index.css"
  cssEntries[name] = resolve(__dirname, file)
})

export default defineConfig({

  build: {
    lib: {
      entry: cssEntries,
      cssFileName: '[name].[ext]',
      name: 'nes-css'
    },
    emptyOutDir: true,
    outDir: 'dist',
    cssCodeSplit: true,
    cssMinify: false,
  },
})

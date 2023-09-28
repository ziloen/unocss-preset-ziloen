import { defineConfig, presetUno } from 'unocss'
import { presetZiloen } from './src'

// Just for Vscode Extension

export default defineConfig({
  presets: [
    presetUno(),
    presetZiloen({
      span: 24,
    }),
  ],
})

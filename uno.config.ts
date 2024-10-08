import { defineConfig, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      fonts: {
        nunito: 'Nunito',
      },
    }),
  ],
})

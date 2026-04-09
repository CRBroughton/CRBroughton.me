import { defineConfig, presetTypography, presetWebFonts } from 'unocss'
import presetWind3 from '@unocss/preset-wind3'

export default defineConfig({
  presets: [
    presetWind3(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Inter:300,400,500',
        mono: 'JetBrains Mono:400',
      },
    }),
  ],
  shortcuts: {
    'page-container': 'max-w-4xl mx-auto px-6 w-full',
    'nav-link': 'text-zinc-400 hover:text-zinc-100 transition-colors duration-200 text-base',
  },
})

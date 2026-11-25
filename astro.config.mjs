import { defineConfig, fontProviders } from 'astro/config'

export default defineConfig({
    fonts: [
        {
            name: 'Poppins',
            cssVariable: '--font-poppins',
            provider: fontProviders.google(),
            weights: [400, 700],
            styles: ['normal'],
            subsets: ['latin'],
            fallbacks: ['sans-serif'],
        },
    ],
})

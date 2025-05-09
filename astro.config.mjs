// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    i18n: {
        locales: ["es", "en"],
        defaultLocale: "es",
        routing: {
            redirectToDefaultLocale: true
        }
    },
    integrations: [react()],
});

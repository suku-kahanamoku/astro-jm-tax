import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import astroI18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
	site: 'https://jm-tax.cz',
	integrations: [tailwind(), robotsTxt(), astroI18next()],
});

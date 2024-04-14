/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
	defaultLocale: 'cs',
	locales: ['cs', 'en', 'de'],
	routes: {
		en: {
			poradenstvi: 'consultancy',
			'danova-evidence': 'tax-records',
			'mzdova-personalni-agenda': 'payroll-agenda',
			'podvojne-ucetnictvi': 'double-entry-bookkeeping',
		},
		de: {
			poradenstvi: 'beratung',
			'danova-evidence': 'steuerunterlagen',
			'mzdova-personalni-agenda': 'lohn-genda',
			'podvojne-ucetnictvi': 'doppelte-buchfuhrung',
		},
	},
};

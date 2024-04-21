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
			dotace: 'grant',
			'ostatni-sluzby': 'other-services',
			//
			beratung: 'consultancy',
			steuerunterlagen: 'tax-records',
			'lohn-genda': 'payroll-agenda',
			'doppelte-buchfuhrung': 'double-entry-bookkeeping',
			zuschusse: 'grant',
			'andere-dienstleistungen': 'other-services',
		},
		de: {
			poradenstvi: 'beratung',
			'danova-evidence': 'steuerunterlagen',
			'mzdova-personalni-agenda': 'lohn-genda',
			'podvojne-ucetnictvi': 'doppelte-buchfuhrung',
			dotace: 'zuschusse',
			'ostatni-sluzby': 'andere-dienstleistungen',
			//
			consultancy: 'beratung',
			'tax-records': 'steuerunterlagen',
			'payroll-agenda': 'lohn-genda',
			'double-entry-bookkeeping': 'doppelte-buchfuhrung',
			grant: 'zuschusse',
			'other-services': 'andere-dienstleistungen',
		},
	},
};

/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/html/utils/withMT');

export default withMT({
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: { extend: {} },
	plugins: [],
});

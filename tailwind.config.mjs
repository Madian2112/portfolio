import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#111',
				'secondary': '#53C6FF',
				'accent': '#55C2C3',
				'text': '#C8DCF5',
				'dk-primary': '#111',
				'dk-secondary': '#53C6FF',
				'dk-accent': '#55C2C3',
				'dk-text': '#C8DCF5',
			},
		},
	},
	darkMode: 'class',
	plugins: [
		typography,
	],
}

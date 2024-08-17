/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'primary': '#7371FC',
        'secondary': '#00FF00',
        'tertiary': '#0000FF',
      },
    },
	},
	plugins: [],
}

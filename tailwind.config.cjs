/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Nunito', 'ui-sans-serif', 'sans-serif']
			}
		}
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: ['forest']
	}
};

module.exports = config;

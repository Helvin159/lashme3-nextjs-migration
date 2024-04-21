import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			mobile: '575.5px',
			tablet: '768px',
			laptop: '992px',
			desktop: '1250px',
		},
		colors: {
			'variant-one': '#ea2178',
			'variant-one-light': '#f2cddd',
			'variant-two': '#121212',
			'variant-two-light': 'rgba(224, 224, 224, 0.58)',
			white: '#ffffff',
			'white-light': 'rgba(255,255,255,.95)',
			black: '#000000',
			'light-gray': '#f0f0f0',
			'rgba-white-0.4': 'rgba(255,255,255,.4)',
			'rgba-white-0.5': 'rgba(255,255,255,.5)',
			'rgba-white-0.6': 'rgba(255,255,255,.6)',
			'rgba-white-0.95': 'rgba(255,255,255,.95)',
		},
		extend: {
			backgroundImage: {},
			spacing: {
				1250: '80rem',
				969: '60.5625rem',
				'98%': '98%',
				'19rem': '19rem',
			},
			translate: {
				n60: '-60%',
				n55: '-55%',
				n52: '-52%',
				n51: '-51%',
				n50: '-50%',
				n49: '-49%',
				n48: '-48%',
				n45: '-45%',
				n30: '-30%',
				n25: '-25%',
				n15: '-15%',
				n10: '-10%',
				n5: '-5%',
				'n2.5': '-2.5%',
			},
		},
	},
	plugins: [],
};
export default config;

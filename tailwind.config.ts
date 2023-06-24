/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
import { Config } from 'tailwindcss';

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./ui/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				gray: colors.zinc,
				'gray-1000': 'rgb(17,17,19)',
				'gray-1100': 'rgb(10,10,11)',
				vercel: {
					pink: '#FF0080',
					blue: '#0070F3',
					cyan: '#50E3C2',
					orange: '#F5A623',
					violet: '#7928CA',
					red: '#FF4D4F',
				},
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))',
			},
			typography: {
				DEFAULT: {
					css: {
						'code::before': {
							content: '""',
						},
						'code::after': {
							content: '""',
						},
					},
				},
				quoteless: {
					css: {
						'blockquote p:first-of-type::before': { content: 'none' },
						'blockquote p:first-of-type::after': { content: 'none' },
					},
				},
			},
			animation: {
				'fade-in': 'fade-in 3s ease-in-out forwards',
				title: 'title 3s ease-out forwards',
				'fade-left': 'fade-left 3s ease-in-out forwards',
				'fade-right': 'fade-right 3s ease-in-out forwards',
			},
			keyframes: {
				'fade-in': {
					'0%': {
						opacity: '0%',
					},
					'75%': {
						opacity: '0%',
					},
					'100%': {
						opacity: '100%',
					},
				},
				'fade-left': {
					'0%': {
						transform: 'translateX(100%)',
						opacity: '0%',
					},

					'30%': {
						transform: 'translateX(0%)',
						opacity: '100%',
					},
					'100%': {
						opacity: '0%',
					},
				},
				'fade-right': {
					'0%': {
						transform: 'translateX(-100%)',
						opacity: '0%',
					},

					'30%': {
						transform: 'translateX(0%)',
						opacity: '100%',
					},
					'100%': {
						opacity: '0%',
					},
				},
				title: {
					'0%': {
						'line-height': '0%',
						'letter-spacing': '0.25em',
						opacity: '0',
					},
					'25%': {
						'line-height': '0%',
						opacity: '0%',
					},
					'80%': {
						opacity: '100%',
					},

					'100%': {
						'line-height': '100%',
						opacity: '100%',
					},
				},
			},
			fontFamily: {
				sans: ['Poppins', 'Roboto', 'system-ui', 'sans-serif'],
				display: ['var(--font-calsans)'],
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
} satisfies Config;

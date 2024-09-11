/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: 'true',
		},
		colors: {
			main: '#5880BC',
			grey: '#F3F3FB',
			white: '#ffffff',
			mschat: '#D5D5EB',
			online: '#70C273',
			offline: '#BC5D58',
			modal: '#707070',
			red: '#ff0000',
		},
		fontFamily: {
			main: ['Noto Sans Display', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js, jsx, ts, tsx}"
  ],
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
	theme: {
		colors: {
			"sub-bg": "#dfe5cd",
			"sub-dark": "#a1a1a1",
			"contrast": "#0ea5e9",
			"white": "fff"
		}
	}
	// corePlugins: {
	// 	preflight: false
	// }
}

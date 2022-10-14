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
			"sub-bg": "#dfe5cd"
		}
	}
}

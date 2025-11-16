/** @type {import('tailwindcss').Config} */
export default {
  content: [
	"./index.html",
	"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
	extend: {
	  fontFamily: {
		// Sets 'Inter' as the default font family
		sans: ['Inter', 'sans-serif'],
	  },
	},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoc: 'var(--font-roboto_c)',
        primary: 'var(--font-inter)',
        mono: 'var(--font-mono)',
        sans: ["Inter", "sans-serif"],
        poppins: 'var(--font-poppins)',
      },
    },
  },
  plugins: [],
}
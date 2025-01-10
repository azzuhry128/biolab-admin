/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: '#1B263B',
        textNavy: '#1B263B',
        greytext: '#677898'
      },
      textStyles: {
        'custom-h2' : {
          fontSize: "1.5rem",
          fontWeight: "semibold",
          color: "#1B263B"
        }
      },
    },
  },
  plugins: [],
};

/** @type {import("tailwindcss").Config} */
module.exports = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2382A0',
        "primary-light": "#2CB0D8",
        'primary-background': '#FFFFFF',
        "primary-dark": "#333333",
        'secondary-dark': '#1A1A1B',
        secondary: '#0F0F0F',
        error: "#FF6961",
        'primary-error': '#F21616',
      }
    }
  },
  plugins: []
}

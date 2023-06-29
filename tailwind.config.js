/** @type {import("tailwindcss").Config} */
module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2382A0",
        "primary-light": "#7BB4C6",
        "primary-background": "#FFFFFF",
        "primary-dark": "#333333",
        "secondary-dark": "#4F4F4F",
        "tertiary-dark": "#828282",
        "input-border": "#BDBDBD",
        "gray-color-40": "#D9D9D9",
        "brand-green": "#00A843",
        "brand-yellow": "#F3D11B",
        secondary: "#0F0F0F",
        error: "#E54B4B",
      }
    }
  },
  plugins: []
}

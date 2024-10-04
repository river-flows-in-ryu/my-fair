// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
      boxShadow: {
        custom:
          "0px 16px 32px 0px var(--blackAlpha100), 0px 0px 6px 0px var(--blackAlpha50)",
      },
    },
  },
  plugins: [],
};

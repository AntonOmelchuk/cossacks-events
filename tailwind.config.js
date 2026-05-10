/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // Додай цей блок:
  safelist: [
    {
      pattern:
        /(bg|text|border)-(red|blue|amber|purple|sky|emerald|orange|zinc)-(400|500|600)/,
      variants: ["hover", "focus"],
    },
    {
      pattern: /border-(red|blue|amber|purple|sky|emerald|orange|zinc)-500\/30/,
    },
    {
      pattern: /bg-(red|blue|amber|purple|sky|emerald|orange|zinc)-500\/10/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

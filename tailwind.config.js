/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-dark": "var(--bg-dark)",
        "ios-colors-fills-primary": "var(--ios-colors-fills-primary)",
        neutralblack: "var(--neutralblack)",
        neutralgrey: "var(--neutralgrey)",
        "neutrallighter-grey": "var(--neutrallighter-grey)",
        neutralwhite: "var(--neutralwhite)",
        "playground-bg": "var(--playground-bg)",
        "playground-bg-secondary": "var(--playground-bg-secondary)",
        "playground-bg-section": "var(--playground-bg-section)",
        "playground-bg-tryout": "var(--playground-bg-tryout)",
        "playground-cta": "var(--playground-cta)",
        "playground-text": "var(--playground-text)",
        "playground-text-on-cta": "var(--playground-text-on-cta)",
        primaryblue: "var(--primaryblue)",
      },
      fontFamily: {
        body: "var(--body-font-family)",
        "content-bold": "var(--content-bold-font-family)",
        h1: "var(--h1-font-family)",
        h2: "var(--h2-font-family)",
        "regular-none-medium": "var(--regular-none-medium-font-family)",
        subheader: "var(--subheader-font-family)",
      },
      boxShadow: {
        "UI-shadow": "var(--UI-shadow)",
      },
    },
  },
  plugins: [],
};

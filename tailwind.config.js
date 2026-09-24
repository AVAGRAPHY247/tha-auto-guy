/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          900: "#070707",
          800: "#0d0d0d",
          700: "#141414",
          600: "#1c1c1c",
        },
        gold: {
          50: "#FBF7EB",
          100: "#F9EFCB",
          200: "#F3DF97",
          300: "#EAD263",
          400: "#E0B93A",
          500: "#D4AF37",
          600: "#A8841F",
          700: "#7C5C16",
          800: "#50380D",
          900: "#281C06",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.9s ease-out forwards",
        "slide-up": "slideUp 0.9s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-gold": "pulseGold 2.4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
      },
    },
  },
  plugins: [],
};
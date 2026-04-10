/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#050505",
        ink: "#111111",
        ted: "#ff0000",
        ember: "#690808",
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 30px rgba(255, 0, 0, 0.25)",
        "glow-strong": "0 0 45px rgba(255, 0, 0, 0.38)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        pulseGlow: "pulseGlow 3.5s ease-in-out infinite",
        grain: "grain 12s steps(8) infinite",
        marquee: "marquee 18s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.06)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "20%": { transform: "translate(-5%, 3%)" },
          "40%": { transform: "translate(4%, -4%)" },
          "60%": { transform: "translate(-3%, 5%)" },
          "80%": { transform: "translate(5%, 2%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#e002a2",
        secondary: "#4767F6",
        tertiary: "#FF5223",
        black: "#1c1c1c",
        accent: {
          100: "#F1F2F6",
          200: "#D1D5E5",
        },
      },
      spacing: {
        112: "28rem",
        128: "32rem",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
    fontFamily: {      
      'body': ['Inter'],
      'title': ['Neo Sans Pro'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

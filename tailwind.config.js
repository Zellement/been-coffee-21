module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.js"],
    options: {
      whitelist: ["is-active"],
    },
  },
  theme: {
    fontSize: {
      "2xs": "1.4rem",
      xs: "1.6rem",
      sm: "1.8rem",
      base: "2rem",
      lg: "2.2rem",
      xl: "2.4rem",
      "2xl": "3rem",
      "3xl": "3.4rem",
      "4xl": "4rem",
      "5xl": "5rem",
      "6xl": "6rem",
      "7xl": "7rem",
      "8xl": "8rem",
      "9xl": "9rem",
      "10xl": "10rem",
    },
    screens: {
      "2xs": "375px",
      xs: "480px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1600px",
      "4xl": "1900px",
    },
    extend: {
      fontFamily: {
        riverside: ["Riverside", "Impact", "Arial Black", "sans-serif"],
        "riverside-outline": ["Riverside Outline", "Impact", "Arial Black", "sans-serif"],
        krete: ["Krete", "Georgia", "serif"]
      },
      colors: {
        butterscotch: {
          DEFAULT: "#fab944"
        },
        tuscany: {
          DEFAULT: "#D05C32"
        },
        navy: {
          DEFAULT: "#1b1d3c"
        },
        seashell: {
          DEFAULT: "#fff4e8"
        },
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
        30: "30",
        40: "40",
        50: "50",
        60: "60",
      },
    },
  },
  corePlugins: {
    container: false,
  },
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      screens: {
        sm: "476px",
        // => @media (min-width: 576px) { ... }

        md: "760px",
        // => @media (min-width: 960px) { ... }

        lg: "960px",
        // => @media (min-width: 1440px) { ... }
        xl: "1024px",
        "2xl": "1280px",
        "3xl": "1600px",
        "4xl": "1920px",
        "5xl": "2560px",
        "6xl": "3840px",
        "7xl": "5120px",
        "8xl": "7680px",
        "9xl": "10240px"
      },
      fontFamily: {
        cairo: ['"Cairo"', "sans-serif"]
      },
      transitionProperty: {
        height: "height"
      },

      colors: {
        mainColor: "var(--main_Color)",
        bg_mainLight: "var(--bg_mainLight)",
        bg_red: "var(--bg_red)",
        text_res: "var(--text_res)",
        bg_orange: "var(--bg_orange)",
        text_orange: "var(--text_orange)",
        text_green: "var(--text_green)",
        input_border: "var(--input_border)",
        light_white: "var(--light_white)",
        bg_green: "var(--bg_green)",
        bg_gray: "var(--bg_gray)",
        err: "var(--err)",
        green: "var(--green)",
        blue_light: "var(--blue_light)",
        icon: "var(--icon)",
        blurBg: "var(--blurBg)",
        overlay: "var(--overlay)",
        gray: "var(--red)",
        secondMainColor: "var(--secondMainColor)",
        bg_mainLayout: "var(--bg_mainLayout)",
        borderMainColor: "var(--borderMainColor)",
        whiteColor_FFF: "var(--whiteColor_FFF)",
        textGray: "var(--textGray)",
        textColor__2: "var(--textColor__2)"
      },
      backgroundImage: {
        HomePageBgImage: "url('/Pattern.png')"
      },
      width: {
        customWidth: "calc(100% - 31.25rem)"
      },
      padding: {
        mainPadding: "2rem"
      },
      margin: {
        mainMargin: "1.3rem"
      },
      textColor: {
        textGray: "#9CA3AFB2"
      },
      borderColor: {
        rangColorGray: "#D1D5DB"
      },
      listStyleType: {
        none: "none",
        disc: "disc",
        circle: "circle",
        square: "square"
      },
      fontSize: {
        size__14: "14px",
        size__20: "20px",
        size_24: "24px",
        size_22: "22px",
        size_30: "30px",
        size_34: "34px",
        size_32: "32px",
        size_26: "26px",
        size_28: "28px",
        size_36: "36px",
        "3xs": "8px",
        "2xs": "10px",
        size_16: "16px",
        size_10: "10px",
        size_18: "18px",
        size_8: "8px",
        size_12: "12px"
      },
      borderRadius: {
        inputRadius: "1rem"
      },
      gap: {
        mainGap: "1.3rem"
      }
    }
  },
  plugins: [],
  darkMode: ["class"]
};

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101827",
        background: "oklch(1 0 0)",
        foreground: "oklch(0.24 0.03 258)",
        card: {
          DEFAULT: "oklch(1 0 0)",
          foreground: "oklch(0.24 0.03 258)"
        },
        popover: {
          DEFAULT: "oklch(1 0 0)",
          foreground: "oklch(0.24 0.03 258)"
        },
        primary: {
          DEFAULT: "oklch(0.38 0.09 260)",
          foreground: "oklch(0.99 0 0)"
        },
        secondary: {
          DEFAULT: "oklch(0.96 0.012 240)",
          foreground: "oklch(0.38 0.09 260)"
        },
        muted: {
          DEFAULT: "oklch(0.96 0.008 240)",
          foreground: "oklch(0.52 0.03 255)"
        },
        accent: {
          DEFAULT: "oklch(0.68 0.12 232)",
          foreground: "oklch(0.99 0 0)"
        },
        ocean: {
          DEFAULT: "oklch(0.68 0.12 232)",
          foreground: "oklch(0.99 0 0)"
        },
        destructive: "oklch(0.577 0.245 27.325)",
        border: "oklch(0.9 0.01 240)",
        input: "oklch(0.9 0.01 240)",
        ring: "oklch(0.68 0.12 232)",
        haein: {
          950: "#071a33",
          900: "#0a2547",
          700: "#0b66c3",
          500: "#1688ea",
          300: "#39c5ff"
        }
      },
      borderRadius: {
        sm: "0.45rem",
        md: "0.6rem",
        lg: "0.75rem",
        xl: "1.05rem",
        "2xl": "1.35rem",
        "3xl": "1.65rem",
        "4xl": "1.95rem"
      }
    }
  },
  plugins: []
};

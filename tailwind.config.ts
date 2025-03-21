import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontWeight: {
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },
    fontSize: {
      sm: ["1.3rem", "1.65"],
      md: ["1.4rem", "1.65"],
      base: ["1.6rem", "1.65"],
      lg: ["1.8rem", "1.6"],
    },
    extend: {
      backgroundImage: {
        gradient: "var(--gradient)",
        "gradient-dark": "var(--gradient-dark)",
      },
      colors: {
        white: "#fff",
        black: "#000",
        background: {
          DEFAULT: "#F2F4F5",
          lnb: "#1c2025",
          alert: "#1c202550",
          "page-dark": "#E8EBEE",
          page: "#F2F4F5",
          con: "#FFF",
        },
        foreground: "#000",
        primary: {
          "cyan-light": "#E7FAF6",
          cyan: "#06C8BB",
          "cyan-dark": "#00B59F",
          green: "#0BC409",
        },
        secondary: {
          "1": "#E7ECF3",
          "2": "#D4DBE4",
          "3": "#B0BCCC",
          "4": "#A9B7C9",
          "5": "#70839E",
          "6": "#60799A",
          "7": "#334A6C",
          "8": "#20325A",
          "9": "#1A233B",
        },
        gray: {
          "0": "#F6F7F8",
          "1": "#E9EDF0",
          "2": "#DADEE1",
          "3": "#CBCFD2",
          "4": "#ADB1B4",
          "5": "#8F9396",
          "6": "#717578",
          "7": "#53575A",
          "8": "#35393C",
          "9": "#171B1E",
        },
        gradient: {
          light: "var(--gradient)",
          dark: "var(--gradient-dark)",
        },
        states: {
          red: "#F75741",
          orange: "#E7871E",
          yellow: "#FFC45B",
          blue: "#0560FD",
          green: "#0BC274",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

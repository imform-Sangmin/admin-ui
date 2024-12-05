import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  presets: [require("tailwindcss-preset-px-to-rem")],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient: "var(--gradient)",
        "gradient-dark": "var(--gradient-dark)",
      },
      colors: {
        white: "#fff",
        black: "#000",
        background: {
          DEFAULT: "var(--background)",
          lnb: "var(--background-lnb)",
          alert: "var(--background-alert)",
          "page-dark": "var(--background-page-dark)",
          page: "var(--background-page)",
          con: "var(--background-con)",
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          "1": "var(--primary1)",
          "2": "var(--primary2)",
          "3": "var(--primary3)",
          "4": "var(--primary4)",
        },
        secondary: {
          "1": "var(--secondary-1)",
          "2": "var(--secondary-2)",
          "3": "var(--secondary-3)",
          "4": "var(--secondary-4)",
          "5": "var(--secondary-5)",
          "6": "var(--secondary-6)",
          "7": "var(--secondary-7)",
          "8": "var(--secondary-8)",
          "9": "var(--secondary-9)",
        },
        gray: {
          "0": "var(--gray-0)",
          "1": "var(--gray-1)",
          "2": "var(--gray-2)",
          "3": "var(--gray-3)",
          "4": "var(--gray-4)",
          "5": "var(--gray-5)",
          "6": "var(--gray-6)",
          "7": "var(--gray-7)",
          "8": "var(--gray-8)",
          "9": "var(--gray-9)",
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

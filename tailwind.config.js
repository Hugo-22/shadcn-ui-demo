/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'curious-blue': {
          '50': 'hsl(203, 87%, 97%)',
          '100': 'hsl(205, 81%, 94%)',
          '200': 'hsl(202, 80%, 86%)',
          '300': 'hsl(201, 80%, 74%)',
          '400': 'hsl(200, 78%, 60%)',
          '500': 'hsl(200, 74%, 45%)',
          '600': 'hsl(201, 82%, 39%)',
          '700': 'hsl(203, 80%, 32%)',
          '800': 'hsl(202, 76%, 27%)',
          '900': 'hsl(203, 67%, 24%)',
          '950': 'hsl(205, 68%, 16%)',
        },
        'tahiti-gold': {
          '50': 'hsl(40, 90%, 96%)',
          '100': 'hsl(40, 89%, 89%)',
          '200': 'hsl(40, 88%, 77%)',
          '300': 'hsl(38, 89%, 65%)',
          '400': 'hsl(35, 88%, 56%)',
          '500': 'hsl(29, 84%, 48%)',
          '600': 'hsl(24, 87%, 44%)',
          '700': 'hsl(18, 83%, 37%)',
          '800': 'hsl(14, 75%, 31%)',
          '900': 'hsl(14, 72%, 26%)',
          '950': 'hsl(13, 83%, 14%)',
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

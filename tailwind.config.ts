import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary brand colors
        primary: "#4A3AFF",
        "primary-dark": "#3A2AEF",
        "primary-light": "#6C5CFF",
        // background and surface colors
        surface: "#F5F5F9",
        card: "#FFFFFF",
        // text colors
        "text-primary": "#1A1A2E",
        "text-secondary": "#6B7280",
        "text-muted": "#9CA3AF",
        // status colors for job dashboard
        "status-progress": "#F59E0B",
        "status-applied": "#3B82F6",
        "status-offered": "#22C55E",
        "status-rejected": "#EF4444",
        // chart colors
        "chart-blue": "#4A3AFF",
        "chart-green": "#22C55E",
        "chart-red": "#EF4444",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
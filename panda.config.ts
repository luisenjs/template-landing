import { defineConfig } from "@pandacss/dev";
import { globalColors } from "./src/style/theme";

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{ts,tsx,js,jsx,astro}', './pages/**/*.{ts,tsx,js,jsx,astro}'],
  exclude: [],
  theme: {
    extend: {
      semanticTokens: {
        colors: { ...globalColors }
      }
    },
  },
  outdir: "styled-system",
});

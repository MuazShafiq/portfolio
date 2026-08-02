import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://muaz-shafiq-portfolio.vercel.app",
  output: "static",
  integrations: [react()],
});

// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://onpardev.com",
  // Explicitly set static output for Cloudflare Pages
  output: "static",
});


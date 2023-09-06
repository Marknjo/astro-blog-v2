import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  images: {
     remotePatterns: [{ protocol: "https" }],
    domains: 'astro.build',
  },
  site: "http://localhost:4321",
  integrations: [preact()]
});
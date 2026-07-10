// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// ────────────────────────────────────────────────────────────────────────────
// DEPLOYMENT CONFIG — EDIT THESE TWO LINES WHEN YOU DEPLOY
// ────────────────────────────────────────────────────────────────────────────
//
// `site`  = the full public address your site will live at.
// `base`  = the sub-folder part of that address (only needed for GitHub "project
//           pages", i.e. https://USERNAME.github.io/REPO).
//
// THREE COMMON CASES:
//
//  A) GitHub *project* page  →  https://USERNAME.github.io/REPO
//        site: "https://USERNAME.github.io"
//        base: "/REPO"          (keep the leading slash, no trailing slash)
//
//  B) GitHub *user* page     →  https://USERNAME.github.io
//        site: "https://USERNAME.github.io"
//        base: "/"              (or delete the base line entirely)
//
//  C) Your own custom domain →  https://www.dariaradiuk.com
//        site: "https://www.dariaradiuk.com"
//        base: "/"              (or delete the base line entirely)
//
// The README has step-by-step instructions. The defaults below are case (A)
// placeholders — replace USERNAME and REPO with your real values.
// ────────────────────────────────────────────────────────────────────────────

// This site is served from the custom domain dariaradiuk.com (case C above).
// It lives at the domain root, so base is "/", not a "/REPO" sub-folder.
const SITE = "https://www.dariaradiuk.com";
const BASE = "/";

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "ignore",
  // Bilingual setup. German is the default; English lives under /en/.
  i18n: {
    defaultLocale: "de",
    locales: ["en", "de"],
    routing: {
      prefixDefaultLocale: false, // German stays at the root, English at /en/
    },
  },
  // Generates sitemap-index.xml + sitemap-0.xml at build time, listing every
  // page so search engines can discover them. robots.txt points here.
  integrations: [sitemap()],
  build: {
    // Keep clean, shareable URLs like /videos/ instead of /videos.html
    format: "directory",
  },
  // Dev-server settings. `allowedHosts` lets you expose `npm run dev` through a
  // tunnel (e.g. a Cloudflare quick tunnel) so others can preview it. A leading
  // dot allows that domain and all its random subdomains.
  vite: {
    server: {
      allowedHosts: [".trycloudflare.com", ".ngrok-free.app", ".loca.lt"],
    },
  },
});

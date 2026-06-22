// @ts-check
import { defineConfig } from "astro/config";

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

// This repo is a GitHub *user* page (lobstervsouse.github.io), so it is served
// at the domain root — base is "/", not a "/REPO" sub-folder.
const SITE = "https://lobstervsouse.github.io";
const BASE = "/";

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "ignore",
  // Bilingual setup. English is the default; German lives under /de/.
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    routing: {
      prefixDefaultLocale: false, // English stays at the root, German at /de/
    },
  },
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

// ─────────────────────────────────────────────────────────────────────────────
// i18n helpers — small functions for working with the EN/DE setup.
// You normally don't need to edit this.
// ─────────────────────────────────────────────────────────────────────────────

import type { Lang } from "../data/site";

export const LOCALES: Lang[] = ["en", "de"];
export const DEFAULT_LOCALE: Lang = "de";

/** Figure out the current language from the URL pathname. */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split("/");
  if (maybeLang === "en") return "en";
  return "de";
}

/**
 * Build a path that respects the current language AND the deployment `base`.
 * German lives at the root (/videos), English under /en (/en/videos).
 *
 * Pass Astro's `import.meta.env.BASE_URL` as `base`.
 */
export function localizedPath(base: string, lang: Lang, path = ""): string {
  const cleanBase = base.replace(/\/$/, ""); // strip trailing slash
  const cleanPath = path.replace(/^\//, ""); // strip leading slash
  const langSegment = lang === DEFAULT_LOCALE ? "" : `/${lang}`;
  const tail = cleanPath ? `/${cleanPath}` : "";
  const full = `${cleanBase}${langSegment}${tail}`;
  // Always end with a slash for directory-style URLs (except files with a dot)
  if (full === "") return "/";
  return /\.[a-z0-9]+$/i.test(full) ? full : `${full}/`;
}

/**
 * Given the current URL, return the path to the SAME page in the other language.
 *
 * Pass the page's authoritative `current` language when you have it (the pages
 * know their own locale). We deliberately do NOT infer it from the first path
 * segment, because a deployment `base` (e.g. "/REPO") makes that segment the
 * repo name, not the locale — which previously broke the DE→EN direction.
 */
export function switchLangPath(url: URL, base: string, current?: Lang): string {
  const cleanBase = base.replace(/\/$/, "");

  // Strip the deployment base first, so what's left starts at the locale.
  let inner = url.pathname;
  if (cleanBase && inner.startsWith(cleanBase)) inner = inner.slice(cleanBase.length);

  // Detect the English prefix by exact segment ("/en" or "/en/..."), so paths
  // like "/entry" are never mistaken for the "en" locale.
  const isEn = inner === "/en" || inner.startsWith("/en/");
  const cur: Lang = current ?? (isEn ? "en" : "de");
  const target: Lang = cur === "de" ? "en" : "de";

  if (isEn) inner = inner.slice(3); // drop the "/en" segment
  inner = inner.replace(/^\//, "").replace(/\/$/, "");

  return localizedPath(base, target, inner);
}

/** The opposite language code (for the toggle label). */
export function otherLang(lang: Lang): Lang {
  return lang === "en" ? "de" : "en";
}

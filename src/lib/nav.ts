// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for the site navigation.
//
// Both the home-page hub (HomeNav) and the three-bar menu (MenuOverlay) build
// their links from here, so they always stay in sync. To add/remove/reorder a
// section, edit the list below — labels themselves live in src/data/ui.ts.
// ─────────────────────────────────────────────────────────────────────────────

import { t } from "../data/ui";
import type { Lang } from "../data/site";

export interface NavItem {
  num: string;
  label: string;
  path: string;
  style: "sans" | "serif";
  cta?: boolean;
}

export function navItems(lang: Lang): NavItem[] {
  const s = t(lang);
  const items: Omit<NavItem, "num">[] = [
    { label: s.nav.videos, path: "videos", style: "sans" },
    { label: s.nav.posts, path: "posts", style: "serif" },
    { label: s.nav.texts, path: "texts", style: "sans" },
    { label: s.nav.projects, path: "projects", style: "serif" },
    { label: s.nav.achievements, path: "achievements", style: "sans" },
    { label: s.nav.about, path: "about", style: "serif" },
    { label: s.nav.contact, path: "contact", style: "sans", cta: true },
  ];
  return items.map((it, i) => ({ num: String(i + 1).padStart(2, "0"), ...it }));
}

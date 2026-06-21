// Helpers for fetching content collections filtered by language and sorted the
// way each section wants. Keeps the page files small and tidy.
import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "../data/site";

type AnyCollection = "videos" | "posts" | "texts" | "projects";

/** All entries in a collection for one language, sorted by `order` then date. */
export async function byLang<C extends AnyCollection>(
  collection: C,
  lang: Lang,
): Promise<CollectionEntry<C>[]> {
  const all = await getCollection(collection);
  return all
    .filter((e) => (e.data as { lang: Lang }).lang === lang)
    .sort((a, b) => {
      const ao = (a.data as { order?: number }).order ?? 0;
      const bo = (b.data as { order?: number }).order ?? 0;
      if (ao !== bo) return ao - bo;
      const ad = (a.data as { date?: Date }).date?.getTime() ?? 0;
      const bd = (b.data as { date?: Date }).date?.getTime() ?? 0;
      return bd - ad; // newer first when order ties
    });
}

/** Estimate reading time (minutes) from raw markdown body. ~200 wpm. */
export function readingTime(body: string, override?: number): number {
  if (override && override > 0) return override;
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/** Collect every unique tag across a set of entries (for filter chips). */
export function collectTags(entries: { data: { tags?: string[] } }[]): string[] {
  const set = new Set<string>();
  for (const e of entries) (e.data.tags ?? []).forEach((t) => set.add(t));
  return [...set];
}

/** The slug without any "en-"/"de-" language prefix, for clean shared URLs. */
export function cleanSlug(slug: string): string {
  return slug.replace(/^(en|de)[-/]/, "");
}

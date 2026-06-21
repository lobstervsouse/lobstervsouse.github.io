import { defineCollection, z } from "astro:content";

// ─────────────────────────────────────────────────────────────────────────────
// CONTENT COLLECTIONS — this file defines the "shape" of each kind of content.
//
// You normally do NOT need to touch this file. To ADD content, you just drop a
// new file into the matching folder under src/content/ (see README). The fields
// below are simply the list of things each item can have. Anything marked
// .optional() can be left out.
//
// The `lang` field on every item is either "en" or "de" — that's how the site
// knows which language a piece of content belongs to.
// ─────────────────────────────────────────────────────────────────────────────

const lang = z.enum(["en", "de"]);

// How a piece of media is delivered. "upload" = a file you uploaded into the
// project. The others are social embeds we can wire up later (the data model is
// already ready for them).
const mediaSource = z.enum(["upload", "youtube", "tiktok", "instagram"]);

// Reusable media block: either an uploaded file (give `src`) OR a social embed
// (give `url` or `embedId`). `poster` is an optional thumbnail image.
const media = z.object({
  type: mediaSource.default("upload"),
  // For uploads: path to the file, e.g. "/media/videos/reel-1.mp4"
  src: z.string().optional(),
  // For embeds: the full public URL of the post/video
  url: z.string().url().optional(),
  // For embeds: just the id, if you prefer (e.g. a YouTube video id)
  embedId: z.string().optional(),
  // Optional thumbnail/cover image, e.g. "/media/videos/reel-1-cover.jpg"
  poster: z.string().optional(),
  // Always describe the media for screen-readers / accessibility
  alt: z.string().default(""),
});

// 01 — VIDEOS (Reels / short vertical videos)
const videos = defineCollection({
  type: "content",
  schema: z.object({
    lang,
    title: z.string(),
    description: z.string().optional(),
    // Used for the carousel order — lower numbers show first.
    order: z.number().default(0),
    // Hashtag filter chips, e.g. ["educational", "growth"]
    tags: z.array(z.string()).default([]),
    media,
    // Optional stats shown in the detail view
    views: z.string().optional(),
    likes: z.string().optional(),
    date: z.coerce.date().optional(),
    featured: z.boolean().default(false),
  }),
});

// 02 — POSTS (Instagram-style image posts)
const posts = defineCollection({
  type: "content",
  schema: z.object({
    lang,
    title: z.string(),
    caption: z.string().optional(),
    order: z.number().default(0),
    tags: z.array(z.string()).default([]),
    media,
    likes: z.string().optional(),
    comments: z.string().optional(),
    handle: z.string().optional(), // e.g. "@daria.radiuk"
    date: z.coerce.date().optional(),
  }),
});

// 03 — TEXTS (written articles). The body of the markdown file is the article.
const texts = defineCollection({
  type: "content",
  schema: z.object({
    lang,
    title: z.string(),
    excerpt: z.string().optional(),
    order: z.number().default(0),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(), // optional cover image path
    date: z.coerce.date().optional(),
    // Read time is computed automatically from the body — no need to set it.
    readingTimeOverride: z.number().optional(),
  }),
});

// 04 — OTHER PROJECTS (case-study folders: a task description + a media preview)
const projects = defineCollection({
  type: "content",
  schema: z.object({
    lang,
    title: z.string(),
    // Short "preview of the task description" shown on the folder card.
    summary: z.string(),
    order: z.number().default(0),
    tags: z.array(z.string()).default([]),
    // The "preview of video/text" — a media block (upload or embed) or a cover.
    media: media.optional(),
    cover: z.string().optional(),
    client: z.string().optional(),
    role: z.string().optional(),
    date: z.coerce.date().optional(),
    link: z.string().url().optional(), // optional external link to the work
  }),
});

export const collections = { videos, posts, texts, projects };

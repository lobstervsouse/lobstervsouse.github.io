// ─────────────────────────────────────────────────────────────────────────────
// SITE & PROFILE SETTINGS
//
// This is the single place to edit the owner's name, bio, contact details,
// social links and the intro video. Change the values here and they update
// everywhere on the site.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  // Shown as the serif logo top-left.
  name: "Daria Radiuk",

  // ── CONTACT ────────────────────────────────────────────────────────────────
  // 1) Your public email (shown on the Contact page as a fallback).
  email: "hello@dariaradiuk.com", // ← replace with the real address

  // 2) Formspree form id. Create a free form at https://formspree.io and paste
  //    the part after "/f/" here. While it says YOUR_FORMSPREE_ID the form
  //    still looks/works but submissions won't be delivered.
  formspreeId: "YOUR_FORMSPREE_ID", // ← replace, e.g. "xayzwqpb"

  // ── SOCIAL LINKS ─────────────────────────────────────────────────────────────
  // Leave a URL empty ("") to hide that icon.
  socials: {
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/",
    youtube: "https://youtube.com/",
    linkedin: "https://linkedin.com/",
  },

  // ── INTRO VIDEO ──────────────────────────────────────────────────────────────
  // The short "hi!" video that plays only on a visitor's FIRST visit.
  // Use an uploaded file (put it in /public/media/) or a YouTube id.
  introVideo: {
    enabled: true,
    type: "upload" as "upload" | "youtube",
    src: "/media/intro.mp4", // used when type === "upload"
    youtubeId: "", // used when type === "youtube"
    poster: "/media/intro-poster.svg",
  },
};

// Bilingual profile text (bio + hero subtitle). Keep both languages filled in.
export const profile = {
  en: {
    heroLead: "My portfolio",
    heroFor: "for social media marketing",
    bio: "Social media marketer turning scrolls into communities. I craft content that educates, grows audiences, and occasionally goes viral — across short-form video, posts, and the written word.",
    role: "Social Media Marketing",
  },
  de: {
    heroLead: "Mein Portfolio",
    heroFor: "für Social-Media-Marketing",
    bio: "Social-Media-Marketing, das aus Scrollen Communities macht. Ich erstelle Inhalte, die informieren, Reichweite aufbauen und gelegentlich viral gehen — über Kurzvideos, Posts und das geschriebene Wort.",
    role: "Social-Media-Marketing",
  },
};

export type Lang = "en" | "de";

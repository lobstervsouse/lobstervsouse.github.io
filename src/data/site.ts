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
    // About page: a short intro line followed by longer paragraphs. Separate
    // paragraphs with a blank line — each becomes its own paragraph on the page.
    aboutLede: "Hi, I'm Daria — I help brands show up on social with content that actually gets watched, shared and remembered.",
    aboutBody: `I've spent the last few years living inside the feed: planning content calendars, writing hooks, editing short-form video and turning data into the next idea. My favourite work sits where creativity meets numbers — a reel that's fun to make AND moves the metric that matters.

I work across short-form video, grid posts, and long-form writing, and I care just as much about strategy as about the final cut. Whether it's growing a community from zero or refreshing a tired brand voice, I like problems that need both taste and a spreadsheet.

When I'm not in the editing timeline, you'll find me studying trends, breaking down why something went viral, and collecting references for the next campaign.`,
  },
  de: {
    heroLead: "Mein Portfolio",
    heroFor: "für Social-Media-Marketing",
    bio: "Social-Media-Marketing, das aus Scrollen Communities macht. Ich erstelle Inhalte, die informieren, Reichweite aufbauen und gelegentlich viral gehen — über Kurzvideos, Posts und das geschriebene Wort.",
    role: "Social-Media-Marketing",
    aboutLede: "Hi, ich bin Daria — ich helfe Marken, auf Social Media mit Inhalten sichtbar zu werden, die wirklich gesehen, geteilt und erinnert werden.",
    aboutBody: `Die letzten Jahre habe ich im Feed gelebt: Content-Kalender geplant, Hooks geschrieben, Kurzvideos geschnitten und aus Daten die nächste Idee gemacht. Meine liebste Arbeit liegt dort, wo Kreativität auf Zahlen trifft — ein Reel, das Spaß macht UND die Kennzahl bewegt, auf die es ankommt.

Ich arbeite mit Kurzvideos, Grid-Posts und längeren Texten und lege auf Strategie genauso viel Wert wie auf den finalen Schnitt. Ob eine Community von null aufbauen oder eine müde Markenstimme auffrischen — ich mag Aufgaben, die Geschmack und Tabelle zugleich brauchen.

Wenn ich nicht im Schnitt sitze, studiere ich Trends, analysiere, warum etwas viral ging, und sammle Referenzen für die nächste Kampagne.`,
  },
};

export type Lang = "en" | "de";

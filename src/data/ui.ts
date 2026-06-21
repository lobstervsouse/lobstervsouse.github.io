// ─────────────────────────────────────────────────────────────────────────────
// UI STRINGS (translations)
//
// Every label, button and bit of fixed text on the site lives here in both
// English (en) and German (de). To change wording, edit the value; to keep the
// site fully bilingual always provide both languages.
// ─────────────────────────────────────────────────────────────────────────────

import type { Lang } from "./site";

export const ui = {
  en: {
    // Navigation (the numbered menu on the home page)
    nav: {
      videos: "Videos",
      posts: "Posts",
      texts: "Texts",
      projects: "Other projects",
      achievements: "Achievements",
      contact: "Contact me!",
      home: "Home",
    },
    // Generic
    backHome: "Back to home",
    back: "Back",
    next: "Next",
    previous: "Previous",
    readMore: "Read more",
    readArticle: "Read article",
    viewProject: "View project",
    allTopics: "All",
    filterBy: "Filter by topic",
    nothingHere: "Nothing here yet — check back soon.",
    // Intro overlay
    introTitle: "A quick hello",
    introSkip: "Skip intro",
    introEnter: "Enter site",
    // Sections / pages
    videosTitle: "Videos",
    postsTitle: "Posts",
    textsTitle: "Texts",
    projectsTitle: "Other projects",
    achievementsTitle: "Achievements",
    contactTitle: "Contact me!",
    // Reading time
    minRead: "min read",
    // Achievements sub-headings
    statistics: "Statistik",
    skills: "Skills",
    education: "Education",
    certifications: "Certifications",
    // Contact form
    formName: "Your name",
    formEmail: "Your email",
    formMessage: "Your message",
    formSend: "Send message",
    formSending: "Sending…",
    formSuccess: "Thank you! Your message has been sent.",
    formError: "Something went wrong. Please email me directly.",
    orEmail: "Or email me directly at",
    findMe: "Find me on",
    // Theme + language toggles (accessible labels)
    toggleTheme: "Toggle day / night mode",
    toggleLang: "Switch language",
    // Posts detail
    caption: "Caption",
    // Misc
    featured: "Featured",
    skipToContent: "Skip to content",
  },
  de: {
    nav: {
      videos: "Videos",
      posts: "Posts",
      texts: "Texte",
      projects: "Weitere Projekte",
      achievements: "Erfolge",
      contact: "Kontaktiere mich!",
      home: "Start",
    },
    backHome: "Zurück zur Startseite",
    back: "Zurück",
    next: "Weiter",
    previous: "Zurück",
    readMore: "Mehr lesen",
    readArticle: "Artikel lesen",
    viewProject: "Projekt ansehen",
    allTopics: "Alle",
    filterBy: "Nach Thema filtern",
    nothingHere: "Noch nichts hier — schau bald wieder vorbei.",
    introTitle: "Ein kurzes Hallo",
    introSkip: "Intro überspringen",
    introEnter: "Zur Seite",
    videosTitle: "Videos",
    postsTitle: "Posts",
    textsTitle: "Texte",
    projectsTitle: "Weitere Projekte",
    achievementsTitle: "Erfolge",
    contactTitle: "Kontaktiere mich!",
    minRead: "Min. Lesezeit",
    statistics: "Statistik",
    skills: "Fähigkeiten",
    education: "Ausbildung",
    certifications: "Zertifikate",
    formName: "Dein Name",
    formEmail: "Deine E-Mail",
    formMessage: "Deine Nachricht",
    formSend: "Nachricht senden",
    formSending: "Wird gesendet…",
    formSuccess: "Danke! Deine Nachricht wurde gesendet.",
    formError: "Etwas ist schiefgelaufen. Bitte schreib mir direkt eine E-Mail.",
    orEmail: "Oder schreib mir direkt an",
    findMe: "Folge mir auf",
    toggleTheme: "Tag- / Nachtmodus umschalten",
    toggleLang: "Sprache wechseln",
    caption: "Bildunterschrift",
    featured: "Empfohlen",
    skipToContent: "Zum Inhalt springen",
  },
} as const;

export type UIStrings = (typeof ui)["en"];

export function t(lang: Lang): UIStrings {
  return ui[lang];
}

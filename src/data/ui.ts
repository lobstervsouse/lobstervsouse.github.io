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
      about: "About me",
      contact: "Contact me!",
      home: "Home",
    },
    // Menu (the three-bar navigation)
    menuOpen: "Open menu",
    menuClose: "Close menu",
    menuTitle: "Navigate",
    // About page
    aboutTitle: "About me",
    aboutEyebrow: "Who I am",
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
    // Section eyebrows + ledes (editorial section headers)
    videosEyebrow: "Reels & short-form",
    videosLede: "Scroll-stopping short video — the hooks, trends and formats that earn the watch.",
    postsEyebrow: "On the grid",
    postsLede: "A feed of posts, campaigns and carousels. Filter by topic to explore.",
    textsEyebrow: "Field notes",
    textsLede: "Longer reads on strategy, growth and the craft of social media.",
    projectsEyebrow: "Selected work",
    projectsLede: "A few projects worth opening — the brief, the work, the result.",
    achievementsEyebrow: "By the numbers",
    achievementsLede: "Results, skills, schooling and the badges that back them up.",
    contactEyebrow: "Say hello",
    contactLede: "Have a project in mind, or just want to talk shop? I'd love to hear from you.",
    // Reading time
    minRead: "min read",
    // Stat labels (detail views)
    views: "views",
    likes: "likes",
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
      about: "Über mich",
      contact: "Kontaktiere mich!",
      home: "Start",
    },
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    menuTitle: "Navigation",
    aboutTitle: "Über mich",
    aboutEyebrow: "Wer ich bin",
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
    videosEyebrow: "Reels & Kurzvideo",
    videosLede: "Kurzvideos, die den Scroll stoppen — die Hooks, Trends und Formate, die Aufmerksamkeit verdienen.",
    postsEyebrow: "Im Feed",
    postsLede: "Ein Feed aus Posts, Kampagnen und Carousels. Nach Thema filtern zum Stöbern.",
    textsEyebrow: "Notizen",
    textsLede: "Längere Texte zu Strategie, Wachstum und dem Handwerk Social Media.",
    projectsEyebrow: "Ausgewählte Arbeiten",
    projectsLede: "Ein paar Projekte, die einen Blick wert sind — Briefing, Umsetzung, Ergebnis.",
    achievementsEyebrow: "In Zahlen",
    achievementsLede: "Ergebnisse, Fähigkeiten, Ausbildung und die passenden Zertifikate.",
    contactEyebrow: "Sag Hallo",
    contactLede: "Du hast ein Projekt im Kopf oder willst einfach fachsimpeln? Ich freue mich auf deine Nachricht.",
    minRead: "Min. Lesezeit",
    views: "Aufrufe",
    likes: "Likes",
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

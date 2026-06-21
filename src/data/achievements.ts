// ─────────────────────────────────────────────────────────────────────────────
// ACHIEVEMENTS DATA  (page 05)
//
// Four areas: Statistik (animated counters), Skills (bars), Education
// (timeline), Certifications (badges). All bilingual.
//
// TO EDIT: change the numbers/labels below. To ADD a stat, skill, school or
// certificate, copy one entry in the array and change its values — it appears
// automatically. Keep the `en` and `de` versions in sync.
// ─────────────────────────────────────────────────────────────────────────────

import type { Lang } from "./site";

type Stat = {
  // The number to count up to (just the number, no symbols)
  value: number;
  // Prefix/suffix around the number, e.g. "+", "M", "%", "x"
  prefix?: string;
  suffix?: string;
  label: string;
};

type Skill = { name: string; level: number }; // level = 0–100

type Education = {
  period: string;
  title: string;
  place: string;
  detail?: string;
};

type Certification = { name: string; issuer: string; year: string };

type AchievementSet = {
  statistics: Stat[];
  skills: Skill[];
  education: Education[];
  certifications: Certification[];
};

export const achievements: Record<Lang, AchievementSet> = {
  en: {
    statistics: [
      { value: 2.4, suffix: "M", label: "Total views generated" },
      { value: 180, prefix: "+", suffix: "K", label: "Followers grown" },
      { value: 12, label: "Viral campaigns" },
      { value: 98, suffix: "%", label: "Client retention" },
    ],
    skills: [
      { name: "Short-form video", level: 95 },
      { name: "Content strategy", level: 90 },
      { name: "Copywriting", level: 85 },
      { name: "Community management", level: 88 },
      { name: "Analytics & reporting", level: 80 },
      { name: "Paid social", level: 75 },
    ],
    education: [
      {
        period: "2021 – 2024",
        title: "B.A. Media & Communication",
        place: "University of the Arts",
        detail: "Focus on digital marketing and audience behaviour.",
      },
      {
        period: "2023",
        title: "Social Media Marketing Certificate",
        place: "Meta Blueprint",
        detail: "Advanced campaign and growth strategy.",
      },
    ],
    certifications: [
      { name: "Meta Certified Marketing Pro", issuer: "Meta", year: "2024" },
      { name: "Google Analytics Certified", issuer: "Google", year: "2023" },
      { name: "TikTok Marketing Essentials", issuer: "TikTok", year: "2023" },
      { name: "HubSpot Content Marketing", issuer: "HubSpot", year: "2022" },
    ],
  },
  de: {
    statistics: [
      { value: 2.4, suffix: "M", label: "Generierte Aufrufe" },
      { value: 180, prefix: "+", suffix: "K", label: "Neue Follower" },
      { value: 12, label: "Virale Kampagnen" },
      { value: 98, suffix: "%", label: "Kundenbindung" },
    ],
    skills: [
      { name: "Kurzvideos", level: 95 },
      { name: "Content-Strategie", level: 90 },
      { name: "Texten / Copywriting", level: 85 },
      { name: "Community-Management", level: 88 },
      { name: "Analyse & Reporting", level: 80 },
      { name: "Paid Social", level: 75 },
    ],
    education: [
      {
        period: "2021 – 2024",
        title: "B.A. Medien & Kommunikation",
        place: "Universität der Künste",
        detail: "Schwerpunkt digitales Marketing und Nutzerverhalten.",
      },
      {
        period: "2023",
        title: "Zertifikat Social-Media-Marketing",
        place: "Meta Blueprint",
        detail: "Fortgeschrittene Kampagnen- und Wachstumsstrategie.",
      },
    ],
    certifications: [
      { name: "Meta Certified Marketing Pro", issuer: "Meta", year: "2024" },
      { name: "Google Analytics Zertifiziert", issuer: "Google", year: "2023" },
      { name: "TikTok Marketing Essentials", issuer: "TikTok", year: "2023" },
      { name: "HubSpot Content-Marketing", issuer: "HubSpot", year: "2022" },
    ],
  },
};

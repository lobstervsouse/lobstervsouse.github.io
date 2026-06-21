# Daria Radiuk — Portfolio Website

A bilingual (English / German) portfolio for showing off social-media-marketing
work: short videos, posts, written articles, projects and achievements. Built so
that **adding new content is as simple as dropping a file into a folder** — no
coding needed.

This guide is written for a non-technical owner. Take it slowly; each section is
self-contained.

---

## 1. What you need once

- A free [GitHub](https://github.com) account (this is where the site lives and
  where you'll upload content).
- That's it for publishing. For previewing on your own computer you'd also need
  [Node.js](https://nodejs.org) (the "LTS" version), but you can skip that and
  let GitHub build the site for you.

---

## 2. Preview it on your own computer (optional)

Only needed if you want to see changes before they go live.

1. Open a terminal in this project folder.
2. Run `npm install` once (downloads the building blocks).
3. Run `npm run dev`.
4. Open the address it prints (usually `http://localhost:4321`).

The page updates automatically as you edit files. Press `Ctrl + C` in the
terminal to stop.

To produce the final files the way GitHub does, run `npm run build` — it must
finish with **"Complete!"** and no red errors.

---

## 3. The big idea: content lives in folders

All your content sits in **`src/content/`**, split into four folders:

| Folder                  | What goes here                          |
| ----------------------- | --------------------------------------- |
| `src/content/videos/`   | Short vertical videos / Reels (01)      |
| `src/content/posts/`    | Instagram-style image posts (02)        |
| `src/content/texts/`    | Written articles (03)                   |
| `src/content/projects/` | Case-study / project folders (04)       |

Each item is **one file**. The file name should start with the language:
`en-` for English, `de-` for German. For example `en-my-new-reel.md`.

**To add something, copy an existing file in the same folder, rename it, and
edit the text at the top.** It appears on the site automatically — no other
step.

> The bit at the very top of each file (between the two `---` lines) is the
> "details" (title, tags, etc.). The text below the second `---` is the body
> (used as the article text, or as notes).

### Add a VIDEO (01)

Create `src/content/videos/en-something.md`:

```markdown
---
lang: en                       # "en" or "de"
title: My new reel
description: One line about it.
order: 1                       # lower = shows first in the carousel
tags: ["educational", "growth"]  # the #hashtag filter chips
views: "120K"                  # optional
likes: "9.1K"                  # optional
media:
  type: upload                 # upload | youtube | tiktok | instagram
  src: /media/videos/my-reel.mp4   # your uploaded file (see §5)
  poster: /media/videos/my-reel.jpg # optional cover image
  alt: A short description for accessibility
---
```

To use a YouTube video instead of an uploaded file:

```markdown
media:
  type: youtube
  url: https://youtu.be/XXXXXXXXXXX
  alt: A short description
```

### Add a POST (02)

Create `src/content/posts/en-something.md`:

```markdown
---
lang: en
title: My new post
caption: The caption shown under the post. #growth
order: 1
tags: ["growth"]
likes: "8,204 likes"
comments: "312"
handle: "@daria.radiuk"
media:
  type: upload
  src: /media/posts/my-post.jpg
  alt: A short description
---
```

(If you leave `media` empty, a tasteful placeholder image is shown.)

### Add an ARTICLE (03)

Create `src/content/texts/en-something.md`. The **body text below the second
`---` is the article**. Reading time ("5 min read") is calculated for you.

```markdown
---
lang: en
title: The rise of Gen Z in business
excerpt: A one-line teaser shown on the card.
order: 1
tags: ["growth"]
date: 2025-02-18
---

Write your article here. Use blank lines between paragraphs.

## A subheading

- a bullet
- another bullet
```

### Add a PROJECT (04)

Create `src/content/projects/en-something.md`:

```markdown
---
lang: en
title: Skincare brand launch
summary: A short preview of the task (shown on the folder card).
order: 1
tags: ["growth"]
client: Lumea Skincare       # optional
role: Social lead            # optional
date: 2024-11-01             # optional
link: https://example.com    # optional external link
media:
  type: upload
  src: /media/projects/launch.jpg
  alt: A short description
---

## The task
What you were asked to do.

## What I did
The work.

## Result
The outcome.
```

> **Keep both languages in sync.** To have an item show in German too, make a
> matching `de-...md` file with `lang: de` and translated text. If a German
> version is missing, that item simply won't appear on the German pages.

---

## 4. Editing the "fixed" pieces

These live in `src/data/` (open with any text editor):

- **`src/data/site.ts`** — your name, email, social links, the intro video, and
  the Formspree id (see §6).
- **`src/data/achievements.ts`** — the four Achievements boxes: Statistik
  (number counters), Skills (bars), Education (timeline), Certifications
  (badges). Copy a line to add an item. English and German each have their own
  block.
- **`src/data/ui.ts`** — every button/label in both languages (e.g. "Read
  more"). Only edit if you want to reword something.

---

## 5. Uploading photos and videos

Put media files in the **`public/media/`** folder. A file at
`public/media/videos/my-reel.mp4` is referred to in a content file as
`/media/videos/my-reel.mp4` (drop the `public`). See
`public/media/README.md` for the suggested folder layout and size tips.

The **intro video** (the "hi!" clip that plays only on someone's first visit):
drop `public/media/intro.mp4`, or set a YouTube id in `src/data/site.ts`.

---

## 6. Switching languages

There's a **EN / DE** toggle in the top-right of every page. English pages live
at the normal address; German pages live under `/de/`. The toggle keeps the
visitor on the same page in the other language.

---

## 7. Contact form (Formspree)

The contact form uses [Formspree](https://formspree.io) (free), which works on
this kind of static site.

1. Sign up at formspree.io and create a new form.
2. Copy the form's id (the part after `/f/` in its endpoint, e.g. `xayzwqpb`).
3. Open `src/data/site.ts` and replace `YOUR_FORMSPREE_ID` with it.
4. Set your real `email` in the same file (shown as a fallback and used if the
   form isn't set up yet).

Until you do step 3, the form still looks right but will send the visitor to
your email app instead of submitting.

---

## 8. Publishing to the web (GitHub Pages)

The site auto-publishes every time you push/upload to GitHub.

**One-time setup:**

1. Create a new repository on GitHub and upload this whole project to it
   (drag-and-drop on github.com works, or use Git).
2. On GitHub: **Settings → Pages → Build and deployment → Source:** choose
   **GitHub Actions**.
3. Tell the site its web address by editing **`astro.config.mjs`** (top of the
   file):

   - **Project page** `https://USERNAME.github.io/REPO`
     ```js
     const SITE = "https://USERNAME.github.io";
     const BASE = "/REPO";
     ```
   - **User page** `https://USERNAME.github.io`
     ```js
     const SITE = "https://USERNAME.github.io";
     const BASE = "/";
     ```
   - **Custom domain** `https://www.dariaradiuk.com`
     ```js
     const SITE = "https://www.dariaradiuk.com";
     const BASE = "/";
     ```

   (Replace `USERNAME` and `REPO` with your real GitHub username and repository
   name.)

That's it. From now on, **every change you upload to the `main` branch rebuilds
and republishes the site automatically** — including new content files added
through the GitHub website. Watch progress under the repo's **Actions** tab.

### Using a custom domain

If you bought a domain (e.g. from Namecheap/GoDaddy):

1. In the repo, create a file named `public/CNAME` containing just your domain,
   e.g. `www.dariaradiuk.com`.
2. Set `SITE`/`BASE` as in the "Custom domain" example above.
3. At your domain provider, point the domain to GitHub Pages (GitHub's docs:
   "Managing a custom domain for your GitHub Pages site").

---

## 9. Later: pulling content from social media automatically

The content model already includes a `type` field
(`upload | youtube | tiktok | instagram`) and a url/id. So a future "sync
script" could fetch your latest Instagram/TikTok/YouTube posts and write content
files in exactly the same format — and they'd appear on the site with no other
changes. Nothing about today's setup needs to change to add that later.

---

## Folder map (where things are)

```
src/
  content/        ← YOUR CONTENT lives here (videos, posts, texts, projects)
  data/           ← site info, achievements, all UI text (EN+DE)
  pages/          ← the URLs of the site (English at root, German under /de/)
  sections/       ← the layout of each page
  components/     ← reusable pieces (header, cards, carousel, form…)
  layouts/        ← the shared page shell
  styles/         ← colours, fonts, spacing
public/
  media/          ← uploaded images & videos
.github/workflows/deploy.yml  ← the auto-publish robot
astro.config.mjs  ← your web address (edit when deploying)
```

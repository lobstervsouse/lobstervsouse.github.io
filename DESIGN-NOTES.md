# Design notes

How the finished site relates to the 8-page Canva wireframe
(`DAHNBoabAd0`, "Black Simple Dark Blogger Bio Link Website"), the assumptions
made, and where (and why) the real site deviates.

## Approach

The Canva file is a wireframe / outline, so it was treated as the **information
architecture and style direction**, then elevated into a polished, responsive,
accessible real site. Every page from the wireframe is present and recognisable;
the rough elements (dotted lines, annotation arrows, lorem placeholders) were
turned into the real features they describe.

## Design tokens extracted from the wireframe

- **Background:** near-black `#1a1a1a` (dark theme is the default, as drawn).
- **Text:** warm off-white `#f3efe9`.
- **Accent:** a blush pink `#e8a0b4`, pulled from Daria's pink turtleneck in the
  page-1 avatar. The wireframe itself is monochrome; this gives the site a
  single, on-brand colour that ties the avatar, buttons, links and stat numbers
  together. Easy to change in `src/styles/global.css`.
- **Type pairing:** Playfair Display (elegant serif, used for the logo and the
  italic nav items "Posts", "Other projects", "Contact me!") + Inter (geometric
  sans for the hero, section titles, body). This matches the mixed sans/serif-
  italic treatment in the wireframe.
- **Numbered nav:** small superscript `01`–`06`, exactly as drawn.

## Page-by-page mapping

| Wireframe page         | Built as                                                                                                  |
| ---------------------- | --------------------------------------------------------------------------------------------------------- |
| 1 — Home hub           | Logo, hero "My portfolio …", avatar, numbered nav (sans + serif-italic), Contact CTA with arrow chip.     |
| (annotations on p.1)   | First-visit intro video → dismissible overlay gated by `localStorage`. Day/Night toggle. View Transitions. |
| 2 — Videos             | 3-up phone carousel, centre enlarged, left/right arrows, keyboard + swipe; `#educational #growth #viral`. |
| 3 — Video detail       | Enlarged phone player + title, stats and tags on a dedicated detail page.                                 |
| 4 — Posts              | Instagram-style 3-across grid; vertical hashtag chips on the right (incl. `#creative design`).            |
| 5 — Post detail        | Single enlarged post card with like/comment/share/save row + caption.                                     |
| 6 — Texts              | Bordered article cards with title, excerpt and an auto-computed read-time badge → full markdown article.  |
| 7 — Other projects     | Folder cards with a "document" peeking out (task-description preview) + media preview → project detail.    |
| 8 — Achievements       | Four quadrants: **Statistik** (animated count-up), **Skills** (bars), **Education** (timeline), **Certifications** (badges). |
| 06 — Contact           | Formspree form + email + social links.                                                                    |

## Deliberate deviations (and why)

1. **Persistent header instead of a per-page floating toggle.** The wireframe
   shows the Day/Night control only on page 1. A sticky header carrying the
   logo, the EN/DE toggle and the theme toggle on every page is more usable and
   expected on the web. The home page keeps the airy, hub-like feel.

2. **Accent colour added.** The wireframe is monochrome. A single restrained
   pink accent (from the avatar) improves hierarchy, focus states and
   call-to-action visibility while staying classy. One variable to change.

3. **Placeholder media is intentional, not blank.** Where the wireframe shows a
   generic sky/cloud/hills mock, the site renders that same scene as a tasteful
   SVG placeholder (with a slight per-item hue shift so a grid doesn't look
   cloned). Real uploads replace it automatically.

4. **Avatar is a lightweight inline SVG** (dark hair, pink turtleneck, smiling)
   rather than the exact Canva illustration, since the source art wasn't
   provided as an asset. It's isolated in `src/components/Avatar.astro` and can
   be swapped for a real illustration in one place.

5. **Posts/Videos detail pages are real routes**, not modals. This makes each
   piece individually shareable and linkable (important for a marketer) and
   plays nicely with the page-transition animation. The visual treatment still
   matches the wireframe's "single enlarged" idea.

6. **Reading time is computed** from the article body (~200 wpm) rather than
   hard-coded like the wireframe's "5 mins". An override field exists if needed.

7. **`#creative design` tag** kept verbatim as a tag value (with the space), as
   written on wireframe page 4.

## Accessibility & performance

- WCAG-AA-minded contrast in both themes; visible focus rings; a skip-to-content
  link; the carousel is keyboard-navigable; all media take `alt` text.
- `prefers-reduced-motion` is honoured — transitions, the avatar float, skill
  bars and stat counters all reduce/disable for users who ask for less motion.
- `prefers-color-scheme` is respected on a visitor's first load; their explicit
  toggle choice is then remembered.
- No UI framework and almost no JavaScript: a few small inline scripts for the
  toggles, carousel, filters, counters, contact form and intro. Fonts load with
  `preconnect`; images lazy-load. Pages are fully static HTML.

## Assumptions

- Used realistic **placeholder** content (English + German) for all four
  collections, plus placeholder stats/skills/education/certs. All clearly
  structured so real content drops in by copying a file.
- Email, social URLs and the Formspree id are **placeholders** in
  `src/data/site.ts` and must be filled in before launch.
- `astro.config.mjs` ships with `USERNAME`/`REPO` placeholders for a GitHub
  project-pages deploy; the README explains the three deploy scenarios.

## Open questions for you

1. **Hero line** currently reads "My portfolio — for social media marketing"
   (the wireframe trails off at "…FOR …"). Want a specific role/company there?
2. **Real brand colour?** The pink is inferred from the avatar — happy to match
   an exact brand hex if you have one.
3. **Avatar:** keep the illustrated SVG, or will you provide a real
   photo/illustration to drop in?
4. **Achievement numbers** are placeholders — send the real stats/skills/
   education/certs when ready (or edit `src/data/achievements.ts` directly).

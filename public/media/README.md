# Media folder

Put uploaded files here — videos, post images, article covers, the intro clip.

Anything you drop in `public/` is served from the root of the site. So a file at:

    public/media/videos/my-reel.mp4

is referenced in a content file as:

    media:
      type: upload
      src: /media/videos/my-reel.mp4

Suggested folders (create them as you need them):

    public/media/videos/    ← reel videos + their cover images
    public/media/posts/      ← post images
    public/media/texts/      ← article cover images
    public/media/projects/   ← project preview images/videos
    public/media/intro.mp4   ← the first-visit "hi!" video (or set a YouTube id in src/data/site.ts)

Tips:
- Keep videos reasonably small (a 9:16 reel under ~15 MB plays fast).
- Always add an `alt` description in the content file for accessibility.
- For the intro, either drop `intro.mp4` here or, in `src/data/site.ts`, set
  `introVideo.type` to `"youtube"` and fill in `youtubeId`.

# GitHub Pages — Static Portfolio

This folder contains a self-contained static build of the portfolio that is
served by GitHub Pages at `https://sunnytambi.github.io/portfolio/`.

## One-time setup

1. Push this repository to GitHub as `sunnytambi/portfolio` (the repo name
   MUST be `portfolio` to match the URL above).
2. In the repo on GitHub, go to **Settings → Pages**.
3. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
4. Set **Branch** to `main` and **Folder** to `/docs`. Click **Save**.
5. Wait ~30 seconds, then visit https://sunnytambi.github.io/portfolio/.

That's it. There is no build step — the page is plain HTML + a Tailwind CDN
script, so any edits to `docs/index.html` go live after you push to `main`.

## Updating content

Edit `docs/index.html` directly. The page mirrors the Lovable app's
content (hero, metrics, experience, skills, contact). The experience,
skills, and contact arrays live in the `<script>` block near the bottom
of the file.

## Why a separate static file?

The Lovable app uses TanStack Start with server-side rendering, which
GitHub Pages (static-only) cannot run. This `docs/index.html` is a
hand-mirrored static version that has no build dependency and deploys
instantly via GitHub Pages' built-in branch-folder option.

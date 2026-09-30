# Chengyu Fang — personal website

Live address: https://chengyufang.org/

Publish this repository as a **project site** (`chengyu-ucsb/personal-website`) with `chengyufang.org` configured as its custom domain. Keep the separate `chengyu-ucsb.github.io` account site without a custom domain so other project sites retain their `https://chengyu-ucsb.github.io/<repository>/` URLs.

A static, multi-page academic website. The HTML, CSS, JavaScript, and images are in the repository root; there is no build step.

## Editing

- `index.html`: home page
- `research.html`, `publications.html`, `teaching.html`, `activities.html`, `about.html`: subpages
- `styles.css`: layout and visual style
- `site.js`: navigation menus
- `assets/`: figures and presentation photograph

Edit the files and commit to the default branch. GitHub Pages publishes updates from the branch root. Internal links are relative, so they work on the project Pages URL and on the custom domain. Keep `CNAME` in the publishing root to preserve the custom domain.

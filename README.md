# Personal website

This repository contains the source for [chengyufang.org](https://chengyufang.org/). The site uses plain HTML, CSS, and JavaScript and is published with GitHub Pages.

## Files

- `index.html` is the home page. The other pages are in the `about/`, `research/`, `publications/`, `teaching/`, and `activities/` folders.
- `styles.css` controls the layout and colors; `site.js` handles the navigation menus.
- `assets/` contains images and figures.

To edit a page, open its `index.html` file. The older `.html` addresses redirect to the corresponding folders.

## Preview and publish

Run `python3 -m http.server 8000` and open `http://localhost:8000/` to preview the site locally. Commit changes to `main` to publish them. Keep `CNAME` in the repository root while the site uses `chengyufang.org`.

This is a public repository, so keep private drafts and student information out of it.

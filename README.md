# Chengyu Fang's website

This repository contains the files for [chengyufang.org](https://chengyufang.org/), my academic website. It includes pages about my research, publications, teaching, academic activities, and background.

## Site files

- `index.html` is the home page.
- `research/`, `publications/`, `teaching/`, `activities/`, and `about/` contain the other pages. Each folder has an `index.html` file, which gives the page a short URL such as `/research/`.
- `styles.css` controls the layout and colors; `site.js` handles the navigation menus.
- `assets/` contains images and figures used on the site.

The older `.html` page addresses redirect to the shorter URLs.

## Previewing and updating

The site uses plain HTML, CSS, and JavaScript. There is no build step. To preview it locally, run:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

GitHub Pages publishes the `main` branch from the repository root. Committing a change there updates the live site. The `CNAME` file connects this repository to `chengyufang.org`; keep it in the root while using this domain.

This is a public repository, so only website files and material intended for public reading belong here.
